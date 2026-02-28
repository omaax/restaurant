import Image from "next/image"

const OurMission = () => {
  return (
    <div className=''>
      <div className="relative w-full h-[800px] relative">
        <Image className="object-cover object-top" fill src="/S4.jpg" alt="" />
        <div className="w-100 h-160 sm:w-[590px] sm:h-[440px] bg-white rounded-2xl shadow-2xl shadow-gray-400 top-1/2 left-1/17 sm:top-120 sm:left-90 absolute">
          <div className="m-10">
            <h1 className="text-4xl mb-4">Our Mission</h1>
            <p className="text-xl mb-4 leading-10 ">We opened our first bakery in the South End in 2000 with one goal: to make the world a sweeter place through warm smiles, gooey sticky buns, in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button className='mt-8 bg-transparent hover:bg-black hover:text-white rounded-full border border-black font-bold h-[55] w-[220]'>READ MORE</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurMission