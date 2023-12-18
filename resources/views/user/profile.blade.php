<x-app-layout>
    @include('includes.header')
    <main>
        <div class="wrapper user-section">
            <aside class="stickybar">
                <ul class="sidemenu">
                    <li><a href="/user/profile" class="active"><i
                                    class="ico profile"></i><span>{{__('Personal data')}}</span></a>
                    </li>
                    <li><a href="/user/orders"><i class="ico history"></i><span>{{__('Orders history')}}</span></a></li>
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
                <h2>{{__('Account info')}}</h2>
                <section class="profile-block-main" id="account_info">
                    <header>
                        <div><b>{{__('Registration date')}}:</b> <span><time
                                        timestamp="{{$user->created_at->timestamp}}">{{$user->created_at->toDayDateTimeString()}}</time></span>
                        </div>
                        <div><b>{{__('Last visit')}}:</b> <span><time class="fromago"
                                                                      timestamp="{{$user->last_active_at->timestamp}}">{{$user->last_active_at->diffForHumans()}} ({{$user->last_active_at->toDayDateTimeString()}})</time></span>
                        </div>
                    </header>
                    <div class="profile-block-content">
                        <div class="profile-block-table">
                            <div class="profile-block-table-ln">
                                <div class="label">{{__('Email')}}</div>
                                <div class="data"><span>{{$user->email}}</span></div>
                                <div class="func">
                                    <button type="button" class="btn mini" id="change_email">{{__('Edit')}}</button>
                                </div>
                            </div>
                            <div class="profile-block-table-ln">
                                <div class="label">{{__('Password')}}</div>
                                <div class="data">*********</div>
                                <div class="func">
                                    <button type="button" class="btn mini" id="change_pswd">{{__('Edit')}}</button>
                                </div>
                            </div>
                            <div class="profile-block-table-ln">
                                <div class="label">{{__('Notifications')}}</div>
                                <div class="data" style="padding-top: 0.7em;">
                                    <label class="switch"><input id="switch_notification" name="notifications_email"
                                                                 type="checkbox" @checked($user->notify)><i></i><span>{{__('Receive email notifications about order status changes')}}</span></label>
                                    <p class="profile-block-sw-desc switchoff-alert">{{__('If this option is disabled, you will not receive emails when creating an order and changing the status of an order containing detailed information about the entered data.')}}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- <div class="head-line">
                    <h2>Address book</h2>
                    <button class="btn mini border right" type="button">Add address</button>
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
                                            <td class="min"><div class="mh">Date<span class="ico"></span></div></td>
                                            <td class="min"><div class="mh">Network<span class="ico"></span></div></td>
                                            <td class="min"><div class="mh">Coin<span class="ico"></span></div></td>
                                            <td class=""><div class="mh">Address<span class="ico"></span></div></td>
                                            <td class="min"><div class="mh"></div></td>
                                        </tr>
                                    </thead>
                                    <tbody></tbody>
                                </table>
                                <table class="ztp-template none">
                                    <tbody>
                                        <tr class="ztp-tmpl" id="addressbook_tmpl">
                                            <td><div class="ztp-c mh" data-type="date_fav">{reg_d}</div></td>
                                            <td><div class="ztp-c mh" data-type="network"><span class="ib-middle coin-img svgcoin {network_min}"></span> <span class="ib-middle">{network}</span></div></td>
                                            <td><div class="ztp-c mh" data-type="coin">{^universal}<span class="ib-middle coin-img svgcoin {coin_min}"></span> <span class="ib-middle">{coin}</span>{\universal}{#universal}<span class="universal">Universal</span>{\universal}</div></td>
                                            <td><div class="ztp-c mh" data-type="address"><span class="address">{address}</span>{#tag}<span class="tag">:{tag}</span>{\tag}</div></td>
                                            <td><div class="ztp-c mh" data-type="del"><button class="btn-icon ico delete"></button></td>
                                        </tr>
                                        <tr class="ztp-tmpl" id="addressbook_tmpl_more">
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div class="ztp-bottom clrfix">
                            <div class="ztp-countshow">
                                <span class="ztp-countshow-before">Show</span>
                                <span class="select-wrap">
                                    <select id="addressbook_countshow">
                                        <option selected="">10</option>
                                        <option>25</option>
                                        <option>50</option>
                                        <option>75</option>
                                        <option>100</option>
                                        <option>125</option>
                                        <option>150</option>
                                    </select>
                                    <i class="select-arrow"></i>
                                </span>
                                <span class="ztp-countshow-after">entries</span>
                            </div>
                            <ul class="ztp-paginate clrfix" id="addressbook_pages" data-pages=""></ul>
                        </div>
                    </div>
                </section> -->
            </section>
        </div>
    </main>
    @include('includes.popup_confirm_email')
    @include('includes.popup_change_email')
    @include('includes.popup_change_pswd')
    @include('includes.popup_switch_email_notice_orders')
    @include('includes.tmpl_alert_email_sent')
    @include('includes.tmpl_alert_change_email')
    @push('js')
        <script type="text/javascript" src="{{asset('assets/js/ui/ztable.js')}}"></script>
        <script type="text/javascript">
            document.addEventListener("DOMContentLoaded", function () {
                let F = UI.func;
                moment.locale('{{app()->getLocale()}}');

                convertTime(F.id('account_info').getElementsByTagName('time'));

                function convertTime(times) {
                    for (let i = 0; i < times.length; i++) {
                        let timestamp = +times[i].getAttribute('timestamp');
                        if (timestamp) {
                            let time = moment(moment.unix(timestamp).toDate()).local();
                            let timetext;
                            if (F.hasClass(times[i], 'fromago')) {
                                timetext = time.fromNow() + ' (' + time.format('lll') + ')';
                            } else {
                                timetext = time.format('lll');
                            }
                            times[i].innerHTML = timetext;
                        }
                    }
                }


                // let Table = UI.ztable('addressbook', {
                // 	ajaxFunc: {'load': 'userAddressBookList'},
                // 	onRowInit: function(row) {
                // 		let reg = moment(moment.utc(row.date_reg).toDate()).local();
                // 		row.reg_d = reg.format('L');
                // 		row.reg_t = reg.format('HH:mm');
                // 		row.network_min = row.network.toLowerCase();
                // 		if (row.coin) row.coin_min = row.coin.toLowerCase();
                // 	},
                // });


                let Validator = {
                    email: function (txt) {
                        let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        return re.test(txt);
                    },
                    pswd: function (txt) {
                        return true;
                    },
                    newpswd: function (txt) {
                        let re = /^.*(?=.{6,})(?=.*[a-zA-Z])(?=.*\d).*$/;
                        return re.test(txt);
                    },
                    repswd: function (txt, stxt) {
                        return txt === stxt;
                    },
                }


                F.bind('confirm_email', 'click', function () {
                    let SubmitBtn;
                    UI.popup({
                        html: document.getElementById('popup_confirm_email').innerHTML,
                        afterRender: function () {
                            let popup = this;
                            let Captcha = APP.GeeCaptcha();

                            SubmitBtn = UI.button('confirm_email_submit', {changeAtOnce: false});

                            if (!APP.GeeCaptchaLoaded) {
                                SubmitBtn.loading(SubmitBtn.attr('data-captcha-loading'));
                            }
                            Captcha.onInit(function () {
                                SubmitBtn.default();
                            })
                            Captcha.onClose(function () {
                                SubmitBtn.default();
                            })

                            SubmitBtn.click(function (btn) {
                                btn.loading();

                                Captcha.verify(function () {
                                    let data = this.getValidate() || {};

                                    APP.api('userConfirmEmail', data)
                                        .then(function (msg) {
                                            btn.success();
                                            UI.alert(F.id('tmpl_alert_email_sent').innerHTML);
                                            popup.close();
                                        })
                                        .catch(function (msg) {
                                            btn.error();
                                            Captcha.reset();
                                            if (msg.code == 606) {
                                                UI.alert('Invalid Captcha');
                                            } else {
                                                UI.alert('Internal error');
                                            }
                                        })
                                });
                            });
                        },
                        onSubmit: function (popup, e) {
                            SubmitBtn.click();
                            return false;
                        },
                    }).show();
                })


                F.bind('change_email', 'click', function () {
                    let Ppform = {
                        form: undefined,
                        fields: {
                            pswd: undefined,
                            email: undefined,
                        },
                        btn: undefined,
                        check: function (field, cycle) {
                            let o = this.fields[field];
                            if (!Validator[field](o.val())) {
                                o.error(o.obj.getAttribute('data-error-invalid'));
                                return false;
                            }
                            return true;
                        },
                        validate: function () {
                            let l = this;
                            F.remClass([l.fields.email, l.fields.pswd], 'error');
                            for (let field in l.fields) {
                                let o = l.fields[field];
                                if (!o.val()) {
                                    o.error(o.obj.getAttribute('data-error-empty'));
                                    return false;
                                } else if (!l.check(field, true)) {
                                    return false;
                                }
                            }
                            return true;
                        }
                    };

                    UI.popup({
                        html: document.getElementById('popup_change_email').innerHTML,
                        afterRender: function () {
                            let popup = this;
                            let Captcha = APP.GeeCaptcha();

                            Ppform.form = F.id('change_email_form');
                            Ppform.btn = UI.button('change_email_submit', {changeAtOnce: false});

                            if (!APP.GeeCaptchaLoaded) {
                                Ppform.btn.loading(Ppform.btn.attr('data-captcha-loading'));
                            }
                            Captcha.onInit(function () {
                                Ppform.btn.default();
                            })
                            Captcha.onClose(function () {
                                Ppform.btn.default();
                            })

                            Ppform.fields.pswd = UI.textbox(Ppform.form.pswd, {
                                addLabel: Ppform.form.pswd.getAttribute('data-label'),
                                btnPswd: true,
                                addError: true
                            })
                                .input(function (input) {
                                    F.remClass(input, 'error');
                                })
                                .blur(function (input) {
                                    if (input.value) Ppform.check('pswd');
                                });

                            Ppform.fields.email = UI.textbox(Ppform.form.email, {
                                addLabel: Ppform.form.email.getAttribute('data-label'),
                                btnclear: true,
                                addError: true
                            })
                                .input(function (input) {
                                    F.remClass(input, 'error');
                                })
                                .blur(function (input) {
                                    if (input.value) Ppform.check('email');
                                });

                            Ppform.btn.click(function (btn) {
                                if (Ppform.validate()) {
                                    btn.loading();

                                    Captcha.verify(function () {
                                        let data = this.getValidate() || {};
                                        data.pswd = Ppform.form.pswd.value;
                                        data.email = Ppform.form.email.value;

                                        APP.api('userChangeEmail', data)
                                            .then(function (msg) {
                                                btn.success();
                                                UI.alert(F.fmt(F.id('tmpl_alert_change_email').innerHTML, Ppform.form.email.value));
                                                popup.close();
                                            })
                                            .catch(function (msg) {
                                                btn.error();
                                                Captcha.reset();
                                                if (msg.code == 704) {
                                                    Ppform.fields.pswd.error(Ppform.fields.pswd.obj.getAttribute('data-error-invalid'))
                                                } else if (msg.code == 701) {
                                                    Ppform.fields.email.error(Ppform.fields.email.obj.getAttribute('data-error-exists'))
                                                } else if (msg.code == 606) {
                                                    UI.alert('Invalid Captcha');
                                                } else if (msg.code == 501) {
                                                    window.location.reload();
                                                } else {
                                                    UI.alert('Internal error');
                                                }
                                            })
                                    });
                                }
                            });
                        },
                        onSubmit: function (popup, e) {
                            Ppform.btn.click();
                            return false;
                        },
                    }).show();
                })


                F.bind('change_pswd', 'click', function () {
                    let Ppform = {
                        form: undefined,
                        fields: {
                            pswd: undefined,
                            newpswd: undefined,
                            repswd: undefined,
                        },
                        btn: undefined,
                        check: function (field, cycle) {
                            let o = this.fields[field];
                            if (!cycle && field == 'newpswd' && this.fields.newpswd.val() && this.fields.repswd.val()) {
                                F.remClass(this.fields.repswd.obj, 'error');
                                return this.check('repswd');
                            }
                            if (!Validator[field](o.val(), this.fields.newpswd.val())) {
                                o.error(o.obj.getAttribute('data-error-invalid'));
                                return false;
                            }
                            return true;
                        },
                        validate: function () {
                            let l = this;
                            F.remClass([l.fields.pswd, l.fields.newpswd, l.fields.repswd], 'error');
                            for (let field in l.fields) {
                                let o = l.fields[field];
                                if (!o.val()) {
                                    o.error(o.obj.getAttribute('data-error-empty'));
                                    return false;
                                } else if (!l.check(field, true)) {
                                    return false;
                                }
                            }
                            return true;
                        }
                    };

                    UI.popup({
                        html: document.getElementById('popup_change_pswd').innerHTML,
                        afterRender: function () {
                            let popup = this;

                            Ppform.form = F.id('change_pswd_form');
                            Ppform.btn = UI.button('change_pswd_submit', {changeAtOnce: false});

                            Ppform.fields.pswd = UI.textbox(Ppform.form.pswd, {
                                addLabel: Ppform.form.pswd.getAttribute('data-label'),
                                btnPswd: true,
                                addError: true
                            })
                                .input(function (input) {
                                    F.remClass(input, 'error');
                                })
                                .blur(function (input) {
                                    if (input.value) Ppform.check('pswd');
                                });

                            Ppform.fields.newpswd = UI.textbox(Ppform.form.newpswd, {
                                addLabel: Ppform.form.newpswd.getAttribute('data-label'),
                                btnPswd: true,
                                addError: true
                            })
                                .input(function (input) {
                                    F.remClass(input, 'error');
                                })
                                .blur(function (input) {
                                    if (input.value) Ppform.check('newpswd');
                                });

                            Ppform.fields.repswd = UI.textbox(Ppform.form.repswd, {
                                addLabel: Ppform.form.repswd.getAttribute('data-label'),
                                btnPswd: true,
                                addError: true
                            })
                                .input(function (input) {
                                    F.remClass(input, 'error');
                                })
                                .blur(function (input) {
                                    if (input.value) Ppform.check('repswd');
                                });


                            Ppform.btn.click(function (btn, e) {
                                e.preventDefault();
                                if (Ppform.validate()) {
                                    btn.loading();
                                    let data = {
                                        pswd: Ppform.form.pswd.value,
                                        newpswd: Ppform.form.newpswd.value,
                                    };

                                    APP.api('userChangePswd', data)
                                        .then(function (msg) {
                                            btn.success();
                                            UI.alert('{{__('Password has been changed')}}<br>{{__('Login with new data')}}', function () {
                                                window.location.reload();
                                            })
                                            popup.close();
                                        })
                                        .catch(function (msg) {
                                            btn.error();
                                            if (msg.code == 704) {
                                                Ppform.fields.pswd.error(Ppform.fields.pswd.obj.getAttribute('data-error-invalid'))
                                            } else if (msg.code == 501) {
                                                window.location.reload();
                                            } else {
                                                UI.alert('Internal error');
                                            }
                                        })
                                }
                            });


                        },
                        onSubmit: function (popup, e) {
                            Ppform.btn.click();
                            return false;
                        },
                    }).show();
                })


                let SNForm = {
                    changed: false,
                    requestSwitchNotification: function (enabled, popup) {
                        let self = this;
                        APP.api('userSwitchEmailNoticeOrders', {enabled: enabled})
                            .then(function () {
                                if (popup) popup.close();
                            })
                            .catch(function () {
                                UI.alert('Internal error');
                            })
                    }

                }
                F.bind('switch_notification', 'change', function () {
                    let inp = this;
                    let enabled = inp.checked;
                    SNForm.changed = false;

                    if (!enabled) {
                        UI.popup({
                            html: F.id('popup_switch_email_notice_orders').innerHTML,
                            onSubmit: function (popup) {
                                SNForm.changed = true;
                                SNForm.requestSwitchNotification(enabled, popup);
                                return false;
                            },
                            afterClose: function () {
                                if (!SNForm.changed) {
                                    inp.checked = !inp.checked;
                                }
                            }
                        }).show();

                    } else {
                        SNForm.requestSwitchNotification(enabled);
                    }
                })


            })
        </script>
    @endpush
</x-app-layout>
