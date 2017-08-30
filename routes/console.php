<?php

use Illuminate\Foundation\Inspiring;

/*
|--------------------------------------------------------------------------
| Console Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of your Closure based console
| commands. Each Closure is bound to a command instance allowing a
| simple approach to interacting with each command's IO methods.
|
*/

Artisan::command('inspire', function () {
    $this->comment(Inspiring::quote());
})->describe('Display an inspiring quote');


Artisan::command('test', function () {
    dd(\Carbon\Carbon::now());
});

Artisan::command('blog:init', function () {
    $blogConfig = config('blog');
    \App\User::create([
        'name' => $blogConfig['name'],
        'password' => Hash::make($blogConfig['password']),
        'email' => $blogConfig['email'],
        'role' => \App\User::$roles['admin']
    ]);
})->describe('init blog');
