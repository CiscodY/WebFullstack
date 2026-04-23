export function About() {
  return (
    <div className="rounded-2xl border border-slate-800/70 bg-slate-900/40 p-6">
      <h1 className="text-2xl font-bold text-slate-100">Sobre ConfesionesUTP</h1>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
        Un muro social inspirado en la vida universitaria: confesiones, historias,
        quejas académicas, chismes de pasillo y debates sanos entre estudiantes.
        La idea es fomentar interacción con un diseño moderno y una experiencia
        simple.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        {[
          {
            title: "Anónimo (opcional)",
            desc: "Comparte sin exponer tu identidad; la app prioriza seguridad y respeto.",
          },
          {
            title: "Interacción",
            desc: "Reacciones, comentarios y tendencias para descubrir temas del momento.",
          },
          {
            title: "Campus vibes",
            desc: "Widgets y estado del campus para darle contexto a la comunidad UTP.",
          },
        ].map((x) => (
          <div
            key={x.title}
            className="rounded-2xl border border-slate-800/70 bg-slate-950/40 p-4"
          >
            <div className="text-sm font-semibold text-orange-400">{x.title}</div>
            <div className="mt-2 text-sm text-slate-300">{x.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

