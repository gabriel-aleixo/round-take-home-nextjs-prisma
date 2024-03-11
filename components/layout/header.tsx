"use client"
import { cn } from "@/lib/utils";
import { MobileSidebar } from "./mobile-sidebar";

import { UserNav } from "./user-nav";

import Image from "next/image";

import Link from "next/link";

export default function Header() {
  return (
    <div className="fixed top-0 left-0 right-0 supports-backdrop-blur:bg-background/60 border-b bg-background/95 backdrop-blur z-20">
      <nav className="h-14 flex items-center justify-between px-4">
        <div className="hidden lg:block">
          <Image
            src={"/round.avif"}
            alt="logo"
            width={"100"}
            height={"70"}
          ></Image>
        </div>
        <div className={cn("block lg:!hidden")}><MobileSidebar /></div>

        <div className="flex items-center gap-2">
          <UserNav />
        </div>
      </nav>
    </div>
  );
}
