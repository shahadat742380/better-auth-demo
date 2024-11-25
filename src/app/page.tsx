"use client";

import { authClient } from "@/lib/auth-client";

export default function Home() {
  const signInWithGoogle = async () => {
    try {
      const result = await authClient.signIn.social({
        provider: "google",
        callbackURL: "http://localhost:3001",
      });

      console.log("Result", result);

      if (result.error) {
        console.error("Error signing in with Google:", result.error);
        alert("Failed to sign in with Google.");
        return;
      }

      console.log("Sign-in successful:", result);
    } catch (error) {
      console.error("Unexpected error during Google sign-in:", error);
      alert("An unexpected error occurred. Please try again.");
    }
  };

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold mb-4">Home Page</h1>
      <button
        onClick={signInWithGoogle}
        className="px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        Sign in with Google
      </button>
    </main>
  );
}
