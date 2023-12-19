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
                    <h4 class="card-title">Пользователи</h4>
                </div>
            </div>
        </div>
        <div class="card-body">
            <div class="table-responsive">
                <table id="users_table"
                       class="table table-sm table-bordered display responsive nowrap w-100">
                    <thead>
                    <tr>
                        <th scope="col">Имя</th>
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
                    @foreach($users as $user)
                        @php($user = $user->resolve())

                        <tr class="users-item">
                            <td>{{$user['name']}}</td>
                            <td>{{url('?ref='.$user['ref'])}}</td>
                            <td>{{$user['min_payout']}}</td>
                            <td>{{$user['referrals_all_count']}}</td>
                            <td>{{$user['referrals_approved_count']}}</td>
                            <td>{{$user['referrals_amount']}} </td>
                            <td>{{$user['created_at']}}</td>
                            <td>
                                <div class='d-flex' role='group'>
                                    <a type="button"
                                       class="btn btn-sm btn-outline-danger mr-1"
                                       data-toggle="modal"
                                       data-target="#confirmModal"
                                       data-url="{{route('admin.users.destroy',[$user['id']])}}">
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
                            <p class="mb-0">Всего: {{ $users->total() }}</p>
                        </th>
                        <th colspan="7">
                            {{ $users->appends(request()->input())->links() }}
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
                $('#users_table').DataTable({
                    info: false,
                    ordering: false,
                    paging: false
                });
            })
        </script>
    @endpush
</x-admin-layout>


