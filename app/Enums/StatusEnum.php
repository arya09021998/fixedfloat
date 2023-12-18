<?php

namespace App\Enums;

use App\Traits\EnumToArray;

enum StatusEnum: string
{
    use EnumToArray;

    case PENDING = 'pending';
    case APPROVED = 'approved';
    case DECLINED = 'declined';
    case EXPIRED = 'expired';
}
