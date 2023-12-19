<x-admin-layout>
    <div class="card shadow mb-2" id="card">
        <div class="card-header">
            <div class="row">
                <div class="col-md-12 pb-3">
                    <h4 class="card-title">Адреса</h4>
                </div>
            </div>
        </div>
        <div class="card-body">
            <div id="accordion">
                @foreach($coins as $coin)
                    <div class="card mb-1">
                        <div class="card-header p-0 m-0" id="heading-{{$coin->id}}">
                            <button class="btn btn-block btn-light collapsed d-flex justify-between align-items-center"
                                    data-toggle="collapse"
                                    data-target="#collapse-{{$coin->id}}"
                                    aria-expanded="false" aria-controls="collapse-{{$coin->id}}">
                                <span>{{$coin->name}}</span> <span
                                    class="badge badge-light">{{$coin->wallets_count}}</span>
                            </button>
                        </div>
                        <div id="collapse-{{$coin->id}}" class="collapse" aria-labelledby="heading-{{$coin->id}}"
                             data-parent="#accordion">
                            <div class="card-body">
                                @foreach($coin->wallets as $wallet)
                                    <form action="{{route('admin.wallets.update',['id'=>$wallet->id])}}" method="POST">
                                        @csrf
                                        @method('PUT')
                                        <div class="form-group">
                                            <label>Адрес монеты</label>
                                            <input type="text" name="address"
                                                   value="{{old('address',$wallet->address)}}" class="form-control">
                                        </div>
                                        <button type="submit" class="btn btn-sm btn-primary">Изменить</button>
                                        <button type="submit" name="enabled" value="{{!$wallet->enabled}}"
                                                class="btn btn-sm @if($wallet->enabled) btn-secondary @else btn-success @endif">{{$wallet->enabled ? 'Выкл': 'Вкл'}}</button>
                                        <a type="button"
                                           class="btn btn-sm btn-danger"
                                           data-toggle="modal"
                                           data-target="#confirmModal"
                                           data-url="{{route('admin.wallets.destroy',['id'=>$wallet->id])}}">
                                            Удалить
                                        </a>
                                    </form>
                                    @if($loop->last)
                                        <hr>
                                    @endif
                                @endforeach
                                <form action="{{route('admin.wallets.store')}}" method="POST">
                                    @csrf
                                    <input type="hidden" name="coin_id" value="{{$coin->id}}">
                                    <div class="form-group">
                                        <label>Адрес монеты</label>
                                        <input type="text" name="address" value="{{old('address')}}"
                                               class="form-control">
                                    </div>
                                    <button type="submit" class="btn btn-sm btn-success">Добавить</button>
                                </form>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    </div>
</x-admin-layout>
