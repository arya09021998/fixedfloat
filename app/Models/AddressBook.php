<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

/**
 * App\Models\AddressBook
 *
 * @property int $id
 * @property int $user_id
 * @property string $address
 * @property string $coin
 * @property string $network
 * @property string|null $tag
 * @property string $universal
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \App\Models\User $user
 * @method static \Illuminate\Database\Eloquent\Builder|AddressBook newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AddressBook newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|AddressBook query()
 * @method static \Illuminate\Database\Eloquent\Builder|AddressBook whereAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AddressBook whereCoin($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AddressBook whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AddressBook whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AddressBook whereNetwork($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AddressBook whereTag($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AddressBook whereUniversal($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AddressBook whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|AddressBook whereUserId($value)
 * @mixin \Eloquent
 */
class AddressBook extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }
}
