import Image from "next/image"

const Items = () => {
  return (
    <div className='mt-140 flex flex-col items-center justify-center'>
        {/* TEXT */}
        <div>
            <h1 className="text-6xl font-sans tracking-wide text-gray-700 text-center">Bakery Items</h1>
            <p className="w-180 text-center mt-5 text-gray-700">
Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
            </p>
        </div>
        {/* Bakery Items */}
        <div className="my-15 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-15">
            <div className="">
                <Image className="h-[292px] mb-5" src="/items/r.jpg" alt="baguette" width={320} height={300} />
                <h1 className="text-2xl uppercase text-gray-700">baguette</h1>
                <p className="mt-4 text-lg text-gray-700 italic my-4">Small-batch sourdough baguette.</p>
                <p className="font-bold text-2xl mb-5">$4.5</p>
            </div>
            <div className="">
                <Image className="h-[292px] mb-5" src="/items/rr.jpg" alt="baguette" width={320} height={300} />
                <h1 className="text-2xl uppercase text-gray-700">Sourdough bread</h1>
                <p className="mt-4 text-lg text-gray-700 italic my-4">Sample text. Click to select the Text Element.</p>
                <p className="font-bold text-2xl mb-5">$5.25</p>
            </div>
            <div className="">
                <Image className="h-[292px] mb-5" src="/items/rtrtrt.jpg" alt="baguette" width={320} height={300} />
                <h1 className="text-2xl uppercase text-gray-700">Mixed Grain</h1>
                <p className="mt-4 text-lg text-gray-700 italic my-4">Sample text. Click to select the Text Element.</p>
                <p className="font-bold text-2xl mb-5">$4.5</p>
            </div>
            <div className="">
                <Image className="h-[292px] mb-5" src="/items/hh.jpg" alt="baguette" width={320} height={300} />
                <h1 className="text-2xl uppercase text-gray-700">Milk Bread</h1>
                <p className="mt-4 text-lg text-gray-700 italic my-4">Sample text. Click to select the Text Element.</p>
                <p className="font-bold text-2xl mb-5">$3.55</p>
            </div>
            <div className="">
                <Image className="h-[292px] mb-5" src="/items/hg.jpg" alt="baguette" width={320} height={300} />
                <h1 className="text-2xl uppercase text-gray-700">Brown Bread</h1>
                <p className="mt-4 text-lg text-gray-700 italic my-4">Sample text. Click to select the Text Element.</p>
                <p className="font-bold text-2xl mb-5">$2.45</p>
            </div>
            <div className="">
                <Image className="h-[292px] mb-5" src="/items/jhjhjh.jpg" alt="baguette" width={320} height={300} />
                <h1 className="text-2xl uppercase text-gray-700">Cinnabon</h1>
                <p className="mt-4 text-lg text-gray-700 italic my-4">Sample text. Click to select the Text Element.</p>
                <p className="font-bold text-2xl mb-5">$1.5</p>
            </div>
        </div>
    </div>
  )
}

export default Items