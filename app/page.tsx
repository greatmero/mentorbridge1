"use client";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-900 via-blue-700 to-blue-500 text-white px-6">
      <div className="max-w-4xl text-center">
        <h1 className="text-6xl font-extrabold leading-tight tracking-wide drop-shadow-lg text-white">
          🚀 Welcome to <span className="text-cyan-300">MentorBridge</span>
        </h1>
        <p className="mt-4 text-lg md:text-xl text-gray-200">
          We are building something <span className="font-bold text-white">EXTRAORDINARY!</span>  
          Stay tuned for an experience that connects mentors and learners in a whole new way.
        </p>

        <div className="mt-8 flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
          <Link href="/auth/login">
            <button className="bg-cyan-400 text-gray-900 font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-cyan-300 transition transform hover:scale-105">
              Login
            </button>
          </Link>
          <Link href="/auth/signup">
            <button className="bg-white text-blue-700 font-bold px-8 py-3 rounded-lg shadow-lg hover:bg-gray-300 transition transform hover:scale-105">
              Sign Up
            </button>
          </Link>
        </div>
      </div>

      {/* Footer Section */}
      <div className="absolute bottom-6 text-gray-300 text-sm">
        <p>🚀 Launching Soon | Stay Connected for Updates!</p>
      </div>
    </div>
  );
}
