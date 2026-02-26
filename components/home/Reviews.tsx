import { MessageSquareQuote } from "lucide-react"
import Image from "next/image"

const Reviews = () => {
  return (
    <div className='relative'>
      <div className="h-[750px]">
        <Image className="absolute h-[750px] w-full" src="/reviews.jpg" alt="" width={750} height={750}></Image>
        <div className="absolute text-white z-10">
          <h1>Read what our customers say</h1>
          <div className="grid grid-cols-4">
            <div className="bg-[#f2952d] h-70 w-60 m-10">
              <div className="bg-white top-10 left-15 absolute flex items-center justify-center size-16 rounded-full ">
                <MessageSquareQuote className="text-[#f2952d] " />
              </div>
              <p className="italic font-sans pt-15 px-5">Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla pharetra diam sit amet nisl. </p>
              <h1 className="font-bold text-xl uppercase px-5 pt-5 font-sans">Celia Almeda</h1>
            </div>
            <div className="bg-[#f2952d] h-70 w-60 m-10">
              <div className="bg-white top-10 left-15 absolute flex items-center justify-center size-16 rounded-full ">
                <MessageSquareQuote className="text-[#f2952d] " />
              </div>
              <p className="italic font-sans pt-15 px-5">Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla pharetra diam sit amet nisl. </p>
              <h1 className="font-bold text-xl uppercase px-5 pt-5 font-sans">Celia Almeda</h1>
            </div>
            <div className="bg-[#f2952d] h-70 w-60 m-10">
              <div className="bg-white top-10 left-15 absolute flex items-center justify-center size-16 rounded-full ">
                <MessageSquareQuote className="text-[#f2952d] " />
              </div>
              <p className="italic font-sans pt-15 px-5">Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla pharetra diam sit amet nisl. </p>
              <h1 className="font-bold text-xl uppercase px-5 pt-5 font-sans">Celia Almeda</h1>
            </div>
            <div className="bg-[#f2952d] h-70 w-60 m-10">
              <div className="bg-white top-10 left-15 absolute flex items-center justify-center size-16 rounded-full ">
                <MessageSquareQuote className="text-[#f2952d] " />
              </div>
              <p className="italic font-sans pt-15 px-5">Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla pharetra diam sit amet nisl. </p>
              <h1 className="font-bold text-xl uppercase px-5 pt-5 font-sans">Celia Almeda</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews