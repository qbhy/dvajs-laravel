<?php

/**
 * 管理员相关路由
 */

Route::group(['prefix' => 'admin'], function () {

    Route::get('/', 'Admin\AdminController@home')->name('admin.home');


});