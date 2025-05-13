import Image from "next/image";

import { Button } from "@/components/ui/moving-borders";
import { workExperience } from "@/data";

export const Experience = () => {
  return (
    <section id="experience" className="py-20 mt-20">
      <h1 className="heading">
        What <span className="text-purple">We Excel At</span>
      </h1>
      <p className=" mt-5 mb-4 text-center text-sm md:text-lg md:tracking-wider lg:text-l">
      We specialize in crafting robust digital solutions — from sleek websites
        and scalable mobile apps to enterprise-level software systems and DevOps
        pipelines
      </p>
      <div className="mt-12 grid w-full grid-cols-1 gap-10 lg:grid-cols-4">
        {workExperience.map((experience) => (
        <Button
        key={experience.id}
        borderRadius="1.75rem"
        className={`flex-1 border-neutral-200 text-white dark:border-slate-800 ${experience.className}`}
        duration={Math.floor(Math.random() * 10000 + 10000)}
      >
      
            <div className="flex flex-col gap-2 p-3 py-6 md:p-5 lg:flex-row lg:items-center lg:p-10">
              <Image
                width={95}
                height={87}
                src={experience.thumbnail}
                alt={experience.title}
                className="w-16 md:w-20 lg:w-32"
              />

              <div className="lg:ms-5">
                <h1 className="text-start text-xl font-bold md:text-2xl">
                  {experience.title}
                </h1>
                <p className="mt-3 text-start font-semibold text-white-100">
                  {experience.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </section>
  );
};
