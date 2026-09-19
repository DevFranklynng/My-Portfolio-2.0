import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import SectionLabel from "../components/SectionLabel";
import { PrimaryButton, SecondaryButton, OutlineButton } from "../components/Buttons";
import {
  FacebookIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  WhatsAppIcon,
  XIcon,
} from "../components/SocialIcons";
import { FEATURED_PROJECTS, SKILLS_STRIP } from "../data/data";

const PROFILE_MASK =
  "linear-gradient(to bottom, #000 0%, #000 72%, rgba(0,0,0,0.95) 80%, rgba(0,0,0,0.65) 88%, rgba(0,0,0,0.2) 96%, transparent 100%)";

export default function Home() {
  return (
    <>
      <Seo
        title="Franklyn Uchenna Okoronkwo | Frontend Developer"
        description="Okoronkwo Franklyn Uchenna is a Frontend Developer and Computer Science student building modern, responsive and user-focused digital experiences."
      />

      {/* ================= HERO ================= */}
      <section className="hero relative min-h-[820px] pt-[145px] pb-[70px] flex items-center overflow-hidden max-[800px]:min-h-[760px] max-[800px]:pt-[120px] max-[500px]:pt-[115px]">
        <div
          className="hero-glow absolute w-[650px] h-[650px] top-[250px] left-1/2 -translate-x-1/2 pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(255,159,10,0.13), transparent 65%)" }}
        />

        <div className="container">
          <div className="hero-heading relative z-[2] text-center">
            <div className="availability inline-flex items-center gap-2 px-[15px] py-2 bg-[#181818] border border-[#303030] rounded-[30px] text-[#cccccc] text-xs">
              <span className="w-[7px] h-[7px] bg-orange rounded-full" />
              Available for opportunities
            </div>

            <h1 className="mt-[22px] font-grotesk text-[clamp(3.5rem,8vw,6rem)] leading-[0.95] tracking-[-5px] max-[800px]:tracking-[-3px] max-[500px]:text-[3.4rem]">
              I'm <span className="text-orange">Franklyn</span>
            </h1>

            <p className="mt-4 text-[#888888] text-[15px]">Global accredited Frontend Developer</p>
          </div>

          <div className="hero-main relative min-h-[410px] flex items-center justify-center mt-[10px] max-[800px]:flex-col max-[800px]:gap-[18px] max-[800px]:min-h-0">
            {/* LEFT SIDE */}
            <div className="hero-info left-info absolute w-[210px] left-5 bottom-[75px] z-[5] max-[800px]:static max-[800px]:w-auto max-[800px]:contents">
              <p className="small-title text-[10px] text-[#999999] tracking-[1px] max-[800px]:hidden">
                FOLLOW ME ON
              </p>

              <div className="socials flex items-center gap-3 mt-4 max-[800px]:justify-center max-[800px]:flex-wrap max-[800px]:mt-0">
                <a
                  href="https://www.linkedin.com/in/franklyn-okoronkwo-59427742b?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                  className="social linkedin w-[46px] h-[46px] flex items-center justify-center border-[1.5px] border-[rgba(255,255,255,0.85)] rounded-[35%] bg-[rgba(255,255,255,0.02)] transition duration-300 hover:-translate-y-1 hover:border-white hover:shadow-[0_8px_25px_rgba(0,0,0,0.35)] max-[500px]:w-10 max-[500px]:h-10"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon className="w-[30px] h-[21px] fill-[#0a66c2] max-[500px]:w-[26px] max-[500px]:h-[18px]" />
                </a>

                <a
                  href="https://github.com/Okoronkwo-Franklyn"
                  className="social github w-[46px] h-[46px] flex items-center justify-center border-[1.5px] border-[rgba(255,255,255,0.85)] rounded-[35%] bg-[rgba(255,255,255,0.02)] transition duration-300 hover:-translate-y-1 hover:border-white hover:shadow-[0_8px_25px_rgba(0,0,0,0.35)] max-[500px]:w-10 max-[500px]:h-10"
                  aria-label="GitHub"
                >
                  <GitHubIcon className="w-[30px] h-[21px] fill-white max-[500px]:w-[26px] max-[500px]:h-[18px]" />
                </a>

                <a
                  href="https://x.com/DevFranklynng"
                  className="social x-social w-[46px] h-[46px] flex items-center justify-center border-[1.5px] border-[rgba(255,255,255,0.85)] rounded-[35%] bg-[rgba(255,255,255,0.02)] transition duration-300 hover:-translate-y-1 hover:border-white hover:shadow-[0_8px_25px_rgba(0,0,0,0.35)] max-[500px]:w-10 max-[500px]:h-10"
                  aria-label="X"
                >
                  <XIcon className="w-[30px] h-[21px] fill-white max-[500px]:w-[26px] max-[500px]:h-[18px]" />
                </a>

                <a
                  href="https://www.instagram.com/devfranklynng?igsh=d3I5OTd1eG1vcTlo"
                  className="social instagram w-[46px] h-[46px] flex items-center justify-center border-[1.5px] border-[rgba(255,255,255,0.85)] rounded-[35%] bg-[rgba(255,255,255,0.02)] transition duration-300 hover:-translate-y-1 hover:border-white hover:shadow-[0_8px_25px_rgba(0,0,0,0.35)] max-[500px]:w-10 max-[500px]:h-10"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-[30px] h-[21px] max-[500px]:w-[26px] max-[500px]:h-[18px]" />
                </a>

                <a
                  href="https://www.facebook.com/devfrankio"
                  className="social facebook w-[46px] h-[46px] flex items-center justify-center border-[1.5px] border-[rgba(255,255,255,0.85)] rounded-[35%] bg-[rgba(255,255,255,0.02)] transition duration-300 hover:-translate-y-1 hover:border-white hover:shadow-[0_8px_25px_rgba(0,0,0,0.35)] max-[500px]:w-10 max-[500px]:h-10"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-[30px] h-[21px] fill-[#1877f2] max-[500px]:w-[26px] max-[500px]:h-[18px]" />
                </a>

                <a
                  href="https://wa.me/2347053862901?text=Hi%20Franklyn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social whatsapp w-[46px] h-[46px] flex items-center justify-center border-[1.5px] border-[rgba(255,255,255,0.85)] rounded-[35%] bg-[rgba(255,255,255,0.02)] transition duration-300 hover:-translate-y-1 hover:border-white hover:shadow-[0_8px_25px_rgba(0,0,0,0.35)] max-[500px]:w-10 max-[500px]:h-10"
                  aria-label="Whatsapp"
                >
                  <WhatsAppIcon className="w-[30px] h-[21px] fill-[#25d366] max-[500px]:w-[26px] max-[500px]:h-[18px]" />
                </a>
              </div>

              <div className="hero-stat flex flex-col mt-[35px] max-[800px]:hidden">
                <strong className="text-orange text-[17px]">Frontend</strong>
                <span className="text-[#777777] text-xs">Developer</span>
              </div>
            </div>

            {/* PROFILE IMAGE */}
            <div className="profile-wrapper relative w-[390px] z-[3] overflow-visible max-[800px]:w-[330px] max-[500px]:w-[300px]">
              <img
                src="/Assets/Hero-image.png"
                alt="Franklyn"
                className="profile-image relative block w-full z-[2] drop-shadow-[0_20px_35px_rgba(0,0,0,0.45)]"
                style={{ WebkitMaskImage: PROFILE_MASK, maskImage: PROFILE_MASK }}
              />
            </div>

            {/* RIGHT SIDE */}
            <div className="hero-info right-info absolute w-[210px] right-0 top-20 z-[5] max-[800px]:static max-[800px]:w-auto max-[800px]:hidden">
              <div className="quote text-orange text-[60px] leading-[0.7]">“</div>

              <p className="text-[#999999] text-xs leading-[1.6]">
                I create modern, responsive and
                user-focused digital experiences.
              </p>

              <div className="skill-tags flex flex-wrap gap-[6px] mt-[18px]">
                <span className="px-[10px] py-[7px] rounded-[20px] bg-[#222222] text-[#cccccc] text-[9px]">HTML</span>
                <span className="px-[10px] py-[7px] rounded-[20px] bg-[#222222] text-[#cccccc] text-[9px]">CSS</span>
                <span className="px-[10px] py-[7px] rounded-[20px] bg-[#222222] text-[#cccccc] text-[9px]">JavaScript</span>
                <span className="px-[10px] py-[7px] rounded-[20px] bg-[#222222] text-[#cccccc] text-[9px]">React</span>
              </div>
            </div>
          </div>

          {/* HERO BUTTONS */}
          <div className="hero-buttons relative z-[10] flex justify-center gap-[10px] mt-[-5px] max-[500px]:mt-[5px]">
            <PrimaryButton to="/projects">
              View Projects
              <ArrowRight size={16} strokeWidth={2.5} className="text-[#111111]" />
            </PrimaryButton>
            <SecondaryButton to="/contact">Hire Me</SecondaryButton>
          </div>
        </div>
      </section>

      {/* ================= SKILLS STRIP ================= */}
      <section className="skills-strip w-full overflow-hidden border-t border-b border-[#292929] py-[18px] bg-[#151515]">
        <div className="skills-track flex items-center gap-[35px] w-max animate-marquee">
          {[...SKILLS_STRIP, ...SKILLS_STRIP].map((skill, index) => (
            <span key={index} className="flex items-center gap-[35px]">
              <span className="font-grotesk text-[13px] font-semibold whitespace-nowrap text-[#dddddd]">{skill}</span>
              <b className="text-orange text-sm">✦</b>
            </span>
          ))}
        </div>
      </section>

      {/* ================= FEATURED PROJECTS ================= */}
      <section className="featured-projects py-[120px] bg-[#111111] border-b border-[#292929] max-[800px]:py-[85px]">
        <div className="container">
          <div className="section-heading flex items-end justify-between gap-[30px] mb-[45px] max-[800px]:flex-col max-[800px]:items-start">
            <div>
              <SectionLabel>Selected Work</SectionLabel>
              <h2 className="font-grotesk text-[clamp(2.5rem,5vw,4.2rem)] leading-[0.95] tracking-[-3px] max-[800px]:tracking-[-2px]">
                Things I've <span className="text-orange">Built</span>
              </h2>
            </div>
            <OutlineButton to="/projects">View All Projects</OutlineButton>
          </div>

          <div className="project-grid grid grid-cols-[1.35fr_1fr] gap-[18px] max-[800px]:grid-cols-1">
            {FEATURED_PROJECTS.map((project) => (
              <article
                key={project.name}
                className={`group project-card overflow-hidden bg-[#191919] border border-[#292929] rounded-[22px] transition duration-[350ms] hover:-translate-y-[6px] hover:border-[#444444] ${
                  project.large ? "row-span-2 max-[800px]:row-span-1" : ""
                }`}
              >
                <div className={`project-image relative w-full overflow-hidden bg-[#202020] ${project.large ? "h-[390px] max-[800px]:h-[280px]" : "h-[280px]"}`}>
                  <img
                    src={project.image}
                    alt={project.alt}
                    className="w-full h-full object-cover transition duration-500 group-hover:scale-[1.04]"
                  />
                  <div className="project-overlay absolute inset-0 flex items-end justify-end p-5 opacity-0 group-hover:opacity-100 transition duration-[350ms] bg-gradient-to-t from-[rgba(0,0,0,0.65)] to-transparent">
                    <Link
                      to="/projects"
                      className="px-4 py-[11px] bg-orange text-[#111111] rounded-[30px] text-[11px] font-bold inline-flex items-center gap-1"
                    >
                      View Project <ArrowUpRight size={12} strokeWidth={2.5} />
                    </Link>
                  </div>
                </div>

                <div className="project-info flex items-start justify-between gap-5 p-[22px] max-[500px]:p-[18px]">
                  <div>
                    <span className="project-category block mb-2 text-[#777777] text-[10px] uppercase tracking-[1px]">
                      {project.category}
                    </span>
                    <h3 className="font-grotesk text-[22px] font-semibold max-[500px]:text-[19px]">{project.name}</h3>
                    <p className="max-w-[450px] mt-2 text-[#777777] text-xs leading-[1.6] max-[500px]:text-[11px]">
                      {project.description}
                    </p>
                  </div>
                  <Link
                    to="/projects"
                    className="project-arrow shrink-0 w-[42px] h-[42px] grid place-items-center border border-[#383838] rounded-full text-white transition duration-300 hover:bg-orange hover:border-orange hover:text-[#111111] hover:rotate-45"
                    aria-label={`View ${project.name} project`}
                  >
                    <ArrowUpRight size={16} strokeWidth={2.5} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= ABOUT PREVIEW ================= */}
      <section className="about-preview relative py-[130px] overflow-hidden bg-[#151515] border-b border-[#292929] max-[850px]:py-[90px]">
        <div className="container">
          <div className="about-preview-grid grid grid-cols-[0.9fr_1.1fr] items-center gap-[100px] max-[850px]:grid-cols-1 max-[850px]:gap-[70px]">
            <div className="about-visual relative min-h-[480px] flex items-center justify-center max-[500px]:min-h-[400px]">
              <div className="about-orange-shape absolute w-[340px] h-[420px] bg-orange rounded-[180px_180px_20px_20px] -rotate-[8deg] opacity-95 max-[500px]:w-[270px] max-[500px]:h-[350px]" />

              <div className="about-image-frame relative w-[330px] h-[430px] overflow-hidden rounded-[170px_170px_20px_20px] bg-[#202020] z-[2] border border-[#333333] max-[500px]:w-[260px] max-[500px]:h-[360px]">
                <img src="/Assets/Hero-image.png" alt="Franklyn Okoronkwo" className="w-full h-full object-cover object-top" />
              </div>

              <div className="about-experience absolute right-0 bottom-[25px] z-[5] flex items-center gap-3 px-[18px] py-[14px] bg-[#202020] border border-[#383838] rounded-[15px] shadow-[0_15px_40px_rgba(0,0,0,0.35)] max-[500px]:right-[5px] max-[500px]:bottom-[10px]">
                <strong className="text-orange font-grotesk text-[30px]">01+</strong>
                <span className="text-[#999999] text-[9px] leading-[1.4]">
                  Years
                  <br />
                  Learning & Building
                </span>
              </div>
            </div>

            <div className="about-preview-content max-w-[560px] max-[850px]:max-w-full">
              <SectionLabel>About Me</SectionLabel>

              <h2 className="font-grotesk text-[clamp(2.7rem,5vw,4.5rem)] leading-[0.95] tracking-[-3px] mb-[30px] max-[500px]:tracking-[-2px]">
                Who is <span className="text-orange">Franklyn?</span>
              </h2>

              <p className="about-intro text-[#cccccc] text-[15px] leading-[1.7]">
                I'm Franklyn Okoronkwo, a Computer Science
                student and a Frontend Developer
                passionate about building modern digital
                experiences.
              </p>

              <p className="mt-4 text-[#858585] text-[13px] leading-[1.8]">
                I enjoy turning ideas into responsive,
                functional and visually appealing websites.
                I'm constantly learning, experimenting and
                improving my skills through real projects.
              </p>

              <div className="about-skills mt-[30px] mb-[30px] border-t border-[#2c2c2c]">
                <div className="about-skill flex items-center gap-5 py-[14px] border-b border-[#2c2c2c]">
                  <span className="text-orange text-[10px] font-semibold">01</span>
                  <p className="text-[#dddddd] text-xs">Frontend Development</p>
                </div>
                <div className="about-skill flex items-center gap-5 py-[14px] border-b border-[#2c2c2c]">
                  <span className="text-orange text-[10px] font-semibold">02</span>
                  <p className="text-[#dddddd] text-xs">Responsive Web Design</p>
                </div>
                <div className="about-skill flex items-center gap-5 py-[14px] border-b border-[#2c2c2c]">
                  <span className="text-orange text-[10px] font-semibold">03</span>
                  <p className="text-[#dddddd] text-xs">JavaScript & UI Development</p>
                </div>
              </div>

              <PrimaryButton to="/about">
                More About Me
                <ArrowRight size={16} strokeWidth={2.5} />
              </PrimaryButton>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="home-cta py-[100px] bg-[#111111] max-[700px]:py-[70px]">
        <div className="container">
          <div className="cta-box relative min-h-[360px] flex items-center justify-between overflow-hidden px-[70px] py-[65px] bg-[#202020] border border-[#303030] rounded-[28px] max-[700px]:min-h-[430px] max-[700px]:items-start max-[700px]:px-[30px] max-[700px]:py-[45px]">
            <div className="cta-content relative z-[3] max-w-[650px]">
              <SectionLabel>Have a project in mind?</SectionLabel>

              <h2 className="font-grotesk text-[clamp(2.7rem,6vw,5rem)] leading-[0.95] tracking-[-4px] mb-[22px] max-[700px]:tracking-[-2px]">
                Let's build something <span className="text-orange">great.</span>
              </h2>

              <p className="max-w-[480px] mb-7 text-[#888888] text-[13px] leading-[1.7]">
                Whether you have an idea, a project or an
                opportunity, I'd love to hear from you.
              </p>

              <PrimaryButton to="/contact">
                Let's Talk
                <ArrowRight size={16} strokeWidth={2.5} />
              </PrimaryButton>
            </div>

            <div className="cta-decoration absolute right-[-80px] top-1/2 -translate-y-1/2 w-[430px] h-[430px] pointer-events-none max-[700px]:w-[300px] max-[700px]:h-[300px] max-[700px]:right-[-100px] max-[700px]:bottom-[-100px] max-[700px]:top-auto max-[700px]:translate-y-0">
              <div className="cta-circle circle-one absolute w-[430px] h-[430px] top-0 left-0 border border-[rgba(255,159,10,0.3)] rounded-full max-[700px]:w-[300px] max-[700px]:h-[300px]" />
              <div className="cta-circle circle-two absolute w-[310px] h-[310px] top-[60px] left-[60px] border border-[rgba(255,159,10,0.3)] rounded-full max-[700px]:w-[210px] max-[700px]:h-[210px] max-[700px]:top-[45px] max-[700px]:left-[45px]" />
              <div className="cta-circle circle-three absolute w-[190px] h-[190px] top-[120px] left-[120px] border border-[rgba(255,159,10,0.3)] rounded-full bg-[rgba(255,159,10,0.08)] max-[700px]:w-[120px] max-[700px]:h-[120px] max-[700px]:top-[90px] max-[700px]:left-[90px]" />
              <span className="absolute top-[190px] left-[190px] -translate-x-1/2 -translate-y-1/2 text-orange text-[35px] max-[700px]:top-[150px] max-[700px]:left-[150px]">✦</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}