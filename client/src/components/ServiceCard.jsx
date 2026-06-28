import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import GlassCard from "./GlassCard.jsx";

export default function ServiceCard({
  icon: Icon,
  title,
  text,
  delay,
  link
}) {
  return (
    <GlassCard delay={delay} className="min-h-56">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg border border-shield-cyan/30 bg-shield-cyan/10 transition group-hover:scale-105">
        <Icon className="h-6 w-6 text-shield-cyan" />
      </div>

      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-semibold text-white">
          {title}
        </h3>

        <ArrowUpRight className="h-5 w-5 shrink-0 text-slate-500 transition group-hover:text-shield-cyan" />
      </div>

      <p className="mt-3 text-sm leading-6 text-slate-400">
        {text}
      </p>

      <div className="mt-6">
        {link ? (
          <Link
            to={link}
            className="inline-flex items-center gap-2 text-sm font-semibold text-shield-cyan transition hover:translate-x-1"
          >
            Open
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        ) : (
          <span className="inline-flex rounded-full border border-yellow-500/30 bg-yellow-500/10 px-3 py-1 text-xs font-semibold text-yellow-400">
            Coming Soon
          </span>
        )}
      </div>
    </GlassCard>
  );
}
