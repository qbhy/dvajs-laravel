<!doctype html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <base target="_blank" />
    <title>{{ $title }}</title>
    <link href="{{ asset('favicon.ico') }}" rel='icon' type='image/x-icon'/>
    <link href="https://cdn.bootcss.com/github-markdown-css/2.8.0/github-markdown.css" rel="stylesheet">
    <link href="https://cdn.bootcss.com/animate.css/3.5.2/animate.css" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('dva/app.css') }}">
</head>
<body>
{!! $html !!}
<script src="{{ asset('dva/app.js') }}"></script>
</body>
</html>