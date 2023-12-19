<?php

use App\Enums\StatusEnum;
use App\Services\FixedFloatApi;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string('num')->index();
            $table->string('email')->nullable();
            $table
                ->foreignId('user_id')
                ->nullable()
                ->constrained()
                ->nullOnDelete()
                ->cascadeOnUpdate();
            $table
                ->foreignId('referral_link_id')
                ->nullable()
                ->constrained()
                ->nullOnDelete()
                ->cascadeOnUpdate();
            $table->enum('type', [FixedFloatApi::TYPE_FIXED, FixedFloatApi::TYPE_FLOAT]);
            $table->string('fromCcy');
            $table->string('toCcy');
            $table->string('fromAddress');
            $table->string('toAddress');
            $table->string('tz');
            $table->string('ts');
            $table->string('tt');
            $table->string('fromQty');
            $table->string('toQty')->nullable();
            $table->text('fromTxId')->nullable();
            $table->text('toTxId')->nullable();
            $table->unsignedInteger('fromConfirmation')->default(0);
            $table->unsignedInteger('toConfirmation')->default(0);
            $table->enum('status', StatusEnum::values())->default(StatusEnum::NEW->value);
            $table->text('qrAddress')->nullable();
            $table->text('qrSum')->nullable();
            $table->timestamp('fromReceiptTime')->nullable();
            $table->timestamp('toReceiptTime')->nullable();
            $table->timestamp('fromExecutionTime')->nullable();
            $table->timestamp('toExecutionTime')->nullable();
            $table->ipAddress('ipAddress')->nullable();
            $table->text('userAgent')->nullable();
            $table->string('countryFlag')->nullable();
            $table->string('countryName')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
