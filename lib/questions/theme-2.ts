import type { Question } from '../types';

// ╔══════════════════════════════════════════════════════════════════╗
// ║ THÈME 2 — DROIT DES SOCIÉTÉS APPROFONDI                          ║
// ║ ~75 questions — SARL, SA, SAS, SCA, SNC                          ║
// ╚══════════════════════════════════════════════════════════════════╝

export const THEME_2: Question[] = [
  // ─── Règles communes ──────────────────────────────────────────────
  { kind: 'qcm', sub: 'regles-communes',
    question: "Quand une société commerciale acquiert-elle la personnalité morale ?",
    choices: ["À la signature des statuts", "Au dépôt des fonds", "À l'immatriculation au RCS", "À la publication au JOAFE"],
    answer: 2,
    explain: "Art. L. 210-6 C. com. : la personnalité morale est acquise à l'immatriculation au RCS (Guichet unique INPI depuis 2023). Avant : société en formation." },

  { kind: 'qcm', sub: 'regles-communes',
    question: "Qu'est-ce que l'affectio societatis ?",
    choices: ["Une formalité de dépôt", "La volonté de collaborer sur un pied d'égalité au projet social", "Le pacte d'actionnaires", "Le capital social"],
    answer: 1,
    explain: "Affectio societatis : volonté commune des associés de participer activement et sur un pied d'égalité à la vie de la société. Élément constitutif essentiel." },

  { kind: 'qcm', sub: 'regles-communes',
    question: "Une clause léonine est :",
    choices: ["Une clause d'agrément", "Une clause attribuant à un associé tous les bénéfices ou l'exonérant des pertes", "Une clause de préemption", "Une clause de non-concurrence"],
    answer: 1,
    explain: "Art. 1844-1 al. 2 : clause léonine = clause qui attribue tous les bénéfices à un seul associé ou l'exonère de toute contribution aux pertes. Réputée non écrite." },

  { kind: 'qcm', sub: 'regles-communes',
    question: "L'apport en industrie :",
    choices: ["Est interdit dans toutes les sociétés", "Donne droit à des parts mais pas au capital", "Est obligatoire en SA", "Est constitué d'argent"],
    answer: 1,
    explain: "Apport en industrie = apport de savoir-faire/travail. Donne droit à des parts dans les bénéfices mais ne concourt pas à la formation du capital. Interdit en SA." },

  { kind: 'qcm', sub: 'regles-communes',
    question: "Pour un apport en nature, qui en évalue la valeur ?",
    choices: ["L'AG", "Le commissaire aux apports (CAA)", "Le notaire obligatoirement", "L'expert-comptable"],
    answer: 1,
    explain: "Le commissaire aux apports (CAA) est désigné pour évaluer les apports en nature. Désignation obligatoire en SA. Possibilité de dispense en SARL et SAS sous conditions (apport < 30 K€ et < moitié du capital)." },

  { kind: 'qcm', sub: 'regles-communes',
    question: "Délai de prescription d'une action en nullité de société ?",
    choices: ["1 an", "3 ans", "5 ans", "30 ans"],
    answer: 1,
    explain: "Art. 1844-14 C. civ. : prescription 3 ans à compter du jour où la nullité est encourue." },

  { kind: 'vf', sub: 'regles-communes',
    statement: "La nullité d'une société produit ses effets uniquement pour l'avenir (équivaut à une dissolution).",
    answer: true,
    explain: "Art. 1844-15 C. civ. : la nullité d'une société n'est pas rétroactive (contrairement au droit commun des contrats). Les actes passés avec les tiers de bonne foi restent valables." },

  // ─── Formes sociales ──────────────────────────────────────────────
  { kind: 'qcm', sub: 'formes',
    question: "Combien d'associés peut compter au maximum une SARL ?",
    choices: ["50", "100", "150", "Illimité"],
    answer: 1,
    explain: "SARL : 2 à 100 associés. Au-delà, transformation en SA ou SAS requise. EURL = SARL à 1 associé." },

  { kind: 'qcm', sub: 'formes',
    question: "Quel est le capital minimum d'une SARL ?",
    choices: ["1 €", "7 500 €", "37 000 €", "Pas de minimum légal depuis 2003"],
    answer: 3,
    explain: "Depuis la loi Dutreil 2003, la SARL n'a plus de capital minimum (1 € symbolique possible)." },

  { kind: 'qcm', sub: 'formes',
    question: "Libération minimum des apports en numéraire en SARL ?",
    choices: ["1/4 à la constitution, reste 5 ans", "1/5 à la constitution, reste 5 ans", "Moitié immédiatement", "Totalité à la constitution"],
    answer: 1,
    explain: "SARL : 1/5 des apports en numéraire libérés à la constitution, le solde dans les 5 ans. (SA et SAS : 1/2 à la constitution.)" },

  { kind: 'qcm', sub: 'formes',
    question: "Le gérant d'une SARL doit être :",
    choices: ["Une personne morale", "Une personne physique obligatoirement", "Soit personne physique, soit morale", "Un associé obligatoirement"],
    answer: 1,
    explain: "Art. L. 223-18 C. com. : le gérant de SARL doit être une personne physique. Associé ou non, majeur capable, non frappé d'interdiction." },

  { kind: 'qcm', sub: 'formes',
    question: "Régime social d'un gérant majoritaire de SARL (> 50 %) ?",
    choices: ["Salarié", "TNS (travailleur non salarié, SSI)", "Assimilé salarié", "Profession libérale"],
    answer: 1,
    explain: "Gérant majoritaire = TNS, affilié à la SSI (ex-RSI). Gérant minoritaire/égalitaire = assimilé salarié. Fiscalement : art. 62 CGI pour le gérant majoritaire." },

  { kind: 'qcm', sub: 'formes',
    question: "Quel est le capital social minimum d'une SA ?",
    choices: ["1 €", "7 500 €", "37 000 €", "225 000 €"],
    answer: 2,
    explain: "Capital minimum SA : 37 000 €. Libération : 1/2 à la constitution. Apports en industrie interdits." },

  { kind: 'qcm', sub: 'formes',
    question: "Nombre minimum d'actionnaires en SA non cotée ?",
    choices: ["1", "2 (depuis l'ord. 2015)", "7", "10"],
    answer: 1,
    explain: "Depuis l'ord. 2015 : 2 actionnaires minimum en SA non cotée. 7 minimum si SA cotée." },

  { kind: 'qcm', sub: 'formes',
    question: "Composition du Conseil d'Administration d'une SA (art. L. 225-17) ?",
    choices: ["3 à 12", "3 à 18", "5 à 24", "Pas de limite"],
    answer: 1,
    explain: "CA : 3 administrateurs minimum, 18 maximum. Mandat 6 ans maximum statutaire." },

  { kind: 'qcm', sub: 'formes',
    question: "Quel est le pourcentage minimum du sexe le moins représenté au CA (loi Copé-Zimmermann) ?",
    choices: ["20%", "30%", "40%", "50%"],
    answer: 2,
    explain: "Loi Copé-Zimmermann 2011 : 40% du sexe le moins représenté. Étendue aux sociétés ≥ 250 sal. et 50 M€ CA." },

  { kind: 'qcm', sub: 'formes',
    question: "Que signifie « ad nutum » en droit des sociétés ?",
    choices: ["À durée indéterminée", "Avec préavis", "Sans préavis ni motif", "Avec accord notarié"],
    answer: 2,
    explain: "Révocation ad nutum = sans préavis ni motif. Administrateurs de SA, Président du CA, Conseil de surveillance, etc. Mais respect du contradictoire (Cass. com. 3 janv. 1996)." },

  { kind: 'qcm', sub: 'formes',
    question: "Dans la SA dualiste, qui contrôle la gestion ?",
    choices: ["Le directoire", "Le conseil de surveillance", "Le PDG", "L'AG seulement"],
    answer: 1,
    explain: "SA dualiste (inspiration allemande) : séparation absolue. Le directoire (2 à 5 membres, jusqu'à 7 si capital ≥ 150 K€ ou coté) gère. Le conseil de surveillance contrôle." },

  { kind: 'vf', sub: 'formes',
    statement: "Un membre du conseil de surveillance peut être membre du directoire.",
    answer: false,
    explain: "Faux. Incompatibilité absolue : un membre du CS ne peut être membre du directoire. La séparation gestion/contrôle est stricte." },

  { kind: 'qcm', sub: 'formes',
    question: "Capital minimum d'une SAS ?",
    choices: ["1 €", "Pas de minimum (sauf SAS audit/EC)", "37 000 €", "150 000 €"],
    answer: 1,
    explain: "SAS : pas de capital minimum (sauf SAS d'audit/EC). 1/2 libéré à la constitution, reste 5 ans." },

  { kind: 'qcm', sub: 'formes',
    question: "Quel est l'article fondateur de la liberté statutaire en SAS ?",
    choices: ["L. 223-1", "L. 225-1", "L. 227-5 C. com.", "L. 232-1"],
    answer: 2,
    explain: "Art. L. 227-5 : « Les statuts fixent les conditions dans lesquelles la société est dirigée. » Liberté quasi-totale d'organisation." },

  { kind: 'vf', sub: 'formes',
    statement: "La SAS peut faire offre au public (introduction en bourse).",
    answer: false,
    explain: "Faux. Art. L. 227-2 C. com. : la SAS ne peut faire offre au public. Pour entrer en bourse, il faut transformer en SA préalablement." },

  { kind: 'vf', sub: 'formes',
    statement: "Le président d'une SAS est obligatoirement une personne physique.",
    answer: false,
    explain: "Faux. Le président de SAS peut être une personne physique OU morale (contrairement au gérant de SARL). Statut social : assimilé salarié." },

  { kind: 'qcm', sub: 'formes',
    question: "Quelle est la transformation SARL → SAS exigeant l'unanimité ?",
    choices: ["Aucune", "Décision à la majorité simple", "Décision à l'unanimité des associés (art. L. 227-3)", "Décision du gérant"],
    answer: 2,
    explain: "Art. L. 227-3 : transformation en SAS = unanimité des associés (en raison de l'augmentation potentielle des engagements et de la liberté statutaire)." },

  { kind: 'qcm', sub: 'formes',
    question: "Caractéristique de la SCA (société en commandite par actions) ?",
    choices: ["Tous les associés ont une responsabilité limitée", "Deux catégories : commandités (resp. indéfinie) et commanditaires (resp. limitée)", "Forme hybride mixte SA/SARL", "Société à responsabilité unilatérale"],
    answer: 1,
    explain: "SCA : 2 catégories. Commandités = commerçants, responsabilité indéfinie et solidaire, assurent la direction. Commanditaires = responsabilité limitée. Ex : Lagardère, Michelin." },

  { kind: 'qcm', sub: 'formes',
    question: "Quelle société exige que tous les associés aient la qualité de commerçant ?",
    choices: ["SARL", "SA", "SAS", "SNC"],
    answer: 3,
    explain: "SNC : tous les associés sont commerçants et répondent indéfiniment et solidairement des dettes sociales. Forte intuitus personae (cessions à l'unanimité)." },

  { kind: 'qcm', sub: 'formes',
    question: "Fiscalité par défaut d'une SNC ?",
    choices: ["IS", "IR par transparence (option IS possible)", "Pas d'imposition", "Impôt spécifique SNC"],
    answer: 1,
    explain: "SNC : IR par défaut (transparence fiscale, imposition entre les mains des associés). Option pour l'IS possible (irrévocable, sauf renonciation 5 ans, LF 2019)." },

  // ─── Dirigeants ───────────────────────────────────────────────────
  { kind: 'qcm', sub: 'dirigeants',
    question: "Qu'est-ce qu'un dirigeant de fait ?",
    choices: ["Le dirigeant statutaire", "Un actionnaire majoritaire", "Une personne qui exerce, sans désignation régulière, une activité positive de direction, indépendante et continue", "Le commissaire aux comptes"],
    answer: 2,
    explain: "Dirigeant de fait : 3 critères (jurisprudence) — activité positive de gestion, indépendance, continuité. Assimilé au dirigeant de droit pour la responsabilité (Cass. com., 6 mars 2007)." },

  { kind: 'qcm', sub: 'dirigeants',
    question: "Régime de révocation d'un administrateur de SA ?",
    choices: ["Pour juste motif uniquement", "Ad nutum par l'AG", "Avec accord du CAC", "Sur décision du juge"],
    answer: 1,
    explain: "Administrateurs de SA : révocables ad nutum par l'AG (art. L. 225-18 C. com.). Le respect du contradictoire reste exigé." },

  { kind: 'qcm', sub: 'dirigeants',
    question: "Régime de révocation du gérant de SARL ?",
    choices: ["Ad nutum", "Pour juste motif par majorité des parts (sinon DI)", "Décision du juge", "Unanimité des associés"],
    answer: 1,
    explain: "Gérant de SARL : révocation par décision des associés représentant > 50% des parts. Si sans juste motif : DI (mais la révocation est efficace)." },

  { kind: 'qcm', sub: 'dirigeants',
    question: "Vis-à-vis des tiers de bonne foi, dans une SARL, le gérant engage la société :",
    choices: ["Uniquement pour les actes dans l'objet social", "Pour tous les actes, même hors objet social", "Uniquement avec accord unanime", "Jamais sans pouvoir spécial"],
    answer: 1,
    explain: "Art. L. 223-18 al. 5 : la SARL est engagée même par les actes du gérant dépassant l'objet social, sauf si elle prouve la mauvaise foi du tiers. Clauses statutaires limitatives inopposables aux tiers." },

  { kind: 'qcm', sub: 'dirigeants',
    question: "Pour les SNC et SC, le dépassement de l'objet social par le gérant :",
    choices: ["Engage la société comme en SARL", "N'engage pas la société à l'égard des tiers", "Engage uniquement le gérant fautif", "Suppose une AG préalable"],
    answer: 1,
    explain: "Sociétés à risque illimité (SNC, SC) : le dépassement de l'objet social n'engage pas la société. Logique : on ne peut étendre la responsabilité illimitée au-delà de ce qui a été consenti (l'objet social)." },

  { kind: 'qcm', sub: 'dirigeants',
    question: "Les 3 responsabilités du dirigeant sont :",
    choices: ["Civile, pénale, administrative", "Civile, pénale, fiscale", "Pénale, fiscale, disciplinaire", "Civile, fiscale, déontologique"],
    answer: 1,
    explain: "3 responsabilités cumulables : civile (L. 223-22, L. 225-251), pénale (ABS…), fiscale (L. 267 LPF — solidarité fiscale)." },

  { kind: 'qcm', sub: 'dirigeants',
    question: "L'action sociale ut singuli est exercée par :",
    choices: ["La société elle-même", "Un associé en cas de carence des dirigeants en place", "Le procureur", "Le CAC"],
    answer: 1,
    explain: "Ut singuli : un ou plusieurs associés agissent au nom de la société (en cas de carence). Les DI vont à la société. À distinguer de l'action individuelle (préjudice personnel direct, DI à l'associé)." },

  { kind: 'qcm', sub: 'dirigeants',
    question: "Selon l'arrêt Seusse (Cass. com. 20 mai 2003), la responsabilité civile du dirigeant envers les tiers suppose :",
    choices: ["Une simple faute de gestion", "Une faute détachable des fonctions", "Une intention frauduleuse écrite", "Une condamnation pénale préalable"],
    answer: 1,
    explain: "Arrêt Seusse : « faute intentionnelle d'une particulière gravité, incompatible avec l'exercice normal des fonctions sociales ». À défaut, c'est la société qui répond." },

  { kind: 'qcm', sub: 'dirigeants',
    question: "Quelle est la responsabilité fiscale du dirigeant (art. L. 267 LPF) ?",
    choices: ["Aucune", "Solidarité fiscale en cas de manœuvres frauduleuses ou inobservation grave et répétée", "Substitution intégrale", "Caution personnelle automatique"],
    answer: 1,
    explain: "L. 267 LPF : le dirigeant peut être solidairement responsable des impositions et pénalités dues par la société si ses fautes graves ont rendu impossible le recouvrement." },

  { kind: 'vf', sub: 'dirigeants',
    statement: "Même une révocation ad nutum peut donner lieu à DI si elle est brutale ou vexatoire.",
    answer: true,
    explain: "Jurisprudence constante : DI possibles pour révocation brutale/vexatoire ou non respect du contradictoire (Cass. com. 3 janv. 1996), même en cas de révocation ad nutum." },

  { kind: 'flashcard', sub: 'dirigeants',
    front: "Régime de révocation par forme sociale",
    back: "SARL gérant : juste motif (sinon DI). SA administrateurs : ad nutum. SA Président : ad nutum. SA DG : juste motif (sauf PDG : ad nutum). Directoire : juste motif. CS : ad nutum. SAS : selon statuts (totale liberté)." },

  // ─── Associés ────────────────────────────────────────────────────
  { kind: 'qcm', sub: 'associes',
    question: "Quels sont les 4 droits fondamentaux de l'associé ?",
    choices: ["Vote, information, dividendes, boni de liquidation", "Sortir, voter, contrôler, ester", "Participer, refuser, modifier, dissoudre", "Apport, gestion, retrait, transmission"],
    answer: 0,
    explain: "Les 4 droits fondamentaux : dividendes, boni de liquidation, vote, information (communication des documents sociaux)." },

  { kind: 'qcm', sub: 'associes',
    question: "Qu'est-ce que l'abus de majorité ?",
    choices: ["Vote contraire à l'intérêt social et dans l'unique dessein de favoriser la majorité au détriment de la minorité", "Vote dépassant les pouvoirs de l'AG", "Vote sans quorum", "Vote secret en violation des statuts"],
    answer: 0,
    explain: "Abus de majorité (arrêt Schumann-Picard, Cass. com. 18 avril 1961) : 2 éléments — contraire à l'intérêt social + unique dessein de favoriser la majorité." },

  { kind: 'qcm', sub: 'associes',
    question: "L'abus de minorité suppose :",
    choices: ["Un blocage d'une décision essentielle à l'intérêt social, dans l'unique but de favoriser ses propres intérêts", "Une simple opposition", "Un vote nul", "Une absence à l'AG"],
    answer: 0,
    explain: "Abus de minorité (Cass. com. 14 janv. 1992, Vitama) : blocage par les minoritaires d'une décision essentielle à l'intérêt social, dans l'unique but de favoriser leurs intérêts. Sanction : DI + mandataire ad hoc qui votera." },

  { kind: 'qcm', sub: 'associes',
    question: "Seuil de l'expertise de gestion en SA (art. L. 225-231) ?",
    choices: ["1% du capital", "5% du capital", "10% du capital", "25% du capital"],
    answer: 1,
    explain: "Expertise de gestion en SA : associé(s) représentant ≥ 5% du capital, après questions écrites préalables non satisfaisantes. SARL : tout associé." },

  { kind: 'qcm', sub: 'associes',
    question: "Combien d'années avant la transmission débute l'engagement collectif Dutreil ?",
    choices: ["1 an", "2 ans (minimum)", "5 ans", "10 ans"],
    answer: 1,
    explain: "Pacte Dutreil (art. 787 B CGI) : engagement collectif ≥ 2 ans avant la transmission (peut être 'réputé acquis' si déjà détenu 2 ans)." },

  { kind: 'vf', sub: 'associes',
    statement: "La simple baisse de la valeur des titres résultant des fautes de gestion donne droit à l'action individuelle.",
    answer: false,
    explain: "Faux. Cass. com. 9 mars 2010 : ce préjudice est indirect (par ricochet) — il faut un préjudice personnel direct, distinct de celui de la société. Seule l'action ut singuli est ouverte." },

  // ─── Contrôle ────────────────────────────────────────────────────
  { kind: 'qcm', sub: 'controle',
    question: "Quels sont les seuils PACTE de nomination obligatoire d'un CAC (commercial) ?",
    choices: ["CA > 1 M€, bilan > 500 K€, 25 sal.", "CA > 8 M€, bilan > 4 M€, 50 sal.", "CA > 50 M€, bilan > 25 M€, 250 sal.", "CA > 100 M€"],
    answer: 1,
    explain: "Seuils PACTE (2019) : dépassement de 2 des 3 seuils — CA HT > 8 M€, total bilan > 4 M€, > 50 salariés." },

  { kind: 'qcm', sub: 'controle',
    question: "Durée du mandat d'un CAC ?",
    choices: ["3 ans", "6 exercices", "9 ans", "Indéterminée"],
    answer: 1,
    explain: "Mandat CAC : 6 exercices (= 6 ans en pratique). Renouvelable. Indépendance et incompatibilités strictes." },

  { kind: 'qcm', sub: 'controle',
    question: "Qu'est-ce qu'une convention réglementée en SA (art. L. 225-38) ?",
    choices: ["Toute convention de la société", "Une convention entre la société et un dirigeant, administrateur, actionnaire ≥ 10 %", "Une convention internationale", "Une convention notariée"],
    answer: 1,
    explain: "Conventions entre la société et un dirigeant / actionnaire ≥ 10% / société liée. Procédure : autorisation préalable du CA + rapport du CAC + approbation AG." },

  { kind: 'qcm', sub: 'controle',
    question: "Quelles conventions sont absolument interdites en SA (art. L. 225-43) ?",
    choices: ["Toutes les conventions avec dirigeants", "Emprunts, découverts, cautions consentis par la société à ses dirigeants personnes physiques", "Tout cumul de mandats", "Les opérations courantes"],
    answer: 1,
    explain: "Art. L. 225-43 : interdiction absolue pour les administrateurs (personnes physiques), DG, DGD de contracter des emprunts, découverts, cautions auprès de la société. Sanction : nullité absolue." },

  { kind: 'qcm', sub: 'controle',
    question: "Combien de phases comporte la procédure d'alerte du CAC en SA (art. L. 234-1) ?",
    choices: ["2", "3", "4 (Président → CA → AG → Président TC)", "5"],
    answer: 2,
    explain: "4 phases en SA : 1) information du Président ; 2) information du CA ; 3) information de l'AG ; 4) information du Président du tribunal de commerce." },

  // ─── Restructurations / Dissolution ──────────────────────────────
  { kind: 'qcm', sub: 'restructurations',
    question: "Qu'entraîne juridiquement une fusion-absorption ?",
    choices: ["Création d'une PM nouvelle", "TUP + dissolution sans liquidation de l'absorbée + échange de titres", "Vente d'actifs imposable", "Scission proportionnelle"],
    answer: 1,
    explain: "Effets cumulatifs : transmission universelle du patrimoine, dissolution sans liquidation de l'absorbée, échange de titres (soulte max 10%)." },

  { kind: 'qcm', sub: 'restructurations',
    question: "La fusion simplifiée (filiale à 100%) :",
    choices: ["Nécessite toujours une AGE", "Dispense de plusieurs formalités (pas d'AGE, pas de rapports, pas d'échange de titres)", "Est interdite", "Suppose un commissaire à la fusion"],
    answer: 1,
    explain: "Filiale détenue à 100% par l'absorbante : pas d'AGE, pas de rapports, pas d'échange de titres (puisque les actions de la fille sont déjà détenues par la mère)." },

  { kind: 'vf', sub: 'restructurations',
    statement: "La transformation d'une société en SAS nécessite l'unanimité des associés.",
    answer: true,
    explain: "Art. L. 227-3 : transformation en SAS = unanimité (en raison de la liberté statutaire et de la possible augmentation des engagements)." },

  { kind: 'vf', sub: 'restructurations',
    statement: "Une transformation entraîne la création d'une nouvelle personne morale.",
    answer: false,
    explain: "Faux. Principe : la transformation n'entraîne PAS création d'une nouvelle PM. Continuité juridique. Conséquence : pas de TUP, maintien des contrats (art. L. 1224-1 pour les contrats de travail)." },

  { kind: 'qcm', sub: 'restructurations',
    question: "Quelle est la soulte maximum admise dans une fusion ?",
    choices: ["5%", "10% de la valeur nominale", "20%", "Pas de plafond"],
    answer: 1,
    explain: "Soulte maximum 10% de la valeur nominale des titres remis. Au-delà : l'opération est requalifiée." },

  { kind: 'qcm', sub: 'restructurations',
    question: "Quelle est la durée maximum d'une société commerciale ?",
    choices: ["50 ans", "99 ans (prorogeable)", "Pas de limite", "30 ans"],
    answer: 1,
    explain: "Durée statutaire maximum : 99 ans, prorogeable (loi 2019 facilite la prorogation tacite)." },

  { kind: 'qcm', sub: 'restructurations',
    question: "Causes de dissolution selon l'art. 1844-7 C. civ. (sociétés) :",
    choices: ["Uniquement la liquidation judiciaire", "Plusieurs : arrivée du terme, réalisation/extinction de l'objet, annulation, dissolution anticipée, etc.", "Uniquement la décision des associés", "Seulement le décès du gérant"],
    answer: 1,
    explain: "8 causes principales (art. 1844-7) : terme, réalisation/extinction objet, annulation, dissolution anticipée, jugement, liquidation judiciaire, réunion des parts en une seule main (sauf régularisation 1 an), autres causes statutaires." },

  { kind: 'qcm', sub: 'restructurations',
    question: "Quel est l'effet de la réunion de toutes les parts/actions en une seule main ?",
    choices: ["Dissolution automatique immédiate", "Dissolution possible après 1 an sans régularisation (SARL, SA, SAS deviennent uni-personnelles)", "Aucun effet", "Liquidation judiciaire"],
    answer: 1,
    explain: "Pour SARL → EURL, SAS → SASU : pas de dissolution, transformation de plein droit en société unipersonnelle. Pour les autres formes (SA, SNC, SCA…) : dissolution si pas régularisé dans 1 an." },

  { kind: 'flashcard', sub: 'restructurations',
    front: "Conditions communes aux transformations en SARL/SAS",
    back: "1) Au moins 2 exercices clos approuvés ; 2) Certification CAC sur les comptes ; 3) Désignation d'un commissaire à la transformation (mission : valeur des biens + avantages particuliers)." },

  { kind: 'assoc', sub: 'formes',
    prompt: "Associez chaque forme sociale à sa caractéristique distinctive",
    pairs: [
      ["SARL", "Gérant personne physique, mixte"],
      ["SA", "Capital min 37 000 €, apports en industrie interdits"],
      ["SAS", "Liberté statutaire totale (L. 227-5)"],
      ["SNC", "Responsabilité indéfinie et solidaire, qualité de commerçant"],
    ] },

  { kind: 'assoc', sub: 'dirigeants',
    prompt: "Associez chaque dirigeant à son régime de révocation",
    pairs: [
      ["Administrateur SA", "Ad nutum par AG"],
      ["Gérant SARL", "Juste motif (sinon DI)"],
      ["Président SAS", "Selon statuts (liberté)"],
      ["Membres directoire", "Juste motif (sinon DI)"],
    ] },

  { kind: 'qcm', sub: 'formes',
    question: "Quelle SAS a un statut particulier en matière de capital minimum ?",
    choices: ["SAS de plus de 10 salariés", "SAS d'audit et d'expertise comptable", "SAS cotée (impossible)", "SAS holding"],
    answer: 1,
    explain: "Les SAS d'audit, d'expertise comptable et certains secteurs réglementés ont des règles de capital spécifiques. Sinon, pas de minimum." },

  { kind: 'qcm', sub: 'dirigeants',
    question: "Combien de DG délégués maximum dans une SA moniste ?",
    choices: ["1", "3", "5 (art. L. 225-53)", "10"],
    answer: 2,
    explain: "Art. L. 225-53 : 5 directeurs généraux délégués maximum. Nommés par le CA sur proposition du DG." },

  { kind: 'qcm', sub: 'formes',
    question: "Sanction pour défaut de désignation d'un CAC quand obligatoire ?",
    choices: ["Aucune", "Nullité des assemblées + sanctions pénales pour les dirigeants", "Amende civile uniquement", "Dissolution automatique"],
    answer: 1,
    explain: "Défaut de désignation d'un CAC obligatoire : nullité des délibérations + sanctions pénales (emprisonnement 2 ans + 30 000 € pour les dirigeants — art. L. 820-4 C. com.)." },

  { kind: 'qcm', sub: 'controle',
    question: "Procédure d'agrément en cas de cession de parts SARL à un tiers ?",
    choices: ["Aucun agrément requis", "Agrément des associés représentant la majorité des parts (art. L. 223-14)", "Décision du gérant seul", "Unanimité obligatoire"],
    answer: 1,
    explain: "Art. L. 223-14 : agrément des associés représentant > 50% des parts sociales. Cessions familiales et entre associés : libres (sauf clause statutaire contraire)." },

  { kind: 'qcm', sub: 'associes',
    question: "L'exclusion d'un associé est-elle possible ?",
    choices: ["Jamais", "Oui mais seulement dans les sociétés à capital variable, sociétés cotées, SAS si statuts le prévoient, etc.", "Toujours par majorité simple", "Uniquement par décision judiciaire"],
    answer: 1,
    explain: "Cas limités : sociétés à capital variable (L. 231-6), SAS si clause statutaire (L. 227-16), procédures collectives, redressement judiciaire. Rachat à valeur fixée par expert (art. 1843-4 C. civ.)." },

  { kind: 'qcm', sub: 'restructurations',
    question: "Effet d'une SA en cas de transformation en SAS (capital nécessaire) ?",
    choices: ["Doit augmenter à 100 000 €", "Doit avoir 2 exercices clos certifiés + désignation d'un commissaire à la transformation", "Doit obligatoirement diminuer", "Aucune condition"],
    answer: 1,
    explain: "Conditions communes : 2 exercices clos, certification CAC, commissaire à la transformation. Unanimité (L. 227-3) car passage en SAS." },
];
