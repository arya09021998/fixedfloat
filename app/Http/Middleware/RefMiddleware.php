<?php

namespace App\Http\Middleware;

use App\Models\ReferralLink;
use Closure;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class RefMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param Request $request
     * @param \Closure(Request): (Response|RedirectResponse) $next
     * @return Response|RedirectResponse
     * @throws AuthenticationException
     */
    public function handle(Request $request, Closure $next)
    {
        $response = $next($request);
        if ($request->isMethod('GET') && is_null($request->cookie('referral_link_id')) && $ref = $request->get('ref')) {
            $referralLink = ReferralLink::whereCode($ref)->first();
            if (!is_null($referralLink) && $request->user()?->id !== $referralLink->user_id) {
                $minutes = 7 * 24 * 60; // week
                $response->cookie('referral_link_id', $referralLink->id, $minutes);
            }
        }
        return $response;
    }
}
