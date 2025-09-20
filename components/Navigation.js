"use client";
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Navigation = () => {
    const [logOutMenu, setLogOutMenu] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("user");
        localStorage.removeItem("userToken"); // Clear session
        window.location.href = "/login"; // Redirect to login
    };

    useEffect(() => {

        const data = localStorage.getItem("user");
        const userName = JSON.parse(data)?.name;
    }, []);
  return (
    <>
        <nav className='container px-10 py-5 primary-bg secondry-text'>
            <div className='flex justify-between'>

                {/* LOGO */}
                <div>
                    <h1 className='font-semibold text-2xl'>BLOG</h1>
                </div>

                {/* Navigation Link */}
                <div className='my-auto'>
                    <ul className='flex gap-10'>
                        <li className=''><Link href="/home">Home</Link></li>
                        <li><Link href="/about">About</Link></li>
                        <li><Link href="/blog">Blog</Link></li>
                    </ul>
                </div>

                {/* User Name */}
                <div className="relative my-auto">
                    {/* Trigger */}
                    <button
                        onClick={() => setLogOutMenu((prev) => !prev)}
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium transition"
                    >
                        <span>{userName || "Guest"}</span>
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className={`h-4 w-4 transform transition-transform ${
                            logOutMenu ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>

                    {/* Dropdown */}
                    {logOutMenu && (
                        <div
                        onClick={handleLogout}
                        className="absolute right-0 mt-2 w-40 rounded-xl bg-white shadow-lg ring-1 ring-black/5 text-gray-700 hover:bg-gray-50 cursor-pointer transition p-3"
                        >
                        <span className="block text-sm font-medium text-center">Log out</span>
                        </div>
                    )}
                    </div>

            </div>
        </nav>
    </>
  )
}

export default Navigation