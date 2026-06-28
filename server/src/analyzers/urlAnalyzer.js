/**
 * ----------------------------------------------------
 * ShieldScan URL Detection Engine (Phase 2)
 * ----------------------------------------------------
 * This file analyzes URLs using rule-based detection.
 * Each rule contributes to a risk score and explanation.
 * ----------------------------------------------------
 */

const CONFIG = {
  suspiciousKeywords: [
    "login",
    "verify",
    "account",
    "update",
    "secure",
    "password",
    "confirm",
    "bank",
    "wallet",
    "payment",
    "signin",
    "otp"
  ],

  suspiciousTlds: [
    ".xyz",
    ".top",
    ".click",
    ".gq",
    ".ml",
    ".cf",
    ".tk"
  ],

  urlShorteners: [
    "bit.ly",
    "tinyurl.com",
    "t.co",
    "goo.gl",
    "is.gd",
    "cutt.ly",
    "rebrand.ly"
  ],

  weights: {
    http: 30,
    ipAddress: 35,
    atSymbol: 25,
    longUrl: 15,
    shortener: 25,
    keyword: 15,
    suspiciousTld: 20,

    manyHyphens: 15,
    manySubdomains: 20,
    manyNumbers: 10
  }
};

function checkHTTPS(url) {
    if (url.startsWith("https://")) {
  return {
    score: 0,
    reason: null
  };
}

if (url.startsWith("http://")) {
  return {
    score: CONFIG.weights.http,
    reason: "URL is using HTTP instead of HTTPS."
  };
}

return {
  score: 10,
  reason: "Unable to determine whether the URL uses HTTPS."
};
}

function checkIPAddress(url) {
  const ipRegex =
    /^https?:\/\/(\d{1,3}\.){3}\d{1,3}(:\d+)?(\/.*)?$/;

  if (ipRegex.test(url)) {
    return {
      score: CONFIG.weights.ipAddress,
      reason: "URL uses an IP address instead of a domain name."
    };
  }

  return {
    score: 0,
    reason: null
  };
}

function checkAtSymbol(url) {
  if (url.includes("@")) {
    return {
      score: CONFIG.weights.atSymbol,
      reason: "URL contains '@', which is commonly used in phishing URLs."
    };
  }

  return {
    score: 0,
    reason: null
  };
}

function checkUrlLength(url) {
  if (url.length > 100) {
    return {
      score: CONFIG.weights.longUrl,
      reason: "URL is unusually long."
    };
  }

  return {
    score: 0,
    reason: null
  };
}

function checkShortener(url) {
  const found = CONFIG.urlShorteners.find(shortener =>
    url.includes(shortener)
  );

  if (found) {
    return {
      score: CONFIG.weights.shortener,
      reason: `Shortened URL detected (${found}).`
    };
  }

  return {
    score: 0,
    reason: null
  };
}

function checkKeywords(url) {
  let score = 0;
  const reasons = [];

  const lowerUrl = url.toLowerCase();

  CONFIG.suspiciousKeywords.forEach((keyword) => {
    if (lowerUrl.includes(keyword)) {
      score += CONFIG.weights.keyword;
      reasons.push(`Suspicious keyword detected: "${keyword}"`);
    }
  });

  return {
    score,
    reasons
  };
}

function checkSuspiciousTld(url) {
  const lowerUrl = url.toLowerCase();

  const found = CONFIG.suspiciousTlds.find((tld) =>
    lowerUrl.includes(tld)
  );

  if (found) {
    return {
      score: CONFIG.weights.suspiciousTld,
      reason: `Suspicious domain extension detected (${found}).`
    };
  }

  return {
    score: 0,
    reason: null
  };
}

function checkManyHyphens(url) {
  const hostname = new URL(url).hostname;

  const hyphens = (hostname.match(/-/g) || []).length;

  if (hyphens >= 2) {
    return {
      score: CONFIG.weights.manyHyphens,
      reason: "Domain contains multiple hyphens, a common phishing technique."
    };
  }

  return {
    score: 0,
    reason: null
  };
}

function checkManySubdomains(url) {
  const hostname = new URL(url).hostname;

  const parts = hostname.split(".");

  if (parts.length > 3) {
    return {
      score: CONFIG.weights.manySubdomains,
      reason: "Domain contains many subdomains."
    };
  }

  return {
    score: 0,
    reason: null
  };
}

function checkManyNumbers(url) {
  const hostname = new URL(url).hostname;

  const numbers = (hostname.match(/\d/g) || []).length;

  if (numbers >= 5) {
    return {
      score: CONFIG.weights.manyNumbers,
      reason: "Domain contains an unusually high number of digits."
    };
  }

  return {
    score: 0,
    reason: null
  };
}

function isValidUrl(url) {
  try {
    const parsed = new URL(url);

    // Only allow HTTP or HTTPS
    if (
      parsed.protocol !== "http:" &&
      parsed.protocol !== "https:"
    ) {
      return false;
    }

    const hostname = parsed.hostname;

    // Allow localhost (development)
    if (hostname === "localhost") {
      return true;
    }

    // Allow IPv4 addresses
    const ipRegex =
      /^(\d{1,3}\.){3}\d{1,3}$/;

    if (ipRegex.test(hostname)) {
      return true;
    }

    // Domain must contain a dot
    if (!hostname.includes(".")) {
      return false;
    }

    // Validate TLD
    const parts = hostname.split(".");

    const tld = parts[parts.length - 1];

    if (!/^[a-zA-Z]{2,24}$/.test(tld)) {
      return false;
    }

    return true;

  } catch {
    return false;
  }
}

export function analyzeUrl(url) {

  const reasons = [];
  if (!isValidUrl(url)) {
    return {
      scanId: `SCAN-${Date.now()}`,
      status: "Invalid URL",
      riskScore: 0,
      confidence: 100,
      scanTime: new Date().toISOString(),
      reasons: ["The provided text is not a valid URL."],
      recommendation: "Enter a complete URL including http:// or https://"
    };
  }
  let riskScore = 0;

  const checks = [
    checkHTTPS(url),
    checkIPAddress(url),
    checkAtSymbol(url),
    checkUrlLength(url),
    checkShortener(url),
    checkSuspiciousTld(url),
    checkManyHyphens(url),
    checkManySubdomains(url),
    checkManyNumbers(url)
  ];

  checks.forEach((result) => {
    riskScore += result.score;

    if (result.reason) {
      reasons.push(result.reason);
    }
  });

  const keywordResult = checkKeywords(url);

  riskScore += keywordResult.score;

  reasons.push(...keywordResult.reasons);

  riskScore = Math.min(riskScore, 100);

  let status = "Safe";

  if (riskScore >= 76) {
    status = "Dangerous";
  } else if (riskScore >= 51) {
    status = "Suspicious";
  } else if (riskScore >= 26) {
    status = "Low Risk";
  }

  const confidence = Math.max(
    75,
    Math.min(99, 90 + Math.floor(riskScore / 5))
  );

  return {
    scanId: `SCAN-${Date.now()}`,
    status,
    riskScore,
    confidence,
    scanTime: new Date().toISOString(),
    reasons,
    recommendation:
      status === "Safe"
        ? "No major phishing indicators were detected. Continue to verify the sender before visiting."
        : "Avoid opening this link unless you completely trust the sender."
  };
}

