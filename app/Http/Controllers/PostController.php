<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\FavoriteShop;
use App\Http\Requests\PostRequest;

class PostController extends Controller {
    
    public function index(FavoriteShop $prefecture) {
        return Inertia::render("Post/Index", ["prefectures" => $prefecture]);
    }
    
    public function show_local_map() {
        return Inertia::render("Post/Show_local_map");
    }
    
    public function show_location_from_prefecture() {
        return Inertia::render("Post/Show_location_from_prefecture");
    }
    
    //public function create() {
      //  return Inertia::render("Post/create");
    //}
    
    public function search_shop() {
        return Inertia::render("Post/Places");
    }
    
    public function show(FavoriteShop $favoriteShop) {
        return Inertia::render("Post/Show", ["favoriteShop" => $favoriteShop]);
    }
    
    public function store(PostRequest $request, FavoriteShop $favoriteShop) {
        $input = $request->all();
        $favoriteShop->fill($input)->save();
        return redirect("/search_shop/" . $favoriteShop->id . "/create");
    }
    
    public function create(FavoriteShop $favoriteShop) {
        return Inertia::render("Post/Create", ["favoriteShop" => $favoriteShop]);
    }
    
    public function update(PostRequest $request, FavoriteShop $favoriteShop) {
        $input = $request->all();
        $favoriteShop->fill($input)->save();
        return redirect("/search_shop/" . $favoriteShop->id);
    }
    
    
}

