"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1>
              <Link href="/">
                <Image
                  src="/eclipse-logo.png"
                  alt="Eclipse logo"
                  width={120}
                  height={40}
                ></Image>
              </Link>
            </h1>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-foreground hover:text-accent transition-colors"
            >
              Home
            </Link>
            <Link
              href="/events"
              className="text-foreground hover:text-accent transition-colors"
            >
              Events
            </Link>
            <Link
              href="/about"
              className="text-foreground hover:text-accent transition-colors"
            >
              About
            </Link>
            <Link
              href="/houses"
              className="text-foreground hover:text-accent transition-colors"
            >
              Houses
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-card border-t border-border">
              <Link
                href="/"
                className="block px-3 py-2 text-foreground hover:text-accent"
              >
                Home
              </Link>
              <Link
                href="/events"
                className="block px-3 py-2 text-foreground hover:text-accent"
              >
                Events
              </Link>
              <Link
                href="/about"
                className="block px-3 py-2 text-foreground hover:text-accent"
              >
                About
              </Link>
              <Link
                href="/houses"
                className="block px-3 py-2 text-foreground hover:text-accent"
              >
                Houses
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
