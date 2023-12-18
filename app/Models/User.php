<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

/**
 * App\Models\User
 *
 * @property int $id
 * @property int|null $role_id
 * @property string|null $name
 * @property string $email
 * @property \Illuminate\Support\Carbon|null $email_verified_at
 * @property bool $notify
 * @property mixed $password
 * @property string|null $remember_token
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection<int, \Illuminate\Notifications\DatabaseNotification> $notifications
 * @property-read int|null $notifications_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Order> $orders
 * @property-read int|null $orders_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\ReferralLink> $referralLinks
 * @property-read int|null $referral_links_count
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Order> $referrals
 * @property-read int|null $referrals_count
 * @property-read \App\Models\Role|null $role
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \Laravel\Sanctum\PersonalAccessToken> $tokens
 * @property-read int|null $tokens_count
 * @method static \Database\Factories\UserFactory factory($count = null, $state = [])
 * @method static \Illuminate\Database\Eloquent\Builder|User newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|User query()
 * @method static \Illuminate\Database\Eloquent\Builder|User whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereEmailVerifiedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereNotify($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereRoleId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|User whereUpdatedAt($value)
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\AddressBook> $addressBooks
 * @property-read int|null $address_books_count
 * @property string|null $last_active_at
 * @method static \Illuminate\Database\Eloquent\Builder|User whereLastActiveAt($value)
 * @property-read \Illuminate\Database\Eloquent\Collection<int, \App\Models\Payout> $payouts
 * @property-read int|null $payouts_count
 * @mixin \Eloquent
 */
class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
        'role_id',
        'notify',
        'last_active_at',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'last_active_at' => 'datetime',
        'password' => 'hashed',
        'notify' => 'boolean',
    ];


    public function role(): BelongsTo
    {
        return $this->belongsTo(Role::class);
    }

    public function isSuperAdmin(): bool
    {
        return (bool)optional($this->role)->isSuperAdmin();
    }

    public function isOperator(): bool
    {
        return (bool)optional($this->role)->isOperator();
    }

    public function hasRoles(array $roles): bool
    {
        $role = optional($this->role)->name;
        return !is_null($role) && !empty($roles) && in_array($role, $roles, true);
    }

    public function orders(): HasMany
    {
        return $this->hasMany(Order::class);
    }

    public function addressBooks(): HasMany
    {
        return $this->hasMany(AddressBook::class);
    }

    public function referralLinks(): HasMany
    {
        return $this->hasMany(ReferralLink::class);
    }

    public function referrals(): BelongsToMany
    {
        return $this->belongsToMany(Order::class, ReferralLink::class, 'user_id', 'id', 'id', 'referral_link_id')
            ->withTimestamps();
    }

    public function payouts(): HasMany
    {
        return $this->hasMany(Payout::class);
    }
}
