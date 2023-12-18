<x-app-layout>
    <x-slot name="seo_title">
        Confirm details
    </x-slot>
    <x-slot name="seo_description">
        Whir is a BTC mixer that returns privacy to your BTC.
    </x-slot>
    <x-slot name="seo_keywords">
        BTC mixer, mix BTC, BTC privacy
    </x-slot>
    <div class="container-inner-hero">
        <div class="hero">
            <a class="logo" href="{{url('/')}}">
                <img class="logo-white" src="{{asset('assets/web/images/logo-white.png')}}"
                     alt="Whir BTC mixer" title="Whir BTC mixer" width="67px" height="66px">
                <img class="logo-dark" src="{{asset('assets/web/images/logo-dark.png')}}"
                     alt="Whir BTC mixer" title="Whir BTC mixer" width="67px" height="66px">
            </a>
            <div class="clear"></div>

            <div class="center">
                <div class="process-steps md-hide">
                    <div class="process-step active">
                        <div class="process-step-icon"></div>
                    </div>
                    <div class="process-step">
                        <div class="process-step-icon"></div>
                    </div>
                    <div class="process-step">
                        <div class="process-step-icon"></div>
                    </div>
                </div>
            </div>
            <div class="hero-tx">
                <div class="boxes">
                    <div class="box">
                        <h1>Confirm details</h1>
                        <div class="data-group">
                            <div class="data-group-label">SEND</div>
                            <div class="data-group-value">from {{setting('min_amount_btc',0.01)}}
                                to {{setting('max_amount_btc',1)}} BTC
                            </div>
                        </div>
                        <div class="data-group">
                            <div class="data-group-label">RECEIVE MIXED BTC TO</div>
                            <div class="data-group-info">
                                @if(count($transaction->btc_addresses) > 1)
                                    @foreach($transaction->btc_addresses as $address)
                                        {{$address}} <small
                                            class="data-group-label text-lowercase text-nowrap">(address {{$loop->iteration}}
                                            )</small>
                                        @if(!$loop->last)
                                            <br>
                                        @endif
                                    @endforeach
                                @else
                                    {{$transaction->btc_addresses[0]}}
                                @endif
                            </div>
                        </div>
                        <div class="data-group">
                            <div class="data-group-label">estimated arrival</div>
                            <div class="data-group-info">
                                After 3 confirmations of your deposit
                            </div>
                        </div>


                        <div class="data-group">
                            <div class="data-group-label">Fee</div>
                            <div class="data-group-info">
                                {{$transaction->fee_percent}}% Service fee + 0.001 BTC network fee
                            </div>
                        </div>


                        <form
                            action="{{route('tx.confirm-mix', ['btc_addresses' => $transaction->btc_addresses->implode(','),'delay' => $transaction->delay,'fee' => $transaction->fee])}}"
                            method="post">
                            @csrf
                            <div class="data-group-btn">
                                <button type="submit" class="btn btn-success">CONFIRM AND CONTINUE</button>
                                <a href="{{url('/')}}" class="btn btn-light">BACK</a>
                            </div>
                        </form>
                        <div class="data-group">
                            <p>By using {{strtolower(config('app.name'))}}, you agree to our <a href="{{url('/terms')}}" target="_blank">Terms
                                    of service</a> and <a href="{{url('/privacy-policy')}}" target="_blank">Privacy
                                    policy</a>.<br>
                                Make sure you are on {{url('/')}}</p>
                        </div>
                        <div class="data-secure">
                            {{url('/')}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</x-app-layout>
