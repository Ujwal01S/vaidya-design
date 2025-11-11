"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleLinkClick: (open: boolean) => void;
}

const MobileHamburger = ({ handleLinkClick, isOpen, setIsOpen }: Props) => {
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#vehicles", label: "Renting" },
    { href: "#how it works", label: "How It Works" },
    { href: "#contact", label: "Contact" },
    { href: "#about", label: "Profile" },
  ];

  return (
    <div className="tablet:hidden min-w-100vw">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation menu"
        aria-expanded={isOpen}
        className="relative z-60 px-10"
      >
        {isOpen ? (
          <X className="h-10 w-10 text-warn-primary" />
        ) : (
          <Menu className="h-6 w-6" />
        )}
      </Button>

      {isOpen && (
        <div
          className="fixed inset-0 z-55 top-0 left-0"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Mobile Menu */}
      <nav
        className={`fixed top-[60px] left-0 w-full h-fit bg-white z-60 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Mobile navigation"
      >
        <>
          <nav
            className={`w-full`}
            aria-label="Mobile navigation"
          >
            <ul className="flex flex-col gap-4 p-6">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => handleLinkClick(false)}
                    className="text-foreground hover:text-primary font-medium transition-colors block py-2 text-lg"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="grid w-full gap-[11px] px-4">
            <div className="flex gap-5 justify-center ">
              <Image
                src={"/facebook.png"}
                alt="facebook"
                width={40}
                height={40}
              />

              <Image
                src={"/whatsapp.png"}
                alt="whatsapp"
                width={40}
                height={40}
              />

              <Image
                src={"/insta.png"}
                alt="instagram"
                width={40}
                height={40}
              />
            </div>

            <ul className="flex gap-[30px] justify-center border-t-2 border-[#33333399] pb-6">
              <li>
                <Link href={"#"}>FAQS</Link>
              </li>
              <li>
                <Link href={"#"}>Privacy Policy</Link>
              </li>
              <li>
                <Link href={"#"}>Terms & Conditions</Link>
              </li>
            </ul>
          </div>
        </>
      </nav>
    </div>
  );
};

export default MobileHamburger;
