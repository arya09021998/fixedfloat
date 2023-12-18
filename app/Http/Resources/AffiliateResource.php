<?php

namespace App\Http\Resources;

use App\Enums\StatusEnum;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\DB;

class AffiliateResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $affiliate = $this
            ->loadAggregate(['referrals' => function ($query) {
                return $query
                    ->withTrashed()
                    ->select(DB::raw('CAST(IFNULL(COUNT(*),0) AS UNSIGNED)'));
            }], 'all_count')
            ->loadAggregate(['referrals' => function ($query) {
                return $query
                    ->withTrashed()
                    ->where('transactions.status', StatusEnum::APPROVED->value)
                    ->select(DB::raw('CAST(IFNULL(COUNT(*),0) AS UNSIGNED)'));
            }], 'approved_count')
            ->loadAggregate(['referrals' => function ($query) {
                return $query
                    ->withTrashed()
                    ->where('transactions.amount', '!=', null)
                    ->select(DB::raw('IFNULL(SUM(transactions.amount),0)'));
            }], 'amount');
        return [
            'id' => $affiliate->id,
            'username' => $affiliate->username,
            'ref' => $affiliate->ref,
            'min_payout' => $affiliate->min_payout,
            'referrals_all_count' => $affiliate->referrals_all_count,
            'referrals_approved_count' => $affiliate->referrals_approved_count,
            'referrals_amount' => $affiliate->referrals_amount,
            'created_at' => $affiliate->created_at,
            'updated_at' => $affiliate->updated_at,
        ];
    }

}
