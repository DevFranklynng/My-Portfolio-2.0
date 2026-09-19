import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Projects", to: "/projects" },
  { label: "About Me", to: "/about" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);
  const toggleRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    const updateNavbarState = () => setScrolled(window.scrollY > 40);
    updateNavbarState();
    window.addEventListener("scroll", updateNavbarState, { passive: true });
    return () => window.removeEventListener("scroll", updateNavbarState);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return undefined;

    const handleOutsideClick = (event) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target) &&
        toggleRef.current &&
        !toggleRef.current.contains(event.target)
      ) {
        setOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [open]);

  const toggleMenu = () => {
    const next = !open;
    setOpen(next);
    toggleRef.current?.setAttribute("aria-expanded", String(next));
  };

  return (
    <header className={`navbar fixed top-0 left-0 w-full z-[1000] py-[25px] transition-all duration-[350ms] ${scrolled ? "!py-[14px]" : ""}`}>
      <div
        className={`nav-container w-[min(1120px,90%)] mx-auto flex items-center justify-between px-3 py-[9px] border border-[#292929] rounded-[50px] transition-all duration-[350ms] ${
          scrolled
            ? "bg-[rgba(17,17,17,0.72)] border-[rgba(255,159,10,0.18)] shadow-[0_10px_30px_rgba(0,0,0,0.35)]"
            : "bg-[rgba(17,17,17,0.85)] backdrop-blur-[15px] shadow-[0_10px_30px_rgba(0,0,0,0)]"
        } max-[800px]:relative`}
      >
        <Link to="/" className="logo flex items-center gap-[9px] font-grotesk font-bold">
          <div className="logo-icon w-[35px] h-[35px] grid place-items-center rounded-full bg-orange text-[#111111] font-bold">
            F
          </div>
          <span>Franklyn.</span>
        </Link>

        <nav
          ref={navRef}
          className={`nav-links flex items-center gap-7 ${
            open
              ? "max-[800px]:opacity-100 max-[800px]:visible max-[800px]:pointer-events-auto max-[800px]:translate-y-0"
              : "max-[800px]:opacity-0 max-[800px]:invisible max-[800px]:pointer-events-none max-[800px]:translate-y-[-10px]"
          } max-[800px]:absolute max-[800px]:top-[calc(100%+15px)] max-[800px]:left-0 max-[800px]:right-0 max-[800px]:flex-col max-[800px]:gap-0 max-[800px]:p-[10px] max-[800px]:bg-[rgba(20,20,20,0.97)] max-[800px]:border max-[800px]:border-[#303030] max-[800px]:rounded-[18px] max-[800px]:backdrop-blur-[20px] max-[800px]:transition-opacity max-[800px]:transition-visibility max-[800px]:transition-transform max-[800px]:duration-300 max-[800px]:z-[1000]`}
        >
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `relative text-[13px] transition duration-300 hover:text-orange max-[800px]:w-full max-[800px]:px-[15px] max-[800px]:py-[15px] max-[800px]:rounded-[10px] max-[800px]:text-xs max-[800px]:hover:bg-[#242424] max-[800px]:hover:text-orange ${
                  isActive
                    ? "text-orange max-[800px]:bg-[rgba(255,159,10,0.12)] max-[800px]:hover:bg-[rgba(255,159,10,0.12)]"
                    : "text-[#999999]"
                }`
              }
            >
              {link.label}
              {isActivePath(link.to, pathname) ? (
                <span className="absolute left-1/2 bottom-[-8px] -translate-x-1/2 w-1 h-1 rounded-full bg-orange shadow-[0_0_8px_rgba(255,159,10,0.75)] max-[800px]:left-[15px] max-[800px]:bottom-auto max-[800px]:top-1/2 max-[800px]:translate-x-0 max-[800px]:-translate-y-1/2" />
              ) : null}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="talk-btn px-[18px] py-[10px] bg-white text-[#111111] rounded-[30px] text-[13px] font-semibold transition duration-300 hover:bg-orange max-[800px]:hidden"
        >
          Let's Talk
        </Link>

        <button
          type="button"
          ref={toggleRef}
          className={`menu-toggle hidden w-[42px] h-[42px] p-0 bg-transparent border border-[#303030] rounded-full cursor-pointer flex-col items-center justify-center gap-[5px] z-[1001] max-[800px]:flex ${
            open ? "max-[800px]:[&>span:first-child]:translate-y-[3px] max-[800px]:[&>span:first-child]:rotate-45 max-[800px]:[&>span:last-child]:translate-y-[-3px] max-[800px]:[&>span:last-child]:-rotate-45" : ""
          }`}
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          aria-expanded={open}
        >
          <span className="block w-[15px] h-px bg-[#eeeeee] transition duration-300" />
          <span className="block w-[15px] h-px bg-[#eeeeee] transition duration-300" />
        </button>
      </div>
    </header>
  );
}

function isActivePath(to, current) {
  if (to === "/") return current === "/";
  return current === to;
}