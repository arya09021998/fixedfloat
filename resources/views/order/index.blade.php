<x-app-layout>
    @push('css')
        <link href="{{asset('assets/css/v2/order.min.css')}}" rel="stylesheet"/>
    @endpush
    @section('highlighting_style')
        <style id="highlighting_style">
            a, .hl, .hoverhl:hover, .linkhl a:hover {
                color: #f7931a;
            }

            .borderhl {
                border-color: #f7931a;
            }

            .hlfill {
                fill: #f7931a;
            }

            .bghl, .buttonhl button:hover {
                background-color: #f7931a;
            }
        </style>
    @endsection
    @includeWhen(!auth()->check(),'includes.auth')
    <main>
        <section id="index_main" class="main-section withheader darkbg">
            @include('includes.header')
            <div class="wrapper">
                <section class="order-outer">
                    <div class="order-body">
                        <section class="order-direction clrfix">
                            <div class="dir-from">
                                <div class="dir-cont" data-value="{{$order->fromCcy}}">
                                    <div class="coin-ico svgcoin {{strtolower($order->fromCcy)}}"></div>
                                    <div class="coin-head">{{__('You send')}}</div>
                                    <div class="coin-value"
                                         id="order_send_value">{{$order->fromQty}} {{$order->fromCcy}}</div>
                                    <div class="coin-address" title="{{$order->fromAddress}}">
                                        {{$order->fromAddress}}
                                    </div>
                                </div>
                            </div>
                            <div class="dir-arrow">
                                <div class="ico arrow"></div>
                            </div>
                            <div class="dir-to">
                                <div class="dir-cont" data-value="{{$order->toCcy}}">
                                    <div class="coin-ico svgcoin {{strtolower($order->toCcy)}}"></div>
                                    <div class="coin-head">{{__('You receive')}}</div>
                                    <div class="coin-value"
                                         id="order_receive_value">{{$order->toQty}} {{$order->toCcy}}</div>
                                    <div class="coin-address"
                                         title="{{$order->toAddress}}">
                                        {{$order->toAddress}}
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div class="order-wrap-shadow">
                            <section class="order-action new" id="order_action">
                                <div class="order-action-body buttonhl">
                                    <div class="order-qr-wrap" id="order_qr">
                                        <div class="order-qr">
                                            @if($order->qrAddress)
                                                <input type="radio" id="qr_type0" name="qr_switcher" checked="">
                                                <div class="order-qrcode" href="#"><img
                                                        src="{{$order->qrAddress}}"
                                                        alt=""></div>
                                            @endif
                                            @if($order->qrSum)
                                                <input @checked(!$order->qrAddress) type="radio" id="qr_type1"
                                                       name="qr_switcher">
                                                <div class="order-qrcode" href="#"><img
                                                        src="{{$order->qrSum}}"
                                                        alt=""></div>
                                            @endif
                                            <div class="qr-switcher"
                                                 data-count="{{count(array_filter([$order->qrAddress,$order->qrSum]))}}">
                                                @if($order->qrAddress)
                                                    <label for="qr_type0"><span>{{__('Address')}}</span></label>
                                                @endif
                                                @if($order->qrSum)
                                                    <label for="qr_type1"><span>{{__('With amount')}}</span></label>
                                                @endif
                                            </div>
                                        </div>
                                    </div>
                                    <section class="order-head-info" id="order_info">
                                        <div class="order-head-info-inner" id="order_info_inner">
                                            <div class="order-id-wrap">
                                                <label>{{__('Order ID')}}</label>
                                                <div><span class="pseudo-hint-blue" data-copy="{{$order->num}}"
                                                           data-hint="Copied"><span
                                                            class="order-id hl">{{$order->num}}</span><i
                                                            class="ico copy"></i></span></div>
                                            </div>
                                            <div class="order-time {{$order->status}}">
                                                <label data-remaining="{{__('Time remaining')}}"
                                                       data-status="{{__('Order status')}}"></label>
                                                <div><span id="order_time" class="hl"
                                                           data-time="{{$order->dateTime}}"
                                                           data-expired="{{__('Order expired')}}"
                                                           data-exchange="{{__('Received')}}"
                                                           data-done="{{__('Completed')}}"
                                                           data-emergency="{{__('User response')}}"
                                                           data-refund="{{__('Refunded')}}"></span></div>
                                            </div>
                                            <div>
                                                <label>{{__('Order type')}}</label>
                                                <div><span class="order-type">{{__(ucfirst($order->type))}}</span></div>
                                            </div>
                                            <div>
                                                <label>{{__('Creation Time')}}</label>
                                                <div>
                                                    <time id="order_time_creation"
                                                          timestamp="{{$order->created_at->timestamp}}">
                                                        {{$order->created_at->format('d/m/Y g:i A')}}
                                                    </time>
                                                </div>
                                            </div>
                                            <div class="none">
                                                <label>{{__('Received Time')}}</label>
                                                <div>
                                                    <time id="order_time_tx" timestamp="">01/01/1970 4:00 AM</time>
                                                </div>
                                            </div>
                                            <div class="none">
                                                <label>{{__('Completed Time')}}</label>
                                                <div>
                                                    <time id="order_time_competed" timestamp="">01/01/1970 4:00 AM
                                                    </time>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <div class="order-action-details" id="order_details">

                                        <div class="order-data-details">
                                            <div class="order-p-wrap">
                                                <p class="order-p-amount">{{__('Send')}} <b
                                                        class="order-amount pseudo-hint-blue"
                                                        data-hint="Copied"
                                                        data-copy="{{$order->fromQty}}"
                                                        data-value="{{$order->fromCcy}}">{{$order->fromQty}} {{$order->fromCcy}}</b>
                                                    {{__('to the address')}}:</p>
                                                <p class="order-p-address"><span class="order-address-wrap"><b
                                                            class="order-address order-address-from pseudo-hint-blue"
                                                            data-copy="{{$order->fromAddress}}"
                                                            data-hint="{{__('Copied')}}"
                                                            title="{{$order->fromAddress}}"><i>{{$order->fromAddress}}</i><i
                                                                class="ico copy"></i></b></span></p>
                                            </div>
                                            <p class="order-attention">{!! __('The exchange rate will be fixed after receiving <b>3</b> network confirmations.') !!}</p>
                                        </div>
                                        <div class="order-data-destination">
                                            <p><label>{{__('Receiving address')}} {{$order->toCcy}}</label><br><span
                                                    class="order-address-destination">{{$order->toAddress}}</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="order-extra-details more none" id="order_details_more">
                                </div>
                            </section>
                            <section
                                class="order-emergency clrfix @if($order->status === \App\Enums\StatusEnum::EXPIRED->value) active @endif"
                                id="section_emergency">
                                <h3>{{__('I sent funds for exchange, but my order has expired. What should I do?')}}</h3>
                                <p>{{__('We have not received your transaction yet, but you can choose what to do if funds arrive at this address within 24 hours. Pick one of the following:')}}</p>
                                <div class="order-emergency-actions">
                                    <label class="radio-circle"><input type="radio" name="order_refund"
                                                                       value="{{\App\Enums\StatusEnum::EXCHANGE->name}}"><span>{{__('Continue my exchange (at the current market rate)')}}</span></label><br>
                                    <label class="radio-circle"><input type="radio" name="order_refund"
                                                                       value="{{\App\Enums\StatusEnum::REFUND->name}}"><span>{{__('Make a refund of the amount sent for exchange minus the network fee')}}</span></label>
                                </div>
                                <div class="order-emergency-submit active visible-overflow"
                                     id="emergency_submit_section"
                                     data-choice="{{\App\Enums\StatusEnum::EXCHANGE->name}}">
                                    <div class="dinput hidden" id="refund_address_outer">
                                        <textarea class="dinput-field" id="refund_address" required=""
                                                  placeholder="Enter your {{$order->toCcy}} address"
                                                  data-ccy="{{$order->toCcy}}" style="height: 56px;"></textarea>
                                        <span id="refund_address_error"
                                              class="fieldhint error">{{__('Invalid address')}}</span>
                                        <div class="funcbuttons">
                                            <button type="button" class="ico scanqr"
                                                    id="refund_address_scanqr"></button>
                                            <button type="button" class="ico close" id="refund_address_clear"></button>
                                        </div>
                                    </div>
                                    <button class="btn std" id="emergency_submit"
                                            data-exchange="{{__('Continue the exchange')}}"
                                            data-refund="{{__('Make a refund')}}"></button>
                                </div>
                            </section>
                            <section class="order-timeline clrfix" id="section_timeline">
                                <div class="timeline-container">
                                    <ol id="timeline_steps"
                                        @class(['clrfix', 'expired' => $order->status === \App\Enums\StatusEnum::EXPIRED->value]) data-value="{{strtolower($order->toCcy)}}">
                                        <li id="timeline_new" @class(['active' => $order->status === \App\Enums\StatusEnum::NEW->value])>
                                            <div><span
                                                    class="ico deposit"></span><label>{{__('Awaiting deposit')}}</label>
                                            </div>
                                        </li>
                                        <li id="timeline_pending" @class(['active' => $order->status === \App\Enums\StatusEnum::PENDING->value])>
                                            <div><span class="ico pending"></span><label class="foremergency">
                                                    {{__('Waiting for user response')}}</label><label>{{__('Awaiting confirmations')}}</label>
                                            </div>
                                        </li>
                                        <li id="timeline_exchange" @class(['active' => $order->status === \App\Enums\StatusEnum::EXCHANGE->value])>
                                            <div><span
                                                    class="ico exchange"></span><label>{{__('Perform exchange')}}</label>
                                            </div>
                                        </li>
                                        <li id="timeline_done" @class(['active' => $order->status === \App\Enums\StatusEnum::DONE->value])>
                                            <div><span class="ico complete"></span><label
                                                    class="forrefund">{{__('Refunded')}}</label><label>{{__('Done')}}</label>
                                            </div>
                                        </li>
                                    </ol>
                                </div>
                            </section>
                            <section class="order-info">
                                <section class="order-info-known">
                                    <h3>{{__('What do you need to know?')}}</h3>
                                    <div class="order-note">
                                        <em class="ico speed">­</em><span>{{__('You need <strong>3</strong> confirmations of the :coin blockchain for the exchange',['coin'=>$order->fromCcy])}}</span>
                                    </div>
                                    <div class="order-note"><em
                                            class="ico coin {{strtolower($order->toCcy)}}">­</em><span>{{__('The speed of confirmation of a :coin transaction depends on the level of congestion of the :coin blockchain network',['coin'=>$order->fromCcy])}}</span>
                                    </div>
                                    <div class="order-note"><em
                                            class="ico recalc">­</em><span>{{__('If the amount of the transaction you sent differs from the initial amount specified in the order with a float rate, the order will be automatically recalculated.')}}</span>
                                    </div>
                                    <div class="order-note"><em
                                            class="ico hours24">­</em><span>{{__('If your transaction is received after the expiration of the order, but within 24 hours, then this transaction will be automatically displayed in the order. You will be able to continue the order yourself or make a refund.')}}</span>
                                    </div>
                                </section>
                                <section class="order-notice clrfix buttonhl">
                                    <div class="active">
                                        <h3>{{__('Order status notifications')}}</h3>
                                        <div class="order-notice-changeblock @if($order->email) none @endif "
                                             id="notice_tosubscribe">
                                            <p>{{__('Enter your email if you want to receive notifications about changes in the status of this order')}}</p>
                                            <div class="input-texttype with-clrbtn empty">
                                                <input id="notice_email_input"
                                                       required="" type="text"
                                                       value=""
                                                       data-label="{{__('Email')}}"
                                                       data-error-empty="{{__('This is a required field')}}"
                                                       data-error-invalid="{{__('Email entered is not a valid email')}}">
                                                <div class="ico input-texttype-clr"></div>
                                                <label>{{__('Email')}}</label>
                                                <div class="input-texttype-error"><i class="ico"></i></div>
                                                <div class="input-texttype-errortxt"></div>
                                            </div>
                                            <button id="notice_submit" class="btn">{{__('Confirm')}}</button>
                                        </div>
                                        <div class="order-notice-changeblock @if(!$order->email) none @endif "
                                             id="notice_subscribed">
                                            <p>
                                                {{__('You have subscribed to notifications of changes to this order; a notification has been sent to your email')}}
                                                <b id="notice_email">{{$order->email}}</b>
                                            </p>
                                            <a href="/order/{{$order->num}}#"
                                               class="order-notice-wrong hoverhl" id="notice_wrong">
                                                {{__('I want to change my email for receiving notifications')}}
                                            </a>
                                        </div>
                                        <span class="order-notice-image"></span>
                                    </div>
                                </section>
                            </section>
                        </div>
                    </div>
                </section>
                @if(is_null($order->email))
                    <template id="popup_email_notification">
                        <div class="popup-content popup-order-email">
                            <form id="popup_email_notification_form">
                                <h3>{{__('Email notifications about order status')}}</h3>
                                <p>{!! __('Enter your valid email to receive notification of changes in the status of this order.
                                <b>Any changes</b> to order data are possible only through <b>confirmation from the
                                    email</b> specified in the order.') !!}</p>
                                <div class="popup-order-email-wrap">
                                    <div class="popup-order-email-control">
                                        <input name="email" required="" data-label="Email"
                                               data-error-empty="{{__('This is a required field')}}"
                                               data-error-invalid="{{__('Email entered is not a valid email')}}">
                                        <label class="checkbox-tick"><input type="checkbox" name="nomore">
                                            <span>{{__('I don\'t want to see this notification anymore')}}</span></label>
                                        <div class="popup-api-gen-btn">
                                            <button type="button" id="popup_email_notification_submit"
                                                    class="btn">{{__('Confirm')}}
                                            </button>
                                            <button type="button" id="popup_email_notification_close"
                                                    class="btn border cancel">{{__('Refuse')}}
                                            </button>
                                        </div>
                                    </div>
                                    <div class="order-notice-image"></div>
                                </div>
                            </form>
                        </div>
                    </template>
                @endif
            </div>
        </section>
    </main>
    @push('js')
        <script type="text/javascript" src="{{asset('assets/js/v2/order.js')}}"></script>
        <script type="text/javascript">
            const order = @json($order);

            const secondsInTheFuture = new Date(order.created_at).getTime() / 1000;
            const secondsNow = new Date().getTime() / 1000;
            const difference = Math.round(secondsInTheFuture - secondsNow);

            document.addEventListener("DOMContentLoaded", function () {
                moment.locale('{{app()->getLocale()}}');
                APP.highlightingColor(order.fromCcy, order.toCcy);

                let F = UI.func;
                let orderData = {
                    id: order.num,
                    email: order.email,
                    isAuth: order.user_id !== null,
                    timeStart: 1,
                    timeLeft: difference + 1800,
                    from: {
                        amount: order.fromQty,
                        address: order.fromAddress,
                        confirm: order.fromConfirmation,
                        tx: order.fromTxId,
                        timeBlock: null
                    },
                    to: {
                        amount: order.toQty,
                        address: order.toAddress,
                        confirm: order.toConfirmation,
                        tx: order.toTxId,
                        timeBlock: null
                    },
                    back: {
                        address: '',
                        confirm: null,
                        tx: null,
                        timeBlock: null
                    },
                    status: order.status.toUpperCase(),
                    refundonly: false,
                    emergency: {
                        status: [],
                        choice: 'NONE',
                        repeat: '0',
                        tmpl: F.id('section_emergency').innerHTML
                    },
                };
                let isWidget = false;

                let Notice = {
                    input: F.id('notice_email_input'),
                    btnwrong: F.id('notice_wrong'),
                    switchLayout: function (subscribed) {
                        F.togClass('notice_subscribed', 'none', !subscribed);
                        F.togClass('notice_tosubscribe', 'none', subscribed);
                    },
                    subscribe: function (email) {
                        let self = this;
                        return APP.api('orderSetEmail', {id: orderData.id, email: email}).then(function () {
                            F.id('notice_email').innerHTML = email;
                            self.switchLayout(true);
                        })
                    },
                    init: function () {
                        let self = this;
                        let emailField = UI.textbox(self.input, {
                            addLabel: self.input.getAttribute('data-label'),
                            btnclear: true,
                            addError: true
                        })
                            .input(function (input) {
                                F.remClass(input, 'error');
                            })
                            .focus(function (input) {
                                F.remClass(input, 'error');
                            });

                        F.bind(self.btnwrong, 'click', function (e) {
                            e = e || event;
                            e.preventDefault();
                            self.switchLayout(false);
                            return false;
                        })

                        UI.button('notice_submit').click(function (btn) {
                            if (!self.input.value) {
                                emailField.error(self.input.getAttribute('data-error-empty'))
                                btn.error();
                                return;
                            }

                            Notice.subscribe(self.input.value)
                                .then(function () {
                                    btn.success();
                                })
                                .catch(function (msg) {
                                    btn.error();
                                    if (msg.code == 602) {
                                        emailField.error(self.input.getAttribute('data-error-invalid'))
                                    }
                                })
                        });
                    },
                    popupEmail: async function () {
                        let promise = new Promise(function (resolve, reject) {
                            UI.popup({
                                bgclose: false,
                                html: F.id('popup_email_notification').innerHTML,
                                afterRender: function () {
                                    let popup = this;
                                    let form = F.id('popup_email_notification_form');
                                    let emailField = UI.textbox(form.email, {
                                        addLabel: form.email.getAttribute('data-label'),
                                        btnclear: true,
                                        addError: true
                                    })
                                        .input(function (input) {
                                            F.remClass(input, 'error');
                                        })
                                        .focus(function (input) {
                                            F.remClass(input, 'error');
                                        });

                                    let BtnSubmit = UI.button('popup_email_notification_submit', {});

                                    BtnSubmit.click(function (btn) {
                                        if (!form.email.value) {
                                            emailField.error(form.email.getAttribute('data-error-empty'))
                                            btn.error();
                                            return;
                                        }
                                        Notice.subscribe(form.email.value)
                                            .then(function () {
                                                btn.success();
                                                popup.close();
                                                resolve();
                                            })
                                            .catch(function (msg) {
                                                btn.error();
                                                if (msg.code == 602) {
                                                    emailField.error(form.email.getAttribute('data-error-invalid'))
                                                }
                                            })
                                    });
                                    F.bind('popup_email_notification_close', 'click', function () {
                                        if (form.nomore.checked) {
                                            APP.setCookie('nomoreNoticeOrder', 1, {expires: 2592000});
                                        }
                                        popup.close();
                                        resolve();
                                    });
                                },
                            }).show();
                        });
                        return promise;
                    },
                    warningTag: async function () {
                        let promise = new Promise(function (resolve, reject) {
                            UI.popup({
                                bgclose: false,
                                html: F.id('popup_tag_alert').innerHTML,
                                afterRender: function () {
                                    let popup = this;
                                    let form = F.id('popup_tag_alert_form');

                                    let BtnSubmit = UI.button('popup_tag_alert_submit', {changeAtOnce: false});
                                    let confirms = form.tag_terms_confirm;
                                    let nomore = form.tag_terms_nomore;

                                    F.bind(confirms, 'change', function () {
                                        F.remClass(this.parentNode, 'error');
                                    })

                                    BtnSubmit.click(function (btn) {
                                        let error = false;
                                        for (let i = 0; i < confirms.length; i++) {
                                            if (!confirms[i].checked) {
                                                F.addClass(confirms[i].parentNode, 'error');
                                                error = true;
                                            }
                                        }
                                        if (error) {
                                            // btn.error();
                                            return;
                                        }
                                        if (nomore.checked) {
                                            let data = {
                                                tz: Intl.DateTimeFormat().resolvedOptions().timeZone,
                                                ts: ~~(Date.now() / 1000),
                                                tt: Date()
                                            }
                                            APP.api('userAcceptTermsTag', data);
                                        }
                                        popup.close();
                                        resolve();
                                    });

                                },
                            }).show();
                        });
                        return promise;
                    },
                    showPopups: async function () {
                        if (!isWidget && !orderData.isAuth && !orderData.email && orderData.timeStart < 10 && !APP.getCookie('nomoreNoticeOrder')) {
                            await Notice.popupEmail();
                        }
                        if (F.id('popup_tag_alert') && orderData.timeStart < 10) {
                            await Notice.warningTag();
                        }
                    }
                }


                F.on(document, 'click', '.pseudo-hint-blue[data-copy]', function (e) {
                    e = e || event;
                    e.preventDefault();
                    let obj = this;
                    F.copy(obj.getAttribute('data-copy'));
                    F.addClass(obj, 'copied');
                    setTimeout(function () {
                        F.remClass(obj, 'copied');
                    }, 500);
                })
                F.on(document, 'click', '.copy[data-copy]', function (e) {
                    e = e || event;
                    e.preventDefault();
                    let obj = this;
                    F.copy(obj.getAttribute('data-copy'));
                    F.addClass(obj, 'copied');
                    setTimeout(function () {
                        F.remClass(obj, 'copied');
                    }, 500);
                })

                InitOrder(orderData);
                Notice.init();
                Notice.showPopups();
                // if (!isWidget && !orderData.isAuth && !orderData.email && orderData.timeStart < 10 && !APP.getCookie('nomoreNoticeOrder')) {
                // 	Notice.popupEmail();
                // }
            })
        </script>
    @endpush
</x-app-layout>
