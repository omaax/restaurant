import Image from "next/image"

const ForthSection = () => {
  return (
    <div className='bg-[#e5e5e5] pt-70'>
        <div className="flex items-center justify-center text-center">
            <h1 className="font-bold text-6xl w-250 mb-10 font-sans">We bake fresh, handmade bread, pastries and cakes every day</h1>
        </div>
        <div className="grid grid-cols-2">
        {/* IMAGE */}
            <div>
                <Image src="/S5.jpg" alt="" width={750} height={39} />
            </div>
            {/* ICONS */}
            <div className="grid grid-cols-2 w-[600px] ">
                <div className="place-items-center">
                    <img className="w-[65px]" src="//images01.nicepagecdn.com/c461c07a441a5d220e8feb1a/80fec7903aa257c583e3dc80/3014502.png" alt="" />
                    <h1 className="mt-[20px] font-bold font-sans text-xl uppercase">Baked Fresh Daily</h1>
                    <p className="mt-[20px] text-lg w-[250px] text-center">Our bread is baked fresh daily, contains no preservatives and is very high in quality. It is also especially nice and soft</p>
                </div>
                <div className="place-items-center">
                    <img className="w-[65px] " src="/icons/bread2.png" alt="" />
                    <h1 className="mt-[20px] font-bold font-sans text-xl uppercase">Great Value</h1>
                    <p className="mt-[20px] text-lg w-[250px] text-center">With the most competitive prices on the market we are able to deliver great value without compromising on taste</p>
                </div>
                <div className="place-items-center">
                    <img className="w-[65px]" src="/icons/institution.png" alt="" />
                    <h1 className="mt-[20px] font-bold font-sans text-xl uppercase">Institutions</h1>
                    <p className="mt-[20px] text-lg w-[250px] text-center">We serve a wide range of institutions including universities, airlines, hotels and schools. Order daily for tomorrow</p>
                </div>
                <div className="place-items-center">
                    <img className="w-[65px]" src="/icons/fast-delivery.png" alt="" />
                    <h1 className="mt-[20px] font-bold font-sans text-xl w-[190px] text-center uppercase">Delivery To Your Door</h1>
                    <p className="mt-[20px] text-lg w-[250px] text-center">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                </div>
                <div className="place-items-center">
                    <img className="w-[65px]" src="/icons/box.png" alt="" />
                    <h1 className="mt-[20px] font-bold font-sans text-xl uppercase">No Order Too Large</h1>
                    <p className="mt-[20px] text-lg w-[250px] text-center">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                </div>
                <div className="place-items-center">
                    <img className="w-[65px]" src="/icons/baking.png" alt="" />
                    <h1 className="mt-[20px] font-bold font-sans text-xl uppercase">Delicious Baking</h1>
                    <p className="mt-[20px] text-lg w-[250px] text-center">Sample text. Click to select the text box. Click again or double click to start editing the text.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ForthSection