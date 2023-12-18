<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

/**
 * App\Models\Ban
 *
 * @property int $id
 * @property string $ip
 * @property \Illuminate\Support\Carbon|null $deleted_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|Ban newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Ban newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Ban onlyTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Ban query()
 * @method static \Illuminate\Database\Eloquent\Builder|Ban whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Ban whereDeletedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Ban whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Ban whereIp($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Ban whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Ban withTrashed()
 * @method static \Illuminate\Database\Eloquent\Builder|Ban withoutTrashed()
 * @mixin \Eloquent
 */
class Ban extends Model
{
    use HasFactory, SoftDeletes;

    protected $guarded = [];
}
