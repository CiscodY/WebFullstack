export function Card({
  title,
  body,
  tags = [],
  metaLeft,
  metaRight,
  action,
}) {
  return (
    <article className="rounded-2xl border border-slate-800/70 bg-slate-900/40 p-4 shadow-sm">
      <div className="flex items-start gap-3">
        <div className="h-10 w-10 shrink-0 rounded-full bg-slate-800" />
        <div className="min-w-0 flex-1">
          <h3 className="truncate text-base font-semibold text-slate-100">
            {title}
          </h3>
          {body ? (
            <p className="mt-1 line-clamp-2 text-sm text-slate-300">{body}</p>
          ) : null}

          {tags?.length ? (
            <div className="mt-3 flex flex-wrap gap-2">
              {tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-slate-800/70 px-3 py-1 text-xs font-medium text-slate-200"
                >
                  {t}
                </span>
              ))}
            </div>
          ) : null}

          <div className="mt-4 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 text-xs text-slate-400">
              <span>{metaLeft}</span>
              <span className="hidden md:inline">{metaRight}</span>
            </div>
            {action ? (
              <button
                type="button"
                className="rounded-xl bg-slate-800 px-3 py-2 text-xs font-semibold text-slate-100 hover:bg-slate-700"
              >
                {action}
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}

