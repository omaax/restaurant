import Image from "next/image"

const Hero = () => {
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2'>
        {/* IMAGE */}
        <div className="order-2 sm:order-1">
            <Image className="h-full lg:h-[653px] w-full" src="/nn-min.jpg" alt="logo" width={653} height={36} />
        </div>
        {/* LOGO */}
        <div className="bg-custom-gray order-1 sm:order-2">
          <div className="flex flex-col pt-25 pr-0 sm:pr-10 lg:pr-70 items-center">
            <Image className="" src="/333.png" alt="logo" width={130} height={130}></Image>
            <div className="text-center">
              <h1 className="text-4xl w-80 sm:w-50 lg:w-130 m-auto sm:text-2xl lg:text-5xl mt-5">Fresh breads handcrafted daily</h1>
              <p className="mt-5 text-sm sm:text-lg w-80 m-auto sm:w-full">Nibh venenatis cras sed felis eget velit aliquet sagittis id. Tellus pellentesque eu tincidunt tortor aliquam nulla.</p>
              <button className='my-8 bg-transparent hover:bg-black hover:text-white rounded-full border border-black font-bold h-[55] w-[250]'>READ MORE</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero