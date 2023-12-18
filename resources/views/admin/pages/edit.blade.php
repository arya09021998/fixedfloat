<x-admin-layout>
    <div class="row">
        <div class="col-md-12 col-md-offset-2">
            <form method="post" action="{{route('admin.pages.update',['id'=>$page->id])}}" class="card"
                  enctype="multipart/form-data" role="form">
                @method('put')
                @csrf
                <div class="card-body">
                    <h4 class="card-title">Страница</h4>
                    <div class="row page-form-row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="name" class="form-label">Page Name (видно только в админке)</label>
                                <input id="name" type="text" name="name" value="{{old('name',$page->name)}}"
                                       class="name form-control" readonly>
                                <x-input-error :messages="$errors->get('name')" class="mt-2"/>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                                <label for="slug" class="form-label">Page slug (будет ссылкой для стараниц)</label>
                                <input id="slug" type="text" name="slug" value="{{old('slug',$page->slug)}}"
                                       class="slug form-control" readonly>
                                <x-input-error :messages="$errors->get('slug')" class="mt-2"/>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="seo_title" class="form-label">SEO Title</label>
                                <input id="seo_title" type="text" name="seo_title"
                                       value="{{old('seo_title',$page->seo_title)}}"
                                       class="seo_title form-control">
                                <x-input-error :messages="$errors->get('seo_title')" class="mt-2"/>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="seo_keywords" class="form-label">SEO Keywords</label>
                                <input id="seo_keywords" type="text" name="seo_keywords"
                                       value="{{old('seo_keywords',$page->seo_keywords)}}"
                                       class="seo_keywords form-control">
                                <x-input-error :messages="$errors->get('seo_keywords')" class="mt-2"/>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <label for="seo_desc" class="form-label">SEO Description</label>
                                <input id="seo_desc" type="text" name="seo_description"
                                       value="{{old('seo_description',$page->seo_description)}}" class="seo_desc form-control">
                                <x-input-error :messages="$errors->get('seo_description')" class="mt-2"/>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <label for="editor" class="form-label">Content </label>
                                <textarea id="editor" class="summernote content form-control page-text" name="content"
                                          style="visibility: hidden; display: none;">{!! old('content',$page->content) !!}</textarea>
                                <x-input-error :messages="$errors->get('content')" class="mt-2"/>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <x-primary-button>Сохранить</x-primary-button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </div>
</x-admin-layout>
