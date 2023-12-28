<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="sf-js-enabled">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="description" content="">

    <title>{{ config('app.name', 'Laravel') . ' | '. 'Admin' }}</title>
    <!-- Styles -->
    <link href="{{asset('assets/admin/css/main.css')}}" rel="stylesheet" type="text/css">
    <link href="{{asset('assets/admin/vendor/fontawesome-free/css/all.min.css')}}" rel="stylesheet" type="text/css">
    <link
        href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
        rel="stylesheet">
    <!-- Custom styles for this template-->
    <link href="{{asset('assets/admin/css/sb-admin-2.min.css')}}" rel="stylesheet">
    <link href="{{asset('assets/admin/summernote-0.8.18-dist/summernote.min.css')}}" rel="stylesheet">

    @stack('css')
</head>

<body id="page-top" class="font-sans text-gray-900 antialiased">

<!-- Page Wrapper -->
<div id="wrapper" class="">

    <!-- Sidebar -->
    <ul class="navbar-nav bg-gradient-dark sidebar sidebar-dark accordion" id="accordionSidebar">

        <!-- Sidebar - Brand -->
        <a class="sidebar-brand d-flex align-items-center justify-content-center"
           href="{{url(\App\Providers\RouteServiceProvider::HOME)}}">
            <div class="sidebar-brand-icon">
                <i class="fa-brands fa-btc"></i>
            </div>
            <div class="sidebar-brand-text mx-3">{{ config('app.name') }}</div>
        </a>
        <!-- Divider -->
        <hr class="sidebar-divider my-0">

        <!-- Nav Item - Dashboard -->

        <li @class(['nav-item','active' => request()->routeIs('admin.dashboard')])>
            <a class="nav-link" href="{{route('admin.dashboard')}}">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>{{__('Dashboard')}}</span></a>
        </li>
        <li @class(['nav-item','active' => request()->routeIs('admin.wallets.index')])>
            <a class="nav-link" href="{{route('admin.wallets.index')}}">
                <i class="fa-solid fa-wallet"></i>
                <span>Адреса для обмена</span></a>
        </li>
        <li @class(['nav-item','active' => request()->routeIs('admin.orders.index')])>
            <a class="nav-link" href="{{route('admin.orders.index')}}">
                <i class="fa-solid fa-money-bill-trend-up"></i>
                <span>Заказы</span></a>
        </li>
        <li @class(['nav-item','active' => request()->routeIs('admin.users.index')])>
            <a class="nav-link" href="{{route('admin.users.index')}}">
                <i class="fa-solid fa-handshake"></i>
                <span>Пользователи</span></a>
        </li>
        {{--        <li x-data="{ collapse_id: $id('collapse'),heading_id:$id('heading') }"--}}
        {{--            @class(['nav-item','active' => request()->routeIs('admin.pages.*')])>--}}
        {{--            <a @class(['nav-link','collapsed' => !request()->routeIs('admin.pages.*')])--}}
        {{--               href="#" data-toggle="collapse" aria-expanded="true"--}}
        {{--               x-bind:data-target="'#' + collapse_id"--}}
        {{--               x-bind:aria-controls="collapse_id">--}}
        {{--                <i class="fas fa-fw fa-list"></i>--}}
        {{--                <span>Страницы</span>--}}
        {{--            </a>--}}
        {{--            <div x-bind:id="collapse_id" x-bind:aria-labelledby="heading_id" data-parent="#accordionSidebar"--}}
        {{--                @class(['collapse','show' => request()->routeIs('admin.pages.*')])>--}}
        {{--                <div class="bg-white py-2 collapse-inner rounded">--}}
        {{--                    @foreach($pages as $page)--}}
        {{--                        <a @class(['collapse-item','active' => request()->getRequestUri() === "/admin/pages/{$page->id}"]) href="{{route('admin.pages.edit',['id'=>$page->id])}}">{{$page->name}}</a>--}}
        {{--                    @endforeach--}}
        {{--                </div>--}}
        {{--            </div>--}}
        {{--        </li>--}}
        <hr class="sidebar-divider">

        <!-- Sidebar Toggler (Sidebar) -->
        <div class="text-center d-none d-md-inline">
            <button class="rounded-circle border-0" id="sidebarToggle"></button>
        </div>
        <hr class="sidebar-divider d-none d-md-block">
    </ul>

    <!-- End of Sidebar -->

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column ">

        <!-- Main Content -->
        <div id="content">

            <!-- Topbar -->
            <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

                <!-- Sidebar Toggle (Topbar) -->
                <button id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circle mr-3">
                    <i class="fa fa-bars"></i>
                </button>
                <!-- Topbar Navbar -->
                <ul class="navbar-nav ml-auto">
                    <div class="topbar-divider d-none d-sm-block"></div>

                    <!-- Nav Item - User Information -->
                    <li class="nav-item dropdown no-arrow">
                        <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                           data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span
                                class="mr-2 d-none d-lg-inline text-gray-600 small">{{optional(auth()->user())->name}}</span>
                            <img class="img-profile rounded-circle" alt=""
                                 src="{{asset('assets/admin/img/undraw_profile.svg')}}">
                        </a>

                        <!-- Dropdown - User Information -->
                        <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                             aria-labelledby="userDropdown">
                            <a class="dropdown-item" href="{{route('admin.profile.edit')}}">
                                <i class="fas fa-fw fa-user mr-2 text-gray-400"></i>
                                {{ __('Profile') }}
                            </a>
                            <a class="dropdown-item" href="{{route('admin.settings.index')}}">
                                <i class="fas fa-regular fa-gear mr-2 text-gray-400"></i>
                                {{ __('Settings') }}
                            </a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                {{__('Logout')}}
                            </a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="javascript:void(0)">
                                @if(cache('fixedfloat_api_has_error'))
                                    <i class="fa-solid fa-circle-xmark"></i>
                                @else
                                    <i class="fa-solid fa-circle-check"></i>
                                @endif
                                <span>Последное обнавление: {{cache('courses_update_at')}}</span>
                            </a>
                        </div>
                    </li>

                </ul>

            </nav>

            <div class="container-fluid">
                <div id="alert"
                     @class(['alert','alert-success' => session('success'),'alert-danger' => session('error')]) role="alert">
                    {!! session('success') ?? session('error') !!}
                </div>
                @if (!request()->routeIs('admin.settings.*') && $errors->any())
                    <div class="alert alert-danger">
                        <ul>
                            @foreach ($errors->all() as $error)
                                <li>{{ $error }}</li>
                            @endforeach
                        </ul>
                    </div>
                @endif
                {{ $slot }}
            </div>
            <!-- /.container-fluid -->

        </div>
        <!-- End of Main Content -->

        <!-- Footer -->
        <footer class="sticky-footer mt-5 bg-white">
            <div class="container my-auto">
                <div class="copyright text-center my-auto">
                    <span>Copyright &copy; {{ config('app.name', 'Laravel').' '.date('Y') }}</span>
                </div>
            </div>
        </footer>
        <!-- End of Footer -->

    </div>
    <!-- End of Content Wrapper -->

