import { motion } from "framer-motion";
import {
  Activity,
  ArrowRight,
  Bot,
  BrainCircuit,
  CheckCircle2,
  DatabaseZap,
  Eye,
  FileSearch,
  Gauge,
  Link2,
  LockKeyhole,
  MessageSquareWarning,
  Radar,
  ShieldCheck,
  Sparkles,
  Users
} from "lucide-react";
import { Link } from "react-router-dom";
import CyberBackground from "../components/CyberBackground.jsx";
import GlassCard from "../components/GlassCard.jsx";
import MetricCard from "../components/MetricCard.jsx";
import SectionHeader from "../components/SectionHeader.jsx";
import ServiceCard from "../components/ServiceCard.jsx";

const stats = [
  {
    icon: Link2,
    value: 2.4,
    suffix: "M+",
    decimals: 1,
    label: "Links Scanned",
    detail: "Prepared for high-volume URL review workflows."
  },
  {
    icon: Radar,
    value: 186,
    suffix: "K+",
    decimals: 0,
    label: "Threats Detected",
    detail: "Designed for phishing, impersonation, and suspicious signal analysis."
  },
  {
    icon: Users,
    value: 74,
    suffix: "K+",
    decimals: 0,
    label: "Users Protected",
    detail: "Built for people and teams that need fast security context."
  }
];

const services = [
  {
    icon: Link2,
    title: "URL Scanner",
    text: "Evaluate suspicious links with reputation checks, URL structure analysis, and phishing detection.",
    link: "/url-scanner"
  },
  {
    icon: MessageSquareWarning,
    title: "Message Scanner",
    text: "Analyze suspicious emails, SMS, and chat messages for phishing and social engineering attempts.",
    link: "/message-scanner"
  },
  {
    icon: DatabaseZap,
    title: "Threat Intelligence",
    text: "Coming Soon — Threat feeds, blocklists, and real-time security intelligence."
  },
  {
    icon: BrainCircuit,
    title: "AI Explanation",
    text: "Coming Soon — AI-powered explanations that simplify complex security findings."
  }
];

const features = [
  { icon: Gauge, title: "Fast", text: "Optimized UI flows for quick submission, clear feedback, and minimal friction." },
  { icon: LockKeyhole, title: "Secure", text: "Frontend patterns built to pair with hardened server-side analysis." },
  { icon: Eye, title: "Privacy Focused", text: "A product direction centered on careful handling of sensitive messages and links." },
  { icon: Bot, title: "AI Powered", text: "Ready for model-assisted classification and human-readable risk explanations." },
  { icon: Activity, title: "Real-Time Analysis", text: "Structured for responsive scanning experiences and live status updates." }
];

