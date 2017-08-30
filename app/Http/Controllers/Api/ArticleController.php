<?php

namespace App\Http\Controllers\Api;

use App\Services\ArticleService;
use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Auth;

class ArticleController extends Controller
{
    public function fetchArticle(Request $request)
    {
        $this->validate($request, [
            'id' => 'required'
        ]);
        return [
            'article' => ArticleService::find($request->get('id'))
        ];
    }

    public function publish(Request $request)
    {
        $this->validate($request, [
            'title' => 'required|string',
            'content' => 'required|string',
            'publishedAt' => 'required|string',
        ]);
        $self = Auth::user();
        $data = $request->only(['title', 'content']);
        $data['published_at'] = $request->get('publishedAt');
        $data['user_id'] = $self->id;
        return ArticleService::publish($data);

    }

}
