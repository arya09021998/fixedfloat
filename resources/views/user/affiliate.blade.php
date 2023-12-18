<x-app-layout>
    @push('css')
        <link rel="stylesheet" type="text/css" href="{{asset('/assets/css/v2/table_min.css')}}">
    @endpush
    @include('includes.header')
    <main>
        <div class="wrapper user-section">
            <aside class="stickybar">
                <ul class="sidemenu">
                    <li><a href="/user/profile"><i
                                    class="ico profile"></i><span>{{__('Personal data')}}</span></a>
                    </li>
                    <li><a href="/user/orders"><i
                                    class="ico history"></i><span>{{__('Orders history')}}</span></a></li>
                    <li><a href="/user/addressbook"><i
                                    class="ico addressbook"></i><span>{{__('Address book')}}</span></a></li>
                    <li><a href="/user/affiliate" class="active"><i
                                    class="ico affiliate"></i><span>{{__('Affiliate program')}}</span></a>
                    </li>
                    <li><a href="/user/payouts"><i class="ico payout"></i><span>{{__('Payouts')}}</span></a></li>
                    <li><a href="/user/apikey"><i class="ico apikey"></i><span>{{__('API management')}}</span></a></li>
                    <li><a href="/user/signout" class="signout" data-confirm="{{__('Are you sure?')}}"><i
                                    class="ico signout"></i><span>{{__('Sign out')}}</span></a>
                    </li>
                </ul>
            </aside>
            <section class="content user-content darkbg">
                <div class="head-line">
                    <h2>{{__('Affiliate statistics')}}</h2>
                    <a class="btn mini right" href="/user/payouts">{{__('Payouts')}}</a>
                </div>
                <section class="user-content-box user-aff-stats">
                    <div>
                        <div class="user-aff-stats-amount"><span class="amount">0</span><span
                                    class="currency">BTC</span></div>
                        <div class="user-aff-stats-desc">{{__('Estimated Balance')}}</div>
                    </div>
                    <i></i>
                    <div>
                        <div class="user-aff-stats-amount"><span class="amount">0</span><span
                                    class="currency">BTC</span></div>
                        <div class="user-aff-stats-desc">{{__('Pending withdrawal')}}</div>
                    </div>
                    <i></i>
                    <div>
                        <div class="user-aff-stats-amount"><span class="amount">0.001</span><span
                                    class="currency">BTC</span></div>
                        <div class="user-aff-stats-desc">{{__('Minimum withdrawal amount')}}</div>
                    </div>
                </section>
                <div class="head-line">
                    <h2>{{__('Affiliate code and links')}}</h2>
                    <button class="btn mini right" type="button" id="refcode_add_new"
                            data-count="2">{{__('Add new code')}}</button>
                </div>
                <section class="user-refcodes-section" id="refcodes" data-count="{{$referralLinks->count()}}">
                    @foreach($referralLinks as $referralLink)
                        <form class="user-refcode" data-code="{{$referralLink->code}}">
                            <header>
                                <div class="user-refcode-code">
                                    <label>{{__('Code')}}:</label>
                                    <span>{{$referralLink->code}}</span>
                                    <button type="button" class="copy-btn ico copy"><i
                                                class="hint blue">{{__('Copied')}}</i></button>
                                </div>
                                <div class="user-refcode-perc-info-link">
                                    <div><span>{{__('40% for exchange via link')}}</span><!--<i class="">?</i>--></div>
                                </div>
                                <div class="user-refcode-delete">
                                    <button type="button" class="btn-text mini" name="delete">{{__('Delete')}}</button>
                                </div>
                            </header>
                            <div class="user-refcode-body">
                                <table>
                                    <tbody>
                                    <tr>
                                        <td>{{__('Simple link')}}:</td>
                                        <td>
                                            <div class="input-texttype darkbg with-copybtn focus"><input
                                                        class="user-refcode-reflink" name="simplelink" readonly=""
                                                        type="text" value="{{url('/')}}?ref={{$referralLink->code}}">
                                                <div class="ico input-texttype-copy"></div>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>{{__('Link with currencies')}}:</td>
                                        <td>
                                            <div class="user-refcode-reflink-ccies-outer">
                                                <div class="input-texttype darkbg wdirccies with-copybtn focus"><input
                                                            class="user-refcode-reflink-ccies" name="ccieslink"
                                                            readonly=""
                                                            type="text"
                                                            value="{{url('/')}}/BTC/USDT/?ref={{$referralLink->code}}">
                                                    <div class="ico input-texttype-copy"></div>
                                                    <div class="specblock"><span
                                                                class="coin-img svgcoin btc"></span><span
                                                                class="ico selfarrow"></span><span
                                                                class="coin-img svgcoin eth"></span></div>
                                                </div>
                                                <div class="user-refcode-reflink-gen none">
                                                    <div class="ui-select-outer with-search" data-value="BTC"><label
                                                                class="ui-select" data-value="BTC">
                                                            <div class="ui-select-value">
                                                                <div class="coin-wrap"><span
                                                                            class="coin-ico coin-img svgcoin btc"></span><span
                                                                            class="coin-name">BTC</span></div>
                                                            </div>
                                                            <div class="ui-select-arrow"></div>
                                                            <div class="ui-select-search"><span
                                                                        class="ui-select-search-ico ico"></span>
                                                                <div class="ui-select-search-inner"><input type="text"
                                                                                                           placeholder="Search">
                                                                </div>
                                                            </div>
                                                        </label>
                                                        <div class="ui-select-list">
                                                            <ul style="padding-right: 0px; width: calc(100% + 0px);">
                                                                <li class="ui-select-option hover" data-value="AAVEETH"
                                                                    data-num="0">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin aaveeth"></span><span
                                                                                class="coin-name">AAVE (ETH)</span>
                                                                    </div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="ADA"
                                                                    data-num="1">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin ada"></span><span
                                                                                class="coin-name">ADA</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="ADABNB"
                                                                    data-num="2">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin adabnb"></span><span
                                                                                class="coin-name">ADA (BNB)</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="ADABSC"
                                                                    data-num="3">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin adabsc"></span><span
                                                                                class="coin-name">ADA (BSC)</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="ATOM"
                                                                    data-num="4">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin atom"></span><span
                                                                                class="coin-name">ATOM</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="AVAX"
                                                                    data-num="5">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin avax"></span><span
                                                                                class="coin-name">AVAX (AVAXC)</span>
                                                                    </div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="BAT"
                                                                    data-num="6">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin bat"></span><span
                                                                                class="coin-name">BAT (ETH)</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="BCH"
                                                                    data-num="7">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin bch"></span><span
                                                                                class="coin-name">BCH</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="BNB"
                                                                    data-num="8">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin bnb"></span><span
                                                                                class="coin-name">BNB</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="BSC"
                                                                    data-num="9">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin bsc"></span><span
                                                                                class="coin-name">BNB (BSC)</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="BTC"
                                                                    data-num="10">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin btc"></span><span
                                                                                class="coin-name">BTC</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="BTCBNB"
                                                                    data-num="11">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin btcbnb"></span><span
                                                                                class="coin-name">BTC (BNB)</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="BTCBSC"
                                                                    data-num="12">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin btcbsc"></span><span
                                                                                class="coin-name">BTC (BSC)</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="BTCLN"
                                                                    data-num="13">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin btcln"></span><span
                                                                                class="coin-name">BTC (LN)</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="BTT"
                                                                    data-num="14">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin btt"></span><span
                                                                                class="coin-name">BTT (TRX)</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="CAKE"
                                                                    data-num="15">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin cake"></span><span
                                                                                class="coin-name">CAKE (BSC)</span>
                                                                    </div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="DAIBSC"
                                                                    data-num="16">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin daibsc"></span><span
                                                                                class="coin-name">DAI (BSC)</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="DAIETH"
                                                                    data-num="17">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin daieth"></span><span
                                                                                class="coin-name">DAI (ETH)</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="DAIMATIC"
                                                                    data-num="18">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin daimatic"></span><span
                                                                                class="coin-name">DAI (MATIC)</span>
                                                                    </div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="DASH"
                                                                    data-num="19">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin dash"></span><span
                                                                                class="coin-name">DASH</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="DOGE"
                                                                    data-num="20">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin doge"></span><span
                                                                                class="coin-name">DOGE</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="DOT"
                                                                    data-num="21">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin dot"></span><span
                                                                                class="coin-name">DOT</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="EOS"
                                                                    data-num="22">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin eos"></span><span
                                                                                class="coin-name">EOS</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="ETC"
                                                                    data-num="23">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin etc"></span><span
                                                                                class="coin-name">ETC</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="ETH"
                                                                    data-num="24">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin eth"></span><span
                                                                                class="coin-name">ETH</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="ETHARBITRUM"
                                                                    data-num="25">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin etharbitrum"></span><span
                                                                                class="coin-name">ETH (ARBITRUM)</span>
                                                                    </div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="ETHBNB"
                                                                    data-num="26">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin ethbnb"></span><span
                                                                                class="coin-name">ETH (BNB)</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="ETHBSC"
                                                                    data-num="27">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin ethbsc"></span><span
                                                                                class="coin-name">ETH (BSC)</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="FTM"
                                                                    data-num="28">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin ftm"></span><span
                                                                                class="coin-name">FTM</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="KCS"
                                                                    data-num="29">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin kcs"></span><span
                                                                                class="coin-name">KCS (KCC)</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="LINK"
                                                                    data-num="30">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin link"></span><span
                                                                                class="coin-name">LINK (ETH)</span>
                                                                    </div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="LTC"
                                                                    data-num="31">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin ltc"></span><span
                                                                                class="coin-name">LTC</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="MANAETH"
                                                                    data-num="32">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin manaeth"></span><span
                                                                                class="coin-name">MANA (ETH)</span>
                                                                    </div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="MATIC"
                                                                    data-num="33">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin matic"></span><span
                                                                                class="coin-name">MATIC</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="MATICETH"
                                                                    data-num="34">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin maticeth"></span><span
                                                                                class="coin-name">MATIC (ETH)</span>
                                                                    </div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="MKR"
                                                                    data-num="35">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin mkr"></span><span
                                                                                class="coin-name">MKR (ETH)</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="PAXGETH"
                                                                    data-num="36">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin paxgeth"></span><span
                                                                                class="coin-name">PAXG (ETH)</span>
                                                                    </div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="SHIB"
                                                                    data-num="37">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin shib"></span><span
                                                                                class="coin-name">SHIB (ETH)</span>
                                                                    </div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="SHIBBSC"
                                                                    data-num="38">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin shibbsc"></span><span
                                                                                class="coin-name">SHIB (BSC)</span>
                                                                    </div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="SOL"
                                                                    data-num="39">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin sol"></span><span
                                                                                class="coin-name">SOL</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="TON"
                                                                    data-num="40">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin ton"></span><span
                                                                                class="coin-name">TON</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="TRX"
                                                                    data-num="41">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin trx"></span><span
                                                                                class="coin-name">TRX</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="TUSD"
                                                                    data-num="42">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin tusd"></span><span
                                                                                class="coin-name">TUSD (ETH)</span>
                                                                    </div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="TWT"
                                                                    data-num="43">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin twt"></span><span
                                                                                class="coin-name">TWT (BNB)</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="TWTBSC"
                                                                    data-num="44">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin twtbsc"></span><span
                                                                                class="coin-name">TWT (BSC)</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="USDCBSC"
                                                                    data-num="45">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin usdcbsc"></span><span
                                                                                class="coin-name">USDC (BSC)</span>
                                                                    </div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="USDCeMATIC"
                                                                    data-num="46">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin usdcematic"></span><span
                                                                                class="coin-name">USDCe (MATIC)</span>
                                                                    </div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="USDCETH"
                                                                    data-num="47">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin usdceth"></span><span
                                                                                class="coin-name">USDC (ETH)</span>
                                                                    </div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="USDCMATIC"
                                                                    data-num="48">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin usdcmatic"></span><span
                                                                                class="coin-name">USDC (MATIC)</span>
                                                                    </div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="USDCSOL"
                                                                    data-num="49">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin usdcsol"></span><span
                                                                                class="coin-name">USDC (SOL)</span>
                                                                    </div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="USDCTRC"
                                                                    data-num="50">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin usdctrc"></span><span
                                                                                class="coin-name">USDC (TRX)</span>
                                                                    </div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="USDP"
                                                                    data-num="51">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin usdp"></span><span
                                                                                class="coin-name">USDP (ETH)</span>
                                                                    </div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="USDT"
                                                                    data-num="52">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin usdt"></span><span
                                                                                class="coin-name">USDT (ETH)</span>
                                                                    </div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="USDTARBITRUM"
                                                                    data-num="53">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin usdtarbitrum"></span><span
                                                                                class="coin-name">USDT (ARBITRUM)</span>
                                                                    </div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="USDTBNB"
                                                                    data-num="54">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin usdtbnb"></span><span
                                                                                class="coin-name">USDT (BNB)</span>
                                                                    </div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="USDTBSC"
                                                                    data-num="55">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin usdtbsc"></span><span
                                                                                class="coin-name">USDT (BSC)</span>
                                                                    </div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="USDTMATIC"
                                                                    data-num="56">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin usdtmatic"></span><span
                                                                                class="coin-name">USDT (MATIC)</span>
                                                                    </div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="USDTSOL"
                                                                    data-num="57">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin usdtsol"></span><span
                                                                                class="coin-name">USDT (SOL)</span>
                                                                    </div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="USDTTRC"
                                                                    data-num="58">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin usdttrc"></span><span
                                                                                class="coin-name">USDT (TRX)</span>
                                                                    </div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="VET"
                                                                    data-num="59">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin vet"></span><span
                                                                                class="coin-name">VET</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="WBNBBSC"
                                                                    data-num="60">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin wbnbbsc"></span><span
                                                                                class="coin-name">WBNB (BSC)</span>
                                                                    </div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="WETHETH"
                                                                    data-num="61">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin wetheth"></span><span
                                                                                class="coin-name">WETH (ETH)</span>
                                                                    </div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="XLM"
                                                                    data-num="62">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin xlm"></span><span
                                                                                class="coin-name">XLM</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="XMR"
                                                                    data-num="63">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin xmr"></span><span
                                                                                class="coin-name">XMR</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="XRP"
                                                                    data-num="64">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin xrp"></span><span
                                                                                class="coin-name">XRP</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="XTZ"
                                                                    data-num="65">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin xtz"></span><span
                                                                                class="coin-name">XTZ</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="ZEC"
                                                                    data-num="66">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin zec"></span><span
                                                                                class="coin-name">ZEC</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="ZRX"
                                                                    data-num="67">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin zrx"></span><span
                                                                                class="coin-name">ZRX (ETH)</span></div>
                                                                </li>
                                                            </ul>
                                                            <div class="ui-select-scroll-wrap hidden" data-height="100">
                                                                <div class="ui-select-scroll"
                                                                     style="top: 0px; height: 100%;"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <select name="ccy_from" class="hidden">
                                                        <option value="AAVEETH" data-icon="aaveeth">AAVE (ETH)</option>
                                                        <option value="ADA" data-icon="ada">ADA</option>
                                                        <option value="ADABNB" data-icon="adabnb">ADA (BNB)</option>
                                                        <option value="ADABSC" data-icon="adabsc">ADA (BSC)</option>
                                                        <option value="ATOM" data-icon="atom">ATOM</option>
                                                        <option value="AVAX" data-icon="avax">AVAX (AVAXC)</option>
                                                        <option value="BAT" data-icon="bat">BAT (ETH)</option>
                                                        <option value="BCH" data-icon="bch">BCH</option>
                                                        <option value="BNB" data-icon="bnb">BNB</option>
                                                        <option value="BSC" data-icon="bsc">BNB (BSC)</option>
                                                        <option value="BTC" data-icon="btc" selected="">BTC</option>
                                                        <option value="BTCBNB" data-icon="btcbnb">BTC (BNB)</option>
                                                        <option value="BTCBSC" data-icon="btcbsc">BTC (BSC)</option>
                                                        <option value="BTCLN" data-icon="btcln">BTC (LN)</option>
                                                        <option value="BTT" data-icon="btt">BTT (TRX)</option>
                                                        <option value="CAKE" data-icon="cake">CAKE (BSC)</option>
                                                        <option value="DAIBSC" data-icon="daibsc">DAI (BSC)</option>
                                                        <option value="DAIETH" data-icon="daieth">DAI (ETH)</option>
                                                        <option value="DAIMATIC" data-icon="daimatic">DAI (MATIC)
                                                        </option>
                                                        <option value="DASH" data-icon="dash">DASH</option>
                                                        <option value="DOGE" data-icon="doge">DOGE</option>
                                                        <option value="DOT" data-icon="dot">DOT</option>
                                                        <option value="EOS" data-icon="eos">EOS</option>
                                                        <option value="ETC" data-icon="etc">ETC</option>
                                                        <option value="ETH" data-icon="eth">ETH</option>
                                                        <option value="ETHARBITRUM" data-icon="etharbitrum">ETH
                                                            (ARBITRUM)
                                                        </option>
                                                        <option value="ETHBNB" data-icon="ethbnb">ETH (BNB)</option>
                                                        <option value="ETHBSC" data-icon="ethbsc">ETH (BSC)</option>
                                                        <option value="FTM" data-icon="ftm">FTM</option>
                                                        <option value="KCS" data-icon="kcs">KCS (KCC)</option>
                                                        <option value="LINK" data-icon="link">LINK (ETH)</option>
                                                        <option value="LTC" data-icon="ltc">LTC</option>
                                                        <option value="MANAETH" data-icon="manaeth">MANA (ETH)</option>
                                                        <option value="MATIC" data-icon="matic">MATIC</option>
                                                        <option value="MATICETH" data-icon="maticeth">MATIC (ETH)
                                                        </option>
                                                        <option value="MKR" data-icon="mkr">MKR (ETH)</option>
                                                        <option value="PAXGETH" data-icon="paxgeth">PAXG (ETH)</option>
                                                        <option value="SHIB" data-icon="shib">SHIB (ETH)</option>
                                                        <option value="SHIBBSC" data-icon="shibbsc">SHIB (BSC)</option>
                                                        <option value="SOL" data-icon="sol">SOL</option>
                                                        <option value="TON" data-icon="ton">TON</option>
                                                        <option value="TRX" data-icon="trx">TRX</option>
                                                        <option value="TUSD" data-icon="tusd">TUSD (ETH)</option>
                                                        <option value="TWT" data-icon="twt">TWT (BNB)</option>
                                                        <option value="TWTBSC" data-icon="twtbsc">TWT (BSC)</option>
                                                        <option value="USDCBSC" data-icon="usdcbsc">USDC (BSC)</option>
                                                        <option value="USDCeMATIC" data-icon="usdcematic">USDCe (MATIC)
                                                        </option>
                                                        <option value="USDCETH" data-icon="usdceth">USDC (ETH)</option>
                                                        <option value="USDCMATIC" data-icon="usdcmatic">USDC (MATIC)
                                                        </option>
                                                        <option value="USDCSOL" data-icon="usdcsol">USDC (SOL)</option>
                                                        <option value="USDCTRC" data-icon="usdctrc">USDC (TRX)</option>
                                                        <option value="USDP" data-icon="usdp">USDP (ETH)</option>
                                                        <option value="USDT" data-icon="usdt">USDT (ETH)</option>
                                                        <option value="USDTARBITRUM" data-icon="usdtarbitrum">USDT
                                                            (ARBITRUM)
                                                        </option>
                                                        <option value="USDTBNB" data-icon="usdtbnb">USDT (BNB)</option>
                                                        <option value="USDTBSC" data-icon="usdtbsc">USDT (BSC)</option>
                                                        <option value="USDTMATIC" data-icon="usdtmatic">USDT (MATIC)
                                                        </option>
                                                        <option value="USDTSOL" data-icon="usdtsol">USDT (SOL)</option>
                                                        <option value="USDTTRC" data-icon="usdttrc">USDT (TRX)</option>
                                                        <option value="VET" data-icon="vet">VET</option>
                                                        <option value="WBNBBSC" data-icon="wbnbbsc">WBNB (BSC)</option>
                                                        <option value="WETHETH" data-icon="wetheth">WETH (ETH)</option>
                                                        <option value="XLM" data-icon="xlm">XLM</option>
                                                        <option value="XMR" data-icon="xmr">XMR</option>
                                                        <option value="XRP" data-icon="xrp">XRP</option>
                                                        <option value="XTZ" data-icon="xtz">XTZ</option>
                                                        <option value="ZEC" data-icon="zec">ZEC</option>
                                                        <option value="ZRX" data-icon="zrx">ZRX (ETH)</option>
                                                    </select>
                                                    <div class="ui-select-outer with-search" data-value="ETH"><label
                                                                class="ui-select" data-value="ETH">
                                                            <div class="ui-select-value">
                                                                <div class="coin-wrap"><span
                                                                            class="coin-ico coin-img svgcoin eth"></span><span
                                                                            class="coin-name">ETH</span></div>
                                                            </div>
                                                            <div class="ui-select-arrow"></div>
                                                            <div class="ui-select-search"><span
                                                                        class="ui-select-search-ico ico"></span>
                                                                <div class="ui-select-search-inner"><input type="text"
                                                                                                           placeholder="Search">
                                                                </div>
                                                            </div>
                                                        </label>
                                                        <div class="ui-select-list">
                                                            <ul style="padding-right: 0px; width: calc(100% + 0px);">
                                                                <li class="ui-select-option hover" data-value="AAVEETH"
                                                                    data-num="0">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin aaveeth"></span><span
                                                                                class="coin-name">AAVE (ETH)</span>
                                                                    </div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="ADA"
                                                                    data-num="1">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin ada"></span><span
                                                                                class="coin-name">ADA</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="ADABNB"
                                                                    data-num="2">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin adabnb"></span><span
                                                                                class="coin-name">ADA (BNB)</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="ADABSC"
                                                                    data-num="3">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin adabsc"></span><span
                                                                                class="coin-name">ADA (BSC)</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="ATOM"
                                                                    data-num="4">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin atom"></span><span
                                                                                class="coin-name">ATOM</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="AVAX"
                                                                    data-num="5">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin avax"></span><span
                                                                                class="coin-name">AVAX (AVAXC)</span>
                                                                    </div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="BAT"
                                                                    data-num="6">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin bat"></span><span
                                                                                class="coin-name">BAT (ETH)</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="BCH"
                                                                    data-num="7">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin bch"></span><span
                                                                                class="coin-name">BCH</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="BNB"
                                                                    data-num="8">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin bnb"></span><span
                                                                                class="coin-name">BNB</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="BSC"
                                                                    data-num="9">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin bsc"></span><span
                                                                                class="coin-name">BNB (BSC)</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="BTC"
                                                                    data-num="10">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin btc"></span><span
                                                                                class="coin-name">BTC</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="BTCBNB"
                                                                    data-num="11">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin btcbnb"></span><span
                                                                                class="coin-name">BTC (BNB)</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="BTCBSC"
                                                                    data-num="12">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin btcbsc"></span><span
                                                                                class="coin-name">BTC (BSC)</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="BTCLN"
                                                                    data-num="13">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin btcln"></span><span
                                                                                class="coin-name">BTC (LN)</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="BTT"
                                                                    data-num="14">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin btt"></span><span
                                                                                class="coin-name">BTT (TRX)</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="CAKE"
                                                                    data-num="15">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin cake"></span><span
                                                                                class="coin-name">CAKE (BSC)</span>
                                                                    </div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="DAIBSC"
                                                                    data-num="16">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin daibsc"></span><span
                                                                                class="coin-name">DAI (BSC)</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="DAIETH"
                                                                    data-num="17">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin daieth"></span><span
                                                                                class="coin-name">DAI (ETH)</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="DAIMATIC"
                                                                    data-num="18">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin daimatic"></span><span
                                                                                class="coin-name">DAI (MATIC)</span>
                                                                    </div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="DASH"
                                                                    data-num="19">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin dash"></span><span
                                                                                class="coin-name">DASH</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="DOGE"
                                                                    data-num="20">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin doge"></span><span
                                                                                class="coin-name">DOGE</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="DOT"
                                                                    data-num="21">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin dot"></span><span
                                                                                class="coin-name">DOT</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="EOS"
                                                                    data-num="22">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin eos"></span><span
                                                                                class="coin-name">EOS</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="ETC"
                                                                    data-num="23">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin etc"></span><span
                                                                                class="coin-name">ETC</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="ETH"
                                                                    data-num="24">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin eth"></span><span
                                                                                class="coin-name">ETH</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="ETHARBITRUM"
                                                                    data-num="25">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin etharbitrum"></span><span
                                                                                class="coin-name">ETH (ARBITRUM)</span>
                                                                    </div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="ETHBNB"
                                                                    data-num="26">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin ethbnb"></span><span
                                                                                class="coin-name">ETH (BNB)</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="ETHBSC"
                                                                    data-num="27">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin ethbsc"></span><span
                                                                                class="coin-name">ETH (BSC)</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="FTM"
                                                                    data-num="28">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin ftm"></span><span
                                                                                class="coin-name">FTM</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="KCS"
                                                                    data-num="29">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin kcs"></span><span
                                                                                class="coin-name">KCS (KCC)</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="LINK"
                                                                    data-num="30">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin link"></span><span
                                                                                class="coin-name">LINK (ETH)</span>
                                                                    </div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="LTC"
                                                                    data-num="31">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin ltc"></span><span
                                                                                class="coin-name">LTC</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="MANAETH"
                                                                    data-num="32">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin manaeth"></span><span
                                                                                class="coin-name">MANA (ETH)</span>
                                                                    </div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="MATIC"
                                                                    data-num="33">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin matic"></span><span
                                                                                class="coin-name">MATIC</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="MATICETH"
                                                                    data-num="34">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin maticeth"></span><span
                                                                                class="coin-name">MATIC (ETH)</span>
                                                                    </div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="MKR"
                                                                    data-num="35">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin mkr"></span><span
                                                                                class="coin-name">MKR (ETH)</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="PAXGETH"
                                                                    data-num="36">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin paxgeth"></span><span
                                                                                class="coin-name">PAXG (ETH)</span>
                                                                    </div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="SHIB"
                                                                    data-num="37">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin shib"></span><span
                                                                                class="coin-name">SHIB (ETH)</span>
                                                                    </div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="SHIBBSC"
                                                                    data-num="38">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin shibbsc"></span><span
                                                                                class="coin-name">SHIB (BSC)</span>
                                                                    </div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="SOL"
                                                                    data-num="39">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin sol"></span><span
                                                                                class="coin-name">SOL</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="TON"
                                                                    data-num="40">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin ton"></span><span
                                                                                class="coin-name">TON</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="TRX"
                                                                    data-num="41">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin trx"></span><span
                                                                                class="coin-name">TRX</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="TUSD"
                                                                    data-num="42">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin tusd"></span><span
                                                                                class="coin-name">TUSD (ETH)</span>
                                                                    </div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="TWT"
                                                                    data-num="43">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin twt"></span><span
                                                                                class="coin-name">TWT (BNB)</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="TWTBSC"
                                                                    data-num="44">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin twtbsc"></span><span
                                                                                class="coin-name">TWT (BSC)</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="USDCBSC"
                                                                    data-num="45">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin usdcbsc"></span><span
                                                                                class="coin-name">USDC (BSC)</span>
                                                                    </div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="USDCeMATIC"
                                                                    data-num="46">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin usdcematic"></span><span
                                                                                class="coin-name">USDCe (MATIC)</span>
                                                                    </div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="USDCETH"
                                                                    data-num="47">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin usdceth"></span><span
                                                                                class="coin-name">USDC (ETH)</span>
                                                                    </div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="USDCMATIC"
                                                                    data-num="48">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin usdcmatic"></span><span
                                                                                class="coin-name">USDC (MATIC)</span>
                                                                    </div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="USDCSOL"
                                                                    data-num="49">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin usdcsol"></span><span
                                                                                class="coin-name">USDC (SOL)</span>
                                                                    </div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="USDCTRC"
                                                                    data-num="50">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin usdctrc"></span><span
                                                                                class="coin-name">USDC (TRX)</span>
                                                                    </div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="USDP"
                                                                    data-num="51">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin usdp"></span><span
                                                                                class="coin-name">USDP (ETH)</span>
                                                                    </div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="USDT"
                                                                    data-num="52">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin usdt"></span><span
                                                                                class="coin-name">USDT (ETH)</span>
                                                                    </div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="USDTARBITRUM"
                                                                    data-num="53">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin usdtarbitrum"></span><span
                                                                                class="coin-name">USDT (ARBITRUM)</span>
                                                                    </div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="USDTBNB"
                                                                    data-num="54">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin usdtbnb"></span><span
                                                                                class="coin-name">USDT (BNB)</span>
                                                                    </div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="USDTBSC"
                                                                    data-num="55">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin usdtbsc"></span><span
                                                                                class="coin-name">USDT (BSC)</span>
                                                                    </div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="USDTMATIC"
                                                                    data-num="56">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin usdtmatic"></span><span
                                                                                class="coin-name">USDT (MATIC)</span>
                                                                    </div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="USDTSOL"
                                                                    data-num="57">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin usdtsol"></span><span
                                                                                class="coin-name">USDT (SOL)</span>
                                                                    </div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="USDTTRC"
                                                                    data-num="58">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin usdttrc"></span><span
                                                                                class="coin-name">USDT (TRX)</span>
                                                                    </div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="VET"
                                                                    data-num="59">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin vet"></span><span
                                                                                class="coin-name">VET</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="WBNBBSC"
                                                                    data-num="60">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin wbnbbsc"></span><span
                                                                                class="coin-name">WBNB (BSC)</span>
                                                                    </div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="WETHETH"
                                                                    data-num="61">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin wetheth"></span><span
                                                                                class="coin-name">WETH (ETH)</span>
                                                                    </div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="XLM"
                                                                    data-num="62">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin xlm"></span><span
                                                                                class="coin-name">XLM</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="XMR"
                                                                    data-num="63">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin xmr"></span><span
                                                                                class="coin-name">XMR</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="XRP"
                                                                    data-num="64">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin xrp"></span><span
                                                                                class="coin-name">XRP</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="XTZ"
                                                                    data-num="65">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin xtz"></span><span
                                                                                class="coin-name">XTZ</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="ZEC"
                                                                    data-num="66">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin zec"></span><span
                                                                                class="coin-name">ZEC</span></div>
                                                                </li>
                                                                <li class="ui-select-option" data-value="ZRX"
                                                                    data-num="67">
                                                                    <div class="coin-wrap"><span
                                                                                class="coin-ico coin-img svgcoin zrx"></span><span
                                                                                class="coin-name">ZRX (ETH)</span></div>
                                                                </li>
                                                            </ul>
                                                            <div class="ui-select-scroll-wrap hidden" data-height="100">
                                                                <div class="ui-select-scroll"
                                                                     style="top: 0px; height: 100%;"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <select name="ccy_to" class="hidden">
                                                        <option value="AAVEETH" data-icon="aaveeth">AAVE (ETH)</option>
                                                        <option value="ADA" data-icon="ada">ADA</option>
                                                        <option value="ADABNB" data-icon="adabnb">ADA (BNB)</option>
                                                        <option value="ADABSC" data-icon="adabsc">ADA (BSC)</option>
                                                        <option value="ATOM" data-icon="atom">ATOM</option>
                                                        <option value="AVAX" data-icon="avax">AVAX (AVAXC)</option>
                                                        <option value="BAT" data-icon="bat">BAT (ETH)</option>
                                                        <option value="BCH" data-icon="bch">BCH</option>
                                                        <option value="BNB" data-icon="bnb">BNB</option>
                                                        <option value="BSC" data-icon="bsc">BNB (BSC)</option>
                                                        <option value="BTC" data-icon="btc">BTC</option>
                                                        <option value="BTCBNB" data-icon="btcbnb">BTC (BNB)</option>
                                                        <option value="BTCBSC" data-icon="btcbsc">BTC (BSC)</option>
                                                        <option value="BTCLN" data-icon="btcln">BTC (LN)</option>
                                                        <option value="BTT" data-icon="btt">BTT (TRX)</option>
                                                        <option value="CAKE" data-icon="cake">CAKE (BSC)</option>
                                                        <option value="DAIBSC" data-icon="daibsc">DAI (BSC)</option>
                                                        <option value="DAIETH" data-icon="daieth">DAI (ETH)</option>
                                                        <option value="DAIMATIC" data-icon="daimatic">DAI (MATIC)
                                                        </option>
                                                        <option value="DASH" data-icon="dash">DASH</option>
                                                        <option value="DOGE" data-icon="doge">DOGE</option>
                                                        <option value="DOT" data-icon="dot">DOT</option>
                                                        <option value="EOS" data-icon="eos">EOS</option>
                                                        <option value="ETC" data-icon="etc">ETC</option>
                                                        <option value="ETH" data-icon="eth" selected="">ETH</option>
                                                        <option value="ETHARBITRUM" data-icon="etharbitrum">ETH
                                                            (ARBITRUM)
                                                        </option>
                                                        <option value="ETHBNB" data-icon="ethbnb">ETH (BNB)</option>
                                                        <option value="ETHBSC" data-icon="ethbsc">ETH (BSC)</option>
                                                        <option value="FTM" data-icon="ftm">FTM</option>
                                                        <option value="KCS" data-icon="kcs">KCS (KCC)</option>
                                                        <option value="LINK" data-icon="link">LINK (ETH)</option>
                                                        <option value="LTC" data-icon="ltc">LTC</option>
                                                        <option value="MANAETH" data-icon="manaeth">MANA (ETH)</option>
                                                        <option value="MATIC" data-icon="matic">MATIC</option>
                                                        <option value="MATICETH" data-icon="maticeth">MATIC (ETH)
                                                        </option>
                                                        <option value="MKR" data-icon="mkr">MKR (ETH)</option>
                                                        <option value="PAXGETH" data-icon="paxgeth">PAXG (ETH)</option>
                                                        <option value="SHIB" data-icon="shib">SHIB (ETH)</option>
                                                        <option value="SHIBBSC" data-icon="shibbsc">SHIB (BSC)</option>
                                                        <option value="SOL" data-icon="sol">SOL</option>
                                                        <option value="TON" data-icon="ton">TON</option>
                                                        <option value="TRX" data-icon="trx">TRX</option>
                                                        <option value="TUSD" data-icon="tusd">TUSD (ETH)</option>
                                                        <option value="TWT" data-icon="twt">TWT (BNB)</option>
                                                        <option value="TWTBSC" data-icon="twtbsc">TWT (BSC)</option>
                                                        <option value="USDCBSC" data-icon="usdcbsc">USDC (BSC)</option>
                                                        <option value="USDCeMATIC" data-icon="usdcematic">USDCe (MATIC)
                                                        </option>
                                                        <option value="USDCETH" data-icon="usdceth">USDC (ETH)</option>
                                                        <option value="USDCMATIC" data-icon="usdcmatic">USDC (MATIC)
                                                        </option>
                                                        <option value="USDCSOL" data-icon="usdcsol">USDC (SOL)</option>
                                                        <option value="USDCTRC" data-icon="usdctrc">USDC (TRX)</option>
                                                        <option value="USDP" data-icon="usdp">USDP (ETH)</option>
                                                        <option value="USDT" data-icon="usdt">USDT (ETH)</option>
                                                        <option value="USDTARBITRUM" data-icon="usdtarbitrum">USDT
                                                            (ARBITRUM)
                                                        </option>
                                                        <option value="USDTBNB" data-icon="usdtbnb">USDT (BNB)</option>
                                                        <option value="USDTBSC" data-icon="usdtbsc">USDT (BSC)</option>
                                                        <option value="USDTMATIC" data-icon="usdtmatic">USDT (MATIC)
                                                        </option>
                                                        <option value="USDTSOL" data-icon="usdtsol">USDT (SOL)</option>
                                                        <option value="USDTTRC" data-icon="usdttrc">USDT (TRX)</option>
                                                        <option value="VET" data-icon="vet">VET</option>
                                                        <option value="WBNBBSC" data-icon="wbnbbsc">WBNB (BSC)</option>
                                                        <option value="WETHETH" data-icon="wetheth">WETH (ETH)</option>
                                                        <option value="XLM" data-icon="xlm">XLM</option>
                                                        <option value="XMR" data-icon="xmr">XMR</option>
                                                        <option value="XRP" data-icon="xrp">XRP</option>
                                                        <option value="XTZ" data-icon="xtz">XTZ</option>
                                                        <option value="ZEC" data-icon="zec">ZEC</option>
                                                        <option value="ZRX" data-icon="zrx">ZRX (ETH)</option>
                                                    </select>
                                                    <button class="btn mini generate" type="button" name="generate">
                                                        Generate
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </form>
                    @endforeach
                </section>
                <h2>{{__('Affiliate orders')}}</h2>
                <section class="user-aff-orders">
                    <div class="ztp-wrap">
                        <div class="ztp-length"></div>
                        <div class="ztp-outer">
                            <div class="ztp-scroll">
                                <table class="ztp" id="table">
                                    <caption></caption>
                                    <thead>
                                    <tr>
                                        <td class="min sort-desc" data-type="reg">
                                            <div class="mh">{{__('Date')}}<span class="ico"></span></div>
                                        </td>
                                        <td class="min">
                                            <div class="mh">{{__('Order')}}</div>
                                        </td>
                                        <td class="">
                                            <div class="mh">{{__('Profit')}}</div>
                                        </td>
                                        <td class="">
                                            <div class="mh">{{__('Paid')}}</div>
                                        </td>
                                    </tr>
                                    </thead>
                                    <tbody></tbody>
                                </table>
                                <table class="ztp-template none">
                                    <tbody>
                                    <tr class="ztp-tmpl" id="table_tmpl">
                                        <td>
                                            <div class="ztp-c mh" data-type="reg">{reg_d} {reg_t}</div>
                                        </td>
                                        <td>
                                            <div class="ztp-c mh" data-type="order">{order}</div>
                                        </td>
                                        <td>
                                            <div class="ztp-c mh" data-type="amount"><span
                                                        class="ib-middle coin-img svgcoin {ccyCoin_img}"></span> <span
                                                        class="ib-middle">{amount} {ccyCoin}</span></div>
                                        </td>
                                        <td>
                                            <div class="ztp-c mh" data-type="paid" data-value="{paid}">{paid_valname}
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="ztp-tmpl" id="table_tmpl_more">
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="ztp-bottom clrfix">
                            <div class="ztp-countshow">
                                <span class="ztp-countshow-before">{{__('Show')}}</span>
                                <span class="select-wrap">
									<select id="table_countshow">
										<option>10</option>
										<option selected="">25</option>
										<option>50</option>
										<option>75</option>
										<option>100</option>
										<option>125</option>
										<option>150</option>
									</select>
									<i class="select-arrow"></i>
								</span>
                                <span class="ztp-countshow-after">{{__('entries')}}</span>
                            </div>
                            <ul class="ztp-paginate clrfix" id="table_pages" data-pages="">
                                <li>
                                    <button class="ztp-page-prev" disabled="">‹</button>
                                </li>
                                <li>
                                    <button class="ztp-page-number active">1</button>
                                </li>
                                <li>
                                    <button class="ztp-page-next" disabled="">›</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>
    </main>
    @include('includes.tmpl_refcodeform')
    @include('includes.tmpl_ccieslink')
    @include('includes.selector_tmpl')
    @include('includes.confirm_delete_refcode')
    @include('includes.confirm_add_refcode')
    @include('includes.confirm_add_refcode_error')
    @push('js')
        <script type="text/javascript" src="{{asset('assets/js/ui/ztable.js')}}"></script>
        <script type="text/javascript">
            document.addEventListener("DOMContentLoaded", function () {
                let F = UI.func;
                F.bind(document.querySelectorAll('.input-copy'), 'click', function () {
                    this.select();
                });

                let refCount = +F.id('refcodes').getAttribute('data-count');
                let forms = document.querySelectorAll('.user-refcode');

                function formInit(form) {
                    UI.textbox(form.simplelink, {btnCopy: true, readonly: true, addclass: 'darkbg'})
                        .click(function (input) {
                            input.select()
                        });

                    let spec = F.fmt(F.id('tmpl_ccieslink').innerHTML, {from: 'btc', to: 'eth'});
                    let Ccislink = UI.textbox(form.ccieslink, {
                        btnCopy: true,
                        readonly: true,
                        addclass: ['darkbg', 'wdirccies'],
                        specblock: spec
                    }).click(function (input) {
                        input.select()
                    });
                    console.log(Ccislink.specblock);
                    F.bind(Ccislink.specblock, 'click', function () {
                        console.log(Ccislink.specblock);
                        let inpCont = this.parentNode;
                        let genBlock = inpCont.parentNode.querySelector('.user-refcode-reflink-gen');
                        console.log(inpCont, genBlock);
                        F.addClass(inpCont, 'none');
                        F.remClass(genBlock, 'none');
                    })


                    let selectorFrom = UI.selector(form.ccy_from, {
                        tmpl: F.id('selector_tmpl').innerHTML,
                        search: {placeholder: 'Search', label: 'Found'},
                    });

                    let selectorTo = UI.selector(form.ccy_to, {
                        tmpl: F.id('selector_tmpl').innerHTML,
                        search: {placeholder: 'Search', label: 'Found'},
                    });

                    F.bind(form.generate, 'click', function () {
                        let genBlock = this.parentNode;
                        let inpCont = genBlock.parentNode.querySelector('.input-texttype');
                        let code = form.getAttribute('data-code');
                        let from = selectorFrom.val();
                        let to = selectorTo.val();

                        let link = '{{url('/')}}/' + from + '/' + to + '/?ref=' + code;
                        Ccislink.specblock.innerHTML = F.fmt(F.id('tmpl_ccieslink').innerHTML, {
                            from: from.toLowerCase(),
                            to: to.toLowerCase()
                        });
                        Ccislink.val(link);

                        F.remClass(inpCont, 'none');
                        F.addClass(genBlock, 'none');
                    })

                    F.bind(form.delete, 'click', function () {
                        let refCode = form.getAttribute('data-code');
                        let tmpl = F.id('confirm_delete_refcode');
                        UI.confirm(
                            F.fmt(tmpl.innerHTML, refCode),
                            function () {
                                APP.api('userDeleteRefCode', {ref: refCode})
                                    .then(function (msg) {
                                        form.remove();
                                    })
                                    .catch(function (msg) {
                                        UI.alert('Internal error');
                                    })
                            },
                            {ok: tmpl.getAttribute('data-confirm'), cancel: tmpl.getAttribute('data-cancel')}
                        );
                    })
                }

                forms.forEach(function (form) {
                    formInit(form);
                })


                F.bind('refcode_add_new', 'click', function () {
                    let count = this.getAttribute('data-count');
                    if (count < 5) {
                        let tmpl = F.id('confirm_add_refcode');
                        UI.confirm(
                            tmpl.innerHTML, function () {
                                APP.api('userGenerateRefCode', {})
                                    .then(function (msg) {
                                        msg.data['afftax_web_100'] = msg.data['afftax_web'] * 100;
                                        msg.data['afftax_api_100'] = msg.data['afftax_api'] * 100;
                                        let form = document.createElement('form');
                                        F.addClass(form, 'user-refcode');
                                        form.setAttribute('data-code', msg.data['ref_code'])
                                        form.innerHTML = F.fmt(F.id('tmpl_refcodeform').innerHTML, msg.data);
                                        F.id('refcodes').appendChild(form);
                                        formInit(form);
                                    })
                                    .catch(function (msg) {
                                        UI.alert('Internal error');
                                    })
                            },
                            {ok: tmpl.getAttribute('data-confirm'), cancel: tmpl.getAttribute('data-cancel')}
                        );
                    } else {
                        UI.alert(F.id('confirm_add_refcode_error').innerHTML);
                    }
                })


                let ui_orders = UI.ztable('table', {
                    ajaxFunc: {
                        'load': 'userAffiliateOrders',
                    },
                    typeSelect: {
                        paid: {
                            0: '—',
                            1: 'Paid',
                            2: 'Pending',
                        }
                    },
                    onRowInit: function (row) {
                        let reg = moment.unix(+row.reg);
                        row.reg_d = reg.format('L');
                        row.reg_t = reg.format('HH:mm');
                        row.ccyCoin_img = row.ccyCoin.toLowerCase();
                        row.paid = +row.topayout && !+row.paid ? 2 : row.paid;
                    },
                });

                F.bind(document.querySelectorAll('.copy-btn'), 'click', function () {
                    let inp = this.previousElementSibling;
                    F.copy(inp.value);
                    inp.select();
                })
            })
        </script>
    @endpush
</x-app-layout>
