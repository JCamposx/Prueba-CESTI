<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use App\Http\Requests\Auth\RegisterRequest;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    /**
     * Validate data for user register.
     *
     * @param RegisterRequest $request
     * @return void
     */
    public function register(RegisterRequest $request)
    {
        $data = $request->validated();

        $data['password'] = Hash::make($data['password']);

        $user = User::create($data);

        $token = $user->createToken('token')->accessToken;

        return response()->json([
            'user' => $user,
            'token' => $token,
        ], 200);
    }

    /**
     * Validate data for user login.
     *
     * @param LoginRequest $request
     * @return void
     */
    public function login(LoginRequest $request)
    {
        $credentials = $request->validated();

        if (!Auth::attempt($credentials)) {
            return response()->json([
                'message' => 'Incorrect username or password'
            ], 401);
        }


        $token = Auth::user()->createToken('token')->accessToken;

        return response()->json([
            'user' => Auth::user(),
            'token' => $token,
        ], 200);
    }

    /**
     * Remove tokens for user logout.
     *
     * @return void
     */
    public function logout()
    {
        Auth::user()->token()->revoke();

        return response()->json([
            'message' => 'Logout successfully'
        ], 200);
    }
}
