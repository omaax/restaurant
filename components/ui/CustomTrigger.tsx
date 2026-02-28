"use client"

import { useSidebar } from "@/components/ui/sidebar"
import { Menu } from "lucide-react"

function CustomTrigger() {
const { toggleSidebar } = useSidebar()
 
  return (
    <div className="flex items-center justify-end h-20">
      <button className="" onClick={toggleSidebar}>
        <Menu className=" h-7 w-7 hover:text-yellow-500 cursor-pointer"/>
      </button>
    </div>
  )
}

export default CustomTrigger
