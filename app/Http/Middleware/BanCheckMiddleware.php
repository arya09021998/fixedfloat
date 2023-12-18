<?php

namespace App\Http\Middleware;

use App\Models\Ban;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class BanCheckMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response) $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $ip = $request->server('HTTP_CF_CONNECTING_IP', $request->ip());
        if (Ban::whereIp($ip)->exists()) abort(403);
        return $next($request);
    }
}
