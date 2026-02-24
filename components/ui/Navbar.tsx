import Image from "next/image"

const Navbar = ( )=>  {
  return (
    <div className="my-5">
      <Image src="/logo.png" alt="logo" width={64} height={46}/>
    </div>
  )
}

export default Navbar
