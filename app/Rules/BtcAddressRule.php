<?php

namespace App\Rules;

use Closure;
use App\Services\Btc\AddressValidator;
use Illuminate\Contracts\Validation\ValidationRule;

class BtcAddressRule implements ValidationRule
{
    public static function handle(): string
    {
        return 'btc_address';
    }

    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        $addressValidator = new AddressValidator();
        if (!$addressValidator->isValid($value)) {
            $fail('validation.btc_address')->translate();
        }
    }
}
