<?php

namespace app\controller;

use support\Request;

class IndexController
{
    public function index(Request $request)
    {
        return view('index/view', ['name' => 'webman']);
    }
}
