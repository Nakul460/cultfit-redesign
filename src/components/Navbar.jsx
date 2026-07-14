import { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import MagneticButton from "@/components/ui/magnetic-button";

const navItems = [
  { name: "WORKOUTS", link: "#workouts" },
  { name: "WHY CULT", link: "#why-cult" },
  { name: "PLANS", link: "#plans" },
  { name: "STORE", link: "#shop" },
];

export default function SiteNavbar({ onLoginOpen }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <Navbar>
      {/* Concept Banner */}
      <div className="bg-[#111] border-b border-white/[0.04] py-1.5 text-center">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#666]">
          Unofficial Concept Redesign &middot; Personal Portfolio Project
        </p>
      </div>

      {/* Desktop Navigation */}
      <NavBody>
        <NavbarLogo />
        <NavItems items={navItems} />
        <div className="flex items-center gap-4">
          <MagneticButton className="text-sm font-bold text-white hover:text-orange-400 transition-colors">
            Sign Up
          </MagneticButton>
          <NavbarButton variant="primary" onClick={onLoginOpen}>
            Login
          </NavbarButton>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu isOpen={isMobileMenuOpen}>
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="relative text-neutral-700 dark:text-neutral-200"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <div className="flex w-full flex-col gap-4">
            <NavbarButton
              onClick={() => setIsMobileMenuOpen(false)}
              variant="secondary"
              className="w-full"
            >
              EXPLORE PLANS
            </NavbarButton>
            <NavbarButton
              onClick={() => {
                setIsMobileMenuOpen(false);
                onLoginOpen();
              }}
              variant="primary"
              className="w-full"
            >
              Login
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
