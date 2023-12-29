<x-app-layout>
    @include('includes.header')
    @includeWhen(!auth()->check(),'includes.auth')
    <main>
        <div class="wrapper">
            <h1>{{__('About us')}}</h1>
            <section class="about-desc darkbg">
                <span class="logo"></span>
                <p>{{__('The larger the user base, the more competitive advantages new distributed ledger technologies provide. A fixed floating balance provides you with the tools to make full use of your digital assets through a simple and accessible platform.')}}</p>
            </section>
            <section class="about-advantage">
                <h2><span>{{__('Advantages')}}</span></h2>
                <div class="about-advantage-wrap">
                    <div><i class="ico adv-simple"></i>
                        <p>{{__('The maximum simplicity of making orders and the ability to choose a strategy will allow you to make quick and convenient transactions')}}</p>
                    </div>
                    <div><i class="ico adv-security"></i>
                        <p>{{__('We provide a secure exchange. You do not risk anything and you can immediately see the size of the commission')}}</p>
                    </div>
                    <div><i class="ico adv-automatic"></i>
                        <p>{{__('You can automatically create applications with maximum speed on any device')}}</p></div>
                </div>
            </section>
        </div>
        <section class="about-mission">
            <div class="wrapper">
                <div class="about-mission-wrap">
                    <div class="about-mission-bgstars"></div>
                    <div class="about-mission-img">
                        <div class="about-mission-hand-left"></div>
                        <div class="about-mission-hand-logo"></div>
                        <div class="about-mission-hand-right"></div>
                    </div>
                    <h2 class="center"><span>{{__('Mission')}}</span></h2>
                    <p>{{__('We are long-term players with a vision and want to become your reliable and trusted partners in the world of digital assets. Our mission is to simplify the application creation process with practical and scalable solutions that make products work for you.')}}</p>
                </div>
            </div>
        </section>

    </main>
</x-app-layout>
