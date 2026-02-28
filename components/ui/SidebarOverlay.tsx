"use client"
import { useSidebar } from "./sidebar"

const SidebarOverlay = () => {
    const { open, setOpen } = useSidebar()

  return (
    <div className={`fixed inset-0 bg-black transition-opacity duration-300 ${ open ? "opacity-50 pointer-events-auto" : "opacity-0"}`}
        onClick={() => setOpen(false)}
    ></div>
  )
}

export default SidebarOverlay