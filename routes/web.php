<?php


use App\Article;

Route::get('/test', function () {
    dd(Article::all());
});


/**
 * oauth 相关路由
 */
Route::get('/auth/github', 'Auth\AuthController@redirectToProvider');
Route::get('/auth/github/callback', 'Auth\AuthController@handleProviderCallback');

Route::get('/', 'ArticleController@articles')->name('articles');
Route::get('/articles', 'ArticleController@articles')->name('articles');

Route::get('/login', 'Auth\LoginController@login')->name('login');
Route::get('/logout', 'Auth\LoginController@logout')->name('logout');

Route::get('/article/{id}', 'ArticleController@articleInfo')->name('articleInfo');

