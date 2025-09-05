"use client";
import { configureStore } from "@reduxjs/toolkit";
import blogReducer from "./blogDataSlice";

const store = configureStore({
  reducer: {
    blog: blogReducer
  }
});

export default store;
