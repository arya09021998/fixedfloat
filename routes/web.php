<?php

use App\Http\Controllers\AjaxController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\UserController;
use Illuminate\Routing\Router;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PageController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::group(['middleware' => ['ban_check', 'localization', 'track_last_active', 'ref']], function (Router $group) {
    $group->group(['as' => 'pages.'], function (Router $group) {
        foreach (array_merge([null => null], config('app.available_locales')) as $locale) {
            $group->get($locale . '/', [PageController::class, 'home'])->name(ltrim($locale . '.home', '.'));
            $group->get($locale . '/faq', [PageController::class, 'faq'])->name(ltrim($locale . '.faq', '.'));
            $group->get($locale . '/terms', [PageController::class, 'terms'])->name(ltrim($locale . '.terms', '.'));
            $group->get($locale . '/about', [PageController::class, 'about'])->name(ltrim($locale . '.about', '.'));
            $group->get($locale . '/support', [PageController::class, 'support'])->name(ltrim($locale . '.support', '.'));
            $group->get($locale . '/affiliate', [PageController::class, 'affiliate'])->name(ltrim($locale . '.affiliate', '.'));
            $group->get($locale . '/privacy-policy', [PageController::class, 'privacyPolicy'])->name(ltrim($locale . '.privacy-policy', '.'));
        }
    });
    $group->group(['prefix' => 'ajax', 'name' => 'ajax.'], function (Router $group) {
        $group->post('userAcceptCookies', [AjaxController::class, 'userAcceptCookies']);
        $group->post('userCaptchaInit', [AjaxController::class, 'userCaptchaInit']);
        $group->post('exchPrice', [AjaxController::class, 'exchPrice']);
        $group->post('exchCheckAddress', [AjaxController::class, 'exchCheckAddress']);
        $group->post('exchCreate', [AjaxController::class, 'exchCreate']);
        $group->post('userSignUp', [AjaxController::class, 'userSignUp']);
        $group->post('userSignIn', [AjaxController::class, 'userSignIn']);
        $group->post('userSignOut', [AjaxController::class, 'userSignOut']);
        $group->post('orderSetEmail', [AjaxController::class, 'orderSetEmail']);
        $group->post('orderAddressInfo', [AjaxController::class, 'orderAddressInfo']);
        $group->post('orderGetDetails', [AjaxController::class, 'orderGetDetails']);
        $group->post('orderSetEmergency', [AjaxController::class, 'orderSetEmergency']);
        $group->post('orderStatus', [AjaxController::class, 'orderStatus']);
        $group->post('userAddressBook', [AjaxController::class, 'userAddressBook'])->middleware('auth');
        $group->post('userAddressBookList', [AjaxController::class, 'userAddressBookList'])->middleware('auth');
        $group->post('userAddressFavoriteAdd', [AjaxController::class, 'userAddressFavoriteAdd'])->middleware('auth');
        $group->post('userAddressFavoriteDel', [AjaxController::class, 'userAddressFavoriteDel'])->middleware('auth');
        $group->post('userChangeEmail', [AjaxController::class, 'userChangeEmail'])->middleware('auth');
        $group->post('userChangePswd', [AjaxController::class, 'userChangePswd'])->middleware('auth');
        $group->post('userOrders', [AjaxController::class, 'userOrders'])->middleware('auth');
        $group->post('userAffiliateOrders', [AjaxController::class, 'userAffiliateOrders'])->middleware('auth');
        $group->post('userDeleteRefCode', [AjaxController::class, 'userDeleteRefCode'])->middleware('auth');
        $group->post('userGenerateRefCode', [AjaxController::class, 'userGenerateRefCode'])->middleware('auth');
        $group->post('userPayouts', [AjaxController::class, 'userPayouts'])->middleware('auth');
        $group->post('userPayoutCreate', [AjaxController::class, 'userPayoutCreate'])->middleware('auth');
        $group->post('userSwitchEmailNoticeOrders', [AjaxController::class, 'userSwitchEmailNoticeOrders'])->middleware('auth');
        $group->post('apikeyGenerate', [AjaxController::class, 'apikeyGenerate'])->middleware('auth');
        $group->post('apikeyGetSecret', [AjaxController::class, 'apikeyGetSecret'])->middleware('auth');
        $group->post('apikeyDelete', [AjaxController::class, 'apikeyDelete'])->middleware('auth');
        $group->post('userAddressFavorite', [AjaxController::class, 'userAddressFavorite'])->middleware('auth');
    });
    $group->group(['as' => 'user.'], function (Router $group) {
        foreach (array_merge([null => null], config('app.available_locales')) as $locale) {
            $group->get($locale . '/user/signin', [UserController::class, 'signIn'])->name(ltrim($locale . '.signIn', '.'))->middleware('guest');
            $group->get($locale . '/user/signup', [UserController::class, 'signUp'])->name(ltrim($locale . '.signUp', '.'))->middleware('guest');
            $group->get($locale . '/user/profile', [UserController::class, 'profile'])->name(ltrim($locale . '.profile', '.'))->middleware('auth');
            $group->get($locale . '/user/orders', [UserController::class, 'orders'])->name(ltrim($locale . '.orders', '.'))->middleware('auth');
            $group->get($locale . '/user/affiliate', [UserController::class, 'affiliate'])->name(ltrim($locale . '.affiliate', '.'))->middleware('auth');
            $group->get($locale . '/user/addressbook', [UserController::class, 'addressBook'])->name(ltrim($locale . '.addressBook', '.'))->middleware('auth');
            $group->get($locale . '/user/payouts', [UserController::class, 'payouts'])->name(ltrim($locale . '.payouts', '.'))->middleware('auth');
            $group->get($locale . '/user/apikey', [UserController::class, 'apiKey'])->name(ltrim($locale . '.apiKey', '.'))->middleware('auth');
            $group->get($locale . '/user/signout', [UserController::class, 'signOut'])->name(ltrim($locale . '.signOut', '.'))->middleware('auth');
        }
    });
    foreach (array_merge([null => null], config('app.available_locales')) as $locale) {
        $group->get($locale . '/order/{num}', OrderController::class)->name(ltrim($locale . '.order', '.'));
    }
});

require __DIR__ . '/admin.php';
