<footer>
    <div class="wrapper">
        <div class="foot-wrap">
            <div class="foot-outro">
                <a href="/" id="foot_logo" class="logo">
                    <span class="logo-text-fixed"></span>
                    <div class="ico"><span class="logo-arrow-from"></span><span class="logo-arrow-to hl"></span></div>
                    <span class="logo-text-float hl"></span>
                </a>
                @if(setting('show_share_buttons') == 1)
                    <div class="foot-soc">
                        @if($twitterUrl = setting('twitter_url'))
                            <a rel="noopener noreferrer" target="_blank" class="ico s_tw hoverhl" title="Twitter"
                               href="{{$twitterUrl}}"></a>
                        @endif
                        @if($instagramUrl = setting('instagram_url'))
                            <a rel="noopener noreferrer" target="_blank" class="ico s_instagram hoverhl"
                               title="instagram.com"
                               href="{{$instagramUrl}}"></a>
                        @endif
                        @if($telegramUrl = setting('telegram_url'))
                            <a rel="noopener noreferrer" target="_blank" class="ico s_tg hoverhl" title="Telegram"
                               href="{{$telegramUrl}}"></a>
                        @endif
                        @if($redditUrl = setting('reddit_url'))
                            <a rel="noopener noreferrer" target="_blank" class="ico s_reddit hoverhl" title="Reddit"
                               href="{{$redditUrl}}"></a>
                        @endif
                        @if($mediumUrl = setting('medium_url'))
                            <a rel="noopener noreferrer" target="_blank" class="ico s_medium hoverhl" title="medium.com"
                               href="{{$mediumUrl}}"></a>
                        @endif
                        @if($bestchangeUrl = setting('bestchange_url'))
                            <a rel="noopener noreferrer" target="_blank" class="ico s_bestchange hoverhl"
                               title="bestchange.com"
                               href="{{$bestchangeUrl}}"></a>
                        @endif
                        @if($trustpilotUrl = setting('trustpilot_url'))
                            <a rel="noopener noreferrer" target="_blank" class="ico s_trustpilot hoverhl"
                               title="trustpilot.com"
                               href="{{$trustpilotUrl}}"></a>
                        @endif
                    </div>
                @endif
                <div class="copyright">©&nbsp;2018–{{date('Y')}}
                    &nbsp;<span>{{setting('app_name',config('app.name'))}}</span>.&nbsp;{{__('All rights reserved')}}.
                </div>
            </div>
            <div class="foot-menu linkhl">
                <div class="col">
                    <h4>{{setting('app_name',config('app.name'))}}</h4>
                    <ul>
                        <li><a href="/about">{{__('About')}}</a></li>
                        <li><a href="/affiliate">{{__('Affiliate program')}}</a></li>
                        <li><a href="/terms">{{__('Terms of Service')}}</a></li>
                        <li><a href="/privacy-policy">{{__('Privacy Policy')}}</a></li>
                    </ul>
                </div>
                <div class="col">
                    <h4>{{__('Support')}}</h4>
                    <ul>
                        <li><a href="/faq">{{__('FAQ')}}</a></li>
                        <li><a href="/support">{{__('Support')}}</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</footer>
