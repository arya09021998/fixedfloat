<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    protected ?string $view = null;
    private ?User $user;

    public function __construct()
    {
        $this->middleware(function (Request $request, $next) {
            $data = array_pad(explode('.', $request->route()->getName()), 2, null);
            $pageName = str_replace('-', '_', $data[count($data) - 1]);
            $this->view = "$data[0].$pageName";
            $this->user = $request->user();

            return $next($request);
        });
    }

    public function signIn()
    {
        return view($this->view);
    }

    public function signUp()
    {
        return view($this->view);
    }

    public function profile()
    {
        return view($this->view, ['user' => $this->user]);
    }

    public function orders()
    {
        return view($this->view, ['user' => $this->user]);
    }

    public function addressBook()
    {
        return view($this->view, ['user' => $this->user]);
    }

    public function affiliate()
    {
        return view($this->view, ['user' => $this->user, 'referralLinks' => $this->user->referralLinks()->get()]);
    }

    public function payouts()
    {
        return view($this->view, ['user' => $this->user]);
    }

    public function apiKey()
    {
        $user = $this->user;
        $tokens = $user->tokens()->whereIn('personal_access_tokens.name', ['api_key', 'api_secret'])->get();
        $data = [];
        foreach ($tokens as $token) {
            $key = $token->name === 'api_key' ? 'key' : 'secret';
            $data[$key] = $token->token;
        }

        return view($this->view, ['user' => $this->user, 'token' => $data]);
    }

    public function signOut(Request $request)
    {
        Auth::guard('web')->logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        return redirect('/');
    }
}
