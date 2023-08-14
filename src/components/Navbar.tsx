"use client";

import Image from "next/image";
import { ThemeToggle } from "./ThemeToggle";
import { Button } from "./ui/Button";
import Link from "next/link";

function Navbar() {
  return (
    <div className="  left-0 right-0 top-0 z-50 flex  h-20 items-center justify-between shadow-sm">
      <div className="container mx-auto flex w-full max-w-7xl items-center justify-between">
        <div className=" hidden gap-4 md:flex items-center justify-center">
          <Link href="/">
            <div className="flex flex-row gap-1 items-center">
              <Image
                className="relative z-0 h-8 w-auto  saturate-[57.27] hue-rotate-[359deg] "
                src="/logo.svg"
                alt="Logo"
                priority={true}
                width={512}
                height={512}
              />
              <div className="red_gradient text relative text-[1rem] font-extrabold leading-relaxed">
                The Thieves&apos; Library
              </div>
            </div>
          </Link>
          <ThemeToggle />
        </div>
        {/* For mobile view */}
        <div className="flex flex-row gap-2 md:hidden items-center justify-center">
          <Link href="/">
            <Image
              className="relative z-0 h-8 w-auto invert dark:invert-0 opacity-90 grayscale"
              src="/logo.svg"
              alt="Logo"
              priority={true}
              width={512}
              height={512}
            />
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
