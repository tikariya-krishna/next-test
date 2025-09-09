"use client"
import Link from "next/link"
import { useSelector } from "react-redux"
import useFetchingData from '@/utilites/useFetchingData'

const Post = () => {
  const data = useSelector((store)=>store.blog.data)
  // console.log(data);
  
  return (
    <>
      <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>

      <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        {data == 0 ? "no data" : data.map((post) => (
          <Link href={`/${post.id}`} key={post.id} >
            <div className="border p-3 rounded cursor-pointer hover:bg-gray-200 mb-3">
            <div className="space-y-4">
                <img src={post.featured_image} className="h-48 w-full"/>
                <h2 className="font-semibold text-2xl line-clamp-1">{post.title}</h2>
                <p className="text-gray-600 flex-grow line-clamp-3">{post.main_content}</p>
            </div>
            </div>
          </Link>
        ))}
      </div>
    </div>

    </>
  )
}

export default Post