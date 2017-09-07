<?php

namespace App\Http\Middleware;

use Closure;
use Auth;

class Admin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $self = Auth::user();
        if (!is_null($self) && $self->isAdmin()) {
            return $next($request);
        } else {
            clock()->log('sessions', \Session::all());
            return response()->json([
                'msg' => '你无权访问改接口!'
            ], 403);
        }
    }
}
