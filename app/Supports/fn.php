<?php

use App\Dva\Dva;

if (!function_exists('dva')) {
    function dva($url, $title, $state = [])
    {
        return Dva::render($url, $title, $state);
    }
}

if (!function_exists('convertToHtml')) {
    function convertToHtml($markdown)
    {
        return Markdown::convertToHtml($markdown);
    }
}