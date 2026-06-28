import AnimatedCounter from "./AnimatedCounter.jsx";
import GlassCard from "./GlassCard.jsx";

export default function MetricCard({ icon: Icon, value, suffix, decimals, label, detail, delay }) {
  return (
    <GlassCard delay={delay} className="relative overflow-hidden">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-shield-cyan/80 to-transparent" />
      <Icon className="mb-5 h-7 w-7 text-shield-cyan transition duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_14px_rgba(34,211,238,0.75)]" aria-hidden="true" />
      <div className="text-4xl font-bold text-white">
        <AnimatedCounter value={value} suffix={suffix} decimals={decimals} />
      </div>
      <h3 className="mt-2 font-semibold text-slate-100">{label}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-400">{detail}</p>
    </GlassCard>
  );
}
