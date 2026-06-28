import { motion } from "framer-motion";
import { LoaderCircle, Search } from "lucide-react";
import { useEffect, useState } from "react";

const steps = [
  "Initializing Analysis...",
  "Checking HTTPS...",
  "Checking Keywords...",
  "Calculating Risk...",
  "Preparing Report..."
];

export default function SimulatedScanButton({ label }) {
  const [isRunning, setIsRunning] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!isRunning) {
      return undefined;
    }

    if (stepIndex >= steps.length - 1) {
      const doneTimer = window.setTimeout(() => {
        setIsRunning(false);
        setIsComplete(true);
      }, 850);

      return () => window.clearTimeout(doneTimer);
    }

    const timer = window.setTimeout(() => {
      setStepIndex((current) => current + 1);
    }, 850);

    return () => window.clearTimeout(timer);
  }, [isRunning, stepIndex]);

  function startScan() {
    setIsComplete(false);
    setStepIndex(0);
    setIsRunning(true);
  }

  const progress = isRunning ? ((stepIndex + 1) / steps.length) * 100 : isComplete ? 100 : 0;

  return (
    <div className="space-y-4">
      <button
        type="button"
        disabled={isRunning}
        onClick={startScan}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-shield-cyan px-5 py-3 text-sm font-bold text-slate-950 shadow-neon transition hover:-translate-y-0.5 hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-80 sm:w-auto"
      >
        {isRunning ? (
          <LoaderCircle className="h-4 w-4 animate-spin" aria-hidden="true" />
        ) : (
          <Search className="h-4 w-4" aria-hidden="true" />
        )}
        {isRunning ? steps[stepIndex] : label}
      </button>

      {(isRunning || isComplete) && (
        <motion.div
          className="rounded-xl border border-shield-cyan/20 bg-shield-ink/70 p-4"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div className="mb-3 flex items-center justify-between gap-4 text-xs font-bold uppercase tracking-[0.14em]">
            <span className={isComplete ? "text-shield-green" : "text-shield-cyan"}>
              {isComplete ? "Report Ready" : steps[stepIndex]}
            </span>
            <span className="text-slate-500">UI Simulation</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-shield-cyan via-shield-blue to-shield-green"
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            />
          </div>
          <p className="mt-3 text-xs leading-5 text-slate-400">
            No backend request is made. This preview demonstrates the planned analysis flow.
          </p>
        </motion.div>
      )}
    </div>
  );
}
