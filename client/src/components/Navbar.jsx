import { Menu, ShieldCheck, X } from "lucide-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { cn } from "../utils/cn.js";

const links = [
  { to: "/", label: "Home" },
  { to: "/url-scanner", label: "URL Scanner" },
  { to: "/message-scanner", label: "Message Scanner" },
  { to: "/about", label: "About" }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-shield-ink/70 shadow-glass backdrop-blur-2xl">
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <NavLink to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
          <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-shield-cyan/35 bg-shield-cyan/10 shadow-glow">
            <ShieldCheck className="h-5 w-5 text-shield-cyan" aria-hidden="true" />
          </span>
          <span className="text-lg font-bold tracking-wide text-white">ShieldScan</span>
        </NavLink>

        <div className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                cn(
                  "rounded-lg px-3 py-2 text-sm font-semibold text-slate-300 transition hover:bg-white/10 hover:text-white",
                  isActive && "bg-shield-cyan/10 text-shield-cyan shadow-[inset_0_0_0_1px_rgba(34,211,238,0.18)]"
                )
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-slate-200 md:hidden"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-shield-panel/95 px-4 py-3 backdrop-blur-2xl md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "rounded-lg px-3 py-3 text-sm font-semibold text-slate-300",
                    isActive && "bg-shield-cyan/10 text-shield-cyan"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
