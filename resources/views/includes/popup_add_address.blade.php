<template id="popup_add_address">
    <div class="popup-content popup-full-mobile darkbg popup-addressbook-wrap">
        <form class="popup-addressbook-add" id="popup_addressbook_form">
            <h3 class="center">{{__('Add receiving address')}}</h3>
            <div class="ln-field">
                <label>{{__('Coin')}}:</label>
                <div>
                    <select name="coin">
                        <option value="" label="hidden">{{__('Select coin')}}</option>
                        <option value="AAVE" data-icon="aave">Aave</option>
                        <option value="ADA" data-icon="ada">Cardano</option>
                        <option value="ATOM" data-icon="atom">Cosmos</option>
                        <option value="AVAX" data-icon="avax">Avalanche</option>
                        <option value="BAT" data-icon="bat">Basic Attention</option>
                        <option value="BCH" data-icon="bch">Bitcoin Cash</option>
                        <option value="BNB" data-icon="bnb">Binance Coin</option>
                        <option value="BTC" data-icon="btc">Bitcoin</option>
                        <option value="BTT" data-icon="btt">BitTorrent</option>
                        <option value="CAKE" data-icon="cake">PancakeSwap</option>
                        <option value="DAI" data-icon="dai">DAI</option>
                        <option value="DASH" data-icon="dash">Dash</option>
                        <option value="DOGE" data-icon="doge">Dogecoin</option>
                        <option value="DOT" data-icon="dot">Polkadot</option>
                        <option value="EOS" data-icon="eos">EOS</option>
                        <option value="ETC" data-icon="etc">Ethereum Classic</option>
                        <option value="ETH" data-icon="eth">Ethereum</option>
                        <option value="FTM" data-icon="ftm">Fantom</option>
                        <option value="KCS" data-icon="kcs">KuCoin Token</option>
                        <option value="LINK" data-icon="link">Chainlink</option>
                        <option value="LTC" data-icon="ltc">Litecoin</option>
                        <option value="MANA" data-icon="mana">Decentraland</option>
                        <option value="MATIC" data-icon="matic">Polygon</option>
                        <option value="MKR" data-icon="mkr">Maker</option>
                        <option value="SHIB" data-icon="shib">SHIBA INU</option>
                        <option value="SOL" data-icon="sol">Solana</option>
                        <option value="TON" data-icon="ton">Toncoin</option>
                        <option value="TRX" data-icon="trx">Tron</option>
                        <option value="TUSD" data-icon="tusd">TrueUSD</option>
                        <option value="TWT" data-icon="twt">Trust Wallet Token</option>
                        <option value="USDC" data-icon="usdc">USD Coin</option>
                        <option value="USDP" data-icon="usdp">Pax Dollar</option>
                        <option value="USDT" data-icon="usdt">Tether</option>
                        <option value="VET" data-icon="vet">VeChain</option>
                        <option value="WBNB" data-icon="wbnb">Wrapped BNB</option>
                        <option value="WETH" data-icon="weth">Wrapped ETH</option>
                        <option value="XLM" data-icon="xlm">Stellar Lumens</option>
                        <option value="XMR" data-icon="xmr">Monero</option>
                        <option value="XRP" data-icon="xrp">Ripple</option>
                        <option value="XTZ" data-icon="xtz">Tezos</option>
                        <option value="ZEC" data-icon="zec">Zcash</option>
                        <option value="ZRX" data-icon="zrx">0x</option>
                    </select>
                </div>
                <div>
                    <label class="checkbox-tick"><input type="checkbox" name="universal"> <span>{{__('Set as a universal address, without specific coins')}}</span></label>
                </div>
            </div>
            <div class="ln-field">
                <label>{{__('Network')}}:</label>
                <div>
                    <select name="network" disabled="">
                        <option value="" label="hidden">{{__('Select network')}}</option>
                    </select>
                </div>
            </div>
            <div class="ln-field">
                <label>{{__('Address')}}:</label>
                <div>
                    <input type="text" name="address" autocomplete="off" placeholder="Enter address here" disabled="">
                </div>
            </div>
            <div class="ln-field none" id="popup_addressbook_form_tag">
                <label>MEMO/Destination tag:</label>
                <div>
                    <input type="text" name="tag" autocomplete="off" placeholder="Optional">
                </div>
            </div>
            <div class="ln-field ctrl center">
                <div>
                    <button type="button" class="btn mini cancel popup-close-btn">{{__('Cancel')}}</button>
                    <button type="button" class="btn mini" id="popup_addressbook_form_submit">{{__('Save')}}</button>
                </div>
            </div>
        </form>
    </div>
</template>
