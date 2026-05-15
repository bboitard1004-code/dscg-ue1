import type { Question } from '../types';

// ╔══════════════════════════════════════════════════════════════════╗
// ║ THÈME 4 — ASSOCIATIONS, FONDATIONS ET FONDS DE DOTATION           ║
// ║ ~50 questions                                                     ║
// ╚══════════════════════════════════════════════════════════════════╝

export const THEME_4: Question[] = [
  // ─── Associations ────────────────────────────────────────────────
  { kind: 'qcm', sub: 'associations',
    question: "Quelle loi régit les associations en France ?",
    choices: ["Loi Hamon 2014", "Loi du 1er juillet 1901", "Loi PACTE 2019", "Loi du 31 juillet 2014"],
    answer: 1,
    explain: "Loi du 1er juillet 1901 (et décret du 16 août 1901) : régime général des associations à but non lucratif." },

  { kind: 'qcm', sub: 'associations',
    question: "Définition d'une association (art. 1er loi 1901) ?",
    choices: ["Société à but lucratif", "Convention de 2+ personnes mettant en commun connaissances/activité dans un but autre que partager des bénéfices", "Établissement public", "Société coopérative"],
    answer: 1,
    explain: "Art. 1er loi 1901 : « L'association est la convention par laquelle deux ou plusieurs personnes mettent en commun, d'une façon permanente, leurs connaissances ou leur activité dans un but autre que de partager des bénéfices. »" },

  { kind: 'vf', sub: 'associations',
    statement: "Une association non déclarée n'a pas la personnalité morale.",
    answer: true,
    explain: "L'association existe juridiquement par le contrat (effet du contrat) mais n'acquiert la personnalité morale qu'à la publication au JOAFE." },

  { kind: 'qcm', sub: 'associations',
    question: "Où publie-t-on la création d'une association déclarée ?",
    choices: ["BODACC", "Journal d'annonces légales", "JOAFE (Journal officiel des associations et fondations d'entreprise)", "RCS"],
    answer: 2,
    explain: "Publication au JOAFE (depuis 2009). Gratuit depuis 2020. C'est cette publication qui confère la personnalité morale à l'association." },

  { kind: 'qcm', sub: 'associations',
    question: "Quel registre identifie les associations déclarées ?",
    choices: ["RCS", "RNCS", "RNA (Répertoire National des Associations) — numéro W…", "INSEE seul"],
    answer: 2,
    explain: "L'association déclarée reçoit un numéro RNA (W suivi de 9 chiffres) au Répertoire National des Associations." },

  { kind: 'qcm', sub: 'associations',
    question: "Délai de remise du récépissé après déclaration ?",
    choices: ["1 jour", "5 jours", "1 mois", "3 mois"],
    answer: 1,
    explain: "Récépissé remis sous 5 jours par la préfecture/sous-préfecture (ou via le téléservice e-création)." },

  { kind: 'qcm', sub: 'associations',
    question: "Depuis quand les associations déclarées peuvent-elles recevoir librement des dons manuels ?",
    choices: ["1901", "2003", "Loi du 31 juillet 2014", "Loi PACTE 2019"],
    answer: 2,
    explain: "Loi du 31 juillet 2014 (loi ESS) : élargissement de la « petite capacité » — les associations déclarées peuvent recevoir librement les dons manuels (sans autorisation administrative)." },

  { kind: 'qcm', sub: 'associations',
    question: "Pour recevoir des donations et legs testamentaires, une association doit :",
    choices: ["Être simplement déclarée", "Être RUP ou agréée (cultuelle, intérêt général à but social…)", "Être en SAS", "Demander un permis fiscal"],
    answer: 1,
    explain: "Donations et legs : autorisation administrative préalable. Reconnaissance d'utilité publique (RUP) ou agrément spécifique (cultuelle, d'intérêt général à but social, etc.)." },

  { kind: 'qcm', sub: 'associations',
    question: "Combien d'années d'existence minimum pour demander la reconnaissance d'utilité publique (RUP) ?",
    choices: ["1 an", "3 ans", "5 ans + au moins 200 adhérents + ressources annuelles ≥ 46 000 €", "10 ans"],
    answer: 2,
    explain: "Conditions usuelles RUP : 3 ans d'existence, mais en pratique souvent 5 ans + audience nationale (au moins 200 membres) + ressources annuelles ≥ 46 000 € + capacité financière. Décret en Conseil d'État." },

  { kind: 'vf', sub: 'associations',
    statement: "Les membres d'une association non déclarée engagent leur responsabilité personnelle.",
    answer: true,
    explain: "Vrai. Sans personnalité morale propre, ce sont les membres qui sont engagés sur leur patrimoine personnel pour les dettes contractées au nom de l'association." },

  { kind: 'qcm', sub: 'associations',
    question: "Que peut faire une association déclarée (capacité juridique) ?",
    choices: ["Tout", "Ester en justice, recevoir cotisations/dons manuels/subventions, acquérir à titre onéreux des immeubles nécessaires à son but", "Émettre des actions", "Distribuer des dividendes"],
    answer: 1,
    explain: "Art. 6 loi 1901 (modifié 2014) : capacité « petite » mais réelle. Pas de distribution de bénéfices (sinon perte du caractère non lucratif)." },

  { kind: 'qcm', sub: 'associations',
    question: "Mode de dissolution volontaire d'une association ?",
    choices: ["Décision du président seul", "Décision en AG selon les statuts (souvent majorité qualifiée)", "Décision préfectorale", "Décision judiciaire"],
    answer: 1,
    explain: "Dissolution volontaire selon les statuts. À défaut, AG extraordinaire (souvent majorité qualifiée). Suivie d'une liquidation et de la dévolution du boni à un organisme similaire (interdiction de partage entre membres)." },

  // ─── Fiscalité associative ───────────────────────────────────────
  { kind: 'qcm', sub: 'fiscalite-asso',
    question: "Quels sont les critères de non-lucrativité fiscale d'une association (4 P) ?",
    choices: ["Personnes, Permanence, Pluralisme, Politique", "Produit, Public, Prix, Publicité", "Patrimoine, Profits, Personnel, Pouvoirs", "Préfecture, Préambule, Procès, Personnel"],
    answer: 1,
    explain: "Test des 4 P (instruction fiscale 4 H-5-06) : Produit (utilité sociale), Public (visé, défavorisé), Prix (différent du secteur lucratif), Publicité (méthodes commerciales)." },

  { kind: 'qcm', sub: 'fiscalite-asso',
    question: "Première condition à vérifier avant les 4 P ?",
    choices: ["La taille", "La gestion désintéressée (dirigeants bénévoles, pas de distribution de bénéfices)", "L'âge", "Le siège social"],
    answer: 1,
    explain: "Préalable : gestion désintéressée (dirigeants bénévoles ou rémunération plafonnée, pas de distribution). Si absent : imposition. Si oui : analyse des 4 P." },

  { kind: 'qcm', sub: 'fiscalite-asso',
    question: "Seuil de la franchise d'imposition des activités lucratives accessoires en 2025 (art. 206, 1 bis CGI) ?",
    choices: ["35 000 €", "63 059 €", "76 679 €", "100 000 €"],
    answer: 2,
    explain: "Franchise 2025 : 76 679 € (indexé annuellement). Conditions : gestion désintéressée, activités non lucratives prépondérantes." },

  { kind: 'qcm', sub: 'fiscalite-asso',
    question: "Conséquences de la franchise ?",
    choices: ["Imposition partielle", "Exonération IS, TVA (art. 261, 7-1°-b CGI), CFE sur l'activité lucrative accessoire", "Réduction d'impôt", "Crédit d'impôt"],
    answer: 1,
    explain: "Franchise : exonération IS + TVA spécifique + CFE pour l'activité lucrative accessoire. Profite à l'association entière (pas de sectorisation requise)." },

  { kind: 'vf', sub: 'fiscalite-asso',
    statement: "Dépasser le seuil de 76 679 € rend l'association imposable à l'IS dès le 1er euro de recettes lucratives.",
    answer: true,
    explain: "Vrai. Si dépassement : franchise tombe, imposition rétroactive sur toute l'année civile. Solution : sectorisation ou filialisation." },

  { kind: 'qcm', sub: 'fiscalite-asso',
    question: "Qu'est-ce que la sectorisation ?",
    choices: ["Une fusion", "Isoler comptablement l'activité lucrative dans un secteur distinct (imposé) pour préserver le reste", "Une scission juridique", "Un nantissement"],
    answer: 1,
    explain: "Sectorisation : séparation comptable entre activités lucratives (imposées) et non lucratives (exonérées). Préserve le régime fiscal favorable du non lucratif." },

  { kind: 'qcm', sub: 'fiscalite-asso',
    question: "Qu'est-ce que la filialisation ?",
    choices: ["Création d'une succursale", "Création d'une société commerciale distincte (filiale) pour porter l'activité lucrative", "Adoption d'un enfant", "Cession à un tiers"],
    answer: 1,
    explain: "Filialisation : création d'une société (SARL, SAS…) pour porter l'activité lucrative. L'association garde sa nature non lucrative et perçoit des dividendes." },

  // ─── Fondations et fonds de dotation ──────────────────────────────
  { kind: 'qcm', sub: 'fondations',
    question: "Quelle est la dotation minimum d'une FRUP ?",
    choices: ["100 000 €", "500 000 €", "1 500 000 € recommandés", "10 000 000 €"],
    answer: 2,
    explain: "FRUP : dotation initiale recommandée d'au moins 1,5 M€ (en numéraire ou en nature). Reconnaissance par décret en Conseil d'État." },

  { kind: 'qcm', sub: 'fondations',
    question: "Quel acte fonde une FRUP ?",
    choices: ["Une simple déclaration", "Un décret en Conseil d'État", "Un arrêté préfectoral", "Un acte notarié"],
    answer: 1,
    explain: "FRUP : reconnue par décret en Conseil d'État. Délai d'instruction long (12-24 mois). Soumise à un commissaire du gouvernement." },

  { kind: 'qcm', sub: 'fondations',
    question: "Durée minimale d'une fondation d'entreprise ?",
    choices: ["1 an", "3 ans", "5 ans (programme d'action pluriannuel)", "Illimitée"],
    answer: 2,
    explain: "Fondation d'entreprise : durée déterminée min. 5 ans (programme d'action pluriannuel), renouvelable. Créée par une entreprise (pas une personne physique)." },

  { kind: 'qcm', sub: 'fondations',
    question: "Programme d'action pluriannuel minimum d'une fondation d'entreprise ?",
    choices: ["50 000 €", "150 000 € sur 5 ans", "300 000 €", "1 M€"],
    answer: 1,
    explain: "Engagement min. 150 000 € sur 5 ans (programme d'action pluriannuel). Fondateurs : entreprises uniquement (sociétés, EPIC, coopératives…)." },

  { kind: 'qcm', sub: 'fondations',
    question: "Loi de création du fonds de dotation ?",
    choices: ["Loi 1901", "Loi LME du 4 août 2008", "Loi PACTE 2019", "Loi Sapin II"],
    answer: 1,
    explain: "Loi de Modernisation de l'Économie (LME) du 4 août 2008 : a créé le fonds de dotation. Structure très souple, alternative à la fondation classique." },

  { kind: 'qcm', sub: 'fondations',
    question: "Dotation minimale d'un fonds de dotation ?",
    choices: ["Pas de minimum (15 000 € si non consommable)", "1,5 M€", "100 K€", "500 K€"],
    answer: 0,
    explain: "Pas de minimum sauf si dotation non consommable (capitalisation obligatoire) : 15 000 € minimum. Création rapide par simple déclaration en préfecture." },

  { kind: 'qcm', sub: 'fondations',
    question: "Qui peut créer un fonds de dotation ?",
    choices: ["Uniquement les entreprises", "Toute personne physique ou morale (au moins 1 fondateur)", "Uniquement l'État", "Seules les fondations"],
    answer: 1,
    explain: "Fonds de dotation : un seul fondateur peut suffire (PP ou PM). Gouvernance souple : CA de 3 membres minimum." },

  { kind: 'qcm', sub: 'fondations',
    question: "Mode de création d'un fonds de dotation ?",
    choices: ["Décret en Conseil d'État", "Loi", "Simple déclaration en préfecture + publication JOAFE", "Notaire obligatoire"],
    answer: 2,
    explain: "Simple déclaration en préfecture. Publication au JOAFE. Création rapide (quelques semaines). Gestion privée souple." },

  { kind: 'qcm', sub: 'fondations',
    question: "Avantages fiscaux d'un fonds de dotation pour les donateurs (personnes physiques) ?",
    choices: ["10% du don", "Réduction IR de 66% des versements dans la limite de 20% du revenu imposable", "100% déductibles", "Aucun"],
    answer: 1,
    explain: "Réduction IR 66% (limite 20% du RI) pour PP. Réduction IS 60% (limite 20 000 € ou 5‰ CA) pour entreprises. Exonération droits de mutation pour les legs." },

  { kind: 'vf', sub: 'fondations',
    statement: "Un CAC est obligatoire pour un fonds de dotation dès lors que ses ressources dépassent 10 000 €.",
    answer: true,
    explain: "Vrai. CAC obligatoire pour un fonds de dotation dont les ressources dépassent 10 000 € à la clôture d'un exercice." },

  // ─── Mécénat ─────────────────────────────────────────────────────
  { kind: 'qcm', sub: 'mecenat',
    question: "Quel est le taux de la réduction d'IS pour mécénat (art. 238 bis CGI) ?",
    choices: ["40%", "50%", "60% du don dans la limite de 20 000 € OU 5‰ du CA HT (le plus élevé)", "75%"],
    answer: 2,
    explain: "60% du don, plafond annuel = max(20 000 € ; 5‰ CA HT). Au-delà : 40% pour la fraction > 2 M€." },

  { kind: 'qcm', sub: 'mecenat',
    question: "Au-delà de 2 M€ de don, quel est le taux de réduction d'IS ?",
    choices: ["10%", "40%", "60%", "75%"],
    answer: 1,
    explain: "Mesure introduite par la LF 2019 : 40% pour la fraction de don > 2 M€ (au lieu de 60% pour les premiers 2 M€)." },

  { kind: 'qcm', sub: 'mecenat',
    question: "Différence entre mécénat et sponsoring ?",
    choices: ["Aucune", "Le sponsoring suppose une contrepartie commerciale ; le mécénat est un soutien sans contrepartie (ou contrepartie de faible valeur)", "Le mécénat est obligatoire", "Le sponsoring est gratuit"],
    answer: 1,
    explain: "Mécénat = soutien désintéressé (contrepartie max 25% du don). Sponsoring = parrainage avec contrepartie commerciale ; traité comme une charge déductible (et non comme une réduction d'IS)." },

  { kind: 'qcm', sub: 'mecenat',
    question: "Qu'est-ce que le mécénat de compétences ?",
    choices: ["Une formation", "Mise à disposition de salariés sur leur temps de travail au profit d'un organisme d'intérêt général", "Un don en argent", "Une subvention"],
    answer: 1,
    explain: "Mécénat de compétences : prêt de main-d'œuvre gratuit. Plafonné à 10 jours/an/salarié × 3 SMIC. Bénéficie de la réduction d'IS." },

  { kind: 'vf', sub: 'mecenat',
    statement: "La contrepartie maximum admise dans un mécénat est de 25% du don.",
    answer: true,
    explain: "Vrai. Tolérance administrative : valeur de la contrepartie ≤ 25% du don (ex : invitations, mention discrète). Au-delà : requalification en sponsoring." },

  { kind: 'qcm', sub: 'fondations',
    question: "Avantage spécifique du fonds de dotation par rapport à la FRUP ?",
    choices: ["Plus avantageux fiscalement", "Création rapide (quelques semaines vs 12-24 mois), gouvernance plus souple, pas de commissaire du gouvernement", "Exonérations plus larges", "Moins de surveillance fiscale"],
    answer: 1,
    explain: "Fonds de dotation : agilité opérationnelle, statuts libres, contrôle administratif léger. Inconvénient : ne peut pas redistribuer à des particuliers (uniquement à d'autres organismes d'intérêt général ou actions propres)." },

  { kind: 'flashcard', sub: 'fondations',
    front: "Comparatif rapide : Association / FRUP / Fondation d'entreprise / Fonds de dotation",
    back: "Association 1901 : but non lucratif, capacité limitée sans RUP. FRUP : décret CE, dotation ~1,5 M€, lourde. Fondation d'entreprise : créée par entreprise, durée 5 ans+, 150 K€ sur 5 ans. Fonds de dotation : LME 2008, simple déclaration, souplesse maximale, pas de min sauf si non consommable (15 K€)." },

  { kind: 'flashcard', sub: 'fiscalite-asso',
    front: "Test des 4 P (instruction fiscale 4 H-5-06)",
    back: "Préalable : gestion désintéressée (dirigeants bénévoles, pas de distribution). Ensuite : Produit (utilité sociale), Public (défavorisé/non desservi), Prix (différent du secteur lucratif), Publicité (méthodes non commerciales). Comparaison avec une entreprise concurrente." },

  { kind: 'flashcard', sub: 'associations',
    front: "Étapes de création d'une association déclarée",
    back: "1) Rédaction des statuts par les membres fondateurs ; 2) AG constitutive (PV) ; 3) Déclaration en préfecture/e-services avec statuts + liste dirigeants + PV ; 4) Récépissé sous 5 jours ; 5) Publication au JOAFE (acquisition personnalité morale) ; 6) Inscription au RNA (numéro W…)." },

  { kind: 'flashcard', sub: 'mecenat',
    front: "Régime du mécénat (art. 238 bis CGI)",
    back: "60% du don dans la limite de max(20 000 € ; 5‰ CA HT). Au-delà de 2 M€ : 40%. Mécénat de compétences = prêt de main-d'œuvre (10 jours/an/salarié × 3 SMIC). Contrepartie max 25% du don, sinon = sponsoring." },

  { kind: 'assoc', sub: 'associations',
    prompt: "Associez chaque structure à son régime",
    pairs: [
      ["Association loi 1901", "But non lucratif, capacité limitée"],
      ["FRUP", "Décret CE, dotation ~1,5 M€"],
      ["Fondation d'entreprise", "Durée 5 ans+, créée par entreprise"],
      ["Fonds de dotation", "LME 2008, souplesse maximale"],
    ] },

  { kind: 'assoc', sub: 'mecenat',
    prompt: "Associez chaque dispositif à son taux de réduction",
    pairs: [
      ["Mécénat IS (don ≤ 2 M€)", "60%"],
      ["Mécénat IS (don > 2 M€)", "40%"],
      ["Mécénat IR (PP)", "66%"],
      ["Sponsoring", "Charge déductible (pas de réduction)"],
    ] },

  { kind: 'qcm', sub: 'associations',
    question: "Que devient le boni de liquidation d'une association ?",
    choices: ["Distribué aux membres", "Dévolu à un organisme similaire (interdiction de partage)", "Donné à l'État", "Reversé à la préfecture"],
    answer: 1,
    explain: "Interdiction de partage entre membres (art. 9 loi 1901). Dévolution à une association similaire ou organisme d'intérêt général. Le partage entraînerait la perte du caractère non lucratif." },

  { kind: 'qcm', sub: 'fondations',
    question: "Quelle structure est éligible pour la transmission patrimoniale (réception de legs sans droits de mutation) ?",
    choices: ["Toute association", "Une association d'intérêt général reconnue + RUP + fondation/fonds de dotation", "Uniquement la SARL", "Uniquement la SCI"],
    answer: 1,
    explain: "Réception de legs sans droits de mutation : RUP, fondations, fonds de dotation, et associations d'intérêt général (cultuelles, à but social, scientifique, etc.)." },

  { kind: 'qcm', sub: 'fiscalite-asso',
    question: "Avantage de la sectorisation par rapport à la filialisation ?",
    choices: ["Aucun", "Pas de création de structure nouvelle (plus simple, moins coûteux)", "Exonération totale", "Mieux noté"],
    answer: 1,
    explain: "Sectorisation : pas de création de personne morale nouvelle (simple isolement comptable). Filialisation : création d'une société (plus complexe, mais isolement juridique total)." },
];
