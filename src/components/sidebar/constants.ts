import { Home, Settings, HelpingHandIcon, Users, History, FileUser, Activity } from "lucide-react"

export const sideBarPrimaryItems = [
    {
        title: "Overview",
        url: "/dashboard",
        icon: Home,
    },
    {
        title: "Users",
        url: "/users",
        icon: Users,
    },
    {
        title: "History",
        url: "/history",
        icon: History,
    },
    {
        title: "Templates",
        url: "/templates",
        icon: FileUser,
    },
    {
        title: "Activity",
        url: "/activity",
        icon: Activity,
    }
]

export const sideBarPrimarySubItems = [
    {
        title: "Support",
        url: "/support",
        icon: HelpingHandIcon,
    },
    {
        title: "Settings",
        url: "/settings",
        icon: Settings,
    },
]