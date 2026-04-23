export function Projects() {
  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-slate-800/70 bg-slate-900/40 p-6">
        <h1 className="text-2xl font-bold text-slate-100">Projects</h1>
        <p className="mt-2 text-sm text-slate-300">
          Aquí puedes listar módulos del sistema (feed, comentarios, perfiles,
          moderación, etc.) o avances del equipo.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {[
          { name: "Muro / Feed", status: "En progreso" },
          { name: "Login / Perfil", status: "Base lista" },
          { name: "Tendencias / Tags", status: "Diseño" },
          { name: "Estado del Campus", status: "Mock" },
        ].map((p) => (
          <div
            key={p.name}
            className="rounded-2xl border border-slate-800/70 bg-slate-900/40 p-4"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-base font-semibold text-slate-100">{p.name}</h3>
              <span className="rounded-full bg-slate-800/70 px-3 py-1 text-xs font-semibold text-slate-200">
                {p.status}
              </span>
            </div>
            <div className="mt-2 text-sm text-slate-300">
              Descripción corta del módulo y objetivos del sprint.
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

