import Image from 'next/image'

const FirstSection = () => {
  return (
    <div className='flex flex-col-reverse sm:flex-row-reverse bg-custom-gray'>
      <div className=''>
        <Image className='' src="/bread-bg.JPG" width={700} height={400} alt='bread' />
      </div>
      <div className='flex flex-col gap-10 items-center justify-center p-10 sm:p-30'>
            <h1 className='sm:text-5xl text-4xl sm:w-full w-60 text-center'>Ingredients & Method</h1>
            <p className='w-[320px] sm:w-[580px] text-center'>Flour, water, sea salt, and leavening: four simple ingredients that—when mixed, shaped, fermented, and baked—make one of the most basic foods that has nourished humans for thousands of years. Since such few ingredients are involved, two things set great bread apart: quality ingredients and time.</p>
        <button className='bg-transparent hover:bg-black hover:text-white rounded-full border border-black font-bold h-[55] w-[210]'>READ MORE</button>
      </div>
    </div>
  )
}

export default FirstSection
