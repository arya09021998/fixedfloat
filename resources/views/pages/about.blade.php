<x-app-layout>
    @include('includes.header')
    @includeWhen(!auth()->check(),'includes.auth')
    <main>
        <div class="wrapper">
            <h1>{{__('About us')}}</h1>
            <section class="about-desc darkbg">
                <span class="logo"></span>
                <p>{{__('Cryptocurrencies open new opportunities for achieving financial freedom. The bigger the user base, the greater the competitive advantages that emerging distributed ledger technologies provide. FixedFloat gives you the tools to make full use of your digital assets through an easy and accessible exchange platform.')}}</p>
            </section>
            <section class="about-advantage">
                <h2><span>{{__('Advantages')}}</span></h2>
                <div class="about-advantage-wrap">
                    <div><i class="ico adv-simple"></i>
                        <p>{{__('The maximum ease of making an exchange and the ability to choose a strategy will allow you to make a profitable exchange')}}</p>
                    </div>
                    <div><i class="ico adv-security"></i>
                        <p>{{__('We provide a secure exchange. You do not risk anything and you can immediately see the size of the commission')}}</p>
                    </div>
                    <div><i class="ico adv-automatic"></i>
                        <p>{{__('You can make automatic exchange with maximum speed on any devices')}}</p></div>
                </div>
            </section>
        </div>
        <section class="about-mission">
            <div class="wrapper">
                <div class="about-mission-wrap">
                    <div class="about-mission-bgstars"></div>
                    <div class="about-mission-img">
                        <div class="about-mission-hand-left"></div>
                        <div class="about-mission-hand-logo"></div>
                        <div class="about-mission-hand-right"></div>
                    </div>
                    <h2 class="center"><span>{{__('Mission')}}</span></h2>
                    <p>{{__('We are long-term players with a vision and want to become your reliable and trusted partners in the world of digital assets. Our mission is to simplify the process of exchange through practical and scalable solutions that make the crypto economy work for you.')}}</p>
                </div>
            </div>
        </section>
        <div class="wrapper">
            <section class="about-currencies">
                <h2><span>{{__('Supported currencies')}}</span></h2>
                <ul class="avalible-curr darkbg">
                    <li>
                        <div class="coin-ico svgcoin aaveeth"></div>
                        <div class="coin-name">Aave (ERC20)</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin ada"></div>
                        <div class="coin-name">Cardano</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin adabnb"></div>
                        <div class="coin-name">Cardano (BEP2)</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin adabsc"></div>
                        <div class="coin-name">Cardano (BEP20)</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin atom"></div>
                        <div class="coin-name">Cosmos</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin avax"></div>
                        <div class="coin-name">Avalanche (C-Chain)</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin bat"></div>
                        <div class="coin-name">Basic Attention (ERC20)</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin bch"></div>
                        <div class="coin-name">Bitcoin Cash</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin bnb"></div>
                        <div class="coin-name">BNB Beacon Chain (BEP2)</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin bsc"></div>
                        <div class="coin-name">BNB Smart Chain (BEP20)</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin btc"></div>
                        <div class="coin-name">Bitcoin</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin btcbnb"></div>
                        <div class="coin-name">Bitcoin (BEP2)</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin btcbsc"></div>
                        <div class="coin-name">Bitcoin (BEP20)</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin btcln"></div>
                        <div class="coin-name">Bitcoin (Lightning)</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin btt"></div>
                        <div class="coin-name">BitTorrent</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin cake"></div>
                        <div class="coin-name">PancakeSwap (BEP20)</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin daibsc"></div>
                        <div class="coin-name">DAI (BEP20)</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin daieth"></div>
                        <div class="coin-name">DAI (ERC20)</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin daimatic"></div>
                        <div class="coin-name">DAI (Polygon)</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin dash"></div>
                        <div class="coin-name">Dash</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin doge"></div>
                        <div class="coin-name">Dogecoin</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin dot"></div>
                        <div class="coin-name">Polkadot</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin eos"></div>
                        <div class="coin-name">EOS</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin etc"></div>
                        <div class="coin-name">Ethereum Classic</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin eth"></div>
                        <div class="coin-name">Ethereum</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin etharbitrum"></div>
                        <div class="coin-name">Ethereum (Arbitrum)</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin ethbnb"></div>
                        <div class="coin-name">Ethereum (BEP2)</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin ethbsc"></div>
                        <div class="coin-name">Ethereum (BEP20)</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin ftm"></div>
                        <div class="coin-name">Fantom</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin kcs"></div>
                        <div class="coin-name">KuCoin Token</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin link"></div>
                        <div class="coin-name">Chainlink (ERC20)</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin ltc"></div>
                        <div class="coin-name">Litecoin</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin manaeth"></div>
                        <div class="coin-name">Decentraland (ERC20)</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin matic"></div>
                        <div class="coin-name">Polygon</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin maticeth"></div>
                        <div class="coin-name">Polygon (ERC20)</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin mkr"></div>
                        <div class="coin-name">Maker (ERC20)</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin paxgeth"></div>
                        <div class="coin-name">PAX Gold (ERC20)</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin shib"></div>
                        <div class="coin-name">SHIBA INU (ERC20)</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin shibbsc"></div>
                        <div class="coin-name">SHIBA INU (BEP20)</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin sol"></div>
                        <div class="coin-name">Solana</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin ton"></div>
                        <div class="coin-name">Toncoin</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin trx"></div>
                        <div class="coin-name">Tron</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin tusd"></div>
                        <div class="coin-name">TrueUSD (ERC20)</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin twt"></div>
                        <div class="coin-name">Trust Wallet Token (BEP2)</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin twtbsc"></div>
                        <div class="coin-name">Trust Wallet Token (BEP20)</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin usdcbsc"></div>
                        <div class="coin-name">USD Coin (BEP20)</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin usdcematic"></div>
                        <div class="coin-name">USD Coin PoS (Polygon)</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin usdceth"></div>
                        <div class="coin-name">USD Coin (ERC20)</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin usdcmatic"></div>
                        <div class="coin-name">USD Coin (Polygon)</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin usdcsol"></div>
                        <div class="coin-name">USD Coin (Solana)</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin usdctrc"></div>
                        <div class="coin-name">USD Coin (TRC20)</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin usdp"></div>
                        <div class="coin-name">Pax Dollar (ERC20)</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin usdt"></div>
                        <div class="coin-name">Tether (ERC20)</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin usdtarbitrum"></div>
                        <div class="coin-name">Tether (Arbitrum)</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin usdtbnb"></div>
                        <div class="coin-name">Tether (BEP2)</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin usdtbsc"></div>
                        <div class="coin-name">Tether (BEP20)</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin usdtmatic"></div>
                        <div class="coin-name">Tether (Polygon)</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin usdtsol"></div>
                        <div class="coin-name">Tether (Solana)</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin usdttrc"></div>
                        <div class="coin-name">Tether (TRC20)</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin vet"></div>
                        <div class="coin-name">VeChain</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin wbnbbsc"></div>
                        <div class="coin-name">Wrapped BNB (BEP20)</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin wetheth"></div>
                        <div class="coin-name">Wrapped ETH (ERC20)</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin xlm"></div>
                        <div class="coin-name">Stellar Lumens</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin xmr"></div>
                        <div class="coin-name">Monero</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin xrp"></div>
                        <div class="coin-name">Ripple</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin xtz"></div>
                        <div class="coin-name">Tezos</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin zec"></div>
                        <div class="coin-name">Zcash</div>
                    </li>
                    <li>
                        <div class="coin-ico svgcoin zrx"></div>
                        <div class="coin-name">0x (ERC20)</div>
                    </li>
                </ul>
            </section>
        </div>
    </main>
</x-app-layout>
