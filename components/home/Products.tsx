import Image from "next/image"

const Products = () => {
  return (
    <div className='bg-[url(/g-min.jpg)] bg-cover bg-center h-full pb-30'>
        {/* <Image src="/g-min.jpg" alt="" width={36} height={36} /> */}
        <div>
            <h1 className="text-white text-6xl text-center pt-20">Our Breads</h1>
            <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-5 mt-30">
                <div className="bg-white w-[250px] p-4 text-center">
                    <Image className="w-[227px] h-[195px]" src="/bread/whiteBread.jpg" alt="" width={227} height={195} />
                    <h1 className="uppercase font-bold text-lg mt-5 mb-0 font-['Montserrat',sans-serif] mx-auto tracking-[2px]">White Bread</h1>
                    <p className="mt-5">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                    <p className="my-5 underline underline-offset-8 cursor-pointer hover:decoration-amber-400">more</p>
                </div>
                <div className="bg-white w-[250px] p-4 text-center">
                    <Image className="w-[227px] h-[195px]" src="/bread/farming.jpg" alt="" width={226} height={36} />
                    <h1 className="uppercase font-bold text-lg mt-5 mb-0 font-['Montserrat',sans-serif] mx-auto tracking-[2px]">Farming Bread</h1>
                    <p className="mt-5">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                    <p className="my-5 underline underline-offset-8 cursor-pointer hover:decoration-amber-400">more</p>
                </div>
                <div className="bg-white w-[250px] p-4 text-center">
                    <Image className="w-[227px] h-[195px]" src="/bread/loaf.jpg" alt="" width={226} height={36} />
                    <h1 className="uppercase font-bold text-lg mt-5 mb-0 font-['Montserrat',sans-serif] mx-auto tracking-[2px]">Loaf Bread</h1>
                    <p className="mt-5">Sample text. Click to select the text box. <span className="underline underline-offset-5 hover:no-underline cursor-pointer">Click again</span> or double click to start editing the text.</p>
                    <p className="my-5 underline underline-offset-8 cursor-pointer hover:decoration-amber-400">more</p>
                </div>
                <div className="bg-white w-[250px] p-4 text-center">
                    <Image className="w-[227px] h-[195px]" src="/bread/sour.jpg" alt="" width={226} height={36} />
                    <h1 className="uppercase font-bold text-lg mt-5 mb-0 font-['Montserrat',sans-serif] mx-auto tracking-[2px]">Sourdough</h1>
                    <p className="mt-5">Sample text. Click to select the text box. <span className="underline underline-offset-5 hover:no-underline cursor-pointer">Click again</span> or double click to start editing the text.</p>
                    <p className="my-5 underline underline-offset-8 cursor-pointer hover:decoration-amber-400">more</p>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Products