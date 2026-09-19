import { useState } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Seo from "../components/Seo";
import SectionLabel from "../components/SectionLabel";
import { ContactPrimaryButton } from "../components/Buttons";

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [buttonState, setButtonState] = useState("default");
  const [statusMessage, setStatusMessage] = useState("");
  const [statusColor, setStatusColor] = useState("#777777");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;

    setSending(true);
    setButtonState("sending");
    setStatusMessage("");

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatusMessage("Message sent successfully! I'll get back to you soon.");
        setStatusColor("#ff9f0a");
        setButtonState("sent");
        form.reset();

        setTimeout(() => {
          setSending(false);
          setButtonState("default");
        }, 4000);
      } else {
        throw new Error("Formspree rejected the submission");
      }
    } catch (error) {
      console.error(error);
      setStatusMessage("Something went wrong. Please try again.");
      setStatusColor("#ff5c5c");
      setSending(false);
      setButtonState("default");
    }
  };

  return (
    <>
      <Seo
        title="Contact — Franklyn"
        description="Get in touch with Franklyn for web development projects, collaborations and opportunities."
      />

      <section className="contact-section pt-[130px] pb-[120px] bg-[#111111] border-b border-[#292929] max-[600px]:pt-[90px] max-[600px]:pb-[80px]">
        <div className="container">
          <div className="contact-header max-w-[850px] mb-[80px] max-[600px]:mb-[60px]">
            <div className="flex items-center gap-[10px] text-[#777777] text-[10px] font-medium tracking-[1.5px] uppercase">
              <span className="w-[7px] h-[7px] bg-orange rounded-full shadow-[0_0_12px_rgba(255,159,10,0.6)]" />
              Get In Touch
            </div>

            <h1 className="my-[25px] font-grotesk text-[clamp(4rem,9vw,8rem)] font-semibold leading-[0.85] tracking-[-7px] max-[600px]:text-[clamp(3.5rem,17vw,5rem)] max-[600px]:tracking-[-4px] max-[380px]:text-[3.4rem]">
              Let's make <span className="text-orange">something.</span>
            </h1>

            <p className="max-w-[540px] text-[#777777] text-sm leading-[1.8]">
              Have an idea, project, collaboration or
              opportunity in mind? I'd love to hear about it.
            </p>
          </div>

          <div className="contact-grid grid grid-cols-[0.8fr_1.2fr] gap-[clamp(50px,8vw,110px)] items-start max-[950px]:grid-cols-1 max-[950px]:gap-[70px] max-[950px]:max-w-[650px] max-[600px]:gap-[55px]">
            <div className="contact-info">
              <div className="contact-intro mb-[45px]">
                <h2 className="mb-[15px] font-grotesk text-[28px] font-medium tracking-[-1px]">
                  Start a conversation.
                </h2>
                <p className="max-w-[390px] text-[#777777] text-xs leading-[1.8]">
                  Whether you're looking to build a
                  website, improve an existing interface,
                  or simply want to connect, feel free
                  to reach out.
                </p>
              </div>

              <a href="mailto:franklynokoronkwo104@gmail.com" className="contact-item group flex items-center gap-[15px] w-full py-5 border-t border-[#292929] transition duration-300 hover:pl-2">
                <div className="contact-icon w-[42px] h-[42px] grid place-items-center shrink-0 bg-[#1b1b1b] border border-[#303030] rounded-full text-orange text-[11px] font-semibold transition duration-300 group-hover:bg-orange group-hover:border-orange group-hover:text-[#111111]">
                  @
                </div>
                <div className="flex flex-col gap-1 min-w-0">
                  <span className="text-[#666666] text-[9px] tracking-[1px] uppercase">Email</span>
                  <strong className="text-[#d5d5d5] text-xs font-medium overflow-wrap-anywhere max-[380px]:text-[10px]">
                    franklynokoronkwo104@gmail.com
                  </strong>
                </div>
                <span className="contact-arrow ml-auto text-[#555555] transition duration-300 group-hover:text-orange group-hover:translate-x-[3px] group-hover:-translate-y-[3px]">
                  <ArrowUpRight size={18} strokeWidth={2} />
                </span>
              </a>

              <a
                href="https://github.com/Okoronkwo-Franklyn"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item group flex items-center gap-[15px] w-full py-5 border-t border-[#292929] transition duration-300 hover:pl-2"
              >
                <div className="contact-icon w-[42px] h-[42px] grid place-items-center shrink-0 bg-[#1b1b1b] border border-[#303030] rounded-full text-orange text-[11px] font-semibold transition duration-300 group-hover:bg-orange group-hover:border-orange group-hover:text-[#111111]">
                  GH
                </div>
                <div className="flex flex-col gap-1 min-w-0">
                  <span className="text-[#666666] text-[9px] tracking-[1px] uppercase">GitHub</span>
                  <strong className="text-[#d5d5d5] text-xs font-medium overflow-wrap-anywhere max-[380px]:text-[10px]">
                    https://github.com/Okoronkwo-Franklyn
                  </strong>
                </div>
                <span className="contact-arrow ml-auto text-[#555555] transition duration-300 group-hover:text-orange group-hover:translate-x-[3px] group-hover:-translate-y-[3px]">
                  <ArrowUpRight size={18} strokeWidth={2} />
                </span>
              </a>

              <div className="contact-item flex items-center gap-[15px] w-full py-5 border-t border-b border-[#292929]">
                <div className="contact-icon w-[42px] h-[42px] grid place-items-center shrink-0 bg-[#1b1b1b] border border-[#303030] rounded-full text-orange text-[11px] font-semibold">
                  +
                </div>
                <div className="flex flex-col gap-1 min-w-0">
                  <span className="text-[#666666] text-[9px] tracking-[1px] uppercase">Location</span>
                  <strong className="text-[#d5d5d5] text-xs font-medium overflow-wrap-anywhere max-[380px]:text-[10px]">
                    Nigeria
                  </strong>
                </div>
              </div>
            </div>

            <div className="contact-form-wrapper p-10 bg-[#181818] border border-[#2c2c2c] rounded-[24px] shadow-[0_30px_80px_rgba(0,0,0,0.25)] max-[950px]:max-w-[750px] max-[600px]:p-[22px] max-[600px]:rounded-[18px] max-[380px]:p-[18px]">
              <form
                className="contact-form flex flex-col gap-[25px] max-[600px]:gap-[22px]"
                id="contactForm"
                action="https://formspree.io/f/xkjwpqrb"
                method="POST"
                onSubmit={handleSubmit}
              >
                <div className="form-row grid grid-cols-2 gap-5 max-[600px]:grid-cols-1 max-[600px]:gap-[25px]">
                  <div className="form-group flex flex-col gap-[10px]">
                    <label htmlFor="name" className="text-[#999999] text-[10px] font-medium tracking-[1px] uppercase">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      required
                      className="w-full px-[17px] py-4 bg-[#111111] border border-[#303030] rounded-[10px] outline-none text-[#eeeeee] font-sans text-xs transition duration-300 placeholder:text-[#4d4d4d] focus:bg-[#141414] focus:border-orange focus:shadow-[0_0_0_3px_rgba(255,159,10,0.07)] h-[52px]"
                    />
                  </div>

                  <div className="form-group flex flex-col gap-[10px]">
                    <label htmlFor="email" className="text-[#999999] text-[10px] font-medium tracking-[1px] uppercase">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@example.com"
                      required
                      className="w-full px-[17px] py-4 bg-[#111111] border border-[#303030] rounded-[10px] outline-none text-[#eeeeee] font-sans text-xs transition duration-300 placeholder:text-[#4d4d4d] focus:bg-[#141414] focus:border-orange focus:shadow-[0_0_0_3px_rgba(255,159,10,0.07)] h-[52px]"
                    />
                  </div>
                </div>

                <div className="form-group flex flex-col gap-[10px]">
                  <label htmlFor="subject" className="text-[#999999] text-[10px] font-medium tracking-[1px] uppercase">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Let's work together"
                    required
                    className="w-full px-[17px] py-4 bg-[#111111] border border-[#303030] rounded-[10px] outline-none text-[#eeeeee] font-sans text-xs transition duration-300 placeholder:text-[#4d4d4d] focus:bg-[#141414] focus:border-orange focus:shadow-[0_0_0_3px_rgba(255,159,10,0.07)] h-[52px]"
                  />
                </div>

                <div className="form-group flex flex-col gap-[10px]">
                  <label htmlFor="message" className="text-[#999999] text-[10px] font-medium tracking-[1px] uppercase">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="7"
                    placeholder="Tell me a little about your project..."
                    required
                    className="w-full px-[17px] py-4 bg-[#111111] border border-[#303030] rounded-[10px] outline-none text-[#eeeeee] font-sans text-xs transition duration-300 placeholder:text-[#4d4d4d] focus:bg-[#141414] focus:border-orange focus:shadow-[0_0_0_3px_rgba(255,159,10,0.07)] min-h-[160px] resize-y leading-[1.6]"
                  />
                </div>

                <button
                  type="submit"
                  className="contact-submit w-full min-h-[56px] flex items-center justify-between px-5 bg-orange border border-orange rounded-[10px] text-[#111111] font-sans text-[11px] font-bold tracking-[0.5px] cursor-pointer transition duration-300 hover:-translate-y-[3px] hover:bg-[#ffab25] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:bg-orange"
                  disabled={sending}
                >
                  {buttonState === "sending" ? (
                    <>
                      Sending...
                      <span>...</span>
                    </>
                  ) : buttonState === "sent" ? (
                    <>
                      Message Sent ✓
                      <span>
                        <ArrowUpRight size={20} strokeWidth={2} />
                      </span>
                    </>
                  ) : (
                    <>
                      Send Message
                      <span>
                        <ArrowRight size={20} strokeWidth={2} />
                      </span>
                    </>
                  )}
                </button>

                <p className="form-status min-h-[15px] m-0 text-[10px] text-center" style={{ color: statusColor }}>
                  {statusMessage}
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-bottom py-[110px] bg-[#151515] max-[600px]:py-[80px]">
        <div className="container">
          <div className="contact-bottom-content flex flex-col items-start">
            <SectionLabel>Available for Opportunities</SectionLabel>

            <h2 className="max-w-[850px] my-[25px] mb-[35px] font-grotesk text-[clamp(3.5rem,8vw,7rem)] leading-[0.88] tracking-[-6px] max-[600px]:text-[clamp(3rem,15vw,5rem)] max-[600px]:tracking-[-4px]">
              Have an idea? <span className="text-orange">Let's talk.</span>
            </h2>

            <ContactPrimaryButton href="mailto:franklynokoronkwo104@gmail.com">
              Email Me
              <ArrowUpRight size={17} strokeWidth={2.5} />
            </ContactPrimaryButton>
          </div>
        </div>
      </section>
    </>
  );
}