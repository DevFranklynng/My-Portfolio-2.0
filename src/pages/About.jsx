import { ArrowRight } from "lucide-react";
import Seo from "../components/Seo";
import SectionLabel from "../components/SectionLabel";
import { PrimaryButton, SecondaryButton } from "../components/Buttons";

const SKILLS = [
  { number: "01", title: "HTML", description: "Semantic and structured web pages." },
  { number: "02", title: "CSS", description: "Responsive layouts and modern interfaces." },
  { number: "03", title: "JavaScript", description: "Interactive and dynamic web experiences." },
  { number: "04", title: "Git & GitHub", description: "Version control and collaborative development." },
  { number: "05", title: "Tailwind CSS", description: "Building interfaces efficiently with utility classes." },
  { number: "06", title: "React", description: "Currently learning component-based development." },
];

const JOURNEY = [
  { number: "01", title: "Discovering Web Development", description: "Learning the foundations of how websites are structured and styled." },
  { number: "02", title: "Building With JavaScript", description: "Moving beyond static pages and learning how to create interactive experiences." },
  { number: "03", title: "Working on Real Projects", description: "Applying what I learn to projects such as CampusNest and LUXORA." },
  { number: "04", title: "Becoming a Better Developer", description: "Continuing to learn, experiment and improve with every project I build." },
];

