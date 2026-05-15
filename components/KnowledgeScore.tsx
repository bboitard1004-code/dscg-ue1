'use client';

export default function KnowledgeScore({ score, totalAnswered, correctRate }: { score: number; totalAnswered: number; correctRate: number }) {
  const pct = Math.min(100, score);
  const r = 56;
  const c = 2 * Math.PI * r;
  const dash = (pct / 100) * c;

  return (
    <div className="card p-5">
      <div className="flex items-center gap-5">
        <svg width="140" height="140" viewBox="0 0 140 140">
          <circle cx="70" cy="70" r={r} fill="none" stroke="#e2eaf6" strokeWidth="12" />
          <circle
            cx="70" cy="70" r={r} fill="none" stroke="#2563b2"
            strokeWidth="12" strokeLinecap="round"
            strokeDasharray={`${dash} ${c}`}
            transform="rotate(-90 70 70)"
          />
          <text x="70" y="68" textAnchor="middle" className="display" style={{ fontSize: 30, fontWeight: 800, fill: '#0a1c3e' }}>
            {Math.round(pct)}
          </text>
          <text x="70" y="86" textAnchor="middle" style={{ fontSize: 10, letterSpacing: '0.2em', textTransform: 'uppercase', fill: '#64748b' }}>
            /100
          </text>
        </svg>
        <div className="flex-1">
          <p className="text-[11px] uppercase tracking-widest text-ink-500">Score de connaissance</p>
          <p className="display text-2xl font-bold leading-tight mt-1 text-navy-900">{Math.round(pct)}/100</p>
          <div className="mt-3 space-y-1.5">
            <Row label="Questions répondues" value={totalAnswered} />
            <Row label="Taux de réussite" value={`${Math.round(correctRate)}%`} />
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value }: { label: string; value: any }) {
  return (
    <div className="flex justify-between text-xs">
      <span className="text-ink-500">{label}</span>
      <span className="font-semibold text-navy-900">{value}</span>
    </div>
  );
}
