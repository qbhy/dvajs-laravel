<?php

namespace App\Http\Controllers\Admin;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AdminController extends Controller
{
    public function home(Request $request)
    {
        return dva('管理员页面');
    }

    public function publish(Request $request)
    {
        return dva('发布文章');
    }
}
