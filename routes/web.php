<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\PostController;

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

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

Route::group(["middleware" => ["auth"]], function() {
 
   Route::get("/top", [PostController::class, "index"]);
   Route::get("/shop_local_map", [PostController::class, "show_local_map"]);
   Route::get("/show_location_from_prefecture", [PostController::class, "show_location_from_prefecture"]);
   
   Route::get("/search_shop/{favoriteShop}/create", [PostController::class, "create"]);//→これがカリキュラムでいうedit
   Route::get("/search_shop", [PostController::class, "search_shop"]);//→これがカリキュラムでいうcreate
   Route::get("/search_shop/{favoriteShop}", [PostController::class, "show"]);
   Route::post("/search_shop", [PostController::class, "store"]);
   Route::put('/search_shop/{favoriteShop}', [PostController::class, "update"]);
});