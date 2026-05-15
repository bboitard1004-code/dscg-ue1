import Sidebar from '@/components/Sidebar';
import { createClient } from '@/lib/supabase-server';
import { redirect } from 'next/navigation';

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const supabase = createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect('/auth/login');

  return (
    <div className="flex min-h-screen bg-ink-50">
      <Sidebar email={user.email ?? undefined} />
      <main className="flex-1 min-w-0">{children}</main>
    </div>
  );
}
