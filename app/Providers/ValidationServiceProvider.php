<?php

namespace App\Providers;

use App\Rules\BtcAddressRule;
use Illuminate\Support\ServiceProvider;
use Illuminate\Contracts\Validation\Factory as ValidatorFactory;
use Illuminate\Validation\InvokableValidationRule;

class ValidationServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    public function boot(ValidatorFactory $validator): void
    {
        $validator->extend(BtcAddressRule::handle(), function ($attribute, $value, $parameters, $validator) {
            $rule = InvokableValidationRule::make(new BtcAddressRule(...$parameters));
            $rule->setValidator($validator);
            return $rule->passes($attribute, $value);
        });
    }
}
