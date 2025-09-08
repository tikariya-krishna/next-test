"use client";
import { createSlice } from "@reduxjs/toolkit";

const blogDataSlice = createSlice({
  name: "blog",
  initialState: {
    data: []
  },
  reducers: {
    addCardItems: (state, action) => {
      state.data = action.payload; 
    }
  }
});

export const { addCardItems } = blogDataSlice.actions;
export default blogDataSlice.reducer; // ✅ only export reducer
