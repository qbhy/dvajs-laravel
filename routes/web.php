<?php


Route::get('/', 'ArticleController@articles')->name('articles');
Route::get('/articles', 'ArticleController@articles')->name('articles');

Route::get('/login', 'Auth\LoginController@login')->name('login');

Route::get('/article/{id}', 'ArticleController@articleInfo')->name('articleInfo');

