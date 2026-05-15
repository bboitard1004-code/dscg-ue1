# DSCG UE1 — App de révision

Application web Next.js + Supabase pour réviser le **DSCG UE1 — Gestion juridique, fiscale et sociale**.

## Fonctionnalités

- 🔐 **Authentification** via Supabase (email + mot de passe)
- 📊 **Tableau de bord** : score de connaissance, flamme de série quotidienne (style Duolingo), calendrier d'activité, records
- 📚 **Cours** : un PDF téléchargeable par thème + plan détaillé des sous-thèmes
- 🎮 **Minijeux** : ~270 questions au total réparties sur 4 thèmes — QCM, Vrai/Faux, Flashcards, Associations
- 🎯 Filtrage par thème / sous-thème / type de minijeu
- 🔥 Persistance de la progression et série journalière

## Stack

- **Next.js 14** (App Router) + TypeScript + Tailwind CSS
- **Supabase** (auth + base + RLS)
- **Vercel** pour l'hébergement
- **Lucide-react** pour les icônes
- Fontes : **Manrope** (display) + **Inter** (sans)

## Palette

Le code couleur est désormais **bleu marine & blanc**. Variantes navy 50 → 950, sky 50 → 500, ink (gris froids). Seule la flamme conserve l'orange (#f97316), comme accent rare.

## Démarrage local

```bash
npm install
cp .env.local.example .env.local
# renseigner NEXT_PUBLIC_SUPABASE_URL et NEXT_PUBLIC_SUPABASE_ANON_KEY
npm run dev
```

## Mise en place Supabase

1. Créer un projet sur [supabase.com](https://supabase.com)
2. Dans **Authentication > Providers**, activer le provider Email
3. **Authentication > Settings** : décocher l'option « Confirm email » pour le développement local (sinon les nouveaux comptes doivent confirmer leur email)
4. Ouvrir **SQL Editor** et exécuter le contenu de `supabase/schema.sql` (crée les 3 tables avec RLS)
5. Récupérer **Project URL** et **anon public key** dans **Settings > API**, les coller dans `.env.local`

## Déploiement Vercel

1. Pusher le code sur un dépôt Git (GitHub, GitLab…)
2. Importer le projet dans [Vercel](https://vercel.com)
3. Ajouter les 2 variables d'environnement :
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Déployer 🚀

## Structure des thèmes (4 PDFs source)

| # | Thème | Sous-thèmes |
|---|-------|-------------|
| 1 | L'entreprise et son environnement | Contrats · Concurrence · PI · Pénal · Fiscalité & RSE |
| 2 | Droit des sociétés approfondi | Règles communes · Formes (SARL/SA/SAS/SCA/SNC) · Dirigeants · Associés · Contrôle · Restructurations |
| 3 | Pérennité, transmission, droit social et fiscalité de groupe | Entreprise en difficulté · Transmission (Dutreil) · Droit social et fiscalité de groupe |
| 4 | Associations, fondations, fonds de dotation | Associations · Fiscalité asso · Fondations · Mécénat |

## Structure du code

```
app/
  auth/login         — Page de connexion (split bleu / blanc)
  api/progress       — Calcul de la série côté serveur
  (app)/
    dashboard        — Tableau de bord
    cours/[theme]    — Page cours + plan + PDF
    jeux/[theme]     — Picker de minijeux et écran de jeu
components/
  Sidebar.tsx        — Bandeau latéral gauche (navy)
  FlameStreak.tsx    — Flamme animée orange sur fond clair
  KnowledgeScore.tsx — Cercle de progression bleu
  ActivityCalendar.tsx — Calendrier mensuel
  GameClient.tsx     — QCM, V/F, Flashcards, Associations
lib/
  themes.ts          — Définition des 4 thèmes et sous-thèmes
  questions/*.ts     — Banques de questions par thème
  questions.ts       — Agrégateur
  supabase-*.ts      — Clients Supabase (server / browser)
public/data/         — Les 4 PDFs téléchargeables
supabase/schema.sql  — Schéma SQL à exécuter
```

## Ajouter une autre UE (futur)

Pour ajouter par exemple l'UE2, dupliquer le pattern dans `lib/themes.ts` (un fichier par UE, avec ses sous-thèmes) et créer les banques de questions correspondantes dans `lib/questions/`. Ajouter ensuite un sélecteur d'UE dans la sidebar.

## Notes

- Les questions sont **fidèles aux PDFs source** : articles (Code civil, Code de commerce, CGI…), jurisprudences (Baldus, Chronopost, Canal de Craponne, Cruz, Manoukian, Schumann-Picard, Vitama, Seusse, Molex, Rozenblum…), montants exacts (IS 25%, franchise associations 76 679 €, pacte Dutreil 75%, mécénat 60%/40%, etc.).
- Le calcul du **score de connaissance** est simplifié : 2 points par bonne réponse, plafonné à 100.
- Le calcul du **streak** se fait côté serveur (`/api/progress`) après chaque réponse, avec gestion du décalage horaire UTC.

Bonnes révisions ! 🎓
