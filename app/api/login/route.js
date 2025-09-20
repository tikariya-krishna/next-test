import { NextResponse } from "next/server"
import {User} from "@/utilites/models/user"
import bcrypt from "bcryptjs"
import mongoose from "mongoose"


export const POST = async(request)=>{
    await mongoose.connect(process.env.MONGO_URL);
    const res = await request.json();
    const {email, password} = res;

    if(!email || !password){
        return NextResponse.json({message: "All fields are required!"}, {status: 400});
    }
    const user = await User.findOne({email});
    if(!user){
        return NextResponse.json({message: "User not found!"}, {status: 404});
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        return NextResponse.json({message: "Invalid credentials!"}, {status: 400});
    }

    const token = await user.generateAuthToken();
    
    return NextResponse.json({
        message: "Login successful",
        user: user.toJSON(),
        token
    });
}



