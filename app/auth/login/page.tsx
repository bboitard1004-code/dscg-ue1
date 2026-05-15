'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase-browser';
import { Scale, GraduationCap, Sparkles, BookOpen, Flame, Calendar } from 'lucide-react';

export default function LoginPage() {
  const router = useRouter();
  const supabase = createClient();
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true); setErr(null); setMsg(null);
    try {
      if (mode === 'signup') {
        const { error } = await supabase.auth.signUp({ email, password });
        if (error) throw error;
        setMsg("Compte créé ! Vérifiez votre email pour confirmer (si activé), sinon connectez-vous.");
        setMode('signin');
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        router.push('/dashboard');
        router.refresh();
      }
    } catch (e: any) { setErr(e.message); }
    finally { setLoading(false); }
  };

  return (
    <main className="min-h-screen flex">
      {/* Left panel — bleu marine avec illustration */}
      <div className="hidden lg:flex w-1/2 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 text-white p-12 flex-col justify-between relative overflow-hidden">
        <div className="absolute inset-0 subtle-grid opacity-20" />
        <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-sky-400/15 blur-3xl pointer-events-none" />
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-sky-200/10 blur-3xl pointer-events-none" />

        <div className="relative z-10 flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-white text-navy-900 flex items-center justify-center">
            <GraduationCap size={22} />
          </div>
          <div>
            <p className="display text-xl font-bold leading-none">DSCG UE1</p>
            <p className="text-[11px] uppercase tracking-widest text-sky-200/70 mt-1">Gestion juridique, fiscale et sociale</p>
          </div>
        </div>

        <div className="relative z-10 max-w-md">
          <h1 className="display text-5xl font-extrabold leading-[1.05]">
            Le droit des affaires<br />
            <span className="text-sky-200">au bout des doigts.</span>
          </h1>
          <p className="text-sky-100/80 mt-6 leading-relaxed text-[15px]">
            Cours téléchargeables, minijeux par thème, suivi quotidien et série de flammes pour ne plus jamais lâcher.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-3">
            <Feature icon={<BookOpen size={16} />} label="4 thèmes complets" />
            <Feature icon={<Sparkles size={16} />} label="200+ minijeux" />
            <Feature icon={<Flame size={16} />} label="Séries quotidiennes" />
            <Feature icon={<Calendar size={16} />} label="Suivi visuel" />
          </div>
        </div>

        <div className="relative z-10 text-[11px] uppercase tracking-widest text-sky-200/50">
          Sessions 2025 — 2026
        </div>
      </div>

      {/* Right panel — login */}
      <div className="flex-1 flex items-center justify-center p-8 bg-white">
        <div className="w-full max-w-sm">
          <h2 className="display text-3xl font-bold mb-2 text-navy-900">{mode === 'signin' ? 'Connexion' : 'Créer un compte'}</h2>
          <p className="text-sm text-ink-500 mb-8">
            {mode === 'signin' ? 'Connectez-vous pour reprendre vos révisions.' : 'Démarrez votre parcours DSCG UE1.'}
          </p>

          <form onSubmit={submit} className="space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-widest text-ink-500 mb-1.5">Email</label>
              <input
                type="email" required value={email} onChange={e => setEmail(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg bg-white border border-ink-200 focus:border-navy-500 focus:ring-2 focus:ring-navy-500/15 outline-none transition"
              />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-widest text-ink-500 mb-1.5">Mot de passe</label>
              <input
                type="password" required minLength={6} value={password} onChange={e => setPassword(e.target.value)}
                className="w-full px-4 py-2.5 rounded-lg bg-white border border-ink-200 focus:border-navy-500 focus:ring-2 focus:ring-navy-500/15 outline-none transition"
              />
            </div>
            {err && <p className="text-sm text-red-700 bg-red-50 border border-red-200 px-3 py-2 rounded">{err}</p>}
            {msg && <p className="text-sm text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-2 rounded">{msg}</p>}
            <button type="submit" disabled={loading} className="btn-primary w-full disabled:opacity-50">
              {loading ? '…' : mode === 'signin' ? 'Se connecter' : 'Créer le compte'}
            </button>
          </form>

          <button onClick={() => setMode(mode === 'signin' ? 'signup' : 'signin')} className="mt-6 text-sm text-ink-500 hover:text-navy-700 transition">
            {mode === 'signin' ? "Pas encore de compte ? S'inscrire" : 'Déjà un compte ? Se connecter'}
          </button>
        </div>
      </div>
    </main>
  );
}

function Feature({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2 text-sm text-sky-100/85">
      <span className="w-7 h-7 rounded-md bg-white/10 flex items-center justify-center">{icon}</span>
      <span>{label}</span>
    </div>
  );
}
