<div class="fixed-toolbar">
    <div class="container">
        <form action="{{route('tx.new-mix')}}" class="mixer-form" id="formyevg" method="post">
            @csrf
            <div class="toolbar-form">
                <div class="toolbar-form-inner">
                    <div class="box-label">
                        <div class="form-title">
                            <strong>Mix BTCs (1% fee)</strong>
                        </div>
                    </div>
                    <div class="box-amount">
                        <div class="input-field-multi">
                            <div class="input-field-group" data-address="1">
                                <div class="input-field input-with-button input-field-noshadow input-field-sm">
                                    <input type="text" name="addr[0]" placeholder=" " id="_yevg_1" value=""
                                           autocomplete="off">
                                    <label for="_yevg_1">Enter address to receive mixed BTC</label>
                                    <a class="btn-clean" href="#">
                                        <div class="btn-clean-line1"></div>
                                        <div class="btn-clean-line2"></div>
                                    </a>
                                </div>
                            </div>
                            <div class="input-field-group" data-address="2">
                                <div class="input-field input-with-button input-field-noshadow input-field-sm">
                                    <input type="text" name="addr[1]" placeholder=" " id="_yevg_2" value=""
                                           autocomplete="off">
                                    <label for="_yevg_2">Second address to receive mixed BTC</label>
                                    <a class="btn-clean" href="#">
                                        <div class="btn-clean-line1"></div>
                                        <div class="btn-clean-line2"></div>
                                    </a>
                                </div>
                            </div>
                            <div class="input-field-group" data-address="3">
                                <div class="input-field input-with-button input-field-noshadow input-field-sm">
                                    <input type="text" name="addr[2]" placeholder=" " id="_yevg_3" value=""
                                           autocomplete="off">
                                    <label for="_yevg_3">Third address to receive mixed BTC</label>
                                    <a class="btn-clean" href="#">
                                        <div class="btn-clean-line1"></div>
                                        <div class="btn-clean-line2"></div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="box-fee">
                        <div class="input-field-group">
                            <div class="input-field input-field-sm">
                                <select name="serviceFee" class="form-select">
                                    <option value="0">Standard strength (1%)</option>
                                    <option value="1">Stronger strength (1.5%)</option>
                                    <option value="2">Extreme strength (2%)</option>
                                    <option value="3">Anonymous strength (3%)</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="box-delay">
                        <div class="input-field-group">
                            <div class="input-field input-field-sm">
                                <select name="delay" class="form-select">
                                    <option value="0">Mix ASAP</option>
                                    <option value="1">1 Hour</option>
                                    <option value="2">2 Hours</option>
                                    <option value="4">4 Hours</option>
                                    <option value="8">8 Hours</option>
                                    <option value="16">16 Hours</option>
                                    <option value="24">1 day</option>
                                    <option value="48">2 days</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="box-button">
                        <button type="submit" class="btn btn-primary">
                            Start mixing <i class="icon icon-continue xs-show"></i>
                        </button>
                    </div>
                </div>
            </div>
        </form>
        <script>
            $('#formyevg [data-address="2"]').addClass('hide');
            $('#formyevg [data-address="3"]').addClass('hide');
        </script>
    </div>
</div>
