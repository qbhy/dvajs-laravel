<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Qbhy\DvaJs\DvaJs;

class DvaController extends Controller
{
    public function dva(Request $request)
    {
        $dva = new DvaJs(file_get_contents(public_path('dva/server.js')));
        $html = $dva->render([
            'url' => $request->path(),
            'initialState' => [
                'user' => []
            ]
        ]);
        $title = '测试标题';
        return view('dva', compact('html', 'title'));
    }


}
