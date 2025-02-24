"use client";
import { useRouter } from "next/navigation";

export default function LogoutPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-900 text-white">
      <div className="max-w-md w-full bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-6">Logout</h1>
        <p className="text-center text-gray-400 mb-4">
          Are you sure you want to log out?
        </p>
        
        <button className="w-full bg-red-500 py-3 rounded-lg text-white font-semibold hover:bg-red-600 transition mb-3">
          Confirm Logout
        </button>

        <button className="w-full bg-gray-500 py-3 rounded-lg text-white font-semibold hover:bg-gray-600 transition" onClick={() => router.push("/")}>
          Cancel
        </button>
      </div>
    </div>
  );
}
