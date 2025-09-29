"use client"
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { useSelector } from 'react-redux';
import { resolve } from 'styled-jsx/css';


const Page = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [blogImg, setBlogImg] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  
    const params = useParams()
    console.log(params);
    const data = useSelector((store) => store.blog.data);

    useEffect(()=>{
      if(data.length !== 0){
        const blogData = data.find((item) => item._id === params.id);
        console.log(blogData);

        setTitle(blogData.title);
        setDescription(blogData.description);
        setBlogImg(blogData.blogImg);
        setPreview(blogData.blogImg);
      }
    },[params?.id , data])
    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        setLoading(true);

        try {
          const res = await fetch("/api/blog",{
            method:"PUT",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({id:params.id, title,description,blogImg})
          })
          const data = await res.json();
          if(res.ok){
            setMessage("✅ Blog updated successfully! Redirecting...");
            setTimeout(() => window.location.href="/home", 2000);
          }else{
            setMessage(`❌ Failed: ${data.error || "Unknown error"}`);
          }
          
        } catch (error) {
          console.log(error);
          setMessage("❌ Something went wrong!");

        }finally{
          setLoading(false);
        }
      }
  return (
    <>
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 to-purple-200 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md transform transition duration-300 hover:scale-[1.02]"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          ✍️ Create New Blog
        </h2>

        {/* Title */}
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all"
          required
        />

        {/* Description */}
        <textarea
          placeholder="Enter Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all min-h-[100px]"
          required
        />

        {/* File Upload */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Upload Image
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={async (e) => {
              const file = e.target.files[0];
              if (file) {
                const base64 = await convertToBase64(file);
                setBlogImg(base64);
                setPreview(URL.createObjectURL(file)); // preview image
              }
            }}
            className="w-full text-sm border rounded-lg cursor-pointer px-3 py-2 bg-gray-50 hover:bg-gray-100 transition"
          />
          {preview && (
            <img
              src={preview}
              alt="Preview"
              className="mt-3 w-full h-40 object-cover rounded-lg shadow"
            />
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full py-2 rounded-lg text-white text-lg font-medium shadow-md transition-transform duration-300 ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 hover:-translate-y-1 active:scale-95"
          }`}
        >
          {loading ? "⏳ Saving..." : "🚀 Submit"}
        </button>

        {/* Message */}
        {message && (
          <p
            className={`mt-4 text-center text-sm font-medium ${
              message.startsWith("✅")
                ? "text-green-600 animate-pulse"
                : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}
      </form>
    </div>

    </>
  )
}

export default Page

const convertToBase64 = (file) =>
  new Promise((resolve,reject)=>{
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload =()=> resolve(reader.result);
    reader.onerror = (error) => reject(error);
  })