"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator,    DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import * as React from "react"
import { Moon, MoonIcon, Sun } from "lucide-react"
import { useTheme } from "next-themes"


const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Awards", href: "/awards" },
  { name: "Events", href: "/events" },
  { name: "Conferences", href: "/conferences" },
  // { name: "Societies", href: "/societies" },
  { name: "Team", href: "/team" },
  { name: "Join Us", href: "/join" },
  { name: "SDG", href: "https://sdgs.un.org/goals" },
];

export function ModeToggle() {
  const { setTheme } = useTheme()
 
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/70 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <img
                className="h-12 w-auto"
                src="https://res.cloudinary.com/anurag256k/image/upload/v1735503028/IEEE/ieee-logo_ufoyaw.png"
                alt="IEEE Logo"
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-800 hover:bg-blue-200  hover:text-blue-900 px-3 py-2 rounded-b rounded-t text-sm font-medium transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="transition-all duration-300 hover:scale-105 bg-zinc-300 text-black hover:bg-blue-100 hover:text-blue-900">Societies</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>OUR SOCIETIES</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                      <Link href="/cs">
                      IEEE Computer Society
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      {/* IEEE Industry Applications Society */}
                      <Link href="/ias">
                      IEEE IAS Society
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      {/* IEEE  */}
                      <Link href="/wie">
                      IEEE Women in Engineering
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>


                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-blue-900 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button className="transition-all duration-300 hover:scale-105 bg-zinc-300 text-black hover:bg-blue-100 hover:text-blue-900">Societies</Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuLabel>OUR SOCIETIES</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuGroup>
                    <DropdownMenuItem asChild>
                      <Link href="/cs">
                      IEEE Computer Society
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      {/* IEEE Industry Applications Society */}
                      <Link href="/ias">
                      IEEE Computer Society
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      {/* IEEE  */}
                      <Link href="/wie">
                      IEEE Women in Engineering
                      </Link>
                    </DropdownMenuItem>
                  </DropdownMenuGroup>


                </DropdownMenuContent>
              </DropdownMenu>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-800 hover:bg-blue-100 hover:text-blue-900 block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
              //here is mobile nav  (dropdown)
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
