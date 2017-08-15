<?php

Route::get('/{url?}', 'DvaController@dva')->name('dva')->where('url', '.+');

