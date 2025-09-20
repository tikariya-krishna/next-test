"use client";
import { useParams, useRouter } from 'next/navigation';
import React from 'react'
import { useSelector } from 'react-redux'
import photo from '@/public/photo.png'
import {deleteblog} from '@/services/blogServices';

const Page = () => {
    const { id } = useParams();
    const route = useRouter();
    const data = useSelector((store)=> store.blog.data)
    const article = data?.find((item) => String(item._id) === String(id));
    const { title, description} = article;

    const deleteblogData = async(id) =>{
        try {
          const data = await deleteblog(id);
          if(data) route.push('/');
        } catch (error) {
          alert(error.message);
        }
    }
  return (
    <>
      <div className='pt-32'>
        <div className="border p-3 rounded cursor-pointer hover:bg-gray-200 mb-24">
            <div className="grid grid-cols-12 gap-2">
              <div className="col-span-12 md:col-span-4">
                <img src={photo}/>
                </div>
              <div className="col-span-12 md:col-span-8">
                <h2 className="font-semibold text-2xl">{title}</h2>
                <p className="text-gray-600 text-justify">{description}</p>
                <button onClick={()=>deleteblogData(id)} className='bg-red-500 text-white px-3 py-1 rounded mt-3'>Delete</button>
                <div className='mt-3'>
                <span className='text-blue-500 underline cursor-pointer mr-3'>Edit</span>
                <span className='text-blue-500 underline cursor-pointer'>Read More</span>
                </div>
              </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Page