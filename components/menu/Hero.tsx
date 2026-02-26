import React from 'react'

const hero = () => {
  return (
    <div className='bg-[url(/menupage.jpg)] h-[700px] w-fill bg-cover  text-white'>
        <div className='flex flex-col items-center justify-center  min-h-screen'>
            <h1 className='text-6xl mb-10'>Our Products</h1>
            <p className='text-2xl mx-100 mb-10 text-center'>Vitae turpis massa sed elementum tempus egestas sed sed. Blandit massa enim nec dui nunc mattis enim.</p>
            {/* BUTTONS */}
            <div className='grid grid-cols-4 gap-20'>
                <button className='bg-transparent cursor-pointer hover:bg-white hover:text-black rounded-full border border-black font-bold h-[50px] w-[170px]'>READ MORE</button>
                <button className='bg-transparent cursor-pointer hover:bg-white hover:text-black  rounded-full border border-black font-bold h-[50px] w-[170px]'>READ MORE</button>
                <button className='bg-transparent cursor-pointer hover:bg-white hover:text-black  rounded-full border border-black font-bold h-[50px] w-[170px]'>READ MORE</button>
                <button className='bg-transparent cursor-pointer hover:bg-white hover:text-black  rounded-full border border-black font-bold h-[50px] w-[170px]'>READ MORE</button>
            </div>
        </div>
    </div>
  )
}

export default hero
