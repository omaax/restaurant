import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'

const FirstSection = () => {
  return (
    <div className='flex flex-row-reverse h-[800px] bg-custom-gray'>
      <div className=''>
        <Image src="/bread-bg.JPG" width={800} height={800} alt=''></Image>
      </div>
      <div className='flex flex-col gap-10 items-center justify-center'>
        <div>
            <h1 className='font-bold text-center text-4xl w-80 m-0 p-5'>Ingredients & Method</h1>
            <p className='w-75'>Flour, water, sea salt, and leavening: four simple ingredients that—when mixed, shaped, fermented, and baked—make one of the most basic foods that has nourished humans for thousands of years. Since such few ingredients are involved, two things set great bread apart: quality ingredients and time.</p>
        </div>
        <button className='bg-transparent hover:bg-black hover:text-white rounded-full border border-black font-bold w-40 h-10'>READ MORE</button>
      </div>
    </div>
  )
}

export default FirstSection
