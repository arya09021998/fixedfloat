<template id="popup_change_pswd">
    <div class="popup-content" style="max-width: 27em;">
        <form id="change_pswd_form" class="popup-profile-changepswd">
            <h3>{{__('Change password')}}</h3>
            <div>
                <input name="pswd" required="" type="password" value="" data-label="{{__('Current password')}}" data-error-empty="{{__('This is a required field')}}" data-error-invalid="{{__('Wrong password')}}">
                <input name="newpswd" required="" type="password" value="" data-label="{{__('New password')}}" data-error-empty="{{__('This is a required field')}}" data-error-invalid="{{__('The password must contain at least one uppercase and one lowercase letter, one number, and contain at least 6 characters.')}}">
                <input name="repswd" required="" type="password" value="" data-label="{{__('Confirm Password')}}" data-error-empty="{{__('This is a required field')}}" data-error-invalid="{{__('Passwords do not match.')}}">
            </div>
            <div class="auth-wrap-btn">
                <button class="btn submit" type="button" id="change_pswd_submit">{{__('Submit')}}</button>
            </div>
        </form>
    </div>
</template>
