<?php

namespace App\Http\Controllers;

use App\Models\Order;

class OrderController extends Controller
{
    public function __invoke($orderNum)
    {
        $order = Order::whereNum($orderNum)->firstOrFail();
        return view('order.index', ['order' => $order]);
    }
}
