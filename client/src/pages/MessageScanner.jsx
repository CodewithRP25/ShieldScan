import { useEffect, useState } from "react";
import {
  CheckCircle2,
  Circle,
  LoaderCircle,
  MessageSquareWarning,
  Search
} from "lucide-react";

import ScannerShell from "../components/ScannerShell.jsx";
import ResultCard from "../components/ResultCard.jsx";
import { analyzeMessage } from "../services/messageService.js";

export default function MessageScanner() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  const [loadingStep, setLoadingStep] = useState(0);

  useEffect(() => {
    let timer1;
    let timer2;
    let timer3;

    if (loading) {
      setLoadingStep(1);

      timer1 = setTimeout(() => {
        setLoadingStep(2);
      }, 3000);

      timer2 = setTimeout(() => {
        setLoadingStep(3);
      }, 8000);

      timer3 = setTimeout(() => {
        setLoadingStep(4);
      }, 15000);
    } else {
      setLoadingStep(0);
    }

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [loading]);

function getStepIcon(stepNumber) {
  if (loadingStep > stepNumber) {
    return (
      <CheckCircle2 className="mr-2 inline h-4 w-4 text-green-400" />
    );
  }

  if (loadingStep === stepNumber) {
    return (
      <LoaderCircle className="mr-2 inline h-4 w-4 animate-spin text-shield-cyan" />
    );
  }

  return (
    <Circle className="mr-2 inline h-4 w-4 text-slate-500" />
  );
}

  async function handleAnalyze(e) {
    e.preventDefault();

    if (!message.trim()) {
      setError("Please enter a message.");
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await analyzeMessage(message);

      setResult(response.data);
    } catch (err) {
      if (
        err.code === "ECONNABORTED" ||
        (err.message || "").toLowerCase().includes("timeout")
      ) {
        setError(
          "⏳ The secure server is taking longer than expected to start. Please wait a few moments and try scanning again."
        );
      } else {
        setError(err.message || "Unable to analyze message.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <ScannerShell
      icon={MessageSquareWarning}
      title="AI Powered Message Scanner"
      description="Analyze suspicious emails, SMS messages, WhatsApp chats, and social media messages for phishing, scams, impersonation, and social engineering before taking action."
    >
      <form
        onSubmit={handleAnalyze}
        className="space-y-5"
      >
        <label className="block">
          <span className="mb-2 block text-sm font-medium text-slate-200">
            Message
          </span>

          <textarea
            rows="8"
            value={message}
            disabled={loading}
            onChange={(e) => {
              setMessage(e.target.value);
              setResult(null);
              setError("");
            }}
            placeholder="Paste an email, SMS, WhatsApp message, or suspicious text here..."
            className="w-full resize-none rounded border border-shield-line bg-shield-ink px-4 py-3 text-slate-100 outline-none transition placeholder:text-slate-600 focus:border-shield-cyan disabled:cursor-not-allowed"
          />

          <p className="mt-2 text-xs text-slate-500">
            Supported: Emails, SMS, WhatsApp messages, social media messages, and copied text.
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
              Analyzing Message...
            </>
          ) : (
            <>
              <Search className="h-4 w-4" />
              Scan Message
            </>
          )}
        </button>

        {loading && (
          <div className="mt-5 rounded-xl border border-shield-cyan/30 bg-shield-cyan/5 p-5">
            <div className="flex items-center gap-2">
              <LoaderCircle className="h-5 w-5 animate-spin text-shield-cyan" />

              <h3 className="text-base font-semibold text-shield-cyan">
                Starting Secure Analysis...
              </h3>
            </div>

            <div className="mt-4 space-y-2 text-sm text-slate-300">
              <p>
                {getStepIcon(1)} Connecting to ShieldScan Security Engine...
              </p>

              <p>
                {getStepIcon(2)} Initializing Threat Detection Modules...
              </p>

              <p>
                {getStepIcon(3)} Preparing Secure Cloud Server...
              </p>

              <p>
                {getStepIcon(4)} Waiting for Secure Analysis...
              </p>
            </div>

            {loadingStep >= 3 && (
              <div className="mt-4 rounded-lg border border-yellow-500/20 bg-yellow-500/10 p-3">
                <p className="text-xs text-yellow-300">
                  ℹ️ The first scan after a period of inactivity may take up to{" "}
                  <strong>1 minute</strong> while the secure server starts.
                </p>
              </div>
            )}

            <p className="mt-3 animate-pulse text-sm text-slate-400">
              Please wait while your request is being processed...
            </p>
          </div>
        )}
      </form>

      <ResultCard result={result} />
    </ScannerShell>
  );
}