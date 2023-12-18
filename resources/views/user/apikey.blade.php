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
                    <li><a href="/user/payouts"><i class="ico payout"></i><span>{{__('Payouts')}}</span></a>
                    </li>
                    <li><a href="/user/apikey" class="active"><i
                                    class="ico apikey"></i><span>{{__('API management')}}</span></a></li>
                    <li><a href="/user/signout" class="signout" data-confirm="{{__('Are you sure?')}}"><i
                                    class="ico signout"></i><span>{{__('Sign out')}}</span></a>
                    </li>
                </ul>
            </aside>
            <section class="content user-content darkbg">
                <h2>{{__('Generate API Key')}}</h2>
                <section class="user-api-generate">
                    <h4>{{__('Get a API key to use the API')}}</h4>
                    <div class="user-api-generate-btn-wrap">
                        <button class="btn submit" id="user_generate">{{__('Generate')}}</button>
                        <p>{{__('You can only have one API key per account. If you already have another key, it will be blocked.')}}</p>
                    </div>
                </section>
                <h2>{{__('API management')}}</h2>
                @empty($token)
                    <section class="user-api-key" id="apikey_container"
                             data-empty="{{__('No active API keys')}}"></section>
                @else
                    <section class="user-api-key" id="apikey_container">
                        <div class="user-api-block">
                            <div class="user-api-delete">
                                <button class="btn mini border cancel delete"
                                        data-key="{{$token['key']}}">{{__('Delete')}}
                                </button>
                            </div>
                            <div class="user-api-line">
                                <label>{{__('API Key')}}</label>
                                <span>{{$token['key']}}</span>
                            </div>
                            <div class="user-api-line">
                                <label>{{__('API Secret')}}</label>
                                <span>***********************************</span>
                                <p>{{__('If you have lost your API key secret, you need to create a new one - it is impossible to restore it or get it through technical support.')}}</p>
                            </div>
                        </div>
                    </section>
                @endempty
            </section>
        </div>
    </main>
    @include('includes.tmpl_popup_api')
    @include('includes.confirm_delete_apikey')
    @push('js')
        {{--        <script type="text/javascript" src="{{asset('assets/js/ui/ztable.js')}}"></script>--}}
        <script type="text/javascript">
            document.addEventListener("DOMContentLoaded", function () {
                let F = UI.func;

                F.bind('user_generate', 'click', function (e) {
                    e = e || event;
                    e.preventDefault();
                    let isGenerated = false;
                    UI.popup({
                        bgclose: false,
                        html: F.id('tmpl_popup_api').innerHTML,
                        afterRender: function () {
                            let Ikey = F.id('popup_apikey');
                            let Isrt = F.id('popup_apisecret');
                            let timer = -1;
                            let BtnGen = UI.button('popup_generate_api', {changeAtOnce: false});
                            let BtnClose = UI.button('popup_generate_close', {changeAtOnce: false, changeTexts: false});
                            let layouts = document.querySelectorAll('.popup-api-selection');

                            window.BtnClose = BtnClose;

                            let Tkey = UI.textbox(Ikey, {
                                addLabel: Ikey.getAttribute('data-label'),
                                btnCopy: true,
                                readonly: true
                            })
                                .input(function (input) {
                                    input.focus();
                                });

                            let Tsrt = UI.textbox(Isrt, {
                                addLabel: Isrt.getAttribute('data-label'),
                                btnCopy: true,
                                readonly: true
                            })
                                .input(function (input) {
                                    input.focus();
                                });


                            if (!APP.GeeCaptchaLoaded) {
                                BtnGen.loading(BtnGen.attr('data-captcha-loading'));
                            }

                            let Captcha = APP.GeeCaptcha();
                            Captcha.onInit(function () {
                                BtnGen.default();
                            })
                            Captcha.onClose(function () {
                                BtnGen.default();
                            })

                            function getSecret(key, left) {
                                clearTimeout(timer);

                                setTimeout(function () {
                                    let data = {
                                        tz: Intl.DateTimeFormat().resolvedOptions().timeZone,
                                        ts: ~~(Date.now() / 1000),
                                        tt: Date(),
                                        key: key
                                    }
                                    APP.api('apikeyGetSecret', data)
                                        .then(function (msg) {
                                            if (msg.data.key && msg.data.secret) {
                                                clearTimeout(timer);
                                                BtnGen.success();
                                                Tkey.val(msg.data.key);
                                                Tsrt.val(msg.data.secret);
                                                F.remClass(layouts, 'active');
                                                F.addClass('popup_apikey_done', 'active');
                                                BtnClose.success(BtnClose.defaultText);
                                                isGenerated = true;

                                            } else if (msg.data.time || msg.data.time > 0) {
                                                getSecret(key, msg.data.time);

                                            } else {
                                                clearTimeout(timer);
                                                throw 'Internal error';
                                                BtnClose.error(BtnClose.defaultText);
                                            }
                                        })
                                        .catch(function (msg) {
                                            BtnClose.error(BtnClose.defaultText);
                                            UI.alert('Internal error');
                                        })
                                }, left * 1000);

                                let tl = left;
                                timer = setInterval(function () {
                                    tl = tl > 0 ? tl - 1 : 0;
                                    BtnClose.obj.innerHTML = tl;
                                }, 1000);
                            }

                            BtnGen.click(function (btn) {
                                Captcha.verify(function () {
                                    let data = this.getValidate() || {};
                                    data.tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
                                    data.ts = ~~(Date.now() / 1000);
                                    data.tt = Date();

                                    F.remClass('auth_error', 'active');
                                    F.remClass('signin_captcha_error', 'active');

                                    APP.api('apikeyGenerate', data)
                                        .then(function (msg) {
                                            F.addClass(btn.obj, 'none');
                                            BtnClose.loading(msg.data.time);
                                            F.remClass(layouts, 'active');
                                            F.addClass('popup_apikey_wait', 'active');
                                            getSecret(msg.data.key, msg.data.time);
                                        })
                                        .catch(function (msg) {
                                            Captcha.reset();
                                            btn.error();
                                            if (msg && msg.code == 606) {
                                                UI.alert('Invalid Captcha')
                                            }
                                        })
                                })
                            });
                        },
                        afterClose: function () {
                            if (isGenerated) {
                                window.location.reload();
                            }
                        }
                    }).show();
                })

                let apiKeyForm = F.id('apikey_container');
                F.on(apiKeyForm, 'click', 'button.delete', function (e) {
                    let key = this.getAttribute('data-key');
                    let tmpl = F.id('confirm_delete_apikey');

                    UI.confirm(
                        tmpl.innerHTML,
                        function () {
                            APP.api('apikeyDelete', {apikey: key})
                                .then(function (msg) {
                                    apiKeyForm.innerHTML = '';
                                })
                                .catch(function (msg) {
                                    UI.alert('Internal error');
                                })
                        },
                        {ok: tmpl.getAttribute('data-confirm'), cancel: tmpl.getAttribute('data-cancel')}
                    );
                })


                // F.bind(form.delete, 'click', function() {
                // 	let refCode = form.getAttribute('data-code');
                // 	let tmpl = F.id('confirm_delete_apikey');


            })
        </script>
    @endpush
</x-app-layout>
