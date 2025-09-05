"use client"
import Link from "next/link"
import { useSelector } from "react-redux"


const Post = () => {
  const data = useSelector((store)=>store.blog.data)
  
  return (
    <>
      <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Posts</h1>

      <div className="space-y-4">
        {data == 0 ? "no data" : data[0].map((post,idx) => (
          <Link href={`/${idx}`} key={idx} >
            <div className="border p-3 rounded cursor-pointer hover:bg-gray-200 mb-3">
            <div className="grid grid-cols-12 gap-2">
              <div className="col-span-4"><img src={post.urlToImage}/></div>
              <div className="col-span-8">
                <h2 className="font-semibold text-2xl">{post.title}</h2>
                <p className="text-gray-600">{post.description}</p>
              </div>
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