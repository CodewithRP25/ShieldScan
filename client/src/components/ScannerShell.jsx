export default function ScannerShell({ icon: Icon, title, description, children }) {
  return (
    <section className="scanline w-full rounded-2xl border border-white/10 bg-white/[0.035] p-6 shadow-glass backdrop-blur-xl sm:p-8">
      <div className="grid w-full gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-shield-cyan/35 bg-shield-cyan/10 shadow-glow">
            <Icon className="h-7 w-7 text-shield-cyan" aria-hidden="true" />
          </div>
          <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl">{title}</h1>
          <p className="mt-4 max-w-xl text-slate-300">{description}</p>
        </div>
        <div className="relative z-10 rounded-xl border border-white/10 bg-shield-panel/80 p-5 shadow-glow backdrop-blur-xl sm:p-6">
          {children}
        </div>
      </div>
    </section>
  );
}
