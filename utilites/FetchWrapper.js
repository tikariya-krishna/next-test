"use client";
import useFetchingData from "@/utilites/useFetchingData";

export default function FetchWrapper() {
  useFetchingData();
  return null; // it just runs hook
}
