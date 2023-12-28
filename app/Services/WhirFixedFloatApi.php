<?php

namespace App\Services;

use Exception;

class WhirFixedFloatApi
{
    private $key = '';
    private $secret = '';

    public function __construct($key, $secret)
    {
        $this->key = $key;
        $this->secret = $secret;
    }


    /**
     * @throws Exception
     */
    private function req($method, $data)
    {

        $url = config('app.whir_api_base_url');
        if (is_null($url)) {
            throw new Exception('Апи урл не установлен!', 1);
        }
        $url .= "/$method";

        $req = json_encode($data);

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $req);
        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            'Content-Type:application/json',
            'FIXEDFLOAT_API_KEY: ' . $this->key,
            'FIXEDFLOAT_API_SECRET: ' . $this->secret
        ]);
        $response = curl_exec($ch);
        curl_close($ch);

        $result = json_decode($response, true);

        if ($result['code'] == FixedFloatApi::RESP_OK) {
            return $result['data'];
        } else {
            throw new Exception($result['msg'], $result['code']);
        }
    }


    public function ccies()
    {
        return $this->req('ccies', []);
    }

    public function price($data)
    {
        return $this->req('price', $data);
    }
}
