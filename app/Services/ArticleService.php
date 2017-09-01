<?php

namespace App\Services;

use App\Article;
use Carbon\Carbon;

class ArticleService
{

    /**
     * @param $id
     * @return array
     */
    public static function find($id)
    {
        /**
         * @var Article $article
         */
        $article = Article::findOrFail($id);
        return [
            'id' => $article->id,
            'title' => $article->title,
            'content' => $article->content,
            'abstract' => $article->abstract,
            'updatedAt' => $article->updated_at->diffForHumans()
        ];
    }

    public static function articles()
    {
        /**
         * @var Article $article
         */
        $articles = Article::where('published_at', '<', Carbon::now())
            ->orderBy('id', 'desc')
            ->paginate();
        $articleList = [];
        foreach ($articles as $article) {
            $articleList[$article->id] = [
                'id' => $article->id,
                'title' => $article->title,
                'content' => $article->content,
                'updatedAt' => $article->updated_at->diffForHumans(),
                'abstract' => $article->abstract
            ];
        }
        return $articleList;
    }


    /**
     * @param array $data
     * @return Article|\Illuminate\Database\Eloquent\Model
     */
    public static function publish($data)
    {
        return Article::create($data);
    }

}
