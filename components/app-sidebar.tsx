"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuAction,
  SidebarMenuBadge,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,

} from "@/components/ui/sidebar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { ChevronDown, X } from "lucide-react"

export function AppSidebar() {
  const {
    state,
    open,
    setOpen,
    openMobile,
    setOpenMobile,
    isMobile,
    toggleSidebar,
  } = useSidebar()

  return (
    <div className="fixed z-100">
      <Sidebar className="text-white">
        <SidebarHeader>
          <SidebarMenu>
            <SidebarMenuItem>
                <SidebarMenuButton onClick={toggleSidebar} className="">
                  <X size={90} className="w-24 h-24 cursor-pointer"/>
                </SidebarMenuButton>
                {/* <SidebarMenuBadge>
                  <X className="text-white cursor-pointer"/>
                </SidebarMenuBadge> */}
              <div className="">
                <SidebarMenuButton asChild>
                  <a href="/">Home</a>
                </SidebarMenuButton>
                <SidebarMenuButton asChild >
                  <a href="/about">About Us</a>
                </SidebarMenuButton>
                <SidebarMenuButton asChild>
                  <a href="/menu">Menu</a>
                </SidebarMenuButton>
                <SidebarMenuButton asChild>
                  <a href="/landing">Landing</a>
                </SidebarMenuButton>
              </div>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
      {/* <SidebarRail /> */}
    </Sidebar>
    </div>
  )
}

export default AppSidebar