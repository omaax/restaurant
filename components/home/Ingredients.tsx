"use client"

const Ingredients = () => {
  return (
    <div className='flex flex-col md:flex-row bg-custom-gray'>
        <div className='flex flex-col flex-1 items-center justify-center ml-0 sm:mx-10 lg:ml-60'>
                <h1 className='text-4xl m-3 text-center p-2 sm:m-4 sm:p-5'>Ingredients & Method</h1>
                <p className='text-center mb-10 sm:px-2 '>Flour, water, sea salt, and leavening: four simple ingredients that—when mixed, shaped, fermented, and baked—make one of the most basic foods that has nourished humans for thousands of years. Since such few ingredients are involved, two things set great bread apart: quality ingredients and time.</p>
            <button className='mb-10 bg-transparent hover:bg-black hover:text-white rounded-full border border-black font-bold h-[55px] w-[200px]'>READ MORE</button>
        </div>
        {/* <div className='bg-[url(/bread-bg.jpg)] h-100 w-100 sm:h-[653px] sm:w-[860px] bg-center bg-cover' /> */}
        <div className='bg-[url(/bread-bg.jpg)] h-100 w-fill sm:h-150 md:h-fill md:w-full lg:h-[653px] lg:w-[860px] bg-center bg-cover' />
    </div>
  )
}

export default Ingredients