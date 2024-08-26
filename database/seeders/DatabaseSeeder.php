<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use \App\Models\User;
use \App\Models\Ticket;
use \App\Models\Venue;
use \App\Models\Artist;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        Ticket::truncate();
        Artist::truncate();
        Venue::truncate();
        User::truncate();

        Ticket::factory(10)->create();
    }
}
