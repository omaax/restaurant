// Our ​Bread

const About = () => {
  return (
    <div className='bg-[url(/about.jpg)] bg-cover bg-center h-full pb-15 flex flex-col items-center '>
        <h1 className="text-white text-6xl font-sans my-15">Our ​Bread</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            <div className="bg-black/60 max-w-sm px-7 m-5 rounded-3xl ">
                <h1 className="text-white text-2xl pt-3 pb-4 text-opacity-100">Glassic Baguette</h1>
                <p className="text-white italic text-lg pb-5">Unbleached organic wheat flour, whole rye flour, water, sea salt, yeast</p>
            </div>
            <div className="bg-black/60 max-w-sm px-7 m-5 rounded-3xl ">
                <h1 className="text-white text-2xl pt-3 pb-4 text-opacity-100">Baguette</h1>
                <p className="text-white italic text-lg pb-5">Naturally leavened baguette made using the Five Points Levain dough. This baguette is crustier and chewier than the Classic Baguette</p>
            </div>
            <div className="bg-black/60 max-w-sm px-7 m-5 rounded-3xl ">
                <h1 className="text-white text-2xl pt-3 pb-4 text-opacity-100">Pekan Raisin</h1>
                <p className="text-white italic pb-5 text-lg">Naturally leavened bread made using the French Country dough with the additions of local Georgia pecans and Thompson raisins</p>
            </div>
            <div className="bg-black/60 max-w-sm px-7 m-5 rounded-3xl ">
                <h1 className="text-white text-2xl pt-3 pb-4 text-opacity-100">Everyday french</h1>
                <p className="text-white italic text-lg pb-5">Everyday table loaf made using the Classic Baguette dough</p>
            </div>
            <div className="bg-black/60 max-w-sm px-7 m-5 rounded-3xl ">
                <h1 className="text-white text-2xl pt-3 pb-4 text-opacity-100">Glassic Baguette</h1>
                <p className="text-white italic text-lg pb-5">Unbleached organic wheat flour, whole rye flour, water, sea salt, yeast</p>
            </div>
            <div className="bg-black/60 max-w-sm px-7 m-5 rounded-3xl ">
                <h1 className="text-white text-2xl pt-3 pb-4 text-opacity-100">Multigrain</h1>
                <p className="text-white italic pb-5">Naturally leavened bread made using the French Country dough with the additions of millet, quinoa, rolled oats, flax seeds, and sunflower seeds</p>
            </div>
            <div className="bg-black/60 max-w-sm px-7 m-5 rounded-3xl ">
                <h1 className="text-white text-2xl pt-3 pb-4 text-opacity-100">Levain</h1>
                <p className="text-white italic text-lg pb-5">Unbleached organic wheat flour, whole rye flour, water, natural leaven culture, sea salt</p>
            </div>
            <div className="bg-black/60 max-w-sm px-7 m-5 rounded-3xl ">
                <h1 className="text-white text-2xl pt-3 pb-4 text-opacity-100">Ciabatta</h1>
                <p className="text-white italic text-lg pb-5">Unbleached organic wheat flour, whole rye flour, water, sea salt, yeast</p>
            </div>
            <div className="bg-black/60 max-w-sm px-7 m-5 rounded-3xl ">
                <h1 className="text-white text-2xl pt-3 pb-4 text-opacity-100">Handmade Bread</h1>
                <p className="text-white italic text-lg pb-5">Naturally leavened bread made using the Sourdough Rye dough and studded with dried black currants</p>
            </div>
        </div>
    </div>
  )
}

export default About