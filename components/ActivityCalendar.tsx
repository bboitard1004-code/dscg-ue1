'use client';
import { useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ActivityCalendar({ activeDays }: { activeDays: string[] }) {
  const [cursor, setCursor] = useState(new Date());

  const { weeks, monthLabel } = useMemo(() => {
    const y = cursor.getFullYear();
    const m = cursor.getMonth();
    const first = new Date(y, m, 1);
    const startDay = (first.getDay() + 6) % 7;
    const daysInMonth = new Date(y, m + 1, 0).getDate();
    const cells: ({ d: number; iso: string } | null)[] = [];
    for (let i = 0; i < startDay; i++) cells.push(null);
    for (let d = 1; d <= daysInMonth; d++) {
      const iso = `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      cells.push({ d, iso });
    }
    while (cells.length % 7 !== 0) cells.push(null);
    const weeks = [];
    for (let i = 0; i < cells.length; i += 7) weeks.push(cells.slice(i, i + 7));
    const monthLabel = cursor.toLocaleString('fr-FR', { month: 'long', year: 'numeric' });
    return { weeks, monthLabel };
  }, [cursor]);

  const todayIso = new Date().toISOString().slice(0, 10);
  const activeSet = new Set(activeDays);

  return (
    <div className="card p-5">
      <div className="flex items-center justify-between mb-4">
        <p className="display text-lg font-bold capitalize text-navy-900">{monthLabel}</p>
        <div className="flex items-center gap-1">
          <button onClick={() => setCursor(new Date(cursor.getFullYear(), cursor.getMonth() - 1, 1))} className="p-1.5 rounded hover:bg-ink-100">
            <ChevronLeft size={16} className="text-navy-700" />
          </button>
          <button onClick={() => setCursor(new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1))} className="p-1.5 rounded hover:bg-ink-100">
            <ChevronRight size={16} className="text-navy-700" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-1.5 text-[10px] uppercase tracking-wider text-ink-400 mb-1">
        {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((d, i) => (
          <div key={i} className="text-center">{d}</div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1.5">
        {weeks.flat().map((cell, i) => {
          if (!cell) return <div key={i} className="aspect-square" />;
          const isToday = cell.iso === todayIso;
          const isActive = activeSet.has(cell.iso);
          return (
            <div
              key={i}
              className={`aspect-square rounded-lg flex items-center justify-center text-xs font-medium relative ${
                isActive ? 'bg-navy-700 text-white shadow-sm'
                : isToday ? 'bg-sky-100 text-navy-900 ring-2 ring-navy-500/60'
                : 'bg-transparent text-ink-700 hover:bg-ink-100'
              }`}
            >
              {cell.d}
              {isActive && <span className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 rounded-full bg-orange-400" />}
            </div>
          );
        })}
      </div>
      <div className="mt-4 flex items-center gap-3 text-[11px] text-ink-500">
        <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded bg-navy-700 inline-block" /> Jour étudié</span>
        <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded bg-sky-100 inline-block" /> Aujourd'hui</span>
      </div>
    </div>
  );
}
