<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * App\Models\Coin
 *
 * @property int $id
 * @property string $name
 * @property bool $enabled
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Wallet> $wallets
 * @property-read int|null $wallets_count
 * @method static \Illuminate\Database\Eloquent\Builder|Coin newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Coin newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Coin query()
 * @method static \Illuminate\Database\Eloquent\Builder|Coin whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Coin whereEnabled($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Coin whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Coin whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Coin whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Coin extends Model
{
    use HasFactory;

    protected $guarded = [];
    protected $casts = ['enabled' => 'boolean'];

    public function wallets(): HasMany
    {
        return $this->hasMany(Wallet::class);
    }
}
