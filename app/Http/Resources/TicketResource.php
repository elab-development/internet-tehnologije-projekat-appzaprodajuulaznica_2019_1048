<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class TicketResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */

    public static $wrap = 'ticket';

    public function toArray($request)
    {
        return [
            'id' => $this->resource->id,
            'title' => $this->resource->title,
            'description' => $this->resource->description,
            'artist' => new ArtistResource($this->resource->artist),
            'venue' => new VenueResource($this->resource->venue),
            'user' => new UserResource($this->resource->user),
            'booked' => $this->resource->booked
        ];
    }
}
