<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * App\Models\Role
 *
 * @property int $id
 * @property string $name
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\User> $users
 * @property-read int|null $users_count
 * @method static \Illuminate\Database\Eloquent\Builder|Role newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Role newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Role query()
 * @method static \Illuminate\Database\Eloquent\Builder|Role whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Role whereName($value)
 * @mixin \Eloquent
 */
class Role extends Model
{
    use HasFactory;

    protected $fillable = ['name'];
    public $timestamps = false;
    public const SUPER_ADMIN = 'super_admin';
    public const OPERATOR = 'operator';

    public function isSuperAdmin(): bool
    {
        return $this->name === self::SUPER_ADMIN;
    }

    public function isOperator(): bool
    {
        return $this->name === self::OPERATOR;
    }

    public function users(): HasMany
    {
        return $this->hasMany(User::class);
    }

    public function getRoleName(): string
    {
        return match ($this->name) {
            Role::SUPER_ADMIN => 'Супер Администратор',
            Role::OPERATOR => 'Оператор',
            default => 'Неизвестен',
        };
    }

}
