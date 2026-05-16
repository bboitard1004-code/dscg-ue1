// Structure pédagogique DSCG UE1 — Gestion juridique, fiscale et sociale
// 4 parties (thèmes) avec sous-thèmes fidèles aux PDFs

export type SubTheme = {
  id: string;
  title: string;
  pages: number;
  chapters: string[];
};

export type Theme = {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  accent: string;
  pdfFile: string;
  icon: string;
  subThemes: SubTheme[];
};

// Palette dégradés bleus — différents nuances pour chaque thème
export const THEMES: Theme[] = [
  {
    id: 'theme-1',
    number: 1,
    title: "L'entreprise et son environnement",
    subtitle: "Contrats, concurrence, propriété intellectuelle, pénal des affaires, fiscalité & RSE",
    accent: '#173d75',
    pdfFile: 'https://tgwzenaizjyplztsgokj.supabase.co/storage/v1/object/public/pdfs/theme-1.pdf',
    icon: 'Scale',
    subThemes: [
      { id: 'contrats', title: 'Le droit des contrats', pages: 29,
        chapters: [
          'Réforme 2016/2018 — principes fondateurs',
          'Formation du contrat (négociation, avant-contrats, validité)',
          'Exécution (force obligatoire, imprévision)',
          'Inexécution (5 remèdes, force majeure)',
          'Contrats spéciaux (vente, entreprise, distribution, assurance)',
          'Contrats internationaux (Rome I, Bruxelles I bis, Incoterms, arbitrage)',
        ] },
      { id: 'concurrence', title: 'Le droit de la concurrence', pages: 17,
        chapters: [
          'Pratiques anticoncurrentielles (ententes, abus de position dominante)',
          'Abus de dépendance économique',
          'Contrôle des concentrations',
          'Pratiques restrictives (revente à perte, rupture brutale)',
          'Concurrence déloyale (4 actes)',
          'Autorités de régulation',
        ] },
      { id: 'pi', title: 'La propriété intellectuelle', pages: 15,
        chapters: [
          'Principes de la PI (INPI, EUIPO, OEB, OMPI)',
          'Le brevet (4 conditions, 20 ans)',
          'La marque (4 conditions, 10 ans renouvelable)',
          'Dessins, modèles et droit d\'auteur',
          'Contrefaçon et saisie-contrefaçon',
        ] },
      { id: 'penal', title: 'Le droit pénal des affaires', pages: 14,
        chapters: [
          'Principes (responsabilité PM 121-2, dirigeant, délégation)',
          'Infractions contre les biens (escroquerie, abus de confiance, faux)',
          'Infractions propres aux sociétés (ABS, comptes infidèles)',
          'Infractions financières et corruption (TRACFIN, Sapin II, CJIP)',
        ] },
      { id: 'fiscal', title: 'Fiscalité de l\'entreprise et environnement', pages: 15,
        chapters: [
          'Fiscalité (IS 25%, TVA, impôts locaux, intégration)',
          'Le contrôle fiscal (procédures, garanties, sanctions)',
          'Droit de l\'environnement (Charte, ICPE, écocide)',
          'RSE et CSRD (loi PACTE, taxonomie verte)',
        ] },
    ],
  },
  {
    id: 'theme-2',
    number: 2,
    title: "Droit des sociétés approfondi",
    subtitle: "SARL • SA • SAS • SCA • SNC — Constitution à dissolution",
    accent: '#1e4f93',
    pdfFile: 'https://tgwzenaizjyplztsgokj.supabase.co/storage/v1/object/public/pdfs/theme-2.pdf',
    icon: 'Building2',
    subThemes: [
      { id: 'regles-communes', title: 'Règles communes à toutes les sociétés', pages: 10,
        chapters: ['Notion et conditions d\'existence', 'La personnalité morale', 'Les nullités de société'] },
      { id: 'formes', title: 'Les principales formes sociales', pages: 12,
        chapters: ['La SARL', 'La SA moniste (CA)', 'La SA dualiste (directoire + CS)', 'La SAS', 'La SCA et la SNC'] },
      { id: 'dirigeants', title: 'Les dirigeants sociaux', pages: 8,
        chapters: ['Dirigeant de droit / de fait', 'Statut, nomination et révocation', 'Pouvoirs et limites', '3 responsabilités (civile, pénale, fiscale)'] },
      { id: 'associes', title: 'Les associés', pages: 6,
        chapters: ['Les droits des associés', 'Abus de majorité / minorité / égalité', 'L\'expertise de gestion', 'L\'exclusion d\'un associé'] },
      { id: 'controle', title: 'Le contrôle de la société', pages: 4,
        chapters: ['Commissariat aux comptes (seuils PACTE)', 'Conventions réglementées', 'Procédure d\'alerte'] },
      { id: 'restructurations', title: 'Restructurations, dissolution et liquidation', pages: 8,
        chapters: ['Fusion / scission / APA', 'Transformations', 'Causes de dissolution', 'Régime de la liquidation'] },
    ],
  },
  {
    id: 'theme-3',
    number: 3,
    title: "Pérennité, transmission, droit social & fiscalité de groupe",
    subtitle: "Entreprise en difficulté • Transmission (Dutreil) • Droit social et fiscalité de groupe",
    accent: '#2563b2',
    pdfFile: 'https://tgwzenaizjyplztsgokj.supabase.co/storage/v1/object/public/pdfs/theme-3.pdf',
    icon: 'Network',
    subThemes: [
      { id: 'difficulte', title: 'L\'entreprise en difficulté', pages: 22,
        chapters: [
          'Prévention (alerte CAC/CSE, mandat ad hoc, conciliation)',
          'La procédure de sauvegarde',
          'Le redressement judiciaire',
          'La liquidation judiciaire',
          'Sanctions des dirigeants (comblement passif, faillite personnelle, banqueroute)',
          'Droit communautaire (Règlement UE 2015/848)',
        ] },
      { id: 'transmission', title: 'La transmission de l\'entreprise', pages: 17,
        chapters: [
          'Cession à titre onéreux (fonds de commerce, titres, GAP)',
          'Les montages de reprise (LBO, MBO, MBI, RES, SCOP)',
          'Transmission à titre gratuit (donation, succession)',
          'Le pacte Dutreil (art. 787 B CGI, abattement 75%)',
        ] },
      { id: 'social-groupe', title: 'Droit social et fiscalité de groupe', pages: 15,
        chapters: [
          'Le droit social des groupes (comité de groupe, CEE, co-emploi)',
          'Les restructurations sociales (L. 1224-1, PSE)',
          'L\'intégration fiscale (art. 223 A CGI, seuil 95%)',
          'Fiscalité internationale (BEPS, ATAD, Pilier 2)',
        ] },
    ],
  },
  {
    id: 'theme-4',
    number: 4,
    title: "Associations, fondations et fonds de dotation",
    subtitle: "Loi 1901 • Fiscalité des associations • FRUP • Fondation d'entreprise • Mécénat",
    accent: '#4d80c7',
    pdfFile: 'https://tgwzenaizjyplztsgokj.supabase.co/storage/v1/object/public/pdfs/theme-4.pdf',
    icon: 'HeartHandshake',
    subThemes: [
      { id: 'associations', title: 'Les associations', pages: 5,
        chapters: ['Loi du 1er juillet 1901', 'Constitution et déclaration (JOAFE, RNA)', 'Fonctionnement et gouvernance', 'Disparition'] },
      { id: 'fiscalite-asso', title: 'Fiscalité des associations', pages: 4,
        chapters: ['Critère de non-lucrativité (4 P)', 'Franchise 76 679 €', 'Sectorisation / Filialisation'] },
      { id: 'fondations', title: 'Fondations et fonds de dotation', pages: 4,
        chapters: ['FRUP (Fondation Reconnue d\'Utilité Publique)', 'Fondation d\'entreprise', 'Fonds de dotation (loi LME 2008)', 'Régime juridique et fiscal'] },
      { id: 'mecenat', title: 'Mécénat et philanthropie', pages: 2,
        chapters: ['Réduction d\'IS (60% / 40%)', 'Mécénat de compétences', 'Sponsoring vs mécénat'] },
    ],
  },
];

export function getTheme(id: string): Theme | undefined {
  return THEMES.find(t => t.id === id);
}
