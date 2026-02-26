import Image from "next/image"

const Mission2 = () => {
  return (
    <div className='bg-[#e5e5e5]'>
        <div className="h-[600px] relative">
        <Image className="h-[700px] w-[1000px] absolute m-auto mr-100 left-0 right-0" width={800} height={800} src="/mission2.jpg" alt="mission" />
          <div className="w-[590px] h-[440px] bg-white  shadow-2xl shadow-gray-900 top-140 left-90 absolute">
              <div className="m-10">
                <h1 className="text-4xl mb-4">Our Mission</h1>
                <p className="text-xl mb-4">We opened our first bakery in the South End in 2000 with one goal: to make the world a sweeter place through warm smiles, gooey sticky buns, in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <button className='mt-8 bg-transparent hover:bg-neutral-800 hover:text-white rounded-full border border-black font-bold h-[55] w-[220] tracking-widest'>READ MORE</button>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Mission2