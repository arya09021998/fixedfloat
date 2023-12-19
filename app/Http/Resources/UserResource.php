<?php

namespace App\Http\Resources;

use App\Enums\StatusEnum;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\DB;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        /** @var User $user */
        $user = $this
            ->loadAggregate(['referrals' => function ($query) {
                return $query
                    ->withTrashed()
                    ->select(DB::raw('CAST(IFNULL(COUNT(*),0) AS UNSIGNED)'));
            }], 'all_count')
            ->loadAggregate(['referrals' => function ($query) {
                return $query
                    ->withTrashed()
                    ->where('orders.status', StatusEnum::DONE->value)
                    ->select(DB::raw('CAST(IFNULL(COUNT(*),0) AS UNSIGNED)'));
            }], 'approved_count')
            ->loadAggregate(['referrals' => function ($query) {
                return $query
                    ->withTrashed()
                    ->where('orders.toQty', '!=', null)
                    ->select(DB::raw('IFNULL(SUM(orders.toQty),0)'));
            }], 'amount');
        return [
            'id' => $user->id,
            'name' => $user->name,
            'ref' => $user->referralLinks->implode('code',', '),
            'min_payout' => 0,
            'referrals_all_count' => $user->referrals_all_count,
            'referrals_approved_count' => $user->referrals_approved_count,
            'referrals_amount' => $user->referrals_amount,
            'created_at' => $user->created_at,
            'updated_at' => $user->updated_at,
        ];
    }

}
