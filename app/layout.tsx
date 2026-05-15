import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DSCG UE1 — Révisions Gestion juridique',
  description: 'Plateforme de révision DSCG UE1 : cours, minijeux, suivi de progression',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
