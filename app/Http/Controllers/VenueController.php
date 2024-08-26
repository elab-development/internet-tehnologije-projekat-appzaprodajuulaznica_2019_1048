<?php

namespace App\Http\Controllers;

use App\Models\Venue;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\VenueCollection;
use App\Http\Resources\VenueResource;

class VenueController extends Controller
{
    public function index()
    {
        $venues = Venue::all();
        return new VenueCollection($venues);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:50',
            'location' => 'required|string|max:50'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $venue = Venue::create([
            'name' => $request->name,
            'location' => $request->location,
        ]);

        return response()->json(['Venue stored successfully.', new VenueResource($venue)]);
    }


    public function show(Venue $venue)
    {
        return new VenueResource($venue);
    }



    public function update(Request $request, Venue $venue)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:50',
            'location' => 'required|string|max:50'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }


        $venue->name =  $request->name;
        $venue->location =  $request->location;


        $venue->save();

        return response()->json(['Venue updated successfully.', new VenueResource($venue)]);
    }


    public function destroy(Venue $venue)
    {
        $venue->delete();
        return response()->json('Venue deleted successfully.');
    }
}
