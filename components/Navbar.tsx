"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/lib/database.types";


type Props = {
    isAuthenticated?: boolean;
}


export default function Navbar({ isAuthenticated = false }: Props) {
    return (
        <div className="flex flex-row justify-around items-center text-center h-24 w-full z-10">
            <h1 className="font-bold text-xl">ai4crypto</h1>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="/" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Home
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/#about" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                About us
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/#pricing" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Pricing
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            {
                isAuthenticated ? (
                    <Link href="/dashboard" passHref>
                        <Button className="hidden md:block bg-transparent border-2 border-indigo-500 hover:bg-indigo-500">Dashboard</Button>
                    </Link>
                ) : (
                    <Link href="/login" passHref>
                        <Button className="hidden md:block bg-transparent border-2 border-indigo-500 hover:bg-indigo-500">Sign in</Button>
                    </Link>
                )
            }
        </div>
    );
}