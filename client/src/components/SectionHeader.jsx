import { motion } from "framer-motion";

export default function SectionHeader({ eyebrow, title, description, align = "center" }) {
  const alignment = align === "left" ? "items-start text-left" : "items-center text-center";

  return (
    <motion.div
      className={`mx-auto mb-10 flex max-w-3xl flex-col ${alignment}`}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <span className="mb-4 rounded-full border border-shield-cyan/30 bg-shield-cyan/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-shield-cyan">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base leading-7 text-slate-300">{description}</p>}
    </motion.div>
  );
}
