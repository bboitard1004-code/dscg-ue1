'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Home, BookOpen, Gamepad2, LogOut, Scale, Building2, Network, HeartHandshake, GraduationCap } from 'lucide-react';
import { THEMES } from '@/lib/themes';
import { createClient } from '@/lib/supabase-browser';

const ICONS: Record<string, any> = { Scale, Building2, Network, HeartHandshake };

export default function Sidebar({ email }: { email?: string }) {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClient();

  const logout = async () => {
    await supabase.auth.signOut();
    router.push('/auth/login');
    router.refresh();
  };

  return (
    <aside className="w-72 shrink-0 h-screen sticky top-0 bg-navy-900 text-white flex flex-col">
      <div className="px-6 pt-6 pb-5 border-b border-white/10">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-white text-navy-900 flex items-center justify-center">
            <GraduationCap size={20} />
          </div>
          <div>
            <p className="display text-lg font-bold leading-none">DSCG <span className="text-sky-200">UE1</span></p>
            <p className="text-[10px] uppercase tracking-widest text-sky-200/60 mt-0.5">Gestion juridique</p>
          </div>
        </div>
      </div>

      <nav className="px-3 py-4 flex-1 overflow-y-auto">
        <NavLink href="/dashboard" current={pathname === '/dashboard'} icon={<Home size={17} />}>
          Tableau de bord
        </NavLink>

        <p className="px-3 pt-5 pb-2 text-[10px] uppercase tracking-widest text-sky-200/45">Thèmes</p>

        {THEMES.map(t => {
          const Icon = ICONS[t.icon] || BookOpen;
          const active = pathname.includes(`/${t.id}`);
          return (
            <div key={t.id} className="mb-1">
              <Link
                href={`/cours/${t.id}`}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                  active ? 'bg-white/10 text-white' : 'text-sky-100/70 hover:bg-white/5 hover:text-white'
                }`}
              >
                <span className="w-7 h-7 rounded-md flex items-center justify-center bg-white/10 text-white">
                  <Icon size={15} />
                </span>
                <span className="flex-1 leading-tight min-w-0">
                  <span className="block font-semibold text-[13px]">Thème {t.number}</span>
                  <span className="block text-[10.5px] text-sky-100/55 truncate">{t.title}</span>
                </span>
              </Link>
              {active && (
                <div className="ml-10 mt-1 mb-2 space-y-0.5">
                  <Link href={`/cours/${t.id}`} className={`flex items-center gap-2 px-2 py-1 rounded text-xs ${pathname === `/cours/${t.id}` ? 'text-sky-200' : 'text-sky-100/60 hover:text-white'}`}>
                    <BookOpen size={12} /> Cours
                  </Link>
                  <Link href={`/jeux/${t.id}`} className={`flex items-center gap-2 px-2 py-1 rounded text-xs ${pathname === `/jeux/${t.id}` ? 'text-sky-200' : 'text-sky-100/60 hover:text-white'}`}>
                    <Gamepad2 size={12} /> Minijeux
                  </Link>
                </div>
              )}
            </div>
          );
        })}
      </nav>

      <div className="p-4 border-t border-white/10 space-y-2">
        {email && (
          <div className="text-[11px] text-sky-200/60 truncate" title={email}>{email}</div>
        )}
        <button onClick={logout} className="flex items-center gap-2 text-xs text-sky-200/70 hover:text-white transition">
          <LogOut size={14} /> Déconnexion
        </button>
      </div>
    </aside>
  );
}

function NavLink({ href, current, icon, children }: { href: string; current: boolean; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <Link href={href} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
      current ? 'bg-white text-navy-900 font-semibold' : 'text-sky-100/80 hover:bg-white/5 hover:text-white'
    }`}>
      {icon}
      <span>{children}</span>
    </Link>
  );
}
