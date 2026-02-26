"use client"

const Ingredients = () => {
  return (
    <div className='flex h-[653px] bg-custom-gray'>
        <div className='flex flex-col flex-1 items-center justify-center ml-60'>
                <h1 className='text-5xl m-4 p-5'>Ingredients & Method</h1>
                <p className='px-30 text-center mb-10'>Flour, water, sea salt, and leavening: four simple ingredients that—when mixed, shaped, fermented, and baked—make one of the most basic foods that has nourished humans for thousands of years. Since such few ingredients are involved, two things set great bread apart: quality ingredients and time.</p>
            <button className='bg-transparent hover:bg-black hover:text-white rounded-full border border-black font-bold h-[55px] w-[200px]'>READ MORE</button>
        </div>
        <div className='bg-[url(/bread-bg.jpg)] h-[653px] w-[860px] bg-center bg-cover' />
    </div>
  )
}

export default Ingredients