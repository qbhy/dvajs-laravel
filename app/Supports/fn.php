<?php

use App\Dva\Dva;

if (!function_exists('dva')) {
    function dva($title, $state = [])
    {
        return Dva::render(Request::path(), $title, $state);
    }
}

if (!function_exists('convertToHtml')) {
    function convertToHtml($markdown)
    {
        return Markdown::convertToHtml($markdown);
    }
}