<template id="popup_change_email">
    <div class="popup-content" style="max-width: 27em;">
        <form id="change_email_form" class="popup-profile-changepswd">
            <h3>{{__('Change email')}}</h3>
            <div>
                <input name="pswd" required="" type="password" value="" data-label="{{__('Current password')}}" data-error-empty="{{__('This is a required field')}}" data-error-invalid="{{__('Wrong password')}}">
                <input name="email" required="" type="text" value="" data-label="{{__('New email')}}" data-error-empty="{{__('This is a required field')}}" data-error-invalid="{{__('Email entered is not a valid email')}}" data-error-exists="{{__('An account with this email already exists.')}}">
            </div>
            <div class="auth-wrap-btn">
                <button class="btn submit" type="button" id="change_email_submit" disabled="" data-captcha-loading="{{__('Loading CAPTCHA...')}}">{{__('Submit')}}</button>
            </div>
        </form>
    </div>
</template>
