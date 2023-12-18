<template id="tmpl_refcodeform"><header>
        <div class="user-refcode-code">
            <label>{{__('Code')}}:</label>
            <span>{ref_code}</span>
            <button type="button" class="copy-btn ico copy"><i class="hint blue">{{__('Copied')}}</i></button>
        </div>
        <div class="user-refcode-perc-info-link">
            <div><span>{{__('{afftax_web_100}% for exchange via link')}}</span><!--<i class="">?</i>--></div>
            {#afftax_api}<div class=""><span>{{__('{afftax_api_100}% for exchange via API')}}</span><!--<i class="">?</i>--></div>{\afftax_api}			</div>
        <div class="user-refcode-delete">
            <button type="button" class="btn-text mini" name="delete">{{__('Delete')}}</button>
        </div>
    </header>
    <div class="user-refcode-body">
        <table>
            <tbody>
            <tr>
                <td>{{__('Simple link')}}:</td>
                <td><input class="user-refcode-reflink" name="simplelink" readonly="" type="text" value="{{url('/')}}?ref={ref_code}"></td>
            </tr>
            <tr>
                <td>{{__('Link with currencies')}}:</td>
                <td>
                    <div class="user-refcode-reflink-ccies-outer">
                        <input class="user-refcode-reflink-ccies" name="ccieslink" readonly="" type="text" value="{{url('/')}}}}/BTC/USDT/?ref={ref_code}">
                        <div class="user-refcode-reflink-gen none">
                            <select name="ccy_from">
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
                                <option value="DAIMATIC" data-icon="daimatic">DAI (MATIC)</option>
                                <option value="DASH" data-icon="dash">DASH</option>
                                <option value="DOGE" data-icon="doge">DOGE</option>
                                <option value="DOT" data-icon="dot">DOT</option>
                                <option value="EOS" data-icon="eos">EOS</option>
                                <option value="ETC" data-icon="etc">ETC</option>
                                <option value="ETH" data-icon="eth">ETH</option>
                                <option value="ETHARBITRUM" data-icon="etharbitrum">ETH (ARBITRUM)</option>
                                <option value="ETHBNB" data-icon="ethbnb">ETH (BNB)</option>
                                <option value="ETHBSC" data-icon="ethbsc">ETH (BSC)</option>
                                <option value="FTM" data-icon="ftm">FTM</option>
                                <option value="KCS" data-icon="kcs">KCS (KCC)</option>
                                <option value="LINK" data-icon="link">LINK (ETH)</option>
                                <option value="LTC" data-icon="ltc">LTC</option>
                                <option value="MANAETH" data-icon="manaeth">MANA (ETH)</option>
                                <option value="MATIC" data-icon="matic">MATIC</option>
                                <option value="MATICETH" data-icon="maticeth">MATIC (ETH)</option>
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
                                <option value="USDCeMATIC" data-icon="usdcematic">USDCe (MATIC)</option>
                                <option value="USDCETH" data-icon="usdceth">USDC (ETH)</option>
                                <option value="USDCMATIC" data-icon="usdcmatic">USDC (MATIC)</option>
                                <option value="USDCSOL" data-icon="usdcsol">USDC (SOL)</option>
                                <option value="USDCTRC" data-icon="usdctrc">USDC (TRX)</option>
                                <option value="USDP" data-icon="usdp">USDP (ETH)</option>
                                <option value="USDT" data-icon="usdt">USDT (ETH)</option>
                                <option value="USDTARBITRUM" data-icon="usdtarbitrum">USDT (ARBITRUM)</option>
                                <option value="USDTBNB" data-icon="usdtbnb">USDT (BNB)</option>
                                <option value="USDTBSC" data-icon="usdtbsc">USDT (BSC)</option>
                                <option value="USDTMATIC" data-icon="usdtmatic">USDT (MATIC)</option>
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
                            <select name="ccy_to">
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
                                <option value="DAIMATIC" data-icon="daimatic">DAI (MATIC)</option>
                                <option value="DASH" data-icon="dash">DASH</option>
                                <option value="DOGE" data-icon="doge">DOGE</option>
                                <option value="DOT" data-icon="dot">DOT</option>
                                <option value="EOS" data-icon="eos">EOS</option>
                                <option value="ETC" data-icon="etc">ETC</option>
                                <option value="ETH" data-icon="eth" selected="">ETH</option>
                                <option value="ETHARBITRUM" data-icon="etharbitrum">ETH (ARBITRUM)</option>
                                <option value="ETHBNB" data-icon="ethbnb">ETH (BNB)</option>
                                <option value="ETHBSC" data-icon="ethbsc">ETH (BSC)</option>
                                <option value="FTM" data-icon="ftm">FTM</option>
                                <option value="KCS" data-icon="kcs">KCS (KCC)</option>
                                <option value="LINK" data-icon="link">LINK (ETH)</option>
                                <option value="LTC" data-icon="ltc">LTC</option>
                                <option value="MANAETH" data-icon="manaeth">MANA (ETH)</option>
                                <option value="MATIC" data-icon="matic">MATIC</option>
                                <option value="MATICETH" data-icon="maticeth">MATIC (ETH)</option>
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
                                <option value="USDCeMATIC" data-icon="usdcematic">USDCe (MATIC)</option>
                                <option value="USDCETH" data-icon="usdceth">USDC (ETH)</option>
                                <option value="USDCMATIC" data-icon="usdcmatic">USDC (MATIC)</option>
                                <option value="USDCSOL" data-icon="usdcsol">USDC (SOL)</option>
                                <option value="USDCTRC" data-icon="usdctrc">USDC (TRX)</option>
                                <option value="USDP" data-icon="usdp">USDP (ETH)</option>
                                <option value="USDT" data-icon="usdt">USDT (ETH)</option>
                                <option value="USDTARBITRUM" data-icon="usdtarbitrum">USDT (ARBITRUM)</option>
                                <option value="USDTBNB" data-icon="usdtbnb">USDT (BNB)</option>
                                <option value="USDTBSC" data-icon="usdtbsc">USDT (BSC)</option>
                                <option value="USDTMATIC" data-icon="usdtmatic">USDT (MATIC)</option>
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
                            <button class="btn mini generate" type="button" name="generate">{{__('Generate')}}</button>
                        </div>
                    </div>
                </td>
            </tr>
            </tbody>
        </table>
    </div></template>
