import Image from "next/image"
import Link from "next/link"

const About = () => {
  return (
    <div className='bg-[#e5e5e5]'>
        <div className="flex flex-col md:flex-row items-center justify-center pt-70 pb-30">
            {/* TEXT */}
            <div className="bg-white h-200 sm:h-150 w-80 mt-10 md:mt-0 md:w-150 px-[50px] py-[30px]">
                <h1 className="text-xl sm:text-6xl">About Bakery</h1>
                <p className=" pt-10 text-sm sm:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-15 pt-10 text-xl uppercase">
                    <Link href="/"><h2 className="cursor-pointer">our people</h2></Link>
                    <Link href="/"><h2 className="cursor-pointer">our values</h2></Link>
                    <Link href="/"><h2 className="cursor-pointer">our history</h2></Link>
                    <Link href="/"><h2 className="cursor-pointer">our culture</h2></Link>
                    <Link href="/"><h2 className="cursor-pointer">ingridients</h2></Link>
                    <Link href="/"><h2 className="cursor-pointer">our bakery</h2></Link>
                </div>
            </div>
            {/* PHOTO */}
            <div>
                <Image className="h-100 w-80 md:h-150 md:w-125" src="/about2.jpg" alt="" height={500} width={500}/>
            </div>
        </div>
    </div>
  )
}

export default About