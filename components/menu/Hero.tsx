import React from 'react'

const hero = () => {
  return (
    <div className='bg-[url(/menupage.jpg)] inset-0 h-[850px] md:h-[720px] w-fill bg-cover text-white'>
        <div className='flex flex-col items-center justify-center  min-h-screen'>
            <h1 className='text-4xl md:text-6xl mb-10'>Our Products</h1>
            <p className='text-2xl w-90 md:w-170 mb-10 text-center'>Vitae turpis massa sed elementum tempus egestas sed sed. Blandit massa enim nec dui nunc mattis enim.</p>
            {/* BUTTONS */}
            <div className='grid grid-cols-1 md:grid-cols-4 gap-20'>
                <button className='bg-transparent cursor-pointer hover:bg-white hover:text-black rounded-full border-2 border-white font-bold h-[50px] w-[170px]'>BAKERY</button>
                <button className='bg-transparent cursor-pointer hover:bg-white hover:text-black rounded-full border-2 border-white font-bold h-[50px] w-[170px]'>COOKIES</button>
                <button className='bg-transparent cursor-pointer hover:bg-white hover:text-black rounded-full border-2 border-white font-bold h-[50px] w-[170px]'>CAKES</button>
                <button className='bg-transparent cursor-pointer hover:bg-white hover:text-black rounded-full border-2 border-white font-bold h-[50px] w-[170px]'>OTHER</button>
            </div>
        </div>
    </div>
  )
}

export default hero
