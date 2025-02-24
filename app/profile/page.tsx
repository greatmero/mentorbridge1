"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function ProfilePage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-900 text-white">
      <div className="max-w-md w-full bg-gray-800 p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4">Welcome to Your Profile</h1>

        {/* Placeholder for User Info */}
        <p className="text-lg text-gray-300">User: John Doe</p>
        <p className="text-gray-400">Email: johndoe@example.com</p>

        {/* Logout Button */}
        <button className="w-full mt-6 bg-red-500 py-3 rounded-lg text-white font-semibold hover:bg-red-600 transition" onClick={() => router.push("/auth/logout")}>
          Logout
        </button>

        {/* Back to Home */}
        <p className="text-center text-gray-400 mt-4">
          <Link href="/" className="text-yellow-400 hover:underline">Back to Home</Link>
        </p>
      </div>
    </div>
  );
}
