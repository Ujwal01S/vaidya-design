import { FaceBookSVG, InstagramSVG, TwitterSVG } from "@/svg/footer";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#1F1F1F]">
      <div className="container bg-[url('/newlogo.png')] bg-contain bg-right  bg-no-repeat relative tablet:pt-8 backdrop-opacity-80">
        <div className="relative z-10 container mx-auto px-3 table:px-6 desktop:px-[84px] py-12 text-white">
          {/* Main 4-column grid */}
          <div className="grid grid-cols-1 tablet:grid-cols-4 gap-10 pb-10 border-b-2 border-gray-600 pl-4 md:pl-8 tablet:pl-40 self-center justify-start tablet:justify-center items-center">
            {/* Column 1: Logo + Description + Social Icons */}
            <div className="grid justify-center tablet:justify-normal gap-[35px] order-4 tablet:order-1">
              <h1 className="text-3xl table:text-4xl font-bold text-warn-primary">
                Logo
              </h1>
              <p className="text-white text-sm table:text-base leading-relaxed max-w-xs">
                Jorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>

              {/* Social Icons */}
              <div className="flex gap-1 items-start content-start self-start">
                <span aria-label="Facebook">
                  <FaceBookSVG />
                </span>
                <span aria-label="Twitter">
                  <TwitterSVG />
                </span>
                <span aria-label="Instagram">
                  <InstagramSVG />
                </span>
              </div>
            </div>

            {/* Column 2: About */}
            <div className="grid gap-5 order-1 tablet:order-2">
              <h3 className="text-lg font-semibold">About</h3>
              <ul className="grid gap-[25px] text-white">
                {[
                  "About Us",
                  "Add Vehicle",
                  "How It Works",
                  "Invite Friends",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm tablet:text-base"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Socials */}
            <div className="grid gap-5 order-2 tablet:order-3">
              <h3 className="text-lg font-semibold">Socials</h3>
              <ul className="grid gap-[25px] text-white">
                {["Discord", "Instagram", "Twitter", "Facebook"].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className=" text-sm table:text-base"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4: Main Cities */}
            <div className="grid gap-5 order-3 tablet:order-4">
              <h3 className="text-lg font-semibold">Main Cities</h3>
              <ul className="grid gap-[25px] text-gray-300">
                {["Kathmandu", "Pokhara", "Chitwan", "Butwal"].map((city) => (
                  <li key={city}>
                    <Link
                      href="#"
                      className="text-sm table:text-base"
                    >
                      {city}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col px-4 tablet:flex-row justify-between items-center tablet:px-38 pt-8 gap-5 tablet:gap-0">
            <p className="text-white order-2 tablet:order-1 text-center">
              ©2024 Vaidya Mobility. All rights reserved
            </p>

            <div className="flex items-center gap-[69px] tablet:gap-8 order-1 tablet:order-2">
              <Link
                href="#"
                className="text-white"
              >
                Privacy & Policy
              </Link>
              <Link
                href="#"
                className="text-white"
              >
                Terms & Condition
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
