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
  const [showContactForm, setShowContactForm] = useState(false);

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

  const handleContactClick = () => {
    setShowContactForm(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeContactForm = () => {
    setShowContactForm(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  return (
    <>
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
          {/* Left side - Logo */}
          <div className="absolute left-10 flex h-full items-start justify-start">
            {logo || (
              <Image src={th} alt='th' className="w-24 h-20"/>
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

          {/* Right side - Contact Now button */}
          <div className="absolute right-10 top-0 flex h-full items-center">
            <button 
              onClick={handleContactClick}
              className="rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition-all hover:bg-gray-200 hover:shadow-lg"
            >
              Contact Now
            </button>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Premium Black Contact Form Popup */}
      <AnimatePresence>
        {showContactForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[5001] flex items-center justify-center p-4"
          >
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeContactForm}
              className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            />

            {/* Modal Content */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative w-full max-w-xl rounded-xl bg-gradient-to-br from-gray-900 to-black border border-gray-800 shadow-2xl overflow-hidden"
            >
              {/* Glow effect */}
              <div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-10" />
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-10" />

              {/* Close button */}
              <button
                onClick={closeContactForm}
                className="absolute right-4 top-4 z-10 p-2 rounded-full hover:bg-gray-800 transition-colors"
                aria-label="Close contact form"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400 hover:text-white"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              <div className="p-8">
                <div className="mb-8">
                  <h2 className="text-3xl font-bold text-white mb-2">Lets Talk</h2>
                  <p className="text-gray-400">We would love to hear from you. Send us a message and we will respond as soon as possible.</p>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-400 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5"
                  >
                    Send Message
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 inline-block ml-2"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};