const steps = [
  {
    icon: FileSearch,
    title: "Paste",
    text: "Enter a URL or suspicious message into the dedicated scanner experience."
  },
  {
    icon: Sparkles,
    title: "Analyze",
    text: "Future analyzers can evaluate risk signals and generate actionable context."
  },
  {
    icon: ShieldCheck,
    title: "Stay Safe",
    text: "Use the result to avoid phishing traps, impersonation attempts, and unsafe links."
  }
];

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <section className="relative -mx-4 -mt-8 min-h-[calc(100vh-4rem)] overflow-hidden px-4 pb-24 pt-20 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <CyberBackground />
        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-shield-cyan/30 bg-shield-cyan/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-shield-cyan backdrop-blur">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              AI Cyber Defense
            </div>
            <motion.h1
              className="max-w-4xl text-6xl font-black leading-none tracking-tight text-white sm:text-7xl lg:text-8xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            >
              <span className="gradient-text">ShieldScan</span>
            </motion.h1>
            <motion.p
              className="mt-6 max-w-2xl text-xl leading-8 text-slate-200 sm:text-2xl"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
              Intelligent Phishing Link &
              Suspicious Message Detector
            </motion.p>
            <div className="mt-5 space-y-3">
              <p className="text-lg font-semibold text-shield-cyan">
                Think Before You Click. Scan Before You Trust.
              </p>

              <p className="text-base font-medium text-slate-300">
                Smarter Detection. Safer Decisions.
              </p>

              <p className="max-w-2xl text-base leading-7 text-slate-400">
                A professional cybersecurity platform for identifying risky links and suspicious messages before they become incidents.
              </p>
            </div>
            <motion.div
              className="mt-8 flex flex-col gap-3 sm:flex-row"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            >
              <Link
                to="/url-scanner"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-shield-cyan px-6 py-3 text-sm font-bold text-slate-950 shadow-neon transition hover:-translate-y-0.5 hover:bg-cyan-300"
              >
                Analyze URL
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to="/message-scanner"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-sm font-bold text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-shield-cyan/50 hover:bg-white/10"
              >
                Analyze Message
                <MessageSquareWarning className="h-4 w-4" aria-hidden="true" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 shadow-glass backdrop-blur-2xl">
              <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-shield-cyan">Live Risk Console</p>
                  <h2 className="mt-2 text-xl font-bold text-white">Suspicious activity preview</h2>
                </div>
                <span className="rounded-full border border-shield-green/30 bg-shield-green/10 px-3 py-1 text-xs font-semibold text-shield-green">
                  Online
                </span>
              </div>
              <div className="space-y-4">
                {["Credential harvest pattern", "Domain mismatch signal", "Urgent payment language"].map((item, index) => (
                  <motion.div
                    key={item}
                    className="rounded-xl border border-white/10 bg-shield-ink/55 p-4"
                    animate={{ opacity: [0.72, 1, 0.72] }}
                    transition={{ duration: 3 + index, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="flex items-center justify-between gap-4">
                      <span className="text-sm font-semibold text-slate-100">{item}</span>
                      <span className="text-xs font-semibold text-shield-amber">Review</span>
                    </div>
                    <div className="mt-3 h-2 rounded-full bg-white/10">
                      <span
                        className="block h-2 rounded-full bg-gradient-to-r from-shield-cyan to-shield-green"
                        style={{ width: `${64 + index * 9}%` }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <SectionHeader
          eyebrow="Security Metrics"
          title="Built for meaningful threat visibility"
          description="ShieldScan’s interface is shaped around the data security teams and everyday users need to act with confidence."
        />
        <div className="grid gap-5 md:grid-cols-3">
          {stats.map((stat, index) => (
            <MetricCard key={stat.label} {...stat} delay={index * 0.08} />
          ))}
        </div>
      </section>

      <section className="py-20">
        <SectionHeader
          eyebrow="Core Features"
          title="One security surface for links and messages"
          description="Every scanner feature is organized for future detection engines, threat intelligence sources, and AI explanations."
        />
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} delay={index * 0.07} />
          ))}
        </div>
      </section>

      <section className="py-20">
        <SectionHeader
          eyebrow="Why ShieldScan"
          title="Designed for trust at speed"
          description="The product foundation balances speed, clarity, privacy, and security-first architecture."
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {features.map((feature, index) => (
            <GlassCard key={feature.title} delay={index * 0.05} className="p-5">
              <feature.icon className="mb-4 h-6 w-6 text-shield-cyan" aria-hidden="true" />
              <h3 className="font-semibold text-white">{feature.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{feature.text}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="py-20">
        <SectionHeader
          eyebrow="How It Works"
          title="A simple path from suspicion to safer action"
          description="No scanner logic is implemented yet, but the product journey is ready for the detection layer."
        />
        <div className="relative grid gap-6 lg:grid-cols-3">
          <div className="absolute left-1/2 top-16 hidden h-px w-2/3 -translate-x-1/2 bg-gradient-to-r from-transparent via-shield-cyan/50 to-transparent lg:block" />
          {steps.map((step, index) => (
            <GlassCard key={step.title} delay={index * 0.08} className="relative text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full border border-shield-cyan/35 bg-shield-cyan/10 shadow-glow">
                <step.icon className="h-7 w-7 text-shield-cyan" aria-hidden="true" />
              </div>
              <div className="mx-auto mb-4 flex h-7 w-7 items-center justify-center rounded-full bg-shield-cyan text-xs font-black text-shield-ink">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">{step.text}</p>
              {index < steps.length - 1 && (
                <CheckCircle2 className="absolute -right-4 top-[4.25rem] hidden h-8 w-8 rounded-full bg-shield-ink text-shield-green lg:block" aria-hidden="true" />
              )}
            </GlassCard>
          ))}
        </div>
      </section>

      <section className="pb-24 pt-12">
        <div className="rounded-2xl border border-shield-cyan/20 bg-gradient-to-r from-shield-cyan/15 via-white/[0.06] to-shield-blue/15 p-8 shadow-glass backdrop-blur-xl sm:p-10">
          <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-3xl font-bold text-white">Ready to inspect a suspicious signal?</h2>
              <p className="mt-3 max-w-2xl text-slate-300">
                Start with the URL or message scanner and connect detection services when the next product phase begins.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/url-scanner"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-bold text-shield-ink transition hover:-translate-y-0.5 hover:bg-cyan-100"
              >
                Analyze URL
                <Link2 className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                to="/message-scanner"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-white/10"
              >
                Analyze Message
                <MessageSquareWarning
                  className="h-4 w-4"
                  aria-hidden="true"
                />
              </Link>

            </div>
          </div>
        </div >
      </section >
    </div >
  );
}
