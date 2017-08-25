<?php

namespace App\Http\Controllers;

use App\Dva\Dva;
use App\Services\ArticleService;
use Illuminate\Http\Request;

class DvaController extends Controller
{
    public function dva(Request $request)
    {
        $state = [
            'article' => [
                'list' => ArticleService::articles(),
                'activeIndex' => null
            ]
        ];
        return Dva::render('测试标题a', $request->path(), $state);
    }


    public function test(Request $request)
    {

    }

}
