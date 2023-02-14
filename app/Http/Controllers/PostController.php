<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Post;

class PostController extends Controller {
    
    public function index() {
        return Inertia::render("Post/Index");
    }
    
    public function show_local_map() {
        return Inertia::render("Post/Show_local_map");
    }
    
    public function show_location_from_prefecture() {
        return Inertia::render("Post/Show_location_from_prefecture");
    }
}
