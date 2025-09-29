"use client"
import React from "react";
import { useSelector } from "react-redux";
import { deleteblog } from "@/services/blogServices";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Page = () => {
  const data = useSelector((store) => store.blog.data);
  const date = Date.now();  
  const route = useRouter();

  const deleteblogData = async(id) =>{
          try {
            const data = await deleteblog(id);
            if(data) route.push('/home');
          } catch (error) {
            alert(error.message);
          }
      }

  return (
    <div className="py-24 bg-gray-50 ">
      <ul className="w-3/5 space-y-6 mx-auto">
        {data.map((item,) => (
          <li
            key={item._id}
            className={`capitalize border px-5 py-2 rounded-lg shadow-lg bg-white relative overflow-hidden group  hover:shadow-2xl grid grid-cols-3 gap-4`}
          >
            {/* Trending Gradient Strip */}
            <span className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-pink-500 to-yellow-500 rounded-r-lg"></span>

            {/* Title */}
            <p className="text-2xl font-semibold text-gray-800 group-hover:text-pink-600 transition-colors duration-300 line-clamp-1">
              {item.title}
            </p>

            {/* Meta Info */}
            <div>
            <p className=" text-gray-400">📅 {item.createdAt}</p>
            </div>

            {/* Buttons */}
            <div className=" flex gap-4 align-right justify-end">
              <button className="cursor-pointer px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1 active:scale-95">
                <Link href={`/list/${item._id}`}> <i className="fas fa-edit"></i></Link>
              </button>
              <button onClick={()=>deleteblogData(item._id)} className="cursor-pointer px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1 active:scale-95">
                <i className="fa-solid fa-trash-can"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>

     
    </div>
  );
};

export default Page;
