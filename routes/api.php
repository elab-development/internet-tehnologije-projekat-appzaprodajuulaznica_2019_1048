<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\ArtistController;
use App\Http\Controllers\VenueController;
use App\Http\Controllers\TicketController;
use App\Http\Controllers\UserEventController;
use App\Http\Controllers\API\AuthController;

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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::resource('users.Events', UserEventController::class)->only(['index']);
Route::resource('events', EventController::class)->only(['index']);
Route::resource('artists', ArtistController::class)->only(['index']);
Route::resource('venues', VenueController::class)->only(['index']);
Route::resource('tickets', TicketController::class)->only(['index']);

Route::get('/users/{id}', [UserController::class, 'show'])->name('users.show');
Route::get('/users', [UserController::class, 'index'])->name('users.index');

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);

Route::post('/forgot', [AuthController::class, 'forgot']);
Route::post('/reset', [AuthController::class, 'reset']);


Route::group(['middleware' => ['auth:sanctum']], function () {
    Route::get('/profile', function (Request $request) {
        return auth()->user();
    });

    Route::resource('events', EventController::class)->only(['update', 'store', 'destroy']);
    Route::resource('artists', ArtistController::class)->only(['update', 'store', 'destroy']);
    Route::resource('venues', VenueController::class)->only(['update', 'store', 'destroy']);
    Route::resource('tickets', TicketController::class)->only(['update', 'store', 'destroy']);
    // API route for logout user
    Route::post('/logout', [AuthController::class, 'logout']);
});
