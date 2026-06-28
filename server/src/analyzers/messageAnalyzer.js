const CONFIG = {

  suspiciousKeywords: [
    "urgent",
    "verify",
    "click",
    "login",
    "signin",
    "password",
    "otp",
    "bank",
    "account",
    "payment",
    "wallet",
    "crypto",
    "kyc",
    "confirm",
    "security",
    "reset",
    "invoice",
    "refund",
    "delivery",
    "courier",
    "amazon",
    "paypal",
    "upi",
    "credit",
    "debit",
    "transaction",
    "blocked",
    "suspended",
    "reactivate",
    "reward",
    "claim",
    "winner",
    "lottery",
    "gift",
    "prize",
    "limited",
    "free"
  ],

  weights: {

    keyword: 12,

    link: 20,

    phone: 15,

    urgency: 15

  }

};

function containsLink(message) {

  return /(https?:\/\/|www\.|bit\.ly|tinyurl\.com|t\.co|[a-zA-Z0-9-]+\.[a-z]{2,})/i.test(message);
}

function containsPhone(message) {

  return /\+?\d[\d\s-]{7,}/.test(message);

}

function containsUrgency(message) {

  const urgentWords = [
    "urgent",
    "immediately",
    "now",
    "today",
    "expire",
    "expired",
    "limited",
    "act now",
    "final warning",
    "last chance",
    "attention",
    "important",
    "verify immediately",
    "within 24 hours",
    "blocked",
    "suspended"
  ];

  const lower = message.toLowerCase();

  return urgentWords.some(word => lower.includes(word));

}

function analyzeKeywords(message) {

  let score = 0;

  const reasons = [];

  const lower = message.toLowerCase();

  CONFIG.suspiciousKeywords.forEach((keyword) => {

    if (lower.includes(keyword)) {

      score += CONFIG.weights.keyword;

      reasons.push(
        `Suspicious keyword detected: "${keyword}"`
      );

    }

  });

  return {

    score,

    reasons

  };

}

export function analyzeMessage(message) {

  let riskScore = 0;

  const reasons = [];

  const keywordResult = analyzeKeywords(message);

  riskScore += keywordResult.score;

  reasons.push(...keywordResult.reasons);

  if (containsLink(message)) {

    riskScore += CONFIG.weights.link;

    reasons.push(
      "Message contains a clickable link."
    );

  }

  if (containsPhone(message)) {

    riskScore += CONFIG.weights.phone;

    reasons.push(
      "Message contains a phone number."
    );

  }

  if (containsUrgency(message)) {

    riskScore += CONFIG.weights.urgency;

    reasons.push(
      "Message contains urgent language."
    );

  }


  riskScore = Math.min(riskScore, 100);

  if (reasons.length === 0) {
    reasons.push("No suspicious indicators detected.");
  }

  let status = "Safe";

  if (riskScore >= 76) {

    status = "Dangerous";

  }
  else if (riskScore >= 51) {

    status = "Suspicious";

  }
  else if (riskScore >= 26) {

    status = "Low Risk";

  }

  const confidence = Math.max(

    75,

    Math.min(99, 90 + Math.floor(riskScore / 5))

  );

  const recommendation =

    status === "Safe"

      ? "This message appears safe, but always verify the sender before responding."

      : "Do not click links or share personal information unless you fully trust the sender.";

  return {

    scanId: `SCAN-${Date.now()}`,

    status,

    riskScore,

    confidence,

    scanTime: new Date().toISOString(),

    reasons,

    recommendation

  };
}