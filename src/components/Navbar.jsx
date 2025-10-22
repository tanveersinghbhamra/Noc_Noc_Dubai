"use client";
import { usePathname } from "next/navigation"
import {
  Navbar as ResizableNavbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  
  const navItems = [
    {
      name: "Home",
      link: "/"
    },
    {
      name: "Specials",
      link: "/specials",
    },
    {
      name: "Menu",
      link: "/menu",
    },
    {
      name: "Gallery",
      link: "/gallery",
    },
    {
      name: "Contact",
      link: "#ContactSection",
    },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="font-cinzel relative w-full">
      <ResizableNavbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4 pr-2">
            <NavbarButton variant="custom" onClick={() =>
              window.open(
                "https://wa.me/+971569610965?text=Hello%20Noc%20Noc!%20I%20want%20to%20reserve%20a%20slot",
                "_blank"
              )
            }>Reserve</NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <MobileNavToggle
              isOpen={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
          </MobileNavHeader>

          <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false) }>
            {navItems.map((item, idx) => (
              <Link
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-white hover:text-[#C29C7D]">
                <span className="block">{item.name}</span>
              </Link>
            ))}
            <div className="flex w-full flex-col gap-4">
              
              <NavbarButton
                variant="primary"
                className="w-full"
                onClick={() =>
                  window.open("https://wa.me/+971569610965?text=Hello%20Noc%20Noc!%20I%20want%20to%20reserve%20a%20slot","_blank"
                  )
                }
              >
                Reserve
              </NavbarButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </ResizableNavbar>
    </div>
  );
}