</div>
<!-- End of Page Wrapper -->

<!-- Scroll to Top Button-->
<a class="scroll-to-top rounded" href="#page-top">
    <i class="fas fa-angle-up"></i>
</a>

<!-- Logout Modal-->
<div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
     aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">{{__('Ready to Leave?')}}</h5>
                <button class="close" type="button" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                </button>
            </div>
            <div
                class="modal-body">{{__('Select "Logout" below if you are ready to end your current session.')}}</div>
            <div class="modal-footer">
                <button class="btn btn-secondary" type="button" data-dismiss="modal">{{__('Cancel')}}</button>
                <form method="POST" action="{{ route('admin.logout') }}">
                    @csrf
                    <button type="submit" class="btn btn-primary">
                        {{ __('Log Out') }}
                    </button>
                </form>
            </div>
        </div>
    </div>
</div>
<div class="modal fade" id="confirmModal" tabindex="-1" role="dialog" aria-labelledby="modalLabel"
     aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="modalLabel">{{__('Delete',[],'ru')}}</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <h2 class="text-center">{{__('Are you sure?',[],'ru')}}</h2>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">{{__('No',[],'ru')}}</button>
                <form action="#" method="POST">
                    @csrf
                    @method('DELETE')
                    <button type="submit" class="btn btn-danger">{{__('Yes',[],'ru')}}</button>
                </form>

            </div>
        </div>
    </div>
</div>

<script src="{{asset('assets/admin/js/jquery-3.7.1.min.js')}}"></script>
<script src="{{asset('assets/admin/vendor/bootstrap/js/bootstrap.bundle.min.js')}}"></script>


<script src="{{asset('assets/admin/vendor/jquery-easing/jquery.easing.min.js')}}"></script>


<script src="{{asset('assets/admin/js/sb-admin-2.min.js')}}"></script>
<script src="{{asset('assets/admin/summernote-0.8.18-dist/summernote.min.js')}}"></script>
<script defer src="{{asset('assets/admin/js/alpine.js')}}"></script>
<script src="{{asset('assets/admin/js/main.js')}}"></script>
@stack('js')
</body>
</html>
