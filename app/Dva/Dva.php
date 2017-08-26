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
        $data = [
            'url' => $url,
            'initialState' => [
                'user' => self::renderSelf($self),
                'owner' => [
                    'name' => '桥边红药',
                    'age' => 18,
                ]
            ]
        ];
        $data['initialState'] = array_merge($data['initialState'], $state);
        $html = $dva->render($data);
        return view('dva', compact('html', 'title'));
    }

    /**
     * @param User|null $self
     * @return array|null
     */
    private static function renderSelf($self)
    {
        if (is_null($self)) {
            return null;
        }
        return [
            'name' => $self->name
        ];
    }


}