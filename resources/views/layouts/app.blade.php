<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="UTF-8">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>{{setting('app_name',config('app.name'))}} | {{__('Instant cryptocurrency exchange')}}</title>
    <meta name="description"
          content="Instant automatic aggregator!">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta property="og:image" content="{{asset('/assets/images/public/ogimage.jpg')}}">
    <meta property="og:site_name" content="{{setting('app_name',config('app.name'))}}">
    <meta name="title" content="{{setting('app_name',config('app.name'))}} | Instant automatic aggregator">
    <meta property="og:title" content="{{setting('app_name',config('app.name'))}} | Instant cryptocurrency exchange">
    <meta property="og:description"
          content="Instant automatic aggregator!">
    <link rel="shortcut icon" href="{{asset('/assets/images/favicon.png')}}">
    @foreach(config('app.available_locales') as $key => $locale)
        @php($langUrl = ltrim(str_replace('//','/',str_replace(app()->getLocale(),'',$locale.'/'.request()->path())),'/'))
        <link rel="alternate" hreflang="{{app()->getLocale() !== $locale ? $locale : 'x-default'}}"
              href="{{url("/$langUrl")}}">
    @endforeach
    <link rel="preload" href="{{asset('/assets/fonts/fficons/fficons.woff2')}}" as="font" type="font/woff2" crossorigin>
    <link rel="preload" href="{{asset('/assets/fonts/montserrat/latin/montserrat-v25-latin-300.woff2')}}" as="font"
          type="font/woff2" crossorigin>
    <link rel="preload" href="{{asset('/assets/fonts/montserrat/latin/montserrat-v25-latin-regular.woff2')}}" as="font"
          type="font/woff2" crossorigin>
    <link rel="preload" href="{{asset('/assets/fonts/montserrat/latin/montserrat-v25-latin-500.woff2')}}" as="font"
          type="font/woff2" crossorigin>
    <link rel="preload" href="{{asset('/assets/fonts/montserrat/latin/montserrat-v25-latin-600.woff2')}}" as="font"
          type="font/woff2" crossorigin>
    <link rel="preload" href="{{asset('/assets/fonts/montserrat/latin/montserrat-v25-latin-700.woff2')}}" as="font"
          type="font/woff2" crossorigin>
    <link rel="apple-touch-icon" sizes="57x57" href="{{asset('/assets/images/icons/apple-touch-icon-57x57.png')}}">
    <link rel="apple-touch-icon" sizes="60x60" href="{{asset('/assets/images/icons/apple-touch-icon-60x60.png')}}">
    <link rel="apple-touch-icon" sizes="72x72" href="{{asset('/assets/images/icons/apple-touch-icon-72x72.png')}}">
    <link rel="apple-touch-icon" sizes="76x76" href="{{asset('/assets/images/icons/apple-touch-icon-76x76.png')}}">
    <link rel="apple-touch-icon" sizes="117x117" href="{{asset('/assets/images/icons/apple-touch-icon-117x117.png')}}">
    <link rel="apple-touch-icon" sizes="120x120" href="{{asset('/assets/images/icons/apple-touch-icon-120x120.png')}}">
    <link rel="apple-touch-icon" sizes="144x144" href="{{asset('/assets/images/icons/apple-touch-icon-144x144.png')}}">
    <link rel="apple-touch-icon" sizes="152x152" href="{{asset('/assets/images/icons/apple-touch-icon-152x152.png')}}">
    <link rel="apple-touch-icon" sizes="180x180" href="{{asset('/assets/images/icons/apple-touch-icon-180x180.png')}}">
    <!-- <link rel="preload" as="style" href="{{asset('/assets/css/svg_min.css').'?'.filemtime(public_path('/assets/css/svg_min.css'))}}"> -->
    <!-- <noscript> -->
    <!-- <link rel="stylesheet" type="text/css" href="{{asset('/assets/css/svg_min.css').'?'.filemtime(public_path('/assets/css/svg_min.css'))}}"> -->
    <!-- </noscript> -->
    <link rel="stylesheet" type="text/css" href="{{asset('/assets/css/v2/min_ff.css')}}">
    <script type="text/javascript" src="https://polyfill.io/v3/polyfill.min.js" defer></script>
    <script type="text/javascript" src="{{asset('/assets/js/v2/main.js')}}"></script>
    <script type="text/javascript" src="{{asset('/assets/js/libs/matter.min.js')}}" defer></script>
    <script type="text/javascript" src="{{asset('/assets/js/v2/exchange.js')}}"></script>
    <script type="text/javascript" src="{{asset('/assets/js/libs/moment.min.js')}}" defer></script>
    <script type="text/javascript" src="{{asset('/assets/js/libs/jsqr.js')}}" defer></script>
    <script type="text/javascript" src="{{asset('/assets/js/libs/webln.min.js')}}" defer></script>
    @if($googleAnalyticId = setting('google_analytic_id'))
        <script async src="https://www.googletagmanager.com/gtag/js?id={{$googleAnalyticId}}"></script>
        <script>
            window.dataLayer = window.dataLayer || [];

            function gtag() {
                dataLayer.push(arguments);
            }

            gtag('js', new Date());
            gtag('config', '{{$googleAnalyticId}}');
                @if (setting('google_conversion_id') && setting('google_conversion_label')) {
                gtag('event', 'conversion', {'send_to': '{{setting('google_conversion_id')}}/{{setting('google_conversion_label')}}'});
            @endif
        </script>
    @endif
    <!-- Google Tag Manager -->
    <script>
        (function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start':
                    new Date().getTime(), event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-MSKPF99V');
    </script>
    <!-- End Google Tag Manager -->
    @if(request()->routeIs('*.home'))
        <style type="text/css" id="jssnowflakes">
            .main-bg-snow > .snowflake:nth-child(1) {
                opacity: 0.2197;
                transform: translate3d(62.7314vw, -30px, 0) rotate(0deg) scale(0.8012);
                animation: snowfall-1 17s -8s linear infinite;
            }

            @keyframes snowfall-1 {
                71.6% {
                    transform: translate3d(55.1806vw, 782.6px, 0) rotate(480deg) scale(0.8012);
                }
                to {
                    transform: translate3d(58.956vw, 1093px, 0) rotate(671deg) scale(0.8012);
                }
            }

            .main-bg-snow > .snowflake:nth-child(2) {
                opacity: 0.6817;
                transform: translate3d(15.6765vw, -30px, 0) rotate(0deg) scale(0.4523);
                animation: snowfall-2 16s -6s linear infinite;
            }

            @keyframes snowfall-2 {
                53.800000000000004% {
                    transform: translate3d(13.3984vw, 588px, 0) rotate(236deg) scale(0.4523);
                }
                to {
                    transform: translate3d(14.5375vw, 1093px, 0) rotate(438deg) scale(0.4523);
                }
            }

            .main-bg-snow > .snowflake:nth-child(3) {
                opacity: 0.9087;
                transform: translate3d(57.1581vw, -30px, 0) rotate(0deg) scale(0.5345);
                animation: snowfall-3 27s -6s linear infinite;
            }

            @keyframes snowfall-3 {
                41.8% {
                    transform: translate3d(53.4362vw, 456.9px, 0) rotate(289deg) scale(0.5345);
                }
                to {
                    transform: translate3d(55.2972vw, 1093px, 0) rotate(692deg) scale(0.5345);
                }
            }

            .main-bg-snow > .snowflake:nth-child(4) {
                opacity: 0.4592;
                transform: translate3d(54.2437vw, -30px, 0) rotate(0deg) scale(0.294);
                animation: snowfall-4 30s -21s linear infinite;
            }

            @keyframes snowfall-4 {
                77.3% {
                    transform: translate3d(54.4893vw, 844.9px, 0) rotate(281deg) scale(0.294);
                }
                to {
                    transform: translate3d(54.3665vw, 1093px, 0) rotate(363deg) scale(0.294);
                }
            }

            .main-bg-snow > .snowflake:nth-child(5) {
                opacity: 0.5495;
                transform: translate3d(12vw, -30px, 0) rotate(0deg) scale(0.6789);
                animation: snowfall-5 19s -10s linear infinite;
            }

            @keyframes snowfall-5 {
                46.9% {
                    transform: translate3d(3.1202vw, 512.6px, 0) rotate(-206deg) scale(0.6789);
                }
                to {
                    transform: translate3d(7.5601vw, 1093px, 0) rotate(-439deg) scale(0.6789);
                }
            }

            .main-bg-snow > .snowflake:nth-child(6) {
                opacity: 0.7921;
                transform: translate3d(91.9792vw, -30px, 0) rotate(0deg) scale(0.6869);
                animation: snowfall-6 22s -21s linear infinite;
            }

            @keyframes snowfall-6 {
                69.69999999999999% {
                    transform: translate3d(87.7603vw, 761.8px, 0) rotate(-464deg) scale(0.6869);
                }
                to {
                    transform: translate3d(89.8698vw, 1093px, 0) rotate(-666deg) scale(0.6869);
                }
            }

            .main-bg-snow > .snowflake:nth-child(7) {
                opacity: 0.2043;
                transform: translate3d(70.4662vw, -30px, 0) rotate(0deg) scale(0.4828);
                animation: snowfall-7 14s -14s linear infinite;
            }

            @keyframes snowfall-7 {
                65.7% {
                    transform: translate3d(61.4307vw, 718.1px, 0) rotate(352deg) scale(0.4828);
                }
                to {
                    transform: translate3d(65.9484vw, 1093px, 0) rotate(536deg) scale(0.4828);
                }
            }

            .main-bg-snow > .snowflake:nth-child(8) {
                opacity: 0.8279;
                transform: translate3d(65.6388vw, -30px, 0) rotate(0deg) scale(0.8241);
                animation: snowfall-8 16s -14s linear infinite;
            }

            @keyframes snowfall-8 {
                76.9% {
                    transform: translate3d(62.229vw, 840.5px, 0) rotate(352deg) scale(0.8241);
                }
                to {
                    transform: translate3d(63.9339vw, 1093px, 0) rotate(458deg) scale(0.8241);
                }
            }

            .main-bg-snow > .snowflake:nth-child(9) {
                opacity: 0.8812;
                transform: translate3d(67.9016vw, -30px, 0) rotate(0deg) scale(0.5202);
                animation: snowfall-9 28s -10s linear infinite;
            }

            @keyframes snowfall-9 {
                61.1% {
                    transform: translate3d(72.3785vw, 667.8px, 0) rotate(-366deg) scale(0.5202);
                }
                to {
                    transform: translate3d(70.1401vw, 1093px, 0) rotate(-599deg) scale(0.5202);
                }
            }

            .main-bg-snow > .snowflake:nth-child(10) {
                opacity: 0.8879;
                transform: translate3d(91.9005vw, -30px, 0) rotate(0deg) scale(0.6056);
                animation: snowfall-10 19s -9s linear infinite;
            }

            @keyframes snowfall-10 {
                73.1% {
                    transform: translate3d(97.6992vw, 799px, 0) rotate(293deg) scale(0.6056);
                }
                to {
                    transform: translate3d(94.7998vw, 1093px, 0) rotate(401deg) scale(0.6056);
                }
            }

            .main-bg-snow > .snowflake:nth-child(11) {
                opacity: 0.4484;
                transform: translate3d(99.5949vw, -30px, 0) rotate(0deg) scale(0.393);
                animation: snowfall-11 15s -3s linear infinite;
            }

            @keyframes snowfall-11 {
                48.9% {
                    transform: translate3d(102.1271vw, 534.5px, 0) rotate(-262deg) scale(0.393);
                }
                to {
                    transform: translate3d(100.861vw, 1093px, 0) rotate(-536deg) scale(0.393);
                }
            }

            .main-bg-snow > .snowflake:nth-child(12) {
                opacity: 0.7793;
                transform: translate3d(10.137vw, -30px, 0) rotate(0deg) scale(0.8816);
                animation: snowfall-12 17s -10s linear infinite;
            }

            @keyframes snowfall-12 {
                31.4% {
                    transform: translate3d(8.4536vw, 343.2px, 0) rotate(-149deg) scale(0.8816);
                }
                to {
                    transform: translate3d(9.2953vw, 1093px, 0) rotate(-475deg) scale(0.8816);
                }
            }

            .main-bg-snow > .snowflake:nth-child(13) {
                opacity: 0.5543;
                transform: translate3d(8.9628vw, -30px, 0) rotate(0deg) scale(0.9307);
                animation: snowfall-13 11s -3s linear infinite;
            }

            @keyframes snowfall-13 {
                49.3% {
                    transform: translate3d(-0.2279vw, 538.8px, 0) rotate(228deg) scale(0.9307);
                }
                to {
                    transform: translate3d(4.3675vw, 1093px, 0) rotate(462deg) scale(0.9307);
                }
            }

            .main-bg-snow > .snowflake:nth-child(14) {
                opacity: 0.3386;
                transform: translate3d(66.5453vw, -30px, 0) rotate(0deg) scale(0.5172);
                animation: snowfall-14 25s -2s linear infinite;
            }

            @keyframes snowfall-14 {
                68.2% {
                    transform: translate3d(73.4767vw, 745.4px, 0) rotate(-408deg) scale(0.5172);
                }
                to {
                    transform: translate3d(70.011vw, 1093px, 0) rotate(-598deg) scale(0.5172);
                }
            }

            .main-bg-snow > .snowflake:nth-child(15) {
                opacity: 0.5943;
                transform: translate3d(75.8862vw, -30px, 0) rotate(0deg) scale(0.4625);
                animation: snowfall-15 16s -22s linear infinite;
            }

            @keyframes snowfall-15 {
                33.800000000000004% {
                    transform: translate3d(71.1235vw, 369.4px, 0) rotate(-124deg) scale(0.4625);
                }
                to {
                    transform: translate3d(73.5049vw, 1093px, 0) rotate(-367deg) scale(0.4625);
                }
            }

            .main-bg-snow > .snowflake:nth-child(16) {
                opacity: 0.9814;
                transform: translate3d(1.0005vw, -30px, 0) rotate(0deg) scale(0.673);
                animation: snowfall-16 26s -26s linear infinite;
            }

            @keyframes snowfall-16 {
                58.099999999999994% {
                    transform: translate3d(4.3201vw, 635px, 0) rotate(-357deg) scale(0.673);
                }
                to {
                    transform: translate3d(2.6603vw, 1093px, 0) rotate(-614deg) scale(0.673);
                }
            }

            .main-bg-snow > .snowflake:nth-child(17) {
                opacity: 0.9368;
                transform: translate3d(36.9609vw, -30px, 0) rotate(0deg) scale(0.5698);
                animation: snowfall-17 20s -9s linear infinite;
            }

            @keyframes snowfall-17 {
                58.099999999999994% {
                    transform: translate3d(36.8542vw, 635px, 0) rotate(-299deg) scale(0.5698);
                }
                to {
                    transform: translate3d(36.9076vw, 1093px, 0) rotate(-514deg) scale(0.5698);
                }
            }

            .main-bg-snow > .snowflake:nth-child(18) {
                opacity: 0.5781;
                transform: translate3d(25.2782vw, -30px, 0) rotate(0deg) scale(0.3965);
                animation: snowfall-18 17s -29s linear infinite;
            }

            @keyframes snowfall-18 {
                71% {
                    transform: translate3d(15.7539vw, 776px, 0) rotate(-395deg) scale(0.3965);
                }
                to {
                    transform: translate3d(20.5161vw, 1093px, 0) rotate(-556deg) scale(0.3965);
                }
            }

            .main-bg-snow > .snowflake:nth-child(19) {
                opacity: 0.5172;
                transform: translate3d(74.5162vw, -30px, 0) rotate(0deg) scale(0.8401);
                animation: snowfall-19 23s -29s linear infinite;
            }

            @keyframes snowfall-19 {
                52.2% {
                    transform: translate3d(72.8341vw, 570.5px, 0) rotate(-336deg) scale(0.8401);
                }
                to {
                    transform: translate3d(73.6752vw, 1093px, 0) rotate(-644deg) scale(0.8401);
                }
            }

            .main-bg-snow > .snowflake:nth-child(20) {
                opacity: 0.7626;
                transform: translate3d(72.7067vw, -30px, 0) rotate(0deg) scale(0.2622);
                animation: snowfall-20 23s -6s linear infinite;
            }

            @keyframes snowfall-20 {
                50.6% {
                    transform: translate3d(65.7583vw, 553.1px, 0) rotate(224deg) scale(0.2622);
                }
                to {
                    transform: translate3d(69.2325vw, 1093px, 0) rotate(442deg) scale(0.2622);
                }
            }

            .main-bg-snow > .snowflake:nth-child(21) {
                opacity: 0.3733;
                transform: translate3d(87.2022vw, -30px, 0) rotate(0deg) scale(0.441);
                animation: snowfall-21 19s -19s linear infinite;
            }

            @keyframes snowfall-21 {
                56.8% {
                    transform: translate3d(92.3972vw, 620.8px, 0) rotate(308deg) scale(0.441);
                }
                to {
                    transform: translate3d(89.7997vw, 1093px, 0) rotate(542deg) scale(0.441);
                }
            }

            .main-bg-snow > .snowflake:nth-child(22) {
                opacity: 0.25;
                transform: translate3d(81.2462vw, -30px, 0) rotate(0deg) scale(0.452);
                animation: snowfall-22 26s -29s linear infinite;
            }

            @keyframes snowfall-22 {
                60.099999999999994% {
                    transform: translate3d(73.6598vw, 656.9px, 0) rotate(236deg) scale(0.452);
                }
                to {
                    transform: translate3d(77.453vw, 1093px, 0) rotate(393deg) scale(0.452);
                }
            }

            .main-bg-snow > .snowflake:nth-child(23) {
                opacity: 0.8327;
                transform: translate3d(50.6759vw, -30px, 0) rotate(0deg) scale(0.5791);
                animation: snowfall-23 19s -2s linear infinite;
            }

            @keyframes snowfall-23 {
                66.3% {
                    transform: translate3d(43.3448vw, 724.7px, 0) rotate(-255deg) scale(0.5791);
                }
                to {
                    transform: translate3d(47.0103vw, 1093px, 0) rotate(-384deg) scale(0.5791);
                }
            }

            .main-bg-snow > .snowflake:nth-child(24) {
                opacity: 0.8806;
                transform: translate3d(88.3191vw, -30px, 0) rotate(0deg) scale(0.7276);
                animation: snowfall-24 14s -6s linear infinite;
            }

            @keyframes snowfall-24 {
                33.300000000000004% {
                    transform: translate3d(89.487vw, 364px, 0) rotate(194deg) scale(0.7276);
                }
                to {
                    transform: translate3d(88.9031vw, 1093px, 0) rotate(583deg) scale(0.7276);
                }
            }

            .main-bg-snow > .snowflake:nth-child(25) {
                opacity: 0.4739;
                transform: translate3d(74.2751vw, -30px, 0) rotate(0deg) scale(0.9292);
                animation: snowfall-25 21s -27s linear infinite;
            }

            @keyframes snowfall-25 {
                38.7% {
                    transform: translate3d(68.4019vw, 423px, 0) rotate(-228deg) scale(0.9292);
                }
                to {
                    transform: translate3d(71.3385vw, 1093px, 0) rotate(-590deg) scale(0.9292);
                }
            }

            .main-bg-snow > .snowflake:nth-child(26) {
                opacity: 0.9133;
                transform: translate3d(96.7812vw, -30px, 0) rotate(0deg) scale(0.9978);
                animation: snowfall-26 22s -15s linear infinite;
            }

            @keyframes snowfall-26 {
                64.3% {
                    transform: translate3d(103.6539vw, 702.8px, 0) rotate(450deg) scale(0.9978);
                }
                to {
                    transform: translate3d(100.2176vw, 1093px, 0) rotate(700deg) scale(0.9978);
                }
            }

            .main-bg-snow > .snowflake:nth-child(27) {
                opacity: 0.6772;
                transform: translate3d(61.3195vw, -30px, 0) rotate(0deg) scale(0.3142);
                animation: snowfall-27 26s -4s linear infinite;
            }

            @keyframes snowfall-27 {
                70.39999999999999% {
                    transform: translate3d(58.9688vw, 769.5px, 0) rotate(-381deg) scale(0.3142);
                }
                to {
                    transform: translate3d(60.1442vw, 1093px, 0) rotate(-541deg) scale(0.3142);
                }
            }

            .main-bg-snow > .snowflake:nth-child(28) {
                opacity: 0.7588;
                transform: translate3d(36.4826vw, -30px, 0) rotate(0deg) scale(0.2022);
                animation: snowfall-28 17s -25s linear infinite;
            }

            @keyframes snowfall-28 {
                53.300000000000004% {
                    transform: translate3d(42.937vw, 582.6px, 0) rotate(192deg) scale(0.2022);
                }
                to {
                    transform: translate3d(39.7098vw, 1093px, 0) rotate(361deg) scale(0.2022);
                }
            }

            .main-bg-snow > .snowflake:nth-child(29) {
                opacity: 0.9083;
                transform: translate3d(55.2531vw, -30px, 0) rotate(0deg) scale(0.4487);
                animation: snowfall-29 17s -26s linear infinite;
            }

            @keyframes snowfall-29 {
                64.2% {
                    transform: translate3d(53.0071vw, 701.7px, 0) rotate(-386deg) scale(0.4487);
                }
                to {
                    transform: translate3d(54.1301vw, 1093px, 0) rotate(-602deg) scale(0.4487);
                }
            }

            .main-bg-snow > .snowflake:nth-child(30) {
                opacity: 0.8012;
                transform: translate3d(38.1438vw, -30px, 0) rotate(0deg) scale(0.6924);
                animation: snowfall-30 28s -12s linear infinite;
            }

            @keyframes snowfall-30 {
                58.199999999999996% {
                    transform: translate3d(46.3377vw, 636.1px, 0) rotate(-237deg) scale(0.6924);
                }
                to {
                    transform: translate3d(42.2408vw, 1093px, 0) rotate(-407deg) scale(0.6924);
                }
            }

            .main-bg-snow > .snowflake:nth-child(31) {
                opacity: 0.6486;
                transform: translate3d(14.0322vw, -30px, 0) rotate(0deg) scale(0.8928);
                animation: snowfall-31 24s -5s linear infinite;
            }

            @keyframes snowfall-31 {
                66.60000000000001% {
                    transform: translate3d(21.6745vw, 727.9px, 0) rotate(286deg) scale(0.8928);
                }
                to {
                    transform: translate3d(17.8534vw, 1093px, 0) rotate(429deg) scale(0.8928);
                }
            }

            .main-bg-snow > .snowflake:nth-child(32) {
                opacity: 0.4871;
                transform: translate3d(23.7887vw, -30px, 0) rotate(0deg) scale(0.8265);
                animation: snowfall-32 21s -20s linear infinite;
            }

            @keyframes snowfall-32 {
                37% {
                    transform: translate3d(15.8302vw, 404.4px, 0) rotate(217deg) scale(0.8265);
                }
                to {
                    transform: translate3d(19.8094vw, 1093px, 0) rotate(587deg) scale(0.8265);
                }
            }

            .main-bg-snow > .snowflake:nth-child(33) {
                opacity: 0.3851;
                transform: translate3d(89.328vw, -30px, 0) rotate(0deg) scale(0.8877);
                animation: snowfall-33 22s -20s linear infinite;
            }

            @keyframes snowfall-33 {
                78.60000000000001% {
                    transform: translate3d(93.4323vw, 859.1px, 0) rotate(-521deg) scale(0.8877);
                }
                to {
                    transform: translate3d(91.3802vw, 1093px, 0) rotate(-663deg) scale(0.8877);
                }
            }

            .main-bg-snow > .snowflake:nth-child(34) {
                opacity: 0.4328;
                transform: translate3d(74.2986vw, -30px, 0) rotate(0deg) scale(0.6704);
                animation: snowfall-34 25s -11s linear infinite;
            }

            @keyframes snowfall-34 {
                49.6% {
                    transform: translate3d(82.3224vw, 542.1px, 0) rotate(195deg) scale(0.6704);
                }
                to {
                    transform: translate3d(78.3105vw, 1093px, 0) rotate(394deg) scale(0.6704);
                }
            }

            .main-bg-snow > .snowflake:nth-child(35) {
                opacity: 0.2088;
                transform: translate3d(34.0545vw, -30px, 0) rotate(0deg) scale(0.5539);
                animation: snowfall-35 17s -6s linear infinite;
            }

            @keyframes snowfall-35 {
                38.5% {
                    transform: translate3d(39.5676vw, 420.8px, 0) rotate(-251deg) scale(0.5539);
                }
                to {
                    transform: translate3d(36.811vw, 1093px, 0) rotate(-652deg) scale(0.5539);
                }
            }

            .main-bg-snow > .snowflake:nth-child(36) {
                opacity: 0.3062;
                transform: translate3d(72.5634vw, -30px, 0) rotate(0deg) scale(0.6264);
                animation: snowfall-36 28s -18s linear infinite;
            }

            @keyframes snowfall-36 {
                57.599999999999994% {
                    transform: translate3d(76.7876vw, 629.6px, 0) rotate(354deg) scale(0.6264);
                }
                to {
                    transform: translate3d(74.6755vw, 1093px, 0) rotate(614deg) scale(0.6264);
                }
            }

            .main-bg-snow > .snowflake:nth-child(37) {
                opacity: 0.3155;
                transform: translate3d(13.7883vw, -30px, 0) rotate(0deg) scale(0.2577);
                animation: snowfall-37 12s -6s linear infinite;
            }

            @keyframes snowfall-37 {
                40.300000000000004% {
                    transform: translate3d(6.2481vw, 440.5px, 0) rotate(219deg) scale(0.2577);
                }
                to {
                    transform: translate3d(10.0182vw, 1093px, 0) rotate(543deg) scale(0.2577);
                }
            }

            .main-bg-snow > .snowflake:nth-child(38) {
                opacity: 0.9688;
                transform: translate3d(66.8191vw, -30px, 0) rotate(0deg) scale(0.73);
                animation: snowfall-38 19s -15s linear infinite;
            }

            @keyframes snowfall-38 {
                61.1% {
                    transform: translate3d(67.4324vw, 667.8px, 0) rotate(-313deg) scale(0.73);
                }
                to {
                    transform: translate3d(67.1258vw, 1093px, 0) rotate(-513deg) scale(0.73);
                }
            }

            .main-bg-snow > .snowflake:nth-child(39) {
                opacity: 0.4496;
                transform: translate3d(5.59vw, -30px, 0) rotate(0deg) scale(0.7792);
                animation: snowfall-39 18s -3s linear infinite;
            }

            @keyframes snowfall-39 {
                55.300000000000004% {
                    transform: translate3d(2.5921vw, 604.4px, 0) rotate(-385deg) scale(0.7792);
                }
                to {
                    transform: translate3d(4.0911vw, 1093px, 0) rotate(-696deg) scale(0.7792);
                }
            }

            .main-bg-snow > .snowflake:nth-child(40) {
                opacity: 0.9415;
                transform: translate3d(63.1693vw, -30px, 0) rotate(0deg) scale(0.2893);
                animation: snowfall-40 24s -11s linear infinite;
            }

            @keyframes snowfall-40 {
                42.6% {
                    transform: translate3d(56.1506vw, 465.6px, 0) rotate(193deg) scale(0.2893);
                }
                to {
                    transform: translate3d(59.66vw, 1093px, 0) rotate(453deg) scale(0.2893);
                }
            }

            .main-bg-snow > .snowflake:nth-child(41) {
                opacity: 0.9672;
                transform: translate3d(12.1428vw, -30px, 0) rotate(0deg) scale(0.4345);
                animation: snowfall-41 25s -22s linear infinite;
            }

            @keyframes snowfall-41 {
                37.4% {
                    transform: translate3d(12.949vw, 408.8px, 0) rotate(-205deg) scale(0.4345);
                }
                to {
                    transform: translate3d(12.5459vw, 1093px, 0) rotate(-547deg) scale(0.4345);
                }
            }

            .main-bg-snow > .snowflake:nth-child(42) {
                opacity: 0.8042;
                transform: translate3d(26.0241vw, -30px, 0) rotate(0deg) scale(0.2879);
                animation: snowfall-42 15s -29s linear infinite;
            }

            @keyframes snowfall-42 {
                71.8% {
                    transform: translate3d(18.1997vw, 784.8px, 0) rotate(389deg) scale(0.2879);
                }
                to {
                    transform: translate3d(22.1119vw, 1093px, 0) rotate(542deg) scale(0.2879);
                }
            }

            .main-bg-snow > .snowflake:nth-child(43) {
                opacity: 0.6616;
                transform: translate3d(54.3635vw, -30px, 0) rotate(0deg) scale(0.5214);
                animation: snowfall-43 24s -1s linear infinite;
            }

            @keyframes snowfall-43 {
                43% {
                    transform: translate3d(50.0999vw, 470px, 0) rotate(193deg) scale(0.5214);
                }
                to {
                    transform: translate3d(52.2317vw, 1093px, 0) rotate(448deg) scale(0.5214);
                }
            }

            .main-bg-snow > .snowflake:nth-child(44) {
                opacity: 0.6262;
                transform: translate3d(42.8685vw, -30px, 0) rotate(0deg) scale(0.5238);
                animation: snowfall-44 15s -17s linear infinite;
            }

            @keyframes snowfall-44 {
                62.7% {
                    transform: translate3d(33.2836vw, 685.3px, 0) rotate(343deg) scale(0.5238);
                }
                to {
                    transform: translate3d(38.076vw, 1093px, 0) rotate(547deg) scale(0.5238);
                }
            }

            .main-bg-snow > .snowflake:nth-child(45) {
                opacity: 0.6617;
                transform: translate3d(1.1176vw, -30px, 0) rotate(0deg) scale(0.3114);
                animation: snowfall-45 21s -7s linear infinite;
            }

            @keyframes snowfall-45 {
                74.9% {
                    transform: translate3d(0.6172vw, 818.7px, 0) rotate(-333deg) scale(0.3114);
                }
                to {
                    transform: translate3d(0.8674vw, 1093px, 0) rotate(-444deg) scale(0.3114);
                }
            }

            .main-bg-snow > .snowflake:nth-child(46) {
                opacity: 0.6275;
                transform: translate3d(35.5902vw, -30px, 0) rotate(0deg) scale(0.8483);
                animation: snowfall-46 23s -11s linear infinite;
            }

            @keyframes snowfall-46 {
                59.199999999999996% {
                    transform: translate3d(32.8022vw, 647.1px, 0) rotate(-382deg) scale(0.8483);
                }
                to {
                    transform: translate3d(34.1962vw, 1093px, 0) rotate(-646deg) scale(0.8483);
                }
            }

            .main-bg-snow > .snowflake:nth-child(47) {
                opacity: 0.6483;
                transform: translate3d(12.5899vw, -30px, 0) rotate(0deg) scale(0.5236);
                animation: snowfall-47 24s -30s linear infinite;
            }

            @keyframes snowfall-47 {
                39.4% {
                    transform: translate3d(10.1775vw, 430.6px, 0) rotate(-247deg) scale(0.5236);
                }
                to {
                    transform: translate3d(11.3837vw, 1093px, 0) rotate(-628deg) scale(0.5236);
                }
            }

            .main-bg-snow > .snowflake:nth-child(48) {
                opacity: 0.373;
                transform: translate3d(20.5624vw, -30px, 0) rotate(0deg) scale(0.8404);
                animation: snowfall-48 25s -19s linear infinite;
            }

            @keyframes snowfall-48 {
                76.9% {
                    transform: translate3d(14.3549vw, 840.5px, 0) rotate(-418deg) scale(0.8404);
                }
                to {
                    transform: translate3d(17.4587vw, 1093px, 0) rotate(-544deg) scale(0.8404);
                }
            }

            .main-bg-snow > .snowflake:nth-child(49) {
                opacity: 0.4725;
                transform: translate3d(48.6754vw, -30px, 0) rotate(0deg) scale(0.2546);
                animation: snowfall-49 21s -12s linear infinite;
            }

            @keyframes snowfall-49 {
                79.3% {
                    transform: translate3d(52.2008vw, 866.7px, 0) rotate(-543deg) scale(0.2546);
                }
                to {
                    transform: translate3d(50.4381vw, 1093px, 0) rotate(-685deg) scale(0.2546);
                }
            }

            .main-bg-snow > .snowflake:nth-child(50) {
                opacity: 0.632;
                transform: translate3d(44.7464vw, -30px, 0) rotate(0deg) scale(0.7879);
                animation: snowfall-50 23s -24s linear infinite;
            }

            @keyframes snowfall-50 {
                48.3% {
                    transform: translate3d(39.3133vw, 527.9px, 0) rotate(192deg) scale(0.7879);
                }
                to {
                    transform: translate3d(42.0299vw, 1093px, 0) rotate(398deg) scale(0.7879);
                }
            }

            .main-bg-snow > .snowflake:nth-child(51) {
                opacity: 0.4369;
                transform: translate3d(79.3631vw, -30px, 0) rotate(0deg) scale(0.9195);
                animation: snowfall-51 18s -12s linear infinite;
            }

            @keyframes snowfall-51 {
                62.6% {
                    transform: translate3d(86.0562vw, 684.2px, 0) rotate(401deg) scale(0.9195);
                }
                to {
                    transform: translate3d(82.7097vw, 1093px, 0) rotate(641deg) scale(0.9195);
                }
            }

            .main-bg-snow > .snowflake:nth-child(52) {
                opacity: 0.309;
                transform: translate3d(89.633vw, -30px, 0) rotate(0deg) scale(0.3426);
                animation: snowfall-52 13s -28s linear infinite;
            }

            @keyframes snowfall-52 {
                62.1% {
                    transform: translate3d(98.9976vw, 678.8px, 0) rotate(-317deg) scale(0.3426);
                }
                to {
                    transform: translate3d(94.3153vw, 1093px, 0) rotate(-511deg) scale(0.3426);
                }
            }

            .main-bg-snow > .snowflake:nth-child(53) {
                opacity: 0.9936;
                transform: translate3d(5.3172vw, -30px, 0) rotate(0deg) scale(0.533);
                animation: snowfall-53 11s -29s linear infinite;
            }

            @keyframes snowfall-53 {
                49.6% {
                    transform: translate3d(-1.2626vw, 542.1px, 0) rotate(-285deg) scale(0.533);
                }
                to {
                    transform: translate3d(2.0273vw, 1093px, 0) rotate(-575deg) scale(0.533);
                }
            }

            .main-bg-snow > .snowflake:nth-child(54) {
                opacity: 0.6686;
                transform: translate3d(11.6102vw, -30px, 0) rotate(0deg) scale(0.9072);
                animation: snowfall-54 24s -18s linear infinite;
            }

            @keyframes snowfall-54 {
                44.2% {
                    transform: translate3d(4.743vw, 483.1px, 0) rotate(-317deg) scale(0.9072);
                }
                to {
                    transform: translate3d(8.1766vw, 1093px, 0) rotate(-717deg) scale(0.9072);
                }
            }

            .main-bg-snow > .snowflake:nth-child(55) {
                opacity: 0.4996;
                transform: translate3d(69.0156vw, -30px, 0) rotate(0deg) scale(0.3637);
                animation: snowfall-55 22s -25s linear infinite;
            }

            @keyframes snowfall-55 {
                53.800000000000004% {
                    transform: translate3d(64.5138vw, 588px, 0) rotate(-238deg) scale(0.3637);
                }
                to {
                    transform: translate3d(66.7647vw, 1093px, 0) rotate(-443deg) scale(0.3637);
                }
            }

            .main-bg-snow > .snowflake:nth-child(56) {
                opacity: 0.8866;
                transform: translate3d(73.7048vw, -30px, 0) rotate(0deg) scale(0.6341);
                animation: snowfall-56 24s -26s linear infinite;
            }

            @keyframes snowfall-56 {
                38.1% {
                    transform: translate3d(74.8781vw, 416.4px, 0) rotate(-190deg) scale(0.6341);
                }
                to {
                    transform: translate3d(74.2915vw, 1093px, 0) rotate(-500deg) scale(0.6341);
                }
            }

            .main-bg-snow > .snowflake:nth-child(57) {
                opacity: 0.524;
                transform: translate3d(79.2189vw, -30px, 0) rotate(0deg) scale(0.9288);
                animation: snowfall-57 23s -25s linear infinite;
            }

            @keyframes snowfall-57 {
                69.89999999999999% {
                    transform: translate3d(71.9464vw, 764px, 0) rotate(333deg) scale(0.9288);
                }
                to {
                    transform: translate3d(75.5827vw, 1093px, 0) rotate(477deg) scale(0.9288);
                }
            }

            .main-bg-snow > .snowflake:nth-child(58) {
                opacity: 0.839;
                transform: translate3d(4.9838vw, -30px, 0) rotate(0deg) scale(0.2078);
                animation: snowfall-58 16s -5s linear infinite;
            }

            @keyframes snowfall-58 {
                75% {
                    transform: translate3d(0.7849vw, 819.8px, 0) rotate(-527deg) scale(0.2078);
                }
                to {
                    transform: translate3d(2.8843vw, 1093px, 0) rotate(-703deg) scale(0.2078);
                }
            }

            .main-bg-snow > .snowflake:nth-child(59) {
                opacity: 0.9227;
                transform: translate3d(5.9313vw, -30px, 0) rotate(0deg) scale(0.8639);
                animation: snowfall-59 10s -6s linear infinite;
            }

            @keyframes snowfall-59 {
                63.1% {
                    transform: translate3d(14.572vw, 689.7px, 0) rotate(-322deg) scale(0.8639);
                }
                to {
                    transform: translate3d(10.2517vw, 1093px, 0) rotate(-510deg) scale(0.8639);
                }
            }

            .main-bg-snow > .snowflake:nth-child(60) {
                opacity: 0.5234;
                transform: translate3d(67.9012vw, -30px, 0) rotate(0deg) scale(0.6144);
                animation: snowfall-60 24s -15s linear infinite;
            }

            @keyframes snowfall-60 {
                35.3% {
                    transform: translate3d(60.5353vw, 385.8px, 0) rotate(-223deg) scale(0.6144);
                }
                to {
                    transform: translate3d(64.2183vw, 1093px, 0) rotate(-633deg) scale(0.6144);
                }
            }

            .main-bg-snow > .snowflake:nth-child(61) {
                opacity: 0.4235;
                transform: translate3d(73.2614vw, -30px, 0) rotate(0deg) scale(0.5993);
                animation: snowfall-61 25s -18s linear infinite;
            }

            @keyframes snowfall-61 {
                57.599999999999994% {
                    transform: translate3d(65.6049vw, 629.6px, 0) rotate(-230deg) scale(0.5993);
                }
                to {
                    transform: translate3d(69.4332vw, 1093px, 0) rotate(-400deg) scale(0.5993);
                }
            }

            .main-bg-snow > .snowflake:nth-child(62) {
                opacity: 0.5058;
                transform: translate3d(73.386vw, -30px, 0) rotate(0deg) scale(0.2528);
                animation: snowfall-62 18s -8s linear infinite;
            }

            @keyframes snowfall-62 {
                68.7% {
                    transform: translate3d(64.2534vw, 750.9px, 0) rotate(450deg) scale(0.2528);
                }
                to {
                    transform: translate3d(68.8197vw, 1093px, 0) rotate(655deg) scale(0.2528);
                }
            }

            .main-bg-snow > .snowflake:nth-child(63) {
                opacity: 0.6894;
                transform: translate3d(43.205vw, -30px, 0) rotate(0deg) scale(0.8355);
                animation: snowfall-63 11s -23s linear infinite;
            }

            @keyframes snowfall-63 {
                48.3% {
                    transform: translate3d(48.6223vw, 527.9px, 0) rotate(339deg) scale(0.8355);
                }
                to {
                    transform: translate3d(45.9136vw, 1093px, 0) rotate(701deg) scale(0.8355);
                }
            }

            .main-bg-snow > .snowflake:nth-child(64) {
                opacity: 0.7636;
                transform: translate3d(7.0779vw, -30px, 0) rotate(0deg) scale(0.2328);
                animation: snowfall-64 24s -18s linear infinite;
            }

            @keyframes snowfall-64 {
                70.19999999999999% {
                    transform: translate3d(11.3654vw, 767.3px, 0) rotate(380deg) scale(0.2328);
                }
                to {
                    transform: translate3d(9.2217vw, 1093px, 0) rotate(542deg) scale(0.2328);
                }
            }

            .main-bg-snow > .snowflake:nth-child(65) {
                opacity: 0.6423;
                transform: translate3d(31.2463vw, -30px, 0) rotate(0deg) scale(0.4224);
                animation: snowfall-65 30s -7s linear infinite;
            }

            @keyframes snowfall-65 {
                49.1% {
                    transform: translate3d(22.4063vw, 536.7px, 0) rotate(261deg) scale(0.4224);
                }
                to {
                    transform: translate3d(26.8263vw, 1093px, 0) rotate(531deg) scale(0.4224);
                }
            }

            .main-bg-snow > .snowflake:nth-child(66) {
                opacity: 0.9052;
                transform: translate3d(61.6743vw, -30px, 0) rotate(0deg) scale(0.5924);
                animation: snowfall-66 13s -6s linear infinite;
            }

            @keyframes snowfall-66 {
                57.599999999999994% {
                    transform: translate3d(54.3278vw, 629.6px, 0) rotate(-412deg) scale(0.5924);
                }
                to {
                    transform: translate3d(58.0011vw, 1093px, 0) rotate(-716deg) scale(0.5924);
                }
            }

            .main-bg-snow > .snowflake:nth-child(67) {
                opacity: 0.9819;
                transform: translate3d(16.5203vw, -30px, 0) rotate(0deg) scale(0.502);
                animation: snowfall-67 16s -28s linear infinite;
            }

            @keyframes snowfall-67 {
                64.5% {
                    transform: translate3d(16.0804vw, 705px, 0) rotate(341deg) scale(0.502);
                }
                to {
                    transform: translate3d(16.3003vw, 1093px, 0) rotate(528deg) scale(0.502);
                }
            }

            .main-bg-snow > .snowflake:nth-child(68) {
                opacity: 0.7897;
                transform: translate3d(38.3458vw, -30px, 0) rotate(0deg) scale(0.4723);
                animation: snowfall-68 17s -16s linear infinite;
            }

            @keyframes snowfall-68 {
                68% {
                    transform: translate3d(43.6534vw, 743.2px, 0) rotate(-321deg) scale(0.4723);
                }
                to {
                    transform: translate3d(40.9996vw, 1093px, 0) rotate(-472deg) scale(0.4723);
                }
            }

            .main-bg-snow > .snowflake:nth-child(69) {
                opacity: 0.6446;
                transform: translate3d(25.5761vw, -30px, 0) rotate(0deg) scale(0.4019);
                animation: snowfall-69 26s -1s linear infinite;
            }

            @keyframes snowfall-69 {
                73.5% {
                    transform: translate3d(22.591vw, 803.4px, 0) rotate(-303deg) scale(0.4019);
                }
                to {
                    transform: translate3d(24.0836vw, 1093px, 0) rotate(-412deg) scale(0.4019);
                }
            }

            .main-bg-snow > .snowflake:nth-child(70) {
                opacity: 0.4565;
                transform: translate3d(67.9381vw, -30px, 0) rotate(0deg) scale(0.8389);
                animation: snowfall-70 20s -9s linear infinite;
            }

            @keyframes snowfall-70 {
                71.89999999999999% {
                    transform: translate3d(66.6621vw, 785.9px, 0) rotate(-411deg) scale(0.8389);
                }
                to {
                    transform: translate3d(67.3001vw, 1093px, 0) rotate(-571deg) scale(0.8389);
                }
            }

            .main-bg-snow > .snowflake:nth-child(71) {
                opacity: 0.239;
                transform: translate3d(6.6492vw, -30px, 0) rotate(0deg) scale(0.7823);
                animation: snowfall-71 22s -23s linear infinite;
            }

            @keyframes snowfall-71 {
                40% {
                    transform: translate3d(5.4925vw, 437.2px, 0) rotate(227deg) scale(0.7823);
                }
                to {
                    transform: translate3d(6.0709vw, 1093px, 0) rotate(568deg) scale(0.7823);
                }
            }

            .main-bg-snow > .snowflake:nth-child(72) {
                opacity: 0.3699;
                transform: translate3d(74.1863vw, -30px, 0) rotate(0deg) scale(0.8748);
                animation: snowfall-72 16s -27s linear infinite;
            }

            @keyframes snowfall-72 {
                56.2% {
                    transform: translate3d(82.1727vw, 614.3px, 0) rotate(275deg) scale(0.8748);
                }
                to {
                    transform: translate3d(78.1795vw, 1093px, 0) rotate(489deg) scale(0.8748);
                }
            }

            .main-bg-snow > .snowflake:nth-child(73) {
                opacity: 0.4686;
                transform: translate3d(30.1295vw, -30px, 0) rotate(0deg) scale(0.3773);
                animation: snowfall-73 30s -12s linear infinite;
            }

            @keyframes snowfall-73 {
                64.9% {
                    transform: translate3d(29.4741vw, 709.4px, 0) rotate(389deg) scale(0.3773);
                }
                to {
                    transform: translate3d(29.8018vw, 1093px, 0) rotate(600deg) scale(0.3773);
                }
            }

            .main-bg-snow > .snowflake:nth-child(74) {
                opacity: 0.6143;
                transform: translate3d(65.4719vw, -30px, 0) rotate(0deg) scale(0.2081);
                animation: snowfall-74 13s -15s linear infinite;
            }

            @keyframes snowfall-74 {
                61% {
                    transform: translate3d(57.9719vw, 666.7px, 0) rotate(-371deg) scale(0.2081);
                }
                to {
                    transform: translate3d(61.7219vw, 1093px, 0) rotate(-609deg) scale(0.2081);
                }
            }

            .main-bg-snow > .snowflake:nth-child(75) {
                opacity: 0.8751;
                transform: translate3d(65.9187vw, -30px, 0) rotate(0deg) scale(0.6048);
                animation: snowfall-75 23s -20s linear infinite;
            }

            @keyframes snowfall-75 {
                60.4% {
                    transform: translate3d(66.6453vw, 660.2px, 0) rotate(220deg) scale(0.6048);
                }
                to {
                    transform: translate3d(66.282vw, 1093px, 0) rotate(365deg) scale(0.6048);
                }
            }

            .main-bg-snow > .snowflake:nth-child(76) {
                opacity: 0.6974;
                transform: translate3d(43.73vw, -30px, 0) rotate(0deg) scale(0.2809);
                animation: snowfall-76 27s -17s linear infinite;
            }

            @keyframes snowfall-76 {
                55.900000000000006% {
                    transform: translate3d(40.2489vw, 611px, 0) rotate(-320deg) scale(0.2809);
                }
                to {
                    transform: translate3d(41.9895vw, 1093px, 0) rotate(-572deg) scale(0.2809);
                }
            }

            .main-bg-snow > .snowflake:nth-child(77) {
                opacity: 0.8954;
                transform: translate3d(53.3613vw, -30px, 0) rotate(0deg) scale(0.8019);
                animation: snowfall-77 12s -7s linear infinite;
            }

            @keyframes snowfall-77 {
                61.5% {
                    transform: translate3d(45.218vw, 672.2px, 0) rotate(274deg) scale(0.8019);
                }
                to {
                    transform: translate3d(49.2897vw, 1093px, 0) rotate(446deg) scale(0.8019);
                }
            }

            .main-bg-snow > .snowflake:nth-child(78) {
                opacity: 0.5127;
                transform: translate3d(90.789vw, -30px, 0) rotate(0deg) scale(0.7008);
                animation: snowfall-78 19s -22s linear infinite;
            }

            @keyframes snowfall-78 {
                56.8% {
                    transform: translate3d(83.5305vw, 620.8px, 0) rotate(-254deg) scale(0.7008);
                }
                to {
                    transform: translate3d(87.1598vw, 1093px, 0) rotate(-447deg) scale(0.7008);
                }
            }

            .main-bg-snow > .snowflake:nth-child(79) {
                opacity: 0.4129;
                transform: translate3d(61.4456vw, -30px, 0) rotate(0deg) scale(0.2204);
                animation: snowfall-79 21s -24s linear infinite;
            }

            @keyframes snowfall-79 {
                75.1% {
                    transform: translate3d(69.305vw, 820.8px, 0) rotate(-527deg) scale(0.2204);
                }
                to {
                    transform: translate3d(65.3753vw, 1093px, 0) rotate(-702deg) scale(0.2204);
                }
            }

            .main-bg-snow > .snowflake:nth-child(80) {
                opacity: 0.7434;
                transform: translate3d(2.77vw, -30px, 0) rotate(0deg) scale(0.918);
                animation: snowfall-80 19s -16s linear infinite;
            }

            @keyframes snowfall-80 {
                51.2% {
                    transform: translate3d(2.3544vw, 559.6px, 0) rotate(255deg) scale(0.918);
                }
                to {
                    transform: translate3d(2.5622vw, 1093px, 0) rotate(499deg) scale(0.918);
                }
            }

            .main-bg-snow > .snowflake:nth-child(81) {
                opacity: 0.3331;
                transform: translate3d(1.148vw, -30px, 0) rotate(0deg) scale(0.3521);
                animation: snowfall-81 16s -20s linear infinite;
            }

            @keyframes snowfall-81 {
                30.9% {
                    transform: translate3d(10.2603vw, 337.7px, 0) rotate(119deg) scale(0.3521);
                }
                to {
                    transform: translate3d(5.7041vw, 1093px, 0) rotate(386deg) scale(0.3521);
                }
            }

            .main-bg-snow > .snowflake:nth-child(82) {
                opacity: 0.7307;
                transform: translate3d(14.6651vw, -30px, 0) rotate(0deg) scale(0.2378);
                animation: snowfall-82 12s -17s linear infinite;
            }

            @keyframes snowfall-82 {
                55.900000000000006% {
                    transform: translate3d(18.5964vw, 611px, 0) rotate(-338deg) scale(0.2378);
                }
                to {
                    transform: translate3d(16.6308vw, 1093px, 0) rotate(-604deg) scale(0.2378);
                }
            }

            .main-bg-snow > .snowflake:nth-child(83) {
                opacity: 0.5085;
                transform: translate3d(78.3569vw, -30px, 0) rotate(0deg) scale(0.7824);
                animation: snowfall-83 25s -26s linear infinite;
            }

            @keyframes snowfall-83 {
                70.7% {
                    transform: translate3d(77.5815vw, 772.8px, 0) rotate(304deg) scale(0.7824);
                }
                to {
                    transform: translate3d(77.9692vw, 1093px, 0) rotate(430deg) scale(0.7824);
                }
            }

            .main-bg-snow > .snowflake:nth-child(84) {
                opacity: 0.8827;
                transform: translate3d(40.5094vw, -30px, 0) rotate(0deg) scale(0.7251);
                animation: snowfall-84 10s -6s linear infinite;
            }

            @keyframes snowfall-84 {
                56.10000000000001% {
                    transform: translate3d(49.6847vw, 613.2px, 0) rotate(255deg) scale(0.7251);
                }
                to {
                    transform: translate3d(45.097vw, 1093px, 0) rotate(454deg) scale(0.7251);
                }
            }

            .main-bg-snow > .snowflake:nth-child(85) {
                opacity: 0.4964;
                transform: translate3d(35.8192vw, -30px, 0) rotate(0deg) scale(0.9066);
                animation: snowfall-85 29s -22s linear infinite;
            }

            @keyframes snowfall-85 {
                40.300000000000004% {
                    transform: translate3d(37.1521vw, 440.5px, 0) rotate(239deg) scale(0.9066);
                }
                to {
                    transform: translate3d(36.4857vw, 1093px, 0) rotate(594deg) scale(0.9066);
                }
            }

            .main-bg-snow > .snowflake:nth-child(86) {
                opacity: 0.7626;
                transform: translate3d(32.2229vw, -30px, 0) rotate(0deg) scale(0.3412);
                animation: snowfall-86 29s -29s linear infinite;
            }

            @keyframes snowfall-86 {
                74% {
                    transform: translate3d(39.9695vw, 808.8px, 0) rotate(-331deg) scale(0.3412);
                }
                to {
                    transform: translate3d(36.0962vw, 1093px, 0) rotate(-447deg) scale(0.3412);
                }
            }

            .main-bg-snow > .snowflake:nth-child(87) {
                opacity: 0.9532;
                transform: translate3d(36.0614vw, -30px, 0) rotate(0deg) scale(0.9215);
                animation: snowfall-87 17s -7s linear infinite;
            }

            @keyframes snowfall-87 {
                52.1% {
                    transform: translate3d(42.4127vw, 569.5px, 0) rotate(-294deg) scale(0.9215);
                }
                to {
                    transform: translate3d(39.237vw, 1093px, 0) rotate(-565deg) scale(0.9215);
                }
            }

            .main-bg-snow > .snowflake:nth-child(88) {
                opacity: 0.3032;
                transform: translate3d(58.5351vw, -30px, 0) rotate(0deg) scale(0.407);
                animation: snowfall-88 18s -10s linear infinite;
            }

            @keyframes snowfall-88 {
                39.2% {
                    transform: translate3d(52.7038vw, 428.5px, 0) rotate(-230deg) scale(0.407);
                }
                to {
                    transform: translate3d(55.6195vw, 1093px, 0) rotate(-588deg) scale(0.407);
                }
            }

            .main-bg-snow > .snowflake:nth-child(89) {
                opacity: 0.3637;
                transform: translate3d(16.8403vw, -30px, 0) rotate(0deg) scale(0.5741);
                animation: snowfall-89 21s -6s linear infinite;
            }

            @keyframes snowfall-89 {
                65.9% {
                    transform: translate3d(24.2859vw, 720.3px, 0) rotate(-304deg) scale(0.5741);
                }
                to {
                    transform: translate3d(20.5631vw, 1093px, 0) rotate(-461deg) scale(0.5741);
                }
            }

            .main-bg-snow > .snowflake:nth-child(90) {
                opacity: 0.364;
                transform: translate3d(62.5834vw, -30px, 0) rotate(0deg) scale(0.7198);
                animation: snowfall-90 22s -21s linear infinite;
            }

            @keyframes snowfall-90 {
                70.6% {
                    transform: translate3d(65.5691vw, 771.7px, 0) rotate(-390deg) scale(0.7198);
                }
                to {
                    transform: translate3d(64.0763vw, 1093px, 0) rotate(-552deg) scale(0.7198);
                }
            }

            .main-bg-snow > .snowflake:nth-child(91) {
                opacity: 0.5507;
                transform: translate3d(74.1266vw, -30px, 0) rotate(0deg) scale(0.7076);
                animation: snowfall-91 29s -14s linear infinite;
            }

            @keyframes snowfall-91 {
                48.6% {
                    transform: translate3d(72.4802vw, 531.2px, 0) rotate(-316deg) scale(0.7076);
                }
                to {
                    transform: translate3d(73.3034vw, 1093px, 0) rotate(-651deg) scale(0.7076);
                }
            }

            .main-bg-snow > .snowflake:nth-child(92) {
                opacity: 0.9949;
                transform: translate3d(35.1957vw, -30px, 0) rotate(0deg) scale(0.3487);
                animation: snowfall-92 13s -29s linear infinite;
            }

            @keyframes snowfall-92 {
                31.5% {
                    transform: translate3d(36.2298vw, 344.3px, 0) rotate(158deg) scale(0.3487);
                }
                to {
                    transform: translate3d(35.7128vw, 1093px, 0) rotate(502deg) scale(0.3487);
                }
            }

            .main-bg-snow > .snowflake:nth-child(93) {
                opacity: 0.7913;
                transform: translate3d(59.9277vw, -30px, 0) rotate(0deg) scale(0.8976);
                animation: snowfall-93 16s -15s linear infinite;
            }

            @keyframes snowfall-93 {
                60.699999999999996% {
                    transform: translate3d(67.9875vw, 663.5px, 0) rotate(-296deg) scale(0.8976);
                }
                to {
                    transform: translate3d(63.9576vw, 1093px, 0) rotate(-488deg) scale(0.8976);
                }
            }

            .main-bg-snow > .snowflake:nth-child(94) {
                opacity: 0.2274;
                transform: translate3d(0.443vw, -30px, 0) rotate(0deg) scale(0.8709);
                animation: snowfall-94 26s -25s linear infinite;
            }

            @keyframes snowfall-94 {
                65% {
                    transform: translate3d(-3.9585vw, 710.5px, 0) rotate(445deg) scale(0.8709);
                }
                to {
                    transform: translate3d(-1.7577vw, 1093px, 0) rotate(684deg) scale(0.8709);
                }
            }

            .main-bg-snow > .snowflake:nth-child(95) {
                opacity: 0.7312;
                transform: translate3d(19.6416vw, -30px, 0) rotate(0deg) scale(0.3523);
                animation: snowfall-95 23s -5s linear infinite;
            }

            @keyframes snowfall-95 {
                44% {
                    transform: translate3d(14.5155vw, 480.9px, 0) rotate(-305deg) scale(0.3523);
                }
                to {
                    transform: translate3d(17.0786vw, 1093px, 0) rotate(-693deg) scale(0.3523);
                }
            }

            .main-bg-snow > .snowflake:nth-child(96) {
                opacity: 0.5039;
                transform: translate3d(78.8681vw, -30px, 0) rotate(0deg) scale(0.9253);
                animation: snowfall-96 30s -11s linear infinite;
            }

            @keyframes snowfall-96 {
                59.699999999999996% {
                    transform: translate3d(77.8908vw, 652.5px, 0) rotate(396deg) scale(0.9253);
                }
                to {
                    transform: translate3d(78.3794vw, 1093px, 0) rotate(663deg) scale(0.9253);
                }
            }

            .main-bg-snow > .snowflake:nth-child(97) {
                opacity: 0.4636;
                transform: translate3d(65.3917vw, -30px, 0) rotate(0deg) scale(0.9353);
                animation: snowfall-97 21s -2s linear infinite;
            }

            @keyframes snowfall-97 {
                67.7% {
                    transform: translate3d(74.435vw, 740px, 0) rotate(-246deg) scale(0.9353);
                }
                to {
                    transform: translate3d(69.9133vw, 1093px, 0) rotate(-364deg) scale(0.9353);
                }
            }

            .main-bg-snow > .snowflake:nth-child(98) {
                opacity: 0.2319;
                transform: translate3d(81.8741vw, -30px, 0) rotate(0deg) scale(0.5283);
                animation: snowfall-98 14s -20s linear infinite;
            }

            @keyframes snowfall-98 {
                32.4% {
                    transform: translate3d(80.0106vw, 354.1px, 0) rotate(191deg) scale(0.5283);
                }
                to {
                    transform: translate3d(80.9424vw, 1093px, 0) rotate(588deg) scale(0.5283);
                }
            }

            .main-bg-snow > .snowflake:nth-child(99) {
                opacity: 0.3097;
                transform: translate3d(46.4684vw, -30px, 0) rotate(0deg) scale(0.7177);
                animation: snowfall-99 22s -23s linear infinite;
            }

            @keyframes snowfall-99 {
                55.7% {
                    transform: translate3d(43.5558vw, 608.8px, 0) rotate(-225deg) scale(0.7177);
                }
                to {
                    transform: translate3d(45.0121vw, 1093px, 0) rotate(-404deg) scale(0.7177);
                }
            }

            .main-bg-snow > .snowflake:nth-child(100) {
                opacity: 0.5147;
                transform: translate3d(27.5258vw, -30px, 0) rotate(0deg) scale(0.6794);
                animation: snowfall-100 23s -28s linear infinite;
            }

            @keyframes snowfall-100 {
                40.1% {
                    transform: translate3d(25.144vw, 438.3px, 0) rotate(-207deg) scale(0.6794);
                }
                to {
                    transform: translate3d(26.3349vw, 1093px, 0) rotate(-516deg) scale(0.6794);
                }
            }

            .main-bg-snow > .snowflake:nth-child(101) {
                opacity: 0.287;
                transform: translate3d(77.243vw, -30px, 0) rotate(0deg) scale(0.8864);
                animation: snowfall-101 23s -28s linear infinite;
            }

            @keyframes snowfall-101 {
                61.7% {
                    transform: translate3d(69.0668vw, 674.4px, 0) rotate(-299deg) scale(0.8864);
                }
                to {
                    transform: translate3d(73.1549vw, 1093px, 0) rotate(-485deg) scale(0.8864);
                }
            }

            .main-bg-snow > .snowflake:nth-child(102) {
                opacity: 0.6671;
                transform: translate3d(15.9034vw, -30px, 0) rotate(0deg) scale(0.3135);
                animation: snowfall-102 14s -25s linear infinite;
            }

            @keyframes snowfall-102 {
                40% {
                    transform: translate3d(15.8741vw, 437.2px, 0) rotate(180deg) scale(0.3135);
                }
                to {
                    transform: translate3d(15.8888vw, 1093px, 0) rotate(449deg) scale(0.3135);
                }
            }

            .main-bg-snow > .snowflake:nth-child(103) {
                opacity: 0.6625;
                transform: translate3d(67.6351vw, -30px, 0) rotate(0deg) scale(0.4943);
                animation: snowfall-103 13s -1s linear infinite;
            }

            @keyframes snowfall-103 {
                42% {
                    transform: translate3d(70.3519vw, 459.1px, 0) rotate(171deg) scale(0.4943);
                }
                to {
                    transform: translate3d(68.9935vw, 1093px, 0) rotate(408deg) scale(0.4943);
                }
            }

            .main-bg-snow > .snowflake:nth-child(104) {
                opacity: 0.4411;
                transform: translate3d(96.2444vw, -30px, 0) rotate(0deg) scale(0.8096);
                animation: snowfall-104 21s -2s linear infinite;
            }

            @keyframes snowfall-104 {
                66.2% {
                    transform: translate3d(104.0504vw, 723.6px, 0) rotate(367deg) scale(0.8096);
                }
                to {
                    transform: translate3d(100.1474vw, 1093px, 0) rotate(554deg) scale(0.8096);
                }
            }

            .main-bg-snow > .snowflake:nth-child(105) {
                opacity: 0.2589;
                transform: translate3d(78.6009vw, -30px, 0) rotate(0deg) scale(0.2878);
                animation: snowfall-105 25s -1s linear infinite;
            }

            @keyframes snowfall-105 {
                38.7% {
                    transform: translate3d(79.2934vw, 423px, 0) rotate(210deg) scale(0.2878);
                }
                to {
                    transform: translate3d(78.9471vw, 1093px, 0) rotate(543deg) scale(0.2878);
                }
            }

            .main-bg-snow > .snowflake:nth-child(106) {
                opacity: 0.9533;
                transform: translate3d(98.7425vw, -30px, 0) rotate(0deg) scale(0.3036);
                animation: snowfall-106 10s -8s linear infinite;
            }

            @keyframes snowfall-106 {
                60.099999999999994% {
                    transform: translate3d(98.0353vw, 656.9px, 0) rotate(-277deg) scale(0.3036);
                }
                to {
                    transform: translate3d(98.3889vw, 1093px, 0) rotate(-461deg) scale(0.3036);
                }
            }

            .main-bg-snow > .snowflake:nth-child(107) {
                opacity: 0.3337;
                transform: translate3d(84.3374vw, -30px, 0) rotate(0deg) scale(0.9001);
                animation: snowfall-107 18s -28s linear infinite;
            }

            @keyframes snowfall-107 {
                31% {
                    transform: translate3d(83.7677vw, 338.8px, 0) rotate(114deg) scale(0.9001);
                }
                to {
                    transform: translate3d(84.0526vw, 1093px, 0) rotate(369deg) scale(0.9001);
                }
            }

            .main-bg-snow > .snowflake:nth-child(108) {
                opacity: 0.6307;
                transform: translate3d(27.6475vw, -30px, 0) rotate(0deg) scale(0.3042);
                animation: snowfall-108 24s -24s linear infinite;
            }

            @keyframes snowfall-108 {
                70.8% {
                    transform: translate3d(25.1698vw, 773.8px, 0) rotate(-290deg) scale(0.3042);
                }
                to {
                    transform: translate3d(26.4087vw, 1093px, 0) rotate(-410deg) scale(0.3042);
                }
            }

            .main-bg-snow > .snowflake:nth-child(109) {
                opacity: 0.3724;
                transform: translate3d(81.3403vw, -30px, 0) rotate(0deg) scale(0.2478);
                animation: snowfall-109 13s -10s linear infinite;
            }

            @keyframes snowfall-109 {
                77.4% {
                    transform: translate3d(89.8929vw, 846px, 0) rotate(-457deg) scale(0.2478);
                }
                to {
                    transform: translate3d(85.6166vw, 1093px, 0) rotate(-591deg) scale(0.2478);
                }
            }

            .main-bg-snow > .snowflake:nth-child(110) {
                opacity: 0.3785;
                transform: translate3d(26.4104vw, -30px, 0) rotate(0deg) scale(0.3536);
                animation: snowfall-110 26s -3s linear infinite;
            }

            @keyframes snowfall-110 {
                50% {
                    transform: translate3d(32.589vw, 546.5px, 0) rotate(330deg) scale(0.3536);
                }
                to {
                    transform: translate3d(29.4997vw, 1093px, 0) rotate(660deg) scale(0.3536);
                }
            }

            .main-bg-snow > .snowflake:nth-child(111) {
                opacity: 0.6091;
                transform: translate3d(99.7793vw, -30px, 0) rotate(0deg) scale(0.8695);
                animation: snowfall-111 23s -1s linear infinite;
            }

            @keyframes snowfall-111 {
                44.1% {
                    transform: translate3d(108.2429vw, 482px, 0) rotate(-202deg) scale(0.8695);
                }
                to {
                    transform: translate3d(104.0111vw, 1093px, 0) rotate(-459deg) scale(0.8695);
                }
            }

            .main-bg-snow > .snowflake:nth-child(112) {
                opacity: 0.9581;
                transform: translate3d(80.3254vw, -30px, 0) rotate(0deg) scale(0.4827);
                animation: snowfall-112 11s -12s linear infinite;
            }

            @keyframes snowfall-112 {
                38.5% {
                    transform: translate3d(72.5934vw, 420.8px, 0) rotate(255deg) scale(0.4827);
                }
                to {
                    transform: translate3d(76.4594vw, 1093px, 0) rotate(662deg) scale(0.4827);
                }
            }

            .main-bg-snow > .snowflake:nth-child(113) {
                opacity: 0.3841;
                transform: translate3d(25.7048vw, -30px, 0) rotate(0deg) scale(0.4656);
                animation: snowfall-113 16s -3s linear infinite;
            }

            @keyframes snowfall-113 {
                37.7% {
                    transform: translate3d(26.3742vw, 412.1px, 0) rotate(-240deg) scale(0.4656);
                }
                to {
                    transform: translate3d(26.0395vw, 1093px, 0) rotate(-637deg) scale(0.4656);
                }
            }

            .main-bg-snow > .snowflake:nth-child(114) {
                opacity: 0.2725;
                transform: translate3d(85.8591vw, -30px, 0) rotate(0deg) scale(0.5579);
                animation: snowfall-114 21s -28s linear infinite;
            }

            @keyframes snowfall-114 {
                45% {
                    transform: translate3d(84.8932vw, 491.9px, 0) rotate(282deg) scale(0.5579);
                }
                to {
                    transform: translate3d(85.3762vw, 1093px, 0) rotate(626deg) scale(0.5579);
                }
            }

            .main-bg-snow > .snowflake:nth-child(115) {
                opacity: 0.4491;
                transform: translate3d(96.2196vw, -30px, 0) rotate(0deg) scale(0.7069);
                animation: snowfall-115 19s 0s linear infinite;
            }

            @keyframes snowfall-115 {
                47.5% {
                    transform: translate3d(98.3884vw, 519.2px, 0) rotate(253deg) scale(0.7069);
                }
                to {
                    transform: translate3d(97.304vw, 1093px, 0) rotate(533deg) scale(0.7069);
                }
            }

            .main-bg-snow > .snowflake:nth-child(116) {
                opacity: 0.9141;
                transform: translate3d(54.058vw, -30px, 0) rotate(0deg) scale(0.7381);
                animation: snowfall-116 11s -22s linear infinite;
            }

            @keyframes snowfall-116 {
                45.7% {
                    transform: translate3d(57.1695vw, 499.5px, 0) rotate(316deg) scale(0.7381);
                }
                to {
                    transform: translate3d(55.6138vw, 1093px, 0) rotate(691deg) scale(0.7381);
                }
            }

            .main-bg-snow > .snowflake:nth-child(117) {
                opacity: 0.2691;
                transform: translate3d(95.6475vw, -30px, 0) rotate(0deg) scale(0.3123);
                animation: snowfall-117 21s -6s linear infinite;
            }

            @keyframes snowfall-117 {
                78% {
                    transform: translate3d(101.5236vw, 852.5px, 0) rotate(344deg) scale(0.3123);
                }
                to {
                    transform: translate3d(98.5856vw, 1093px, 0) rotate(441deg) scale(0.3123);
                }
            }

            .main-bg-snow > .snowflake:nth-child(118) {
                opacity: 0.481;
                transform: translate3d(83.3007vw, -30px, 0) rotate(0deg) scale(0.9977);
                animation: snowfall-118 22s -27s linear infinite;
            }

            @keyframes snowfall-118 {
                57.8% {
                    transform: translate3d(73.8606vw, 631.8px, 0) rotate(-282deg) scale(0.9977);
                }
                to {
                    transform: translate3d(78.5807vw, 1093px, 0) rotate(-488deg) scale(0.9977);
                }
            }

            .main-bg-snow > .snowflake:nth-child(119) {
                opacity: 0.9714;
                transform: translate3d(92.8269vw, -30px, 0) rotate(0deg) scale(0.9465);
                animation: snowfall-119 27s -16s linear infinite;
            }

            @keyframes snowfall-119 {
                31.6% {
                    transform: translate3d(86.7504vw, 345.4px, 0) rotate(-204deg) scale(0.9465);
                }
                to {
                    transform: translate3d(89.7886vw, 1093px, 0) rotate(-644deg) scale(0.9465);
                }
            }

            .main-bg-snow > .snowflake:nth-child(120) {
                opacity: 0.6445;
                transform: translate3d(16.943vw, -30px, 0) rotate(0deg) scale(0.8947);
                animation: snowfall-120 13s -21s linear infinite;
            }

            @keyframes snowfall-120 {
                56.99999999999999% {
                    transform: translate3d(9.6318vw, 623px, 0) rotate(352deg) scale(0.8947);
                }
                to {
                    transform: translate3d(13.2874vw, 1093px, 0) rotate(618deg) scale(0.8947);
                }
            }

            .main-bg-snow > .snowflake:nth-child(121) {
                opacity: 0.6159;
                transform: translate3d(42.852vw, -30px, 0) rotate(0deg) scale(0.681);
                animation: snowfall-121 15s -1s linear infinite;
            }

            @keyframes snowfall-121 {
                46.2% {
                    transform: translate3d(34.5232vw, 505px, 0) rotate(-197deg) scale(0.681);
                }
                to {
                    transform: translate3d(38.6876vw, 1093px, 0) rotate(-426deg) scale(0.681);
                }
            }

            .main-bg-snow > .snowflake:nth-child(122) {
                opacity: 0.4671;
                transform: translate3d(40.9849vw, -30px, 0) rotate(0deg) scale(0.8906);
                animation: snowfall-122 10s -19s linear infinite;
            }

            @keyframes snowfall-122 {
                77.10000000000001% {
                    transform: translate3d(35.3456vw, 842.7px, 0) rotate(-375deg) scale(0.8906);
                }
                to {
                    transform: translate3d(38.1653vw, 1093px, 0) rotate(-487deg) scale(0.8906);
                }
            }

            .main-bg-snow > .snowflake:nth-child(123) {
                opacity: 0.4754;
                transform: translate3d(21.4194vw, -30px, 0) rotate(0deg) scale(0.5722);
                animation: snowfall-123 13s -30s linear infinite;
            }

            @keyframes snowfall-123 {
                68.7% {
                    transform: translate3d(23.8893vw, 750.9px, 0) rotate(-266deg) scale(0.5722);
                }
                to {
                    transform: translate3d(22.6544vw, 1093px, 0) rotate(-387deg) scale(0.5722);
                }
            }

            .main-bg-snow > .snowflake:nth-child(124) {
                opacity: 0.5613;
                transform: translate3d(28.1567vw, -30px, 0) rotate(0deg) scale(0.8632);
                animation: snowfall-124 24s -24s linear infinite;
            }

            @keyframes snowfall-124 {
                48.8% {
                    transform: translate3d(26.0028vw, 533.4px, 0) rotate(-245deg) scale(0.8632);
                }
                to {
                    transform: translate3d(27.0798vw, 1093px, 0) rotate(-503deg) scale(0.8632);
                }
            }

            .main-bg-snow > .snowflake:nth-child(125) {
                opacity: 0.7588;
                transform: translate3d(8.2635vw, -30px, 0) rotate(0deg) scale(0.2261);
                animation: snowfall-125 14s -3s linear infinite;
            }

            @keyframes snowfall-125 {
                32.1% {
                    transform: translate3d(18.2227vw, 350.9px, 0) rotate(203deg) scale(0.2261);
                }
                to {
                    transform: translate3d(13.2431vw, 1093px, 0) rotate(631deg) scale(0.2261);
                }
            }

            .main-bg-snow > .snowflake:nth-child(126) {
                opacity: 0.6265;
                transform: translate3d(2.7024vw, -30px, 0) rotate(0deg) scale(0.3288);
                animation: snowfall-126 16s -4s linear infinite;
            }

            @keyframes snowfall-126 {
                54.300000000000004% {
                    transform: translate3d(1.2029vw, 593.5px, 0) rotate(206deg) scale(0.3288);
                }
                to {
                    transform: translate3d(1.9526vw, 1093px, 0) rotate(379deg) scale(0.3288);
                }
            }

            .main-bg-snow > .snowflake:nth-child(127) {
                opacity: 0.7461;
                transform: translate3d(33.6945vw, -30px, 0) rotate(0deg) scale(0.5589);
                animation: snowfall-127 15s -21s linear infinite;
            }

            @keyframes snowfall-127 {
                67.5% {
                    transform: translate3d(32.6236vw, 737.8px, 0) rotate(332deg) scale(0.5589);
                }
                to {
                    transform: translate3d(33.1591vw, 1093px, 0) rotate(492deg) scale(0.5589);
                }
            }

            .main-bg-snow > .snowflake:nth-child(128) {
                opacity: 0.8504;
                transform: translate3d(50.3844vw, -30px, 0) rotate(0deg) scale(0.2935);
                animation: snowfall-128 21s -23s linear infinite;
            }

            @keyframes snowfall-128 {
                45.6% {
                    transform: translate3d(59.9378vw, 498.4px, 0) rotate(306deg) scale(0.2935);
                }
                to {
                    transform: translate3d(55.1611vw, 1093px, 0) rotate(672deg) scale(0.2935);
                }
            }

            .main-bg-snow > .snowflake:nth-child(129) {
                opacity: 0.334;
                transform: translate3d(38.3099vw, -30px, 0) rotate(0deg) scale(0.7412);
                animation: snowfall-129 23s -26s linear infinite;
            }

            @keyframes snowfall-129 {
                37.5% {
                    transform: translate3d(40.7623vw, 409.9px, 0) rotate(-156deg) scale(0.7412);
                }
                to {
                    transform: translate3d(39.5361vw, 1093px, 0) rotate(-417deg) scale(0.7412);
                }
            }

            .main-bg-snow > .snowflake:nth-child(130) {
                opacity: 0.427;
                transform: translate3d(66.3474vw, -30px, 0) rotate(0deg) scale(0.8531);
                animation: snowfall-130 29s -25s linear infinite;
            }

            @keyframes snowfall-130 {
                30.7% {
                    transform: translate3d(57.0104vw, 335.6px, 0) rotate(171deg) scale(0.8531);
                }
                to {
                    transform: translate3d(61.6789vw, 1093px, 0) rotate(558deg) scale(0.8531);
                }
            }

            .main-bg-snow > .snowflake:nth-child(131) {
                opacity: 0.9501;
                transform: translate3d(19.1245vw, -30px, 0) rotate(0deg) scale(0.239);
                animation: snowfall-131 11s -21s linear infinite;
            }

            @keyframes snowfall-131 {
                66.5% {
                    transform: translate3d(22.6849vw, 726.8px, 0) rotate(245deg) scale(0.239);
                }
                to {
                    transform: translate3d(20.9047vw, 1093px, 0) rotate(368deg) scale(0.239);
                }
            }

            .main-bg-snow > .snowflake:nth-child(132) {
                opacity: 0.8805;
                transform: translate3d(91.1414vw, -30px, 0) rotate(0deg) scale(0.5743);
                animation: snowfall-132 19s -7s linear infinite;
            }

            @keyframes snowfall-132 {
                71.89999999999999% {
                    transform: translate3d(95.843vw, 785.9px, 0) rotate(452deg) scale(0.5743);
                }
                to {
                    transform: translate3d(93.4922vw, 1093px, 0) rotate(629deg) scale(0.5743);
                }
            }

            .main-bg-snow > .snowflake:nth-child(133) {
                opacity: 0.7414;
                transform: translate3d(89.5924vw, -30px, 0) rotate(0deg) scale(0.5936);
                animation: snowfall-133 28s -20s linear infinite;
            }

            @keyframes snowfall-133 {
                79.2% {
                    transform: translate3d(87.1794vw, 865.7px, 0) rotate(-382deg) scale(0.5936);
                }
                to {
                    transform: translate3d(88.3859vw, 1093px, 0) rotate(-482deg) scale(0.5936);
                }
            }

            .main-bg-snow > .snowflake:nth-child(134) {
                opacity: 0.7883;
                transform: translate3d(87.6772vw, -30px, 0) rotate(0deg) scale(0.854);
                animation: snowfall-134 25s -10s linear infinite;
            }

            @keyframes snowfall-134 {
                50.5% {
                    transform: translate3d(96.6469vw, 552px, 0) rotate(-191deg) scale(0.854);
                }
                to {
                    transform: translate3d(92.162vw, 1093px, 0) rotate(-379deg) scale(0.854);
                }
            }

            .main-bg-snow > .snowflake:nth-child(135) {
                opacity: 0.3583;
                transform: translate3d(22.6036vw, -30px, 0) rotate(0deg) scale(0.4699);
                animation: snowfall-135 23s -22s linear infinite;
            }

            @keyframes snowfall-135 {
                69% {
                    transform: translate3d(24.9025vw, 754.2px, 0) rotate(-316deg) scale(0.4699);
                }
                to {
                    transform: translate3d(23.7531vw, 1093px, 0) rotate(-458deg) scale(0.4699);
                }
            }

            .main-bg-snow > .snowflake:nth-child(136) {
                opacity: 0.5928;
                transform: translate3d(58.8729vw, -30px, 0) rotate(0deg) scale(0.7107);
                animation: snowfall-136 13s -23s linear infinite;
            }

            @keyframes snowfall-136 {
                68.30000000000001% {
                    transform: translate3d(54.483vw, 746.5px, 0) rotate(-265deg) scale(0.7107);
                }
                to {
                    transform: translate3d(56.678vw, 1093px, 0) rotate(-388deg) scale(0.7107);
                }
            }

            .main-bg-snow > .snowflake:nth-child(137) {
                opacity: 0.3158;
                transform: translate3d(91.1892vw, -30px, 0) rotate(0deg) scale(0.7865);
                animation: snowfall-137 17s -13s linear infinite;
            }

            @keyframes snowfall-137 {
                42% {
                    transform: translate3d(93.1695vw, 459.1px, 0) rotate(-180deg) scale(0.7865);
                }
                to {
                    transform: translate3d(92.1794vw, 1093px, 0) rotate(-429deg) scale(0.7865);
                }
            }

            .main-bg-snow > .snowflake:nth-child(138) {
                opacity: 0.7162;
                transform: translate3d(34.8894vw, -30px, 0) rotate(0deg) scale(0.5415);
                animation: snowfall-138 22s -17s linear infinite;
            }

            @keyframes snowfall-138 {
                74.7% {
                    transform: translate3d(36.0849vw, 816.5px, 0) rotate(369deg) scale(0.5415);
                }
                to {
                    transform: translate3d(35.4872vw, 1093px, 0) rotate(494deg) scale(0.5415);
                }
            }

            .main-bg-snow > .snowflake:nth-child(139) {
                opacity: 0.8104;
                transform: translate3d(36.4016vw, -30px, 0) rotate(0deg) scale(0.8698);
                animation: snowfall-139 14s -5s linear infinite;
            }

            @keyframes snowfall-139 {
                43.2% {
                    transform: translate3d(45.8281vw, 472.2px, 0) rotate(-248deg) scale(0.8698);
                }
                to {
                    transform: translate3d(41.1149vw, 1093px, 0) rotate(-574deg) scale(0.8698);
                }
            }

            .main-bg-snow > .snowflake:nth-child(140) {
                opacity: 0.9198;
                transform: translate3d(45.5947vw, -30px, 0) rotate(0deg) scale(0.6687);
                animation: snowfall-140 18s -25s linear infinite;
            }

            @keyframes snowfall-140 {
                54.6% {
                    transform: translate3d(36.9137vw, 596.8px, 0) rotate(346deg) scale(0.6687);
                }
                to {
                    transform: translate3d(41.2542vw, 1093px, 0) rotate(633deg) scale(0.6687);
                }
            }

            .main-bg-snow > .snowflake:nth-child(141) {
                opacity: 0.5369;
                transform: translate3d(58.1186vw, -30px, 0) rotate(0deg) scale(0.7352);
                animation: snowfall-141 24s -5s linear infinite;
            }

            @keyframes snowfall-141 {
                49.9% {
                    transform: translate3d(64.2336vw, 545.4px, 0) rotate(-264deg) scale(0.7352);
                }
                to {
                    transform: translate3d(61.1761vw, 1093px, 0) rotate(-530deg) scale(0.7352);
                }
            }

            .main-bg-snow > .snowflake:nth-child(142) {
                opacity: 0.5037;
                transform: translate3d(44.3152vw, -30px, 0) rotate(0deg) scale(0.8072);
                animation: snowfall-142 23s -22s linear infinite;
            }

            @keyframes snowfall-142 {
                62.8% {
                    transform: translate3d(38.6657vw, 686.4px, 0) rotate(286deg) scale(0.8072);
                }
                to {
                    transform: translate3d(41.4904vw, 1093px, 0) rotate(455deg) scale(0.8072);
                }
            }

            .main-bg-snow > .snowflake:nth-child(143) {
                opacity: 0.3033;
                transform: translate3d(37.9187vw, -30px, 0) rotate(0deg) scale(0.5752);
                animation: snowfall-143 25s -19s linear infinite;
            }

            @keyframes snowfall-143 {
                68.5% {
                    transform: translate3d(31.0091vw, 748.7px, 0) rotate(384deg) scale(0.5752);
                }
                to {
                    transform: translate3d(34.4639vw, 1093px, 0) rotate(560deg) scale(0.5752);
                }
            }

            .main-bg-snow > .snowflake:nth-child(144) {
                opacity: 0.6871;
                transform: translate3d(40.532vw, -30px, 0) rotate(0deg) scale(0.3153);
                animation: snowfall-144 21s -27s linear infinite;
            }

            @keyframes snowfall-144 {
                32.300000000000004% {
                    transform: translate3d(37.0567vw, 353px, 0) rotate(-185deg) scale(0.3153);
                }
                to {
                    transform: translate3d(38.7943vw, 1093px, 0) rotate(-572deg) scale(0.3153);
                }
            }

            .main-bg-snow > .snowflake:nth-child(145) {
                opacity: 0.9125;
                transform: translate3d(10.4416vw, -30px, 0) rotate(0deg) scale(0.4863);
                animation: snowfall-145 29s -14s linear infinite;
            }

            @keyframes snowfall-145 {
                77.10000000000001% {
                    transform: translate3d(3.7305vw, 842.7px, 0) rotate(-423deg) scale(0.4863);
                }
                to {
                    transform: translate3d(7.0861vw, 1093px, 0) rotate(-549deg) scale(0.4863);
                }
            }

            .main-bg-snow > .snowflake:nth-child(146) {
                opacity: 0.7676;
                transform: translate3d(97.4365vw, -30px, 0) rotate(0deg) scale(0.3134);
                animation: snowfall-146 20s -16s linear infinite;
            }

            @keyframes snowfall-146 {
                60.5% {
                    transform: translate3d(94.682vw, 661.3px, 0) rotate(308deg) scale(0.3134);
                }
                to {
                    transform: translate3d(96.0592vw, 1093px, 0) rotate(509deg) scale(0.3134);
                }
            }

            .main-bg-snow > .snowflake:nth-child(147) {
                opacity: 0.6768;
                transform: translate3d(84.5707vw, -30px, 0) rotate(0deg) scale(0.8742);
                animation: snowfall-147 19s -10s linear infinite;
            }

            @keyframes snowfall-147 {
                48.4% {
                    transform: translate3d(75.3222vw, 529px, 0) rotate(-291deg) scale(0.8742);
                }
                to {
                    transform: translate3d(79.9465vw, 1093px, 0) rotate(-601deg) scale(0.8742);
                }
            }

            .main-bg-snow > .snowflake:nth-child(148) {
                opacity: 0.2613;
                transform: translate3d(23.7923vw, -30px, 0) rotate(0deg) scale(0.4702);
                animation: snowfall-148 11s -20s linear infinite;
            }

            @keyframes snowfall-148 {
                50.5% {
                    transform: translate3d(18.8476vw, 552px, 0) rotate(-331deg) scale(0.4702);
                }
                to {
                    transform: translate3d(21.32vw, 1093px, 0) rotate(-655deg) scale(0.4702);
                }
            }

            .main-bg-snow > .snowflake:nth-child(149) {
                opacity: 0.2577;
                transform: translate3d(46.3095vw, -30px, 0) rotate(0deg) scale(0.4955);
                animation: snowfall-149 30s -24s linear infinite;
            }

            @keyframes snowfall-149 {
                31.4% {
                    transform: translate3d(48.6505vw, 343.2px, 0) rotate(156deg) scale(0.4955);
                }
                to {
                    transform: translate3d(47.48vw, 1093px, 0) rotate(496deg) scale(0.4955);
                }
            }

            .main-bg-snow > .snowflake:nth-child(150) {
                opacity: 0.4918;
                transform: translate3d(72.9599vw, -30px, 0) rotate(0deg) scale(0.6614);
                animation: snowfall-150 16s -13s linear infinite;
            }

            @keyframes snowfall-150 {
                59.9% {
                    transform: translate3d(71.5109vw, 654.7px, 0) rotate(297deg) scale(0.6614);
                }
                to {
                    transform: translate3d(72.2354vw, 1093px, 0) rotate(495deg) scale(0.6614);
                }
            }

            .main-bg-snow > .snowflake:nth-child(151) {
                opacity: 0.6346;
                transform: translate3d(78.6071vw, -30px, 0) rotate(0deg) scale(0.3006);
                animation: snowfall-151 22s -27s linear infinite;
            }

            @keyframes snowfall-151 {
                53.5% {
                    transform: translate3d(74.2985vw, 584.8px, 0) rotate(325deg) scale(0.3006);
                }
                to {
                    transform: translate3d(76.4528vw, 1093px, 0) rotate(607deg) scale(0.3006);
                }
            }

            .main-bg-snow > .snowflake:nth-child(152) {
                opacity: 0.5758;
                transform: translate3d(84.0671vw, -30px, 0) rotate(0deg) scale(0.9366);
                animation: snowfall-152 28s -20s linear infinite;
            }

            @keyframes snowfall-152 {
                74.7% {
                    transform: translate3d(79.1793vw, 816.5px, 0) rotate(297deg) scale(0.9366);
                }
                to {
                    transform: translate3d(81.6232vw, 1093px, 0) rotate(398deg) scale(0.9366);
                }
            }

            .main-bg-snow > .snowflake:nth-child(153) {
                opacity: 0.8943;
                transform: translate3d(60.4635vw, -30px, 0) rotate(0deg) scale(0.6764);
                animation: snowfall-153 19s -27s linear infinite;
            }

            @keyframes snowfall-153 {
                69.19999999999999% {
                    transform: translate3d(64.1497vw, 756.4px, 0) rotate(280deg) scale(0.6764);
                }
                to {
                    transform: translate3d(62.3066vw, 1093px, 0) rotate(405deg) scale(0.6764);
                }
            }

            .main-bg-snow > .snowflake:nth-child(154) {
                opacity: 0.6976;
                transform: translate3d(24.581vw, -30px, 0) rotate(0deg) scale(0.5063);
                animation: snowfall-154 28s -28s linear infinite;
            }

            @keyframes snowfall-154 {
                70.3% {
                    transform: translate3d(21.8873vw, 768.4px, 0) rotate(-370deg) scale(0.5063);
                }
                to {
                    transform: translate3d(23.2342vw, 1093px, 0) rotate(-527deg) scale(0.5063);
                }
            }

            .main-bg-snow > .snowflake:nth-child(155) {
                opacity: 0.9;
                transform: translate3d(49.7729vw, -30px, 0) rotate(0deg) scale(0.3358);
                animation: snowfall-155 13s -18s linear infinite;
            }

            @keyframes snowfall-155 {
                53.400000000000006% {
                    transform: translate3d(51.1136vw, 583.7px, 0) rotate(-340deg) scale(0.3358);
                }
                to {
                    transform: translate3d(50.4433vw, 1093px, 0) rotate(-637deg) scale(0.3358);
                }
            }

            .main-bg-snow > .snowflake:nth-child(156) {
                opacity: 0.6607;
                transform: translate3d(1.7864vw, -30px, 0) rotate(0deg) scale(0.7675);
                animation: snowfall-156 10s -17s linear infinite;
            }

            @keyframes snowfall-156 {
                50.9% {
                    transform: translate3d(10.8816vw, 556.3px, 0) rotate(-338deg) scale(0.7675);
                }
                to {
                    transform: translate3d(6.334vw, 1093px, 0) rotate(-665deg) scale(0.7675);
                }
            }

            .main-bg-snow > .snowflake:nth-child(157) {
                opacity: 0.2219;
                transform: translate3d(31.165vw, -30px, 0) rotate(0deg) scale(0.7523);
                animation: snowfall-157 22s -13s linear infinite;
            }

            @keyframes snowfall-157 {
                46.400000000000006% {
                    transform: translate3d(38.3564vw, 507.2px, 0) rotate(-225deg) scale(0.7523);
                }
                to {
                    transform: translate3d(34.7607vw, 1093px, 0) rotate(-485deg) scale(0.7523);
                }
            }

            .main-bg-snow > .snowflake:nth-child(158) {
                opacity: 0.7597;
                transform: translate3d(12.1912vw, -30px, 0) rotate(0deg) scale(0.9117);
                animation: snowfall-158 16s -9s linear infinite;
            }

            @keyframes snowfall-158 {
                50% {
                    transform: translate3d(15.5541vw, 546.5px, 0) rotate(310deg) scale(0.9117);
                }
                to {
                    transform: translate3d(13.8727vw, 1093px, 0) rotate(619deg) scale(0.9117);
                }
            }

            .main-bg-snow > .snowflake:nth-child(159) {
                opacity: 0.6744;
                transform: translate3d(9.7479vw, -30px, 0) rotate(0deg) scale(0.9274);
                animation: snowfall-159 17s -23s linear infinite;
            }

            @keyframes snowfall-159 {
                39.6% {
                    transform: translate3d(17.5822vw, 432.8px, 0) rotate(268deg) scale(0.9274);
                }
                to {
                    transform: translate3d(13.6651vw, 1093px, 0) rotate(678deg) scale(0.9274);
                }
            }

            .main-bg-snow > .snowflake:nth-child(160) {
                opacity: 0.3016;
                transform: translate3d(63.6269vw, -30px, 0) rotate(0deg) scale(0.736);
                animation: snowfall-160 17s -8s linear infinite;
            }

            @keyframes snowfall-160 {
                32.5% {
                    transform: translate3d(72.5557vw, 355.2px, 0) rotate(183deg) scale(0.736);
                }
                to {
                    transform: translate3d(68.0913vw, 1093px, 0) rotate(564deg) scale(0.736);
                }
            }
        </style>
    @endif
    @stack('css')
    @sectionMissing('highlighting_style')
        <style id="highlighting_style"></style>
    @endif
    @hasSection('highlighting_style')
        @yield('highlighting_style')
    @endif
</head>
<body @class(['index' => request()->routeIs('*.home'), 'order' => request()->routeIs('*.order')])>
{{$slot}}
@include('includes.footer')
@includeWhen(!request()->hasCookie('allowCookie'),'includes.cookies_accept')
<link rel="stylesheet" type="text/css" href="{{asset('/assets/css/svg_min.css')}}">
@stack('js')
</body>
</html>
