<?php

namespace App\Http\Controllers;

use App\Enums\StatusEnum;
use App\Models\AddressBook;
use App\Models\Coin;
use App\Models\Order;
use App\Models\ReferralLink;
use App\Models\User;
use App\Services\FixedFloatApi;
use App\Services\GeetestApi;
use App\Services\IpWhoisApi;
use App\Services\WhirFixedFloatApi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\RateLimiter;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Validation\Rules\Password;
use SimpleSoftwareIO\QrCode\Facades\QrCode;
use Throwable;

class AjaxController extends Controller
{
    private function geeTest()
    {
        return (new GeetestApi(setting('geetest_id'), setting('geetest_key')));
    }

    private function geeTestInit()
    {
        return $this->geeTest()->localInit();
    }

    private function geeTestValidate(Request $request)
    {
        $gt = $this->geeTest();
        return $gt->successValidate($request->get('geetest_challenge'), $request->get('geetest_validate'), $request->get('geetest_seccode'), $request->all());
    }

    public function userAcceptCookies(Request $request)
    {
        $minutes = 7 * 24 * 60; // week
        $cookie = cookie('allowCookie', serialize($request->only(['tz', 'ts', 'tt'])), $minutes);

        return response(['code' => 0, 'data' => null, 'msg' => 'OK'])->cookie($cookie);
    }

    public function userCaptchaInit()
    {
        $res = $this->geeTestInit();
        return response(['code' => $res->getStatus(), 'data' => json_decode($res->getData(), true), 'msg' => $res->getMsg()]);
    }

    public function userSignUp(Request $request)
    {
        $res = $this->geeTestValidate($request);
        if ($res->getStatus() !== 0) {
            return response(['code' => 606, 'data' => $res->getData(), 'msg' => $res->getMsg()]);
        }

        $validator = Validator::make($request->all(), [
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:' . User::class],
            'pswd' => ['required', Password::defaults()],
        ]);
        if ($validator->fails()) {
            return response(['code' => 701, 'data' => null, 'msg' => $validator->errors()->first()]);
        }

        $user = User::create([
            'email' => $request->email,
            'password' => Hash::make($request->pswd),
        ]);

        $user->referralLinks()->create(['code' => unique_ref()]);

        Auth::login($user);

        return response(['code' => 0, 'data' => null, 'msg' => 'OK']);
    }

    public function userSignIn(Request $request)
    {
        $res = $this->geeTestValidate($request);
        if ($res->getStatus() !== 0) {
            return response(['code' => 606, 'data' => $res->getData(), 'msg' => $res->getMsg()]);
        }
        $data = ['email' => $request->get('email'), 'password' => $request->get('pswd')];
        $validator = Validator::make($data, [
            'email' => ['required', 'string', 'email'],
            'password' => ['required', 'string'],
        ]);
        if ($validator->fails()) {
            return response(['code' => 1, 'data' => null, 'msg' => $validator->errors()->first()]);
        }
        $throttleKey = Str::lower($data['email']) . '|' . $request->ip();
        if (RateLimiter::tooManyAttempts($throttleKey, 5)) {
            $seconds = RateLimiter::availableIn(Str::transliterate($throttleKey));
            return response(['code' => 1, 'data' => null, 'msg' => trans('auth.throttle', [
                'seconds' => $seconds,
                'minutes' => ceil($seconds / 60),
            ])]);
        }

        if (!Auth::attempt($data, $request->boolean('remember'))) {
            RateLimiter::hit($throttleKey);
            return response(['code' => 1, 'data' => null, 'msg' => trans('auth.failed')]);
        }

        RateLimiter::clear($throttleKey);

        $request->session()->regenerate();

        return response(['code' => 0, 'data' => null, 'msg' => 'OK']);
    }

    public function userSignOut(Request $request)
    {
        Auth::guard('web')->logout();

        $request->session()->invalidate();

        $request->session()->regenerateToken();

        return response(['code' => 0, 'data' => null, 'msg' => 'OK']);
    }


