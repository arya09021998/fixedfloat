<?php

use App\Models\Page;
use Illuminate\Contracts\Routing\UrlGenerator;
use Illuminate\Foundation\Application;

function pageUrlWhereName($name): Application|string|UrlGenerator|\Illuminate\Contracts\Foundation\Application
{
    $pages = Page::fromCache();
    $slug = $pages->where('name', $name)->first()?->slug ?? '/';
    return url($slug);
}

function random_string($length = 10): string
{
    $characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}

function unique_ref(): string
{
    $ref = random_string(8);
    if (\Illuminate\Support\Facades\DB::table('referral_links')
        ->where('code', $ref)
        ->exists()) {
        return unique_ref();
    }
    return strtolower($ref);
}

function unique_order_num(): string
{
    $orderNum = random_string(6);
    if (\Illuminate\Support\Facades\DB::table('orders')
        ->where('num', $orderNum)
        ->whereNull('deleted_at')
        ->exists()) {
        return unique_order_num();
    }
    return strtoupper($orderNum);
}
