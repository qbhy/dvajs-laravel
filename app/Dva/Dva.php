<?php

namespace App\Dva;

use App\User;
use Illuminate\Http\Request;
use Qbhy\DvaJs\DvaJs;
use Auth;

class Dva
{
    public static function render($url, $title, $state)
    {
        $dva = new DvaJs(file_get_contents(public_path('dva/server.js')));
        $self = Auth::user();
        $blogConfig = config('blog');
        $data = [
            'url' => $url,
            'initialState' => [
                'user' => self::renderSelf($self, $blogConfig),
                'owner' => $blogConfig
            ]
        ];
        $data['initialState'] = array_merge($data['initialState'], $state);
        $html = $dva->render($data);
        return view('dva', compact('html', 'title'));
    }

    /**
     * @param User|null $self
     * @param array $blogConfig
     * @return array|null
     */
    private static function renderSelf($self, $blogConfig)
    {
        if (is_null($self)) {
            return null;
        }
        return [
            'name' => $self->name,
            'isAdmin' => $blogConfig['email'] === $self->email
        ];
    }


}