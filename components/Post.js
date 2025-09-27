"use client"
import Link from "next/link"
import { useSelector } from "react-redux"
import ShimmerCard from "./ShimmerCard"


const Post = () => {
  const data = useSelector((store)=>store.blog.data)
  
  return (
    <>
      <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>

      <div className="space-y-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
        {data == 0 ? (Array.from({ length:20 }).map((_,idx)=>(<ShimmerCard key={idx}/> ))
          )
        :
          data.map((post) => (
            <>
            <div className="rounded hover:bg-gray-200 mb-3 ">
            <div className="space-y-2">
                <img src={ post.blogImg } className="h-48 w-full rounded-t-lg object-cover"/>
                <div className="p-2 space-y-1">
                  <h2 className="font-semibold text-2xl line-clamp-1">{post.title}</h2>
                  <p className="text-gray-600 flex-grow line-clamp-3">{post.description}</p>
                  <Link href={`/${post._id}`} key={post._id} prefetch={true}><button className="text-blue-500 hover:underline mb-5 cursor-pointer">Read More</button></Link>
                </div>


            </div>
            </div>
            </>
        ))}
      </div>
    </div>

    </>
  )
}

export default Post