import { motion } from "framer-motion";
import { cn } from "../utils/cn.js";

export default function GlassCard({ children, className = "", delay = 0 }) {
  return (
    <motion.article
      className={cn(
        "group rounded-xl border border-white/10 bg-white/[0.055] p-6 shadow-glass backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-shield-cyan/45 hover:bg-white/[0.075] hover:shadow-glow",
        className
      )}
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.45, ease: "easeOut", delay }}
    >
      {children}
    </motion.article>
  );
}
