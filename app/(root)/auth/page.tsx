"use client"; // Marks this as a Client Component

import React from "react";
import { useRouter } from 'next/navigation' // Adjust path to your router config
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { auth, googleProvider } from "@/lib/firebase"; // Adjust path to your firebase config
import { signInWithPopup } from "firebase/auth";

const Signup = () => {
  const router = useRouter();
  // Handle Google Sign-In
  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      console.log("Signed in with Google:", user);
      // Redirect or handle the signed-in user here (e.g., router.push("/dashboard"))
      router.push("/dashboard");
    } catch (error) {
      console.error("Google Sign-In Error:", error);
      // Optionally show an error message to the user
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md border border-gray-200">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-gray-900">Sign Up</h1>
          <p className="mt-1 text-sm text-gray-500">
            Create an account to get started.
          </p>
        </div>

        {/* Form */}
        <form className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="username" className="text-gray-700 font-medium">
              Username
            </Label>
            <Input
              id="username"
              type="text"
              placeholder="johndoe"
              className="w-full border-gray-300 focus:border-gray-500 focus:ring-gray-500 transition-all duration-200"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-700 font-medium">
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full border-gray-300 focus:border-gray-500 focus:ring-gray-500 transition-all duration-200"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-700 font-medium">
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="••••••••"
              className="w-full border-gray-300 focus:border-gray-500 focus:ring-gray-500 transition-all duration-200"
            />
          </div>

          <Button
            type="submit"
            className={cn(
              "w-full bg-gray-900 hover:bg-gray-800 text-white font-medium py-2 rounded-md transition-all duration-300"
            )}
          >
            Sign Up
          </Button>
        </form>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-gray-300" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">
              Or continue with
            </span>
          </div>
        </div>

        {/* Google Sign-In Button */}
        <Button
          variant="outline"
          className={cn(
            "w-full border-gray-400 bg-gray-50 text-gray-900 font-medium py-2.5 px-4 rounded-md transition-all duration-300 flex items-center justify-center gap-3"
          )}
          onClick={handleGoogleSignIn}
        >
          <svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.24 10.32v3.25h4.74c-.19 1.03-.73 1.9-1.59 2.53-.86.63-1.91 1-3.15 1-2.67 0-4.91-2.24-4.91-5s2.24-5 4.91-5c1.21 0 2.31.47 3.15 1.24l2.29-2.29C16.47 4.47 14.47 3 12.24 3c-4.42 0-8 3.58-8 8s3.58 8 8 8c4.61 0 7.67-3.24 7.67-7.78 0-.52-.05-1.03-.14-1.52h-7.53z"
              fill="#000000"
            />
            <path
              d="M4.24 12c0-1.1.29-2.13.79-3.03l-2.29-2.29C1.47 8.47 1 10.24 1 12s.47 3.53 1.24 5.32l2.29-2.29c-.5-.9-.79-1.93-.79-3.03z"
              fill="#333333"
            />
            <path
              d="M12.24 19c2.23 0 4.23-.76 5.79-2.03l-2.29-2.29c-.84.77-1.94 1.24-3.15 1.24-1.24 0-2.29-.37-3.15-1-.86-.63-1.4-1.5-1.59-2.53H3.5v3.25C5.47 17.76 8.71 19 12.24 19z"
              fill="#666666"
            />
            <path
              d="M7.5 13.75c.19-1.03.73-1.9 1.59-2.53.86-.63 1.91-1 3.15-1v-3.25c-2.23 0-4.23.76-5.79 2.03l2.29 2.29c-.84-.77-1.24-1.24-1.24-1.24z"
              fill="#999999"
            />
          </svg>
          Sign in with Google
        </Button>

        {/* Footer */}
        <div className="text-center text-sm text-gray-600">
          Already have an account?{" "}
          <a href="/login" className="text-gray-900 hover:underline">
            Log in
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;