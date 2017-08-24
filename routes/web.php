<?php

Route::get('/test', 'DvaController@test')->name('test');
Route::get('/{url?}', 'DvaController@dva')->name('dva')->where('url', '.+');

