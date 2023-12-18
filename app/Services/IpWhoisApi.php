<?php

namespace App\Services;

class IpWhoisApi
{
    public static function getData($ip)
    {
        $ch = curl_init('https://ipwho.is/' . $ip);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HEADER, false);
        $ipwhois = json_decode(curl_exec($ch), true);
        curl_close($ch);
        return $ipwhois;
    }
}
