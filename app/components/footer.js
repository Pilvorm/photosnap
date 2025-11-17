"use client";

import Link from "next/link";
import Image from "next/image";
import LogoWhite from "@/public/assets/shared/desktop/logo-white.svg";
import { FaFacebook, FaXTwitter } from "react-icons/fa6";
import { FaYoutube, FaPinterest, FaInstagram } from "react-icons/fa";
import { NAV_LINKS } from "../data";

const Footer = ({}) => {
  return (
    <footer className="px-8 py-14 md:px-10 lg:px-43 bg-black flex flex-col md:flex-row md:justify-between gap-30">
      <div className="footer-content-wrapper flex flex-col items-center md:items-start">

        <Link href="/" className="footer-logo md:order-1">
          <Image src={LogoWhite} className="" alt="Photosnap Logo" />
        </Link>

        <div className="footer-socials md:order-3 socials-wrapper mt-8 md:mt-18 gap-4 flex text-white">
          <FaFacebook size={20} />
          <FaYoutube size={20} />
          <FaXTwitter size={20} />
          <FaPinterest size={20} />
          <FaInstagram size={20} />
        </div>

        {/* MENU LIST */}
        <ul className="footer-links md:order-2 mt-12 md:mt-8 flex flex-col md:flex-row gap-5 text-white text-center">
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

      <div className="flex flex-col gap-9 md:justify-between text-white text-center md:text-right">
        <Link href={""} className="tracking-[2px] text-xs uppercase font-semibold">
          Get an Invite
        </Link>
        <p className="opacity-50">Copyright 2025. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
