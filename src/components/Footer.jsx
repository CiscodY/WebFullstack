export function Footer() {
  return (
    <footer className="border-t border-slate-800/70 bg-slate-950">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-4 py-6 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} ConfesionesUTP — Muro anónimo pa xd para la
          comunidad UTP.
        </p>
        <div className="flex items-center gap-3 text-sm">
          <span className="rounded-full bg-slate-900 px-3 py-1 text-slate-300">
            React
          </span>
          <span className="rounded-full bg-slate-900 px-3 py-1 text-slate-300">
            Tailwind
          </span>
          <span className="rounded-full bg-slate-900 px-3 py-1 text-slate-300">
            Router
          </span>
        </div>
      </div>
    </footer>
  );
}

