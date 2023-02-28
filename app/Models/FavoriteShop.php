<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FavoriteShop extends Model
{
    use HasFactory;
    
    protected $fillable = [
        "shop_name",
        "lat",
        "lng"
    ];
    
}
