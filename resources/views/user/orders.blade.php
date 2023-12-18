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
                    <li><a href="/user/orders" class="active"><i
                                    class="ico history"></i><span>{{__('Orders history')}}</span></a></li>
                    <li><a href="/user/addressbook"><i
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
                <h2>{{__('Active orders')}}</h2>
                <section class="tablecontent">
                    <div class="ztp-wrap">
                        <div class="ztp-length"></div>
                        <div class="ztp-outer">
                            <div class="ztp-scroll">
                                <table class="ztp" id="orders_active">
                                    <caption></caption>
                                    <thead>
                                    <tr>
                                        <td class="">
                                            <div class="mh">Order&nbsp;ID<span class="ico"></span></div>
                                        </td>
                                        <td class="sorting min" data-type="reg">
                                            <div class="mh">{{__('Time')}}<span class="ico"></span></div>
                                        </td>
                                        <td class="">
                                            <div class="mh">{{__('Send')}}<span class="ico"></span></div>
                                        </td>
                                        <td class="">
                                            <div class="mh">{{__('Receive')}}<span class="ico"></span></div>
                                        </td>
                                        <td class="">
                                            <div class="mh">{{__('Status')}}<span class="ico"></span></div>
                                        </td>
                                    </tr>
                                    </thead>
                                    <tbody></tbody>
                                </table>
                                <table class="ztp-template none">
                                    <tbody>
                                    <tr class="ztp-tmpl" id="orders_active_tmpl">
                                        <td>
                                            <div class="ztp-c mh" data-type="id">{id}</div>
                                        </td>
                                        <td>
                                            <div class="ztp-c mh" data-type="reg">{reg_t}</div>
                                        </td>
                                        <td>
                                            <div class="ztp-c mh" data-type="fromQty"><span
                                                        class="ib-middle coin-img svgcoin {fromCurrency_min}"></span>
                                                <span class="ib-middle">{fromQty} {fromCurrency}</span></div>
                                        </td>
                                        <td>
                                            <div class="ztp-c mh" data-type="toQty"><span
                                                        class="ib-middle coin-img svgcoin {toCurrency_min}"></span>
                                                <span class="ib-middle">{toQty} {toCurrency}</span></div>
                                        </td>
                                        <td>
                                            <div class="ztp-c mh" data-type="status" data-value="{status}">
                                                {status_valname}
                                            </div>
                                        </td>
                                    </tr>
                                    <tr class="ztp-tmpl" id="orders_active_tmpl_more">
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="ztp-bottom clrfix">
                            <div class="ztp-countshow">
                                <span class="ztp-countshow-before">{{__('Show')}}</span>
                                <span class="select-wrap">
									<select id="orders_active_countshow">
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
                            <ul class="ztp-paginate clrfix" id="orders_active_pages" data-pages="">
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
                <h2>{{__('Сompleted orders')}}</h2>
                <section class="tablecontent">
                    <div class="ztp-wrap">
                        <div class="ztp-length"></div>
                        <div class="ztp-outer">
                            <div class="ztp-scroll">
                                <table class="ztp" id="orders">
                                    <caption></caption>
                                    <thead>
                                    <tr>
                                        <td class="sorting min" data-type="reg">
                                            <div class="mh">{{__('Date')}}\<br>Order&nbsp;ID<span class="ico"></span></div>
                                        </td>
                                        <td class="">
                                            <div class="mh">{{__('Send')}}<span class="ico"></span></div>
                                        </td>
                                        <td class="">
                                            <div class="mh">{{__('Receive')}}<span class="ico"></span></div>
                                        </td>
                                        <td class="">
                                            <div class="mh">{{__('Destination address')}}<span class="ico"></span></div>
                                        </td>
                                    </tr>
                                    </thead>
                                    <tbody></tbody>
                                </table>
                                <table class="ztp-template none">
                                    <tbody>
                                    <tr class="ztp-tmpl" id="orders_tmpl">
                                        <td>
                                            <div class="ztp-c mh" data-type="reg">{reg_d}<br><a href="/order/{id}"
                                                                                                target="_blank">{id}</a>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="ztp-c mh" data-type="fromQty"><span
                                                        class="ib-middle coin-img svgcoin {fromCurrency_min}"></span>
                                                <span class="ib-middle">{fromQty} {fromCoin}{#fromShowNetwork}<sup>{fromNetwork}</sup>{\fromShowNetwork}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="ztp-c mh" data-type="toQty"><span
                                                        class="ib-middle coin-img svgcoin {toCurrency_min}"></span>
                                                <span class="ib-middle">{toQty} {toCoin}{#toShowNetwork}<sup>{toNetwork}</sup>{\toShowNetwork}</span>
                                            </div>
                                        </td>
                                        <td>
                                            <div class="ztp-c mh breakall" data-type="toAddress">{toAddress}</div>
                                        </td>
                                    </tr>
                                    <tr class="ztp-tmpl" id="orders_tmpl_more">
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="ztp-bottom clrfix">
                            <div class="ztp-countshow">
                                <span class="ztp-countshow-before">{{__('Show')}}</span>
                                <span class="select-wrap">
									<select id="orders_countshow">
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
                            <ul class="ztp-paginate clrfix" id="orders_pages" data-pages="">
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
    @push('js')
        <script type="text/javascript" src="{{asset('assets/js/ui/ztable.js')}}"></script>
        <script type="text/javascript">
            document.addEventListener("DOMContentLoaded", function () {
                let F = UI.func;
                F.bind(document.querySelectorAll('.input-copy'), 'click', function () {
                    this.focus();
                })

                let ui_orders_active = UI.ztable('orders_active', {
                    ajaxFunc: {
                        'load': 'userOrders',
                    },
                    filter: {
                        'status': [0, 1, 2, 3, 7]
                    },
                    typeSelect: {
                        status: {
                            0: 'New',
                            1: 'Pending',
                            2: 'Exchange',
                            3: 'Withdraw',
                            7: 'Emergency',
                        }
                    },
                    onRowInit: function (row) {
                        let reg = moment(moment.utc(row.reg).toDate()).local();
                        row.reg_d = reg.format('L');
                        row.reg_t = reg.format('HH:mm');
                        row.fromCurrency_min = row.fromCurrency.toLowerCase();
                        row.toCurrency_min = row.toCurrency.toLowerCase();
                        row.fromQty = F.fixNumber(+row.fromQty);

                        row.fromShowNetwork = row.fromCoin != row.fromNetwork;
                        row.toShowNetwork = row.toCoin != row.toNetwork;
                    },
                });

                let ui_orders = UI.ztable('orders', {
                    ajaxFunc: {
                        'load': 'userOrders',
                    },
                    filter: {
                        'status': [4]
                    },
                    onRowInit: function (row) {
                        let reg = moment(moment.utc(row.reg).toDate()).local();
                        row.reg_d = reg.format('L');
                        row.reg_t = reg.format('HH:mm');
                        row.fromCurrency_min = row.fromCurrency.toLowerCase();
                        row.toCurrency_min = row.toCurrency.toLowerCase();
                        row.fromQty = F.fixNumber(+row.fromQty);
                        row.toQty = F.fixNumber(+row.toQty);

                        row.fromShowNetwork = row.fromCoin != row.fromNetwork;
                        row.toShowNetwork = row.toCoin != row.toNetwork;
                    },
                });
            })
        </script>
    @endpush
</x-app-layout>
