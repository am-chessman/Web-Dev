<?php

use App\Http\Controllers\welcomeController;
use Illuminate\Support\Facades\Route;

Route::get('/', [welcomeController::class,'welcome'])->name('welcome');
Route::get('/welcome', function() {
    return "Welcome";
}),


