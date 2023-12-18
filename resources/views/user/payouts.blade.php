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
                    <li><a href="/user/affiliate"><i
                                    class="ico affiliate"></i><span>{{__('Affiliate program')}}</span></a>
                    </li>
                    <li><a href="/user/payouts" class="active"><i class="ico payout"></i><span>{{__('Payouts')}}</span></a></li>
                    <li><a href="/user/apikey"><i class="ico apikey"></i><span>{{__('API management')}}</span></a></li>
                    <li><a href="/user/signout" class="signout" data-confirm="{{__('Are you sure?')}}"><i
                                    class="ico signout"></i><span>{{__('Sign out')}}</span></a>
                    </li>
                </ul>
            </aside>
            <section class="content user-content darkbg">
                <h2>{{__('Payout')}}</h2>
                <section class="profile-payout">
                    <div class="profile-payout-h"><span>{{__('Earned')}}</span></div>
                    <div class="profile-payout-amount-wrap cant">
                        <b class="profile-payout-amount" id="payout-est-balance">0</b><span
                                class="profile-payout-ccy btc">BTC</span>
                    </div>
                    <div class="profile-payout-readystatus">
                        <span>{{__('less than the minimum')}} <b>0.001 BTC</b></span>
                    </div>
                    <div class="profile-payout-submit-wrap">
                        <div class="profile-payout-submit-h"><span>{{__('Bitcoin address')}}</span></div>
                        <div class="profile-payout-submit">
                            <div class="destination-field active visible-overflow" id="payout_address_section">
                                <div class="dinput" id="access_address_outer">
                                    <input type="text" class="dinput-field" id="payout_address" value="" required=""
                                           placeholder="{{__('Your Bitcoin address to receive earned funds')}}">
                                    <span id="payout_address_error"
                                          class="fieldhint error">{{__('Invalid address')}}</span>
                                    <div class="funcbuttons">
                                        <button type="button" class="ico scanqr" id="access_address_scanqr"></button>
                                        <button type="button" class="ico close" id="access_address_clear"></button>
                                    </div>
                                </div>
                            </div>
                            <button id="payout_btn" class="btn rounded submit" disabled="">{{__('Payout')}}</button>
                        </div>
                    </div>
                </section>
                <h2>{{__('Last payouts')}}</h2>
                <section class="profile-payout-list">
                    <div class="ztp-wrap">
                        <div class="ztp-length"></div>
                        <div class="ztp-outer">
                            <div class="ztp-scroll">
                                <table class="ztp" id="table">
                                    <caption></caption>
                                    <thead>
                                    <tr>
                                        <td class="min sort-desc" data-type="reg">
                                            <div class="mh"><span>{{__('Date')}}</span><span class="ico"></span></div>
                                        </td>
                                        <td class="mh">
                                            <div class="mh"><span>{{__('Status')}}</span><span class="ico"></span></div>
                                        </td>
                                        <td class="mh">
                                            <div class="mh"><span>{{__('Amount')}}</span><span class="ico"></span></div>
                                        </td>
                                        <td class="mh">
                                            <div class="mh"><span>{{__('Address')}}</span><span class="ico"></span>
                                            </div>
                                        </td>
                                    </tr>
                                    </thead>
                                    <tbody></tbody>
                                </table>
                                <table class="ztp-template none">
                                    <tbody>
                                    <tr class="ztp-tmpl" id="table_tmpl">
                                        <td>
                                            <div class="ztp-c mh" data-type="reg">{reg_d}</div>
                                        </td>
                                        <td class="">
                                            <div class="ztp-c mh" data-type="status" data-value="{status}">
                                                {status_valname}
                                            </div>
                                        </td>
                                        <td>
                                            <div class="ztp-c mh" data-type="amount"><span
                                                        class="ib-middle coin-img svgcoin {currency_min}"></span> <span
                                                        class="ib-middle">{amount} {ccyCoin}{#ccyShowNetwork}<sup>{ccyNetwork}</sup>{\ccyShowNetwork}</span>
                                            </div>
                                        </td>
                                        <td class="">
                                            <div class="ztp-c mh" data-type="address" data-value="{address}">{address}
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

    @push('js')
        <script type="text/javascript" src="{{asset('assets/js/ui/ztable.js')}}"></script>
        <script type="text/javascript">
            document.addEventListener("DOMContentLoaded", function () {
                let F = UI.func;
                F.bind(document.querySelectorAll('.input-copy'), 'click', function () {
                    this.focus();
                })

                let ui_orders = UI.ztable('table', {
                    ajaxFunc: {
                        'load': 'userPayouts',
                    },
                    typeSelect: {
                        status: {
                            'request': 'Request',
                            'approved': 'Approved',
                            'pending': 'Pending',
                            'paid': 'Paid',
                            'reject': 'Reject'
                        }
                    },
                    onRowInit: function (row) {
                        let reg = moment(moment.utc(row.reg).toDate()).local();
                        row.amount = F.fixNumber(+row.amount);
                        row.reg_d = reg.format('L');
                        row.reg_t = reg.format('HH:mm');
                        row.currency_min = row.currency.toLowerCase();
                        row.ccyShowNetwork = row.ccyCoin != row.ccyNetwork;
                    },
                });


                let Payout = {
                    fieldAddr: undefined,
                    section: undefined,
                    init: function () {
                        let self = this;
                        self.section = F.id('payout_address_section');
                        self.fieldAddr = F.id('payout_address');
                        self.errorAddr = F.id('payout_address_error');

                        F.bind(self.fieldAddr, 'focus', function () {
                            F.remClass(this, 'error');
                        });
                        F.bind(self.fieldAddr, 'blur', function () {
                            F.remClass(this, 'error');
                        })

                        F.bind(self.fieldAddr, 'input', function () {
                            F.remClass(this, 'error');
                        });
                        F.bind(self.fieldAddr, 'input', function () {
                            F.remClass(this, 'error');
                            F.remClass(self.fieldAddr, 'error');
                        });

                        F.on(self.section, 'click', '.scanqr', function (e) {
                            e = e || event;
                            e.preventDefault();
                            let input = this.closest('.dinput').querySelector('.dinput-field');
                            F.remClass(input, 'error');
                            UI.qrscan({
                                scan: function (code) {
                                    let parse = code.match(/(?:\w+:)?(\w+)(?:\?.*)?/i);
                                    input.value = parse[1];
                                    if (input == self.fieldAddr) {
                                    }
                                    input.blur();
                                    this.close();
                                }
                            });
                        })
                        F.on(self.section, 'click', '.close', function (e) {
                            e = e || event;
                            e.preventDefault();
                            let input = this.closest('.dinput').querySelector('.dinput-field');
                            input.value = '';
                            input.focus();
                            if (input == self.fieldAddr) {
                            }
                        })

                        UI.button('payout_btn').click(function (btn) {
                            if (!self.fieldAddr.value) {
                                btn.error();
                                F.addClass(self.fieldAddr, 'error');
                                return;
                            }
                            APP.api('userPayoutCreate', {address: self.fieldAddr.value})
                                .then(function (msg) {
                                    btn.success();
                                    F.id('payout-est-balance').innerHTML = msg.data;
                                    ui_orders.reload();
                                    btn.obj.disabled = true;
                                })
                                .catch(function (msg) {
                                    btn.error();
                                    F.addClass(self.fieldAddr, 'error');
                                    self.errorAddr.innerHTML = msg.msg;
                                });
                        });
                    }
                };

                Payout.init();
            })
        </script>
    @endpush
</x-app-layout>
