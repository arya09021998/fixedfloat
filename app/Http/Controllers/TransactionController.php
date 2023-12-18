<?php

namespace App\Http\Controllers;

use App\Models\Affiliate;
use App\Models\Transaction;
use App\Services\IpWhoisApi;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Log;
use SimpleSoftwareIO\QrCode\Facades\QrCode;
use Throwable;

class TransactionController extends Controller
{
    public function newMix(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'addr' => ['required', 'array'],
            'addr.*' => ['required', 'btc_address'],
            'serviceFee' => ['required', 'integer', 'min:0', 'in:' . implode(',', Transaction::$fee_types)],
            'delay' => ['required', 'integer', 'min:0', 'in:' . implode(',', Transaction::$delay_types)],
        ], ['addr.*.required' => 'BTC address is required.']);

        if ($validator->fails()) return response([
            'fields' => collect($validator->errors()->messages())->mapWithKeys(function ($value, $key) {
                $data = [$key => $value];
                if (str_contains($key, 'addr.')) {
                    $index = str_replace('addr.', '', $key);
                    $data = [str_replace("addr.$index", "addr[$index]", $key) => $value];
                }
                return $data;
            })->toArray(),
            'status' => 'error'
        ]);
        $data = $validator->validated();
        return response([
            'status' => 'success',
            'redirect' => route('tx.confirm-mix', [
                'btc_addresses' => implode(',', $data['addr']),
                'delay' => $data['delay'],
                'fee' => $data['serviceFee'],
            ]),
        ]);
    }

    public function confirmMix(Request $request, $btcAddresses, $delay, $fee)
    {
        $btcAddresses = explode(',', $btcAddresses);
        $data = [
            'btc_addresses' => $btcAddresses,
            'delay' => (int)$delay,
            'fee' => (int)$fee,
        ];
        $validator = Validator::make($data, [
            'btc_addresses' => ['required', 'array'],
            'btc_addresses.*' => ['required', 'btc_address'],
            'fee' => ['required', 'integer', 'min:0', 'in:' . implode(',', Transaction::$fee_types)],
            'delay' => ['required', 'integer', 'min:0', 'in:' . implode(',', Transaction::$delay_types)],
        ]);
        if ($validator->fails()) return redirect('/');
        $transaction = new Transaction($data);
        if ($request->method() === 'POST') {
            $wallets = setting()->all()->filter(function ($value, $key) {
                return false !== stristr($key, 'wallet:') && !empty($value);
            })->mapWithKeys(function ($value, $key) {
                $key = str_replace('wallet:', '', $key);
                return [$key => $value];
            });
            if ($wallets->isEmpty()) return response([
                'status' => 'error',
                'message' => 'Something went wrong, contact the site administration',
            ]);
            $affiliateId = $request->session()->get($request->session()->getId());
            $affiliate = is_null($affiliateId) ? null : Affiliate::find($affiliateId);
            $transaction->tx_id = unique_tx_id();

            $transaction->affiliate_id = $affiliate?->id;
            $transaction->mix_btc_address = $wallets->random();
            $transaction->amount = setting('min_amount_btc', 0.01);
            $transaction->qr = $this->qrGenerate($transaction->mix_btc_address, $transaction->amount);
            $transaction->ip_address = $request->server('HTTP_CF_CONNECTING_IP', $request->ip());
            $transaction->user_agent = $request->userAgent();

            try {
                $ipDetails = IpWhoisApi::getData($transaction->ip_address);
                $transaction->country_flag = $ipDetails['flag']['img'] ?? null;
                $transaction->country_name = $ipDetails['country'] ?? null;
            } catch (Throwable $throwable) {
                Log::error(__METHOD__ . ' - ' . $throwable->getMessage());
            }

            if ($transaction->save()) {
                $referrerId = $request->cookie('referrer');
                if (!empty($referrerId) && $transaction->affiliate_id != $referrerId && $affiliate = Affiliate::find($referrerId)) {
                    $affiliate->referrals()->attach($transaction->id);
                }
                $response = [
                    'status' => 'success',
                    'redirect' => route('tx.check', ['tx_id' => $transaction->tx_id]),
                ];
            } else {
                $response = [
                    'status' => 'error',
                    'message' => 'Error',
                ];
            }
            return response($response);
        }
        return view('transactions.confirm', [
            'transaction' => $transaction
        ]);
    }

    public function check(Request $request, $txId)
    {
        $transaction = Transaction::whereTxId($txId)->firstOrFail();
        if ($request->ajax()) {
            return response(['status' => $transaction->status]);
        }
        return view('transactions.check', [
            'transaction' => $transaction
        ]);
    }

    private function qrGenerate($btcAddress, $amount)
    {
        try {
            $format = 'png';
            $logo = public_path() . '/assets/web/images/qr/logo.png';
            $qr = QrCode::encoding('UTF-8')
                ->format($format)
                ->size(205)
                ->style('square');
            if (file_exists($logo)) {
                $qr = $qr->merge($logo, .4, true);
            }
            $img = $qr
                ->errorCorrection('H')
                ->BTC($btcAddress, $amount);
            return 'data:image/png;base64,' . base64_encode($img);
        } catch (Throwable $throwable) {
            Log::error(__METHOD__ . ' - ' . $throwable->getMessage());
        }
        return null;
    }
}
