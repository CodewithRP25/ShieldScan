import { BrainCircuit, ServerCog, ShieldCheck } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";
import GlassCard from "../components/GlassCard.jsx";

import {
  Cpu,
  Link2,
  MessageSquareWarning,
  Target,
  Rocket,
  Code2
} from "lucide-react";

const pillars = [
  {
    icon: ShieldCheck,
    title: "Threat-Aware UX",
    text: "Interfaces are structured around real user workflows for checking links and messages."
  },
  {
    icon: BrainCircuit,
    title: "AI-Ready Boundaries",
    text: "Analyzer folders and service layers are prepared for future model-backed detection."
  },
  {
    icon: ServerCog,
    title: "Backend Foundation",
    text: "Security middleware, environment configuration, and API routing are in place."
  }
];

const features = [
  {
    icon: Link2,
    title: "URL Scanner",
    text: "Detects phishing indicators, suspicious domains, and unsafe links."
  },
  {
    icon: MessageSquareWarning,
    title: "Message Scanner",
    text: "Analyzes suspicious emails, SMS, and chat messages."
  },
  {
    icon: BrainCircuit,
    title: "AI Ready",
    text: "Designed for future AI-powered phishing explanation and classification."
  },
  {
    icon: Cpu,
    title: "Rule Engine",
    text: "Current detection uses an intelligent rule-based security engine."
  }
];

const techStack = [
  "⚛ React",
  "🎨 Tailwind CSS",
  "🎞 Framer Motion",
  "🟢 Node.js",
  "🚀 Express.js",
  "🟨 JavaScript",
  "🔗 REST API"
];

export default function About() {
  return (
    <section className="w-full">
      <PageHeader
        badge="About"
        title="Building a Safer Digital Experience"
        description="ShieldScan starts with a clean frontend and backend architecture so detection features can be added without reshaping the project later."
      />
      <div className="grid gap-4 md:grid-cols-3">
        {pillars.map((pillar) => (
          <article key={pillar.title} className="rounded border border-shield-line bg-shield-panel p-5">
            <pillar.icon className="mb-4 h-6 w-6 text-shield-cyan" aria-hidden="true" />
            <h2 className="font-semibold text-white">{pillar.title}</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">{pillar.text}</p>
          </article>
        ))}
      </div>

      {/* Core Features */}

      <div className="mt-20">

        <h2 className="mb-10 text-center text-3xl font-bold text-white">
          Core Features
        </h2>

        <div className="grid gap-5 md:grid-cols-2">

          {features.map((feature) => (

            <GlassCard
              key={feature.title}
              className="p-6"
            >

              <feature.icon
                className="mb-4 h-8 w-8 text-shield-cyan"
              />

              <h3 className="text-xl font-semibold text-white">
                {feature.title}
              </h3>

              <p className="mt-3 text-slate-400">
                {feature.text}
              </p>

            </GlassCard>

          ))}

        </div>

      </div>

      {/* Why AI */}

      <div className="mt-20 rounded-2xl border border-shield-cyan/20 bg-white/5 p-8">

        <h2 className="mb-6 text-3xl font-bold text-white">

          Why AI + Rule-Based Detection?

        </h2>

        <p className="leading-8 text-slate-300">

          ShieldScan combines intelligent rule-based detection with an AI-ready architecture.
          Today, suspicious links and messages are identified using security rules such as URL structure,
          keyword analysis, domain reputation concepts, and phishing indicators.

          As the project evolves, AI models will classify suspicious content,
          generate human-friendly explanations,
          and improve detection accuracy through machine learning.

        </p>

      </div>

      {/* Our Mission */}

      <div className="mt-20">

        <h2 className="mb-10 text-center text-3xl font-bold text-white">
          Our Mission
        </h2>

        <GlassCard className="p-8">

          <Target className="mb-5 h-8 w-8 text-shield-cyan" />

          <h3 className="mb-4 text-2xl font-bold text-white">
            Making the Internet Safer
          </h3>

          <p className="leading-8 text-slate-300">
            ShieldScan aims to make phishing detection simple, fast, and accessible.
            Our mission is to help users identify malicious links and suspicious
            messages before they become security incidents.
          </p>

        </GlassCard>

      </div>


      {/* Technology Stack */}
      <div className="mt-20">

        <h2 className="mb-10 text-center text-3xl font-bold text-white">
          Technology Stack
        </h2>

        <div className="flex flex-wrap justify-center gap-4">

          {techStack.map((tech) => (
            <div
              key={tech}
              className="rounded-full border border-shield-cyan/30 bg-shield-cyan/10 px-6 py-3 text-sm font-semibold text-shield-cyan"
            >
              {tech}
            </div>
          ))}

        </div>

      </div>

      {/* Future Roadmap */}
      <div className="mt-20">

        <h2 className="mb-10 text-center text-3xl font-bold text-white">
          Future Roadmap
        </h2>

        <div className="grid gap-5 md:grid-cols-3">

          <GlassCard className="p-6">

            <Rocket className="mb-4 h-8 w-8 text-shield-cyan" />

            <h3 className="text-xl font-semibold text-white">
              AI Integration
            </h3>

            <p className="mt-3 text-slate-400">
              Integrate LLM-based phishing explanation and intelligent threat classification.
            </p>

          </GlassCard>

          <GlassCard className="p-6">

            <Target className="mb-4 h-8 w-8 text-shield-cyan" />

            <h3 className="text-xl font-semibold text-white">
              Threat Intelligence
            </h3>

            <p className="mt-3 text-slate-400">
              Connect live phishing databases and real-time threat feeds.
            </p>

          </GlassCard>

          <GlassCard className="p-6">

            <Code2 className="mb-4 h-8 w-8 text-shield-cyan" />

            <h3 className="text-xl font-semibold text-white">
              Browser Extension
            </h3>

            <p className="mt-3 text-slate-400">
              Protect users directly while browsing suspicious websites.
            </p>

          </GlassCard>

          <GlassCard className="p-6">

            <ShieldCheck className="mb-4 h-8 w-8 text-shield-cyan" />

            <h3 className="text-xl font-semibold text-white">
              VirusTotal Integration
            </h3>

            <p className="mt-3 text-slate-400">
              Scan URLs using external threat intelligence APIs for enhanced security analysis.
            </p>

          </GlassCard>

          <GlassCard className="p-6">

            <ServerCog className="mb-4 h-8 w-8 text-shield-cyan" />

            <h3 className="text-xl font-semibold text-white">
              Scan History
            </h3>

            <p className="mt-3 text-slate-400">
              Allow users to view and manage their previous scans.
            </p>

          </GlassCard>

          <GlassCard className="p-6">

            <Target className="mb-4 h-8 w-8 text-shield-cyan" />

            <h3 className="text-xl font-semibold text-white">
              QR Code Scanner
            </h3>

            <p className="mt-3 text-slate-400">
              Detect malicious QR codes before users open suspicious websites.
            </p>

          </GlassCard>
        </div>

      </div>

      {/* Disclaimer */}

      <div className="mt-20">

        <h2 className="mb-10 text-center text-3xl font-bold text-white">
          Disclaimer
        </h2>

        <GlassCard className="p-8">

          <ShieldCheck className="mb-5 h-8 w-8 text-shield-cyan" />

          <p className="leading-8 text-slate-300">

            ShieldScan is developed for educational and cybersecurity awareness purposes.
            The current detection engine uses intelligent rule-based analysis and should
            not replace professional cybersecurity software or enterprise threat intelligence
            solutions.

          </p>

        </GlassCard>

      </div>

    </section>
  );
}
