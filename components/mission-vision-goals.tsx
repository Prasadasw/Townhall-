"use client";

import { motion } from "framer-motion";

export const MissionVisionGoals = () => {
  return (
    <section className="relative w-full bg-gradient-to-b from-gray-900 to-black py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:60px_60px]" />
      
      <div className="mx-auto max-w-[95%] px-4 sm:px-6 lg:max-w-[90%]">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-white md:text-6xl">
            Our Core Values
          </h2>
          <p className="mt-4 text-lg text-gray-400">
            Driving innovation through purpose and vision
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="group relative overflow-hidden rounded-2xl bg-gray-800/50 p-8 backdrop-blur-sm"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-purple-500/20 blur-2xl group-hover:bg-purple-500/30 transition-all duration-500" />
            <div className="relative">
              <div className="mb-6 inline-block rounded-xl bg-purple-500/10 p-3">
                <svg
                  className="h-8 w-8 text-purple-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-white">Our Mission</h3>
              <p className="text-gray-300 text-lg">
                To deliver exceptional digital solutions that empower businesses to thrive in the digital age, combining innovation with reliability.
              </p>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group relative overflow-hidden rounded-2xl bg-gray-800/50 p-8 backdrop-blur-sm"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-blue-500/20 blur-2xl group-hover:bg-blue-500/30 transition-all duration-500" />
            <div className="relative">
              <div className="mb-6 inline-block rounded-xl bg-blue-500/10 p-3">
                <svg
                  className="h-8 w-8 text-blue-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-white">Our Vision</h3>
              <p className="text-gray-300 text-lg">
                To be the leading force in digital transformation, setting new standards for innovation and excellence in technology solutions.
              </p>
            </div>
          </motion.div>

          {/* Goals Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="group relative overflow-hidden rounded-2xl bg-gray-800/50 p-8 backdrop-blur-sm"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-green-500/20 blur-2xl group-hover:bg-green-500/30 transition-all duration-500" />
            <div className="relative">
              <div className="mb-6 inline-block rounded-xl bg-green-500/10 p-3">
                <svg
                  className="h-8 w-8 text-green-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </div>
              <h3 className="mb-4 text-2xl font-bold text-white">Our Goals</h3>
              <p className="text-gray-300 text-lg">
                To achieve sustainable growth through continuous innovation, client success, and technological advancement.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}; 