import type { Question } from './questions-1';

export const QUESTIONS_REST: Record<string, Question[]> = {
  // ───────────────────────────────────────────────────────────────────
  'theme-2': [
    { kind: 'qcm', sub: 'regles-communes',
      question: "Quand une société commerciale acquiert-elle la personnalité morale ?",
      choices: ["À la signature des statuts", "Au dépôt des fonds", "À l'immatriculation au RCS", "À la publication au JOAFE"],
      answer: 2,
      explain: "Art. L. 210-6 C. com. : la personnalité morale est acquise à l'immatriculation au RCS."
    },
    { kind: 'qcm', sub: 'regles-communes',
      question: "Combien d'associés peut compter au maximum une SARL ?",
      choices: ["50", "100", "150", "Illimité"],
      answer: 1,
      explain: "Une SARL compte 2 à 100 associés. Au-delà, transformation en SA ou SAS requise."
    },
    { kind: 'qcm', sub: 'formes',
      question: "Quel est le capital social minimum d'une SA ?",
      choices: ["1 €", "7 500 €", "37 000 €", "225 000 €"],
      answer: 2,
      explain: "Le capital social minimum d'une SA est de 37 000 € (1/2 libéré à la constitution). 225 000 € si SA cotée à l'origine (supprimé)."
    },
    { kind: 'qcm', sub: 'formes',
      question: "Quelle forme sociale interdit les apports en industrie ?",
      choices: ['SARL', 'SAS', 'SA', 'EURL'],
      answer: 2,
      explain: "Dans la SA, les apports en industrie sont interdits. SARL et SAS les autorisent (sans valoir capital)."
    },
    { kind: 'vf', sub: 'formes',
      statement: "Le président d'une SAS est obligatoirement une personne physique.",
      answer: false,
      explain: "Faux. Le président d'une SAS peut être une personne physique OU une personne morale (contrairement au gérant de SARL qui doit être une personne physique)."
    },
    { kind: 'qcm', sub: 'formes',
      question: "Quelle est la caractéristique principale de la SAS ?",
      choices: ["Capital élevé obligatoire", "La liberté statutaire (art. L. 227-5)", "Cotation possible en bourse", "Apports en industrie interdits"],
      answer: 1,
      explain: "La SAS se caractérise par la liberté statutaire (art. L. 227-5 C. com.) : les associés organisent eux-mêmes gouvernance et décisions."
    },
    { kind: 'vf', sub: 'formes',
      statement: "La SAS peut être introduite en bourse.",
      answer: false,
      explain: "Art. L. 227-2 C. com. : la SAS ne peut pas faire offre au public (APE). Pour entrer en bourse, transformation préalable en SA requise."
    },
    { kind: 'qcm', sub: 'dirigeants',
      question: "Vis-à-vis des tiers de bonne foi, dans une SARL, le gérant engage la société :",
      choices: ["Uniquement pour les actes dans l'objet social", "Pour tous les actes, même hors objet social", "Uniquement avec accord unanime", "Jamais sans pouvoir spécial"],
      answer: 1,
      explain: "Art. L. 223-18 al. 5 : la SARL est engagée même par les actes du gérant dépassant l'objet social, sauf si elle prouve la mauvaise foi du tiers."
    },
    { kind: 'qcm', sub: 'dirigeants',
      question: "Les 3 responsabilités possibles du dirigeant sont :",
      choices: ["Civile, pénale, administrative", "Civile, pénale, fiscale", "Pénale, fiscale, disciplinaire", "Civile, fiscale, déontologique"],
      answer: 1,
      explain: "Les 3 responsabilités du dirigeant sont cumulables : civile (L. 223-22, L. 225-251), pénale (ABS, présentation de comptes inexacts…), fiscale (L. 267 LPF)."
    },
    { kind: 'flashcard', sub: 'associes',
      front: "Les 4 droits fondamentaux de l'associé",
      back: "1. Droit aux dividendes ; 2. Droit au boni de liquidation ; 3. Droit de vote ; 4. Droit à l'information (communication des documents sociaux)."
    },
    { kind: 'qcm', sub: 'associes',
      question: "Qu'est-ce que l'abus de majorité ?",
      choices: ["Vote contraire à l'intérêt social et dans l'unique dessein de favoriser la majorité au détriment de la minorité", "Vote dépassant les pouvoirs de l'AG", "Vote sans quorum", "Vote secret en violation des statuts"],
      answer: 0,
      explain: "Abus de majorité : décision contraire à l'intérêt social ET prise dans l'unique dessein de favoriser la majorité au détriment de la minorité (Cass. com., 18 avril 1961, arrêt Schumann-Picard)."
    },
    { kind: 'qcm', sub: 'controle',
      question: "Depuis la loi PACTE 2019, quels sont les seuils PACTE de nomination obligatoire d'un CAC dans une société commerciale ?",
      choices: ['CA > 1 M€, bilan > 500 K€, 25 salariés', 'CA > 8 M€, bilan > 4 M€, 50 salariés', 'CA > 12 M€, bilan > 6 M€, 50 salariés', 'CA > 50 M€'],
      answer: 1,
      explain: "Seuils PACTE (2019) : dépassement de 2 des 3 seuils — CA HT > 8 M€, total bilan > 4 M€, > 50 salariés."
    },
    { kind: 'qcm', sub: 'restructurations',
      question: "Qu'entraîne juridiquement une fusion-absorption ?",
      choices: ["Création d'une PM nouvelle", "TUP + dissolution sans liquidation de l'absorbée + échange de titres", "Vente d'actifs imposable", "Scission proportionnelle"],
      answer: 1,
      explain: "Effets cumulatifs : transmission universelle du patrimoine, dissolution sans liquidation de l'absorbée, échange de titres (soulte max 10%)."
    },
    { kind: 'vf', sub: 'restructurations',
      statement: "La transformation d'une société en SAS nécessite l'unanimité des associés.",
      answer: true,
      explain: "Art. L. 227-3 C. com. : la décision de transformation en SAS nécessite l'unanimité des associés (car la SAS est régie par la liberté statutaire)."
    },
    { kind: 'assoc', sub: 'formes',
      prompt: "Associez chaque forme sociale à sa caractéristique distinctive",
      pairs: [
        ["SARL", "Forme mixte – gérant personne physique"],
        ["SA", "Capital minimum 37 000 €"],
        ["SAS", "Liberté statutaire totale"],
        ["SNC", "Responsabilité indéfinie et solidaire"]
      ]
    },
  ],

  // ───────────────────────────────────────────────────────────────────
  'theme-3': [
    { kind: 'qcm', sub: 'droit-social-groupes',
      question: "Quel est le seuil de constitution d'un comité de groupe ?",
      choices: ["50 salariés au total", "300 salariés dans une entreprise du groupe", "Existence d'un groupe avec entreprise dominante en France et > 50 salariés en France", "1 000 salariés"],
      answer: 2,
      explain: "Le comité de groupe est obligatoire dès qu'il existe un groupe avec entreprise dominante en France employant au moins 50 salariés au total dans le groupe en France."
    },
    { kind: 'vf', sub: 'droit-social-groupes',
      statement: "Le co-emploi suppose un état de subordination ou une confusion d'intérêts, d'activités et de direction.",
      answer: true,
      explain: "Jurisprudence Molex (Cass. soc. 2 juillet 2014) : confusion d'intérêts, d'activités et de direction se manifestant par une immixtion dans la gestion. Resserrée par l'arrêt AGC France de 2020."
    },
    { kind: 'qcm', sub: 'restructurations-sociales',
      question: "Que prévoit l'article L. 1224-1 C. trav. ?",
      choices: ["La rupture conventionnelle collective", "Le transfert automatique des contrats de travail en cas de modification de la situation juridique de l'employeur", "Le PSE", "Le licenciement disciplinaire"],
      answer: 1,
      explain: "Art. L. 1224-1 C. trav. : transfert automatique des contrats de travail en cours en cas de modification dans la situation juridique de l'employeur (succession, vente, fusion…)."
    },
    { kind: 'qcm', sub: 'restructurations-sociales',
      question: "À partir de combien de licenciements économiques sur 30 jours dans une entreprise ≥ 50 salariés un PSE est-il obligatoire ?",
      choices: ["2", "5", "10", "50"],
      answer: 2,
      explain: "Art. L. 1233-61 C. trav. : un Plan de sauvegarde de l'emploi (PSE) est obligatoire pour 10 licenciements et + sur 30 jours dans une entreprise d'au moins 50 salariés."
    },
    { kind: 'qcm', sub: 'integration-fiscale',
      question: "Quel pourcentage de détention minimum est requis pour l'intégration fiscale ?",
      choices: ["50%", "75%", "95%", "100%"],
      answer: 2,
      explain: "Art. 223 A CGI : la société mère doit détenir au moins 95% du capital des filiales intégrées, de manière directe ou indirecte."
    },
    { kind: 'vf', sub: 'integration-fiscale',
      statement: "L'option pour l'intégration fiscale est notifiée pour 5 ans, renouvelable tacitement.",
      answer: true,
      explain: "L'option est notifiée pour une durée de 5 exercices et renouvelable tacitement par périodes identiques."
    },
    { kind: 'qcm', sub: 'integration-fiscale',
      question: "Qu'est-ce qui caractérise l'intégration fiscale ?",
      choices: ["Toutes les filiales déclarent séparément", "La société mère se constitue redevable unique de l'IS du groupe", "Suppression de la TVA intragroupe", "Exonération automatique d'IS pour les filiales"],
      answer: 1,
      explain: "La société mère se constitue seule redevable de l'IS pour l'ensemble du groupe : compensation des bénéfices et déficits, neutralisations intra-groupe."
    },
    { kind: 'qcm', sub: 'fiscalite-internationale',
      question: "Que vise le Pilier 2 OCDE / directive UE 2022/2523 ?",
      choices: ["Une taxation à 10% des startups", "Un impôt minimum mondial de 15% sur les groupes multinationaux > 750 M€", "Un crédit d'impôt R&D européen", "Une TVA unique européenne"],
      answer: 1,
      explain: "Pilier 2 / GloBE : impôt minimum effectif de 15% sur les groupes multinationaux dont le CA consolidé dépasse 750 M€ (en France depuis le 31/12/2023)."
    },
    { kind: 'vf', sub: 'fiscalite-internationale',
      statement: "Le projet BEPS de l'OCDE vise à lutter contre l'érosion de la base imposable et le transfert de bénéfices.",
      answer: true,
      explain: "BEPS = Base Erosion and Profit Shifting. 15 actions OCDE 2015, mises en œuvre via les directives ATAD 1 et 2 dans l'UE."
    },
    { kind: 'flashcard', sub: 'integration-fiscale',
      front: "Conditions de l'intégration fiscale (art. 223 A CGI)",
      back: "1. Sociétés soumises à l'IS en France ; 2. Détention ≥ 95% capital (directe ou indirecte) ; 3. Même date d'ouverture/clôture des exercices (12 mois) ; 4. Option notifiée pour 5 ans (renouvelable)."
    },
    { kind: 'assoc', sub: 'restructurations-sociales',
      prompt: "Associez chaque dispositif à sa nature",
      pairs: [
        ["L. 1224-1", "Transfert auto des contrats"],
        ["PSE", "Plan de sauvegarde de l'emploi"],
        ["RCC", "Rupture conventionnelle collective"],
        ["ARMP", "Accord rupture mutuelle protégée"]
      ]
    },
  ],

  // ───────────────────────────────────────────────────────────────────
  'theme-4': [
    { kind: 'qcm', sub: 'associations',
      question: "Quelle loi régit les associations en France ?",
      choices: ["Loi Hamon 2014", "Loi du 1er juillet 1901", "Loi PACTE 2019", "Loi du 31 juillet 2014"],
      answer: 1,
      explain: "La loi du 1er juillet 1901 (et son décret d'application du 16 août 1901) pose le régime général des associations à but non lucratif."
    },
    { kind: 'vf', sub: 'associations',
      statement: "Une association non déclarée n'a pas la personnalité morale.",
      answer: true,
      explain: "L'association existe juridiquement par le contrat mais n'acquiert la personnalité morale qu'à la publication au JOAFE (Journal officiel des associations)."
    },
    { kind: 'qcm', sub: 'associations',
      question: "Depuis quand les associations déclarées peuvent-elles recevoir librement des dons manuels ?",
      choices: ["1901", "2003", "Depuis la loi du 31 juillet 2014", "Depuis la loi PACTE"],
      answer: 2,
      explain: "Loi du 31 juillet 2014 (ESS) : la « petite capacité » des associations déclarées a été élargie : elles peuvent recevoir librement les dons manuels sans autorisation."
    },
    { kind: 'qcm', sub: 'associations',
      question: "Quel registre identifie les associations déclarées ?",
      choices: ["RCS", "RNCS", "RNA (Répertoire national des associations)", "INSEE seul"],
      answer: 2,
      explain: "L'association déclarée reçoit un numéro RNA (W…) au Répertoire national des associations."
    },
    { kind: 'qcm', sub: 'fiscalite-asso',
      question: "Quels sont les critères de non-lucrativité fiscale d'une association (test des 4 P) ?",
      choices: ["Personnes, Permanence, Pluralisme, Politique", "Produit, Public, Prix, Publicité", "Patrimoine, Profits, Personnel, Pouvoirs", "Préfecture, Préambule, Procès, Personnel"],
      answer: 1,
      explain: "Test des 4 P (instruction fiscale 4 H-5-06) : Produit (utilité sociale), Public (visé), Prix (différence avec le secteur lucratif), Publicité (méthodes commerciales)."
    },
    { kind: 'qcm', sub: 'fiscalite-asso',
      question: "Quel est le seuil de la franchise d'imposition des activités lucratives accessoires en 2025 ?",
      choices: ["35 000 €", "63 059 €", "76 679 €", "100 000 €"],
      answer: 2,
      explain: "Art. 206, 1 bis CGI : franchise à 76 679 € (montant 2025, indexé annuellement) pour les associations à gestion désintéressée avec activités non lucratives prépondérantes."
    },
    { kind: 'vf', sub: 'fiscalite-asso',
      statement: "Dépasser le seuil de franchise rend l'association imposable à l'IS dès le 1er euro de recettes lucratives.",
      answer: true,
      explain: "Si les recettes lucratives accessoires dépassent 76 679 €, la franchise tombe : imposable à l'IS dès le 1er euro de recettes lucratives (rétroactivement sur l'année civile)."
    },
    { kind: 'qcm', sub: 'fondations',
      question: "Quelle est la dotation initiale minimum d'une FRUP ?",
      choices: ["100 000 €", "500 000 €", "1 500 000 €", "Aucun minimum"],
      answer: 2,
      explain: "Pour une FRUP (Fondation Reconnue d'Utilité Publique), la dotation initiale doit être d'au moins 1,5 M€ (en numéraire ou en nature)."
    },
    { kind: 'qcm', sub: 'fondations',
      question: "Quelle est la durée minimum d'une fondation d'entreprise ?",
      choices: ["1 an", "3 ans", "5 ans (programme d'action pluriannuel)", "Illimitée"],
      answer: 2,
      explain: "La fondation d'entreprise est créée pour une durée déterminée minimale de 5 ans (programme d'action pluriannuel), renouvelable."
    },
    { kind: 'vf', sub: 'fondations',
      statement: "Le fonds de dotation a été créé par la loi LME du 4 août 2008.",
      answer: true,
      explain: "La loi de modernisation de l'économie (LME) du 4 août 2008 a créé le fonds de dotation, structure très souple (1 fondateur, pas de dotation minimum sauf si non consommable : 15 000 €)."
    },
    { kind: 'qcm', sub: 'mecenat',
      question: "Quel est le taux de la réduction d'IS pour mécénat (art. 238 bis CGI) ?",
      choices: ["40%", "50%", "60% du don dans la limite de 20 000 € ou 5‰ du CA", "75%"],
      answer: 2,
      explain: "Art. 238 bis CGI : 60% du don dans la limite de 20 000 € ou 5‰ (0,5%) du CA HT (le plus élevé). Au-delà : 40% pour la fraction > 2 M€."
    },
    { kind: 'vf', sub: 'mecenat',
      statement: "Le mécénat se distingue du sponsoring : le sponsoring attend une contrepartie commerciale, le mécénat non.",
      answer: true,
      explain: "Mécénat = soutien sans contrepartie directe (ou contrepartie de faible valeur, max 25% du don). Sponsoring = parrainage avec contrepartie commerciale, traité comme une charge déductible."
    },
    { kind: 'flashcard', sub: 'fondations',
      front: "Comparatif fondation / fonds de dotation",
      back: "Fondation : dotation 1,5 M€ (FRUP) ou 150 K€ (entreprise sur 5 ans), reconnaissance par décret. Fonds de dotation : pas de minimum (15 K€ si non consommable), simple déclaration en préfecture, gestion privée souple."
    },
    { kind: 'assoc', sub: 'associations',
      prompt: "Associez chaque structure à son régime",
      pairs: [
        ["Association loi 1901", "But non lucratif – Loi 1901"],
        ["FRUP", "Reconnue par décret en Conseil d'État"],
        ["Fondation d'entreprise", "Durée min 5 ans – financement entreprise"],
        ["Fonds de dotation", "Créé par LME 2008 – souplesse maximale"]
      ]
    },
  ],
};
