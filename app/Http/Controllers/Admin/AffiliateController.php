<?php

namespace App\Http\Controllers\Admin;

use App\Enums\StatusEnum;
use App\Http\Controllers\Controller;
use App\Http\Resources\AffiliateCollection;
use App\Http\Resources\AffiliateResource;
use App\Models\Affiliate;
use DB;
use Illuminate\Http\Request;

class AffiliateController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(Request $request)
    {
        $affiliates = Affiliate::orderByDesc('id')->paginate(50);
        return view('admin.affiliates.index', [
            'affiliates' => AffiliateResource::collection($affiliates)
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request, string $id)
    {
        $affiliate = Affiliate::findOrFail($id);
        $affiliate->delete();
        return back()->with('success', 'Пользователь удалён');
    }
}
