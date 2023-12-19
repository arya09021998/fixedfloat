<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Coin;
use App\Models\Wallet;
use Illuminate\Http\Request;

class WalletController extends Controller
{
    public function index()
    {
        $coins = Coin::with('wallets')->withCount('wallets')->get();
        return view('admin.wallets.index', ['coins' => $coins]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(Request $request, $id)
    {
        $wallet = Wallet::findOrFail($id);
        $data = $request->validate([
            'address' => ['required']
        ]);
        if ($request->has('enabled')) {
            $data['enabled'] = !$wallet->enabled;
        }
        $wallet->update($data);
        return back()->with('success', 'Изменение сохранены');
    }

    public function store(Request $request)
    {

        $data = $request->validate([
            'coin_id' => ['required', 'exists:coins,id'],
            'address' => ['required'],
        ]);
        $coin = Coin::findOrFail($data['coin_id']);
        if ($coin->wallets()->where('address', $data['address'])->exists()) {
            return back()->with('error', 'Такой адрес уже существует');
        }
        Wallet::create($data);
        return back()->with('success', 'Адрес успешно добавлен');
    }

    public function destroy($id)
    {
        $wallet = Wallet::findOrFail($id);
        $wallet->delete();
        return back()->with('success', 'Адрес удалено');
    }
}
