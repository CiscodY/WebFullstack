import { NavLink, useNavigate } from "react-router-dom";
import { useMemo, useState } from "react";

const navLinkClass = ({ isActive }) =>
  [
    "rounded-md px-3 py-2 text-sm font-medium transition",
    isActive
      ? "bg-slate-800 text-white"
      : "text-slate-200 hover:bg-slate-900 hover:text-white",
  ].join(" ");

export function NavBar() {
  const [q, setQ] = useState("");
  const navigate = useNavigate();

  const links = useMemo(
    () => [
      { to: "/", label: "Inicio" },
      { to: "/projects", label: "Proyectos" },
      { to: "/contacts", label: "Contactos" },
      { to: "/about", label: "About" },
    ],
    []
  );

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/70 bg-slate-950/75 backdrop-blur">
      <div className="mx-auto flex w-full max-w-7xl items-center gap-3 px-4 py-3">
        <button
          type="button"
          onClick={() => navigate("/")}
          className="flex items-center gap-2 rounded-lg px-2 py-1 hover:bg-slate-900"
          aria-label="Ir al inicio"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white text-xs font-black text-slate-950">
            UTP
          </span>
          <span className="text-base font-semibold tracking-tight text-orange-400">
            ConfesionesUTP
          </span>
        </button>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={navLinkClass}
              end={l.to === "/"}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="ml-auto flex w-full max-w-xl items-center gap-2">
          <div className="relative w-full">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Buscar..."
              className="w-full rounded-xl border border-slate-800 bg-slate-900/60 px-4 py-2 text-sm text-slate-100 placeholder:text-slate-400 outline-none ring-orange-400/30 focus:ring-2"
            />
            <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">
              ⌕
            </div>
          </div>

          <NavLink
            to="/login"
            className="rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-orange-400"
          >
            Perfil
          </NavLink>
        </div>
      </div>
    </header>
  );
}

