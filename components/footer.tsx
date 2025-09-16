import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <h3 className="mb-4">
              <Image
                src="/eclipse-logo.png"
                alt="Eclipse logo"
                width={140}
                height={40}
              ></Image>
            </h3>
            <p className="text-primary-foreground/80 mb-6 text-balance">
              Eclipse 2025 is Curtin Colombo's premier university sports meet,
              celebrating athletic excellence and the spirit of competition in
              Sri Lanka's vibrant sporting community.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-primary-foreground/80 hover:text-accent transition-colors"
              >
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  About Eclipse
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Events Schedule
                </a>
              </li>
              <li>
                <a
                  href="#registration"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Registration
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Results & Updates
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  Media Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  Curtin University
                  <br />
                  Colombo Campus
                  <br />
                  Sri Lanka
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  +94 11 2 500 500
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80 text-sm">
                  eclipse2025@curtin.edu.lk
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © 2025 Eclipse Sports Meet. All rights reserved.
            </p>
            <p className="text-primary-foreground/60 text-sm mt-2 md:mt-0">
              Proudly hosted by{" "}
              <span className="text-accent">Curtin University</span> • Top 1%
              Worldwide
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
