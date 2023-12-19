<?php

namespace App\Http\Controllers;

use App\Enums\StatusEnum;
use App\Models\Order;

class OrderController extends Controller
{
    public function __invoke($orderNum)
    {
        $order = Order::whereNum($orderNum)->firstOrFail();
        $diff = now()->diff($order->created_at->addMinutes(30));
        $order->status = $diff->invert && $order->status === StatusEnum::NEW->value
            ? StatusEnum::EXPIRED->value
            : $order->status;
        $minute = (strlen($diff->i) > 1 ? $diff->i : '0' . $diff->i);
        $second = (strlen($diff->s) > 1 ? $diff->s : '0' . $diff->s);
        $order->dateTime = $diff->invert ? "00:00" : "$minute:$second";
        return view('order.index', ['order' => $order]);
    }
}
