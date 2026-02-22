import Image from 'next/image'
import React from 'react'

const SecondSection = () => {
  return (
    <div>
      <div className='bg-white w-40 h-100'>
        <h1>Delicious Baking. ExceptionalQuality.</h1>
      </div>
      <div className='bg-gray-400 flex'>
        <div>
        <Image src="/bread2.jpg" width={300} height={300} alt=''></Image>
        </div>
        <div>
        <Image src="/breadperson.jpg"width={414} height={300} alt=''></Image>
        </div>
      </div>
    </div>
  )
}

export default SecondSection
