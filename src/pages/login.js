import { useState } from "react";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState("login");

  const title = mode === "login" ? "Iniciar sesión" : "Crear cuenta";

  return (
    <div className="mx-auto grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
      <section className="rounded-2xl border border-slate-800/70 bg-slate-900/40 p-6">
        <h1 className="text-2xl font-bold text-slate-100">{title}</h1>
        <p className="mt-2 text-sm text-slate-300">
          Accede para personalizar tu perfil, guardar favoritos y participar en la
          comunidad.
        </p>

        <form
          className="mt-6 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            // Demo UI: sin backend todavía
            alert("Demo: autenticación pendiente (solo UI).");
          }}
        >
          <label className="block text-sm">
            <span className="text-slate-300">Correo</span>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              required
              placeholder="tu@utp.edu.pe"
              className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-950/40 px-4 py-2 text-sm text-slate-100 placeholder:text-slate-500 outline-none ring-orange-400/30 focus:ring-2"
            />
          </label>

          <label className="block text-sm">
            <span className="text-slate-300">Contraseña</span>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
              placeholder="••••••••"
              className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-950/40 px-4 py-2 text-sm text-slate-100 placeholder:text-slate-500 outline-none ring-orange-400/30 focus:ring-2"
            />
          </label>

          <button
            type="submit"
            className="w-full rounded-xl bg-orange-500 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-orange-400"
          >
            {title}
          </button>

          <div className="text-center text-sm text-slate-400">
            {mode === "login" ? (
              <>
                ¿No tienes cuenta?{" "}
                <button
                  type="button"
                  onClick={() => setMode("signup")}
                  className="font-semibold text-orange-400 hover:underline"
                >
                  Regístrate
                </button>
              </>
            ) : (
              <>
                ¿Ya tienes cuenta?{" "}
                <button
                  type="button"
                  onClick={() => setMode("login")}
                  className="font-semibold text-orange-400 hover:underline"
                >
                  Inicia sesión
                </button>
              </>
            )}
          </div>
        </form>
      </section>

      <section className="rounded-2xl border border-slate-800/70 bg-slate-900/40 p-6">
        <h2 className="text-lg font-semibold text-slate-100">
          Reglas rápidas del muro
        </h2>
        <ul className="mt-3 space-y-2 text-sm text-slate-300">
          <li className="rounded-xl bg-slate-950/40 px-3 py-2">
            Respeta a los demás: nada de doxxing ni ataques.
          </li>
          <li className="rounded-xl bg-slate-950/40 px-3 py-2">
            Evita compartir datos personales.
          </li>
          <li className="rounded-xl bg-slate-950/40 px-3 py-2">
            Usa tags para llegar a más personas.
          </li>
        </ul>

        <div className="mt-6 rounded-2xl bg-gradient-to-br from-orange-500/15 to-slate-950/10 p-4">
          <div className="text-sm font-semibold text-orange-400">
            Tip del día
          </div>
          <div className="mt-1 text-sm text-slate-200">
            Una confesión corta y clara genera más interacción.
          </div>
        </div>
      </section>
    </div>
  );
}

