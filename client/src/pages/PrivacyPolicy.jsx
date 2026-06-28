import { LockKeyhole, ShieldCheck } from "lucide-react";
import PageHeader from "../components/PageHeader.jsx";

const principles = [
  "Scanner inputs should be treated as sensitive security data.",
  "Detection should run through controlled services instead of leaking logic into the browser.",
  "Future integrations should minimize retention and expose clear user expectations.",
  "Security telemetry should support protection without creating unnecessary personal data risk."
];

export default function PrivacyPolicy() {
  return (
    <section className="w-full">
      <PageHeader
        badge="Privacy"
        title="Privacy-focused by design"
        description="ShieldScan is structured for future phishing analysis features that respect sensitive links, messages, and user context."
      />
      <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-6 shadow-glass backdrop-blur-xl">
          <LockKeyhole className="mb-5 h-8 w-8 text-shield-cyan" aria-hidden="true" />
          <h2 className="text-xl font-bold text-white">Current foundation</h2>
          <p className="mt-3 leading-7 text-slate-300">
            This frontend does not implement scanner logic or submit analysis data. The privacy model can be finalized when detection services are connected.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-shield-panel/80 p-6 shadow-glass backdrop-blur-xl">
          <h2 className="mb-5 text-xl font-bold text-white">Product principles</h2>
          <div className="grid gap-4">
            {principles.map((principle) => (
              <div key={principle} className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.035] p-4">
                <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-shield-green" aria-hidden="true" />
                <p className="text-sm leading-6 text-slate-300">{principle}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
