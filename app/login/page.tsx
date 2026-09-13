import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-4 py-16">
        <div className="w-full max-w-md bg-neutral-950 border border-gray-800 rounded-xl p-8">
          <div className="flex flex-col items-center mb-6">
            <div className="w-10 h-10 bg-amber-300 rounded flex items-center justify-center font-bold text-black mb-2">
              B
            </div>
            <p className="text-amber-300 text-xs tracking-widest uppercase mb-4">Business Nuggets</p>
            <h1 className="text-white text-2xl font-serif font-semibold">Welcome Back</h1>
            <p className="text-gray-400 text-sm mt-1 text-center">
              Reclaim your leadership with eternal wisdom today.
            </p>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-gray-300 text-sm mb-1">Email Address</label>
              <input
                type="email"
                placeholder="e.g. solomon@kingdomventures.com"
                className="w-full bg-black border border-gray-700 rounded-md px-3 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm mb-1">Password</label>
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full bg-black border border-gray-700 rounded-md px-3 py-2 text-white placeholder-gray-600 focus:outline-none focus:border-amber-500"
              />
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-400">
                <input type="checkbox" className="accent-amber-300" />
                Remember me
              </label>
              <Link href="/forgot-password" className="text-amber-300 hover:underline">
                Forgot Password?
              </Link>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-300 text-black font-medium py-2 rounded-md hover:bg-amber-400 transition"
            >
              Sign In
            </button>
          </form>

          <p className="text-center text-gray-400 text-sm mt-6">
            New to the platform?{" "}
            <Link href="/register" className="text-amber-300 hover:underline">
              Create an account
            </Link>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}