    public function userAddressBook(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'coin' => ['required'],
            'network' => ['required'],
            'address' => ['sometimes', 'nullable'],
        ]);
        if ($validator->fails()) {
            return response(['code' => 1, 'data' => null, 'msg' => $validator->errors()->first()]);
        }
        $user = $request->user();
        $addressBooks = $user->addressBooks()->when($request->get('address'), function ($query, $address) {
            $query->where('address', 'LIKE', '%' . $address . '%');
        })->get()->map(function (AddressBook $addressBook) {
            return [
                'address' => $addressBook->address,
                'coin' => $addressBook->coin,
                'network' => $addressBook->network,
                'tag' => $addressBook->tag ?? '',
                'favorite' => '1',
                'universal' => $addressBook->universal ?? '0',
            ];
        });

        $last = $user->orders()->orderByDesc('id')->take(3)->get()->map(function (Order $order) use ($user) {
            $addressBook = $user->addressBooks()->where([
                ['coin', $order->toCcy],
                ['address', $order->toAddress]
            ])->first();

            return [
                'address' => $order->toAddress,
                'coin' => $order->toCcy,
                'network' => 'BTC',
                'tag' => $addressBook->tag ?? '',
                'favorite' => is_null($addressBook) ? '0' : '1',
                'universal' => $addressBook->universal ?? '0',
            ];
        });
        return response(['code' => 0, 'data' => [
            'fav' => $addressBooks,
            'info' => null,
            'last' => $last,
        ], 'msg' => 'OK']);
    }

    public function userSwitchEmailNoticeOrders(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'enabled' => ['required', 'in:true,false']
        ]);

        if ($validator->fails()) {
            return response(['code' => 1, 'data' => null, 'msg' => $validator->errors()->first()]);
        }

        $data = $validator->validated();
        $user = $request->user();
        $success = $user->update(['notify' => $data['enabled'] === 'true']);
        return response(['code' => (int)!$success, 'data' => $success, 'msg' => 'OK']);
    }

    public function apikeyGenerate(Request $request)
    {
        $res = $this->geeTestValidate($request);

        if ($res->getStatus() !== 0) {
            return response(['code' => 606, 'data' => $res->getData(), 'msg' => $res->getMsg()]);
        }

        $user = $request->user();
        $user->tokens()->whereIn('personal_access_tokens.name', ['api_key', 'api_secret'])->delete();
        [, $apiKey] = explode('|', $user->createToken('api_key')->plainTextToken);
        $user->createToken('api_secret')->plainTextToken;
        return response(['code' => 0, 'data' => ['key' => $apiKey, 'time' => 60], 'msg' => 'OK']);
    }

    public function apikeyDelete(Request $request)
    {
        $user = $request->user();
        $user->tokens()->whereIn('personal_access_tokens.name', ['api_key', 'api_secret'])->delete();
        return response(['code' => 0, 'data' => true, 'msg' => 'OK']);
    }

    public function userAddressFavorite(Request $request)
    {

        $user = $request->user();
        $addressBook = $user->addressBooks()->where([
            ['coin', $request->get('coin')],
            ['network', $request->get('network')],
            ['address', $request->get('address')],
        ])->first();
        if (!is_null($addressBook) && $request->get('favorite') === 'false') {
            $addressBook->delete();
        } elseif (is_null($addressBook) && $request->get('favorite') !== 'false') {
            $user->addressBooks()->create([
                'coin' => $request->get('coin'),
                'network' => $request->get('network'),
                'address' => $request->get('address'),
            ]);
        }
        return response(['code' => 0, 'data' => true, 'msg' => 'OK']);
    }

    public function apikeyGetSecret(Request $request)
    {
        $user = $request->user();
        $tokens = $user->tokens()->whereIn('personal_access_tokens.name', ['api_key', 'api_secret'])->get();
        $data = [];
        foreach ($tokens as $token) {
            $key = $token->name === 'api_key' ? 'key' : 'secret';
            $data[$key] = $token->token;
        }
        return response(['code' => 0, 'data' => $data, 'msg' => 'OK']);
    }

    public function userAddressBookList(Request $request)
    {
        $user = $request->user();
        $addressBooks = $user
            ->addressBooks()
            ->paginate($request->get('per', 25), ['*'], 'page', $request->get('page'));

        return response(['code' => 0, 'data' => [
            'count' => $addressBooks->total(),
            'order' => ['dir' => strtoupper($request->get('order', 'desc')), 'field' => 'created_at'],
            'page' => $addressBooks->currentPage(),
            'pages' => $addressBooks->lastPage() - $addressBooks->currentPage(),
            'per' => $addressBooks->perPage(),
            'rows' => $addressBooks->items(),
        ], 'msg' => 'OK']);
    }

    public function userAddressFavoriteAdd(Request $request)
    {
        $universal = $request->get('universal') === 'on';
        $validator = Validator::make($request->all(), [
            'coin' => $universal ? ['sometimes', 'nullable'] : ['required'],
            'network' => ['required'],
            'address' => ['required'],
            'tag' => ['sometimes', 'nullable'],
        ]);
        if ($validator->fails()) {
            return response(['code' => 701, 'data' => null, 'msg' => $validator->errors()->first()]);
        }
        $data = $validator->validated();
        $data['universal'] = $universal;

        $user = $request->user();
        $addressBooks = $user
            ->addressBooks()
            ->create($data);

        return response(['code' => 0, 'data' => true, 'msg' => 'OK']);
    }

    public function userAddressFavoriteDel(Request $request)
    {
        if ($request->user()->addressBooks()->where([
            ['network', $request->get('network')],
            ['address', $request->get('address')]
        ])->delete()) {
            return response(['code' => 0, 'data' => true, 'msg' => 'OK']);
        }
        return response(['code' => 1, 'data' => null, 'msg' => trans('Not Found')]);
    }

    public function userChangeEmail(Request $request)
    {
        $res = $this->geeTestValidate($request);
        if ($res->getStatus() !== 0) {
            return response(['code' => 606, 'data' => $res->getData(), 'msg' => $res->getMsg()]);
        }
        $user = $request->user();
        $validator = Validator::make($request->all(), [
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', "unique:users"],
            'pswd' => ['required']
        ]);

        if ($validator->fails()) {
            return response(['code' => 701, 'data' => null, 'msg' => $validator->errors()->first()]);
        }
        $data = $validator->validated();
        if (!Hash::check($data['pswd'], $user->password)) {
            return response(['code' => 704, 'data' => null, 'msg' => trans('current_password')]);
        }

        $user->update(['email' => $data['email'], 'email_verified_at' => null]);
        return response(['code' => 0, 'data' => true, 'msg' => 'OK']);
    }

    public function userChangePswd(Request $request)
    {
        $res = $this->geeTestValidate($request);
        if ($res->getStatus() !== 0) {
            return response(['code' => 606, 'data' => $res->getData(), 'msg' => $res->getMsg()]);
        }
        $user = $request->user();
        $validator = Validator::make($request->all(), [
            'newpswd' => ['required', Password::defaults()],
            'pswd' => ['required']
        ]);

        if ($validator->fails()) {
            return response(['code' => 704, 'data' => null, 'msg' => $validator->errors()->first()]);
        }
        $data = $validator->validated();
        if (!Hash::check($data['pswd'], $user->password)) {
            return response(['code' => 704, 'data' => null, 'msg' => trans('current_password')]);
        }

        $user->update(['password' => Hash::make($data['newpswd'])]);
        return response(['code' => 0, 'data' => true, 'msg' => 'OK']);
    }

    public function userOrders(Request $request)
    {
        $user = $request->user();
        $orders = $user
            ->orders()
            ->when($request->get('type'), function ($query, $type) {
                $query->where('type', $type);
            })
            ->when($request->input('filter.status', []), function ($query, $status) {
                if (!empty($status)) {
                    $statuses = in_array("4", $status, true)
                        ? [StatusEnum::DONE->value]
                        : [
                            StatusEnum::NEW->value,
                            StatusEnum::PENDING->value,
                            StatusEnum::EXCHANGE->value,
                            StatusEnum::WITHDRAW->value,
                            StatusEnum::EMERGENCY->value,
                            StatusEnum::REFUND->value,
                        ];
                    $query->whereIn('status', $statuses);
                }

            })
            ->orderBy('created_at', $request->get('order', 'desc'))
            ->paginate($request->get('per', 25), ['*'], 'page', $request->get('page'));

        return response(['code' => 0, 'data' => [
            'count' => $orders->total(),
            'order' => ['dir' => strtoupper($request->get('order', 'desc')), 'field' => '_id'],
            'page' => $orders->currentPage(),
            'pages' => $orders->lastPage() - $orders->currentPage(),
            'per' => $orders->perPage(),
            'rows' => $orders->items(),
        ], 'msg' => 'OK']);
    }

    public function userAffiliateOrders(Request $request)
    {

        $user = $request->user();
        $orders = $user
            ->referrals()
            ->when($request->get('type'), function ($query, $type) {
                $query->where('type', $type);
            })
            ->when($request->input('filter.status', []), function ($query, $status) {
                if (!empty($status)) {
                    $statuses = in_array("4", $status, true)
                        ? [StatusEnum::DONE->value]
                        : [
                            StatusEnum::NEW->value,
                            StatusEnum::PENDING->value,
                            StatusEnum::EXCHANGE->value,
                            StatusEnum::WITHDRAW->value,
                            StatusEnum::EMERGENCY->value,
                            StatusEnum::REFUND->value,
                        ];
                    $query->whereIn('status', $statuses);
                }

            })
            ->orderBy('created_at', $request->get('order', 'desc'))
            ->paginate($request->get('per', 25), ['*'], 'page', $request->get('page'));

        return response(['code' => 0, 'data' => [
            'count' => $orders->total(),
            'order' => ['dir' => strtoupper($request->get('order', 'desc')), 'field' => '_id'],
            'page' => $orders->currentPage(),
            'pages' => $orders->lastPage() - $orders->currentPage(),
            'per' => $orders->perPage(),
            'rows' => $orders->items(),
            'filter' => $request->input('filter', []),
        ], 'msg' => 'OK']);
    }

    public function userGenerateRefCode(Request $request)
    {

        $refCode = unique_ref();
        $request->user()->referralLinks()->create(['code' => $refCode]);

        return response(['code' => 0, 'data' => [
            'afftax_api' => "0",
            'afftax_web' => "0.4",
            'ref_code' => $refCode,
        ], 'msg' => 'OK']);
    }

    public function userPayouts(Request $request)
    {
        $payouts = $request
            ->user()
            ->payouts()
            ->paginate($request->get('per', 25), ['*'], 'page', $request->get('page'));

        return response(['code' => 0, 'data' => [
            'count' => $payouts->total(),
            'order' => ['dir' => strtoupper($request->get('order', 'desc')), 'field' => 'created_at'],
            'page' => $payouts->currentPage(),
            'pages' => $payouts->lastPage() - $payouts->currentPage(),
            'per' => $payouts->perPage(),
            'rows' => $payouts->items(),
        ], 'msg' => 'OK']);
    }

    public function userPayoutCreate(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'address' => ['required', 'btc_address'],
        ]);
        if ($validator->fails()) {
            return response(['code' => 1, 'data' => null, 'msg' => $validator->errors()->first()]);
        }

        $data = $validator->validated();
        $payout = $request->user()->payouts()->create($data);

        return response(['code' => 0, 'data' => $payout, 'msg' => 'OK']);
    }

    public function userDeleteRefCode(Request $request)
    {
        $request->user()->referralLinks()->where('code', $request->get('ref'))->delete();

        return response(['code' => 0, 'data' => true, 'msg' => 'OK']);
    }

    public function exchPrice(Request $request)
    {
        $params = $request->only(['type', 'fromCcy', 'toCcy', 'toAmount', 'usd', 'fromAmount']);
        $direction = isset($params['toAmount']) ? 'to' : 'from';
        $amount = $direction === 'to' ? $params['toAmount'] : $params['fromAmount'];
        $data = array_filter([
            'fromCcy' => $params['fromCcy'] ?? null,
            'toCcy' => $params['toCcy'] ?? null,
            'amount' => $amount,
            'direction' => $direction,
            'type' => $params['type'] ?? null,
            'usd' => $params['usd'] ?? null,
            'ccies' => true,
        ]);
        $validator = Validator::make($data, [
            'type' => ['required', 'in:' . implode(',', [FixedFloatApi::TYPE_FIXED, FixedFloatApi::TYPE_FLOAT])],
            'fromCcy' => ['required'],
            'toCcy' => ['required'],
            'direction' => ['required', 'in:from,to'],
            'amount' => ['required', 'min:0'],
            'usd' => ['sometimes', 'nullable'],
            'ccies' => ['required', 'boolean'],
        ]);

        try {
            if ($validator->fails()) {
                throw new \Exception($validator->errors()->first(), 1);
            }

            $api = match (setting('courses_from_api')) {
                'whsir' => new WhirFixedFloatApi(),
                'fixedfloat' => new FixedFloatApi(setting('fixedfloat_api_key'), setting('fixedfloat_api_secret')),
                default => throw new \Exception('Апи для курсов не выбрана ', 1),
            };
            $validate = $validator->validate();
            $courses = $api->price($validate);
            Cache::put('courses_update_at', now());
            Cache::put('fixedfloat_api_has_error', false);
            return response(['code' => FixedFloatApi::RESP_OK, 'data' => $courses, 'msg' => 'OK']);
        } catch (Throwable $exception) {
            if ($exception->getCode() !== 1) {
                Cache::put('fixedfloat_api_has_error', true);
            }

            return response(['code' => $exception->getCode(), 'data' => null, 'msg' => $exception->getMessage()]);
        }

    }

    public function exchCheckAddress(Request $request)
    {
        $currencyValidation = ($request->get('currency') === 'BTC' ? 'btc_address' : 'string');

        $validator = Validator::make($request->all(), [
            'currency' => ['required'],
            'address' => ['required', $currencyValidation],
            'tag' => ['sometimes', 'nullable'],
        ]);
        if ($validator->fails()) {
            return response(['code' => 301, 'data' => null, 'msg' => $validator->errors()->first()]);
        }
        $data = $validator->validated();
        return response(['code' => FixedFloatApi::RESP_OK, 'data' => [
            'amount' => null,
            'valid' => true,
            'valid_address' => true,
            'result_address' => $data['address'],
        ], 'msg' => 'OK']);
    }

    public function exchCreate(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'fromCcy' => ['required'],
            'toCcy' => ['required'],
            'type' => ['required'],
            'toAddress' => ['required'],
            'tz' => ['required'],
            'ts' => ['required'],
            'tt' => ['required'],
            'fromQty' => ['required'],
        ]);

        if ($validator->fails()) {
            return response(['code' => 1, 'data' => null, 'msg' => $validator->errors()->first()]);
        }
        $data = $validator->validated();
        $oldOrder = Order::where([
            ['fromCcy', $data['fromCcy']],
            ['toCcy', $data['toCcy']],
            ['toAddress', $data['toAddress']],
        ])->first();
        if (!is_null($oldOrder)) {
            return response(['code' => 0, 'data' => $oldOrder->num, 'msg' => 'OK']);
        }

        $coin = Coin::whereName($data['fromCcy'])->whereHas('wallets', function ($query) {
            $query->where('enabled', true);
        })->with(['wallets' => function ($query) {
            $query->where('enabled', true)->inRandomOrder()->take(1);
        }])->first();
        if (is_null($coin)) {
            return response(['code' => 300, 'data' => null, 'msg' => __('Error')]);
        }
        $user = $request->user();
        $wallet = $coin->wallets->first();
        $data['fromAddress'] = $wallet->address;
        $data['user_id'] = $user?->id;
        $data['email'] = $user?->email;
        $data['num'] = unique_order_num();
        if ($referralLink = ReferralLink::find($request->cookie('referral_link_id'))) {
            $data['referral_link_id'] = $referralLink->id;
        }

        $data['ipAddress'] = $request->server('HTTP_CF_CONNECTING_IP', $request->ip());
        $data['userAgent'] = $request->userAgent();
        $data['qrSum'] = $this->qrGenerate($data['fromAddress'], $data['fromQty']);
        $data['qrAddress'] = $this->qrGenerate($data['fromAddress']);
        try {
            $ipDetails = IpWhoisApi::getData($data['ipAddress']);
            $data['countryFlag'] = $ipDetails['flag']['img'] ?? null;
            $data['countryName'] = $ipDetails['country'] ?? null;
        } catch (Throwable $throwable) {
            Log::error(__METHOD__ . ' - ' . $throwable->getMessage());
        }
        $order = new Order($data);
        $success = $order->save();
        return response(['code' => (int)!$success, 'data' => $order->num, 'msg' => 'OK']);
    }

    private function qrGenerate($btcAddress, $amount = null)
    {
        try {
            $format = 'png';
            $qr = QrCode::encoding('UTF-8')
                ->format($format)
                ->size(205)
                ->style('square');
            $text = is_null($amount) ? $btcAddress : "$btcAddress?amount=$amount";
            $img = $qr
                ->errorCorrection('H')
                ->generate($text);
            return 'data:image/png;base64,' . base64_encode($img);
        } catch (Throwable $throwable) {
            Log::error(__METHOD__ . ' - ' . $throwable->getMessage());
        }
        return null;
    }

    public function orderStatus(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id' => ['required', 'exists:orders,num'],
        ]);

        if ($validator->fails()) {
            return response(['code' => 1, 'data' => null, 'msg' => $validator->errors()->first()]);
        }
        $data = $validator->validate();
        $order = Order::whereNum($data['id'])->first();
        $order->status = strtoupper($order->status);
        return response(['code' => 0, 'data' => $order, 'msg' => 'OK']);
    }

    public function orderSetEmail(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'id' => ['required', 'exists:orders,num'],
            'email' => ['required', 'email'],
        ]);

        if ($validator->fails()) {
            return response(['code' => 1, 'data' => null, 'msg' => $validator->errors()->first()]);
        }
        $data = $validator->validate();

        $order = Order::whereNum($data['id'])->first();
        $order->update(['email' => $data['email']]);
        return response(['code' => 0, 'data' => $data['email'], 'msg' => 'OK']);
    }

    public function orderAddressInfo(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'currency' => ['required', 'exists:coins,name'],
            'address' => ['required']
        ]);

        if ($validator->fails()) {
            return response(['code' => 1, 'data' => null, 'msg' => $validator->errors()->first()]);
        }

        return response(['code' => 0, 'data' => null, 'msg' => 'OK']);
    }

    public function orderSetEmergency(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id' => ['required', 'exists:orders,num'],
            'choice' => ['required', 'in:' . implode(',', [StatusEnum::REFUND->name, StatusEnum::EXCHANGE->name])],
            'address' => ['sometimes', 'nullable']
        ]);

        if ($validator->fails()) {
            return response(['code' => 1, 'data' => null, 'msg' => $validator->errors()->first()]);
        }
        $data = $validator->validate();
        $data['status'] = strtolower($data['choice']);
        unset($data['choice']);
        if (isset($data['address'])) {
            $data['toAddress'] = $data['address'];
            unset($data['address']);
        }
        $order = Order::whereNum($data['id'])->first();
        unset($data['id']);
        //$data['created_at'] = now();
        $order->update($data);
        return response(['code' => 0, 'data' => $order, 'msg' => 'OK']);
    }

    public function orderGetDetails(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'id' => ['required', 'exists:orders,num']
        ]);

        if ($validator->fails()) {
            return response(['code' => 1, 'data' => null, 'msg' => $validator->errors()->first()]);
        }
        $data = $validator->validate();
        $order = Order::whereNum($data['id'])->first();
        $diff = now()->diff($order->created_at->addMinutes(30));
        $order->status = $diff->invert && $order->status === StatusEnum::NEW->value
            ? StatusEnum::EXPIRED->value
            : $order->status;
        $minute = (strlen($diff->i) > 1 ? $diff->i : '0' . $diff->i);
        $second = (strlen($diff->s) > 1 ? $diff->s : '0' . $diff->s);
        $order->dateTime = $diff->invert ? "00:00" : "$minute:$second";
        $order->status = strtoupper($order->status);
        return response(['code' => 0, 'data' => $order, 'msg' => 'OK']);
    }
}
