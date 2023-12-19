<?php

namespace App\Enums;

use App\Traits\EnumToArray;

enum StatusEnum: string
{
    use EnumToArray;

    case NEW = 'new';
    case PENDING = 'pending';
    case EXCHANGE = 'exchange';
    case WITHDRAW = 'withdraw';
    case DONE = 'done';
    case EMERGENCY = 'emergency';
    case REFUND = 'refund';
    case EXPIRED = 'expired';
}
