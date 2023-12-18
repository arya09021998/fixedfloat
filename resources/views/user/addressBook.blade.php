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
                    <li><a href="/user/addressbook" class="active"><i
                                    class="ico addressbook"></i><span>{{__('Address book')}}</span></a></li>
                    <li><a href="/user/affiliate"><i class="ico affiliate"></i><span>{{__('Affiliate program')}}</span></a>
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
                    <h2>{{__('Address book')}}</h2>
                    <button class="btn mini border right" type="button"
                            id="user_addressbook_add">{{__('Add address')}}</button>
                </div>
                <section class="profile-address-book">
                    <div class="ztp-wrap">
                        <div class="ztp-length"></div>
                        <div class="ztp-outer">
                            <div class="ztp-scroll">

                                <table class="ztp" id="addressbook">
                                    <caption></caption>
                                    <thead>
                                    <tr>
                                        <td class="min">
                                            <div class="mh">{{__('Date')}}<span class="ico"></span></div>
                                        </td>
                                        <td class="min">
                                            <div class="mh">{{__('Network')}}<span class="ico"></span></div>
                                        </td>
                                        <td class="min">
                                            <div class="mh">{{__('Coin')}}<span class="ico"></span></div>
                                        </td>
                                        <td class="">
                                            <div class="mh">{{__('Address')}}<span class="ico"></span></div>
                                        </td>
                                        <td class="min">
                                            <div class="mh"></div>
                                        </td>
                                    </tr>
                                    </thead>
                                    <tbody></tbody>
                                </table>
                                <table class="ztp-template none">
                                    <tbody>
                                    <tr class="ztp-tmpl" id="addressbook_tmpl">
                                        <td>
                                            <div class="ztp-c mh" data-type="date_fav">{reg_d}</div>
                                        </td>
                                        <td>
                                            <div class="ztp-c mh" data-type="network"><span
                                                        class="ib-middle coin-img svgcoin {network_min}"></span> <span
                                                        class="ib-middle">{network_alias}</span></div>
                                        </td>
                                        <td>
                                            <div class="ztp-c mh" data-type="coin">{^universal}<span
                                                        class="ib-middle coin-img svgcoin {coin_min}"></span> <span
                                                        class="ib-middle">{coin}</span>{\universal}{#universal}<span
                                                        class="universal" title="Universal">Universal</span>{\universal}
                                            </div>
                                        </td>
                                        <td>
                                            <div class="ztp-c mh breakall" style="width: 29em;" data-type="address">
                                                <span class="address">{address}</span>{#tag}<br><span class="tag">{tagName}: <b>{tag}</b></span>{\tag}
                                            </div>
                                        </td>
                                        <td>
                                            <div class="ztp-c mh npt" data-type="del">
                                                <button class="btn-icon ico delete"></button>
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="ztp-tmpl" id="addressbook_tmpl_more">
                                    </tr>
                                    </tbody>
                                </table>

                            </div>
                        </div>
                        <div class="ztp-bottom clrfix">
                            <div class="ztp-countshow">
                                <span class="ztp-countshow-before">{{__('Show')}}</span>
                                <span class="select-wrap">
									<select id="addressbook_countshow">
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
                            <ul class="ztp-paginate clrfix" id="addressbook_pages" data-pages="">
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
    @include('includes.popup_add_address')
    @include('includes.selector_tmpl')
    @push('js')
        <script type="text/javascript" src="{{asset('assets/js/ui/ztable.js')}}"></script>
        <script type="text/javascript">
            document.addEventListener("DOMContentLoaded", function () {
                let F = UI.func;

                let Networks = {
                    'ARBITRUM': {
                        value: 'ARBITRUM',
                        label: 'Arbitrum',
                        icon: 'arbitrum',
                        tag: '',
                    },
                    'AVAXC': {
                        value: 'AVAXC',
                        label: 'AVAX C-Chain',
                        icon: 'avaxc',
                        tag: '',
                    },
                    'BNB': {
                        value: 'BNB',
                        label: 'BNB Beacon Chain (BEP2)',
                        icon: 'bnb',
                        tag: 'MEMO',
                    },
                    'BSC': {
                        value: 'BSC',
                        label: 'BNB Smart Chain (BEP20)',
                        icon: 'bsc',
                        tag: '',
                    },
                    'ETH': {
                        value: 'ETH',
                        label: 'Ethereum (ERC20)',
                        icon: 'eth',
                        tag: '',
                    },
                    'KCC': {
                        value: 'KCC',
                        label: 'Kucoin Community Chain',
                        icon: 'kcc',
                        tag: '',
                    },
                    'MATIC': {
                        value: 'MATIC',
                        label: 'Polygon',
                        icon: 'matic',
                        tag: '',
                    },
                    'SOL': {
                        value: 'SOL',
                        label: 'Solana',
                        icon: 'sol',
                        tag: '',
                    },
                    'TRX': {
                        value: 'TRX',
                        label: 'Tron (TRC20)',
                        icon: 'trx',
                        tag: '',
                    },
                }

                let Ccies = {
                    'AAVE': {
                        coin: 'AAVE',
                        name: 'Aave',
                        img: 'aave',
                        networks: {
                            'ETH': {
                                value: 'ETH',
                                label: 'Ethereum (ERC20)',
                                icon: 'eth',
                                tag: '',
                            },
                        },
                    },
                    'ADA': {
                        coin: 'ADA',
                        name: 'Cardano',
                        img: 'ada',
                        networks: {
                            'ADA': {
                                value: 'ADA',
                                label: 'Cardano',
                                icon: 'ada',
                                tag: '',
                            },
                            'BNB': {
                                value: 'BNB',
                                label: 'BNB Beacon Chain (BEP2)',
                                icon: 'bnb',
                                tag: 'MEMO',
                            },
                            'BSC': {
                                value: 'BSC',
                                label: 'BNB Smart Chain (BEP20)',
                                icon: 'bsc',
                                tag: '',
                            },
                        },
                    },
                    'ATOM': {
                        coin: 'ATOM',
                        name: 'Cosmos',
                        img: 'atom',
                        networks: {
                            'ATOM': {
                                value: 'ATOM',
                                label: 'Cosmos',
                                icon: 'atom',
                                tag: 'MEMO',
                            },
                        },
                    },
                    'AVAX': {
                        coin: 'AVAX',
                        name: 'Avalanche',
                        img: 'avax',
                        networks: {
                            'AVAXC': {
                                value: 'AVAXC',
                                label: 'AVAX C-Chain',
                                icon: 'avaxc',
                                tag: '',
                            },
                        },
                    },
                    'BAT': {
                        coin: 'BAT',
                        name: 'Basic Attention',
                        img: 'bat',
                        networks: {
                            'ETH': {
                                value: 'ETH',
                                label: 'Ethereum (ERC20)',
                                icon: 'eth',
                                tag: '',
                            },
                        },
                    },
                    'BCH': {
                        coin: 'BCH',
                        name: 'Bitcoin Cash',
                        img: 'bch',
                        networks: {
                            'BCH': {
                                value: 'BCH',
                                label: 'Bitcoin Cash',
                                icon: 'bch',
                                tag: '',
                            },
                        },
                    },
                    'BNB': {
                        coin: 'BNB',
                        name: 'Binance Coin',
                        img: 'bnb',
                        networks: {
                            'BNB': {
                                value: 'BNB',
                                label: 'BNB Beacon Chain (BEP2)',
                                icon: 'bnb',
                                tag: 'MEMO',
                            },
                            'BSC': {
                                value: 'BSC',
                                label: 'BNB Smart Chain (BEP20)',
                                icon: 'bsc',
                                tag: '',
                            },
                        },
                    },
                    'BTC': {
                        coin: 'BTC',
                        name: 'Bitcoin',
                        img: 'btc',
                        networks: {
                            'BTC': {
                                value: 'BTC',
                                label: 'Bitcoin',
                                icon: 'btc',
                                tag: '',
                            },
                            'BNB': {
                                value: 'BNB',
                                label: 'BNB Beacon Chain (BEP2)',
                                icon: 'bnb',
                                tag: 'MEMO',
                            },
                            'BSC': {
                                value: 'BSC',
                                label: 'BNB Smart Chain (BEP20)',
                                icon: 'bsc',
                                tag: '',
                            },
                        },
                    },
                    'BTT': {
                        coin: 'BTT',
                        name: 'BitTorrent',
                        img: 'btt',
                        networks: {
                            'TRX': {
                                value: 'TRX',
                                label: 'Tron (TRC20)',
                                icon: 'trx',
                                tag: '',
                            },
                        },
                    },
                    'CAKE': {
                        coin: 'CAKE',
                        name: 'PancakeSwap',
                        img: 'cake',
                        networks: {
                            'BSC': {
                                value: 'BSC',
                                label: 'BNB Smart Chain (BEP20)',
                                icon: 'bsc',
                                tag: '',
                            },
                        },
                    },
                    'DAI': {
                        coin: 'DAI',
                        name: 'DAI',
                        img: 'dai',
                        networks: {
                            'BSC': {
                                value: 'BSC',
                                label: 'BNB Smart Chain (BEP20)',
                                icon: 'bsc',
                                tag: '',
                            },
                            'ETH': {
                                value: 'ETH',
                                label: 'Ethereum (ERC20)',
                                icon: 'eth',
                                tag: '',
                            },
                            'MATIC': {
                                value: 'MATIC',
                                label: 'Polygon',
                                icon: 'matic',
                                tag: '',
                            },
                        },
                    },
                    'DASH': {
                        coin: 'DASH',
                        name: 'Dash',
                        img: 'dash',
                        networks: {
                            'DASH': {
                                value: 'DASH',
                                label: 'Dash',
                                icon: 'dash',
                                tag: '',
                            },
                        },
                    },
                    'DOGE': {
                        coin: 'DOGE',
                        name: 'Dogecoin',
                        img: 'doge',
                        networks: {
                            'DOGE': {
                                value: 'DOGE',
                                label: 'Dogecoin',
                                icon: 'doge',
                                tag: '',
                            },
                        },
                    },
                    'DOT': {
                        coin: 'DOT',
                        name: 'Polkadot',
                        img: 'dot',
                        networks: {
                            'DOT': {
                                value: 'DOT',
                                label: 'Polkadot',
                                icon: 'dot',
                                tag: '',
                            },
                        },
                    },
                    'EOS': {
                        coin: 'EOS',
                        name: 'EOS',
                        img: 'eos',
                        networks: {
                            'EOS': {
                                value: 'EOS',
                                label: 'EOS',
                                icon: 'eos',
                                tag: 'MEMO',
                            },
                        },
                    },
                    'ETC': {
                        coin: 'ETC',
                        name: 'Ethereum Classic',
                        img: 'etc',
                        networks: {
                            'ETC': {
                                value: 'ETC',
                                label: 'Ethereum Classic',
                                icon: 'etc',
                                tag: '',
                            },
                        },
                    },
                    'ETH': {
                        coin: 'ETH',
                        name: 'Ethereum',
                        img: 'eth',
                        networks: {
                            'ETH': {
                                value: 'ETH',
                                label: 'Ethereum (ERC20)',
                                icon: 'eth',
                                tag: '',
                            },
                            'ARBITRUM': {
                                value: 'ARBITRUM',
                                label: 'Arbitrum',
                                icon: 'arbitrum',
                                tag: '',
                            },
                            'BNB': {
                                value: 'BNB',
                                label: 'BNB Beacon Chain (BEP2)',
                                icon: 'bnb',
                                tag: 'MEMO',
                            },
                            'BSC': {
                                value: 'BSC',
                                label: 'BNB Smart Chain (BEP20)',
                                icon: 'bsc',
                                tag: '',
                            },
                        },
                    },
                    'FTM': {
                        coin: 'FTM',
                        name: 'Fantom',
                        img: 'ftm',
                        networks: {
                            'FTM': {
                                value: 'FTM',
                                label: 'Fantom',
                                icon: 'ftm',
                                tag: '',
                            },
                        },
                    },
                    'KCS': {
                        coin: 'KCS',
                        name: 'KuCoin Token',
                        img: 'kcs',
                        networks: {
                            'KCC': {
                                value: 'KCC',
                                label: 'Kucoin Community Chain',
                                icon: 'kcc',
                                tag: '',
                            },
                        },
                    },
                    'LINK': {
                        coin: 'LINK',
                        name: 'Chainlink',
                        img: 'link',
                        networks: {
                            'ETH': {
                                value: 'ETH',
                                label: 'Ethereum (ERC20)',
                                icon: 'eth',
                                tag: '',
                            },
                        },
                    },
                    'LTC': {
                        coin: 'LTC',
                        name: 'Litecoin',
                        img: 'ltc',
                        networks: {
                            'LTC': {
                                value: 'LTC',
                                label: 'Litecoin',
                                icon: 'ltc',
                                tag: '',
                            },
                        },
                    },
                    'MANA': {
                        coin: 'MANA',
                        name: 'Decentraland',
                        img: 'mana',
                        networks: {
                            'ETH': {
                                value: 'ETH',
                                label: 'Ethereum (ERC20)',
                                icon: 'eth',
                                tag: '',
                            },
                        },
                    },
                    'MATIC': {
                        coin: 'MATIC',
                        name: 'Polygon',
                        img: 'matic',
                        networks: {
                            'MATIC': {
                                value: 'MATIC',
                                label: 'Polygon',
                                icon: 'matic',
                                tag: '',
                            },
                            'ETH': {
                                value: 'ETH',
                                label: 'Ethereum (ERC20)',
                                icon: 'eth',
                                tag: '',
                            },
                        },
                    },
                    'MKR': {
                        coin: 'MKR',
                        name: 'Maker',
                        img: 'mkr',
                        networks: {
                            'ETH': {
                                value: 'ETH',
                                label: 'Ethereum (ERC20)',
                                icon: 'eth',
                                tag: '',
                            },
                        },
                    },
                    'SHIB': {
                        coin: 'SHIB',
                        name: 'SHIBA INU',
                        img: 'shib',
                        networks: {
                            'ETH': {
                                value: 'ETH',
                                label: 'Ethereum (ERC20)',
                                icon: 'eth',
                                tag: '',
                            },
                            'BSC': {
                                value: 'BSC',
                                label: 'BNB Smart Chain (BEP20)',
                                icon: 'bsc',
                                tag: '',
                            },
                        },
                    },
                    'SOL': {
                        coin: 'SOL',
                        name: 'Solana',
                        img: 'sol',
                        networks: {
                            'SOL': {
                                value: 'SOL',
                                label: 'Solana',
                                icon: 'sol',
                                tag: '',
                            },
                        },
                    },
                    'TON': {
                        coin: 'TON',
                        name: 'Toncoin',
                        img: 'ton',
                        networks: {
                            'TON': {
                                value: 'TON',
                                label: 'Toncoin',
                                icon: 'ton',
                                tag: 'MEMO/Comment',
                            },
                        },
                    },
                    'TRX': {
                        coin: 'TRX',
                        name: 'Tron',
                        img: 'trx',
                        networks: {
                            'TRX': {
                                value: 'TRX',
                                label: 'Tron (TRC20)',
                                icon: 'trx',
                                tag: '',
                            },
                        },
                    },
                    'TUSD': {
                        coin: 'TUSD',
                        name: 'TrueUSD',
                        img: 'tusd',
                        networks: {
                            'ETH': {
                                value: 'ETH',
                                label: 'Ethereum (ERC20)',
                                icon: 'eth',
                                tag: '',
                            },
                        },
                    },
                    'TWT': {
                        coin: 'TWT',
                        name: 'Trust Wallet Token',
                        img: 'twt',
                        networks: {
                            'BNB': {
                                value: 'BNB',
                                label: 'BNB Beacon Chain (BEP2)',
                                icon: 'bnb',
                                tag: 'MEMO',
                            },
                            'BSC': {
                                value: 'BSC',
                                label: 'BNB Smart Chain (BEP20)',
                                icon: 'bsc',
                                tag: 'MEMO',
                            },
                        },
                    },
                    'USDC': {
                        coin: 'USDC',
                        name: 'USD Coin',
                        img: 'usdc',
                        networks: {
                            'BSC': {
                                value: 'BSC',
                                label: 'BNB Smart Chain (BEP20)',
                                icon: 'bsc',
                                tag: '',
                            },
                            'ETH': {
                                value: 'ETH',
                                label: 'Ethereum (ERC20)',
                                icon: 'eth',
                                tag: '',
                            },
                            'MATIC': {
                                value: 'MATIC',
                                label: 'Polygon',
                                icon: 'matic',
                                tag: '',
                            },
                            'SOL': {
                                value: 'SOL',
                                label: 'Solana',
                                icon: 'sol',
                                tag: '',
                            },
                            'TRX': {
                                value: 'TRX',
                                label: 'Tron (TRC20)',
                                icon: 'trx',
                                tag: '',
                            },
                        },
                    },
                    'USDP': {
                        coin: 'USDP',
                        name: 'Pax Dollar',
                        img: 'usdp',
                        networks: {
                            'ETH': {
                                value: 'ETH',
                                label: 'Ethereum (ERC20)',
                                icon: 'eth',
                                tag: '',
                            },
                        },
                    },
                    'USDT': {
                        coin: 'USDT',
                        name: 'Tether',
                        img: 'usdt',
                        networks: {
                            'ETH': {
                                value: 'ETH',
                                label: 'Ethereum (ERC20)',
                                icon: 'eth',
                                tag: '',
                            },
                            'ARBITRUM': {
                                value: 'ARBITRUM',
                                label: 'Arbitrum',
                                icon: 'arbitrum',
                                tag: '',
                            },
                            'BNB': {
                                value: 'BNB',
                                label: 'BNB Beacon Chain (BEP2)',
                                icon: 'bnb',
                                tag: 'MEMO',
                            },
                            'BSC': {
                                value: 'BSC',
                                label: 'BNB Smart Chain (BEP20)',
                                icon: 'bsc',
                                tag: '',
                            },
                            'MATIC': {
                                value: 'MATIC',
                                label: 'Polygon',
                                icon: 'matic',
                                tag: '',
                            },
                            'SOL': {
                                value: 'SOL',
                                label: 'Solana',
                                icon: 'sol',
                                tag: '',
                            },
                            'TRX': {
                                value: 'TRX',
                                label: 'Tron (TRC20)',
                                icon: 'trx',
                                tag: '',
                            },
                        },
                    },
                    'VET': {
                        coin: 'VET',
                        name: 'VeChain',
                        img: 'vet',
                        networks: {
                            'VET': {
                                value: 'VET',
                                label: 'VeChain',
                                icon: 'vet',
                                tag: '',
                            },
                        },
                    },
                    'WBNB': {
                        coin: 'WBNB',
                        name: 'Wrapped BNB',
                        img: 'wbnb',
                        networks: {
                            'BSC': {
                                value: 'BSC',
                                label: 'BNB Smart Chain (BEP20)',
                                icon: 'bsc',
                                tag: '',
                            },
                        },
                    },
                    'WETH': {
                        coin: 'WETH',
                        name: 'Wrapped ETH',
                        img: 'weth',
                        networks: {
                            'ETH': {
                                value: 'ETH',
                                label: 'Ethereum (ERC20)',
                                icon: 'eth',
                                tag: '',
                            },
                        },
                    },
                    'XLM': {
                        coin: 'XLM',
                        name: 'Stellar Lumens',
                        img: 'xlm',
                        networks: {
                            'XLM': {
                                value: 'XLM',
                                label: 'Stellar Lumens',
                                icon: 'xlm',
                                tag: 'MEMO',
                            },
                        },
                    },
                    'XMR': {
                        coin: 'XMR',
                        name: 'Monero',
                        img: 'xmr',
                        networks: {
                            'XMR': {
                                value: 'XMR',
                                label: 'Monero',
                                icon: 'xmr',
                                tag: '',
                            },
                        },
                    },
                    'XRP': {
                        coin: 'XRP',
                        name: 'Ripple',
                        img: 'xrp',
                        networks: {
                            'XRP': {
                                value: 'XRP',
                                label: 'Ripple',
                                icon: 'xrp',
                                tag: 'Destination tag',
                            },
                        },
                    },
                    'XTZ': {
                        coin: 'XTZ',
                        name: 'Tezos',
                        img: 'xtz',
                        networks: {
                            'XTZ': {
                                value: 'XTZ',
                                label: 'Tezos',
                                icon: 'xtz',
                                tag: '',
                            },
                        },
                    },
                    'ZEC': {
                        coin: 'ZEC',
                        name: 'Zcash',
                        img: 'zec',
                        networks: {
                            'ZEC': {
                                value: 'ZEC',
                                label: 'Zcash',
                                icon: 'zec',
                                tag: '',
                            },
                        },
                    },
                    'ZRX': {
                        coin: 'ZRX',
                        name: '0x',
                        img: 'zrx',
                        networks: {
                            'ETH': {
                                value: 'ETH',
                                label: 'Ethereum (ERC20)',
                                icon: 'eth',
                                tag: '',
                            },
                        },
                    },
                };

                let Table = UI.ztable('addressbook', {
                    ajaxFunc: {'load': 'userAddressBookList'},
                    onRowInit: function (row) {
                        let reg = moment(moment.utc(row.date_reg).toDate()).local();
                        row.reg_d = reg.format('L');
                        row.reg_t = reg.format('HH:mm');
                        row.network_min = row.network.toLowerCase();
                        if (row.coin) {
                            row.coin_min = row.coin.toLowerCase();
                        }
                        row.tagName = +row.universal ? Networks[row.network].tag : Ccies[row.coin].networks[row.network].tag;
                    },
                });

                F.on('addressbook', 'click', '.delete', function () {
                    let row = this.closest('.ztp-row');
                    let rowId = row.getAttribute('data-id');
                    let tRow = Table.rows[rowId];
                    let data = {
                        coin: tRow.coin,
                        network: tRow.network,
                        address: tRow.address,
                        tag: tRow.tag,
                    }
                    UI.confirm('{{__('Are you sure?')}}', function () {
                        APP.api('userAddressFavoriteDel', data)
                            .then(function (msg) {
                                Table.reload();
                            })
                            .catch(function (msg) {
                            })
                    })
                })


                F.bind('user_addressbook_add', 'click', function () {
                    UI.popup({
                        bgclose: false,
                        class: 'popup-addressbook-outer',
                        html: F.id('popup_add_address').innerHTML,
                        afterRender: function () {
                            let popup = this;
                            let form = F.id('popup_addressbook_form');

                            let tbAddress = UI.textbox(form.address, {
                                btnPaste: true,
                                addclass: 'darkbg',
                                addError: true
                            })
                                .input(function (input) {
                                    F.remClass(input, 'error');
                                });
                            let tbTag = UI.textbox(form.tag, {btnPaste: true, addclass: 'darkbg', addError: true})
                                .input(function (input) {
                                    F.remClass(input, 'error');
                                });

                            let selectorCoin = UI.selector(form.coin, {
                                tmpl: F.id('selector_tmpl').innerHTML,
                                search: {placeholder: 'Search', label: 'Found'},
                                emptyOption: 'Select coin',
                            });

                            selectorCoin.onChange(function (selected, from, param) {
                                if (!selected.value) return;
                                let nets = Ccies[selected.value].networks;
                                selectorNetwork.rebuild(nets);
                                selectorNetwork.disable(false);
                                let arrnets = Object.values(nets);
                                if (arrnets.length == 1) {
                                    selectorNetwork.val(arrnets[0].value);
                                }
                            })

                            let selectorNetwork = UI.selector(form.network, {
                                tmpl: F.id('selector_tmpl').innerHTML,
                                search: {placeholder: 'Search', label: 'Found'},
                                emptyOption: 'Select network',
                            });

                            selectorNetwork.onChange(function (selected, from, param) {
                                if (!selected.value) {
                                    F.addClass('popup_addressbook_form_tag', 'none');
                                    form.address.disabled = true;
                                    form.tag.value = '';
                                    return;
                                } else {
                                    form.address.disabled = false;
                                }
                                let coin = selectorCoin.val();
                                let tag = coin ? Ccies[coin].networks[selected.value].tag : Networks[selected.value].tag;
                                form.tag.value = '';
                                F.togClass('popup_addressbook_form_tag', 'none', !tag);
                            });

                            F.bind(form.universal, 'change', function () {
                                selectorCoin.disable(this.checked);
                                if (this.checked) {
                                    selectorCoin.val('');
                                    let currNetwork = selectorNetwork.val();
                                    selectorNetwork.rebuild(Networks);
                                    selectorNetwork.disable(false);
                                    if (Networks[currNetwork]) {
                                        selectorNetwork.val(currNetwork);
                                    } else {
                                        selectorNetwork.val('');
                                    }
                                } else {
                                    if (!selectorCoin.val()) {
                                        selectorNetwork.disable(true);
                                        selectorNetwork.val('');
                                    } else {
                                        selectorNetwork.disable(!selectorCoin.val());
                                    }
                                }
                            })

                            UI.button('popup_addressbook_form_submit').click(function (btn) {
                                let data = new FormData(form);

                                APP.api('userAddressFavoriteAdd', data)
                                    .then(function (msg) {
                                        btn.success()
                                        Table.reload();
                                        popup.close();
                                    })
                                    .catch(function (msg) {
                                        btn.error()

                                        switch (msg.code) {
                                            case 302:
                                            case 303:
                                                tbTag.error(msg.msg);
                                                break;

                                            case 301:
                                            case 304:
                                            case 305:
                                            default:
                                                tbAddress.error(msg.msg);
                                                break;
                                        }
                                    })
                            })


                        }

                    }).show();
                })


            })
        </script>
    @endpush
</x-app-layout>
