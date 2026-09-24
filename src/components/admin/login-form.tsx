"use client";

import { useState } from "react";
import { useAuthActions } from "@convex-dev/auth/react";
import { useRouter } from "next/navigation";
import { Loader2 } from "lucide-react";

export function LoginForm() {
  const { signIn } = useAuthActions();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSignUp, setIsSignUp] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const formData = new FormData(form);
    formData.set("flow", isSignUp ? "signUp" : "signIn");

    try {
      await signIn("password", formData);
      router.push("/admin/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Invalid credentials");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="email" className="font-sans text-sm font-medium text-almost-white">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="mt-1 block w-full rounded-[6px] border border-zinc-700 bg-transparent px-3 py-2 font-sans text-sm text-almost-white placeholder:text-zinc-500 focus:border-signal-violet focus:outline-none focus:ring-1 focus:ring-signal-violet"
          placeholder="admin@example.com"
        />
      </div>

      <div>
        <label htmlFor="password" className="font-sans text-sm font-medium text-almost-white">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          className="mt-1 block w-full rounded-[6px] border border-zinc-700 bg-transparent px-3 py-2 font-sans text-sm text-almost-white placeholder:text-zinc-500 focus:border-signal-violet focus:outline-none focus:ring-1 focus:ring-signal-violet"
        />
      </div>

      {error && <p className="font-sans text-xs text-red-400">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-signal-violet px-4 py-2.5 font-sans text-sm font-medium text-almost-white transition-all hover:bg-signal-violet/90 disabled:opacity-50"
      >
        {loading && <Loader2 className="size-4 animate-spin" />}
        {loading ? "Please wait..." : isSignUp ? "Create Account" : "Sign In"}
      </button>

      <button
        type="button"
        onClick={() => {
          setIsSignUp(!isSignUp);
          setError(null);
        }}
        className="w-full text-center font-sans text-xs text-zinc-500 hover:text-almost-white transition-colors"
      >
        {isSignUp ? "Already have an account? Sign in" : "No account? Create one"}
      </button>
    </form>
  );
}
