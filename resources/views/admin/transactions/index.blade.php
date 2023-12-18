<x-admin-layout>
    @push('css')
        <link href="{{asset('assets/admin/css/select2.min.css')}}" rel="stylesheet"/>
        <link href="{{asset('assets/admin/css/daterangepicker.css')}}" rel="stylesheet"/>
        <link href="{{asset('assets/admin/vendor/datatables/dataTables.bootstrap4.css')}}"
              rel="stylesheet">
        <style>
            .table td, .table th {
                vertical-align: baseline;
            }
        </style>
    @endpush
    <div class="card shadow mb-4" id="card">
        <div class="card-header">
            <div class="row" id="filters">
                <div class="col-md-12 pb-3">
                    <h4 class="card-title">Транзакции</h4>
                </div>
                <div class="col-md-12 pb-3">
                    <form id="filter-form" method="get" class="row align-items-baseline">
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <select class="form-control" name="ip" id="ipAddresses"
                                                data-url="{{ route('admin.transactions.ips') }}"
                                                data-value="{{ request()->has('ip') ? request()->get('ip') : null }}"></select>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <select class="form-control" name="country" id="country"
                                                data-url="{{ route('admin.transactions.countries') }}"
                                                data-value="{{ request()->has('country') ? request()->get('country') : null }}">

                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <select class="form-control sample-select" name="status" id="status">
                                            <option value=""></option>
                                            @foreach(\App\Enums\StatusEnum::values() as $status)
                                                <option
                                                    @selected($status === request()->get('status')) value="{{$status}}">
                                                    {{trans('status.'.$status,[],'ru')}}
                                                </option>
                                            @endforeach
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <select class="form-control sample-select" name="deleted" id="deleted">
                                            <option value=""></option>
                                            <option
                                                value="yes" {{ request()->get('deleted') == 'yes' ? 'selected' : '' }}>
                                                Да
                                            </option>
                                            <option
                                                value="no" {{ request()->get('deleted') == 'no' ? 'selected' : '' }}>
                                                Нет
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-12 pb-3">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <input style="border: 1px solid #aaa;width: 100%"
                                               class="form-control-sm input-sm dateRange" autocomplete="false"
                                               placeholder="Выберите дату"
                                               type="text" name="date"
                                               value="{{ request()->has('date') && !empty(request()->get('date')) ? request()->get('date') : '' }}"
                                        />
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <button type="submit" class="btn btn-sm btn-block btn-outline-success">Поиск
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table id="transactions_table"
                       class="table table-sm table-bordered display responsive nowrap w-100">
                    <thead>
                    <tr>
                        <th scope="col">Выбрать</th>
                        <th scope="col">Идентификатор</th>
                        <th scope="col">BTC адреса</th>
                        <th scope="col">Mix BTC адрес</th>
                        <th scope="col">Сумма</th>
                        <th scope="col">Комиссия</th>
                        <th scope="col">Задержка</th>
                        <th scope="col">Реферер</th>
                        <th scope="col">{{__('IP')}}</th>
                        <th scope="col">Страна</th>
                        <th scope="col">{{__('User Agent')}}</th>
                        <th scope="col">Создан в</th>
                        <th scope="col">Удалено</th>
                        <th scope="col">Статус</th>
                        <th scope="col">Действие</th>
                    </tr>
                    </thead>
                    <tbody>
                    @foreach($transactions as $transaction)
                        <tr class="transaction-item">
                            <td class="text-center">
                                <label>
                                    <input class="delete-ids" type="checkbox" name="delete_ids[]"
                                           value="{{$transaction->id}}" form="delete-chosen">
                                </label>
                            </td>
                            <td>{{$transaction->tx_id}}</td>
                            <td>{{$transaction->btc_addresses?->implode(',')}}</td>
                            <td>{{$transaction->mix_btc_address}}</td>
                            <td>
                                <label class="d-flex align-items-center m-0">
                                    <input class="w-auto form-control form-control-sm mr-1 amount_inp" type="number"
                                           value="{{old('amount',$transaction->amount)}}"> BTC
                                </label>
                            </td>
                            <td>{{$transaction->fee_percent}}%</td>
                            <td>
                                @if($transaction->delay)
                                    {{$transaction->created_at->addHours($transaction->delay)}}
                                    ({{$transaction->delay}}ч.)
                                @else
                                    Нет задержки
                                @endif
                            </td>
                            <td>
                                @if($referrer = $transaction->referrer)
                                    {{url('?ref='.$referrer->ref)}}
                                @else
                                    -
                                @endif
                            </td>
                            <td>
                                <a href="{{ route('admin.transactions.index') . '?ip=' . $transaction->ip_address }}">{{ $transaction->ip_address }}</a>
                            </td>
                            <td>
                                @empty(!$transaction->country_flag)
                                    <strong>({{$transaction->country_name}})</strong>
                                    <img alt="{{$transaction->country_name}}" src="{{$transaction->country_flag}}"
                                         title="{{$transaction->ip_address}}" width="30px"
                                         height="30px">
                                @else
                                    -
                                @endempty
                            </td>
                            <td>{{$transaction->user_agent}}</td>
                            <td>{{$transaction->created_at}}</td>
                            <td>{{$transaction->trashed() ? 'Да' : 'Нет'}}</td>
                            <td>
                                <form id="transaction-form-{{$transaction->id}}"
                                      action="{{route('admin.transactions.update',[$transaction])}}"
                                      method="POST">
                                    @method('PUT')
                                    @csrf
                                    <input type="hidden"
                                           name="amount"
                                           value="{{old('amount',$transaction->amount)}}">
                                    <label class="m-0">
                                        <select style="width: auto" class="form-control form-control-sm" name="status">
                                            @foreach(\App\Enums\StatusEnum::values() as $status)
                                                <option
                                                    @selected($status === old('status',$transaction->status)) value="{{$status}}">
                                                    {{trans('status.'.$status,[],'ru')}}
                                                </option>
                                            @endforeach
                                        </select>
                                    </label>
                                </form>
                            </td>
                            <td>
                                <div class='d-flex' role='group'>
                                    <button class="btn btn-sm btn-outline-success mr-1"
                                            form="transaction-form-{{$transaction->id}}">
                                        Сохранить
                                    </button>

                                    @if (\App\Models\Ban::whereIp($transaction->ip_address)->exists())
                                        <form action="{{route('admin.transactions.unbanIp')}}" method="post"
                                              class="mr-1">
                                            @csrf
                                            <input type="hidden" name="ip" value="{{ $transaction->ip_address }}">
                                            <button class="btn btn-sm btn-outline-success" type="submit">
                                                Разблокировать IP
                                            </button>
                                        </form>
                                    @else
                                        <form action="{{route('admin.transactions.banIp')}}" method="post" class="mr-1">
                                            @csrf
                                            <input type="hidden" name="ip"
                                                   value="{{ $transaction->ip_address }}">
                                            <button class="btn btn-sm btn-outline-danger" type="submit">
                                                Заблокировать IP
                                            </button>
                                        </form>
                                    @endif
                                    <a type="button"
                                       class="btn btn-sm btn-outline-danger mr-1"
                                       data-toggle="modal"
                                       data-target="#confirmModal"
                                       data-url="{{route('admin.transactions.destroy',[$transaction->id])}}">
                                        Удалить
                                    </a>
                                </div>
                            </td>
                        </tr>
                    @endforeach
                    </tbody>
                    <tfoot>
                    <tr>
                        <th class="text-center" colspan="1">
                            <label class="m-0">
                                Выбрать все<br>
                                <input class="delete-ids" type="checkbox" id="check-all">
                            </label>
                        </th>
                        <th colspan="14">
                            <div class="d-flex mt-1" role="group">
                                <form id="delete-chosen" action="/admin/transactions/0" method="POST"
                                      class="form-group m-0 mr-1">
                                    @method('DELETE')
                                    @csrf
                                    <button class="btn btn-sm btn-outline-danger" id="delete-chosen-btn"
                                            type="submit"
                                            disabled>Удалить выбранные
                                    </button>
                                </form>
                                <form id="delete-all" action="/admin/transactions/0" method="post" class="m-0">
                                    @method('DELETE')
                                    @csrf
                                    <input type="hidden" name="delete_all" value="1">
                                    <input type="hidden" name="password" id="password" value="">
                                    <button class="btn btn-sm btn-outline-danger" type="button">
                                        Удалить все
                                    </button>
                                </form>
                            </div>

                        </th>
                    </tr>
                    <tr>
                        <th colspan="1">
                            <p class="mb-0">Всего: {{ $transactions->total() }}</p>
                        </th>
                        <th colspan="14">
                            {{ $transactions->appends(request()->input())->links() }}
                        </th>
                    </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    </div>
    @push('js')
        <script src="{{asset('assets/admin/vendor/datatables/datatables.min.js')}}"></script>
        <script src="{{asset('assets/admin/vendor/datatables/dataTables.bootstrap4.min.js')}}"></script>
        <script src="{{asset('assets/admin/js/select2.min.js')}}"></script>
        <script src="{{asset('assets/admin/js/moment.min.js')}}"></script>
        <script src="{{asset('assets/admin/js/daterangepicker.min.js')}}"></script>
        <script>
            $(document).ready(function () {
                $('.amount_inp').on('input', function () {
                    $(this).closest('tr').find('input[name="amount"]').val($(this).val());
                });
                $('#transactions_table').DataTable({
                    info: false,
                    ordering: false,
                    paging: false
                });
                $('.dateRange').daterangepicker({
                    autoUpdateInput: false,
                    locale: {
                        cancelLabel: 'Clear',
                        format: 'YYYY-MM-DD'
                    },
                    minYear: 2000,
                    maxYear: 2030,
                    ranges: {
                        'All time': [moment('1970-01-01'), moment()],
                        'Today': [moment(), moment()],
                        'This Week': [moment().startOf('isoWeek'), moment().endOf('isoWeek')],
                    }
                });

                $('input.dateRange').on('apply.daterangepicker', function (ev, picker) {
                    $(this).val(picker.startDate.format('YYYY-MM-DD') + ' - ' + picker.endDate.format('YYYY-MM-DD'));
                });
                const autocompleteIpInput = $('#ipAddresses');
                const ipsAutocompleteUrl = autocompleteIpInput.data('url');

                if (autocompleteIpInput.attr('data-value')) {
                    autocompleteIpInput.html('<option value="' + autocompleteIpInput.attr('data-value') + '">' + autocompleteIpInput.attr('data-value') + '</option>');
                }
                autocompleteIpInput.select2({
                    placeholder: 'Выберите IP Адрес',
                    dropdownParent: '#card',
                    allowClear: true,
                    ajax: {
                        url: ipsAutocompleteUrl,
                        dataType: 'json',
                        delay: 250,
                        data: function (params) {
                            let page = params.current_page ? (params.current_page + 1) : 1;
                            return {
                                q: params.term, // search term
                                page: page
                            };
                        },
                        processResults: function (data, params) {
                            params.current_page = data.current_page;
                            return {
                                results: $.map(data.data, function (item) {
                                    return {
                                        text: item.ip,
                                        id: item.ip
                                    }
                                }),
                                pagination: {
                                    more: (params.current_page * 30) < data.total
                                }
                            };
                        },
                        cache: true
                    }
                });

                const autocompleteCountryInput = $('#country');
                const countryAutocompleteUrl = autocompleteCountryInput.data('url');
                if (autocompleteCountryInput.attr('data-value')) {
                    autocompleteCountryInput.html('<option value="' + autocompleteCountryInput.attr('data-value') + '">' + autocompleteCountryInput.attr('data-value') + '</option>');
                }
                autocompleteCountryInput.select2({
                    placeholder: 'Выберите страну',
                    dropdownParent: '#card',
                    allowClear: true,
                    ajax: {
                        url: countryAutocompleteUrl,
                        dataType: 'json',
                        delay: 250,
                        data: function (params) {
                            let page = params.current_page ? (params.current_page + 1) : 1;
                            return {
                                q: params.term, // search term
                                page: page
                            };
                        },
                        processResults: function (data, params) {
                            params.current_page = data.current_page || 1;
                            return {
                                results: $.map(data.data, function (item) {
                                    return {
                                        text: item.country_name,
                                        id: item.country_name
                                    }
                                }),
                                pagination: {
                                    more: (params.current_page * 30) < data.total
                                }
                            };
                        },
                        cache: true
                    }
                });

                const deletedSelect = $('select#deleted');
                deletedSelect.select2({
                    placeholder: 'Удалено',
                    allowClear: true
                });
                const statusSelect = $('select#status');
                statusSelect.select2({
                    placeholder: 'Статус',
                    allowClear: true
                });

                $('#check-all').on('change', function () {
                    let elm = $(this),
                        itemElm = $('.transaction-item').find('input.delete-ids'),
                        deleteChosenBtn = $('#delete-chosen-btn');
                    if (elm.prop('checked')) {
                        itemElm.prop('checked', true);
                        deleteChosenBtn.prop('disabled', false);
                    } else {
                        itemElm.prop('checked', false);
                        deleteChosenBtn.prop('disabled', true);
                    }
                });
                $('input.delete-ids').on('change', function () {
                    let elm = $(this),
                        deleteChosenBtn = $('#delete-chosen-btn'),
                        chosenElm = $('.transaction-item').find('input.delete-ids:checked');
                    if (elm.prop('checked')) {
                        if (deleteChosenBtn.prop('disabled')) {
                            deleteChosenBtn.prop('disabled', false);
                        }
                    } else {
                        if (!chosenElm.length) {
                            deleteChosenBtn.prop('disabled', true);
                        }
                    }
                });

                const deleteChosenForm = $('#delete-chosen');
                const deleteAllForm = $('#delete-all');

                deleteChosenForm.on("submit", function () {
                    console.log($(this));
                    return confirm("Вы уверены, что хотите удалить выбранные заметки?");
                });

                deleteAllForm.find('button').on("click", function (e) {
                    e.preventDefault();
                    let password = prompt("Введите пароль");
                    if (password) {
                        deleteAllForm.find('input#password').val(password);
                        deleteAllForm.submit();
                    } else {
                        alert('Требуется пароль')
                    }
                });
            })
        </script>
    @endpush
</x-admin-layout>


