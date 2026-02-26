import Image from "next/image"
import Link from "next/link"

const Navbar = ( )=>  {
  return (
    <div className="m-4">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={64} height={46}/>
      </Link>
    </div>
  )
}

export default Navbar
