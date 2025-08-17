"use client";

import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/assets/shared/desktop/logo.svg";

const navLinks = [
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
  return (
    <nav className="px-41 py-7 flex justify-between items-center">
      <div>
        <Image src={Logo} className="" alt="Photosnap Logo" />
      </div>

      {/* MENU LIST */}
      <ul className="flex gap-9">
        {navLinks.map((nav, idx) => {
          return (
            <li key={nav.link} className="">
              <Link href={nav.href} className="text-xs uppercase font-bold tracking-[2px]">
                {nav.link}
              </Link>
            </li>
          );
        })}
      </ul>

      <button className="px-6 py-3 text-white bg-black text-xs uppercase font-bold tracking-[2px]">
        Get an Invite
      </button>
    </nav>
  );
};

export default Navigation;
