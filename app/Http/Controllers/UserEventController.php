<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Event;

class UserEventController extends Controller
{
    public function index($user_id)
    {
        $events = Event::get()->where('user_id', $user_id);
        if (is_null($events)) {
            return response()->json('Event not found', 404);
        }
        return response()->json($events);
    }
}
