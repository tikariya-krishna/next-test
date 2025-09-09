"use client";
import { useParams } from 'next/navigation';
import React from 'react'
import { useSelector } from 'react-redux'

const Page = () => {
    const { id } = useParams();
    const data = useSelector((store)=> store.blog.data)
    const article = data?.find((item) => String(item.id) === String(id));

    const {featured_image, title, main_content} = article;
  return (
    <>
        <div className="border p-3 rounded cursor-pointer hover:bg-gray-200 mb-3">
            <div className="grid grid-cols-12 gap-2">
              <div className="col-span-12 md:col-span-4"><img src={featured_image}/></div>
              <div className="col-span-12 md:col-span-8">
                <h2 className="font-semibold text-2xl">{title}</h2>
                <p className="text-gray-600 text-justify">{main_content}</p>
              </div>
            </div>
        </div>
    </>
  )
}

export default Page