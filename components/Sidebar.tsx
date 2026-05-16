'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Home, BookOpen, Gamepad2, LogOut, Scale, Building2, Network, HeartHandshake, GraduationCap, Menu, X } from 'lucide-react';
import { THEMES } from '@/lib/themes';
import { createClient } from '@/lib/supabase-browser';

const ICONS: Record<string, any> = { Scale, Building2, Network, HeartHandshake };

export default function Sidebar({ email }: { email?: string }) {
  const pathname = usePathname();
  const router = useRouter();
  const supabase = createClient();
  const [open, setOpen] = useState(false);

  const logout = async () => {
    await supabase.auth.signOut();
    router.push('/auth/login');
    router.refresh();
  };

  const close = () => setOpen(false);

  return (
    <>
      <header className="lg:hidden sticky top-0 z-40 bg-navy-900 text-white px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-white text-navy-900 flex items-center justify-center">
            <GraduationCap size={18} />
          </div>
          <p className="display text-base font-bold">DSCG <span className="text-sky-200">UE1</span></p>
        </div>
        <button onClick={() => setOpen(true)} className="p-2 -mr-2 rounded-md hover:bg-white/10" aria-label="Ouvrir le menu">
          <Menu size={22} />
        </button>
      </header>

      {open && (
        <div className="lg:hidden fixed inset-0 z-50 flex" role="dialog">
          <div className="absolute inset-0 bg-black/50" onClick={close} />
          <aside className="relative w-80 max-w-[85vw] bg-navy-900 text-white flex flex-col">
            <SidebarBody pathname={pathname} email={email} onNavigate={close} onLogout={logout} closable closeFn={close} />
          </aside>
        </div>
      )}

      <aside className="hidden lg:flex w-72 shrink-0 h-screen sticky top-0 bg-navy-900 text-white flex-col">
        <SidebarBody pathname={pathname} email={email} onLogout={logout} />
      </aside>
    </>
  );
}

function SidebarBody({ pathname, email, onNavigate, onLogout, closable, closeFn }: any) {
  return (
    <>
      <div className="px-6 pt-6 pb-5 border-b border-white/10 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-white text-navy-900 flex items-center justify-center">
            <GraduationCap size={20} />
          </div>
          <div>
            <p className="display text-lg font-bold leading-none">DSCG <span className="text-sky-200">UE1</span></p>
            <p className="text-[10px] uppercase tracking-widest text-sky-200/60 mt-0.5">Gestion juridique</p>
          </div>
        </div>
        {closable && (
          <button onClick={closeFn} className="p-1.5 rounded-md hover:bg-white/10" aria-label="Fermer">
            <X size={18} />
          </button>
        )}
      </div>

      <nav className="px-3 py-4 flex-1 overflow-y-auto">
        <NavLink href="/dashboard" current={pathname === '/dashboard'} icon={<Home size={17} />} onNavigate={onNavigate}>
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
                onClick={onNavigate}
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
                  <Link href={`/cours/${t.id}`} onClick={onNavigate} className={`flex items-center gap-2 px-2 py-1 rounded text-xs ${pathname === `/cours/${t.id}` ? 'text-sky-200' : 'text-sky-100/60 hover:text-white'}`}>
                    <BookOpen size={12} /> Cours
                  </Link>
                  <Link href={`/jeux/${t.id}`} onClick={onNavigate} className={`flex items-center gap-2 px-2 py-1 rounded text-xs ${pathname === `/jeux/${t.id}` ? 'text-sky-200' : 'text-sky-100/60 hover:text-white'}`}>
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
        <button onClick={onLogout} className="flex items-center gap-2 text-xs text-sky-200/70 hover:text-white transition">
          <LogOut size={14} /> Déconnexion
        </button>
      </div>
    </>
  );
}

function NavLink({ href, current, icon, children, onNavigate }: any) {
  return (
    <Link href={href} onClick={onNavigate} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
      current ? 'bg-white text-navy-900 font-semibold' : 'text-sky-100/80 hover:bg-white/5 hover:text-white'
    }`}>
      {icon}
      <span>{children}</span>
    </Link>
  );
}