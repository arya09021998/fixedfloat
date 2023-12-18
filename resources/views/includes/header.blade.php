<header id="header" @class(['fixed' => !(!request()->routeIs('*.home') || !request()->routeIs('*.order')) ,'ontop'=> request()->routeIs('*.order')])>
    <div class="wrapper">
        <div class="left-menu-wrap" id="left_menu_wrap">
            <div id="left_menu_btn">
                <div><span></span><span></span><span></span></div>
            </div>
            <nav class="left-menu" id="left_menu">
                <section>
                    <ul id="left_menu_content" class="menu linkhl">
                        <li class="menu-head"><span>{{__('Account')}}</span></li>
                        @guest
                            <li><a href="/user/signin">{{__('Sign in')}}</a></li>
                            <li><a href="/user/signup">{{__('Sign up')}}</a></li>
                        @else
                            <li><a href="/user/profile"><i class="ico profile"></i><span>{{__('Personal data')}}</span></a>
                            </li>
                            <li><a href="/user/orders"><i class="ico history"></i><span>{{__('Orders history')}}</span></a>
                            </li>
                            <li><a href="/user/addressbook"><i
                                            class="ico addressbook"></i><span>{{__('Address book')}}</span></a></li>
                            <li><a href="/user/affiliate"><i
                                            class="ico affiliate"></i><span>{{__('Affiliate program')}}</span></a></li>
                            <li><a href="/user/payouts"><i class="ico payout"></i><span>{{__('Payouts')}}</span></a>
                            </li>
                            <li><a href="/user/apikey"><i
                                            class="ico apikey"></i><span>{{__('API management')}}</span></a></li>
                            <li><a href="/user/signout" class="signout" data-confirm="{{__('Are you sure?')}}"><i
                                            class="ico signout"></i><span>{{__('Sign out')}}</span></a></li>
                        @endguest

                        <li class="menu-head"><span>{{setting('app_name',config('app.name'))}}</span></li>
                        <li><a href="/about">{{__('About')}}</a></li>
                        <li><a href="/faq">{{__('FAQ')}}</a></li>
                        <li><a href="/support">{{__('Support')}}</a></li>
                        <li><a href="/affiliate">{{__('Affiliate program')}}</a></li>
                        <li class="menu-head"><span>{{__('Rules')}}</span></li>
                        <li><a href="/terms">{{__('Terms of Service')}}</a></li>
                        <li><a href="/privacy-policy">{{__('Privacy Policy')}}</a></li>
                    </ul>
                </section>
            </nav>
        </div>
        <nav>
            <a href="{{url('/')}}" id="logo" class="logo darkbg">
                <span class="logo-text-fixed" id="logo_text_from" data-value="ETH"></span>
                <div class="ico"><span class="logo-arrow-from" id="logo_arrow_from"
                                       data-value="ETH"></span><span class="logo-arrow-to"
                                                                     id="logo_arrow_to"
                                                                     data-value="BTC"></span></div>
                <span class="logo-text-float" id="logo_text_to" data-value="BTC"></span>
            </a>
            <div class="nav-right">
                <ul class="nav menu hoverhl">
                    <li><a href="/about">{{__('About')}}</a></li>
                    <li><a href="/faq">{{__('FAQ')}}</a></li>
                    <li><a href="/support">{{__('Support')}}</a></li>
                </ul>
                <div class="loc hoverhl">
                    <a class="menu-focus-btn" tabindex="0">
                        <div class="ui-select-value"><i class="loc-img loc-{{app()->getLocale()}}"></i>
                        </div>
                    </a>
                    <div class="menu-focus-opened">
                        <ul class="hoverhl" id="loc_menu_wrap">
                            @foreach(config('app.available_locales') as $key => $locale)
                                @php($langUrl = ltrim(str_replace('//','/',str_replace(app()->getLocale(),'',$locale.'/'.request()->path())),'/'))
                                <li>
                                    <a href="{{url("/$langUrl")}}"><i
                                                class="loc-img loc-{{$locale}}"></i><span>{{$key}}</span></a>
                                </li>
                            @endforeach
                        </ul>
                    </div>
                    <div class="shadow-body" tabindex="0"></div>
                </div>
                <div class="nav userbar hoverhl">
                    @guest
                        <a id="header_signin" class="btn-text" href="/user/signin">{{__('Sign in')}}</a>
                        <a id="header_signup" class="btn" href="/user/signup">{{__('Sign up')}}</a>
                    @else
                        <a class="menu-focus-btn" tabindex="0">{{__('Account')}}</a>
                        <ul class="menu-focus-opened hoverhl">
                            <li><a href="/user/profile"><i class="ico profile"></i><span>{{__('Personal data')}}</span></a>
                            </li>
                            <li><a href="/user/orders"><i class="ico history"></i><span>{{__('Orders history')}}</span></a>
                            </li>
                            <li><a href="/user/addressbook"><i
                                            class="ico addressbook"></i><span>{{__('Address book')}}</span></a></li>
                            <li><a href="/user/affiliate"><i
                                            class="ico affiliate"></i><span>{{__('Affiliate program')}}</span></a></li>
                            <li><a href="/user/payouts"><i class="ico payout"></i><span>{{__('Payouts')}}</span></a>
                            </li>
                            <li><a href="/user/apikey"><i
                                            class="ico apikey"></i><span>{{__('API management')}}</span></a></li>
                            <li><a href="/user/signout" class="signout" data-confirm="{{__('Are you sure?')}}"><i
                                            class="ico signout"></i><span>{{__('Sign out')}}</span></a></li>
                        </ul>
                    @endguest
                </div>
            </div>
        </nav>
        <div class="shadow-body"></div>
    </div>
</header>
