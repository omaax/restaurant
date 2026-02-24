"use client"

import { useSidebar } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

function CustomTrigger() {
    const { open, setOpen } = useSidebar()
  return (
    <div>
      <Button size="icon" className="fixed text-black hover:text-yellow-600 top-6 right-50 bg-transparent hover:bg-transparent" onClick={() => setOpen(!open)}>
        <Menu className="h-10 w-10"/>
      </Button>
    </div>
  )
}

export default CustomTrigger
