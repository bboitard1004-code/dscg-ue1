// Banques de questions par thème (et par sous-thème pour "par thème")
// Format unifié : qcm, vrai-faux, flashcard, association

export type QCM = { kind: 'qcm'; question: string; choices: string[]; answer: number; explain: string; sub?: string };
export type VF = { kind: 'vf'; statement: string; answer: boolean; explain: string; sub?: string };
export type FC = { kind: 'flashcard'; front: string; back: string; sub?: string };
export type ASSOC = { kind: 'assoc'; prompt: string; pairs: [string, string][]; sub?: string };
export type Question = QCM | VF | FC | ASSOC;

export const QUESTIONS: Record<string, Question[]> = {
  // ───────────────────────────────────────────────────────────────────
  'theme-1': [
    // Contrats
    { kind: 'qcm', sub: 'contrats',
      question: "Quelle réforme a modernisé le droit français des contrats ?",
      choices: ['Ord. 2016-131 (10 février 2016)', 'Loi PACTE 2019', 'Loi Hamon 2014', 'Loi Macron 2015'],
      answer: 0,
      explain: "L'ordonnance du 10 février 2016 (ratifiée par la loi du 20 avril 2018) a réformé le droit des contrats, du régime général et de la preuve des obligations."
    },
    { kind: 'qcm', sub: 'contrats',
      question: "Que prévoit l'article 1195 C. civ. (imprévision) ?",
      choices: ["L'annulation automatique du contrat", "La renégociation puis adaptation/résolution par le juge en cas de changement imprévisible", "La force majeure", "Le devoir de loyauté précontractuelle"],
      answer: 1,
      explain: "L'imprévision (nouveauté de 2016) permet de demander la renégociation, et à défaut, l'adaptation ou la résolution du contrat par le juge."
    },
    { kind: 'vf', sub: 'contrats',
      statement: "Selon les Incoterms 2020, l'incoterm DPU remplace DAT et signifie 'Delivered at Place Unloaded'.",
      answer: true,
      explain: "DPU (Delivered at Place Unloaded) a remplacé DAT dans les Incoterms 2020 — le vendeur livre et décharge la marchandise au lieu convenu."
    },
    { kind: 'flashcard', sub: 'contrats',
      front: "Les 3 conditions de validité du contrat (art. 1128 C. civ.)",
      back: "1. Consentement des parties (exempt de vices) ; 2. Capacité de contracter ; 3. Contenu licite et certain."
    },

    // Concurrence
    { kind: 'qcm', sub: 'concurrence',
      question: "Quelle autorité française sanctionne les ententes anticoncurrentielles ?",
      choices: ["La DGCCRF seule", "L'Autorité de la concurrence", "L'AMF", "L'ARCEP"],
      answer: 1,
      explain: "L'Autorité de la concurrence (article L. 461-1 C. com.) est l'autorité administrative indépendante qui sanctionne les pratiques anticoncurrentielles. La DGCCRF mène les enquêtes."
    },
    { kind: 'vf', sub: 'concurrence',
      statement: "L'amende maximum pour une entente anticoncurrentielle peut atteindre 10% du chiffre d'affaires mondial du groupe.",
      answer: true,
      explain: "Art. L. 464-2 C. com. : sanction pécuniaire pouvant atteindre 10% du CA mondial HT consolidé du groupe."
    },
    { kind: 'qcm', sub: 'concurrence',
      question: "Quels sont les seuils de notification d'une concentration en France ?",
      choices: ["CA mondial > 50 M€ et national > 15 M€", "CA mondial > 150 M€ et 2 parties > 50 M€ en France", "CA > 250 M€ seul", "CA > 1 Md€ seul"],
      answer: 1,
      explain: "Seuils français : CA mondial total > 150 M€ ET CA en France de chacune d'au moins 2 entreprises > 50 M€."
    },

    // PI
    { kind: 'qcm', sub: 'pi',
      question: "Quelle est la durée de protection d'un brevet en France ?",
      choices: ["10 ans renouvelable", "15 ans", "20 ans non renouvelable", "Vie de l'inventeur + 70 ans"],
      answer: 2,
      explain: "Le brevet est protégé 20 ans à compter du dépôt, non renouvelable (art. L. 611-2 CPI)."
    },
    { kind: 'qcm', sub: 'pi',
      question: "Quelles sont les 4 conditions de brevetabilité ?",
      choices: ["Originalité, nouveauté, antériorité, dépôt", "Invention, nouveauté, activité inventive, application industrielle", "Création, public, marché, dépôt", "Distinctivité, licéité, disponibilité, représentation"],
      answer: 1,
      explain: "Les 4 conditions de brevetabilité (art. L. 611-10 CPI) : invention, nouveauté, activité inventive, application industrielle."
    },
    { kind: 'vf', sub: 'pi',
      statement: "Une marque peut être déchue pour défaut d'usage sérieux pendant 5 ans.",
      answer: true,
      explain: "Art. L. 714-5 CPI : déchéance possible si la marque n'a pas fait l'objet d'un usage sérieux pendant 5 années consécutives."
    },
    { kind: 'flashcard', sub: 'pi',
      front: "Conditions de validité d'une marque",
      back: "1. Distinctivité ; 2. Licéité (pas contraire à l'ordre public, non déceptive) ; 3. Disponibilité (pas d'antériorité) ; 4. Représentation claire et précise."
    },

    // Pénal
    { kind: 'qcm', sub: 'penal',
      question: "Quel article du Code pénal pose la responsabilité pénale des personnes morales ?",
      choices: ["Art. 121-1", "Art. 121-2", "Art. 311-1", "Art. L. 242-6 C. com."],
      answer: 1,
      explain: "L'art. 121-2 C. pén. consacre la responsabilité pénale des personnes morales, pour toute infraction (sauf État)."
    },
    { kind: 'qcm', sub: 'penal',
      question: "Que sanctionne l'abus de biens sociaux (ABS) ?",
      choices: ["Le vol commis dans l'entreprise", "L'usage des biens/crédit de la société contraire à l'intérêt social, à des fins personnelles", "La fraude fiscale", "Le détournement de fonds publics"],
      answer: 1,
      explain: "ABS (L. 241-3, L. 242-6 C. com.) : usage des biens/crédit de la société, de mauvaise foi, contraire à l'intérêt social, à des fins personnelles ou pour favoriser une autre société."
    },
    { kind: 'vf', sub: 'penal',
      statement: "La CJIP (Convention judiciaire d'intérêt public) issue de la loi Sapin II permet d'éviter un procès pénal moyennant amende et programme de mise en conformité.",
      answer: true,
      explain: "La CJIP (loi Sapin II du 9 décembre 2016) permet à une personne morale mise en cause pour corruption, fraude fiscale… de conclure une convention avec le procureur (amende + programme de conformité)."
    },

    // Fiscalité
    { kind: 'qcm', sub: 'fiscal',
      question: "Quel est le taux normal de l'IS en France en 2026 ?",
      choices: ['15%', '20%', '25%', '33,1/3%'],
      answer: 2,
      explain: "Depuis 2022, le taux normal de l'IS est de 25% pour toutes les sociétés."
    },
    { kind: 'qcm', sub: 'fiscal',
      question: "Quel est le taux réduit d'IS PME et son plafond ?",
      choices: ["15% jusqu'à 42 500 €", "15% jusqu'à 38 120 €", "10% jusqu'à 50 000 €", "20% jusqu'à 100 000 €"],
      answer: 0,
      explain: "Taux réduit PME : 15% sur les bénéfices ≤ 42 500 € (CA < 10 M€, capital libéré et détenu à 75% par des personnes physiques)."
    },
    { kind: 'vf', sub: 'fiscal',
      statement: "La CSRD impose un reporting de durabilité extra-financier aux grandes entreprises de l'UE.",
      answer: true,
      explain: "La Corporate Sustainability Reporting Directive (2022/2464) impose progressivement (2024-2028) un reporting de durabilité selon les ESRS."
    },
    { kind: 'assoc', sub: 'fiscal',
      prompt: "Associez chaque impôt à sa base",
      pairs: [
        ["IS", "Bénéfice fiscal des sociétés"],
        ["TVA", "Consommation (achats - ventes)"],
        ["CFE", "Valeur locative des biens"],
        ["CVAE", "Valeur ajoutée"]
      ]
    },
  ],
};
