import { AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="flex w-full items-center justify-center py-16 text-center">
      <div className="max-w-lg">
        <AlertTriangle className="mx-auto mb-5 h-12 w-12 text-shield-amber" aria-hidden="true" />
        <h1 className="text-4xl font-bold text-white">404</h1>
        <p className="mt-4 text-slate-300">The page you requested does not exist.</p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded bg-shield-cyan px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
        >
          Return Home
        </Link>
      </div>
    </section>
  );
}
