import Link from "next/link";
import React from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Navmenu } from "./Navbar/Navmenu";

const Navbar = () => {
  return (
    <div className="w-full h-20 flex justify-between items-center px-10 z-50">
      <Link href="/" className="transition-all ease-in-out duration-300 p-5">
        <h1 className="text-2xl font-bold">Ucuzcu</h1>
      </Link>
      <div className=" flex items-center justify-center w-max">
        <Navmenu />
      </div>
      <div className="flex items-center justify-center w-max">
        <Input placeholder="Search..." className="mr-2 w-96" />
        <Button variant="outline">Ara</Button>
      </div>
      <div className="flex w-auto h-full">
        <ul className="list-none flex items-center justify-center">
          <li className="p-5">
            <Link href="/">Home</Link>
          </li>
          <li className="p-5">
            <Link href="/">Products</Link>
          </li>
          <li className="p-5">
            <Link href="/about">About</Link>
          </li>
          <li className="p-5">
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton />
            </SignedOut>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
