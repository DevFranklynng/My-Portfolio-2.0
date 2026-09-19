import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { FacebookIcon, GitHubIcon, LinkedInIcon, WhatsAppIcon, XIcon } from "./SocialIcons";

const HOME_SOCIALS = [
  {
    label: "X / Twitter",
    href: "https://x.com/FranklynOkoron2",
    ariaLabel: "X (Twitter)",
    Icon: XIcon,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/devfrankio",
    ariaLabel: "Facebook",
    Icon: FacebookIcon,
  },
  {
    label: "GitHub",
    href: "https://github.com/Okoronkwo-Franklyn",
    ariaLabel: "GitHub",
    Icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/franklyn-okoronkwo-59427742b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    ariaLabel: "LinkedIn",
    Icon: LinkedInIcon,
  },
  {
    label: "Whatsapp",
    href: "https://wa.me/2347053862901?text=Hi%20Franklyn",
    ariaLabel: "Whatsapp",
    Icon: WhatsAppIcon,
  },
];

const INNER_SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/Okoronkwo-Franklyn",
    ariaLabel: "GitHub",
    Icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/franklyn-okoronkwo-59427742b?utm_source=share_via&utm_content=profile&utm_medium=member_android",
    ariaLabel: "LinkedIn",
    Icon: LinkedInIcon,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/devfrankio",
    ariaLabel: "Facebook",
    Icon: FacebookIcon,
  },
  {
    label: "X / Twitter",
    href: "https://x.com/FranklynOkoron2",
    ariaLabel: "X (Twitter)",
    Icon: XIcon,
  },
  {
    label: "Whatsapp",
    href: "https://wa.me/2347053862901?text=Hi%20Franklyn",
    ariaLabel: "Whatsapp",
    Icon: WhatsAppIcon,
  },
];

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "About Me", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Footer({ variant = "inner", contactLabel, contactHref }) {
  const socials = variant === "home" ? HOME_SOCIALS : INNER_SOCIALS;

  return (
    <footer
      className={`footer bg-[#0d0d0d] pb-[25px] ${
        variant === "contact" ? "pt-[70px]" : "pt-[75px]"
      } border-t border-[#292929]`}
    >
      <div className="container">
        <div className="footer-main grid grid-cols-[1.5fr_1fr_1fr_1.2fr] gap-[50px] pb-[60px] border-b border-[#292929] max-[800px]:grid-cols-2 max-[800px]:gap-[45px_30px] max-[500px]:gap-[40px_20px] max-[800px]:max-w-none">
          <div className="footer-brand max-w-[300px] max-[800px]:col-span-2 max-[800px]:max-w-[400px]">
            <Link to="/" className="logo inline-flex items-center gap-[9px] font-grotesk font-bold">
              <div className="logo-icon w-[35px] h-[35px] grid place-items-center rounded-full bg-orange text-[#111111] font-bold">
                F
              </div>
              <span>Franklyn.</span>
            </Link>
            <p className="mt-5 text-[#707070] text-xs leading-[1.7]">
              Frontend developer focused on building
              modern and meaningful digital experiences.
            </p>
          </div>

          <div className="footer-column flex flex-col items-start gap-3">
            <h4 className="mb-2 text-white font-grotesk text-[13px] font-semibold">Navigation</h4>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="inline-flex items-center gap-[9px] text-[#777777] text-xs transition duration-300 hover:text-orange hover:translate-x-[3px]"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="footer-column flex flex-col items-start gap-3">
            <h4 className="mb-2 text-white font-grotesk text-[13px] font-semibold">Connect</h4>
            {socials.map(({ label, href, ariaLabel, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={ariaLabel}
                className="inline-flex items-center gap-[9px] text-[#777777] text-xs transition duration-300 hover:text-orange hover:translate-x-[3px]"
              >
                <Icon className="w-[15px] h-[15px] fill-current shrink-0" />
                {label}
              </a>
            ))}
          </div>

          <div className="footer-column flex flex-col items-start gap-3">
            <h4 className="mb-2 text-white font-grotesk text-[13px] font-semibold">Let's Talk</h4>
            {contactHref ? (
              <a
                href={contactHref}
                className="footer-contact inline-flex items-center gap-2 text-orange text-xs transition duration-300 hover:translate-x-[3px]"
              >
                {contactLabel}
                <span className="text-[15px]">
                  <ArrowUpRight size={15} strokeWidth={2.5} />
                </span>
              </a>
            ) : (
              <Link
                to="/contact"
                className="footer-contact inline-flex items-center gap-2 text-orange text-xs transition duration-300 hover:translate-x-[3px]"
              >
                {contactLabel}
                <span className="text-[15px]">
                  <ArrowUpRight size={15} strokeWidth={2.5} />
                </span>
              </Link>
            )}
            <p className="footer-location mt-2 text-[#555555] text-[11px]">Nigeria 🇳🇬</p>
          </div>
        </div>

        <div className="footer-bottom flex items-center justify-between gap-5 pt-[25px] max-[500px]:flex-col max-[500px]:items-start max-[500px]:gap-2">
          <p className="text-[#555555] text-[10px]">© 2026 Franklyn. All rights reserved.</p>
          <p className="text-[#555555] text-[10px]">Designed & Built by Franklyn</p>
        </div>
      </div>
    </footer>
  );
}