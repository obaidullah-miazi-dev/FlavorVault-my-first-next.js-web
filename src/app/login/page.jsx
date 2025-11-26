"use client";

import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { redirect } from "next/navigation";
import Swal from "sweetalert2";

export default function LoginPage() {
  const { data: session } = useSession();
  async function handleLogin(e) {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (result?.error) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Login failed: " + result.error,
        showConfirmButton: false,
        timer: 1500,
      });
    } else if (result?.ok) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Loged In successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      window.location.href = "/recipes";
    }
  }

  if (session) {
    redirect("/");
  }

  return (
    <div className="min-h-screen  flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-7xl grid md:grid-cols-2 gap-12 items-center bg-white rounded-3xl shadow-2xl overflow-hidden">
        {/* logo and texts */}
        <div className="bg-white p-12 md:p-16 flex flex-col justify-center h-2/3 md:border-r-2 md:border-orange-600">
          {/* logo  */}
          <div className="mb-10 mx-auto">
            <Image
              src="/images/Logo.png"
              alt="Recipes Logo"
              width={180}
              height={180}
              className="drop-shadow-lg"
            />
          </div>

          <h1 className="text-5xl text-center md:text-left font-bold leading-tight mb-6">
            Welcome Back to,
            <br />
            <span className="text-orange-600">Flavor Vault</span>
          </h1>

          <p className="text-xl md:text-2xl md:text-left text-center opacity-95 leading-relaxed">
            Discover thousands of delicious recipes, save your favorites, and
            share your own culinary creations.
          </p>
        </div>

        {/* login form  */}
        <div className="p-10 md:p-16">
          <div className="max-w-md mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center md:text-left">
              Sign In
            </h2>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-200 focus:border-orange-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>
                <input
                  name="password"
                  type="password"
                  required
                  placeholder="••••••••"
                  className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-200 focus:border-orange-500 transition"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 rounded-xl transition duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Sign In
              </button>
            </form>

            <div className="my-8 flex items-center">
              <div className="flex-1 border-t border-gray-300"></div>
              <span className="px-4 text-sm text-gray-500">or</span>
              <div className="flex-1 border-t border-gray-300"></div>
            </div>

            <button
              type="button"
              onClick={() => signIn("google")}
              className="w-full border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-medium py-4 rounded-xl flex items-center justify-center gap-3 transition hover:bg-gray-50"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 6.75c1.63 0 3.06.56 4.21 1.65l3.15-3.15C16.81 2.61 14.46 1.5 12 1.5c-4.3 0-8.07 2.47-9.88 6.09l3.66 2.84C6.71 7.93 9.14 6.75 12 6.75z"
                />
              </svg>
              Continue with Google
            </button>

            <p className="text-center text-sm text-gray-600 mt-8">
              Don’t have an account?{" "}
              <a
                href="/register"
                className="text-orange-600 font-bold hover:underline"
              >
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
