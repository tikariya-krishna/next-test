import Introduction from "@/components/Introduction"
import Post from "@/components/Post"
import FetchWrapper from "@/utilites/FetchWrapper";


const page = () => {
  return (
    <>
      <div className="px-32">
        <FetchWrapper/>
        <Introduction/>
        <Post/>
      </div>
    </>
  )
}

export default page