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
import { ChevronDown, Plus, X } from "lucide-react"

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
      <Sidebar className="text-white list-none">
        <SidebarHeader>
          <SidebarMenu className="flex items-end">
            <SidebarMenuItem>
                <SidebarMenuButton asChild onClick={toggleSidebar} className="">
                  <X className="h-12 cursor-pointer"/>
                </SidebarMenuButton>
            </SidebarMenuItem>
                {/* <SidebarMenuBadge>
                  <X className="text-white cursor-pointer"/>
                </SidebarMenuBadge> */}
          </SidebarMenu>
        </SidebarHeader>
        {/* CONTENT */}
          <SidebarContent className="flex items-center">
            <SidebarGroup />
              <SidebarMenuItem>
                <SidebarMenuButton className="text-xl" asChild>
                  <a href="/">
                    <span className="">Home</span>
                  </a>
                  
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="text-xl" asChild>
                  <a href="/about">
                    <span>About Us</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="text-xl" asChild>
                  <a href="/menu">
                    <span>Menu</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton className="text-xl" asChild>
                  <a href="/landing">
                    <span>Landing</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            <SidebarGroup />
          </SidebarContent>
      </Sidebar>
    </div>
  )
}

export default AppSidebar