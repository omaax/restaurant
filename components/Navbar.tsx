import Image from "next/image"
import Link from "next/link"
import CustomTrigger from "./ui/CustomTrigger"

const Navbar = ( )=>  {
  return (
    <div className="flex items-center justify-between mx-10">
      <Link href="/">
        <Image src="/logo.png" alt="logo" width={64} height={1}/>
      </Link>
        <CustomTrigger />
    </div>
  )
}

export default Navbar
