import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import Image from "next/image"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export const NavBar = () => {
    return (
        <nav className="w-full max-w-[-webkit-fill-available] fixed h-16 p-4 bg-white dark:bg-[var(--darkpurple)] shadow-md text-grey-950 dark:text-white flex items-center justify-between z-10">
            <Link href="/" className="font-bold text-lg">
                <Image src={"/icons/logo.svg"} alt={"logo"} width={20} height={20} />
            </Link>

            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>My Account</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem><Link href={"/profile"}>Profile</Link></DropdownMenuItem>
                    <DropdownMenuItem><Link href={"/auth"}>Logout</Link></DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </nav>
    );
}