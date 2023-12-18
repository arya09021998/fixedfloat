<template id="tmpl_popup_api">
    <div class="popup-content popup-api-generate">
        <div id="popup_apikey_desc" class="popup-api-selection active">
            <h3>{{__('New API key')}}</h3>
            <p class="popup-api-desc">{{__('After clicking on the "Generate new API key" button, an API key will be generated. Getting the generated API secret will take 60 seconds. After generation, copy and save both values.')}}</p>
            <p class="popup-api-warning">{{__('If you have another key, it will be blocked.')}}</p>
        </div>
        <div id="popup_apikey_wait" class="popup-api-selection">
            <h3>{{__('API key generation in progress')}}</h3>
            <p style="margin-bottom: 1.7em;">{!! __('An API key will be generated in <b id="apikey_timer">60</b> seconds.') !!}<br><b>{{__('Do not close this page.')}}</b></p>
        </div>
        <div id="popup_apikey_done" class="popup-api-selection">
            <h3>{{__('Your new API key')}}</h3>
            <div class="popup-api-gen-ln">
                <input id="popup_apikey" required="" readonly="" type="text" value="" data-label="{{__('API key')}}" placeholder="{{__('Waiting to be generated')}}">
            </div>
            <div class="popup-api-gen-ln">
                <input id="popup_apisecret" required="" readonly="" type="text" value="" data-label="{{__('API secret')}}" placeholder="{{__('Waiting to be generated')}}">
            </div>
            <p class="popup-api-warning">{{__('Copy and save both values. API Secret cannot be retrieved and will only be displayed for one time. If you lose your API secret, you will need to create a new one as it cannot be recovered.')}}</p>
        </div>
        <div class="popup-api-gen-btn">
            <button id="popup_generate_api" class="btn" disabled="" data-captcha-loading="{{__('Loading CAPTCHA...')}}">{{__('Generate new API Key')}}</button>
            <button id="popup_generate_close" class="btn border cancel popup-close-btn">{{__('Close')}}</button>
        </div>
    </div>
</template>
