<x-app-layout>
    <main>
        <section id="index_main" class="main-section withheader darkbg">
            @include('includes.header')
            @includeWhen(!auth()->check(),'includes.auth')
            <div class="main-background">
                <img class="main-bg" src="{{asset('/assets/images/background/mainbg/space.svg')}}">
                <div class="main-bg-comets">
                    <div class="comet"></div>
                    <div class="comet"></div>
                    <div class="comet"></div>
                    <div class="comet"></div>
                    <div class="comet"></div>
                    <div class="comet"></div>
                </div>
                <img class="main-bg" src="{{asset('/assets/images/background/mainbg/planets_xmas.svg')}}">
                <div class="main-bg-snow" id="mainbg_snow">
                    <div class="snowflake" data-type="5"></div>
                    <div class="snowflake" data-type="9"></div>
                    <div class="snowflake" data-type="6"></div>
                    <div class="snowflake" data-type="2"></div>
                    <div class="snowflake" data-type="6"></div>
                    <div class="snowflake" data-type="4"></div>
                    <div class="snowflake" data-type="6"></div>
                    <div class="snowflake" data-type="2"></div>
                    <div class="snowflake" data-type="4"></div>
                    <div class="snowflake" data-type="2"></div>
                    <div class="snowflake" data-type="7"></div>
                    <div class="snowflake" data-type="6"></div>
                    <div class="snowflake" data-type="4"></div>
                    <div class="snowflake" data-type="10"></div>
                    <div class="snowflake" data-type="4"></div>
                    <div class="snowflake" data-type="5"></div>
                    <div class="snowflake" data-type="3"></div>
                    <div class="snowflake" data-type="6"></div>
                    <div class="snowflake" data-type="4"></div>
                    <div class="snowflake" data-type="4"></div>
                    <div class="snowflake" data-type="1"></div>
                    <div class="snowflake" data-type="5"></div>
                    <div class="snowflake" data-type="5"></div>
                    <div class="snowflake" data-type="0"></div>
                    <div class="snowflake" data-type="6"></div>
                    <div class="snowflake" data-type="8"></div>
                    <div class="snowflake" data-type="9"></div>
                    <div class="snowflake" data-type="3"></div>
                    <div class="snowflake" data-type="4"></div>
                    <div class="snowflake" data-type="2"></div>
                    <div class="snowflake" data-type="2"></div>
                    <div class="snowflake" data-type="4"></div>
                    <div class="snowflake" data-type="9"></div>
                    <div class="snowflake" data-type="0"></div>
                    <div class="snowflake" data-type="1"></div>
                    <div class="snowflake" data-type="8"></div>
                    <div class="snowflake" data-type="4"></div>
                    <div class="snowflake" data-type="4"></div>
                    <div class="snowflake" data-type="8"></div>
                    <div class="snowflake" data-type="6"></div>
                    <div class="snowflake" data-type="8"></div>
                    <div class="snowflake" data-type="4"></div>
                    <div class="snowflake" data-type="8"></div>
                    <div class="snowflake" data-type="3"></div>
                    <div class="snowflake" data-type="3"></div>
                    <div class="snowflake" data-type="4"></div>
                    <div class="snowflake" data-type="3"></div>
                    <div class="snowflake" data-type="8"></div>
                    <div class="snowflake" data-type="4"></div>
                    <div class="snowflake" data-type="6"></div>
                    <div class="snowflake" data-type="6"></div>
                    <div class="snowflake" data-type="4"></div>
                    <div class="snowflake" data-type="1"></div>
                    <div class="snowflake" data-type="4"></div>
                    <div class="snowflake" data-type="1"></div>
                    <div class="snowflake" data-type="6"></div>
                    <div class="snowflake" data-type="9"></div>
                    <div class="snowflake" data-type="7"></div>
                    <div class="snowflake" data-type="4"></div>
                    <div class="snowflake" data-type="3"></div>
                    <div class="snowflake" data-type="5"></div>
                    <div class="snowflake" data-type="3"></div>
                    <div class="snowflake" data-type="4"></div>
                    <div class="snowflake" data-type="6"></div>
                    <div class="snowflake" data-type="6"></div>
                    <div class="snowflake" data-type="6"></div>
                    <div class="snowflake" data-type="3"></div>
                    <div class="snowflake" data-type="1"></div>
                    <div class="snowflake" data-type="2"></div>
                    <div class="snowflake" data-type="1"></div>
                    <div class="snowflake" data-type="4"></div>
                    <div class="snowflake" data-type="9"></div>
                    <div class="snowflake" data-type="8"></div>
                    <div class="snowflake" data-type="10"></div>
                    <div class="snowflake" data-type="7"></div>
                    <div class="snowflake" data-type="0"></div>
                    <div class="snowflake" data-type="8"></div>
                    <div class="snowflake" data-type="2"></div>
                    <div class="snowflake" data-type="5"></div>
                    <div class="snowflake" data-type="5"></div>
                    <div class="snowflake" data-type="1"></div>
                    <div class="snowflake" data-type="8"></div>
                    <div class="snowflake" data-type="4"></div>
                    <div class="snowflake" data-type="1"></div>
                    <div class="snowflake" data-type="10"></div>
                    <div class="snowflake" data-type="1"></div>
                    <div class="snowflake" data-type="0"></div>
                    <div class="snowflake" data-type="1"></div>
                    <div class="snowflake" data-type="4"></div>
                    <div class="snowflake" data-type="6"></div>
                    <div class="snowflake" data-type="7"></div>
                    <div class="snowflake" data-type="0"></div>
                    <div class="snowflake" data-type="0"></div>
                    <div class="snowflake" data-type="9"></div>
                    <div class="snowflake" data-type="5"></div>
                    <div class="snowflake" data-type="5"></div>
                    <div class="snowflake" data-type="1"></div>
                    <div class="snowflake" data-type="0"></div>
                    <div class="snowflake" data-type="2"></div>
                    <div class="snowflake" data-type="6"></div>
                    <div class="snowflake" data-type="4"></div>
                    <div class="snowflake" data-type="7"></div>
                    <div class="snowflake" data-type="0"></div>
                    <div class="snowflake" data-type="9"></div>
                    <div class="snowflake" data-type="6"></div>
                    <div class="snowflake" data-type="8"></div>
                    <div class="snowflake" data-type="4"></div>
                    <div class="snowflake" data-type="5"></div>
                    <div class="snowflake" data-type="0"></div>
                    <div class="snowflake" data-type="5"></div>
                    <div class="snowflake" data-type="2"></div>
                    <div class="snowflake" data-type="5"></div>
                    <div class="snowflake" data-type="2"></div>
                    <div class="snowflake" data-type="8"></div>
                    <div class="snowflake" data-type="8"></div>
                    <div class="snowflake" data-type="2"></div>
                    <div class="snowflake" data-type="8"></div>
                    <div class="snowflake" data-type="4"></div>
                    <div class="snowflake" data-type="6"></div>
                    <div class="snowflake" data-type="9"></div>
                    <div class="snowflake" data-type="3"></div>
                    <div class="snowflake" data-type="7"></div>
                    <div class="snowflake" data-type="9"></div>
                    <div class="snowflake" data-type="3"></div>
                    <div class="snowflake" data-type="7"></div>
                    <div class="snowflake" data-type="4"></div>
                    <div class="snowflake" data-type="2"></div>
                    <div class="snowflake" data-type="3"></div>
                    <div class="snowflake" data-type="1"></div>
                    <div class="snowflake" data-type="6"></div>
                    <div class="snowflake" data-type="0"></div>
                    <div class="snowflake" data-type="7"></div>
                    <div class="snowflake" data-type="6"></div>
                    <div class="snowflake" data-type="6"></div>
                    <div class="snowflake" data-type="3"></div>
                    <div class="snowflake" data-type="6"></div>
                    <div class="snowflake" data-type="3"></div>
                    <div class="snowflake" data-type="10"></div>
                    <div class="snowflake" data-type="4"></div>
                    <div class="snowflake" data-type="7"></div>
                    <div class="snowflake" data-type="10"></div>
                    <div class="snowflake" data-type="5"></div>
                    <div class="snowflake" data-type="1"></div>
                    <div class="snowflake" data-type="9"></div>
                    <div class="snowflake" data-type="9"></div>
                    <div class="snowflake" data-type="2"></div>
                    <div class="snowflake" data-type="8"></div>
                    <div class="snowflake" data-type="8"></div>
                    <div class="snowflake" data-type="8"></div>
                    <div class="snowflake" data-type="4"></div>
                    <div class="snowflake" data-type="9"></div>
                    <div class="snowflake" data-type="9"></div>
                    <div class="snowflake" data-type="4"></div>
                    <div class="snowflake" data-type="7"></div>
                    <div class="snowflake" data-type="7"></div>
                    <div class="snowflake" data-type="6"></div>
                    <div class="snowflake" data-type="8"></div>
                    <div class="snowflake" data-type="7"></div>
                    <div class="snowflake" data-type="6"></div>
                    <div class="snowflake" data-type="3"></div>
                </div>
                <img class="main-bg onlymobile"
                     src="{{asset('/assets/images/background/mainbg/xmastrees_mobile.svg')}}">
                <img class="main-bg" src="{{asset('/assets/images/background/mainbg/ground.svg')}}">
            </div>
            <div class="wrapper">
                <div class="exchange-form-outer">
                    <h1>{{__('Instant automatic aggregator')}}</h1>
                    <form class="exchange-form">
                        <div class="exchange-amounts" id="exchange_amount">
                            <div class="col">
                                <div class="wrap-header exch-header">
                                    <header>{{__('Send')}}</header>
                                    <div class="ccy-name" id="select_ccyname_from"></div>
                                </div>
                                <div class="input-wabbr toleft">
                                    <select id="select_currency_from" class="hidden">
                                        <option label="separate">{{__('Popular currencies')}}</option>
                                        <option selected value="BTC" data-img="btc" data-network="BTC"
                                                data-shownetwork="0"
                                                data-coin="BTC" data-inactive="0" data-tag="">Bitcoin
                                        </option>
                                        <option value="ETH" data-img="eth" data-network="ETH" data-shownetwork="0"
                                                data-coin="ETH" data-inactive="0" data-tag="">Ethereum
                                        </option>
                                        <option value="USDT" data-img="usdt" data-network="ETH" data-shownetwork="1"
                                                data-coin="USDT" data-inactive="0" data-tag="">Tether (ERC20)
                                        </option>
                                        <option value="LTC" data-img="ltc" data-network="LTC" data-shownetwork="0"
                                                data-coin="LTC" data-inactive="0" data-tag="">Litecoin
                                        </option>
                                        <option value="XMR" data-img="xmr" data-network="XMR" data-shownetwork="0"
                                                data-coin="XMR" data-inactive="0" data-tag="">Monero
                                        </option>
                                        <option label="separate">{{__('All currencies')}}</option>
                                        <option value="ZRX" data-img="zrx" data-network="ETH" data-shownetwork="1"
                                                data-coin="ZRX" data-inactive="0" data-tag="">0x (ERC20)
                                        </option>
                                        <option value="AAVEETH" data-img="aaveeth" data-network="ETH"
                                                data-shownetwork="1"
                                                data-coin="AAVE" data-inactive="0" data-tag="">Aave (ERC20)
                                        </option>
                                        <option value="AVAX" data-img="avax" data-network="C-CHAIN" data-shownetwork="1"
                                                data-coin="AVAX" data-inactive="0" data-tag="">Avalanche (C-Chain)
                                        </option>
                                        <option value="BNB" data-img="bnb" data-network="BNB" data-shownetwork="0"
                                                data-coin="BNB" data-inactive="0" data-tag="MEMO">BNB Beacon Chain
                                            (BEP2)
                                        </option>
                                        <option value="BSC" data-img="bsc" data-network="BSC" data-shownetwork="1"
                                                data-coin="BNB" data-inactive="0" data-tag="">BNB Smart Chain (BEP20)
                                        </option>
                                        <option value="BAT" data-img="bat" data-network="ETH" data-shownetwork="1"
                                                data-coin="BAT" data-inactive="0" data-tag="">Basic Attention (ERC20)
                                        </option>
                                        <option value="BTT" data-img="btt" data-network="TRX" data-shownetwork="1"
                                                data-coin="BTT" data-inactive="0" data-tag="">BitTorrent
                                        </option>
                                        <option value="BTCBNB" data-img="btcbnb" data-network="BNB" data-shownetwork="1"
                                                data-coin="BTC" data-inactive="0" data-tag="MEMO">Bitcoin (BEP2)
                                        </option>
                                        <option value="BTCBSC" data-img="btcbsc" data-network="BSC" data-shownetwork="1"
                                                data-coin="BTC" data-inactive="0" data-tag="">Bitcoin (BEP20)
                                        </option>
                                        <option value="BTCLN" data-img="btcln" data-network="LN" data-shownetwork="1"
                                                data-coin="BTC" data-inactive="0" data-tag="">Bitcoin (Lightning)
                                        </option>
                                        <option value="BCH" data-img="bch" data-network="BCH" data-shownetwork="0"
                                                data-coin="BCH" data-inactive="0" data-tag="">Bitcoin Cash
                                        </option>
                                        <option value="ADA" data-img="ada" data-network="ADA" data-shownetwork="0"
                                                data-coin="ADA" data-inactive="0" data-tag="">Cardano
                                        </option>
                                        <option value="ADABNB" data-img="adabnb" data-network="BNB" data-shownetwork="1"
                                                data-coin="ADA" data-inactive="0" data-tag="MEMO">Cardano (BEP2)
                                        </option>
                                        <option value="ADABSC" data-img="adabsc" data-network="BSC" data-shownetwork="1"
                                                data-coin="ADA" data-inactive="1" data-tag="">Cardano (BEP20)
                                        </option>
                                        <option value="LINK" data-img="link" data-network="ETH" data-shownetwork="1"
                                                data-coin="LINK" data-inactive="0" data-tag="">Chainlink (ERC20)
                                        </option>
                                        <option value="ATOM" data-img="atom" data-network="ATOM" data-shownetwork="0"
                                                data-coin="ATOM" data-inactive="0" data-tag="MEMO">Cosmos
                                        </option>
                                        <option value="DAIBSC" data-img="daibsc" data-network="BSC" data-shownetwork="1"
                                                data-coin="DAI" data-inactive="0" data-tag="">DAI (BEP20)
                                        </option>
                                        <option value="DAIETH" data-img="daieth" data-network="ETH" data-shownetwork="1"
                                                data-coin="DAI" data-inactive="0" data-tag="">DAI (ERC20)
                                        </option>
                                        <option value="DAIMATIC" data-img="daimatic" data-network="POLYGON"
                                                data-shownetwork="1" data-coin="DAI" data-inactive="1" data-tag="">DAI
                                            (Polygon)
                                        </option>
                                        <option value="DASH" data-img="dash" data-network="DASH" data-shownetwork="0"
                                                data-coin="DASH" data-inactive="0" data-tag="">Dash
                                        </option>
                                        <option value="MANAETH" data-img="manaeth" data-network="ETH"
                                                data-shownetwork="1"
                                                data-coin="MANA" data-inactive="0" data-tag="">Decentraland (ERC20)
                                        </option>
                                        <option value="DOGE" data-img="doge" data-network="DOGE" data-shownetwork="0"
                                                data-coin="DOGE" data-inactive="0" data-tag="">Dogecoin
                                        </option>
                                        <option value="EOS" data-img="eos" data-network="EOS" data-shownetwork="0"
                                                data-coin="EOS" data-inactive="0" data-tag="MEMO">EOS
                                        </option>
                                        <option value="ETHARBITRUM" data-img="etharbitrum" data-network="ARBITRUM"
                                                data-shownetwork="1" data-coin="ETH" data-inactive="0" data-tag="">
                                            Ethereum
                                            (Arbitrum)
                                        </option>
                                        <option value="ETHBNB" data-img="ethbnb" data-network="BNB" data-shownetwork="1"
                                                data-coin="ETH" data-inactive="0" data-tag="MEMO">Ethereum (BEP2)
                                        </option>
                                        <option value="ETHBSC" data-img="ethbsc" data-network="BSC" data-shownetwork="1"
                                                data-coin="ETH" data-inactive="0" data-tag="">Ethereum (BEP20)
                                        </option>
                                        <option value="ETC" data-img="etc" data-network="ETC" data-shownetwork="0"
                                                data-coin="ETC" data-inactive="0" data-tag="">Ethereum Classic
                                        </option>
                                        <option value="FTM" data-img="ftm" data-network="FTM" data-shownetwork="0"
                                                data-coin="FTM" data-inactive="0" data-tag="">Fantom
                                        </option>
                                        <option value="KCS" data-img="kcs" data-network="KCC" data-shownetwork="1"
                                                data-coin="KCS" data-inactive="0" data-tag="">KuCoin Token
                                        </option>
                                        <option value="MKR" data-img="mkr" data-network="ETH" data-shownetwork="1"
                                                data-coin="MKR" data-inactive="0" data-tag="">Maker (ERC20)
                                        </option>
                                        <option value="PAXGETH" data-img="paxgeth" data-network="ETH"
                                                data-shownetwork="1"
                                                data-coin="PAXG" data-inactive="0" data-tag="">PAX Gold (ERC20)
                                        </option>
                                        <option value="CAKE" data-img="cake" data-network="BSC" data-shownetwork="1"
                                                data-coin="CAKE" data-inactive="0" data-tag="">PancakeSwap (BEP20)
                                        </option>
                                        <option value="USDP" data-img="usdp" data-network="ETH" data-shownetwork="1"
                                                data-coin="USDP" data-inactive="0" data-tag="">Pax Dollar (ERC20)
                                        </option>
                                        <option value="DOT" data-img="dot" data-network="DOT" data-shownetwork="0"
                                                data-coin="DOT" data-inactive="0" data-tag="">Polkadot
                                        </option>
                                        <option value="MATIC" data-img="matic" data-network="POLYGON"
                                                data-shownetwork="1"
                                                data-coin="MATIC" data-inactive="0" data-tag="">Polygon
                                        </option>
                                        <option value="MATICETH" data-img="maticeth" data-network="ETH"
                                                data-shownetwork="1"
                                                data-coin="MATIC" data-inactive="0" data-tag="">Polygon (ERC20)
                                        </option>
                                        <option value="XRP" data-img="xrp" data-network="XRP" data-shownetwork="0"
                                                data-coin="XRP" data-inactive="0" data-tag="Destination tag">Ripple
                                        </option>
                                        <option value="SHIBBSC" data-img="shibbsc" data-network="BSC"
                                                data-shownetwork="1"
                                                data-coin="SHIB" data-inactive="0" data-tag="">SHIBA INU (BEP20)
                                        </option>
                                        <option value="SHIB" data-img="shib" data-network="ETH" data-shownetwork="1"
                                                data-coin="SHIB" data-inactive="0" data-tag="">SHIBA INU (ERC20)
                                        </option>
                                        <option value="SOL" data-img="sol" data-network="SOL" data-shownetwork="0"
                                                data-coin="SOL" data-inactive="1" data-tag="">Solana
                                        </option>
                                        <option value="XLM" data-img="xlm" data-network="XLM" data-shownetwork="0"
                                                data-coin="XLM" data-inactive="1" data-tag="MEMO">Stellar Lumens
                                        </option>
                                        <option value="USDTARBITRUM" data-img="usdtarbitrum" data-network="ARBITRUM"
                                                data-shownetwork="1" data-coin="USDT" data-inactive="0" data-tag="">
                                            Tether
                                            (Arbitrum)
                                        </option>
                                        <option value="USDTBNB" data-img="usdtbnb" data-network="BNB"
                                                data-shownetwork="1"
                                                data-coin="USDT" data-inactive="0" data-tag="MEMO">Tether (BEP2)
                                        </option>
                                        <option value="USDTBSC" data-img="usdtbsc" data-network="BSC"
                                                data-shownetwork="1"
                                                data-coin="USDT" data-inactive="0" data-tag="">Tether (BEP20)
                                        </option>
                                        <option value="USDTMATIC" data-img="usdtmatic" data-network="POLYGON"
                                                data-shownetwork="1" data-coin="USDT" data-inactive="0" data-tag="">
                                            Tether
                                            (Polygon)
                                        </option>
                                        <option value="USDTSOL" data-img="usdtsol" data-network="SOL"
                                                data-shownetwork="1"
                                                data-coin="USDT" data-inactive="1" data-tag="">Tether (Solana)
                                        </option>
                                        <option value="USDTTRC" data-img="usdttrc" data-network="TRX"
                                                data-shownetwork="1"
                                                data-coin="USDT" data-inactive="0" data-tag="">Tether (TRC20)
                                        </option>
                                        <option value="XTZ" data-img="xtz" data-network="XTZ" data-shownetwork="0"
                                                data-coin="XTZ" data-inactive="0" data-tag="">Tezos
                                        </option>
                                        <option value="TON" data-img="ton" data-network="TON" data-shownetwork="0"
                                                data-coin="TON" data-inactive="0" data-tag="MEMO/Comment">Toncoin
                                        </option>
                                        <option value="TRX" data-img="trx" data-network="TRX" data-shownetwork="0"
                                                data-coin="TRX" data-inactive="0" data-tag="">Tron
                                        </option>
                                        <option value="TUSD" data-img="tusd" data-network="ETH" data-shownetwork="1"
                                                data-coin="TUSD" data-inactive="0" data-tag="">TrueUSD (ERC20)
                                        </option>
                                        <option value="TWT" data-img="twt" data-network="BNB" data-shownetwork="1"
                                                data-coin="TWT" data-inactive="0" data-tag="MEMO">Trust Wallet Token
                                            (BEP2)
                                        </option>
                                        <option value="TWTBSC" data-img="twtbsc" data-network="BSC" data-shownetwork="1"
                                                data-coin="TWT" data-inactive="0" data-tag="MEMO">Trust Wallet Token
                                            (BEP20)
                                        </option>
                                        <option value="USDCBSC" data-img="usdcbsc" data-network="BSC"
                                                data-shownetwork="1"
                                                data-coin="USDC" data-inactive="0" data-tag="">USD Coin (BEP20)
                                        </option>
                                        <option value="USDCETH" data-img="usdceth" data-network="ETH"
                                                data-shownetwork="1"
                                                data-coin="USDC" data-inactive="0" data-tag="">USD Coin (ERC20)
                                        </option>
                                        <option value="USDCMATIC" data-img="usdcmatic" data-network="POLYGON"
                                                data-shownetwork="1" data-coin="USDC" data-inactive="1" data-tag="">USD
                                            Coin
                                            (Polygon)
                                        </option>
                                        <option value="USDCSOL" data-img="usdcsol" data-network="SOL"
                                                data-shownetwork="1"
                                                data-coin="USDC" data-inactive="1" data-tag="">USD Coin (Solana)
                                        </option>
                                        <option value="USDCTRC" data-img="usdctrc" data-network="TRX"
                                                data-shownetwork="1"
                                                data-coin="USDC" data-inactive="0" data-tag="">USD Coin (TRC20)
                                        </option>
                                        <option value="USDCeMATIC" data-img="usdcematic" data-network="POLYGON"
                                                data-shownetwork="1" data-coin="USDCe" data-inactive="1" data-tag="">USD
                                            Coin PoS (Polygon)
                                        </option>
                                        <option value="VET" data-img="vet" data-network="VET" data-shownetwork="0"
                                                data-coin="VET" data-inactive="0" data-tag="">VeChain
                                        </option>
                                        <option value="WBNBBSC" data-img="wbnbbsc" data-network="BSC"
                                                data-shownetwork="1"
                                                data-coin="WBNB" data-inactive="0" data-tag="">Wrapped BNB (BEP20)
                                        </option>
                                        <option value="WETHETH" data-img="wetheth" data-network="ETH"
                                                data-shownetwork="1"
                                                data-coin="WETH" data-inactive="0" data-tag="">Wrapped ETH (ERC20)
                                        </option>
                                        <option value="ZEC" data-img="zec" data-network="ZEC" data-shownetwork="0"
                                                data-coin="ZEC" data-inactive="0" data-tag="">Zcash
                                        </option>
                                    </select>
                                    <input class="input-amount" autocomplete="off" type="text" value=""
                                           id="select_amount_from" data-dir="from" maxlength="18">
                                    <div id="select_maxmin_from" class="hint maxmin"></div>
                                    <span id="select_hinterror_from" class="hint error"></span>
                                    <label id="select_label_from"></label>
                                    <div class="exch-info">
                                        <div class="input-rate" id="select_rate_from"></div>
                                        <div class="rateusd"><span id="rate_usd_from">&nbsp;</span></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-middle">
                                <button class="btn-reverse" id="btn_reverse">
                                    <span id="btn_reverse_from" class="btn-reverse-exch ico"></span>
                                    <span id="btn_reverse_to" class="btn-reverse-receive ico"></span>
                                </button>
                            </div>
                            <div class="col">
                                <div class="wrap-header exch-header">
                                    <header>{{__('Receive')}}</header>
                                    <div class="ccy-name" id="select_ccyname_to"></div>
                                </div>
                                <div class="input-wabbr toright">
                                    <select id="select_currency_to" class="hidden">
                                        <option label="separate">{{__('Popular currencies')}}</option>
                                        <option value="BTC" data-img="btc" data-network="BTC" data-shownetwork="0"
                                                data-coin="BTC" data-inactive="0" data-tag="">Bitcoin
                                        </option>
                                        <option selected value="ETH" data-img="eth" data-network="ETH"
                                                data-shownetwork="0"
                                                data-coin="ETH" data-inactive="0" data-tag="">Ethereum
                                        </option>
                                        <option value="USDT" data-img="usdt" data-network="ETH" data-shownetwork="1"
                                                data-coin="USDT" data-inactive="0" data-tag="">Tether (ERC20)
                                        </option>
                                        <option value="LTC" data-img="ltc" data-network="LTC" data-shownetwork="0"
                                                data-coin="LTC" data-inactive="0" data-tag="">Litecoin
                                        </option>
                                        <option value="XMR" data-img="xmr" data-network="XMR" data-shownetwork="0"
                                                data-coin="XMR" data-inactive="0" data-tag="">Monero
                                        </option>
                                        <option label="separate">{{__('All currencies')}}</option>
                                        <option value="ZRX" data-img="zrx" data-network="ETH" data-shownetwork="1"
                                                data-coin="ZRX" data-inactive="0" data-tag="">0x (ERC20)
                                        </option>
                                        <option value="AAVEETH" data-img="aaveeth" data-network="ETH"
                                                data-shownetwork="1"
                                                data-coin="AAVE" data-inactive="0" data-tag="">Aave (ERC20)
                                        </option>
                                        <option value="AVAX" data-img="avax" data-network="C-CHAIN" data-shownetwork="1"
                                                data-coin="AVAX" data-inactive="0" data-tag="">Avalanche (C-Chain)
                                        </option>
                                        <option value="BNB" data-img="bnb" data-network="BNB" data-shownetwork="0"
                                                data-coin="BNB" data-inactive="0" data-tag="MEMO">BNB Beacon Chain
                                            (BEP2)
                                        </option>
                                        <option value="BSC" data-img="bsc" data-network="BSC" data-shownetwork="1"
                                                data-coin="BNB" data-inactive="0" data-tag="">BNB Smart Chain (BEP20)
                                        </option>
                                        <option value="BAT" data-img="bat" data-network="ETH" data-shownetwork="1"
                                                data-coin="BAT" data-inactive="0" data-tag="">Basic Attention (ERC20)
                                        </option>
                                        <option value="BTT" data-img="btt" data-network="TRX" data-shownetwork="1"
                                                data-coin="BTT" data-inactive="0" data-tag="">BitTorrent
                                        </option>
                                        <option value="BTCBNB" data-img="btcbnb" data-network="BNB" data-shownetwork="1"
                                                data-coin="BTC" data-inactive="0" data-tag="MEMO">Bitcoin (BEP2)
                                        </option>
                                        <option value="BTCBSC" data-img="btcbsc" data-network="BSC" data-shownetwork="1"
                                                data-coin="BTC" data-inactive="0" data-tag="">Bitcoin (BEP20)
                                        </option>
                                        <option value="BTCLN" data-img="btcln" data-network="LN" data-shownetwork="1"
                                                data-coin="BTC" data-inactive="0" data-tag="">Bitcoin (Lightning)
                                        </option>
                                        <option value="BCH" data-img="bch" data-network="BCH" data-shownetwork="0"
                                                data-coin="BCH" data-inactive="0" data-tag="">Bitcoin Cash
                                        </option>
                                        <option value="ADA" data-img="ada" data-network="ADA" data-shownetwork="0"
                                                data-coin="ADA" data-inactive="0" data-tag="">Cardano
                                        </option>
                                        <option value="ADABNB" data-img="adabnb" data-network="BNB" data-shownetwork="1"
                                                data-coin="ADA" data-inactive="0" data-tag="MEMO">Cardano (BEP2)
                                        </option>
                                        <option value="ADABSC" data-img="adabsc" data-network="BSC" data-shownetwork="1"
                                                data-coin="ADA" data-inactive="0" data-tag="">Cardano (BEP20)
                                        </option>
                                        <option value="LINK" data-img="link" data-network="ETH" data-shownetwork="1"
                                                data-coin="LINK" data-inactive="0" data-tag="">Chainlink (ERC20)
                                        </option>
                                        <option value="ATOM" data-img="atom" data-network="ATOM" data-shownetwork="0"
                                                data-coin="ATOM" data-inactive="0" data-tag="MEMO">Cosmos
                                        </option>
                                        <option value="DAIBSC" data-img="daibsc" data-network="BSC" data-shownetwork="1"
                                                data-coin="DAI" data-inactive="1" data-tag="">DAI (BEP20)
                                        </option>
                                        <option value="DAIETH" data-img="daieth" data-network="ETH" data-shownetwork="1"
                                                data-coin="DAI" data-inactive="0" data-tag="">DAI (ERC20)
                                        </option>
                                        <option value="DAIMATIC" data-img="daimatic" data-network="POLYGON"
                                                data-shownetwork="1" data-coin="DAI" data-inactive="0" data-tag="">DAI
                                            (Polygon)
                                        </option>
                                        <option value="DASH" data-img="dash" data-network="DASH" data-shownetwork="0"
                                                data-coin="DASH" data-inactive="0" data-tag="">Dash
                                        </option>
                                        <option value="MANAETH" data-img="manaeth" data-network="ETH"
                                                data-shownetwork="1"
                                                data-coin="MANA" data-inactive="0" data-tag="">Decentraland (ERC20)
                                        </option>
                                        <option value="DOGE" data-img="doge" data-network="DOGE" data-shownetwork="0"
                                                data-coin="DOGE" data-inactive="0" data-tag="">Dogecoin
                                        </option>
                                        <option value="EOS" data-img="eos" data-network="EOS" data-shownetwork="0"
                                                data-coin="EOS" data-inactive="0" data-tag="MEMO">EOS
                                        </option>
                                        <option value="ETHARBITRUM" data-img="etharbitrum" data-network="ARBITRUM"
                                                data-shownetwork="1" data-coin="ETH" data-inactive="0" data-tag="">
                                            Ethereum
                                            (Arbitrum)
                                        </option>
                                        <option value="ETHBNB" data-img="ethbnb" data-network="BNB" data-shownetwork="1"
                                                data-coin="ETH" data-inactive="0" data-tag="MEMO">Ethereum (BEP2)
                                        </option>
                                        <option value="ETHBSC" data-img="ethbsc" data-network="BSC" data-shownetwork="1"
                                                data-coin="ETH" data-inactive="0" data-tag="">Ethereum (BEP20)
                                        </option>
                                        <option value="ETC" data-img="etc" data-network="ETC" data-shownetwork="0"
                                                data-coin="ETC" data-inactive="0" data-tag="">Ethereum Classic
                                        </option>
                                        <option value="FTM" data-img="ftm" data-network="FTM" data-shownetwork="0"
                                                data-coin="FTM" data-inactive="0" data-tag="">Fantom
                                        </option>
                                        <option value="KCS" data-img="kcs" data-network="KCC" data-shownetwork="1"
                                                data-coin="KCS" data-inactive="0" data-tag="">KuCoin Token
                                        </option>
                                        <option value="MKR" data-img="mkr" data-network="ETH" data-shownetwork="1"
                                                data-coin="MKR" data-inactive="0" data-tag="">Maker (ERC20)
                                        </option>
                                        <option value="PAXGETH" data-img="paxgeth" data-network="ETH"
                                                data-shownetwork="1"
                                                data-coin="PAXG" data-inactive="0" data-tag="">PAX Gold (ERC20)
                                        </option>
                                        <option value="CAKE" data-img="cake" data-network="BSC" data-shownetwork="1"
                                                data-coin="CAKE" data-inactive="0" data-tag="">PancakeSwap (BEP20)
                                        </option>
                                        <option value="USDP" data-img="usdp" data-network="ETH" data-shownetwork="1"
                                                data-coin="USDP" data-inactive="0" data-tag="">Pax Dollar (ERC20)
                                        </option>
                                        <option value="DOT" data-img="dot" data-network="DOT" data-shownetwork="0"
                                                data-coin="DOT" data-inactive="0" data-tag="">Polkadot
                                        </option>
                                        <option value="MATIC" data-img="matic" data-network="POLYGON"
                                                data-shownetwork="1"
                                                data-coin="MATIC" data-inactive="0" data-tag="">Polygon
                                        </option>
                                        <option value="MATICETH" data-img="maticeth" data-network="ETH"
                                                data-shownetwork="1"
                                                data-coin="MATIC" data-inactive="0" data-tag="">Polygon (ERC20)
                                        </option>
                                        <option value="XRP" data-img="xrp" data-network="XRP" data-shownetwork="0"
                                                data-coin="XRP" data-inactive="0" data-tag="Destination tag">Ripple
                                        </option>
                                        <option value="SHIBBSC" data-img="shibbsc" data-network="BSC"
                                                data-shownetwork="1"
                                                data-coin="SHIB" data-inactive="1" data-tag="">SHIBA INU (BEP20)
                                        </option>
                                        <option value="SHIB" data-img="shib" data-network="ETH" data-shownetwork="1"
                                                data-coin="SHIB" data-inactive="0" data-tag="">SHIBA INU (ERC20)
                                        </option>
                                        <option value="SOL" data-img="sol" data-network="SOL" data-shownetwork="0"
                                                data-coin="SOL" data-inactive="1" data-tag="">Solana
                                        </option>
                                        <option value="XLM" data-img="xlm" data-network="XLM" data-shownetwork="0"
                                                data-coin="XLM" data-inactive="1" data-tag="MEMO">Stellar Lumens
                                        </option>
                                        <option value="USDTARBITRUM" data-img="usdtarbitrum" data-network="ARBITRUM"
                                                data-shownetwork="1" data-coin="USDT" data-inactive="0" data-tag="">
                                            Tether
                                            (Arbitrum)
                                        </option>
                                        <option value="USDTBNB" data-img="usdtbnb" data-network="BNB"
                                                data-shownetwork="1"
                                                data-coin="USDT" data-inactive="0" data-tag="MEMO">Tether (BEP2)
                                        </option>
                                        <option value="USDTBSC" data-img="usdtbsc" data-network="BSC"
                                                data-shownetwork="1"
                                                data-coin="USDT" data-inactive="0" data-tag="">Tether (BEP20)
                                        </option>
                                        <option value="USDTMATIC" data-img="usdtmatic" data-network="POLYGON"
                                                data-shownetwork="1" data-coin="USDT" data-inactive="0" data-tag="">
                                            Tether
                                            (Polygon)
                                        </option>
                                        <option value="USDTSOL" data-img="usdtsol" data-network="SOL"
                                                data-shownetwork="1"
                                                data-coin="USDT" data-inactive="1" data-tag="">Tether (Solana)
                                        </option>
                                        <option value="USDTTRC" data-img="usdttrc" data-network="TRX"
                                                data-shownetwork="1"
                                                data-coin="USDT" data-inactive="0" data-tag="">Tether (TRC20)
                                        </option>
                                        <option value="XTZ" data-img="xtz" data-network="XTZ" data-shownetwork="0"
                                                data-coin="XTZ" data-inactive="0" data-tag="">Tezos
                                        </option>
                                        <option value="TON" data-img="ton" data-network="TON" data-shownetwork="0"
                                                data-coin="TON" data-inactive="0" data-tag="MEMO/Comment">Toncoin
                                        </option>
                                        <option value="TRX" data-img="trx" data-network="TRX" data-shownetwork="0"
                                                data-coin="TRX" data-inactive="0" data-tag="">Tron
                                        </option>
                                        <option value="TUSD" data-img="tusd" data-network="ETH" data-shownetwork="1"
                                                data-coin="TUSD" data-inactive="0" data-tag="">TrueUSD (ERC20)
                                        </option>
                                        <option value="TWT" data-img="twt" data-network="BNB" data-shownetwork="1"
                                                data-coin="TWT" data-inactive="0" data-tag="MEMO">Trust Wallet Token
                                            (BEP2)
                                        </option>
                                        <option value="TWTBSC" data-img="twtbsc" data-network="BSC" data-shownetwork="1"
                                                data-coin="TWT" data-inactive="0" data-tag="MEMO">Trust Wallet Token
                                            (BEP20)
                                        </option>
                                        <option value="USDCBSC" data-img="usdcbsc" data-network="BSC"
                                                data-shownetwork="1"
                                                data-coin="USDC" data-inactive="0" data-tag="">USD Coin (BEP20)
                                        </option>
                                        <option value="USDCETH" data-img="usdceth" data-network="ETH"
                                                data-shownetwork="1"
                                                data-coin="USDC" data-inactive="0" data-tag="">USD Coin (ERC20)
                                        </option>
                                        <option value="USDCMATIC" data-img="usdcmatic" data-network="POLYGON"
                                                data-shownetwork="1" data-coin="USDC" data-inactive="1" data-tag="">USD
                                            Coin
                                            (Polygon)
                                        </option>
                                        <option value="USDCSOL" data-img="usdcsol" data-network="SOL"
                                                data-shownetwork="1"
                                                data-coin="USDC" data-inactive="1" data-tag="">USD Coin (Solana)
                                        </option>
                                        <option value="USDCTRC" data-img="usdctrc" data-network="TRX"
                                                data-shownetwork="1"
                                                data-coin="USDC" data-inactive="0" data-tag="">USD Coin (TRC20)
                                        </option>
                                        <option value="USDCeMATIC" data-img="usdcematic" data-network="POLYGON"
                                                data-shownetwork="1" data-coin="USDCe" data-inactive="1" data-tag="">USD
                                            Coin PoS (Polygon)
                                        </option>
                                        <option value="VET" data-img="vet" data-network="VET" data-shownetwork="0"
                                                data-coin="VET" data-inactive="0" data-tag="">VeChain
                                        </option>
                                        <option value="WBNBBSC" data-img="wbnbbsc" data-network="BSC"
                                                data-shownetwork="1"
                                                data-coin="WBNB" data-inactive="0" data-tag="">Wrapped BNB (BEP20)
                                        </option>
                                        <option value="WETHETH" data-img="wetheth" data-network="ETH"
                                                data-shownetwork="1"
                                                data-coin="WETH" data-inactive="0" data-tag="">Wrapped ETH (ERC20)
                                        </option>
                                        <option value="ZEC" data-img="zec" data-network="ZEC" data-shownetwork="0"
                                                data-coin="ZEC" data-inactive="0" data-tag="">Zcash
                                        </option>
                                    </select>
                                    <input class="input-amount" autocomplete="off" type="text" value=""
                                           id="select_amount_to" data-dir="to" maxlength="18">
                                    <div id="select_maxmin_to" class="hint maxmin"></div>
                                    <span id="select_hinterror_to" class="hint error"></span>
                                    <label id="select_label_to"></label>
                                    <div class="exch-info">
                                        <div class="input-rate" id="select_rate_to"></div>
                                        <div class="rateusd"><span id="rate_usd_to">&nbsp;</span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="exchange-address-wrap">
                            <div class="exchange-wallet active center">
                                <div class="wrap-header">
                                    <header>{{__('Destination')}}</header>
                                </div>
                                <div class="field">
                                <textarea class="nonextra hidden" type="text" id="receive_wallet_hidden"
                                          autocomplete="off"></textarea>
                                    <textarea class="nonextra" type="text" required id="receive_wallet"
                                              autocomplete="off"></textarea>
                                    <span id="receive_wallet_error" class="hint error">{{__('Invalid address')}}</span>
                                    <div class="funcbuttons">
                                        <button type="button" class="ico paste hoverhl" id="wallet_paste"
                                                title="{{__('Paste')}}"></button>
                                        @auth
                                            <button type="button" class="ico addressbook hoverhl" id="wallet_favorite" title="{{__('Address book')}}"></button>
                                        @endauth
                                        <button type="button" class="ico scanqr hoverhl" id="wallet_scanqr"
                                                title="{{__('Scan QR code')}}"></button>
                                        <button type="button" class="ico close hoverhl" id="wallet_clear"></button>
                                    </div>
                                    <div class="addresss-list-wrap">
                                        <div class="addresss-list" id="wallet_addressbook"
                                             data-emptylist="{{__('Favorite address is empty')}}"></div>
                                    </div>
                                </div>
                            </div>
                            <div class="exchange-wallet exchange-wallet-extra center" id="wallet_extra_outer">
                                <div class="wrap-header">
                                    <header id="receive_extraid_label">{{__('Destination Tag (optional)')}}</header>
                                </div>
                                <div class="field">
                                    <input class="nonextra" type="text" value="" required id="receive_extraid"
                                           autocomplete="off">
                                    <span id="receive_extraid_error" class="hint error">{{__('Invalid')}}</span>
                                    <div class="funcbuttons">
                                        <button type="button" class="ico paste hoverhl none"
                                                id="extraid_paste"></button>
                                        <button type="button" class="ico close hoverhl" id="extraid_clear"></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="exchange-wrapflex">
                            <div class="exchange-option">
                                <header>{{__('Order type')}}</header>
                                <div class="exchange-option-inner">
                                    <label class="radioselect">
                                        <input type="radio" name="select_type_from" value="fixed" id="fixed_type">
                                        <span>{{__('Fixed rate (1.0%)')}}</span>
                                    </label><label class="radioselect">
                                        <input type="radio" name="select_type_from" value="float" id="float_type"
                                               checked>
                                        <span>{{__('Float rate (0.5%)')}}</span>
                                    </label>
                                </div>
                                <span id="type_difference" class="exchange-option-diff"><div
                                            class="exchange-option-diff-inner"><i>?</i><font>{{__('What is the difference?')}}</font></div></span>
                            </div>
                            <div class="exchange-button center">
                                <button id="exchange_submit" class="exchange-submit disabled">
                                    <span>{{__('Exchange now')}}</span>
                                </button>
                            </div>
                        </div>
                        <div class="exchange-terms">{!! __('Exchange Terms') !!}</div>
                    </form>
                </div>
                <template id="difference_tmpl">
                    <div class="popup-content popup-full-mobile">
                        <div class="popup-close"></div>
                        <h3>{{__('What is the difference between fixed and a float rates?')}}</h3>
                        {!! __('Difference Content') !!}
                        <div class="popup-ctrl"><span class="btn submit popup-close-btn bghl">{{__('Ok')}}</span></div>
                    </div>
                </template>
                <template id="popup_warning_fee">
                    <div class="popup-content popup-confirm popup-confirm-whead popup-full-mobile">
                        <header>{{__('Attention! High network fees!')}}</header>
                        <div class="popup-confirm-body popup-mobile-body-full">
                            {!! __('Confirm Content') !!}
                        </div>
                        <div class="popup-ctrl">
                            <button type="button" class="btn cancel popup-close-btn">{{__('Cancel exchange')}}</button>
                            <button type="button" class="btn submit">{{__('I understand and confirm this')}}</button>
                        </div>
                    </div>
                </template>
                <template id="popup_forbidden_usa">
                    <div class="popup-content fix-width2">
                        <h3 style="margin-bottom: 1.3em;">{{__('Important Notice')}}</h3>
                        <p style="text-align: center;margin-bottom: 0.2em;">{{__('U.S. persons cannot make an exchange on')}}
                            {{config('app.domain')}}</p>
                        <div class="popup-ctrl"><span
                                    class="btn submit popup-close-btn bghl">{{__('I understand')}}</span>
                        </div>
                    </div>
                </template>
                <script type="text/javascript">
                    document.addEventListener("DOMContentLoaded", function () {
                        moment.locale('{{app()->getLocale()}}');
                        let F = UI.func;

                        let data = {
                            reqFrom: '',
                            reqTo: '',
                            type: 'float',
                            address: '',
                            extra: '',
                            toAmount: undefined,
                            fromAmount: undefined,
                            lockAmount: false,
                            lockType: false,
                            lockSend: false,
                            lockReceive: false,
                            lockAddress: false,
                            errorIgnore: false,
                            floatLNInvoice: true,

                            search_ph: '{{__('Type a currency or ticker')}}',
                            search_found: '{{__('Found currencies')}}',
                            address_ph: '{{__('Your {1} address')}}',
                            invoice_ph: '{{__('Your {1} invoice')}}',
                            favaddress_ph: '{{__('Find your {1} address in the list')}}',
                            address_invalid: '{{__('Invalid address')}}',
                            route_invalid: '{{__('Invalid route, unable to find a path to destination')}}',
                            address_error: '{{__('Enter your {1} address')}}',
                            invoice_error: '{{__('Enter your {1} address')}}',
                            limit_min: '{{__('Minimum amount {1}')}}',
                            limit_max: '{{__('You exceeded the limit of {1}')}}',
                            maintenance: '{{__('Network temporarily suspended for maintenance')}}',
                            ccy_offline: '{{__('The network is offline')}}',
                            ccy_reserve: '{{__('The currency is awaiting the addition of reserves')}}',
                            recoverytime: '{{__('Estimated network recovery time')}}',
                            recoverytime_hour: '{{__('Estimated recovery time within an hour')}}',
                            recoverytime_hours: '{{__('Estimated recovery time is within {1} hours')}}',
                            recoverytime_day: '{{__('Estimated recovery time during the day')}}',
                            recoverytime_days: '{{__('Estimated recovery time within {1} days')}}',
                            clipboard_permission: '{{__('You need to give the browser permission to use your clipboard')}}',

                            'addressbook_fav': '{{__('Favorite addresses')}}',
                            'addressbook_last': '{{__('Last used addresses')}}',

                            selector_tmpl: '<div class="coin-ticker"><span class="name">{coin}</span>{#shownetwork}<sup data-network="{network}"><span>{network}</span></sup>{\\shownetwork}</div><div class="coin-ico svgcoin {img}"></div><div class="coin-outer"><span class="coin-name">{label}</span></div>',
                            label_tmpl: '<span class="coin-img svgcoin {img}"></span><span class="coin-name"><span class="name">{coin}</span>{#shownetwork}<sup data-network="{network}">{network}</sup>{\\shownetwork}</span>',
                            address_tmpl: '<label class="addressbook-favorite {#favorite}active{\\favorite}"><span class="ico star"></label><span class="address">{address}</span>{#tag}<span class="tag">:{tag}</span>{\\tag}',

                            popup_warning_fee: F.id('popup_warning_fee').innerHTML,
                            popup_forbidden_usa: F.id('popup_forbidden_usa').innerHTML,
                        }
                        Exchange.init(data);


                        F.bind('type_difference', 'click', function (e) {
                            e = e || event;
                            e.preventDefault();
                            UI.popup({
                                html: F.id('difference_tmpl').innerHTML,
                                class: 'foreground',
                            }).show();
                        })
                    })
                </script>
            </div>
        </section>
        <section class="advantages-section" id="advantages">
            <div class="wrapper">
                <h2><span>{{__('Trusted since 2018')}}</span></h2>
                <div class="advantages-inner">
                    <div class="col adv-fast">
                        <div class="advantages-image wimg"><img src="/assets/images/robots/fill.svg"></div>
                        <div class="advantages-descr">
                            <h3 class="hl">{{__('Save time')}}</h3>
                            <p>{{__('Maximum exchange speed due to the full automation')}}</p>
                        </div>
                    </div>
                    <div class="col adv-easy">
                        <div class="advantages-image wimg"><img src="/assets/images/robots/fill.svg"></div>
                        <div class="advantages-descr">
                            <h3 class="hl">{{__('Make an exchange')}}</h3>
                            <p>{{__('Pick the right strategy and make favourable trades')}}</p>
                        </div>
                    </div>
                    <div class="col adv-profitable">
                        <div class="advantages-image wimg"><img src="/assets/images/robots/fill.svg"></div>
                        <div class="advantages-descr">
                            <h3 class="hl">{{__('Save money')}}</h3>
                            <p>{{__('Best exchange rates and minimum commissions')}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="recent-section darkbg">
            <div class="background">
                <img src="/assets/images/background/recent.svg" class="none">
            </div>
            <div class="wrapper">
                <h2 class="center"><span>{{__('Recent transactions')}}</span></h2>
                <ul class="recent-list" id="recent_list">
                    <li>
                        <div class="recent-time">
                            <time timestamp="1702219434"></time>
                        </div>
                        <div class="dir-from">
                            <div class="coin-value">108.381 XRP</div>
                            <div class="coin-ico svgcoin xrp"></div>
                        </div>
                        <div class="dir-arrow">
                            <span class="ico arrow"></span>
                        </div>
                        <div class="dir-to">
                            <div class="coin-ico svgcoin usdttrc"></div>
                            <div class="coin-value">USDT</div>
                        </div>
                        <div class="recent-howlong">
                            <i class="ico timer"></i><span class="recent-timer" data-time="13"></span>
                        </div>
                    </li>
                    <li>
                        <div class="recent-time">
                            <time timestamp="1702219427"></time>
                        </div>
                        <div class="dir-from">
                            <div class="coin-value">50</div>
                            <div class="coin-ico svgcoin usdtarbitrum"></div>
                        </div>
                        <div class="dir-arrow">
                            <span class="ico arrow"></span>
                        </div>
                        <div class="dir-to">
                            <div class="coin-ico svgcoin etharbitrum"></div>
                            <div class="coin-value"></div>
                        </div>
                        <div class="recent-howlong">
                            <i class="ico timer"></i><span class="recent-timer" data-time="17"></span>
                        </div>
                    </li>
                    <li>
                        <div class="recent-time">
                            <time timestamp="1702219418"></time>
                        </div>
                        <div class="dir-from">
                            <div class="coin-value">0.01133 BNB</div>
                            <div class="coin-ico svgcoin bsc"></div>
                        </div>
                        <div class="dir-arrow">
                            <span class="ico arrow"></span>
                        </div>
                        <div class="dir-to">
                            <div class="coin-ico svgcoin ltc"></div>
                            <div class="coin-value">LTC</div>
                        </div>
                        <div class="recent-howlong">
                            <i class="ico timer"></i><span class="recent-timer" data-time="16"></span>
                        </div>
                    </li>
                    <li>
                        <div class="recent-time">
                            <time timestamp="1702219395"></time>
                        </div>
                        <div class="dir-from">
                            <div class="coin-value">110 USDT</div>
                            <div class="coin-ico svgcoin usdttrc"></div>
                        </div>
                        <div class="dir-arrow">
                            <span class="ico arrow"></span>
                        </div>
                        <div class="dir-to">
                            <div class="coin-ico svgcoin trx"></div>
                            <div class="coin-value">TRX</div>
                        </div>
                        <div class="recent-howlong">
                            <i class="ico timer"></i><span class="recent-timer" data-time="7"></span>
                        </div>
                    </li>
                    <li>
                        <div class="recent-time">
                            <time timestamp="1702219323"></time>
                        </div>
                        <div class="dir-from">
                            <div class="coin-value">166 USDT</div>
                            <div class="coin-ico svgcoin usdttrc"></div>
                        </div>
                        <div class="dir-arrow">
                            <span class="ico arrow"></span>
                        </div>
                        <div class="dir-to">
                            <div class="coin-ico svgcoin eth"></div>
                            <div class="coin-value">ETH</div>
                        </div>
                        <div class="recent-howlong">
                            <i class="ico timer"></i><span class="recent-timer" data-time="6"></span>
                        </div>
                    </li>
                    <li>
                        <div class="recent-time">
                            <time timestamp="1702219280"></time>
                        </div>
                        <div class="dir-from">
                            <div class="coin-value">0.07734 ETH</div>
                            <div class="coin-ico svgcoin eth"></div>
                        </div>
                        <div class="dir-arrow">
                            <span class="ico arrow"></span>
                        </div>
                        <div class="dir-to">
                            <div class="coin-ico svgcoin etharbitrum"></div>
                            <div class="coin-value"></div>
                        </div>
                        <div class="recent-howlong">
                            <i class="ico timer"></i><span class="recent-timer" data-time="16"></span>
                        </div>
                    </li>
                    <li>
                        <div class="recent-time">
                            <time timestamp="1702219279"></time>
                        </div>
                        <div class="dir-from">
                            <div class="coin-value">4.75</div>
                            <div class="coin-ico svgcoin usdtarbitrum"></div>
                        </div>
                        <div class="dir-arrow">
                            <span class="ico arrow"></span>
                        </div>
                        <div class="dir-to">
                            <div class="coin-ico svgcoin trx"></div>
                            <div class="coin-value">TRX</div>
                        </div>
                        <div class="recent-howlong">
                            <i class="ico timer"></i><span class="recent-timer" data-time="21"></span>
                        </div>
                    </li>
                    <li>
                        <div class="recent-time">
                            <time timestamp="1702219274"></time>
                        </div>
                        <div class="dir-from">
                            <div class="coin-value">5.8 BNB</div>
                            <div class="coin-ico svgcoin bsc"></div>
                        </div>
                        <div class="dir-arrow">
                            <span class="ico arrow"></span>
                        </div>
                        <div class="dir-to">
                            <div class="coin-ico svgcoin usdttrc"></div>
                            <div class="coin-value">USDT</div>
                        </div>
                        <div class="recent-howlong">
                            <i class="ico timer"></i><span class="recent-timer" data-time="35"></span>
                        </div>
                    </li>
                    <li>
                        <div class="recent-time">
                            <time timestamp="1702219266"></time>
                        </div>
                        <div class="dir-from">
                            <div class="coin-value">0.01937</div>
                            <div class="coin-ico svgcoin etharbitrum"></div>
                        </div>
                        <div class="dir-arrow">
                            <span class="ico arrow"></span>
                        </div>
                        <div class="dir-to">
                            <div class="coin-ico svgcoin bsc"></div>
                            <div class="coin-value">BNB</div>
                        </div>
                        <div class="recent-howlong">
                            <i class="ico timer"></i><span class="recent-timer" data-time="27"></span>
                        </div>
                    </li>
                    <li>
                        <div class="recent-time">
                            <time timestamp="1702219258"></time>
                        </div>
                        <div class="dir-from">
                            <div class="coin-value">250 ADA</div>
                            <div class="coin-ico svgcoin ada"></div>
                        </div>
                        <div class="dir-arrow">
                            <span class="ico arrow"></span>
                        </div>
                        <div class="dir-to">
                            <div class="coin-ico svgcoin eth"></div>
                            <div class="coin-value">ETH</div>
                        </div>
                        <div class="recent-howlong">
                            <i class="ico timer"></i><span class="recent-timer" data-time="30"></span>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        <section class="faq-section" id="faq_wrapper">
            <div class="wrapper">
                <h2><span>{{__('FAQ')}}</span></h2>
                {!! __('FAQ Home Content') !!}
                <div class="faq-more"><a href="/faq"><span>{{__('Go to page FAQ')}}</span> <i
                                class="ico arrow-forward"></i></a>
                </div>
            </div>
        </section>
    </main>
    @push('js')
        <script type="text/javascript">
            document.addEventListener("DOMContentLoaded", function () {
                let F = UI.func;
                moment.locale('{{app()->getLocale()}}');
                Array.from(document.querySelectorAll('.blog-post time[timestamp]')).forEach(function (obj) {
                    let time = moment(moment.unix(+obj.getAttribute('timestamp')).toDate()).local();
                    obj.innerHTML = time.format('LL');
                })
                Array.from(document.querySelectorAll('#recent_list time')).forEach(function (obj) {
                    let time = moment(moment.unix(+obj.getAttribute('timestamp')).toDate()).local();
                    obj.innerHTML = time.fromNow();
                })
                Array.from(document.querySelectorAll('#recent_list .recent-timer')).forEach(function (obj) {
                    obj.innerHTML = APP.timeToText(obj.getAttribute('data-time'));
                })

                let AdvImages = {
                    container: F.id('advantages'),
                    r1: {
                        div: undefined,
                        url: undefined
                    },
                    r2: {
                        div: undefined,
                        url: undefined
                    },
                    r3: {
                        div: undefined,
                        url: undefined
                    },

                    init: function () {
                        let self = this;
                        self.r1.div = self.container.querySelector('.adv-fast > .advantages-image.wimg');
                        self.r2.div = self.container.querySelector('.adv-easy > .advantages-image.wimg');
                        self.r3.div = self.container.querySelector('.adv-profitable > .advantages-image.wimg');
                        if (self.r1.div) self.r1.url = window.getComputedStyle(self.r1.div, false).backgroundImage.replaceAll('F7931A', '{color}');
                        if (self.r2.div) self.r2.url = window.getComputedStyle(self.r2.div, false).backgroundImage.replaceAll('F7931A', '{color}');
                        if (self.r3.div) self.r3.url = window.getComputedStyle(self.r3.div, false).backgroundImage.replaceAll('F7931A', '{color}');
                    },

                    change: function (color) {
                        let self = this;
                        if (self.r1.div) self.r1.div.style.backgroundImage = self.r1.url.replaceAll('{color}', color);
                        if (self.r2.div) self.r2.div.style.backgroundImage = self.r2.url.replaceAll('{color}', color);
                        if (self.r3.div) self.r3.div.style.backgroundImage = self.r3.url.replaceAll('{color}', color);
                    }
                }
                AdvImages.init();

                F.bind(document, 'highlightingColor', function (e) {
                    e = e || event;
                    let color = APP.getActiveColor(e.detail.from, e.detail.to, false);
                    AdvImages.change(color);
                })

                F.on('faq_wrapper', 'click', 'ol > li > h4', function (e) {
                    let li = this.parentNode;
                    let div = li.querySelector('div.faq-inner');
                    let h = UI.func.round(div.getBoundingClientRect().height, 4);
                    let is = F.hasClass(li, 'active');
                    div.parentNode.style.height = h + 'px';
                    F.remClass(li.parentNode.querySelectorAll('li'), 'active');
                    F.togClass(li, 'active', !is);
                })

                // UI.carousel('index_news', {
                //     scale: 1.2,
                //     navPrev: F.id('index_news_prev'),
                //     navNext: F.id('index_news_next'),
                //     wrapline: F.id('index_news_line')
                // });

                // UI.carousel('index_guides', {
                //     maxScrollSlide: 8,
                //     navPrev: F.id('index_guides_prev'),
                //     navNext: F.id('index_guides_next'),
                //     wrapline: F.id('index_guides_line')
                // });

            })
        </script>
    @endpush
</x-app-layout>
