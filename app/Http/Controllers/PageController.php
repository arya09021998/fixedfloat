<?php

namespace App\Http\Controllers;

use App\Models\Page;
use Illuminate\Http\Request;
use SimpleXMLElement;

class PageController extends Controller
{
    protected ?Page $page = null;
    protected ?string $view = null;

    public function __construct()
    {
//        $xmlString = file_get_contents('https://ff.io/rates.xml');
//        $xmlObject = simplexml_load_string($xmlString);
//
//        $json = json_encode($xmlObject);
//        $phpArray = json_decode($json, true);
//
//        dd($phpArray['item']);
        $this->middleware(function (Request $request, $next) {
            $data = array_pad(explode('.', $request->route()->getName()), 2, null);
            $pageName = str_replace('-', '_', $data[count($data) - 1]);
            $this->page = Page::whereName($pageName)->first();
            $this->view = "$data[0].$pageName";
            if (!view()->exists($this->view)) abort(404);
            return $next($request);
        });
    }

    public function home()
    {
        return view($this->view, ['page' => $this->page]);
    }

    public function faq()
    {
        return view($this->view, ['page' => $this->page]);
    }

    public function terms()
    {
        return view($this->view, ['page' => $this->page]);
    }

    public function about()
    {
        return view($this->view, ['page' => $this->page]);
    }

    public function support()
    {
        return view($this->view, ['page' => $this->page]);
    }

    public function affiliate()
    {
        return view($this->view, ['page' => $this->page]);
    }

    public function privacyPolicy()
    {
        return view($this->view, ['page' => $this->page]);
    }
}
