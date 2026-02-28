import { MessageSquareQuote } from "lucide-react"
import Image from "next/image"

const Reviews = () => {
  return (
    <div className="relative h-[1600px] sm:h-[1500px] lg:h-[750px]">
      <Image className="absolute h-full -z-10 w-full" src="/reviews.jpg" alt="" width={750} height={750} />
      <div className=" absolute inset-0 flex flex-col items-center justify-center gap-16 text-white">
        <h1 className="text-center text-4xl sm:text-6xl text-white">Read what our customers say</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="bg-[#f2952d] relative h-70 w-60">
            <div className="bg-white -top-5 left-5 absolute flex items-center justify-center size-16 rounded-full ">
              <MessageSquareQuote className="text-[#f2952d] " />
            </div>
            <p className="italic font-sans pt-15 px-5">Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla pharetra diam sit amet nisl. </p>
            <h1 className="font-bold text-xl uppercase px-5 pt-5 font-sans">Celia Almeda</h1>
          </div>
          <div className="bg-[#f2952d] relative h-70 w-60">
            <div className="bg-white -top-5 left-5 absolute flex items-center justify-center size-16 rounded-full ">
              <MessageSquareQuote className="text-[#f2952d] " />
            </div>
            <p className="italic font-sans pt-15 px-5">Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla pharetra diam sit amet nisl. </p>
            <h1 className="font-bold text-xl uppercase px-5 pt-5 font-sans">Celia Almeda</h1>
          </div>
          <div className="bg-[#f2952d] relative h-70 w-60">
            <div className="bg-white -top-5 left-5 absolute flex items-center justify-center size-16 rounded-full ">
              <MessageSquareQuote className="text-[#f2952d] " />
            </div>
            <p className="italic font-sans pt-15 px-5">Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla pharetra diam sit amet nisl. </p>
            <h1 className="font-bold text-xl uppercase px-5 pt-5 font-sans">Celia Almeda</h1>
          </div>
          <div className="bg-[#f2952d] relative h-70 w-60">
            <div className="bg-white -top-5 left-5 absolute flex items-center justify-center size-16 rounded-full ">
              <MessageSquareQuote className="text-[#f2952d] " />
            </div>
            <p className="italic font-sans pt-15 px-5">Proin sed libero enim sed faucibus turpis. At imperdiet dui accumsan sit amet nulla facilisi morbi tempus. Ut sem nulla pharetra diam sit amet nisl. </p>
            <h1 className="font-bold text-xl uppercase px-5 pt-5 font-sans">Celia Almeda</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Reviews