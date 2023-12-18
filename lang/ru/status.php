<?php

use App\Enums\StatusEnum;

return [
    StatusEnum::PENDING->value => 'В ожидании',
    StatusEnum::DECLINED->value => 'Отклонен',
    StatusEnum::APPROVED->value => 'Одобрен',
];
