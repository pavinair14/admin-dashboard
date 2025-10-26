"use client";

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    useSidebar,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { sideBarPrimaryItems, sideBarPrimarySubItems } from "./constants"
import { ChevronLeft, ChevronRight } from "lucide-react";
import { usePathname } from "next/navigation";

export const SideBar = () => {
    const { open, toggleSidebar } = useSidebar();
    const pathname = usePathname();

    return (
        <div className="relative">
            <button className={`relative top-[10%] z-20 left-full translate-[-15px] cursor-pointer`} onClick={toggleSidebar}>
                {open ? <ChevronLeft size={30} className="text-white bg-sky-950 rounded-full" /> : <ChevronRight size={30} className="text-white bg-sky-950 rounded-full" />}
            </button>
            <Sidebar collapsible={"icon"}>
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupLabel>CarrerInk</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu className={open ? "items-start" : "items-center"}>
                                {sideBarPrimaryItems.map((item) => (
                                    <SidebarMenuItem key={item.title} className="w-full">
                                        <SidebarMenuButton asChild className="data-[active=true]:bg-purple-950 hover:bg-purple-950" data-active={pathname === item.url ? true : false}>
                                            <Link href={item.url} className="text-[18px]">
                                                <item.icon className={`group-hover/menu-item:text-white ${pathname === item.url ? "text-white" : "text-slate-400 "}`} />
                                                <span className={`group-hover/menu-item:text-white ${pathname === item.url ? "text-white" : "text-slate-400 "}`}>{item.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                        <SidebarGroupContent>
                            <SidebarMenu className={open ? "items-start" : "items-center"}>
                                {sideBarPrimarySubItems.map((item) => (
                                    <SidebarMenuItem key={item.title} className="w-full">
                                        <SidebarMenuButton asChild className="data-[active=true]:bg-purple-950 hover:bg-purple-950" data-active={pathname === item.url ? true : false}>
                                            <Link href={item.url} className="text-[18px]">
                                                <item.icon className={`group-hover/menu-item:text-white ${pathname === item.url ? "text-white" : "text-slate-400 "}`} />
                                                <span className={`group-hover/menu-item:text-white ${pathname === item.url ? "text-white" : "text-slate-400 "}`}>{item.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
            </Sidebar>
        </div >
    )
}

