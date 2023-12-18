<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * App\Models\ReferralLink
 *
 * @property int $id
 * @property int $user_id
 * @property string $code
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\Order|null $orders
 * @property-read \App\Models\User $user
 * @method static \Illuminate\Database\Eloquent\Builder|ReferralLink newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ReferralLink newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|ReferralLink query()
 * @method static \Illuminate\Database\Eloquent\Builder|ReferralLink whereCode($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ReferralLink whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ReferralLink whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ReferralLink whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|ReferralLink whereUserId($value)
 * @mixin \Eloquent
 */
class ReferralLink extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function orders(): BelongsTo
    {
        return $this->belongsTo(Order::class);
    }
}
