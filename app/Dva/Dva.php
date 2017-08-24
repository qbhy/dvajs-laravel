<?php

namespace App\Dva;

use Illuminate\Http\Request;
use Qbhy\DvaJs\DvaJs;

class Dva
{
    public static function render($path, Request $request, DvaJs $dva)
    {
        $fn = [self::class, $request->route()->getName()];
        if (is_callable($fn)) {

        }
        switch ($path) {
            case '/articles':
                return self::articles($request);
                break;
        }
    }

    public static function articles(Request $request)
    {
        return '';
    }
}