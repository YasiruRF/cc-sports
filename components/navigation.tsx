"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

const houses = [
  { name: "Red House", href: "/houses/red", color: "text-house-red" },
  { name: "Blue House", href: "/houses/blue", color: "text-house-blue" },
  { name: "Green House", href: "/houses/green", color: "text-house-green" },
  { name: "Yellow House", href: "/houses/yellow", color: "text-house-yellow" },
]

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-secondary/95 backdrop-blur supports-[backdrop-filter]:bg-secondary/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">E</span>
            </div>
            <span className="text-secondary-foreground font-bold text-xl">Eclipse 2025</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className="text-secondary-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-secondary-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                About
              </Link>
              <Link
                href="/schedule"
                className="text-secondary-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Schedule
              </Link>
              <Link
                href="/event-details"
                className="text-secondary-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Event Details
              </Link>
              <Link
                href="/live-updates"
                className="text-secondary-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Live Updates
              </Link>

              {/* Houses Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger className="text-secondary-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center">
                  Houses <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {houses.map((house) => (
                    <DropdownMenuItem key={house.name} asChild>
                      <Link href={house.href} className={`${house.color} font-medium`}>
                        {house.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Link
                href="/gallery"
                className="text-secondary-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Gallery
              </Link>
              <Link
                href="/sponsors"
                className="text-secondary-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Sponsors
              </Link>
              <Link
                href="/contact"
                className="text-secondary-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)} className="text-secondary-foreground">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-secondary border-t border-border">
              <Link
                href="/"
                className="text-secondary-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-secondary-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </Link>
              <Link
                href="/schedule"
                className="text-secondary-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
              >
                Schedule
              </Link>
              <Link
                href="/event-details"
                className="text-secondary-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
              >
                Event Details
              </Link>
              <Link
                href="/live-updates"
                className="text-secondary-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
              >
                Live Updates
              </Link>

              {/* Mobile Houses */}
              <div className="px-3 py-2">
                <div className="text-secondary-foreground text-base font-medium mb-2">Houses</div>
                {houses.map((house) => (
                  <Link
                    key={house.name}
                    href={house.href}
                    className={`${house.color} block px-3 py-1 rounded-md text-sm font-medium`}
                  >
                    {house.name}
                  </Link>
                ))}
              </div>

              <Link
                href="/gallery"
                className="text-secondary-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
              >
                Gallery
              </Link>
              <Link
                href="/sponsors"
                className="text-secondary-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
              >
                Sponsors
              </Link>
              <Link
                href="/contact"
                className="text-secondary-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
