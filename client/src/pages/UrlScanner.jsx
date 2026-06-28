import { useState } from "react";
import { Link2, LoaderCircle, Search } from "lucide-react";

import ScannerShell from "../components/ScannerShell.jsx";
import ResultCard from "../components/ResultCard.jsx";
import { analyzeUrl } from "../services/analyzeService.js";

export default function UrlScanner() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  async function handleAnalyze(e) {
    e.preventDefault();

    if (!url.trim()) {
      setError("Please enter a URL.");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await analyzeUrl(url);

      setResult(response.data);
    } catch (err) {
      setError(err.message || "Unable to analyze URL.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <ScannerShell
      icon={Link2}
      title="AI Powered URL Scanner"
      description="Analyze suspicious websites, phishing URLs, fake login pages, and malicious links before opening them. ShieldScan evaluates security indicators to help you stay protected online."
    >
      <form
        onSubmit={handleAnalyze}
        noValidate
        className="space-y-5"
      >
        <label className="block">

          <span className="mb-2 block text-sm font-medium text-slate-200">
            Website URL
          </span>

          <input
            type="url"
            autoFocus
            disabled={loading}
            placeholder="https://example.com/login or https://bank-example.com"
            value={url}
            onChange={(e) => {
              setUrl(e.target.value);
              setResult(null);
              setError("");
            }}
            className="w-full rounded border border-shield-line bg-shield-ink px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-shield-cyan disabled:cursor-not-allowed"
          />

          <p className="mt-2 text-xs text-slate-500">
            Supported: HTTP, HTTPS, shortened links, phishing URLs, and suspicious domains.
          </p>

        </label>

        {error && (
          <p className="text-sm text-red-400">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-shield-cyan px-5 py-3 text-sm font-bold text-slate-950 shadow-neon transition hover:-translate-y-0.5 hover:bg-cyan-300 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
        >


          {loading ? (
            <>
              <LoaderCircle className="h-4 w-4 animate-spin" />
              Scanning URL...
            </>
          ) : (
            <>
              <Search className="h-4 w-4" />
              Scan URL
            </>
          )}
        </button>

        {loading && (
          <div className="mt-5 rounded-lg border border-shield-cyan/20 bg-shield-cyan/5 p-4">
            <p className="animate-pulse text-sm font-medium text-shield-cyan">
              🛡️ ShieldScan is analyzing the URL for phishing indicators...
            </p>
          </div>
        )}
        
      </form>

      <ResultCard result={result} />

    </ScannerShell>
  );
}