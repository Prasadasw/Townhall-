import Link from "next/link";
import { FaLocationArrow, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaPaperPlane } from "react-icons/fa";
import { MagicButton } from "@/components/ui/magic-button";
import { links } from "@/config";
import { socialMedia } from "@/data";
import Image from "next/image";
import paarchute from '../public/2.png'

export const Footer = () => {
  return (
    <>
    <footer id="contact" className="relative w-full bg-black-100 pb-10">
      {/* Background grid */}
      <div className="absolute inset-0 -z-10 overflow-hidden opacity-20">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          className="h-full w-full object-cover"
          fill
        />
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4">
        {/* Contact CTA */}
        <div className="mb-16">
          <div className="flex items-center text-center mb-12">
          <Image src={paarchute} alt='parachute' className="w-96 h-96"/>

            <h1 className="heading lg:max-w-[45vw]">
              Ready to take <span className="text-purple">your</span> digital
              presence to the next level?
            </h1>
         
          </div>
          {/* <p className="my-5 text-lg text-white-200 md:mt-10 ">
              Reach out to us today and let's discuss how we can help you achieve your goals.
            </p> */}
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            {/* Thoughtful message */}
            <div className="lg:w-1/2 space-y-6">
              <h2 className="text-3xl font-bold text-white">
                Let's Build Something Amazing Together
              </h2>
              <p className="text-lg text-white-200">
                We're passionate about creating digital solutions that drive real results. 
                Whether you have a project in mind or just want to explore possibilities, 
                we'd love to hear from you.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-purple bg-opacity-20">
                    <FaPaperPlane className="text-purple text-xl" />
                  </div>
                  <p className="text-white-200">Typically respond within 24 hours</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-purple bg-opacity-20">
                    <FaPhoneAlt className="text-purple text-xl" />
                  </div>
                  <p className="text-white-200">Schedule a call at your convenience</p>
                </div>
              </div>
            </div>

            {/* Contact form */}
            <div className="lg:w-1/2 w-full">
              <form className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 shadow-xl">
                <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
                <div className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-white-200 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-90 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-white-200 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-90 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-white-200 mb-2">Phone</label>
                    <input
                      type="tel"
                      id="phone"
                      placeholder="+91 123 456 7890"
                      className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-90 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-white-200 mb-2">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Tell us about your project..."
                      className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-90 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-purple hover:bg-purple-dark text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <FaPaperPlane />
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white-100 pt-6 text-center"></div>
        {/* Footer columns */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 lg:grid-cols-4">
          {/* Company info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Townhall</h3>
            <p className="text-white-200">
              Building digital experiences that matter with cutting-edge technology and creative solutions.
            </p>
            <div className="flex space-x-4">
              {socialMedia.map((profile) => (
                <Link
                  key={profile.name}
                  href='#'
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex size-10 items-center justify-center rounded-lg bg-black-200 transition-colors hover:bg-purple"
                  title={profile.name}
                >
                  <Image
                    src={profile.img}
                    alt={profile.name}
                    width={20}
                    height={20}
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Contact info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <FaMapMarkerAlt className="mt-1 text-purple" />
                <p className="text-white-200">Laximi Chowk, Hinjewadi Phase1 Pune</p>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-purple" />
                <Link href={`mailto:${links.ownerEmail}`} className="text-white-200 hover:text-purple">
                  {links.ownerEmail}
                </Link>
              </div>
              <div className="flex items-center space-x-3">
                <FaPhoneAlt className="text-purple" />
                <Link href="tel:+11234567890" className="text-white-200 hover:text-purple">
                  +1 (123) 456-7890
                </Link>
              </div>
            </div>
          </div>
          <div className="space-y-4">
           
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white">Newsletter</h3>
            <p className="text-white-200">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="rounded-lg bg-black-200 px-4 py-2 text-white placeholder-white-200 focus:outline-none focus:ring-2 focus:ring-purple"
                required
              />
              <button
                type="submit"
                className="rounded-lg bg-purple px-4 py-2 font-medium text-white transition-colors hover:bg-purple-dark"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 border-t border-white-100 pt-6 text-center">
          <div className="flex flex-col items-center justify-between md:flex-row">
            <p className="text-white-200">
              &copy; {new Date().getFullYear()} Townhall Devs. All rights reserved.
            </p>
            <div className="mt-4 flex space-x-6 md:mt-0">
              <Link href="#" className="text-white-200 hover:text-purple">
                Privacy Policy
              </Link>
              <Link href="#" className="text-white-200 hover:text-purple">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
};