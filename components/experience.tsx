import Image from "next/image";
import { Button } from "@/components/ui/moving-borders";
import { workExperience } from "@/data";

export const Experience = () => {
  // First get only the first 4 cards
  const firstFourCards = workExperience.slice(0, 4);

  return (
    <section id="experience" className="mt-20 py-20">
      <h1 className="heading">
        What <span className="text-purple">We Excel At</span>
      </h1>
      <p className="lg:text-l mb-4 mt-5 text-center text-sm md:text-lg md:tracking-wider">
        We specialize in crafting robust digital solutions — from sleek websites
        and scalable mobile apps to enterprise-level software systems and DevOps
        pipelines
      </p>

      {/* Grid for first 4 cards (2x2) */}
      <div className="mt-12 grid w-full grid-cols-1 gap-10 lg:grid-cols-4">
        {firstFourCards.map((experience) => (
          <Button
            key={experience.id}
            borderRadius="1.75rem"
            className={`flex-1 border-neutral-200 text-white dark:border-slate-800 md:col-span-2`}
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

      {/* Manual 5th card with full width */}
      <div className="mt-10 w-full">
        <Button
          borderRadius="1.75rem"
          className="col-span-1 h-72 w-full flex-1 border-neutral-200 text-white dark:border-slate-800 md:col-span-4"
          duration={Math.floor(Math.random() * 10000 + 10000)}
        >
          <div className="flex flex-col p-3 py-6 md:p-5 lg:flex-row lg:items-center">
            <Image
              width={170}
              height={190}
              src="/download.png"
              alt="Cybersecurity"
              // className="w-16 md:w-20 lg:w-32"
            />
            <div className="lg:ms-5">
              <h1 className="text-start text-xl font-bold md:text-2xl">
                Securing Tomorrow, Today.
              </h1>
              <p className="mt-3 text-start font-semibold text-white-100">
                At Townhall, cybersecurity is more than a role—its a mission.
                TOWNHALL is where our experts lead with cutting-edge services
                like penetration testing and incident response, supported by
                innovations in Zero Trust architecture and AI-driven threat
                detection. From global events like DEF CON to daily defense
                strategies, we are building a safer digital world through action,
                insight, and community.
              </p>
            </div>
          </div>
        </Button>
      </div>
    </section>
  );
};
