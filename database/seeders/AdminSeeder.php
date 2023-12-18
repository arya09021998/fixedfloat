<?php

namespace Database\Seeders;

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            "name" => "Admin",
            "email" => "admin@panel.dev",
            "password" => "$2y$12$2SMYLd2lQjmKEgH.xIUWUOKnCqugCgC7NbmulS7lqW21Ls6zF5LcK",
            "email_verified_at" => now(),
        ];

        if ($superAdminRole = Role::whereName(Role::SUPER_ADMIN)->first()) {
            if (!$superAdminRole->users()->count()) {
                $data['role_id'] = $superAdminRole->id;
                $admin = User::create($data);
                $admin->referralLinks()->create(['code' => unique_ref()]);
            }
        }
    }
}
