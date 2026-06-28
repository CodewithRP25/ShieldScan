import { useState } from "react";
import {
  MessageSquareWarning,
  Search,
  LoaderCircle
} from "lucide-react";
import ScannerShell from "../components/ScannerShell.jsx";
import ResultCard from "../components/ResultCard.jsx";
import { analyzeMessage } from "../services/messageService.js";

export default function MessageScanner() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

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

      setError(err.message || "Unable to analyze message.");

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
          <span className="mb-2 block text-sm font-medium text-slate-200">Message</span>
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
             Scanning Message...
            </>
          ) : (
            <>
              <Search className="h-4 w-4" />
              Scan Message
            </>
          )}

        </button>
      </form>
      <ResultCard result={result} />
    </ScannerShell>
  );
}
