"use client"

import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { SidebarOptions } from "@/services/Constants"
import { Plus } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export function AppSidebar() {

  const path = usePathname();
  
  return (
    <Sidebar>
      <SidebarHeader className="flex items-center">
        <div className="flex items-center justify-center gap-1 mt-3">
          <Image src={"/logo.png"} alt="Logo" width={100} height={100} className="w-[50px] h-[50px]"/>
          <h3 className="text-2xl font-bold text-gray-700">NexSphere AI</h3>
        </div>
        <Button className='flex justify-center items-center w-full mt-5 cursor-pointer'><Plus/>Create New Interview</Button>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarContent>
            <SidebarMenu>
              {SidebarOptions.map((option, idx) => (
                <SidebarMenuItem key={idx} className='p-1'>
                  <SidebarMenuButton asChild className={`p-5 ${path === option.path && 'bg-blue-100'}`}>
                    <Link href={option.path}>
                      <option.icon className={`${path === option.path && 'text-primary'}`} />
                      <span className={`text-[16px] font-medium ${path === option.path && 'text-primary'}`}>{option.name}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter />
    </Sidebar>
  )
}
