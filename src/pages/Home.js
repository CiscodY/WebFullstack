import { Card } from "../components/Card";

const samplePosts = [
  {
    id: 1,
    title: "¿Qué ocurrio hoy en el campus? Confiesa de forma anónima…",
    body: "Cuéntalo sin miedo. Nadie verá tu identidad y la comunidad podrá reaccionar y comentar.",
    tags: ["#Anónimo", "#Urgente"],
    metaLeft: "Usuario •",
    metaRight: "Hace 3 semanas",
  },
  {
    id: 2,
    title: "Storytime: Mi grupo me dejó solo en el proyecto final",
    body: "No sé si reír o llorar. Si alguien ha pasado por algo parecido, necesito consejos.",
    tags: ["#Tragedia", "#Proyectos", "#GenteSinAlma"],
    metaLeft: "Usuario 2 •",
    metaRight: "Hace 3 días",
  },
  {
    id: 3,
    title: "¿Cuál es el peor pabellón para clases a las 8:00 AM?",
    body: "Entre el calor, el ruido y los ascensores… ¿cuál te toca sufrir más?",
    tags: ["#Debate"],
    metaLeft: "Usuario 3 •",
    metaRight: "Hace 1 semana",
  },
];

function SideCard({ title, children }) {
  return (
    <section className="rounded-2xl border border-slate-800/70 bg-slate-900/40 p-4">
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-sm font-semibold text-slate-100">{title}</h4>
        <span className="text-slate-400">→</span>
      </div>
      <div className="text-sm text-slate-300">{children}</div>
    </section>
  );
}

export function Home() {
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
      {/* Left rail */}
      <aside className="lg:col-span-3">
        <div className="space-y-3">
          <div className="rounded-2xl border border-slate-800/70 bg-slate-900/40 p-4">
            <div className="mb-3 flex items-center justify-between">
              <h4 className="text-sm font-semibold text-slate-100">Nuevo</h4>
              <span className="text-xs text-slate-400">+ Crear</span>
            </div>
            <div className="space-y-2 text-sm">
              <button className="w-full rounded-xl bg-slate-800/60 px-3 py-2 text-left text-slate-200 hover:bg-slate-800">
                Publicaciones populares
              </button>
              <button className="w-full rounded-xl bg-slate-800/30 px-3 py-2 text-left text-slate-200 hover:bg-slate-800">
                Siguiendo <span className="ml-2 rounded-full bg-orange-500 px-2 py-0.5 text-xs font-bold text-slate-950">24</span>
              </button>
            </div>
          </div>

          <SideCard title="Tendencia">
            <ul className="space-y-2">
              {["#AmorYDesamor", "#QuejasAcadémicas", "#ChismesDePasillo", "#AnécdotasCiclo", "#BuscoCrush"].map(
                (t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded bg-slate-800" />
                    <span className="text-slate-300">{t}</span>
                  </li>
                )
              )}
            </ul>
          </SideCard>
        </div>
      </aside>

      {/* Feed */}
      <section className="lg:col-span-6">
        <div className="mb-4 flex items-center gap-3 rounded-2xl border border-slate-800/70 bg-slate-900/40 p-3">
          <div className="h-10 w-10 rounded-full bg-slate-800" />
          <input
            placeholder="Escribe tu confesión"
            className="flex-1 rounded-xl border border-slate-800 bg-slate-950/40 px-4 py-2 text-sm text-slate-100 placeholder:text-slate-400 outline-none ring-orange-400/30 focus:ring-2"
          />
          <button className="rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-orange-400">
            Create Post
          </button>
        </div>

        <div className="space-y-4">
          {samplePosts.map((p) => (
            <Card
              key={p.id}
              title={p.title}
              body={p.body}
              tags={p.tags}
              metaLeft={p.metaLeft}
              metaRight={p.metaRight}
              action="Me gusta"
            />
          ))}
        </div>
      </section>

      {/* Right rail */}
      <aside className="lg:col-span-3">
        <div className="space-y-3">
          <SideCard title="Estado del Ciclo">
            <div className="space-y-3">
              {[
                { week: 4, label: "Semana de Parciales" },
                { week: 8, label: "Entrega de Proyectos Finales" },
                { week: 12, label: "Sustentaciones" },
              ].map((x) => (
                <div key={x.week} className="flex items-center justify-between gap-3 rounded-xl bg-slate-800/40 px-3 py-2">
                  <div className="text-xs text-slate-400">Semana</div>
                  <div className="text-lg font-bold text-orange-400">{x.week}</div>
                  <div className="text-xs text-slate-200">{x.label}</div>
                </div>
              ))}
            </div>
          </SideCard>

          <SideCard title="Estado del Campus">
            <div className="space-y-2 text-sm">
              {[
                { place: "Cafetería Central", note: "Cola infinita, mejor ir luego." },
                { place: "Biblioteca (Piso 3)", note: "Hay cubículos libres y está en silencio." },
                { place: "Ascensores sede Arequipa", note: "Fuera de servicio. Toca usar escaleras." },
                { place: "Laboratorio C0407", note: "Clase cancelada, computadoras libres." },
              ].map((x) => (
                <div key={x.place} className="rounded-xl bg-slate-800/30 px-3 py-2">
                  <div className="font-semibold text-slate-200">{x.place}</div>
                  <div className="text-xs text-slate-400">{x.note}</div>
                </div>
              ))}
            </div>
          </SideCard>
        </div>
      </aside>
    </div>
  );
}

