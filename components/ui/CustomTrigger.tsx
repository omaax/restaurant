"use client"

import { useSidebar } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"

function CustomTrigger() {
    const { open, setOpen } = useSidebar()
  return (
    <div>
      <Button variant="secondary" className="fixed top-4 right-50 bg-transparent" onClick={() => setOpen(!open)}>
        <Menu className="" />
      </Button>
    </div>
  )
}

export default CustomTrigger
