import Image from 'next/image'
import React from 'react'

const Landing = () => {
  return (
    <div className='relative h-[800px] bg-cover bg-center  w-fill text-white'>
        <div className=''>
            <Image className='md:h-[800px] h-full absolute w-full brightness-50' src="/landing.jpg" alt='' width={1000} height={1} />
        </div>
        {/* LEFT */}
        {/* <div className='absolute flex flex-col items-center justify-center px-100 pb-50 h-screen '> */}
        <div className='place-items-center'>
          <div className='absolute top-[10%] sm:top-[20%] sm:left-[20%] flex flex-col items-center justify-center'>
              <Image className='h-30 w-35 mb-8 ' src="/uu.png" alt='' width={1000} height={1000} />
              <h1 className='text-4xl lg:text-6xl'>Organic Bread</h1>
              <p className='w-85 sm:w-140 text-center text-xl leading-8 my-10'>Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. A lacus vestibulum sed arcu non. Dolor magna eget est lorem ipsum dolor sit amet consectetur.</p>
              <button className='uppercase bg-transparent hover:bg-white hover:text-black rounded-full border border-white border-2 font-bold h-[55px] w-[200px]'>View Menu</button>
            </div>
          </div>
    </div>
  )
}

export default Landing
