"use client";
import { useState } from "react";
import Image from "next/image";

export default function RegisterPage() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const res = await fetch("/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value,
      }),
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      alert("Account created successfully! You can now log in.");
      window.location.href = "/login";
    } else {
      alert(data.error || "Something went wrong");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-7xl grid md:grid-cols-2 gap-12 items-center bg-white rounded-3xl shadow-2xl overflow-hidden">
        
        {/* ===== LEFT SIDE – Register Form ===== */}
        <div className="p-10 md:p-16 order-2 md:order-1">
          <div className="max-w-md mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center md:text-left">
              Create Account
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  placeholder="John Doe"
                  className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-200 focus:border-orange-500 transition"
                />
              </div>

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
                  minLength="6"
                  placeholder="••••••••"
                  className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-orange-200 focus:border-orange-500 transition"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-orange-600 hover:bg-orange-700 disabled:bg-orange-400 text-white font-bold py-4 rounded-xl transition duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:cursor-not-allowed"
              >
                {loading ? "Creating Account..." : "Sign Up"}
              </button>
            </form>

            <p className="text-center text-sm text-gray-600 mt-8">
              Already have an account?{" "}
              <a href="/login" className="text-orange-600 font-bold hover:underline">
                Log in
              </a>
            </p>
          </div>
        </div>

        {/* register form */}
        <div className="p-12 md:p-16 flex flex-col justify-center h-2/3 order-1 md:order-2 border-l-2 border-orange-600 ">
          {/* Logo */}
          <div className="mb-10">
            <Image
              src="/images/logo.png"
              alt="Recipes Logo"
              width={180}
              height={180}
              className="drop-shadow-2xl"
            />
          </div>

          <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
            Join With<br />
            <span className="text-orange-600">Flavor Vault</span>
          </h1>

          <p className="text-xl md:text-2xl opacity-95 leading-relaxed">
            Save your favorite recipes, share your own creations,
            and connect with food lovers around the world.
          </p>

          <div className="mt-10 flex items-center gap-4">
            <span className="text-lg">Start cooking with passion</span>
            <div className="w-16 h-1 bg-white/40 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}