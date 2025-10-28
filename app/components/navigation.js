"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import LogoBlack from "@/public/assets/shared/desktop/logo.svg";
import { Cross as Hamburger } from "hamburger-react";
import { NAV_LINKS } from "../data";

const Navigation = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="px-6 md:px-10 py-4 bg-white">
      <div className="max-w-[1170px] mx-auto flex justify-between items-center">
        <Link href="/">
          <Image src={LogoBlack} className="" alt="Photosnap Logo" />
        </Link>

        {/* MENU LIST */}
        <ul className="hidden md:flex gap-9">
          {NAV_LINKS.map((nav, idx) => {
            return (
              nav.link !== "Home" && (
                <li key={nav.link} className="">
                  <Link
                    href={nav.href}
                    className="link-hover text-center text-xs uppercase font-bold tracking-[2px]"
                  >
                    {nav.link}
                  </Link>
                </li>
              )
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
        <button className={`md:hidden z-[10000]`}>
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
