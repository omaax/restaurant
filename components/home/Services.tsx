import Image from "next/image"

const Services = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-custom-gray'>
        <div className="flex flex-col items-center">
            <h1 className="text-4xl sm:text-6xl w-full sm:w-[900px] text-center p-5 m-10">Our freshly baked bread is the hero of our breakfast menu</h1>
            <button className='bg-transparent hover:bg-black hover:text-white rounded-full border border-black font-bold h-[55] w-[250]'>READ MORE</button>
        </div>
        <div>
            <Image src="/services.jpg" alt="logo" width={800} height={800} />
        </div>
    </div>
  )
}

export default Services