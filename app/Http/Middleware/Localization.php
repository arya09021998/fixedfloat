<?php

namespace App\Http\Middleware;

use App\Services\IpWhoisApi;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class Localization
{
    /**
     * Handle an incoming request.
     *
     * @param \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response) $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $defaultLocale = null;
        if (!$request->session()->has('locale')) {
            $ip = $request->server('HTTP_CF_CONNECTING_IP', $request->ip());
            if ($defaultLocale = (IpWhoisApi::getData($ip)['country_code'] ?? null)) {
                $defaultLocale = strtolower($defaultLocale);
            }
        }

        $locales = config('app.available_locales');
        $segment = $defaultLocale ?? $request->segment(1);

        $locale = $request->session()->get('locale', config('app.fallback_locale'));

        if (in_array($segment, $locales)) {
            $locale = $segment;
        }

        if ($request->session()->get('locale') !== $locale) {
            $request->session()->put('locale', $locale);
        }

        if (!app()->isLocale($locale)) {
            app()->setLocale($locale);
        }

        return $next($request);
    }
}
