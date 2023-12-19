<?php

namespace App\Http\Controllers\Admin;

use App\Enums\StatusEnum;
use App\Http\Controllers\Controller;
use App\Models\Ban;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class OrderController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $orders = Order::withTrashed();
        if ($request->has('deleted') && !empty($request->get('deleted'))) {
            if ($request->get('deleted') == 'yes') {
                $orders = Order::onlyTrashed();
            } elseif ($request->get('deleted') == 'no') {
                $orders = Order::query();
            }
        }
        $orders = $orders->select(['*', DB::raw("DATE_FORMAT(created_at, '%Y-%m-%d') as formatted_date")]);
        if ($request->has('status') && !empty($request->get('status'))) {
            $orders = $orders->where(['status' => $request->get('status')]);
        }
        if ($request->has('ip') && !empty($request->get('ip'))) {
            $orders = $orders->where(['ipAddress' => $request->get('ip')]);
        }

        if ($request->has('country') && !empty($request->get('country'))) {
            $orders = $orders->where(['countryName' => $request->get('country')]);
        }

        if ($request->has('date') && !empty($request->get('date'))) {
            $start = explode(' - ', $request->get('date'))[0];
            $end = explode(' - ', $request->get('date'))[1];

            if ($start === $end) {
                $orders = $orders->having('formatted_date', '=', $start);
            } else {
                $orders = $orders->havingBetween('formatted_date', [$start, $end]);
            }
        }

        $orders = $orders->orderBy('created_at', 'desc')->paginate(50);


        return view('admin.orders.index', [
            'orders' => $orders
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $data = $request->validate([
            'status' => ['required', 'in:' . implode(',', StatusEnum::values())],
            'toQty' => ['required', 'numeric', 'min:' . setting('min_amount_btc', 0.01)]
        ],['toQty.required'=>'Сумма обязательно к заполнению']);
        $order = Order::withTrashed()->findOrFail($id);
        $order->update($data);
        return back()->with('success', 'Данные успешно сохранены');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, string $id)
    {
        if ($request->has('delete_ids') && $ids = $request->get('delete_ids')) {
            Order::withTrashed()->whereIn('id', $ids)->forceDelete();
            $message = 'Выбранные заметки удалены';
        } elseif ($request->has('delete_all')) {
            if ($password = $request->get('password')) {
                if (Hash::check($password, auth()->user()->password)) {
                    Order::withTrashed()->forceDelete();
                    $message = 'Все заметки удалены';
                } else {
                    $message = 'Неправильный пароль';
                }
            } else {
                $message = 'Требуется пароль';
            }
        } else {
            $order = Order::withTrashed()->findOrFail($id);
            $order->forceDelete();
            $message = 'Заметка удалена';
        }


        return back()->with('error', $message);
    }

    public function banIp(Request $request)
    {
        $ip = $request->input('ip');
        $ban = Ban::withTrashed()->whereIp($ip)->first();
        (!is_null($ban) && $ban->trashed())
            ? $ban->restore()
            : Ban::create(['ip' => $ip]);
        return back();
    }

    /**
     * Handle unban ip form.
     */
    public function unbanIp(Request $request)
    {
        $ip = $request->input('ip');
        Ban::whereIp($ip)->delete();
        return back();
    }

    /**
     * Get IP Addresses.
     */
    public function getIpAddresses(Request $request)
    {
        $search = $request->q;
        $ipAddresses = Order::withTrashed()->selectRaw('ipAddress as ip')->where('ipAddress', 'LIKE', "%$search%");

        if ($search) {
            $ipAddresses = $ipAddresses->where('ipAddress', 'LIKE', "%$search%");
        }
        $ipAddresses = $ipAddresses->groupBy('ipAddress')->paginate(20, ['*'], 'page', $request->page)->toArray();
        return response()->json($ipAddresses);
    }

    /**
     * Get Countries.
     */
    public function getCountries(Request $request)
    {
        $search = $request->q;
        $countries = Order::withTrashed()->select('countryName')->where('ipAddress', 'LIKE', "%$search%");
        if ($search) {
            $countries = $countries->where('ipAddress', 'LIKE', "%$search%");
        }
        $countries = $countries->groupBy('countryName')->paginate(20, ['*'], 'page', $request->page)->toArray();
        return response()->json($countries);
    }
}
