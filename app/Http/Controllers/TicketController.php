<?php

namespace App\Http\Controllers;

use App\Http\Resources\TicketCollection;
use App\Http\Resources\TicketResource;
use App\Models\Ticket;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

class TicketController extends Controller
{

    public function index()
    {
        $tickets = Ticket::all();
        return new TicketCollection($tickets);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:50',
            'description' => 'required|string|max:255',
            'artist_id' => 'required',
            'venue_id' => 'required',
            'booked' => 'required',
            //'user_id' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $ticket = Ticket::create([
            'title' => $request->title,
            'description' => $request->description,
            'artist_id' => $request->artist_id,
            'venue_id' => $request->venue_id,
            'user_id' => Auth::user()->id,
            'booked' => $request->booked
        ]);

        return response()->json(['Ticket booked successfully.', new TicketResource($ticket)]);
    }


    public function show(Ticket $ticket)
    {
        return new TicketResource($ticket);
    }



    public function update(Request $request, Ticket $ticket)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|string|max:50',
            'description' => 'required|string|max:255',
            'artist_id' => 'required',
            'venue_id' => 'required',
            'booked' => 'required'
            //'user_id' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }


        $ticket->title =  $request->title;
        $ticket->description =  $request->description;
        $ticket->artist_id =  $request->artist_id;
        $ticket->venue_id =  $request->venue_id;
        $ticket->booked =  $request->booked;


        $ticket->save();

        return response()->json(['Ticket updated successfully.', new TicketResource($ticket)]);
    }


    public function destroy(Ticket $ticket)
    {
        $ticket->delete();
        return response()->json('Ticket deleted successfully.');
    }
}
