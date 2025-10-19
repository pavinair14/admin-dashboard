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

export const SideBar = () => {
    const { open, toggleSidebar } = useSidebar();

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
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild>
                                            <Link href={item.url}>
                                                <item.icon />
                                                <span>{item.title}</span>
                                            </Link>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                        <SidebarGroupContent>
                            <SidebarMenu className={open ? "items-start" : "items-center"}>
                                {sideBarPrimarySubItems.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild>
                                            <Link href={item.url}>
                                                <item.icon />
                                                <span>{item.title}</span>
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

