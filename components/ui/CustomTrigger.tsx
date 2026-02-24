"use client"

import { useSidebar } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

function CustomTrigger() {
//     const { open, setOpen } = useSidebar()
//   return (
//     <div>
//       <Button size="icon" className="fixed text-black hover:text-yellow-600 top-6 right-50 bg-transparent hover:bg-transparent" onClick={() => setOpen(!open)}>
//         <Menu className="h-10 w-10"/>
//       </Button>
//     </div>
//   )
const { toggleSidebar } = useSidebar()
 
  return <button className="relative" onClick={toggleSidebar}>
    <Menu className=" absolute left-300 top-7 h-7 w-7 hover:text-yellow-500 cursor-pointer"/>
  </button>
}

export default CustomTrigger
