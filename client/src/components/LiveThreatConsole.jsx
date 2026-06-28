import { motion } from "framer-motion";
import { AlertTriangle, CheckCircle2, Fingerprint, GlobeLock, KeyRound, SearchCode, Terminal } from "lucide-react";
import ThreatMeter from "./ThreatMeter.jsx";

const checks = [
  { icon: GlobeLock, label: "HTTPS Status", value: "Encrypted", tone: "text-shield-green" },
  { icon: SearchCode, label: "Suspicious Keywords", value: "4 matched", tone: "text-shield-amber" },
  { icon: Fingerprint, label: "Domain Reputation", value: "Unverified", tone: "text-shield-amber" },
  { icon: KeyRound, label: "Credential Harvest Pattern", value: "Detected", tone: "text-shield-rose" }
];

const terminalRows = [
  "booting heuristic scanner...",
  "checking transport security...",
  "mapping keyword signatures...",
  "profiling domain reputation...",
  "credential pattern confidence: high"
];

export default function LiveThreatConsole() {
  return (
    <motion.div
      className="scanline relative overflow-hidden rounded-2xl border border-shield-cyan/20 bg-[#050A12]/90 p-5 font-mono shadow-glass backdrop-blur-2xl"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-shield-cyan to-transparent" />
      <div className="mb-5 flex items-center justify-between border-b border-shield-cyan/10 pb-4">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-shield-cyan/25 bg-shield-cyan/10">
            <Terminal className="h-5 w-5 text-shield-cyan" aria-hidden="true" />
          </span>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-shield-cyan">Live Threat Console</p>
            <h2 className="mt-1 text-lg font-black tracking-tight text-white">risk.scan/session-0426</h2>
          </div>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full border border-shield-green/30 bg-shield-green/10 px-3 py-1 text-xs font-bold text-shield-green">
          <span className="h-2 w-2 rounded-full bg-shield-green shadow-[0_0_16px_rgba(52,211,153,0.9)]" />
          LIVE
        </span>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1fr_0.9fr]">
        <div className="space-y-3">
          {checks.map((check, index) => (
            <motion.div
              key={check.label}
              className="group flex items-center justify-between gap-4 rounded-xl border border-white/10 bg-white/[0.035] p-3 transition hover:border-shield-cyan/35 hover:bg-shield-cyan/5"
              animate={{ opacity: [0.76, 1, 0.76] }}
              transition={{ duration: 3 + index * 0.45, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="flex items-center gap-3">
                <check.icon className="h-5 w-5 text-shield-cyan transition group-hover:scale-110" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-slate-300">{check.label}</span>
              </div>
              <span className={`text-xs font-black uppercase tracking-[0.12em] ${check.tone}`}>{check.value}</span>
            </motion.div>
          ))}

          <div className="rounded-xl border border-white/10 bg-black/30 p-4">
            <div className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
              <AlertTriangle className="h-4 w-4 text-shield-amber" aria-hidden="true" />
              Terminal Trace
            </div>
            <div className="space-y-2">
              {terminalRows.map((row, index) => (
                <motion.div
                  key={row}
                  className="flex items-center gap-2 text-xs text-slate-300"
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: 0.5 + index * 0.18 }}
                >
                  <CheckCircle2 className="h-3.5 w-3.5 text-shield-green" aria-hidden="true" />
                  <span className="text-shield-cyan">$</span>
                  <span>{row}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-shield-cyan/10 bg-shield-midnight/70 p-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">Overall Risk</span>
            <span className="text-xs font-black text-shield-rose">74%</span>
          </div>
          <ThreatMeter value={74} />
        </div>
      </div>
    </motion.div>
  );
}
