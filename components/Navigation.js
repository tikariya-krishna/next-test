"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navigation = () => {
  const [logOutMenu, setLogOutMenu] = useState(false);
  const [userName, setUserName] = useState("");

  // ✅ Safely get username from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        try {
          const parsed = JSON.parse(storedUser);
          setUserName(parsed?.name || "");
        } catch (err) {
          console.error("Invalid user in localStorage:", err);
        }
      }
    }
  }, []);

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("user");
      localStorage.removeItem("userToken");
      setLogOutMenu(false);
      window.location.href = "/login";
    }
  };

  return (
    <nav className="container px-10 py-5 primary-bg secondry-text">
      <div className="flex justify-between items-center">
        {/* LOGO */}
        <h1 className="font-semibold text-2xl">BLOG</h1>

        {/* Navigation Links */}
        <ul className="hidden sm:flex gap-8 font-medium">
          <li>
            <Link href="/home">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>

        {/* User dropdown */}
        <div className="relative">
          <button
            onClick={() => setLogOutMenu((prev) => !prev)}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium transition"
          >
            <span>{userName || "Guest"}</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-4 w-4 transition-transform ${
                logOutMenu ? "rotate-180" : ""
              }`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          {logOutMenu && (
            <div
              onClick={handleLogout}
              className="absolute right-0 mt-2 w-40 rounded-xl bg-white shadow-lg ring-1 ring-black/5 text-gray-700 hover:bg-gray-50 cursor-pointer p-3 transition"
            >
              <span className="block text-sm font-medium text-center">
                Log out
              </span>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
