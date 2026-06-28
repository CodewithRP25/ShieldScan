import { motion } from "framer-motion";

const signalBars = ["left-[8%] h-20", "left-[31%] h-32", "left-[62%] h-24", "left-[84%] h-36"];

export default function CyberBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 cyber-grid opacity-70" />
      <motion.div
        className="absolute inset-x-0 top-20 h-px bg-gradient-to-r from-transparent via-shield-cyan/70 to-transparent"
        animate={{ y: [0, 280, 0], opacity: [0.25, 0.9, 0.25] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -left-28 top-28 h-72 w-[42rem] rotate-12 bg-gradient-to-r from-transparent via-shield-blue/15 to-transparent blur-2xl"
        animate={{ x: [0, 140, 0], opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-shield-ink via-shield-ink/80 to-transparent" />
      {signalBars.map((bar, index) => (
        <motion.span
          key={bar}
          className={`absolute bottom-12 w-px bg-gradient-to-b from-transparent via-shield-cyan/60 to-transparent ${bar}`}
          animate={{ y: [0, -24, 0], opacity: [0.2, 0.85, 0.2] }}
          transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut", delay: index * 0.45 }}
        />
      ))}


    </div>
  );
}
