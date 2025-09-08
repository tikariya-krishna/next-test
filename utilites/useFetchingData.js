"use client"
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";    
import { addCardItems } from "./redux/blogDataSlice";

const useFetchingData = () =>{
    const dispatch = useDispatch();

    const fatchData = async() =>{
        const data = await fetch("https://jsonfakery.com/blogs/random/50");
        const jsonData = await data.json();
        // console.log(jsonData);
        if(jsonData){
            dispatch(addCardItems(jsonData));
        }
    }

    useEffect(()=>{
        fatchData();                
    },[])
}

export default useFetchingData

