"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import MobileHamburger from "./mobile-hamberger";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`bg-white relative top-0 w-full z-50 ${isOpen ? "sticky" : "relative"}`}
    >
      <div className="container flex justify-between items-center desktop:border-b py-4 desktop:py-[27px] px-3 tablet:px-6 desktop:px-[84px] mx-auto">
        {!isOpen && (
          <h1 className="text-[32px] font-semibold cursor-pointer">Logo</h1>
        )}

        {isOpen && <div></div>}
        <nav className="hidden tablet:block w-[599px]">
          <ul className="flex justify-between gap-8">
            <li>
              <Link
                href={"#"}
                className="hover:text-gray-600 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"#"}
                className="hover:text-gray-600 transition-colors"
              >
                Renting
              </Link>
            </li>
            <li>
              <Link
                href={"#"}
                className="hover:text-gray-600 transition-colors"
              >
                How It Works
              </Link>
            </li>
            <li>
              <Link
                href={"#"}
                className="hover:text-gray-600 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className="hidden gap-2 tablet:flex items-center cursor-pointer">
          <div className="relative aspect-square h-[34px] w-[34px]">
            <Image
              fill
              src="/pp.png"
              alt="profile"
              sizes="100px"
              className="object-cover rounded-full"
            />
          </div>
          <p>Rahul Awasti</p>
          <ChevronDown className="text-red-500" />
        </div>

        <MobileHamburger
          handleLinkClick={handleLinkClick}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      </div>
    </header>
  );
};

export default Header;
