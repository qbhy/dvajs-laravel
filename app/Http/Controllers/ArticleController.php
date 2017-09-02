<?php

namespace App\Http\Controllers;

use App\Services\ArticleService;
use Illuminate\Http\Request;

class ArticleController extends Controller
{

    public function articles(Request $request)
    {
        $state = [
            'article' => [
                'list' => ArticleService::articles(),
                'activeIndex' => null,
                'initialised' => true,
                'loading' => false
            ]
        ];
        return dva('测试标题a', $state);
    }

    public function articleInfo($id)
    {
        $article = ArticleService::find($id);
        $state = [
            'article' => [
                'list' => [$id => $article],
                'activeIndex' => $id,
                'initialised' => false,
                'loading' => false
            ]
        ];
        return dva('测试标题a', $state);
    }
}
