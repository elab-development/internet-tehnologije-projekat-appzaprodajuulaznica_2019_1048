<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use \App\Models\User;
use \App\Models\Venue;
use \App\Models\Artist;

class EventFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->title(),
            'description' => $this->faker->paragraph(),
            'artist_id' => Artist::factory(),
            'venue_id' => Venue::factory(),
            'booked' => false,
        ];
    }
}
