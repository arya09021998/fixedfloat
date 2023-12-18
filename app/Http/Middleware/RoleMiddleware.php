<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class RoleMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param Request $request
     * @param \Closure(Request): (Response|RedirectResponse) $next
     * @param mixed ...$roles
     * @return Response|RedirectResponse
     * @throws AuthenticationException
     */
    public function handle(Request $request, Closure $next, ...$roles)
    {
        $user = $request->user('web');
        if (is_null($user)) {
            throw new AuthenticationException(
                'Unauthenticated.', ['web'], route('admin.login')
            );
        }

        if (empty($roles)) abort(403);
        if ($user->hasRoles($roles)) {
            return $next($request);
        }

        abort(403);
    }
}
