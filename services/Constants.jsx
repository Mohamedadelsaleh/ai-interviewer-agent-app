import { Calendar, LayoutDashboard, List, Settings, WalletCards } from "lucide-react";

export const SidebarOptions = [
    {
        id: 1,
        name: "Dashboard",
        icon: LayoutDashboard,
        path: "/dashboard",
    },
    {
        id: 2,
        name: "Scheduled Interviews",
        icon: Calendar,
        path: "/scheduled-interviews",
    },
    {
        id: 3,
        name: "All Interviews",
        icon: List,
        path: "/all-interviews"
    },
    {
        id: 4,
        name: "Billing",
        icon: WalletCards,
        path: "/billing"
    },
    {
        id: 5,
        name: "Settings",
        icon: Settings,
        path: "/settings"
    }
]