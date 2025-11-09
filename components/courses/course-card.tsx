import Image from "next/image";
import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

import type { CourseData } from "@/data/courses";

type CourseCardProps = {
  course: CourseData;
};

export const CourseCard = ({ course }: CourseCardProps) => {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/10 bg-black-200/40 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-white/30"
    >
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={course.heroImage}
          alt={course.heroImageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
          priority={false}
        />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/70 to-transparent" />
        <span className="absolute left-6 bottom-6 rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-white backdrop-blur">
          {course.tagline}
        </span>
      </div>

      <div className="flex flex-1 flex-col gap-6 p-6">
        <div>
          <h3 className="text-2xl font-semibold text-white">{course.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-white-200">
            {course.shortDescription}
          </p>
        </div>

        <ul className="space-y-3 text-sm text-white-100">
          {course.heroHighlights.slice(0, 3).map((highlight) => (
            <li
              key={highlight}
              className="flex items-start gap-2 leading-snug text-white"
            >
              <span className="mt-1 size-1.5 flex-none rounded-full bg-purple" />
              <span className="text-white-200">{highlight}</span>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center justify-between text-sm">
          <span className="rounded-full bg-white/10 px-4 py-1 font-semibold text-white">
            {course.fees}
          </span>
          <span className="flex items-center gap-2 text-purple transition group-hover:gap-3">
            View course
            <FaLocationArrow className="transition duration-300 group-hover:translate-x-1" />
          </span>
        </div>
      </div>

      <div
        className={`pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br ${course.accentColor} opacity-0 transition duration-500 group-hover:opacity-80`}
      />
    </Link>
  );
};


