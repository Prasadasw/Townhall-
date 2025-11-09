import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CourseLanding } from "@/components/courses/course-landing";
import { CourseCard } from "@/components/courses/course-card";
import { FloatingNav } from "@/components/ui/floating-nav";
import { courses, navItems } from "@/data";

type CoursePageProps = {
  params: {
    slug: string;
  };
};

export const generateStaticParams = () =>
  courses.map((course) => ({
    slug: course.slug,
  }));

export const generateMetadata = ({ params }: CoursePageProps): Metadata => {
  const course = courses.find((item) => item.slug === params.slug);

  if (!course) {
    return {
      title: "Course not found | Townhall",
    };
  }

  return {
    title: `${course.title} | Townhall Courses`,
    description: course.metaDescription,
  };
};

const CoursePage = ({ params }: CoursePageProps) => {
  const course = courses.find((item) => item.slug === params.slug);

  if (!course) {
    notFound();
  }

  const relatedCourses = courses.filter((item) => item.slug !== course.slug);

  return (
    <main className="relative mx-auto flex min-h-screen flex-col items-center justify-center overflow-clip bg-black-100 px-5 pb-20 pt-32 sm:px-10">
      <FloatingNav navItems={navItems} />

      <div className="w-full max-w-7xl">
        <CourseLanding course={course} />

        {relatedCourses.length > 0 && (
          <section className="mt-20 rounded-3xl border border-white/10 bg-black-200/40 p-8 sm:p-12">
            <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-white/60">
                  Explore more
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-white">
                  More courses you might like
                </h2>
              </div>
            </div>
            <div className="mt-10 grid gap-8 lg:grid-cols-2">
              {relatedCourses.slice(0, 2).map((item) => (
                <CourseCard key={item.slug} course={item} />
              ))}
            </div>
          </section>
        )}
      </div>
    </main>
  );
};

export default CoursePage;


