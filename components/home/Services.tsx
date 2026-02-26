import Image from "next/image"

const Services = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-custom-gray'>
        <div className="flex flex-col items-center">
            <h1 className="text-6xl text-sans w-[800px] text-center mt-10">Our freshly baked bread is the hero of our breakfast menu</h1>
            <button className='mt-10 bg-transparent hover:bg-black hover:text-white rounded-full border border-black font-bold h-[55] w-[250]'>READ MORE</button>
        </div>
        <div className="">
            <Image className="h-[800px]" src="/services.jpg" alt="logo" width={800} height={800} />
        </div>
    </div>
  )
}

export default Services