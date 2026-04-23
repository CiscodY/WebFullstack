export function Contacts() {
  return (
    <div className="rounded-2xl border border-slate-800/70 bg-slate-900/40 p-6">
      <h1 className="text-2xl font-bold text-slate-100">Contacts</h1>
      <p className="mt-2 text-sm text-slate-300">
        Página para información del equipo, soporte o enlaces del proyecto.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-800/70 bg-slate-950/40 p-4">
          <div className="text-sm font-semibold text-orange-400">Correo</div>
          <div className="mt-1 text-sm text-slate-300">
            soporte@confesionesutp.pe
          </div>
        </div>
        <div className="rounded-2xl border border-slate-800/70 bg-slate-950/40 p-4">
          <div className="text-sm font-semibold text-orange-400">Redes</div>
          <div className="mt-1 text-sm text-slate-300">
            Instagram / TikTok / Discord (por definir)
          </div>
        </div>
      </div>
    </div>
  );
}

