<?php

namespace App\Http\Controllers;

use App\Models\Survay;
use App\Http\Requests\StoreSurvayRequest;
use App\Http\Requests\UpdateSurvayRequest;
use Illuminate\Http\Request;

class SurvayController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreSurvayRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        return response()->json([
            'error' => false,
            'message' => 'successfully recieved learning events details ',
            'data'=> $request->all()
        ], 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Survay  $survay
     * @return \Illuminate\Http\Response
     */
    public function show(Survay $survay)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Survay  $survay
     * @return \Illuminate\Http\Response
     */
    public function edit(Survay $survay)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateSurvayRequest  $request
     * @param  \App\Models\Survay  $survay
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateSurvayRequest $request, Survay $survay)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Survay  $survay
     * @return \Illuminate\Http\Response
     */
    public function destroy(Survay $survay)
    {
        //
    }
}
