<?php

namespace App\Http\Controllers;

use App\Services\ArticleService;
use Carbon\Carbon;
use Illuminate\Http\Request;

class ArticleController extends Controller
{

    public function articles(Request $request)
    {
        $state = [
            'article' => [
                'list' => ArticleService::articles(),
                'activeIndex' => null
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
                'activeIndex' => $id
            ]
        ];
        return dva('测试标题a', $state);
    }
}
