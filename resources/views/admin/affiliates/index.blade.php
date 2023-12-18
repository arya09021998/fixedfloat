<x-admin-layout>
    @push('css')
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
                    <h4 class="card-title">Партнеры</h4>
                </div>
            </div>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table id="affiliates_table"
                       class="table table-sm table-bordered display responsive nowrap w-100">
                    <thead>
                    <tr>
                        <th scope="col">Имя пользователя</th>
                        <th scope="col">Реферальная ссылка</th>
                        <th scope="col">Минимальная выплата</th>
                        <th scope="col">Количество рефералов</th>
                        <th scope="col">Завершенные транзакции</th>
                        <th scope="col">Сума</th>
                        <th scope="col">Создан в</th>
                        <th scope="col">Действие</th>
                    </tr>
                    </thead>
                    <tbody>
                    @foreach($affiliates as $affiliate)
                        @php($affiliate = new \App\Models\Affiliate($affiliate->resolve()))
                        <tr class="affiliates-item">
                            <td>{{$affiliate->username}}</td>
                            <td>{{url('?ref='.$affiliate->ref)}}</td>
                            <td>{{$affiliate->min_payout}}</td>
                            <td>{{$affiliate->referrals_all_count}}</td>
                            <td>{{$affiliate->referrals_approved_count}}</td>
                            <td>{{$affiliate->referrals_amount}} BTC</td>
                            <td>{{$affiliate->created_at}}</td>
                            <td>
                                <div class='d-flex' role='group'>
                                    <a type="button"
                                       class="btn btn-sm btn-outline-danger mr-1"
                                       data-toggle="modal"
                                       data-target="#confirmModal"
                                       data-url="{{route('admin.affiliates.destroy',[$affiliate->id])}}">
                                        Удалить
                                    </a>
                                </div>
                            </td>
                        </tr>
                    @endforeach
                    </tbody>
                    <tfoot>
                    <tr>
                        <th colspan="1">
                            <p class="mb-0">Всего: {{ $affiliates->total() }}</p>
                        </th>
                        <th colspan="7">
                            {{ $affiliates->appends(request()->input())->links() }}
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
        <script>
            $(document).ready(function () {
                $('#affiliates_table').DataTable({
                    info: false,
                    ordering: false,
                    paging: false
                });
            })
        </script>
    @endpush
</x-admin-layout>


