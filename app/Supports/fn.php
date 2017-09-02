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
if(!function_exists('unescape')){
    function unescape($str)
    {
        $str = rawurldecode($str);
        preg_match_all("/(?:%u.{4})|.{4};|&#\d+;|.+/U", $str, $r);
        $ar = $r[0];
        #print_r($ar);
        foreach ($ar as $k => $v) {
            if (substr($v, 0, 2) == "%u")
                $ar[$k] = iconv("UCS-2", "GB2312", pack("H4", substr($v, -4)));
            elseif (substr($v, 0, 3) == "")
                $ar[$k] = iconv("UCS-2", "GB2312", pack("H4", substr($v, 3, -1)));
            elseif (substr($v, 0, 2) == "&#") {
                echo substr($v, 2, -1) . "";
                $ar[$k] = iconv("UCS-2", "GB2312", pack("n", substr($v, 2, -1)));
            }
        }
        return join("", $ar);
    }
}
