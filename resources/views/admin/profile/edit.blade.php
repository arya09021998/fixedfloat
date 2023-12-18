<x-admin-layout>
    <div class="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
        @include('admin.profile.partials.update-profile-information-form')
    </div>
    <br>
    <div class="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
        @include('admin.profile.partials.update-password-form')
    </div>
    <br>
    <div class="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg">
        @include('admin.profile.partials.delete-user-form')
    </div>
</x-admin-layout>

