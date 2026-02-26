import Image from 'next/image'
import React from 'react'

const Landing = () => {
  return (
    <div className='relative h-[800px] w-fill text-white'>
        <div className=''>
            <Image className='h-[800px] absolute bg-cover bg-center w-full brightness-50' src="/landing.jpg" alt='' width={1000} height={1} />
        </div>
        {/* LEFT */}
        <div className='absolute flex flex-col items-center justify-center px-100 pb-50 h-screen '>
            <Image className='h-30 w-35 mb-8 ' src="/uu.png" alt='' width={1000} height={1000} />
            <h1 className='text-6xl'>Organic Bread</h1>
            <p className='w-120 text-center my-10'>Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. A lacus vestibulum sed arcu non. Dolor magna eget est lorem ipsum dolor sit amet consectetur.</p>
        <button className='uppercase bg-transparent hover:bg-white hover:text-black rounded-full border border-white border-2 font-bold h-[55px] w-[200px]'>View Menu</button>
        </div>
    </div>
  )
}

export default Landing
