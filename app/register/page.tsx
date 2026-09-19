import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navbar />

      <main className="flex-1 flex items-center justify-center px-4 sm:px-6 py-10 sm:py-16">
        <div className="w-full max-w-sm sm:max-w-md bg-neutral-950 border border-gray-800 rounded-xl p-6 sm:p-8">
          <div className="text-center mb-6">
            <h1 className="text-white text-xl sm:text-2xl font-serif font-semibold">Create Your Account</h1>
            <p className="text-gray-400 text-sm mt-1">
              Join a global network of purpose-driven marketplace executives.
            </p>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-gray-300 text-sm mb-1">Full Name</label>
              <input
                type="text"
                placeholder="e.g. Nehemiah Vance"
                className="w-full bg-black border border-gray-700 rounded-md px-3 py-2 text-white placeholder-gray-600 text-sm sm:text-base focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm mb-1">Email Address</label>
              <input
                type="email"
                placeholder="e.g. builder@jerusalemcorp.org"
                className="w-full bg-black border border-gray-700 rounded-md px-3 py-2 text-white placeholder-gray-600 text-sm sm:text-base focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm mb-1">Password</label>
              <input
                type="password"
                placeholder="Create a secure password"
                className="w-full bg-black border border-gray-700 rounded-md px-3 py-2 text-white placeholder-gray-600 text-sm sm:text-base focus:outline-none focus:border-amber-500"
              />
            </div>

            <div>
              <label className="block text-gray-300 text-sm mb-1">Confirm Password</label>
              <input
                type="password"
                placeholder="Re-enter your password"
                className="w-full bg-black border border-gray-700 rounded-md px-3 py-2 text-white placeholder-gray-600 text-sm sm:text-base focus:outline-none focus:border-amber-500"
              />
            </div>

            <label className="flex items-start gap-2 text-gray-400 text-xs sm:text-sm">
              <input type="checkbox" className="accent-amber-500 mt-1 flex-shrink-0" />
              I agree to the Terms of Service and Privacy Policy.
            </label>

            <button
              type="submit"
              className="w-full bg-amber-300 text-black font-medium py-2.5 sm:py-2 rounded-md hover:bg-amber-400 active:bg-amber-500 transition"
            >
              Create Account
            </button>
          </form>

          <p className="text-center text-gray-400 text-sm mt-6">
            Already have an account?{" "}
            <Link href="/login" className="text-amber-300 hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}