<?php

namespace Database\Seeders;

use App\Models\Coin;
use App\Services\FixedFloatApi;
use App\Services\WhirFixedFloatApi;
use Illuminate\Database\Seeder;

class CoinSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $api = new WhirFixedFloatApi(setting('fixedfloat_api_key'), setting('fixedfloat_api_secret'));
        $ccies = $api->ccies()['ccies'] ?? [];
        foreach ($ccies as $ccy) {
            Coin::firstOrCreate(['name' => $ccy['coin']]);
        }
    }
}
