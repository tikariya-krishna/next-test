"use client"
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";    
import { addCardItems } from "./redux/blogDataSlice";

const useFetchingData = () =>{
    const dispatch = useDispatch();

    const fatchData = async() =>{
        const data = await fetch("https://newsapi.org/v2/everything?q=apple&from=2025-09-03&to=2025-09-03&sortBy=popularity&apiKey=2be4dcc4a45f41c697e1f34bd6dc4038");
        const jsonData = await data.json();
        if(jsonData){
            dispatch(addCardItems(jsonData?.articles));
        }
    }

    useEffect(()=>{
        fatchData();                
    },[])
}

export default useFetchingData

