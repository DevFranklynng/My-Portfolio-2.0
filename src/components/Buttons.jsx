import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export function PrimaryButton({ children, to, href, className = "" }) {
  const classes = `inline-flex items-center gap-2 px-[23px] py-[13px] rounded-[30px] text-[13px] font-semibold bg-orange text-[#111111] transition duration-300 hover:bg-orange-light hover:-translate-y-[2px] ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
}

export function SecondaryButton({ to, children }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 px-[23px] py-[13px] rounded-[30px] text-[13px] font-semibold border border-[#444444] bg-[#151515] text-white transition duration-300 hover:border-orange"
    >
      {children}
    </Link>
  );
}

export function OutlineButton({ children, to }) {
  return (
    <Link
      to={to}
      className="group inline-flex items-center gap-[14px] pl-[18px] pr-2 py-2 border border-[#353535] rounded-[30px] text-[#dddddd] text-xs font-medium whitespace-nowrap transition duration-300 hover:border-orange"
    >
      {children}
      <span className="w-8 h-8 grid place-items-center rounded-full bg-orange text-[#111111] text-base transition duration-300 group-hover:rotate-45">
        <ArrowRight size={16} strokeWidth={2.5} />
      </span>
    </Link>
  );
}

export function ContactPrimaryButton({ children, to, href }) {
  const classes = `inline-flex items-center gap-[25px] px-5 py-4 rounded-lg bg-orange border border-orange text-[#111111] text-[10px] font-bold transition duration-300 hover:-translate-y-[3px] ${""}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
}

export function ArrowIcon({ variant = "right" }) {
  if (variant === "up-right") {
    return <ArrowUpRight size={16} strokeWidth={2.5} />;
  }
  return <ArrowRight size={16} strokeWidth={2.5} />;
}