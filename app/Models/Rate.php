<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Rate
 *
 * @property int $id
 * @property string $from
 * @property string $to
 * @property string $in
 * @property string $out
 * @property string $param
 * @property string $amount
 * @property string $tofee
 * @property string $minamount
 * @property string $maxamount
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|Rate newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Rate newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Rate query()
 * @method static \Illuminate\Database\Eloquent\Builder|Rate whereAmount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Rate whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Rate whereFrom($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Rate whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Rate whereIn($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Rate whereMaxamount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Rate whereMinamount($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Rate whereOut($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Rate whereParam($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Rate whereTo($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Rate whereTofee($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Rate whereUpdatedAt($value)
 * @mixin \Eloquent
 */
class Rate extends Model
{
    use HasFactory;
    protected $guarded = [];
}
