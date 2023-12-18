<x-app-layout>
    @push('css')
        <link href="{{asset('assets/css/v2/order.min.css')}}" rel="stylesheet"/>

        <style id="highlighting_style">a, .hl, .hoverhl:hover, .linkhl a:hover {
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
            }</style>
    @endpush
    @includeWhen(!auth()->check(),'includes.auth')
    <main>
        <section id="index_main" class="main-section withheader darkbg">

            @include('includes.header')
            <div class="wrapper">
                <section class="order-outer">
                    <div class="order-body">
                        <section class="order-direction clrfix">
                            <div class="dir-from">
                                <div class="dir-cont" data-value="USDT">
                                    <div class="coin-ico svgcoin usdt"></div>
                                    <div class="coin-head">Вы отправляете</div>
                                    <div class="coin-value" id="order_send_value">50.000 USDT<sup>ETH</sup></div>
                                    <div class="coin-address" title="0xa107443c3dc6d4e52707cecb631962b959b44ed5">
                                        0xa107443c3dc6d4e52707cecb631962b959b44ed5
                                    </div>
                                </div>
                            </div>
                            <div class="dir-arrow">
                                <div class="ico arrow"></div>
                            </div>
                            <div class="dir-to">
                                <div class="dir-cont" data-value="BTC">
                                    <div class="coin-ico svgcoin btc"></div>
                                    <div class="coin-head">Вы получаете</div>
                                    <div class="coin-value" id="order_receive_value">0.00023477 BTC</div>
                                    <div class="coin-address"
                                         title="bc1pfd0ykr7nv8rm6dsm5s6mlfyku2ahnxsg02jcgrtwq4awawlsjzmseulamn">
                                        bc1pfd0ykr7nv8rm6d…q4awawlsjzmseulamn
                                    </div>
                                </div>
                            </div>
                        </section>
                        <div class="order-wrap-shadow">
                            <section class="order-action expired" id="order_action">
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
                                                    <label for="qr_type0"><span>Адрес</span></label>
                                                @endif
                                                @if($order->qrSum)
                                                    <label for="qr_type1"><span>С суммой</span></label>
                                                @endif
                                            </div>
                                        </div>
                                    </div>
                                    <section class="order-head-info" id="order_info">
                                        <div class="order-head-info-inner" id="order_info_inner">
                                            <div class="order-id-wrap">
                                                <label>Номер заказа</label>
                                                <div><span class="pseudo-hint-blue" data-copy="UPTYUU"
                                                           data-hint="Скопировано"><span
                                                                class="order-id hl">{{$order->num}}</span><i
                                                                class="ico copy"></i></span></div>
                                            </div>
                                            <div class="order-time expired">
                                                <label data-remaining="Времени осталось"
                                                       data-status="Статус заказа"></label>
                                                <div><span id="order_time" class="hl" data-time="16:32"
                                                           data-expired="Заказ истек" data-exchange="Получено"
                                                           data-done="Завершено" data-emergency="Ответ пользователя"
                                                           data-refund="Возвращено"></span></div>
                                            </div>
                                            <div>
                                                <label>Тип курса</label>
                                                <div><span class="order-type">Плавающий</span></div>
                                            </div>
                                            <div>
                                                <label>Время создания</label>
                                                <div>
                                                    <time id="order_time_creation" timestamp="1702908100">18.12.2023
                                                        18:01
                                                    </time>
                                                </div>
                                            </div>
                                            <div class="none">
                                                <label>Время получения</label>
                                                <div>
                                                    <time id="order_time_tx" timestamp="">01.01.1970 4:00</time>
                                                </div>
                                            </div>
                                            <div class="none">
                                                <label>Время выполнения</label>
                                                <div>
                                                    <time id="order_time_competed" timestamp="">01.01.1970 4:00</time>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                    <div class="order-action-details" id="order_details">
                                        <div class="order-data-details">
                                            <div class="order-p-wrap">
                                                <p class="order-p-amount">Отправьте <b
                                                            class="order-amount pseudo-hint-blue"
                                                            data-hint="Скопировано" data-copy="50" data-value="USDT">50
                                                        USDT<sup>ETH</sup></b> на адрес</p>
                                                <p class="order-p-address"><span class="order-address-wrap"><b
                                                                class="order-address order-address-from pseudo-hint-blue"
                                                                data-copy="0xa107443c3dc6d4e52707cecb631962b959b44ed5"
                                                                data-hint="Скопировано"
                                                                title="0xa107443c3dc6d4e52707cecb631962b959b44ed5"><i>0xa10</i><i>7443</i><i>c3dc</i><i>6d4e</i><i>5270</i><i>7cec</i><i>b631</i><i>962b</i><i>959b</i><i>44ed5</i><i
                                                                    class="ico copy"></i></b></span></p>
                                            </div>
                                            <p class="order-attention">Курс будет зафиксирован после получения <b>4</b>
                                                подтверждений сети</p>
                                        </div>
                                        <div class="order-data-destination">
                                            <p><label>Адрес получения BTC</label><br><span
                                                        class="order-address-destination">bc1pfd0ykr7nv8rm6dsm5s6mlfyku2ahnxsg02jcgrtwq4awawlsjzmseulamn</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="order-extra-details more none" id="order_details_more"></div>
                            </section>

                            <section class="order-emergency clrfix active" id="section_emergency"><h3>Ждём появления
                                    транзакции в сети блокчейн</h3>
                                <p>
                                    На адрес, указанный в заказе, ещё не поступили средства. Мы осуществим обмен средств
                                    после поступления транзакции и получения необходимого количества подтверждений сети
                                    блокчейн. </p>
                            </section>
                            <section class="order-timeline clrfix" id="section_timeline">
                                <div class="timeline-container">
                                    <ol id="timeline_steps" class="clrfix expired" data-value="btc">
                                        <li id="timeline_new" class="">
                                            <div><span class="ico deposit"></span><label>Ожидаем поступления
                                                    средств</label></div>
                                        </li>
                                        <li id="timeline_pending" class="">
                                            <div><span class="ico pending"></span><label class="foremergency">Ожидаем
                                                    ответ пользователя</label><label>Ожидаем подтверждения сети</label>
                                            </div>
                                        </li>
                                        <li id="timeline_exchange">
                                            <div><span class="ico exchange"></span><label>Выполняем обмен</label></div>
                                        </li>
                                        <li id="timeline_done" class="">
                                            <div><span class="ico complete"></span><label
                                                        class="forrefund">Возвращено</label><label>Обмен
                                                    завершен</label></div>
                                        </li>
                                    </ol>
                                </div>
                            </section>
                            <section class="order-info">
                                <section class="order-info-known">
                                    <h3>Что нужно знать?</h3>
                                    <div class="order-note"><em class="ico speed">­</em><span>Нужно <strong>4</strong> подтверждения USDT для осуществления обмена</span>
                                    </div>
                                    <div class="order-note"><em class="ico coin usdt">­</em><span>Не отправляйте USDT через сторонний контракт! Такие транзакции не обрабатываются автоматически. Мы принимаем транзакции с <a
                                                    href="https://etherscan.io/token/0xdac17f958d2ee523a2206206994597c13d831ec7"
                                                    target="_blank"
                                                    rel="noopener noreferrer">оригинального контракта</a> USDT</span>
                                    </div>
                                    <div class="order-note"><em class="ico warning">­</em><span><span>Пожалуйста, отправляйте транзакцию только в сети Ethereum. Если монеты будут отправлены в другой сети, заказ не будет выполнен автоматически</span></span>
                                    </div>
                                    <div class="order-note"><em class="ico coin btc">­</em><span>Скорость подтверждения транзакции Bitcoin зависит от уровня загруженности сети блокчейн, подробнее в нашей <a
                                                    href="/blog/guides/why-bitcoin-is-not-confirmed">статье</a></span>
                                    </div>
                                    <div class="order-note"><em class="ico recalc">­</em><span>Если сумма отправленной вами транзакции будет отличаться от первоначальной суммы указанной в заказе с плавающим курсом, заказ будет автоматически пересчитан.</span>
                                    </div>
                                    <div class="order-note"><em class="ico hours24">­</em><span>Если ваша транзакция поступит после истечения заказа, но в течение 24 часов, то данная транзакция автоматически отобразится в заказе. Вы сможете самостоятельно продолжить заказ или осуществить возврат средств.</span>
                                    </div>
                                </section>
                                <section class="order-notice clrfix buttonhl">
                                    <div class="active">
                                        <h3>Уведомления о статусе заказа</h3>
                                        <div class="order-notice-changeblock none" id="notice_tosubscribe">
                                            <p>Введите свой email, если хотите получать уведомления об изменении статуса
                                                этого заказа.</p>
                                            <div class="input-texttype with-clrbtn empty"><input id="notice_email_input"
                                                                                                 required="" type="text"
                                                                                                 value=""
                                                                                                 data-label="Email"
                                                                                                 data-error-empty="Это обязательное поле"
                                                                                                 data-error-invalid="Введенный адрес не является Email адресом">
                                                <div class="ico input-texttype-clr"></div>
                                                <label>Email</label>
                                                <div class="input-texttype-error"><i class="ico"></i></div>
                                                <div class="input-texttype-errortxt"></div>
                                            </div>
                                            <button id="notice_submit" class="btn">Отправить</button>
                                        </div>
                                        <div class="order-notice-changeblock" id="notice_subscribed">
                                            <p>Вы подписались на уведомления по изменениям статуса вашего заказа, письмо
                                                было отправлено на вашу почту <b id="notice_email">narek-21@mail.ru</b>
                                            </p>
                                            <a href="#" class="order-notice-wrong hoverhl" id="notice_wrong">Я хочу
                                                изменить email для получения уведомлений</a>
                                        </div>
                                        <span class="order-notice-image"></span>
                                    </div>
                                </section>
                            </section>
                        </div>
                    </div>
                </section>
                <template id="popup_email_notification">
                    <div class="popup-content popup-order-email">
                        <form id="popup_email_notification_form">
                            <h3>Email уведомления о статусе заказа</h3>
                            <p>Введите свой действующий email для получения уведомления об изменении статуса этого
                                заказа. <b>Любые изменения</b> данных заказа возможны только через <b>подтверждение с
                                    email</b> указанного в заказе.</p>
                            <div class="popup-order-email-wrap">
                                <div class="popup-order-email-control">
                                    <input name="email" required="" data-label="Email"
                                           data-error-empty="Это обязательное поле"
                                           data-error-invalid="Введенный адрес не является Email адресом">
                                    <label class="checkbox-tick"><input type="checkbox" name="nomore"> <span>Я больше не хочу видеть это уведомление</span></label>
                                    <div class="popup-api-gen-btn">
                                        <button type="button" id="popup_email_notification_submit" class="btn">
                                            Подтвердить
                                        </button>
                                        <button type="button" id="popup_email_notification_close"
                                                class="btn border cancel">Отказаться
                                        </button>
                                    </div>
                                </div>
                                <div class="order-notice-image"></div>
                            </div>
                        </form>
                    </div>
                </template>

            </div>
        </section>
    </main>
    @push('js')
        <script type="text/javascript" src="{{asset('assets/js/v2/order.js')}}"></script>
        <script type="text/javascript">
            const order = @json($order);
            console.log(order);
            document.addEventListener("DOMContentLoaded", function () {
                moment.locale('{{app()->getLocale()}}');
                APP.highlightingColor('{{$order->fromCcy}}', '{{$order->toCcy}}');
                let F = UI.func;
                let orderData = {
                    id: order.num,
                    email: 'narek-21@mail.ru',
                    isAuth: !!parseInt('{{auth()->check()}}'),
                    timeStart: 3,
                    timeLeft: 1797,
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
                    status: 'NEW',
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
