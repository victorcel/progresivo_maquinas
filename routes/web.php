<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/report', function () {
    $result = DB::select("CALL aumento()");
    // return $result;
    if (Request::ajax()) {
        return $result;
    }
    // return $result;
   return view('welcome', compact('result'));
})->name('report');

Route::get('/', function () {

    return Redirect()->route('report');
});



Auth::routes();

Route::get('/home', 'HomeController@index');
