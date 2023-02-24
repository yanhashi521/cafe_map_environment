<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Post;

class PostController extends Controller {
    
    public function index(Post $prefecture) {
        return Inertia::render("Post/Index", ["prefectures" => $prefecture]);
    }
    
    public function show_local_map() {
        return Inertia::render("Post/Show_local_map");
    }
    
    public function show_location_from_prefecture() {
        return Inertia::render("Post/Show_location_from_prefecture");
    }
    
    public function search_shop() {
        return Inertia::render("Post/Places");
    }
}
