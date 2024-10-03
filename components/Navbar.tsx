"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";
import Link from "next/link";

export const NavigationItems = [
  {
    name: "Home",
    href: "/",
    type: "internal",
  },
  {
    name: "Notes",
    href: "/notes",
    type: "internal",
  },
  {
    name: "Creating",
    href: "/creating",
    type: "internal",
  },
  {
    name: "Resume",
    href: "https://drjvtlkr.vercel.app",
    type: "external",
  },
  {
    name: "About",
    href: "/about",
    type: "internal",
  },
] as const;

const Navbar = () => {
  return (
    <>
      <div className="flex justify-center">
        <NavigationMenu className="w-full bg-gray-600 m-4 py-2 px-4 rounded-full">
          <NavigationMenuList className="flex justify-evenly w-full gap-4">
            <NavigationMenuItem className="hover:text-red-500 font-medium text-white">
              <Link href="/" target="_blank">
                Home
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="hover:text-red-500 font-medium text-white">
              <Link href="/creating">Creating</Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="hover:text-red-500 font-medium text-white">
              <Link href="/notes">Notes</Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="hover:text-red-500 font-medium text-white">
              <Link href="https://drjvtlkr.vercel.app" target="_blank">
                Resume
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="hover:text-red-500 font-medium text-white">
              <Link href="/about">About</Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </>
  );
};

export default Navbar;
