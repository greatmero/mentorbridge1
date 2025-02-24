"use client";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-900 text-white">
      <div className="max-w-md w-full bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Login to MentorBridge</h1>
        
        {/* Email Login */}
        <button className="w-full bg-blue-500 py-3 rounded-lg text-white font-semibold hover:bg-blue-600 transition mb-3">
          Login with Email
        </button>

        {/* Google Login */}
        <button className="w-full bg-red-500 py-3 rounded-lg text-white font-semibold hover:bg-red-600 transition mb-3">
          Login with Google
        </button>

        {/* Facebook Login */}
        <button className="w-full bg-blue-700 py-3 rounded-lg text-white font-semibold hover:bg-blue-800 transition mb-3">
          Login with Facebook
        </button>

        <p className="text-center text-gray-400 mt-4">
          Don&apos;t have an account? <Link href="/auth/signup" className="text-yellow-400 hover:underline">Sign Up</Link>
        </p>
      </div>
    </div>
  );
}
