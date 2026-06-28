import { Github, Mail, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

const links = [

  { label: "About", href: "/about" },
  { label: "Privacy Policy", href: "/privacy" },
  {
    label: "Contact",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=YOUR_EMAIL@gmail.com",
    external: true,
    icon: Mail
  }

];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-shield-ink/80 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 text-sm text-slate-400 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <div className="mb-4 flex items-center gap-3 font-bold text-white">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-shield-cyan/35 bg-shield-cyan/10 shadow-glow">
              <ShieldCheck className="h-5 w-5 text-shield-cyan" aria-hidden="true" />
            </span>
            ShieldScan
          </div>
          <p className="max-w-xl leading-6">
            AI powered phishing link and suspicious message detection for safer digital decisions.
          </p>
        </div>
        <div className="flex flex-col gap-5 lg:items-end">
          <div className="flex flex-wrap gap-3">
            {links.map((link) => {
              const Icon = link.icon;
              const className =
                "inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-2 font-semibold text-slate-300 transition hover:border-shield-cyan/40 hover:text-shield-cyan";

              if (link.external) {
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={className}
                  >
                    {Icon && <Icon className="h-4 w-4" aria-hidden="true" />}
                    {link.label}
                  </a>
                );
              }

              return (
                <Link key={link.label} to={link.href} className={className}>
                  {link.label}
                </Link>
              );
            })}
          </div>
          <p>&copy; {new Date().getFullYear()} ShieldScan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
