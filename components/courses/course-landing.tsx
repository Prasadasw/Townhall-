import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

import type { CourseData } from "@/data/courses";
import { whyUsPoints } from "@/data/courses";
import { MagicButton } from "@/components/ui/magic-button";

type CourseLandingProps = {
  course: CourseData;
};

export const CourseLanding = ({ course }: CourseLandingProps) => {
  return (
    <div className="space-y-16">
      <section
        className={`relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${course.accentColor} px-6 py-16 sm:px-12`}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.2),_transparent_55%)]" />
        <div className="relative z-10 grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div className="space-y-6 text-white">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/40 px-4 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/70">
              Townhall Course
            </span>
            <div>
              <h1 className="text-4xl font-bold md:text-5xl">{course.title}</h1>
              <p className="mt-4 text-lg text-white/90">{course.description}</p>
            </div>
            <ul className="grid gap-3 text-sm sm:grid-cols-2">
              {course.heroHighlights.map((highlight) => (
                <li
                  key={highlight}
                  className="flex items-start gap-3 rounded-2xl border border-white/20 bg-black/20 p-4 backdrop-blur"
                >
                  <span className="mt-1 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-white/15 text-xs font-semibold text-white">
                    ✦
                  </span>
                  <span className="text-white/90">{highlight}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href="/#contact">
                <MagicButton
                  title={course.ctaLabel}
                  position="right"
                  icon={<FaLocationArrow />}
                  otherClasses="bg-white text-black hover:bg-white/80"
                  asChild
                />
              </Link>
              <Link
                href="/courses"
                className="flex items-center gap-2 rounded-full border border-white/50 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
              >
                View all courses
                <FaLocationArrow className="size-4" />
              </Link>
              <span className="rounded-full bg-black/60 px-4 py-2 text-sm font-semibold text-white/90 sm:ml-auto">
                {course.fees}
              </span>
            </div>
          </div>

          <div className="relative h-[320px] overflow-hidden rounded-3xl border border-white/20 bg-black/40 sm:h-[380px]">
            <Image
              src={course.heroImage}
              alt={course.heroImageAlt}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      <section className="grid gap-10 lg:grid-cols-[2fr_1fr]" id="overview">
        <div className="rounded-3xl border border-white/10 bg-black-200/40 p-8">
          <h2 className="text-3xl font-semibold text-white">Overview</h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-white-200">
            {course.overview.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>

        <aside className="flex flex-col gap-6">
          <div className="rounded-3xl border border-white/10 bg-black-200/40 p-6 text-white">
            <h3 className="text-lg font-semibold text-white">Key details</h3>
            <dl className="mt-4 space-y-3 text-sm text-white-200">
              <div className="flex flex-col">
                <dt className="text-xs uppercase tracking-[0.3em] text-white/60">
                  Fees
                </dt>
                <dd className="text-base font-semibold text-white">
                  {course.fees}
                </dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-xs uppercase tracking-[0.3em] text-white/60">
                  Delivery mode
                </dt>
                <dd>{course.deliveryMode}</dd>
              </div>
              <div className="flex flex-col">
                <dt className="text-xs uppercase tracking-[0.3em] text-white/60">
                  Learning cadence
                </dt>
                <dd>{course.duration}</dd>
              </div>
            </dl>
          </div>

          <div className="rounded-3xl border border-white/10 bg-black-200/40 p-6 text-white">
            <h3 className="text-lg font-semibold text-white">Ideal for</h3>
            <ul className="mt-4 space-y-3 text-sm text-white-200">
              {course.idealFor.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 size-1.5 flex-none rounded-full bg-purple" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-white/10 bg-black-200/40 p-6 text-white">
            <h3 className="text-lg font-semibold text-white">Tools you&apos;ll use</h3>
            <div className="mt-4 flex flex-wrap gap-2 text-sm text-white-200">
              {course.tools.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-white/20 px-3 py-1"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </aside>
      </section>

      <section
        id="technologies"
        className="rounded-3xl border border-white/10 bg-black-200/40 p-8 sm:p-10"
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold text-white">
              Technologies covered
            </h2>
            <p className="mt-3 text-base text-white-200">
              Learn the exact tools we use on client projects and production
              systems. Each module ends with a deployable outcome.
            </p>
          </div>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {course.technologies.map((group) => (
            <div
              key={group.title}
              className="rounded-3xl border border-white/10 bg-black-100/60 p-6"
            >
              <h3 className="text-lg font-semibold text-white">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2 text-sm text-white-200">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/15 px-3 py-1"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="weekly-structure"
        className="rounded-3xl border border-white/10 bg-black-200/40 p-8 sm:p-10"
      >
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-white">Weekly rhythm</h2>
            <p className="mt-3 text-base text-white-200">
              We balance daily micro-tasks with weekly product launches so you
              master consistency and delivery.
            </p>
          </div>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {course.weeklyStructure.map((item, index) => (
            <div
              key={item.title}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-black-100/60 p-6"
            >
              <span className="absolute right-6 top-6 text-5xl font-black text-white/5">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-semibold text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-white-200">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="outcomes"
        className="rounded-3xl border border-white/10 bg-black-200/40 p-8 sm:p-10"
      >
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold text-white">What you&apos;ll achieve</h2>
            <p className="mt-3 text-base text-white-200">
              Every learner graduates with a portfolio of launch-ready projects
              and the confidence to deploy production systems.
            </p>
          </div>
        </div>

        <ul className="mt-8 space-y-4 text-base text-white-200">
          {course.outcomes.map((outcome) => (
            <li key={outcome} className="flex items-start gap-3">
              <span className="mt-1 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full border border-white/20 text-xs font-semibold text-white">
                ✓
              </span>
              <span>{outcome}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-3xl border border-white/10 bg-black-200/40 p-8 sm:p-10">
        <h2 className="text-3xl font-semibold text-white">
          Why we are the best
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {whyUsPoints.map((point) => (
            <div
              key={point.title}
              className="flex gap-4 rounded-3xl border border-white/10 bg-black-100/60 p-6"
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
      </section>

      <section className="rounded-3xl border border-white/10 bg-gradient-to-br from-purple-500/30 via-black-100 to-blue-500/40 p-10 text-center">
        <div className="mx-auto max-w-3xl space-y-6 text-white">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Let&apos;s build your next chapter together.
          </h2>
          <p className="text-lg text-white/85">
            Apply today and start working on real client-style projects from day
            one. We&apos;ll help you deploy, document, and present every build.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/#contact">
              <MagicButton
                title="Book a call"
                position="right"
                icon={<FaLocationArrow />}
                asChild
              />
            </Link>
            <span className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white">
              Cohort fee: {course.fees}
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};


