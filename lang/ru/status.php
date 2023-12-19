<?php

use App\Enums\StatusEnum;

return [
    StatusEnum::NEW->value => 'Новый',
    StatusEnum::PENDING->value => 'В ожидании',
    StatusEnum::EXCHANGE->value => 'Обмен',
    StatusEnum::WITHDRAW->value => 'Вывод средств',
    StatusEnum::EMERGENCY->value => 'Чрезвычайная ситуация',
    StatusEnum::REFUND->value => 'Возвращать деньги',
    StatusEnum::EXPIRED->value => 'Истекший',
    StatusEnum::DONE->value => 'Одобрен',
];
