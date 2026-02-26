import Image from 'next/image'
import React from 'react'

const Landing = () => {
  return (
    <div className='relative h-[800px] w-fill text-white'>
        <div className='absolute '>
            <Image className='h-[800px] bg-cover bg-center w-full brightness-50' src="/landing.jpg" alt='' width={1000} height={1} />
        </div>
        {/* LEFT */}
        <div className='absolute flex flex-col items-center justify-center h-screen pl-50'>
            <Image className='h-35 w-35 mb-10 ' src="/333.png" alt='' width={50} height={50} />
            <h1 className='text-6xl'>Organic Bread</h1>
            <p className='w-120 text-center my-10'>Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus dolor. A lacus vestibulum sed arcu non. Dolor magna eget est lorem ipsum dolor sit amet consectetur.</p>
        <button className='uppercase bg-transparent hover:bg-black hover:text-white rounded-full border border-black font-bold h-[55px] w-[200px]'>View Menu</button>
        </div>
    </div>
  )
}

export default Landing
