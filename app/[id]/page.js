"use client";
import { useParams } from 'next/navigation';
import React from 'react'
import { useSelector } from 'react-redux'

const Page = () => {
    const { id } = useParams();
    // console.log(id)
    const data = useSelector((store)=> store.blog.data)
    // console.log(data?.[0]?.[`${id}`])

    const {urlToImage, title, description} = data?.[0]?.[`${id}`];
  return (
    <>
        <div className="border p-3 rounded cursor-pointer hover:bg-gray-200 mb-3">
            <div className="grid grid-cols-12 gap-2">
              <div className="col-span-4"><img src={urlToImage}/></div>
              <div className="col-span-8">
                <h2 className="font-semibold text-2xl">{title}</h2>
                <p className="text-gray-600">{description}</p>
              </div>
            </div>
        </div>
    </>
  )
}

export default Page