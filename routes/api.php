<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/


Route::post('/login', 'Auth\LoginController@apiLogin')->name('api.login');

Route::post('/fetchArticle', 'Api\ArticleController@fetchArticle')->name('fetchArticle');

/**
 * 管理员用API
 */
Route::group(['middleware' => 'admin', 'prefix' => 'admin'], function () {
    Route::post('publish', 'Api\ArticleController@publish')->name('admin.publish');
});