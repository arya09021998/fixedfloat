<template id="popup_confirm_email">
    <div class="popup-content" style="max-width: 27em;">
        <form id="change_email_form" class="popup-profile-changepswd">
            <h3>{{__('Change email')}}</h3>
            <div>
                <p>{{__('An email containing a link to verify your email address will be sent to your email address')}} <b>{{$user->email}}</b>.</p>
            </div>
            <div class="auth-wrap-btn">
                <button class="btn submit" type="button" id="confirm_email_submit" disabled="" data-captcha-loading="{{__('Loading CAPTCHA...')}}">{{__('Submit')}}</button>
            </div>
        </form>
    </div>
</template>
