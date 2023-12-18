<x-app-layout>
    @include('includes.header')
    @includeWhen(!auth()->check(),'includes.auth')
    <main>
        <div class="wrapper">
            <section class="content">
                <h1>{{__('Terms of Service')}}</h1>
                {!! __('Terms Content') !!}
            </section>
        </div>
    </main>
</x-app-layout>
