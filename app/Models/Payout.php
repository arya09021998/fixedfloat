<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * App\Models\Payout
 *
 * @property int $id
 * @property int $user_id
 * @property string $btc_address
 * @property string|null $amount
 * @property string $status
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\User $user
 * @method static \Illuminate\Database\Eloquent\Builder|Payout newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Payout newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Payout query()
 * @method static \Illuminate\Database\Eloquent\Builder|Payout whereAmount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Payout whereBtcAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Payout whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Payout whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Payout whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Payout whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Payout whereUserId($value)
 * @mixin \Eloquent
 */
class Payout extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
