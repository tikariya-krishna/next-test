import { User } from "@/utilites/models/user";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export const POST = async (request) => {
    const req = await request.json();
    await mongoose.connect(process.env.MONGO_URL);

    const {email, password, fname, userType} = req;
    if(!fname || !email || !password){
        return NextResponse.json({message: "All fields are required!"}, {status: 400});
    }


    //Check user is exist or not
    const userExist = await User.findOne({email});
    if(userExist){
        return NextResponse.json({message: "User already exist!"}, {status: 400});
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);

    const newUser = new User({
        name:fname,
        email:email,
        password:hashedPassword,
        userType:userType,
    })
    const savedUser = await newUser.save();
    return NextResponse.json({message: "User registered successfully"}, {status: 201});
}