<?php

namespace App\Http\Controllers;

use App\Models\Artist;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\ArtistCollection;
use App\Http\Resources\ArtistResource;

class ArtistController extends Controller
{
    public function index()
    {
        $artists = Artist::all();
        return new ArtistCollection($artists);
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:50',
            'genre' => 'required|string|max:50',
            'about' => 'required|string|max:255'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $artist = Artist::create([
            'name' => $request->name,
            'genre' => $request->genre,
            'about' => $request->about,
        ]);

        return response()->json(['Artist stored successfully.', new ArtistResource($artist)]);
    }


    public function show(Artist $artist)
    {
        return new ArtistResource($artist);
    }



    public function update(Request $request, Artist $artist)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:50',
            'genre' => 'required|string|max:50',
            'about' => 'required|string|max:255'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }


        $artist->name =  $request->name;
        $artist->genre =  $request->genre;
        $artist->about =  $request->about;


        $artist->save();

        return response()->json(['Artist updated successfully.', new ArtistResource($artist)]);
    }


    public function destroy(Artist $artist)
    {
        $artist->delete();
        return response()->json('Artist deleted successfully.');
    }
}
