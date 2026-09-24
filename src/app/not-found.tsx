import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-near-black">
      <div className="text-center">
        <h1 className="font-sans text-6xl font-bold text-almost-white">404</h1>
        <p className="mt-4 font-sans text-lg text-steel">This page does not exist.</p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-lg border border-almost-white bg-near-black px-6 py-3 font-sans text-sm text-almost-white transition-opacity hover:opacity-90"
        >
          Back Home
        </Link>
      </div>
    </div>
  );
}
