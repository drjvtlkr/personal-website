"use client";
import React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "./ui/navigation-menu";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-center">
        <NavigationMenu className="w-full bg-blue-400 m-4 py-2 px-4 rounded-full">
          <NavigationMenuList className="flex justify-evenly w-full gap-4">
            <NavigationMenuItem className="hover:text-white">
              <Link href="/">Home</Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="hover:text-white">
              <Link href="/creating">Creating</Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="hover:text-white">
              <Link href="/notes">Notes</Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="hover:text-white">
              <Link href="https://drjvtlkr.vercel.app">Resume</Link>
            </NavigationMenuItem>
            <NavigationMenuItem className="hover:text-white">
              <Link href="/about">About</Link>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </>
  );
};

export default Navbar;