export default function About() {
  return (
    <>
      <Seo
        title="About Me — Franklyn"
        description="Learn more about Franklyn Okoronkwo, a Computer Science student and aspiring Frontend Developer."
      />

      {/* ================= ABOUT HERO ================= */}
      <section className="about-hero pt-[130px] pb-[120px] bg-[#111111] border-b border-[#292929] max-[600px]:pt-[90px] max-[600px]:pb-[80px]">
        <div className="container">
          <div className="about-hero-grid grid grid-cols-[minmax(360px,0.9fr)_minmax(450px,1.1fr)] items-center gap-[clamp(60px,8vw,120px)] max-[950px]:grid-cols-1 max-[950px]:gap-[90px]">
            <div className="about-main-image relative w-[min(100%,500px)] h-[590px] mx-auto max-[600px]:w-[calc(100%-15px)] max-[600px]:h-[440px] max-[380px]:h-[390px]">
              <div
                className="absolute top-[24px] left-[24px] w-full h-full border border-[rgba(255,159,10,0.55)] rounded-[28px] -rotate-3 bg-orange transition duration-500 max-[600px]:top-[15px] max-[600px]:left-[15px] max-[380px]:top-[10px] max-[380px]:left-[10px]"
                style={{ transform: "rotate(-3deg)" }}
              />
              <div className="absolute inset-[10%] bg-orange opacity-8 blur-[75px] rounded-full z-0" />

              <img
                src="/Assets/Hero-image.png"
                alt="Franklyn Okoronkwo"
                className="absolute inset-0 z-[2] w-full h-full object-cover object-top bg-[#181818] border border-[#363636] rounded-[28px] shadow-[0_30px_80px_rgba(0,0,0,0.45)] transition duration-500"
              />

              <div className="image-caption absolute z-[6] left-[25px] right-[25px] bottom-[25px] flex items-center justify-between px-[19px] py-[17px] bg-[rgba(15,15,15,0.82)] border border-[rgba(255,255,255,0.1)] rounded-[17px] backdrop-blur-[14px] shadow-[0_15px_40px_rgba(0,0,0,0.35)] max-[600px]:left-[15px] max-[600px]:right-[15px] max-[600px]:bottom-[15px] max-[600px]:p-[14px] max-[380px]:p-3">
                <span className="text-gray-400 text-[10px]">01</span>
                <p className="text-[#dddddd] text-[10px] leading-[1.5] max-[380px]:text-[9px]">
                  Always learning.
                  <br />
                  Always building.
                </p>
              </div>
            </div>

            <div className="about-hero-content max-[950px]:max-w-[700px]">
              <SectionLabel>About Me</SectionLabel>

              <h1 className="mt-5 mb-[15px] font-grotesk text-[clamp(4rem,8vw,7rem)] leading-[0.85] tracking-[-6px] max-[600px]:text-[clamp(3.5rem,17vw,5rem)] max-[600px]:tracking-[-4px]">
                I'm <span className="text-orange">Franklyn.</span>
              </h1>

              <h2 className="max-w-[600px] text-[#777777] text-[17px] font-normal leading-[1.5]">
                Computer Science Student
                <br />
                & Aspiring Frontend Developer.
              </h2>

              <p className="max-w-[520px] my-7 text-[#aaaaaa] text-sm leading-[1.8]">
                I'm passionate about turning ideas into
                modern, responsive and functional digital
                experiences.
              </p>

              <div className="about-actions flex items-center gap-3 max-[600px]:flex-wrap">
                <PrimaryButton to="/projects">
                  Explore My Work
                  <ArrowRight size={16} strokeWidth={2.5} />
                </PrimaryButton>
                <SecondaryButton to="/contact">Let's Talk</SecondaryButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MY STORY ================= */}
      <section className="my-story py-[120px] bg-[#151515] border-b border-[#292929] max-[600px]:py-[85px]">
        <div className="container">
          <div className="story-grid grid grid-cols-[0.8fr_1.2fr] gap-[100px] max-[950px]:grid-cols-1 max-[950px]:gap-[60px]">
            <div className="story-heading">
              <SectionLabel>My Story</SectionLabel>
              <h2 className="mt-5 font-grotesk text-[clamp(3rem,6vw,5rem)] leading-[0.9] tracking-[-4px] max-[600px]:tracking-[-3px]">
                Still <span className="text-orange">learning.</span>
                <br />
                Still <span className="text-orange">building.</span>
              </h2>
            </div>

            <div className="story-content max-w-[650px]">
              <p className="story-lead text-[#d0d0d0] text-[17px] leading-[1.7]">
                I'm currently studying Computer Science
                at Michael Okpara University of Agriculture
                while developing my skills in frontend
                web development.
              </p>

              <p className="mt-[22px] text-[#777777] text-[13px] leading-[1.9]">
                My journey into web development has been
                driven by curiosity and the desire to
                understand how the websites and digital
                products I use every day are built.
              </p>

              <p className="mt-[22px] text-[#777777] text-[13px] leading-[1.9]">
                I started with the fundamentals of HTML
                and CSS, then progressed into JavaScript
                and modern frontend development. Along
                the way, I've worked on personal projects,
                class assignments and real-world ideas
                that have helped me understand how to
                turn concepts into working interfaces.
              </p>

              <p className="mt-[22px] text-[#777777] text-[13px] leading-[1.9]">
                I'm still learning, and that's something
                I value. Every project gives me an
                opportunity to improve my code, design
                better interfaces and become a better
                developer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}
      <section className="about-skills-section py-[120px] bg-[#111111] max-[600px]:py-[85px]">
        <div className="container">
          <div className="about-section-header flex items-end justify-between gap-10 mb-[50px] max-[950px]:flex-col max-[950px]:items-start">
            <div>
              <SectionLabel>My Toolkit</SectionLabel>
              <h2 className="mt-[15px] font-grotesk text-[clamp(3rem,6vw,5rem)] leading-[0.9] tracking-[-4px] max-[600px]:tracking-[-3px]">
                Skills I'm <span className="text-orange">building.</span>
              </h2>
            </div>
            <p className="max-w-[300px] text-[#777777] text-xs leading-[1.7]">
              Technologies and tools I currently use
              while growing as a frontend developer.
            </p>
          </div>

          <div className="about-skills-grid grid grid-cols-3 gap-3 max-[950px]:grid-cols-2 max-[600px]:grid-cols-1">
            {SKILLS.map((skill) => (
              <div
                key={skill.number}
                className="about-skill-card min-h-[190px] p-[25px] bg-[#1a1a1a] border border-[#292929] rounded-[18px] transition duration-300 hover:-translate-y-[5px] hover:bg-[#1d1d1d] hover:border-orange"
              >
                <span className="text-orange text-[10px]">{skill.number}</span>
                <h3 className="mt-[35px] mb-[10px] font-grotesk text-[22px]">{skill.title}</h3>
                <p className="text-[#707070] text-[11px] leading-[1.6]">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= JOURNEY ================= */}
      <section className="journey-section py-[120px] bg-[#151515] border-b border-[#292929] max-[600px]:py-[85px]">
        <div className="container">
          <SectionLabel>My Journey</SectionLabel>

          <h2 className="journey-title max-w-[800px] mt-[25px] mb-[60px] font-grotesk text-[clamp(3rem,7vw,6rem)] leading-[0.9] tracking-[-5px] max-[600px]:tracking-[-3px]">
            From <span className="text-orange">curiosity</span> to <span className="text-orange">creation.</span>
          </h2>

          <div className="journey-list border-t border-[#303030]">
            {JOURNEY.map((item) => (
              <div
                key={item.number}
                className="journey-item grid grid-cols-[100px_1fr] gap-[30px] py-[30px] border-b border-[#303030] max-[600px]:grid-cols-[45px_1fr] max-[600px]:gap-[15px]"
              >
                <span className="journey-number text-orange text-[11px]">{item.number}</span>
                <div>
                  <h3 className="mb-2 font-grotesk text-[21px] font-medium">{item.title}</h3>
                  <p className="max-w-[550px] text-[#777777] text-xs leading-[1.7]">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="about-cta py-[100px] bg-[#111111] max-[600px]:py-[80px]">
        <div className="container">
          <div className="about-cta-box min-h-[260px] flex items-center justify-between gap-[30px] px-[60px] py-[50px] bg-[#202020] border border-[#303030] rounded-[25px] max-[600px]:flex-col max-[600px]:items-start max-[600px]:px-[25px] max-[600px]:py-10">
            <div>
              <SectionLabel>What's Next?</SectionLabel>
              <h2 className="max-w-[650px] mt-[12px] font-grotesk text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] tracking-[-4px]">
                Let's build the <span className="text-orange">next thing.</span>
              </h2>
            </div>

            <PrimaryButton to="/contact">
              Get In Touch
              <ArrowRight size={16} strokeWidth={2.5} />
            </PrimaryButton>
          </div>
        </div>
      </section>
    </>
  );
}