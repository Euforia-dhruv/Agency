import type { Metadata } from "next";
import { LoginForm } from "@/components/admin/login-form";

export const metadata: Metadata = {
  title: "Admin Login",
};

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-near-black px-6">
      <div className="w-full max-w-sm">
        <h1 className="font-sans text-2xl font-normal tracking-tight text-almost-white">Admin</h1>
        <p className="mt-1 font-sans text-sm text-steel">Sign in to manage your site.</p>
        <div className="mt-8">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}
