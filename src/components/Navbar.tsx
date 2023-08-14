"use client";

import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/Button";
import Link from "next/link";

function Navbar() {
  return (
    <div className="  left-0 right-0 top-0 z-50 flex  h-20 items-center justify-between shadow-sm">
      <div className="container mx-auto flex w-full max-w-7xl items-center justify-between">
        <div className=" gap-4 flex items-center">
          <Link href="/">
            <div className="flex flex-row gap-1 items-center">
              {/* <Image
                className="relative z-0 h-8 w-auto"
                src="/logo.png"
                alt="Logo"
                priority={true}
                width={512}
                height={512}
              /> */}
              <div className="red_gradient text relative text-[1rem] font-extrabold leading-relaxed">
                The Thieves&apos; Library
              </div>
            </div>
          </Link>
          <ThemeToggle />
        </div>
        {/* For mobile view */}
        <div className="flex flex-row gap-2 md:hidden items-center">
          <Link href="/">
            {/* <Image
              className="relative z-0 h-8 w-auto"
              src="/logo.png"
              alt="Logo"
              priority={true}
              width={512}
              height={512}
            /> */}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
