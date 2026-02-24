import Image from 'next/image'
import React from 'react'

const SecondSection = () => {
  return (
    // <div>
    //   <div className='bg-white w-40 h-80'>
    //     <h1>Delicious Baking. Exceptional Quality.</h1>
    //   </div>
    //   <div className='bg-gray-400 h-[550px]'>
    //         <div className='grid grid-cols-2'>
    //             <Image className=' h-[511px]' src="/breadperson.jpg" width={422} height={511} alt=''></Image>
    //             <Image className='' src="/bread2.jpg"width={422} height={622} alt=''></Image>
    //         </div>
    //   </div>
    // </div>
      <div className="relative">
        <div className='w-170 z-10 pl-100 pt-10'>
          <h1 className='text-4xl '>Delicious Baking. Exceptional Quality.</h1>
        </div>
        <div className='bg-gray-100 absolute mt-30 h-[500px] w-full' />
        <div className='max-w-6xl mx-auto grid grid-cols-2'>
          <div className="mt-40 z-10">
            <img
              src="/breadperson.jpg"
              className="h-[511px] w-[422px] object-cover "
            />
          </div>
          <div className='z-10'>
            <img
              src="/bread2.jpg"
              className="h-[623px] w-[422px] object-cover"
            />
          </div>
        </div>

      </div>
  )
}

export default SecondSection
