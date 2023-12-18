<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Page;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Str;
use Illuminate\View\View;

class PageController extends Controller
{
    /**
     * Display the user's profile form.
     */
    public function edit($id): View
    {
        $page = Page::findOrFail($id);
        return view('admin.pages.edit', [
            'page' => $page,
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(Request $request, $id): RedirectResponse
    {
        $page = Page::findOrFail($id);
        if (!empty($request->get("slug"))) {
            $slug = "";
            foreach (explode("/", $request->get("slug")) as $value) {
                if (!empty($value)) $slug .= "/" . Str::slug(trim($value));
            }
            $slug = "/" . ltrim($slug, "/");
            $request->merge(["slug" => $slug]);
        }
        $data = $request->validate([
            "name" => ["required", "string", "min:2", "max:191", "unique:pages,name,{$page->id}"],
            "slug" => ["required", "string", "min:1", "max:191", "unique:pages,slug,{$page->id}"],
            "seo_title" => ["nullable", "sometimes", "string", "min:2", "max:191"],
            "seo_keywords" => ["nullable", "sometimes", "string", "min:2"],
            "seo_description" => ["nullable", "sometimes", "string", "min:2"],
            "content" => ["nullable", "sometimes", "string"],
        ]);
        if ($page->update($data)) {
            Cache::forget(Page::CACHE_KEY);
        }
        return Redirect::back()->with('status', 'Страница сохранено');
    }
}
