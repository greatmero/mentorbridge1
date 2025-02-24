"use client";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-900 text-white">
      <div className="max-w-md w-full bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Create an Account</h1>
        
        {/* Email Signup */}
        <button className="w-full bg-blue-500 py-3 rounded-lg text-white font-semibold hover:bg-blue-600 transition mb-3">
          Sign Up with Email
        </button>

        {/* Google Signup */}
        <button className="w-full bg-red-500 py-3 rounded-lg text-white font-semibold hover:bg-red-600 transition mb-3">
          Sign Up with Google
        </button>

        {/* Facebook Signup */}
        <button className="w-full bg-blue-700 py-3 rounded-lg text-white font-semibold hover:bg-blue-800 transition mb-3">
          Sign Up with Facebook
        </button>

        <p className="text-center text-gray-400 mt-4">
          Already have an account? <Link href="/auth/login" className="text-yellow-400 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
}
