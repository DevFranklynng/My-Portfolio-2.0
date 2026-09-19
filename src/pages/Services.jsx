import { useState } from "react";
import { ArrowRight, Plus, X } from "lucide-react";
import Seo from "../components/Seo";
import SectionLabel from "../components/SectionLabel";
import { PrimaryButton } from "../components/Buttons";
import { SERVICES } from "../data/data";

export default function Services() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (index) => {
    setOpenIndex((current) => (current === index ? -1 : index));
  };

  return (
    <>
      <Seo
        title="Services — Franklyn"
        description="Services offered by Franklyn — Frontend Development, Web Design and more."
      />

      {/* ================= SERVICES HERO ================= */}
      <section className="services-hero pt-[150px] pb-[100px] bg-[#111111] border-b border-[#292929] max-[700px]:pt-[110px] max-[700px]:pb-[75px]">
        <div className="container">
          <div className="flex items-center gap-[9px] mb-[25px] text-[#999999] text-[11px] uppercase tracking-[1px]">
            <span className="w-2 h-2 bg-orange rounded-full" />
            What I Do
          </div>

          <h1 className="max-w-[900px] font-grotesk text-[clamp(3.5rem,8vw,7rem)] leading-[0.88] tracking-[-6px] max-[700px]:tracking-[-3px]">
            How I Bring
            <br />
            Ideas to <span className="text-orange">Life.</span>
          </h1>

          <p className="max-w-[500px] mt-[35px] text-[#777777] text-sm leading-[1.8]">
            I create modern, responsive and functional
            websites by combining clean code with thoughtful
            design.
          </p>
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="services-section pt-[100px] pb-[120px] bg-[#151515]">
        <div className="container">
          <div className="services-intro flex items-end justify-between mb-[35px] max-[700px]:flex-col max-[700px]:items-start max-[700px]:gap-5">
            <SectionLabel>My Services</SectionLabel>
            <p className="max-w-[300px] text-[#666666] text-xs leading-[1.7]">
              Here's how I can help bring your next
              digital idea to the web.
            </p>
          </div>

          <div className="services-list flex flex-col gap-[10px]">
            {SERVICES.map((service, index) => {
              const active = openIndex === index;

              return (
                <article
                  key={service.title}
                  className={`service-card overflow-hidden rounded-[18px] transition-all duration-300 hover:-translate-y-[2px] ${
                    active ? "bg-orange text-[#111111]" : "bg-[#202020]"
                  }`}
                >
                  <div className="service-top min-h-[90px] grid grid-cols-[90px_1fr_50px] items-center gap-5 px-[25px] max-[700px]:grid-cols-[40px_1fr_40px] max-[700px]:gap-[10px] max-[700px]:px-4 max-[700px]:min-h-0 max-[700px]:py-5">
                    <span
                      className={`service-number text-[11px] font-semibold ${
                        active ? "text-[rgba(17,17,17,0.55)]" : "text-[#666666]"
                      }`}
                    >
                      {service.number}
                    </span>

                    <div className="service-title">
                      <h2 className="font-grotesk text-[22px] font-medium mb-[5px] max-[700px]:text-base">
                        {service.title}
                      </h2>
                      <span
                        className={`text-[10px] uppercase tracking-[0.8px] max-[700px]:text-[8px] ${
                          active ? "text-[rgba(17,17,17,0.6)]" : "text-[#666666]"
                        }`}
                      >
                        {service.subtitle}
                      </span>
                    </div>

                    <button
                      type="button"
                      className={`service-toggle w-[38px] h-[38px] grid place-items-center border-none rounded-full transition duration-300 cursor-pointer ${
                        active ? "bg-[#111111] text-white" : "bg-orange text-[#111111]"
                      }`}
                      onClick={() => toggle(index)}
                      aria-label={`Toggle ${service.title}`}
                      aria-expanded={active}
                    >
                      {active ? <X size={20} strokeWidth={2.5} /> : <Plus size={20} strokeWidth={2.5} />}
                    </button>
                  </div>

                  <div
                    className={`service-content overflow-hidden pr-[25px] pl-[135px] transition-all duration-[450ms] max-[700px]:pl-[66px] max-[700px]:pr-[18px] ${
                      active ? "max-h-[200px] pb-[30px]" : "max-h-0"
                    }`}
                  >
                    <div className="service-tags flex flex-wrap gap-[7px] mb-[17px]">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className={`px-[11px] py-[7px] rounded-[30px] text-[9px] ${
                            active ? "bg-[rgba(17,17,17,0.12)] text-[#111111]" : "bg-[#292929] text-[#bbbbbb]"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <p
                      className={`max-w-[650px] text-xs leading-[1.7] ${
                        active ? "text-[rgba(17,17,17,0.7)]" : "text-[#777777]"
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="services-cta pb-[120px] bg-[#151515]">
        <div className="container">
          <div className="services-cta-box min-h-[250px] flex items-center justify-between gap-[30px] px-[60px] py-[50px] bg-[#202020] border border-[#303030] rounded-[25px] max-[700px]:flex-col max-[700px]:items-start max-[700px]:px-[25px] max-[700px]:py-10">
            <div>
              <SectionLabel>Let's Work Together</SectionLabel>
              <h2 className="max-w-[650px] mt-[10px] font-grotesk text-[clamp(2.2rem,5vw,4rem)] leading-[0.95] tracking-[-3px] max-[700px]:tracking-[-2px]">
                Have an idea? <span className="text-orange">Let's build it.</span>
              </h2>
            </div>

            <PrimaryButton to="/contact">
              Start a Project
              <ArrowRight size={16} strokeWidth={2.5} />
            </PrimaryButton>
          </div>
        </div>
      </section>
    </>
  );
}