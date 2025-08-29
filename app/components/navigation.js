"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/assets/shared/desktop/logo.svg";
import { Cross as Hamburger } from "hamburger-react";

const navLinks = [
  {
    href: "/",
    link: "Home",
  },
  {
    href: "/stories",
    link: "Stories",
  },
  {
    href: "/feature",
    link: "Feature",
  },
  {
    href: "/pricing",
    link: "Pricing",
  },
];

const Navigation = ({}) => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="px-6 md:px-10 py-4">
      <div className="max-w-[1170px] mx-auto flex justify-between items-center">
        <Link href="/">
          <Image src={Logo} className="" alt="Photosnap Logo" />
        </Link>

        {/* MENU LIST */}
        <ul className="hidden md:flex gap-9">
          {navLinks.map((nav, idx) => {
            return (
              <li key={nav.link} className="">
                <Link
                  href={nav.href}
                  className="link-hover text-center text-xs uppercase font-bold tracking-[2px]"
                >
                  {nav.link}
                </Link>
              </li>
            );
          })}
        </ul>

        <Link
          href={""}
          className="px-6 py-3 hidden md:block text-white bg-black text-xs uppercase font-bold tracking-[2px]"
        >
          Get an Invite
        </Link>

        {/* BURGER */}
        <button
          className={`md:hidden z-[10000]`}
        >
          <Hamburger
            toggled={isOpen}
            size={20}
            distance="sm"
            toggle={setIsOpen}
            direction="right"
          />
        </button>
      </div>
    </nav>
  );
};

export default Navigation;
