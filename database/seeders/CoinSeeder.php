<?php

namespace Database\Seeders;

use App\Models\Coin;
use App\Services\FixedFloatApi;
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
        $api = new FixedFloatApi(setting('fixedfloat_api_key'), setting('fixedfloat_api_secret'));
        foreach ($api->ccies() as $ccy) {
            Coin::firstOrCreate(['name' => $ccy['coin']]);
        }
    }
}
