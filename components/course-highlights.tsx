import Link from "next/link";

import { CourseCard } from "@/components/courses/course-card";
import { MagicButton } from "@/components/ui/magic-button";
import { courses } from "@/data";

export const CourseHighlights = () => {
  const featuredCourses = courses.slice(0, 3);

  return (
    <section
      id="courses"
      className="w-full py-20"
    >
      <div className="rounded-[2.5rem] border border-white/10 bg-black-200/40 p-8 sm:p-12">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm uppercase tracking-[0.35em] text-white/60">
              Courses
            </p>
            <h2 className="mt-4 text-3xl font-bold text-white md:text-4xl">
              Hands-on courses crafted by industry mentors.
            </h2>
            <p className="mt-4 text-base text-white-200">
              Build production-ready projects every week, access live doubt solving,
              and get guided deployments across web, mobile, and DevOps stacks.
            </p>
          </div>

          <Link href="/courses" className="w-full max-w-xs lg:w-auto">
            <MagicButton
              title="Browse all courses"
              position="right"
            />
          </Link>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {featuredCourses.map((course) => (
            <CourseCard key={course.slug} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
};


