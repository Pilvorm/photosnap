"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import LogoBlack from "@/public/assets/shared/desktop/logo.svg";
import { Cross as Hamburger } from "hamburger-react";
import { NAV_LINKS } from "../data";
import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
} from "motion/react";

const Navigation = ({}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (!previous) return;

    if (isOpen) {
      setHidden(false);
      return;
    }

    if (latest > previous && latest > 100) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <motion.nav
      initial={false}
      animate={{ y: hidden ? "-100%" : "0%" }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="relative sticky top-0 z-100 bg-white shadow-2xs"
    >
      <div className="relative max-w-[1170px] px-6 md:px-10 py-4 mx-auto bg-white flex justify-between items-center z-50">
        <Link href="/">
          <Image src={LogoBlack} className="" alt="Photosnap Logo" />
        </Link>

        {/* MENU LIST */}
        <ul className="hidden md:flex gap-9">
          {NAV_LINKS.map(
            (nav, idx) =>
              nav.link !== "Home" && (
                <li key={nav.link} className="">
                  <Link
                    href={nav.href}
                    className="link-hover text-center text-xs uppercase font-bold tracking-[2px]"
                  >
                    {nav.link}
                  </Link>
                </li>
              ),
          )}
        </ul>

        <Link
          href={""}
          className="standard-btn px-6 py-3 hidden md:block text-white bg-black text-xs uppercase font-semibold tracking-[2px]"
        >
          Get an Invite
        </Link>

        {/* BURGER */}
        <button className={`md:hidden`} aria-label="Navigation menu">
          <Hamburger
            toggled={isOpen}
            size={20}
            distance="sm"
            toggle={setIsOpen}
            direction="right"
          />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* OVERLAY */}
            <motion.div
              className="md:hidden fixed inset-0 bg-black/50 z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setIsOpen(false)}
            />

            {/* MENU PANEL */}
            <motion.div
              className="fixed top-[80px] left-0 w-full bg-white p-8 z-50 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <ul className="gap-3 flex flex-col items-center">
                {NAV_LINKS.map(
                  (nav, idx) =>
                    nav.link !== "Home" && (
                      <motion.li
                        key={nav.link}
                        initial={{ y: -10, opacity: 0 }}
                        animate={{
                          y: 0,
                          opacity: 1,
                          transition: { delay: (idx + 1) / 30 },
                        }}
                        exit={{ y: -10, opacity: 0 }}
                      >
                        <Link
                          href={nav.href}
                          onClick={() => setIsOpen(false)}
                          className="text-center text-sm uppercase font-bold tracking-[2px]"
                        >
                          {nav.link}
                        </Link>
                      </motion.li>
                    ),
                )}
              </ul>

              <hr className="my-5 text-[#dfdfdf]" />

              <button className="standard-btn w-full h-12 text-sm">
                Get an Invite
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
