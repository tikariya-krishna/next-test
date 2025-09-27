"use client";
import Introduction from "@/components/Introduction"
import Post from "@/components/Post"
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";

const Page = () => {
  const {user, loading } = useAuth();
  const router = useRouter();
  useEffect(() => {
    if (!loading && !user) {
      router.replace("/login"); // kick out if not logged in
    }
  }, [loading, user, router]);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div className="px-5 md:px-16 xl:px-32">
        <Introduction/>
        <Post/>
      </div>
    </>
  )
}

export default Page