<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasOneThrough;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * App\Models\Order
 *
 * @property int $id
 * @property string $num
 * @property int|null $user_id
 * @property int|null $referral_link_id
 * @property string $type
 * @property string $fromCcy
 * @property string $toCcy
 * @property string $fromAddress
 * @property string $toAddress
 * @property string $tz
 * @property string $ts
 * @property string $tt
 * @property string $fromQty
 * @property string|null $toQty
 * @property string|null $fromTxId
 * @property string|null $toTxId
 * @property int $fromConfirmation
 * @property int $toConfirmation
 * @property string $status
 * @property string|null $qrAddress
 * @property string|null $qrSum
 * @property string|null $fromReceiptTime
 * @property string|null $toReceiptTime
 * @property string|null $fromExecutionTime
 * @property string|null $toExecutionTime
 * @property string|null $ipAddress
 * @property string|null $userAgent
 * @property string|null $countryFlag
 * @property string|null $countryName
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\User|null $referrer
 * @property-read \App\Models\User|null $user
 * @method static \Illuminate\Database\Eloquent\Builder|Order newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Order newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Order onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Order query()
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereCountryFlag($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereCountryName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereFromAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereFromCcy($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereFromConfirmation($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereFromExecutionTime($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereFromQty($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereFromReceiptTime($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereFromTxId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereIpAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereNum($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereQrAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereQrSum($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereReferralLinkId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereToAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereToCcy($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereToConfirmation($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereToExecutionTime($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereToQty($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereToReceiptTime($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereToTxId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereTs($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereTt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereTz($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereUserAgent($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order whereUserId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Order withTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Order withoutTrashed()
 * @mixin \Eloquent
 */
class Order extends Model
{
    use HasFactory, SoftDeletes;

    protected $guarded = [];
    protected $appends = [];
    protected $casts = [];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function referrer(): HasOneThrough
    {
        return $this->hasOneThrough(User::class, ReferralLink::class, 'id', 'id', 'referral_link_id', 'user_id');
    }
}
