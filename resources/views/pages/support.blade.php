<x-app-layout>
    @include('includes.header')
    @includeWhen(!auth()->check(),'includes.auth')
    <main>
        <div class="wrapper clrfix">
            <h1>{{__('Support')}}</h1>
            {!! __('Support Content') !!}
        </div>
    </main>

</x-app-layout>
