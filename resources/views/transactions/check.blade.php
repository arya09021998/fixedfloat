<x-app-layout>
    <x-slot name="seo_title">
        Send payment
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

            <span class="tx-id">
                Transaction {{$transaction->tx_id}}                <a class="copy-btn" data-toggle="copy"
                                                                      data-value="{{$transaction->tx_id}}"
                                                                      href="{{route('tx.check', ['tx_id' => $transaction->tx_id])}}">
                    <em class="content-copy"></em>
                </a>
            </span>


            <div class="center">
                <div class="process-steps md-hide">
                    <div class="process-step">
                        <div class="process-step-icon check"></div>
                    </div>
                    <div class="process-step active">
                        <div class="process-step-icon"></div>
                    </div>
                    <div class="process-step">
                        <div class="process-step-icon"></div>
                    </div>
                </div>
            </div>

            <div @class(['hero-tx','jsCheckTxStatus' => $transaction->status === \App\Enums\StatusEnum::PENDING->value]) >
                <div class="boxes">
                    <div class="box">

                        <h1>Send payment</h1>


                        <div class="data-with-qr">
                            @if($qr = $transaction->qr)
                                <div class="data-qr">
                                    <img
                                        src="{{$qr}}"
                                        alt="QR code" title="QR code">
                                </div>
                            @endif

                            <div class="data-group">
                                <div class="data-group-label">TO</div>
                                <div class="data-group-value">
                                    <span class="break">{{$transaction->mix_btc_address}}</span>

                                    <a class="copy-btn copy-btn-md" data-toggle="copy"
                                       data-value="{{$transaction->mix_btc_address}}"
                                       href="{{route('tx.check', ['tx_id' => $transaction->tx_id])}}#">
                                        <em class="content-copy"></em>
                                    </a>
                                </div>
                            </div>
                            <div class="data-group">
                                <div class="data-group-label">AMOUNT</div>
                                <div class="data-group-value">
                                    from {{setting('min_amount_btc',0.01)}} to {{setting('max_amount_btc',1)}} BTC
                                </div>
                            </div>

                            <div class="data-group">
                                <div class="data-group-label">Fee</div>
                                <div class="data-group-info">
                                    {{$transaction->fee_percent}}% Service fee + 0.001 BTC network fee
                                </div>
                            </div>

                            <div class="data-group">
                                @if($transaction->status === \App\Enums\StatusEnum::PENDING->value)
                                    <span class="awaiting">
                                        <em class="refresh"></em> AWAITING
                                    </span>
                                @else
                                    <span class="awaiting">
                                        {{strtoupper($transaction->status)}}
                                    </span>
                                @endif
                            </div>
                        </div>

                        <div class="data-group">
                            <p>
                                After 3 confirmations,
                                we'll anonymously send mixed coins to
                                <br>
                                @foreach($transaction->btc_addresses as $address)
                                    <span class="break">{{$address}}</span> (Address {{$loop->iteration}})
                                @endforeach

                            </p>
                        </div>
                        <!-- pending of confirming -->

                        <!-- processing of complete -->
                    </div>
                </div>
            </div>

        </div>
    </div>
    @push('js')
        <script type="text/javascript">
            $(document).ready(function () {
                if ($('.jsCheckTxStatus').length) {
                    _checkTxStatus();
                }
            });
        </script>
    @endpush
</x-app-layout>
