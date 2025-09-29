
import { Blog } from '@/utilites/models/blog_schema';
import mongoose from 'mongoose';
import { NextResponse } from "next/server"


export const GET = async() =>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        const data = await Blog.find();
        return NextResponse.json({result:data});
    }catch (error) {
        console.error(error);
        return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
    }
}
   

export const POST = async(request)=>{
    const payload = await request.json();
    console.log("Payload received in POST /api/blog:", payload);
    try{
    await mongoose.connect(process.env.MONGO_URL)
    const blog = new Blog(payload)
    console.log("Blog instance created:", blog);
    const data = await blog.save();
    return NextResponse.json({result:data});
    }catch(error){
        console.error(error);
        return NextResponse.json({error:"Failed to fetch blogs"},{status:500});
    }
}

export const DELETE = async(request)=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        const {id} = await request.json();
        const data = await Blog.findByIdAndDelete(id);
        return NextResponse.json({result:data});
    }catch(error){
        console.error(error);
        return NextResponse.json({error:"Failed to delete blog"},{status:500});
    }
}

export const PUT = async(request)=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        const payload = await request.json();
        console.log("Payload received in PUT /api/blog:", payload);
        const {id, title, description, blogImg} = payload;
        const data = await Blog.findByIdAndUpdate(id, {title, description, blogImg}, {new:true});
        console.log("Updated blog data:", data);
        return NextResponse.json({result:data});
    } catch (error) {
        console.log(error);
        return NextResponse.json({error: "Failed to update blog"},{status:500});
    }
}