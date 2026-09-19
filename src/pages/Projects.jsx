import { useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Seo from "../components/Seo";
import SectionLabel from "../components/SectionLabel";
import { PrimaryButton } from "../components/Buttons";
import { FILTERS, PROJECTS } from "../data/data";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");

  const visibleProjects =
    activeFilter === "all" ? PROJECTS : PROJECTS.filter((project) => project.filter === activeFilter);

  return (
    <>
      <Seo
        title="Projects — Franklyn"
        description="Projects by Franklyn — Frontend development and web projects."
      />

      {/* ================= PROJECTS HERO ================= */}
      <section className="projects-hero pt-[150px] pb-[100px] bg-[#111111] border-b border-[#292929] max-[750px]:pt-[110px] max-[750px]:pb-[75px]">
        <div className="container">
          <div className="flex items-center gap-[9px] mb-[25px] text-[#999999] text-[11px] uppercase tracking-[1px]">
            <span className="w-2 h-2 bg-orange rounded-full" />
            Selected Work
          </div>

          <h1 className="font-grotesk text-[clamp(4rem,9vw,8rem)] leading-[0.85] tracking-[-6px] max-[750px]:tracking-[-3px]">
            Things I've <span className="text-orange">Built.</span>
          </h1>

          <p className="max-w-[520px] mt-[35px] text-[#777777] text-sm leading-[1.8]">
            A collection of projects I've worked on while
            learning, experimenting and building my skills
            as a frontend developer.
          </p>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section className="projects-section pt-[80px] pb-[120px] bg-[#151515] max-[500px]:pt-[60px]">
        <div className="container">
          <div className="project-filters flex flex-wrap gap-2 mb-[45px] max-[500px]:gap-[6px]">
            {FILTERS.map((filter) => (
              <button
                key={filter.key}
                type="button"
                className={`px-[18px] py-[11px] border rounded-[30px] font-sans text-[11px] cursor-pointer transition duration-300 max-[500px]:px-[13px] max-[500px]:py-[9px] max-[500px]:text-[10px] ${
                  activeFilter === filter.key
                    ? "bg-orange border-orange text-[#111111]"
                    : "border-[#303030] bg-transparent text-[#777777] hover:bg-orange hover:border-orange hover:text-[#111111]"
                }`}
                onClick={() => setActiveFilter(filter.key)}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div className="projects-grid grid grid-cols-2 gap-[65px_22px] max-[750px]:grid-cols-1">
            {visibleProjects.map((project) => (
              <article
                key={project.id}
                className={`group project-item min-w-0 transition duration-300 ${
                  project.featured ? "col-span-2 max-[750px]:col-span-1" : ""
                }`}
              >
                <div
                  className={`project-preview relative overflow-hidden bg-[#202020] border border-[#2d2d2d] rounded-[22px] ${
                    project.featured
                      ? "h-[520px] max-[750px]:h-[300px] max-[500px]:h-[250px]"
                      : "h-[420px] max-[750px]:h-[300px] max-[500px]:h-[250px]"
                  } ${project.placeholder ? "flex items-center justify-center" : ""}`}
                >
                  {project.placeholder ? (
                    <div className="placeholder-content relative z-[2] text-center">
                      <span className="text-[#777777] text-[10px] uppercase tracking-[2px]">Coming Soon</span>
                      <h3 className="mt-[10px] text-orange font-grotesk text-[28px]">More Projects</h3>
                    </div>
                  ) : (
                    <img
                      src={project.image}
                      alt={project.alt}
                      className="w-full h-full object-cover transition duration-500 group-hover:scale-[1.04]"
                    />
                  )}

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.7)] to-transparent" />

                  <div className="project-number absolute top-5 left-5 z-[2] w-[42px] h-[42px] grid place-items-center border border-[rgba(255,255,255,0.2)] rounded-full bg-[rgba(15,15,15,0.7)] text-white text-[10px]">
                    {String(project.id).padStart(2, "0")}
                  </div>

                  {!project.placeholder && (
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="project-view absolute right-5 bottom-5 z-[3] px-[17px] py-3 rounded-[30px] bg-orange text-[#111111] text-[11px] font-semibold inline-flex items-center gap-1 opacity-0 translate-y-[10px] group-hover:opacity-100 group-hover:translate-y-0 transition duration-300"
                    >
                      View Project <ArrowUpRight size={12} strokeWidth={2.5} />
                    </a>
                  )}
                </div>

                <div className="project-details flex justify-between gap-[30px] pt-[22px] px-[5px] max-[750px]:flex-col max-[750px]:gap-[15px]">
                  <div>
                    <span className="block mb-[9px] text-[#777777] text-[9px] uppercase tracking-[1px]">
                      {project.tag}
                    </span>
                    <h2 className="font-grotesk text-[27px] font-medium">{project.name}</h2>
                  </div>

                  <p className="max-w-[360px] text-[#777777] text-[11px] leading-[1.7]">
                    {project.description}
                  </p>
                </div>

                {!project.placeholder && (
                  <div className="project-tech flex flex-wrap gap-[7px] mt-[17px]">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-[11px] py-[7px] bg-[#202020] border border-[#2c2c2c] rounded-[30px] text-[#888888] text-[9px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="projects-cta pb-[120px] bg-[#151515]">
        <div className="container">
          <div className="projects-cta-box min-h-[260px] flex items-center justify-between gap-[30px] px-[60px] py-[55px] bg-[#202020] border border-[#303030] rounded-[25px] max-[750px]:flex-col max-[750px]:items-start max-[750px]:px-[25px] max-[750px]:py-10">
            <div>
              <SectionLabel>Have a project in mind?</SectionLabel>
              <h2 className="max-w-[650px] mt-[12px] font-grotesk text-[clamp(2.3rem,5vw,4rem)] leading-[0.95] tracking-[-3px]">
                Let's create something <span className="text-orange">meaningful.</span>
              </h2>
            </div>

            <PrimaryButton to="/contact">
              Let's Talk
              <ArrowRight size={16} strokeWidth={2.5} />
            </PrimaryButton>
          </div>
        </div>
      </section>
    </>
  );
}