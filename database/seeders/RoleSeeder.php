<?php

namespace Database\Seeders;

use App\Models\Role;
use Illuminate\Database\Seeder;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        foreach ([Role::SUPER_ADMIN, Role::OPERATOR] as $name) Role::firstOrCreate(['name' => $name]);
    }
}
