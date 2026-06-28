import {
  AlertTriangle,
  CheckCircle2,
  ShieldAlert,
  ShieldCheck
} from "lucide-react";

const STATUS = {
  Safe: {
    icon: ShieldCheck,
    color: "text-green-400",
    border: "border-green-500/30",
    bg: "bg-green-500/10"
  },
  "Low Risk": {
    icon: CheckCircle2,
    color: "text-yellow-400",
    border: "border-yellow-500/30",
    bg: "bg-yellow-500/10"
  },
  Suspicious: {
    icon: AlertTriangle,
    color: "text-orange-400",
    border: "border-orange-500/30",
    bg: "bg-orange-500/10"
  },
  Dangerous: {
    icon: ShieldAlert,
    color: "text-red-400",
    border: "border-red-500/30",
    bg: "bg-red-500/10"
  },
  "Invalid URL": {
    icon: AlertTriangle,
    color: "text-slate-300",
    border: "border-slate-500/30",
    bg: "bg-slate-500/10"
  }
};

function getSafetyScore(result) {

  if (result.status === "Invalid URL") {
    return 0;
  }

  if (typeof result.riskScore !== "number") {
    return 0;
  }

  return Math.max(0, 100 - result.riskScore);

}

function getThreatLevel(status) {
  switch (status) {
    case "Safe":
      return {
        label: "SAFE",
        width: 100,
        color: "bg-green-500"
      };

    case "Low Risk":
      return {
        label: "LOW RISK",
        width: 75,
        color: "bg-yellow-400"
      };

    case "Suspicious":
      return {
        label: "SUSPICIOUS",
        width: 45,
        color: "bg-orange-500"
      };

    case "Dangerous":
      return {
        label: "DANGEROUS",
        width: 15,
        color: "bg-red-500"
      };

    default:
      return {
        label: "INVALID",
        width: 0,
        color: "bg-slate-500"
      };
  }
}

export default function ResultCard({ result }) {
  if (!result) return null;

  const style = STATUS[result.status] || STATUS["Invalid URL"];
  const safetyScore = getSafetyScore(result);
  const threat = getThreatLevel(result.status);
  const Icon = style.icon;

  return (
    <div
      className={`mt-6 rounded-xl border ${style.border} ${style.bg} p-5`}
    >
      <div className="flex items-center gap-3">
        <Icon className={`h-7 w-7 ${style.color}`} />

        <div>
          <h2 className={`text-xl font-bold ${style.color}`}>
            {result.status}
          </h2>

          <p className="text-sm text-slate-400">
            Scan ID: {result.scanId}
          </p>
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">

        <div className="rounded-lg bg-white/5 p-4">

          <p className="text-xs uppercase text-slate-400">
            Safety Score
          </p>

          <p className="mt-2 text-3xl font-black text-white">
            {safetyScore}/100
          </p>

          {/* Progress Bar */}

          <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-slate-700">

            <div
              className="h-full rounded-full bg-cyan-400 transition-all duration-1000"
              style={{
                width: `${safetyScore}%`
              }}
            />

          </div>

        </div>

        <div className="rounded-lg bg-white/5 p-4">
          <p className="text-xs uppercase text-slate-400">
            Analysis Confidence
          </p>

          <p className="mt-2 text-3xl font-black text-white">
            {result.confidence}%
          </p>
        </div>

      </div>

      <div className="mt-6 rounded-lg bg-white/5 p-4">

        <div className="flex items-center justify-between">

          <span className="text-sm font-semibold text-slate-300">
            Threat Meter
          </span>

          <span className={`font-bold ${style.color}`}>
            {result.status === "Safe" && "🟢 "}
            {result.status === "Low Risk" && "🟡 "}
            {result.status === "Suspicious" && "🟠 "}
            {result.status === "Dangerous" && "🔴 "}
            {result.status === "Invalid URL" && "⚪ "}

            {threat.label}
          </span>

        </div>

        <div className="mt-4 h-4 overflow-hidden rounded-full bg-slate-700">

          <div
            className={`h-full rounded-full transition-all duration-1000 ${threat.color}`}
            style={{
              width: `${threat.width}%`
            }}
          />

        </div>

      </div>

      <div className="mt-6">

        <h3 className="mb-3 font-semibold text-white">
          Detection Reasons
        </h3>

        <ul className="space-y-2">

          {result.reasons.map((reason) => (
            <li
              key={reason}
              className="rounded bg-white/5 p-3 text-sm text-slate-300"
            >
              • {reason}
            </li>
          ))}

        </ul>

      </div>

      <div className="mt-6 rounded-lg bg-white/5 p-4">

        <h3 className="mb-2 font-semibold text-white">
          Recommendation
        </h3>

        <p className="text-slate-300">
          {result.recommendation}
        </p>

      </div>
    </div>
  );
}