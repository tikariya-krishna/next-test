"use client";
import { validation } from "@/utilites/validation";
import { useRef } from "react";
import Link from 'next/link'
import { useState } from "react";


const Page = () => {
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");
  const email = useRef(null);
  const password = useRef(null);

  const handleSubmit = async() => {
    setLoader(true);
    const isValid = validation(email.current.value, password.current.value);
    if(isValid !== null) {
      setError(isValid);
      setLoader(false);
      return;
    }

    try {
    const fatchData = await fetch("http://localhost:3000/api/login",{
        method: "POST",
        headers:{
          "Content-Type":"application/json",
        },
        body: JSON.stringify({
            email: email.current.value,
            password: password.current.value,
        }),  
    })
        const data = await fatchData.json();

        // Store token in local storage
        localStorage.setItem("userToken", JSON.stringify(data.token));
        localStorage.setItem("user", JSON.stringify(data.user));

        if (fatchData.ok) {
          window.location.href = "/home";
        } else {
          setError(data.message || "Login failed");
        }
    } catch (error) {
    }finally{
      setLoader(false);
    }
  };   
     
  return (
    <>
    {loader && 
    <div className="absolute z-40 bg-black/50 backdrop-blur-sm w-screen h-screen flex items-center justify-center"><div className="w-15 h-15 border-6 border-blue-500 border-t-transparent rounded-full animate-spin"></div></div>
    }
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-6 grid md:grid-cols-2 gap-6">
        
        <div className={`hidden md:flex items-center justify-center`}>
          <img src="/login.png" alt="Logo" className="mb-4 drop-shadow-xl/50" />
        </div>

        
        <div className={`flex flex-col justify-center p-6`}>
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome Back 👋</h1>
          <form onSubmit={(e)=> e.preventDefault()} className="space-y-5">


            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                className="mt-1 block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
                ref={email}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                className="mt-1 block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="••••••••"
                ref={password}
                required
              />
            </div>

             <p className="text-red-600">{error}</p>

            <button
            type="button"
              onClick={handleSubmit}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition cursor-pointer"
            >
              Sign in
            </button>
          </form>

          <p className="mt-4 text-sm text-gray-600">
            Don&apos;t have an account?
            <Link href="/"><button className="ml-1 text-blue-600 hover:underline">
              Sign-up
            </button>
            </Link>
          </p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Page