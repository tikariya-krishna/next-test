"use client";
import { validation } from "@/utilites/validation";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Page = () => {
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");
  const email = useRef(null);
  const password = useRef(null);
  const router = useRouter();

  // ✅ If user already logged in, redirect to /home
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        router.push("/home");
      }
    }
  }, [router]);

  const handleSubmit = async () => {
    setLoader(true);
    setError("");

    const isValid = validation(email.current.value, password.current.value);
    if (isValid !== null) {
      setError(isValid);
      setLoader(false);
      return;
    }

    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.current.value,
          password: password.current.value,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        // ✅ Store user & token only in the browser
        if (typeof window !== "undefined") {
          localStorage.setItem("userToken", JSON.stringify(data.token));
          localStorage.setItem("user", JSON.stringify(data.user));
        }
        router.push("/home");
      } else {
        setError(data.message || "Login failed");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoader(false);
    }
  };

  return (
    <>
      {/* Loader overlay */}
      {loader && (
        <div className="absolute z-40 bg-black/50 backdrop-blur-sm w-screen h-screen flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-6 grid md:grid-cols-2 gap-6">
          {/* Left image section */}
          <div className="hidden md:flex items-center justify-center">
            <img
              src="/login.png"
              alt="Login"
              className="mb-4 drop-shadow-xl/50"
            />
          </div>

          {/* Right form section */}
          <div className="flex flex-col justify-center p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
              Welcome Back 👋
            </h1>

            <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  ref={email}
                  className="mt-1 block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="you@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  type="password"
                  ref={password}
                  className="mt-1 block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="••••••••"
                  required
                />
              </div>

              {error && (
                <p className="text-red-600 text-sm font-medium">{error}</p>
              )}

              <button
                type="button"
                onClick={handleSubmit}
                disabled={loader}
                className={`w-full text-white py-2 rounded-lg transition cursor-pointer ${
                  loader
                    ? "bg-gray-400"
                    : "bg-blue-600 hover:bg-blue-700"
                }`}
              >
                {loader ? "Signing in..." : "Sign in"}
              </button>
            </form>

            <p className="mt-4 text-sm text-gray-600">
              Don&apos;t have an account?
              <Link href="/" className="ml-1 text-blue-600 hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
