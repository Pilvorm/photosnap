"use client";

import Link from "next/link";
import Image from "next/image";
import LogoWhite from "@/public/assets/shared/desktop/logo-white.svg";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { FaYoutube, FaPinterest, FaInstagram } from "react-icons/fa";
import { NAV_LINKS } from "../data";

const Footer = ({}) => {
  return (
    <footer className="px-8 py-14 bg-black flex flex-col items-center gap-30">
      <div className="flex flex-col items-center">
        <Link href="/">
          <Image src={LogoWhite} className="" alt="Photosnap Logo" />
        </Link>
        <div className="socials-wrapper mt-8 gap-4 flex text-white">
          <FaFacebook size={20} />
          <FaYoutube size={20} />
          <FaXTwitter size={20} />
          <FaPinterest size={20} />
          <FaInstagram size={20} />
        </div>
        {/* MENU LIST */}
        <ul className="mt-12 flex flex-col gap-5 text-white text-center">
          {NAV_LINKS.map((nav, idx) => {
            return (
              <li key={nav.link} className="">
                <Link
                  href={nav.href}
                  className="link-hover text-center text-xs uppercase font-bold tracking-[2px] tracking-[2px]"
                >
                  {nav.link}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="text-white text-center">
        <Link href={""} className="tracking-[2px] text-xs uppercase font-bold">
          Get an Invite
        </Link>
        <p className="mt-9 opacity-50">Copyright 2025. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
