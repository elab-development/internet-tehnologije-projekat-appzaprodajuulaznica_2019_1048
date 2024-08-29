<?php

namespace App\Http\Controllers;

use App\Http\Resources\EventCollection;
use App\Http\Resources\EventResource;
use App\Models\Event;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;

class EventController extends Controller
{

    public function index()
    {
        $events = Event::all();
        return new EventCollection($events);
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

        $event = Event::create([
            'title' => $request->title,
            'description' => $request->description,
            'artist_id' => $request->artist_id,
            'venue_id' => $request->venue_id,
            'user_id' => Auth::user()->id,
            'booked' => $request->booked
        ]);

        return response()->json(['Event booked successfully.', new EventResource($event)]);
    }


    public function show(Event $event)
    {
        return new EventResource($event);
    }



    public function update(Request $request, Event $event)
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


        $event->title =  $request->title;
        $event->description =  $request->description;
        $event->artist_id =  $request->artist_id;
        $event->venue_id =  $request->venue_id;
        $event->booked =  $request->booked;


        $event->save();

        return response()->json(['Event updated successfully.', new EventResource($event)]);
    }


    public function destroy(Event $event)
    {
        $event->delete();
        return response()->json('Event deleted successfully.');
    }
}
