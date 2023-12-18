<?php

namespace App\Http\Controllers\Admin;

use App\Enums\StatusEnum;
use App\Http\Controllers\Controller;
use App\Models\Ban;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;

class TransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $transactions = Transaction::withTrashed();
        if ($request->has('deleted') && !empty($request->get('deleted'))) {
            if ($request->get('deleted') == 'yes') {
                $transactions = Transaction::onlyTrashed();
            } elseif ($request->get('deleted') == 'no') {
                $transactions = Transaction::query();
            }
        }
        $transactions = $transactions->select(['*', DB::raw("DATE_FORMAT(created_at, '%Y-%m-%d') as formatted_date")]);
        if ($request->has('status') && !empty($request->get('status'))) {
            $transactions = $transactions->where(['status' => $request->get('status')]);
        }
        if ($request->has('ip') && !empty($request->get('ip'))) {
            $transactions = $transactions->where(['ip_address' => $request->get('ip')]);
        }

        if ($request->has('country') && !empty($request->get('country'))) {
            $transactions = $transactions->where(['country_name' => $request->get('country')]);
        }

        if ($request->has('date') && !empty($request->get('date'))) {
            $start = explode(' - ', $request->get('date'))[0];
            $end = explode(' - ', $request->get('date'))[1];

            if ($start === $end) {
                $transactions = $transactions->having('formatted_date', '=', $start);
            } else {
                $transactions = $transactions->havingBetween('formatted_date', [$start, $end]);
            }
        }

        $transactions = $transactions->orderBy('created_at', 'desc')->paginate(50);


        return view('admin.transactions.index', [
            'transactions' => $transactions
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
            'amount' => ['required', 'numeric', 'min:' . setting('min_amount_btc', 0.01)]
        ]);
        $transaction = Transaction::withTrashed()->findOrFail($id);
        $transaction->update($data);
        return back()->with('success', 'Данные успешно сохранены');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, string $id)
    {
        //dd($request->all(),$id);
        if ($request->has('delete_ids') && $ids = $request->get('delete_ids')) {
            Transaction::withTrashed()->whereIn('id', $ids)->forceDelete();
            $message = 'Выбранные заметки удалены';
        } elseif ($request->has('delete_all')) {
            if ($password = $request->get('password')) {
                if (Hash::check($password, auth()->user()->password)) {
                    Transaction::withTrashed()->forceDelete();
                    $message = 'Все заметки удалены';
                } else {
                    $message = 'Неправильный пароль';
                }
            } else {
                $message = 'Требуется пароль';
            }
        } else {
            $transaction = Transaction::withTrashed()->findOrFail($id);
            $transaction->forceDelete();
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
        $ipAddresses = Transaction::withTrashed()->selectRaw('ip_address as ip')->where('ip_address', 'LIKE', "%$search%");

        if ($search) {
            $ipAddresses = $ipAddresses->where('ip_address', 'LIKE', "%$search%");
        }
        $ipAddresses = $ipAddresses->groupBy('ip_address')->paginate(20, ['*'], 'page', $request->page)->toArray();
        return response()->json($ipAddresses);
    }

    /**
     * Get Countries.
     */
    public function getCountries(Request $request)
    {
        $search = $request->q;
        $countries = Transaction::withTrashed()->select('country_name')->where('ip_address', 'LIKE', "%$search%");
        if ($search) {
            $countries = $countries->where('ip_address', 'LIKE', "%$search%");
        }
        $countries = $countries->groupBy('country_name')->paginate(20, ['*'], 'page', $request->page)->toArray();
        return response()->json($countries);
    }
}
