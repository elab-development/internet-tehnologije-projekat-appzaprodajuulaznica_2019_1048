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
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $tickets = Ticket::all();
        return new TicketCollection($tickets);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create() {}

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'type' => 'required|string|max:50',
            'event_id' => 'required',
            'user_id' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $ticket = Ticket::create([
            'type' => $request->type,
            'venue_id' => $request->venue_id,
            'user_id' => Auth::user()->id,

        ]);

        return response()->json(['Ticket booked successfully.', new TicketResource($ticket)]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Ticket  $ticket
     * @return \Illuminate\Http\Response
     */
    public function show(Ticket $ticket)
    {
        return new TicketResource($ticket);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Ticket  $ticket
     * @return \Illuminate\Http\Response
     */
    public function edit(Ticket $ticket)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Ticket  $ticket
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Ticket $ticket)
    {
        $validator = Validator::make($request->all(), [
            'type' => 'required|string|max:50',
            'event_id' => 'required',
            'user_id' => 'required'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }


        $ticket->type =  $request->type;
        $ticket->event_id =  $request->event_id;
        $ticket->user_id =  $request->user_id;


        $ticket->save();

        return response()->json(['Ticket updated successfully.', new TicketResource($ticket)]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Ticket  $ticket
     * @return \Illuminate\Http\Response
     */
    public function destroy(Ticket $ticket)
    {
        $ticket->delete();
        return response()->json('Ticket deleted successfully.');
    }
}
