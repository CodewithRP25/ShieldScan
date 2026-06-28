import { motion } from "framer-motion";

export default function PageHeader({ badge, title, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="mb-8 max-w-3xl"
    >
      <span className="mb-4 inline-flex rounded border border-shield-cyan/30 bg-shield-cyan/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-shield-cyan">
        {badge}
      </span>
      <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl">{title}</h1>
      <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">{description}</p>
    </motion.div>
  );
}
