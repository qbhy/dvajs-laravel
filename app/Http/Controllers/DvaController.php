<?php

namespace App\Http\Controllers;

use App\Services\ArticleService;
use Illuminate\Http\Request;
use Cache;

class DvaController extends Controller
{

    public function fetchState($key)
    {
        return Cache::pull($key);
    }

}
