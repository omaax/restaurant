const ContactUs = () => {
  return (
    <div className="relative">
        <div className="absolute z-10 mt-20">
            <h1 className="text-4xl mb-10">Contact Us</h1>
            <form action="submit" className="">
                <label htmlFor="email">Email</label>
                <input className="bg-white" type="text" id="email"/>
                <label htmlFor="name">Name</label>
                <input className="bg-white" type="text" id="name"/>
            </form>
            <button className='bg-transparent hover:bg-white hover:text-black rounded-full border border-white font-bold h-[58] w-[220]'>ORDER NOW</button>
            <div className="">
                <div className="">
                    <h1>F​ind Us</h1>
                    <p>121 Rock Sreet, 21 Avenue, New York, NY 92103-9000</p>
                </div>
                <div className="">
                    <h1>Hours</h1>
                    <p>121 Rock Sreet, 21 Avenue, New York, NY 92103-9000</p>
                </div>
                <div className="">
                    <h1>Call Us</h1>
                    <p>121 Rock Sreet, 21 Avenue, New York, NY 92103-9000</p>
                </div>
            </div>
        </div>
        <div className='bg-[url(/S7.jpg)] h-[840px] bg-no-repeat bg-cover bg-center brightness-90' />
    </div>
  )
}

export default ContactUs