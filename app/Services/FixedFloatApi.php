<?php

namespace App\Services;

use Exception;

class FixedFloatApi
{
    const RESP_OK = 0;
    const TYPE_FIXED = 'fixed';
    const TYPE_FLOAT = 'float';

    private $key = '';
    private $secret = '';

    public function __construct($key, $secret)
    {
        $this->key = $key;
        $this->secret = $secret;
    }

    private function sign($data)
    {
        $parts = array();
        $str = '';
        if (is_array($data)) {
            foreach ($data as $key => $value) {
                $parts[] = sprintf('%s=%s', $key, $value);
            }
            $str = join('&', $parts);
        } else {
            $str = $data;
        }
        return hash_hmac('sha256', $str, $this->secret);
    }

    private function req($method, $data)
    {
        $url = 'https://ff.io/api/v2/' . $method;
        $proxy = setting('proxy_url');
        $req = json_encode($data);

        $ch = curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        if (!is_null($proxy)) {
            curl_setopt($ch, CURLOPT_PROXY, $proxy);
        }
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 2);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $req);
        curl_setopt($ch, CURLOPT_HTTPHEADER, array(
            'Content-Type:application/json',
            'X-API-KEY: ' . $this->key,
            'X-API-SIGN: ' . $this->sign($req)
        ));
        $response = curl_exec($ch);
        curl_close($ch);

        $result = json_decode($response, true);
        if ($result['code'] == self::RESP_OK) {
            return $result['data'];
        } else {
            throw new Exception($result['msg'], $result['code']);
        }
    }

    public function ccies()
    {
        return $this->req('ccies', array());
    }

    public function price($data)
    {
        return $this->req('price', $data);
    }

    public function create($data)
    {
        return $this->req('create', $data);
    }

    public function order($data)
    {
        return $this->req('order', $data);
    }

    public function emergency($data)
    {
        return $this->req('emergency', $data);
    }

    public function setEmail($data)
    {
        return $this->req('setEmail', $data);
    }

    public function qr($data)
    {
        return $this->req('qr', $data);
    }
}
