"use client";
import Link from "next/link";
import { useUserAuth } from "../contexts/AuthContext";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  // Handler for login and logout
  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
  <main className="p-8 font-sans">
    <h1 className="text-2xl font-bold mb-4">Welcome to the Shopping List App</h1>

    {/* If user no, give opition to login */}
    {!user && (
      <button
        onClick={handleLogin}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Login with GitHub
      </button>
    )}

    {/* If user yes, show the name, email and link to week-9 */}
    {user && (
      <>
        <p className="mb-4">
          Welcome, <strong>{user.displayName}</strong> ({user.email})
        </p>

        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
        >
          Logout
        </button>

        <div className="mt-4">
          <Link
            href="./week-10/shopping-list"
            className="text-blue-600 underline hover:text-blue-800"
          >
            Go to Shopping List →
          </Link>
        </div>
      </>
    )}
  </main>
);
}