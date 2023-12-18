<x-app-layout>
    @include('includes.header')
    @includeWhen(!auth()->check(),'includes.auth')
    <main>
        <div class="wrapper">
            <section class="content">
                <h1>{{__('Privacy policy')}}</h1>
                {!! __('Privacy Content') !!}
            </section>
        </div>
    </main>
</x-app-layout>
