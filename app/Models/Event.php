<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Event extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'about',
        'artist_id',
        'venue_id',
        'booked'
    ];

    public function artist()
    {
        return $this->belongsTo(Artist::class);
    }

    public function venue()
    {
        return $this->belongsTo(Venue::class);
    }
}
