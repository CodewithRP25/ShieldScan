import { motion } from "framer-motion";

function getRiskLabel(value) {
  if (value < 35) {
    return "Safe";
  }

  if (value < 70) {
    return "Medium";
  }

  return "Danger";
}

function getRiskColor(value) {
  if (value < 35) {
    return "#34D399";
  }

  if (value < 70) {
    return "#FBBF24";
  }

  return "#FB7185";
}

export default function ThreatMeter({ value = 74, size = "md" }) {
  const riskLabel = getRiskLabel(value);
  const riskColor = getRiskColor(value);
  const needleRotation = -90 + (value / 100) * 180;
  const dimensions = size === "sm" ? "h-32" : "h-44";

  return (
    <div className={`relative mx-auto w-full max-w-xs ${dimensions}`} aria-label={`Overall risk ${value}% ${riskLabel}`}>
      <svg className="h-full w-full overflow-visible" viewBox="0 0 240 150" role="img">
        <defs>
          <linearGradient id="threat-meter-gradient" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#34D399" />
            <stop offset="52%" stopColor="#FBBF24" />
            <stop offset="100%" stopColor="#FB7185" />
          </linearGradient>
          <filter id="threat-meter-glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <path
          d="M 30 120 A 90 90 0 0 1 210 120"
          fill="none"
          pathLength="1"
          stroke="rgba(255,255,255,0.12)"
          strokeLinecap="round"
          strokeWidth="18"
        />
        <motion.path
          d="M 30 120 A 90 90 0 0 1 210 120"
          fill="none"
          filter="url(#threat-meter-glow)"
          pathLength="1"
          stroke="url(#threat-meter-gradient)"
          strokeLinecap="round"
          strokeWidth="18"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: value / 100 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        />
        <motion.line
          x1="120"
          x2="120"
          y1="120"
          y2="52"
          stroke={riskColor}
          strokeLinecap="round"
          strokeWidth="4"
          initial={{ rotate: -90 }}
          animate={{ rotate: needleRotation }}
          transition={{ duration: 1.25, ease: "easeOut" }}
          style={{ transformBox: "fill-box", transformOrigin: "120px 120px" }}
        />
        <circle cx="120" cy="120" fill="#07111F" r="10" stroke={riskColor} strokeWidth="4" />
      </svg>
      <div className="absolute inset-x-0 bottom-0 text-center">
        <div className="text-4xl font-black text-white">{value}%</div>
        <div className="mt-1 text-xs font-bold uppercase tracking-[0.22em]" style={{ color: riskColor }}>
          {riskLabel}
        </div>
      </div>
      <div className="absolute bottom-1 left-1 text-[10px] font-bold uppercase tracking-[0.18em] text-shield-green">Safe</div>
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 text-[10px] font-bold uppercase tracking-[0.18em] text-shield-amber">
        Medium
      </div>
      <div className="absolute bottom-1 right-1 text-[10px] font-bold uppercase tracking-[0.18em] text-shield-rose">Danger</div>
    </div>
  );
}
