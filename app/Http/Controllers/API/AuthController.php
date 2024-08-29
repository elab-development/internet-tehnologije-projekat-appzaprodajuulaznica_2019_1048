<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Http\Requests\ForgotPasswordRequest;
use App\Http\Requests\ResetPasswordRequest;
use App\Http\Resources\UserResource;
use App\Models\PasswordReset;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use App\Models\User;
use App\Notifications\PasswordResetNotification;
use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Http\JsonResponse;

class AuthController extends Controller
{
    public function register(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:8'
        ]);

        if ($validator->fails()) {
            return response()->json($validator->errors());
        }

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password)
        ]);

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json(['data' => $user, 'access_token' => $token, 'token_type' => 'Bearer']);
    }

    public function login(Request $request)
    {
        if (!Auth::attempt($request->only('email', 'password'))) {
            return response()->json(['success' => false]);
        }

        $user = User::where('email', $request['email'])->firstOrFail();

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()
            ->json(['success' => true, 'access_token' => $token, 'token_type' => 'Bearer']);
    }

    public function logout()
    {
        auth()->user()->tokens()->delete();
        return [
            'message' => 'Logout successfull.'
        ];
    }

    public function forgot(ForgotPasswordRequest $request): JsonResponse
    {
        $user = ($query = User::query());

        $user = $user->where($query->qualifyColumn('email'), $request->input('email'))->first();

        if (!$user || !$user->email) {
            return response()->error('No Record Found', 'Incorrect Email Adress Provided', 404);
        }

        $resetPasswordToken = str_pad(random_int(1, 9999), 4, '0', STR_PAD_LEFT);

        if ($userPassReset = PasswordReset::where('email', $user->email)->first()) {
            PasswordReset::create([
                'email' => $user->email,
                'token' => $resetPasswordToken,
            ]);
        } else {
            $userPassReset->update([
                'email' => $user->email,
                'token' => $resetPasswordToken,
            ]);
        }

        $user->notify(
            new PasswordResetNotification(
                $user,
                $resetPasswordToken
            )
        );

        return new JsonResponse(['message' => 'A code has been sent to your email adress.']);
    }

    public function reset(ResetPasswordRequest $request): JsonResponse
    {
        $attributes = $request->validated();

        $user = User::where('email', $attributes['email'])->first();

        if (!$user) {
            return response()->error('No Record Found', 'Incorrect Email Adress Provided', 404);
        }

        $resetRequest = PasswordReset::where('email', $user->email)->first();

        if (!$resetRequest || $resetRequest->token != $request->token) {
            return response()->error('An Error Occured. Please Try Again.', 'Token mismatch.', 400);
        }

        $user->fill([
            'password' => Hash::make($attributes['password']),
        ]);
        $user->save();

        $user->tokens()->delete();

        $resetRequest->delete();

        $token = $user->createToken('auth_token')->plainTextToken;

        $loginResponse = [
            'user' => UserResource::make($user),
            'token' => $token
        ];

        return response()->success($loginResponse, 'Password Reset Successfully.', 201);
    }
}
