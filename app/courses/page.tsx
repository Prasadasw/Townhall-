import Link from "next/link";

import { CourseCard } from "@/components/courses/course-card";
import { FloatingNav } from "@/components/ui/floating-nav";
import { MagicButton } from "@/components/ui/magic-button";
import { Spotlight } from "@/components/ui/spotlight";
import { courses, navItems, whyUsPoints } from "@/data";

const CoursesPage = () => {
  return (
    <main className="relative mx-auto flex min-h-screen flex-col items-center justify-center overflow-clip bg-black-100 px-5 pb-20 pt-32 sm:px-10">
      <FloatingNav navItems={navItems} />

      <div className="relative w-full max-w-7xl">
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-black-200/40 px-6 py-16 sm:px-12">
          <div className="absolute -left-10 -top-32 h-[32rem] w-[32rem] opacity-70">
            <Spotlight className="h-full w-full" fill="purple" />
          </div>
          <div className="absolute -right-24 top-1/3 h-[28rem] w-[28rem] opacity-60">
            <Spotlight className="h-full w-full" fill="blue" />
          </div>

          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-white/60">
                Courses
              </p>
              <h1 className="mt-6 text-4xl font-bold text-white md:text-5xl">
                Master the skills that ship real products.
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-white-200">
                Select a course crafted by industry professionals. Every program
                is project-first, mentor-led, and focused on deploying real
                software that solves real problems.
              </p>
              <div className="mt-10 flex flex-wrap gap-3 text-sm text-white-100">
                <span className="rounded-full border border-white/20 px-4 py-1.5">
                  Daily live tasks
                </span>
                <span className="rounded-full border border-white/20 px-4 py-1.5">
                  Weekly shipped projects
                </span>
                <span className="rounded-full border border-white/20 px-4 py-1.5">
                  Deployment guidance
                </span>
                <span className="rounded-full border border-white/20 px-4 py-1.5">
                  Career mentorship
                </span>
              </div>
            </div>

            <div className="relative flex flex-col gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/5 via-white/0 to-white/10 p-8 text-white backdrop-blur">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-white/70">
                  How it works
                </p>
                <h2 className="mt-3 text-2xl font-semibold text-white">
                  Book a strategy call in 3 steps
                </h2>
              </div>
              <ol className="space-y-4 text-sm text-white-200">
                <li className="flex gap-3">
                  <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-purple/30 text-sm font-semibold text-purple">
                    1
                  </span>
                  Share your goals and current skill level.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-purple/30 text-sm font-semibold text-purple">
                    2
                  </span>
                  We map the right course and project roadmap for you.
                </li>
                <li className="flex gap-3">
                  <span className="mt-1 flex h-7 w-7 items-center justify-center rounded-full bg-purple/30 text-sm font-semibold text-purple">
                    3
                  </span>
                  Start building with live mentors and weekly launches.
                </li>
              </ol>
              <div>
                <Link href="/#contact">
                  <MagicButton
                    title="Talk to our team"
                    position="right"
                    otherClasses="bg-white text-black hover:bg-white/80"
                  />
                </Link>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/40 p-5 text-sm text-white-200">
                <p className="text-xs uppercase tracking-[0.4em] text-white/60">
                  Need help now?
                </p>
                <p className="mt-3 text-lg font-semibold text-white">
                  Call us at <a href="tel:+917020727854" className="text-purple underline decoration-dotted underline-offset-4 hover:text-purple/80">+91 7020727854</a>
                </p>
                <p className="mt-1 text-xs text-white/60">
                  Available 10 AM – 7 PM IST, Monday to Saturday.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </section>

        <section className="mt-20 rounded-3xl border border-white/10 bg-black-200/40 p-8 sm:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm uppercase tracking-[0.35em] text-white/60">
                Why choose us
              </p>
              <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
                Why learners pick Townhall courses.
              </h2>
              <p className="mt-4 text-base text-white-200">
                We keep every course grounded in real production workflows.
                You&apos;ll build the portfolio, confidence, and network needed
                to step into your next role.
              </p>
            </div>

            <div className="grid w-full max-w-3xl gap-6 md:grid-cols-2">
              {whyUsPoints.map((point) => (
                <div
                  key={point.title}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-black-100/60 p-6 transition hover:border-white/30"
                >
                  <span className="text-2xl">{point.icon}</span>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {point.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white-200">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-20 rounded-3xl border border-white/10 bg-gradient-to-br from-purple-500/30 via-black-100 to-blue-500/30 p-12 text-center">
          <div className="mx-auto max-w-3xl space-y-6">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Ready to start your next big project with us?
            </h2>
            <p className="text-lg text-white-200">
              Join the cohort that matches your goals, build portfolio-ready
              case studies, and deploy production-grade products from week one.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-sm text-white-100">
              <span className="rounded-full border border-white/30 px-4 py-1.5">
                Industry mentors
              </span>
              <span className="rounded-full border border-white/30 px-4 py-1.5">
                Live doubt solving
              </span>
              <span className="rounded-full border border-white/30 px-4 py-1.5">
                Job-ready portfolio
              </span>
            </div>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/#contact" className="w-full sm:w-auto">
                <MagicButton title="Book a discovery call" position="right" />
              </Link>
              <Link
                href="/"
                className="w-full rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white sm:w-auto"
              >
                Browse agency services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default CoursesPage;


