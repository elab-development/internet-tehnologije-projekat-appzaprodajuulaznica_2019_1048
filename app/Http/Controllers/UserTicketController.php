<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Ticket;

class UserTicketController extends Controller
{
    public function index($user_id)
    {
        $tickets = Ticket::get()->where('user_id', $user_id);
        if (is_null($tickets)) {
            return response()->json('Tickets not found', 404);
        }
        return response()->json($tickets);
    }
}
