"use client";
import { validation } from "@/utilites/validation";
import { useRef, useState } from "react";
import Link from "next/link";



const Registration = () => {

  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async() => {
    setLoader(true);
    const isValid = validation(email.current.value, password.current.value);
    if(isValid) {
      setError(isValid);
      setLoader(false);
      return;
    }

    try {
      const fatchData = await fetch("/api/user",{
        method: "POST",
        headers:{
          "Content-Type":"application/json",
        },
        body: JSON.stringify({
          fname: fullName.current.value,
          email: email.current.value,
          password: password.current.value,
          userType: "user",
        }),
        })
      const data = await fatchData.json();
      if(fatchData.ok){ 
        window.location.href = "/home";
      }else{
        setError(data.message || "Registration failed");
      }
    } catch (error) {
      console.log("Error:", error);    
    }finally{
      setLoader(false);
    }
  };   

  return (
    <>
    {loader && <div className="absolute z-40 bg-black/50 backdrop-blur-sm w-screen h-screen flex items-center justify-center"><div className="w-15 h-15 border-6 border-blue-500 border-t-transparent rounded-full animate-spin"></div></div>}
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl p-6 grid md:grid-cols-2 gap-6">
        {/* Left: form */}
        <div className={`flex flex-col justify-center p-6`}>
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Join Us 🤝</h1>
          <form onSubmit={(e)=> e.preventDefault()} className="space-y-5">

            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                className="mt-1 block w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Full Name"
                ref={fullName}
                required
              />
            </div>

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

            <button
            type="button"
              onClick={handleSubmit}
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Sign Up
            </button>
          </form>

          <p className="text-red-600">{error}</p>

          <p className="mt-4 text-sm text-gray-600">
            Already have an account?
            <Link href="/login"><button className="ml-1 text-blue-600 hover:underline">
              Sign-in
            </button>
            </Link>
          </p>
        </div>

        {/* Right: animation */}
        <div className={`hidden md:flex items-center justify-center`}>
          <img src="/login.png" alt="Logo" className="mb-4 drop-shadow-xl/50" />
        </div>
      </div>
    </div>
    </>
  );
}

export default Registration;
