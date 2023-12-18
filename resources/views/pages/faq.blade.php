<x-app-layout>
    @include('includes.header')
    @includeWhen(!auth()->check(),'includes.auth')
    <main>
        <div class="wrapper clrfix">
            <h1>{{__('FAQ')}}</h1>
            {!! __('FAQ Content') !!}
        </div>
    </main>
    @push('js')
        <script type="text/javascript">
            document.addEventListener("DOMContentLoaded", function() {
                let F = UI.func;

                F.on('faq_wrapper', 'click', 'ol > li > h4', function(e) {
                    let li = this.parentNode;
                    let div = li.querySelector('div.faq-inner');
                    let h = UI.func.round(div.getBoundingClientRect().height, 4);
                    let is = F.hasClass(li, 'active');
                    div.parentNode.style.height = h + 'px';
                    F.remClass(li.closest('div[data-section]').querySelectorAll('li'), 'active');
                    F.togClass(li, 'active', !is);
                })

                UI.radio('faq_tabs').change(function() {
                    let items = F.id('faq_wrapper').querySelectorAll('div[data-section]');
                    F.remClass(items, 'active');
                    let curr = F.id('faq_wrapper').querySelector('div[data-section="'+this.value+'"]');
                    F.addClass(curr, 'active');
                })

            })
        </script>
    @endpush
</x-app-layout>
