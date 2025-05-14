"use client";

import {
  AnimatePresence,
  motion,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { navItems } from "@/data";
import { cn } from "@/lib/utils";
import Image from "next/image";
import th from '../../public/th/black.svg'

type FloatingNavProps = {
  navItems: typeof navItems;
  className?: string;
  logo?: React.ReactNode;
};

export const FloatingNav = ({
  navItems,
  className,
  logo,
}: FloatingNavProps) => {
  const { scrollY } = useScroll();

  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useMotionValueEvent(scrollY, "change", (current) => {
    if (typeof current === "number") {
      if (current < 50) {
        setVisible(true);
      } else {
        if (current > lastScrollY) {
          setVisible(false); // Scrolling down
        } else {
          setVisible(true); // Scrolling up
        }
      }
      setLastScrollY(current);
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className="fixed inset-x-0 top-10 z-[5000] mx-auto flex w-full justify-center"
      >
        {/* Left side - Contact Now button */}
        <div className="absolute left-10 flex h-full items-start justify-start">
          {logo || (
            <Image src={th} alt='th' className="w-24 h-20  "/>
          )}
        </div>

        {/* Center navigation */}
        <motion.nav
          className={cn(
            "flex max-w-fit items-center justify-center space-x-4 rounded-3xl border border-white/[0.2] bg-black-100 px-3 py-5 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
            className
          )}
        >
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link-${idx}`}
              href={navItem.link}
              className={cn(
                "relative flex items-center space-x-1 text-neutral-600 hover:text-neutral-500 dark:text-neutral-50 dark:hover:text-neutral-300"
              )}
            >
              <span className="!cursor-pointer text-sm">{navItem.name}</span>
            </Link>
          ))}
        </motion.nav>

        {/* Right side - Logo */}
        <div className="absolute right-10 top-0 flex h-full items-center">
          <button className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-gray-200">
            Contact Now
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
