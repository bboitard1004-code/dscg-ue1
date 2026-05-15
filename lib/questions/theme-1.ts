import type { Question } from '../types';

// ╔══════════════════════════════════════════════════════════════════╗
// ║ THÈME 1 — L'ENTREPRISE ET SON ENVIRONNEMENT                       ║
// ║ ~75 questions couvrant : contrats, concurrence, PI, pénal, fisc.  ║
// ╚══════════════════════════════════════════════════════════════════╝

export const THEME_1: Question[] = [
  // ─────────────────────────────────────────────────────────────────
  // 1.1 Droit des contrats
  // ─────────────────────────────────────────────────────────────────
  { kind: 'qcm', sub: 'contrats',
    question: "Quelle ordonnance a réformé le droit français des contrats ?",
    choices: ["Ord. 2016-131 du 10 février 2016", "Loi PACTE 2019", "Loi Hamon 2014", "Loi Macron 2015"],
    answer: 0,
    explain: "L'ordonnance 2016-131 du 10 février 2016 (ratifiée par la loi 2018-287 du 20 avril 2018) a réformé le droit des contrats, du régime général et de la preuve des obligations." },

  { kind: 'qcm', sub: 'contrats',
    question: "Quels sont les 3 principes directeurs du droit des contrats (art. 1102-1104) ?",
    choices: ["Force obligatoire, effet relatif, bonne foi", "Liberté contractuelle, force obligatoire, bonne foi", "Consensualisme, liberté, équité", "Loyauté, transparence, justice contractuelle"],
    answer: 1,
    explain: "Les 3 principes directeurs : liberté contractuelle (1102), force obligatoire (1103), bonne foi (1104). La bonne foi est d'ordre public." },

  { kind: 'qcm', sub: 'contrats',
    question: "Selon l'art. 1128 C. civ., quelles sont les 3 conditions de validité du contrat ?",
    choices: ["Cause, objet, consentement", "Consentement, capacité, contenu licite et certain", "Écrit, signature, date", "Bonne foi, équité, transparence"],
    answer: 1,
    explain: "Art. 1128 (réforme 2016) : consentement des parties, capacité de contracter, contenu licite et certain. La 'cause' a disparu." },

  { kind: 'qcm', sub: 'contrats',
    question: "Quel arrêt a posé la limite du devoir d'information à la valeur de la prestation ?",
    choices: ["Cass. com. 22 oct. 1996, Chronopost", "Cass. civ. 1re, 3 mai 2000, Baldus", "Cass. com. 26 nov. 2003, Manoukian", "Cass. civ. 6 mars 1876, Canal de Craponne"],
    answer: 1,
    explain: "Arrêt Baldus (Cass. civ. 1re, 3 mai 2000) : aucune obligation d'information sur la valeur. Codifié à l'art. 1112-1 al. 2." },

  { kind: 'qcm', sub: 'contrats',
    question: "Que prévoit l'article 1195 C. civ. (imprévision) ?",
    choices: ["L'annulation automatique du contrat", "Renégociation puis adaptation/résolution par le juge en cas de changement imprévisible", "La force majeure", "Le devoir de loyauté précontractuelle"],
    answer: 1,
    explain: "Imprévision (nouveauté 2016) : renégociation, puis adaptation ou résolution par le juge si l'exécution devient excessivement onéreuse. Disposition supplétive." },

  { kind: 'qcm', sub: 'contrats',
    question: "L'article 1195 (imprévision) renverse quelle jurisprudence ?",
    choices: ["Arrêt Chronopost", "Arrêt Baldus", "Arrêt Canal de Craponne (1876)", "Arrêt Cruz (1993)"],
    answer: 2,
    explain: "Avant 2016 : Cass. civ. 6 mars 1876, Canal de Craponne, refusait toute révision pour imprévision. La réforme renverse cette jurisprudence séculaire." },

  { kind: 'qcm', sub: 'contrats',
    question: "Combien de remèdes l'inexécution du contrat ouvre-t-elle (art. 1217) ?",
    choices: ["3", "5", "7", "Un seul, les DI"],
    answer: 1,
    explain: "Art. 1217 — 5 remèdes : exception d'inexécution, exécution forcée, réduction du prix, résolution, dommages-intérêts. Les sanctions non incompatibles se cumulent." },

  { kind: 'qcm', sub: 'contrats',
    question: "Quels sont les 3 caractères de la force majeure (art. 1218) ?",
    choices: ["Cas fortuit, hasard, urgence", "Extériorité, imprévisibilité, irrésistibilité", "Faute, lien causal, préjudice", "Bonne foi, contradiction, opposabilité"],
    answer: 1,
    explain: "Art. 1218 : un événement qui échappe au contrôle du débiteur (extériorité), imprévisible et dont les effets sont irrésistibles." },

  { kind: 'qcm', sub: 'contrats',
    question: "La résolution unilatérale (art. 1226) :",
    choices: ["Nécessite toujours l'autorisation préalable du juge", "Est possible aux risques et périls du créancier, par notification écrite", "N'est pas prévue par le droit français", "Suppose une clause résolutoire expresse"],
    answer: 1,
    explain: "Art. 1226 — innovation 2016 : la partie victime peut résoudre unilatéralement à ses risques et périls, par notification, sans recours préalable au juge (contrôle a posteriori)." },

  { kind: 'qcm', sub: 'contrats',
    question: "Selon l'arrêt Chronopost (Cass. com. 22 oct. 1996), une clause limitative de responsabilité :",
    choices: ["Est toujours valable", "Est réputée non écrite si elle prive d'effet l'obligation essentielle", "Est nulle de plein droit", "Doit être notariée"],
    answer: 1,
    explain: "Arrêt Chronopost : la clause qui prive d'effet l'obligation essentielle du contrat est réputée non écrite. Solution codifiée à l'art. 1170." },

  { kind: 'vf', sub: 'contrats',
    statement: "Depuis la réforme, la rétractation d'une promesse unilatérale pendant le délai d'option n'empêche pas la formation du contrat.",
    answer: true,
    explain: "Art. 1124 : la rétractation est inopérante, le bénéficiaire peut obtenir l'exécution forcée. Renversement de l'arrêt Cruz (Cass. civ. 3e, 15 déc. 1993)." },

  { kind: 'vf', sub: 'contrats',
    statement: "L'action interrogatoire permet à un tiers d'interroger le bénéficiaire d'un pacte de préférence sur son intention de s'en prévaloir.",
    answer: true,
    explain: "Art. 1123 al. 3 : à défaut de réponse dans un délai raisonnable, le bénéficiaire perd le droit d'invoquer nullité ou substitution." },

  { kind: 'vf', sub: 'contrats',
    statement: "Le devoir précontractuel d'information de l'article 1112-1 porte sur la valeur de la prestation.",
    answer: false,
    explain: "Faux. L'art. 1112-1 al. 2 exclut expressément la valeur de la prestation (solution Baldus). Le devoir est d'ordre public mais ne couvre pas la valeur." },

  { kind: 'flashcard', sub: 'contrats',
    front: "Les 3 modes de résolution du contrat (réforme 2016)",
    back: "1) Conventionnelle (clause résolutoire — art. 1225) ; 2) Unilatérale (art. 1226, aux risques et périls) ; 3) Judiciaire (art. 1227). Les DI peuvent s'ajouter (art. 1217 al. 2)." },

  { kind: 'flashcard', sub: 'contrats',
    front: "Garanties du vendeur dans la vente (Code civil)",
    back: "Délivrance (1604), garantie d'éviction (1626), garantie des vices cachés (1641 — action 2 ans, art. 1648). Pour le consommateur : garantie légale de conformité (L. 217-3 C. consom., présomption 24 mois)." },

  { kind: 'qcm', sub: 'contrats',
    question: "Quelle est l'action en garantie des vices cachés (délai) ?",
    choices: ["6 mois à compter de la vente", "1 an à compter de la livraison", "2 ans à compter de la découverte du vice (art. 1648)", "5 ans après la vente"],
    answer: 2,
    explain: "Art. 1648 : action exercée dans les 2 ans à compter de la découverte du vice." },

  // Contrats internationaux
  { kind: 'qcm', sub: 'contrats',
    question: "Sous Rome I (Règl. CE 593/2008), à défaut de choix, la loi applicable à une vente de biens est :",
    choices: ["La loi du pays de l'acheteur", "La loi du pays de résidence habituelle du vendeur", "La loi du pays de livraison", "Toujours la loi française"],
    answer: 1,
    explain: "Art. 4 Rome I — vente de biens : loi du pays de résidence habituelle du vendeur. Prestation de services : loi du prestataire." },

  { kind: 'qcm', sub: 'contrats',
    question: "Sous Bruxelles I bis, quelle est la règle de principe pour la juridiction compétente ?",
    choices: ["Tribunal du domicile du demandeur", "Tribunal du domicile du défendeur", "Tribunal du lieu d'exécution", "Choix libre du demandeur"],
    answer: 1,
    explain: "Règl. UE 1215/2012 (Bruxelles I bis), art. 4 : compétence du tribunal de l'État du domicile du défendeur (sauf compétences spéciales ou exclusives)." },

  { kind: 'qcm', sub: 'contrats',
    question: "Dans les Incoterms 2020, que désigne DPU ?",
    choices: ["Delivered Place Unloaded — vendeur livre et décharge à destination", "Delivered Paid Unloaded", "Direct Port Unloaded", "Document Payment Unit"],
    answer: 0,
    explain: "DPU (Delivered at Place Unloaded) a remplacé DAT en 2020 : le vendeur livre et décharge la marchandise au lieu convenu." },

  { kind: 'qcm', sub: 'contrats',
    question: "Avec l'incoterm CIP, à quel moment le risque est-il transféré ?",
    choices: ["À la livraison à destination", "Dès la remise au premier transporteur (au départ)", "Au paiement", "Au déchargement"],
    answer: 1,
    explain: "Groupe C (CPT, CIP, CFR, CIF) : le vendeur paie le transport mais le risque est transféré au départ (à la remise au transporteur)." },

  { kind: 'qcm', sub: 'contrats',
    question: "Quelle convention permet la reconnaissance internationale des sentences arbitrales ?",
    choices: ["Convention de Vienne 1980", "Convention de New York 1958", "Convention de La Haye 1985", "Convention de Rome 1980"],
    answer: 1,
    explain: "Convention de New York du 10 juin 1958 (170 États signataires) sur la reconnaissance et l'exécution des sentences arbitrales étrangères." },

  { kind: 'assoc', sub: 'contrats',
    prompt: "Associez chaque incoterm 2020 à son groupe",
    pairs: [
      ["EXW", "Groupe E (départ)"],
      ["FOB", "Groupe F (transport principal non payé)"],
      ["CIP", "Groupe C (transport principal payé)"],
      ["DDP", "Groupe D (arrivée)"],
    ] },

  // ─────────────────────────────────────────────────────────────────
  // 1.2 Droit de la concurrence
  // ─────────────────────────────────────────────────────────────────
  { kind: 'qcm', sub: 'concurrence',
    question: "Quelle autorité française sanctionne les ententes anticoncurrentielles ?",
    choices: ["La DGCCRF seule", "L'Autorité de la concurrence", "L'AMF", "L'ARCEP"],
    answer: 1,
    explain: "L'Autorité de la concurrence (art. L. 461-1 C. com.), AAI. La DGCCRF mène les enquêtes mais la sanction relève de l'AdC." },

  { kind: 'qcm', sub: 'concurrence',
    question: "L'art. 101 TFUE concerne :",
    choices: ["L'abus de position dominante", "Les ententes", "Le contrôle des concentrations", "Les aides d'État"],
    answer: 1,
    explain: "Art. 101 TFUE : interdiction des ententes anticoncurrentielles. L'art. 102 TFUE traite de l'abus de position dominante." },

  { kind: 'qcm', sub: 'concurrence',
    question: "Quel est l'amende maximale pour une entente anticoncurrentielle en France ?",
    choices: ["1 M€", "10% du CA national HT", "10% du CA mondial HT consolidé", "5 ans de prison + 100 000 €"],
    answer: 2,
    explain: "Art. L. 464-2 C. com. : sanction pouvant atteindre 10% du CA mondial HT consolidé du groupe." },

  { kind: 'qcm', sub: 'concurrence',
    question: "Quelles sont les 4 conditions cumulatives d'exemption d'entente (art. 101 §3 TFUE) ?",
    choices: ["Gain d'efficacité, bénéfice utilisateurs, restrictions indispensables, pas d'élimination substantielle", "Bonne foi, équité, proportionnalité, transparence", "Faible part, accord écrit, marché européen, durée limitée", "Notification, autorisation, contrôle, publicité"],
    answer: 0,
    explain: "Les 4 conditions cumulatives : gain d'efficacité, bénéfice pour les utilisateurs, restrictions indispensables, pas d'élimination substantielle de la concurrence." },

  { kind: 'qcm', sub: 'concurrence',
    question: "À partir de quelle part de marché y a-t-il présomption de position dominante (CJUE, AKZO 1991) ?",
    choices: ["20%", "30%", "50%", "75%"],
    answer: 2,
    explain: "Présomption de dominance au-delà de 50% (CJUE, AKZO 1991). En dessous, des indices supplémentaires sont nécessaires." },

  { kind: 'qcm', sub: 'concurrence',
    question: "L'abus de dépendance économique :",
    choices: ["Existe en droit UE", "Est une spécificité française (art. L. 420-2 al. 2)", "Suppose une part de marché > 30%", "Concerne uniquement le secteur agricole"],
    answer: 1,
    explain: "Spécificité française. Conditions : dépendance (pas d'alternative équivalente — Cass. com. 9 avr. 2002), exploitation abusive, affectation du marché." },

  { kind: 'qcm', sub: 'concurrence',
    question: "Quels sont les seuils français de notification d'une concentration ?",
    choices: ["CA mondial > 50 M€ et national > 15 M€", "CA mondial total > 150 M€ ET 2 parties > 50 M€ en France", "CA > 250 M€ seul", "CA > 1 Md€ seul"],
    answer: 1,
    explain: "Seuils français (L. 430-2) : CA mondial total > 150 M€ ET CA réalisé en France par chacune d'au moins 2 entreprises > 50 M€." },

  { kind: 'qcm', sub: 'concurrence',
    question: "Quels sont les seuils européens de concentration ?",
    choices: ["CA mondial > 5 Md€ ET 2 parties > 250 M€ dans l'UE", "CA > 100 M€", "CA > 500 M€", "1 Md€ uniquement"],
    answer: 0,
    explain: "Règl. CE 139/2004 : CA mondial total > 5 Md€ ET 2 entreprises > 250 M€ dans l'UE. Sinon, contrôle au niveau national." },

  { kind: 'qcm', sub: 'concurrence',
    question: "Quels sont les 4 actes de concurrence déloyale (jurisprudence) ?",
    choices: ["Dumping, espionnage, contrefaçon, monopole", "Dénigrement, confusion, désorganisation, parasitisme", "Vol, fraude, escroquerie, abus de confiance", "Boycottage, embargo, sanctions, refus de vente"],
    answer: 1,
    explain: "Les 4 actes (sur fondement de l'art. 1240 C. civ.) : dénigrement, confusion, désorganisation, parasitisme." },

  { kind: 'vf', sub: 'concurrence',
    statement: "Le parasitisme consiste à 's'inscrire dans le sillage d'un concurrent en profitant de ses efforts et de sa notoriété'.",
    answer: true,
    explain: "Définition jurisprudentielle constante du parasitisme. Faute même sans risque de confusion." },

  { kind: 'qcm', sub: 'concurrence',
    question: "Quelle est la durée maximum de préavis pour une rupture brutale (L. 442-1) ?",
    choices: ["3 mois", "6 mois", "18 mois", "Pas de plafond"],
    answer: 2,
    explain: "Depuis la loi 2019, le préavis de 18 mois est réputé suffisant : il bloque toute action en rupture brutale pour insuffisance de préavis." },

  { kind: 'vf', sub: 'concurrence',
    statement: "Les pratiques de minimis (parts < 10% pour ententes horizontales, < 15% pour verticales) échappent généralement à l'interdiction.",
    answer: true,
    explain: "Communication de minimis de la Commission européenne : pratiques de faible importance, sauf restrictions caractérisées." },

  { kind: 'qcm', sub: 'concurrence',
    question: "Affaire Google Shopping (2017) — quel montant ?",
    choices: ["100 M€", "500 M€", "2,42 milliards d'euros", "10 milliards d'euros"],
    answer: 2,
    explain: "Commission européenne, juin 2017 : 2,42 Md€ d'amende pour abus de position dominante (favorisation de Google Shopping)." },

  { kind: 'flashcard', sub: 'concurrence',
    front: "Caractérisation de l'abus de position dominante",
    back: "Deux éléments cumulatifs : 1) Position dominante sur un marché pertinent (présomption > 50%) ; 2) Exploitation abusive (prix prédateurs, refus de vente, ventes liées, discrimination…). La détention seule n'est pas illicite." },

  // ─────────────────────────────────────────────────────────────────
  // 1.3 Propriété intellectuelle
  // ─────────────────────────────────────────────────────────────────
  { kind: 'qcm', sub: 'pi',
    question: "Quelle est la durée de protection d'un brevet en France ?",
    choices: ["10 ans renouvelable", "15 ans", "20 ans non renouvelable", "Vie de l'inventeur + 70 ans"],
    answer: 2,
    explain: "Brevet : 20 ans à compter du dépôt, non renouvelable (art. L. 611-2 CPI)." },

  { kind: 'qcm', sub: 'pi',
    question: "Quelles sont les 4 conditions de brevetabilité ?",
    choices: ["Originalité, nouveauté, antériorité, dépôt", "Invention, nouveauté, activité inventive, application industrielle", "Création, public, marché, dépôt", "Distinctivité, licéité, disponibilité, représentation"],
    answer: 1,
    explain: "Art. L. 611-10 CPI : invention, nouveauté, activité inventive, application industrielle." },

  { kind: 'qcm', sub: 'pi',
    question: "Quelles sont les 4 conditions de validité d'une marque ?",
    choices: ["Originalité, dépôt, public, durée", "Distinctivité, licéité, disponibilité, représentation", "Création, INPI, durée, exclusivité", "Nouveauté, antériorité, brevet, dépôt"],
    answer: 1,
    explain: "Distinctivité, licéité (non contraire à l'OP, non déceptive), disponibilité (pas d'antériorité), représentation claire et précise." },

  { kind: 'qcm', sub: 'pi',
    question: "Durée d'une marque enregistrée ?",
    choices: ["5 ans", "10 ans renouvelables indéfiniment", "20 ans", "Vie + 70 ans"],
    answer: 1,
    explain: "Marque : 10 ans renouvelables indéfiniment, sous réserve d'usage sérieux (déchéance possible après 5 ans sans usage)." },

  { kind: 'vf', sub: 'pi',
    statement: "Une marque peut être déchue pour défaut d'usage sérieux pendant 5 ans.",
    answer: true,
    explain: "Art. L. 714-5 CPI : déchéance si pas d'usage sérieux pendant 5 années consécutives." },

  { kind: 'qcm', sub: 'pi',
    question: "Que désigne la « dégénérescence » d'une marque ?",
    choices: ["L'expiration normale", "La perte de distinctivité (devenue dénomination usuelle)", "Le non-renouvellement", "Le rachat par un concurrent"],
    answer: 1,
    explain: "Dégénérescence : la marque devient l'appellation usuelle du produit (frigidaire, scotch, fermeture éclair…). Le titulaire doit défendre activement sa marque." },

  { kind: 'qcm', sub: 'pi',
    question: "Quelle autorité délivre le brevet européen unitaire (en vigueur depuis juin 2023) ?",
    choices: ["INPI", "EUIPO", "OEB (Office Européen des Brevets)", "OMPI"],
    answer: 2,
    explain: "OEB (Munich) délivre le brevet européen et le nouveau brevet unitaire (17 États UE depuis juin 2023). EUIPO gère les marques UE." },

  { kind: 'qcm', sub: 'pi',
    question: "Durée maximum de protection d'un dessin ou modèle ?",
    choices: ["10 ans", "15 ans", "25 ans (5 × 5)", "70 ans"],
    answer: 2,
    explain: "Dessins et modèles : 5 ans renouvelables 4 fois — 25 ans maximum. Conditions : nouveauté + caractère propre." },

  { kind: 'qcm', sub: 'pi',
    question: "Durée du droit d'auteur post mortem ?",
    choices: ["20 ans", "50 ans", "70 ans après le décès de l'auteur", "100 ans"],
    answer: 2,
    explain: "Vie de l'auteur + 70 ans post mortem (art. L. 123-1 CPI). Protection automatique dès la création originale." },

  { kind: 'vf', sub: 'pi',
    statement: "Pour les logiciels créés par un salarié, l'employeur est titulaire des droits patrimoniaux.",
    answer: true,
    explain: "Art. L. 113-9 CPI : titularité de l'employeur sur le logiciel créé par le salarié dans le cadre de ses fonctions (dérogation au principe de l'auteur)." },

  { kind: 'qcm', sub: 'pi',
    question: "Quelle est la sanction pénale de la contrefaçon de brevet ?",
    choices: ["1 an + 50 000 €", "3 ans + 300 000 €", "5 ans + 500 000 €", "10 ans + 1 M€"],
    answer: 1,
    explain: "Art. L. 615-14 CPI : 3 ans + 300 000 €. Marque : 4 ans + 400 000 €. Bande organisée : 7 ans + 750 000 €." },

  { kind: 'qcm', sub: 'pi',
    question: "Quel est le délai pour assigner après une saisie-contrefaçon ?",
    choices: ["8 jours", "20 jours civils", "30 jours", "2 mois"],
    answer: 1,
    explain: "Délai impératif de 20 jours civils (ou 31 jours ouvrables) à compter de la saisie pour assigner au fond, à peine de nullité de la saisie." },

  { kind: 'flashcard', sub: 'pi',
    front: "PI industrielle vs PI littéraire et artistique",
    back: "Industrielle (brevet, marque, dessin/modèle) = dépôt obligatoire, durée variable et limitée. Littéraire et artistique (droit d'auteur) = protection automatique dès création originale, vie + 70 ans, droit moral incessible." },

  { kind: 'assoc', sub: 'pi',
    prompt: "Associez chaque autorité à son domaine",
    pairs: [
      ["INPI", "Titres PI en France (brevets, marques, dessins)"],
      ["EUIPO", "Marque UE et dessins/modèles communautaires"],
      ["OEB", "Brevet européen et brevet unitaire"],
      ["OMPI", "Système international (Madrid, La Haye, PCT)"],
    ] },

  // ─────────────────────────────────────────────────────────────────
  // 1.4 Droit pénal des affaires
  // ─────────────────────────────────────────────────────────────────
  { kind: 'qcm', sub: 'penal',
    question: "Quel article du Code pénal pose la responsabilité pénale des personnes morales ?",
    choices: ["Art. 121-1", "Art. 121-2", "Art. 311-1", "Art. L. 242-6 C. com."],
    answer: 1,
    explain: "Art. 121-2 C. pén. depuis 1994, principe de généralité depuis la loi Perben II de 2004. Conditions : pour son compte, par organes ou représentants." },

  { kind: 'qcm', sub: 'penal',
    question: "Que sanctionne l'abus de biens sociaux (ABS) ?",
    choices: ["Le vol commis dans l'entreprise", "L'usage des biens/crédit de la société contraire à l'intérêt social, à des fins personnelles", "La fraude fiscale", "Le détournement de fonds publics"],
    answer: 1,
    explain: "Art. L. 241-3 (SARL) et L. 242-6 (SA) : 4 éléments — usage des biens/crédit, contraire à l'intérêt social, intérêt personnel, mauvaise foi. 5 ans + 375 000 €." },

  { kind: 'qcm', sub: 'penal',
    question: "Dans quelles sociétés l'ABS n'existe-t-il PAS (le détournement est qualifié d'abus de confiance) ?",
    choices: ["SARL et SA", "SAS et SCA", "SC (sociétés civiles) et SNC", "Toutes les sociétés"],
    answer: 2,
    explain: "L'ABS est une infraction propre aux sociétés commerciales par actions et à la SARL. Dans les SC et SNC, c'est l'abus de confiance (art. 314-1 C. pén.) qui s'applique." },

  { kind: 'qcm', sub: 'penal',
    question: "La doctrine Rozenblum (Cass. crim. 4 fév. 1985) pose combien de conditions pour échapper à l'ABS dans un groupe ?",
    choices: ["2", "3 (groupe organisé, intérêt commun, concours équilibré)", "4", "5"],
    answer: 1,
    explain: "Doctrine Rozenblum : 3 conditions cumulatives — groupe organisé et cohérent, intérêt économique commun, concours équilibré et contrepartie sans mise en péril financier." },

  { kind: 'qcm', sub: 'penal',
    question: "Quelle est la peine de l'escroquerie simple (art. 313-1 C. pén.) ?",
    choices: ["1 an + 15 000 €", "3 ans + 100 000 €", "5 ans + 375 000 €", "10 ans + 1 M€"],
    answer: 2,
    explain: "Escroquerie : 5 ans + 375 000 €. Aggravée (bande organisée, agent public, vulnérabilité) : 10 ans + 1 M€." },

  { kind: 'qcm', sub: 'penal',
    question: "Différence entre vol, escroquerie et abus de confiance :",
    choices: ["Vol : remise par fraude ; escroquerie : soustraction ; abus de confiance : détournement après remise licite", "Vol : soustraction sans consentement ; escroquerie : remise obtenue par fraude ; abus de confiance : détournement après remise licite", "Toutes ces infractions sont identiques", "Elles concernent uniquement la PI"],
    answer: 1,
    explain: "Vol = soustraction contre la volonté. Escroquerie = la fraude précède la remise. Abus de confiance = la remise est licite mais détournée par la suite." },

  { kind: 'vf', sub: 'penal',
    statement: "La CJIP (Convention judiciaire d'intérêt public) issue de la loi Sapin II permet d'éviter un procès pénal moyennant amende et programme de mise en conformité.",
    answer: true,
    explain: "CJIP (loi Sapin II 2016, art. 41-1-2 CPP) : alternative aux poursuites pour personnes morales. Pas de reconnaissance de culpabilité. Validation publique par le juge. Plafond : 30% du CA moyen 3 ans." },

  { kind: 'qcm', sub: 'penal',
    question: "Quel est le seuil d'application du programme anticorruption Sapin II (art. 17) ?",
    choices: ["50 sal. + 10 M€ CA", "250 sal. + 50 M€ CA", "500 sal. + 100 M€ CA", "1 000 sal. + 500 M€ CA"],
    answer: 2,
    explain: "Programme anticorruption obligatoire : société (ou groupe) ≥ 500 salariés ET CA > 100 M€. 8 piliers (code de conduite, alerte, cartographie, KYC, contrôles, formation, sanctions, audit)." },

  { kind: 'qcm', sub: 'penal',
    question: "Combien de piliers comporte le programme anticorruption Sapin II ?",
    choices: ["3", "5", "8", "10"],
    answer: 2,
    explain: "8 piliers : code de conduite, dispositif d'alerte, cartographie des risques, évaluation des tiers, contrôles comptables, formation, régime disciplinaire, contrôle interne." },

  { kind: 'qcm', sub: 'penal',
    question: "Quelle agence contrôle la mise en œuvre du programme Sapin II ?",
    choices: ["AMF", "ACPR", "AFA (Agence française anticorruption)", "DGCCRF"],
    answer: 2,
    explain: "AFA, créée par la loi Sapin II. Sanctions : amende jusqu'à 1 M€ pour la PM, 200 000 € pour le dirigeant." },

  { kind: 'qcm', sub: 'penal',
    question: "À quel organisme les professionnels assujettis déclarent-ils leurs soupçons de blanchiment ?",
    choices: ["AMF", "TRACFIN", "Procureur", "AFA"],
    answer: 1,
    explain: "TRACFIN (cellule de renseignement financier), art. L. 561-15 CMF. Déclaration confidentielle, interdiction d'informer le client." },

  { kind: 'qcm', sub: 'penal',
    question: "Quelle CJIP record en France ?",
    choices: ["Société Générale (250 M€)", "Airbus (2,08 Md€ en 2020)", "Total (50 M€)", "L'Oréal (300 M€)"],
    answer: 1,
    explain: "Airbus, CJIP de janvier 2020 : 2,083 milliards d'euros (partie française d'un accord global trilatéral avec USA et UK)." },

  { kind: 'vf', sub: 'penal',
    statement: "Une délégation de pouvoirs valide transfère la responsabilité pénale du dirigeant au délégataire.",
    answer: true,
    explain: "Conditions strictes (jurisprudence) : délégataire compétent, doté de l'autorité et des moyens nécessaires, délégation précise et limitée." },

  { kind: 'qcm', sub: 'penal',
    question: "Quelle loi a renforcé la protection des lanceurs d'alerte en 2022 ?",
    choices: ["Loi Sapin I", "Loi Waserman (21 mars 2022)", "Loi Hamon", "Loi PACTE"],
    answer: 1,
    explain: "Loi Waserman du 21 mars 2022 (transposition de la directive UE 2019/1937) : signalement interne/externe/public, protection contre représailles, charge de la preuve inversée." },

  { kind: 'flashcard', sub: 'penal',
    front: "4 éléments constitutifs de l'ABS",
    back: "1) Usage des biens ou du crédit de la société (actif ou passif) ; 2) Contraire à l'intérêt social ; 3) Intérêt personnel direct ou indirect ; 4) Mauvaise foi (conscience d'agir contre l'intérêt social)." },

  // ─────────────────────────────────────────────────────────────────
  // 1.5 Fiscalité de l'entreprise et environnement
  // ─────────────────────────────────────────────────────────────────
  { kind: 'qcm', sub: 'fiscal',
    question: "Taux normal de l'IS en France en 2026 ?",
    choices: ["15%", "20%", "25%", "33,33%"],
    answer: 2,
    explain: "Depuis 2022, le taux normal de l'IS est unique à 25% pour toutes les sociétés." },

  { kind: 'qcm', sub: 'fiscal',
    question: "Taux réduit d'IS PME et son plafond ?",
    choices: ["15% jusqu'à 42 500 €", "15% jusqu'à 38 120 €", "10% jusqu'à 50 000 €", "20% jusqu'à 100 000 €"],
    answer: 0,
    explain: "Taux réduit 15% sur les premiers 42 500 € de bénéfices. Conditions : CA < 10 M€, capital libéré et détenu à 75% par des personnes physiques." },

  { kind: 'qcm', sub: 'fiscal',
    question: "Qu'est-ce que le régime mère-fille (art. 145 CGI) ?",
    choices: ["Une exonération totale d'IS de la filiale", "Une exonération des dividendes reçus (sauf quote-part 5%) si ≥ 5% du capital + 2 ans", "Un crédit d'impôt R&D", "Un régime d'amortissement"],
    answer: 1,
    explain: "Régime mère-fille : exonération des dividendes reçus de la filiale, sous réserve d'une quote-part de frais et charges de 5%. Conditions : ≥ 5% du capital, détention ≥ 2 ans." },

  { kind: 'qcm', sub: 'fiscal',
    question: "Taux normal de TVA en France ?",
    choices: ["10%", "15%", "20%", "21%"],
    answer: 2,
    explain: "Taux normal 20%. Taux réduits : 10% (restauration, transport, etc.), 5,5% (alimentation, livres…), 2,1% (presse, médicaments remboursés)." },

  { kind: 'qcm', sub: 'fiscal',
    question: "Durée maximum d'une vérification de comptabilité dans une PME ?",
    choices: ["1 mois", "3 mois", "6 mois", "1 an"],
    answer: 1,
    explain: "Vérification de comptabilité PME : 3 mois (art. L. 52 LPF). Au-delà : nullité de la procédure." },

  { kind: 'qcm', sub: 'fiscal',
    question: "Que désigne le FEC dans le contrôle fiscal ?",
    choices: ["Fonds européen de cohésion", "Fichier des écritures comptables", "Fiche d'évaluation comptable", "Forfait d'évaluation des charges"],
    answer: 1,
    explain: "FEC = Fichier des Écritures Comptables, obligatoire depuis 2014. Base de l'examen de comptabilité à distance (depuis 2017)." },

  { kind: 'qcm', sub: 'fiscal',
    question: "Quel est le taux de la majoration pour manquement délibéré (art. 1729 CGI) ?",
    choices: ["10%", "40%", "80%", "100%"],
    answer: 1,
    explain: "Majoration 40% pour manquement délibéré (ex-mauvaise foi). 80% en cas de manœuvres frauduleuses ou abus de droit." },

  { kind: 'qcm', sub: 'fiscal',
    question: "Sanction pénale de la fraude fiscale simple (art. 1741 CGI) ?",
    choices: ["1 an + 50 000 €", "3 ans + 100 000 €", "5 ans + 500 000 €", "7 ans + 3 M€"],
    answer: 2,
    explain: "Fraude fiscale simple : 5 ans + 500 000 €. Aggravée (bande organisée, structures à l'étranger, faux) : 7 ans + 3 M€." },

  { kind: 'qcm', sub: 'fiscal',
    question: "Qu'apporte la loi PACTE 2019 au droit des sociétés (art. 1833 C. civ.) ?",
    choices: ["La fin de la SAS", "L'intégration des enjeux ESG dans la gestion sociale", "Un capital minimum SARL", "La taxe Pikettty"],
    answer: 1,
    explain: "La loi PACTE modifie l'art. 1833 : 'La société est gérée dans son intérêt social, en prenant en considération les enjeux sociaux et environnementaux de son activité.'" },

  { kind: 'qcm', sub: 'fiscal',
    question: "Qu'est-ce qu'une société à mission (créée par la loi PACTE) ?",
    choices: ["Une société d'intérêt public", "Une société dont les statuts contiennent une raison d'être avec mission vérifiable par un OTI", "Une SARL spéciale", "Une association à but lucratif"],
    answer: 1,
    explain: "Art. L. 210-10 C. com. : société à mission = raison d'être inscrite dans les statuts + objectifs sociaux/environnementaux + vérification par un OTI (organisme tiers indépendant). Ex : Danone, MAIF, Camif…" },

  { kind: 'qcm', sub: 'fiscal',
    question: "La CSRD impose un reporting selon quels standards ?",
    choices: ["GAAP", "IFRS", "ESRS (European Sustainability Reporting Standards)", "ISO 26000"],
    answer: 2,
    explain: "Directive CSRD (UE 2022/2464) : reporting selon les ESRS. Double matérialité (impact + financière). Vérification par CAC ou OTI accrédité." },

  { kind: 'qcm', sub: 'fiscal',
    question: "La taxonomie verte (Règl. UE 2020/852) compte combien d'objectifs environnementaux ?",
    choices: ["3", "6", "10", "17"],
    answer: 1,
    explain: "6 objectifs : atténuation, adaptation au changement climatique, eau/ressources marines, économie circulaire, pollution, biodiversité." },

  { kind: 'qcm', sub: 'fiscal',
    question: "Quels sont les 3 régimes ICPE ?",
    choices: ["Léger, moyen, lourd", "Déclaration, Enregistrement, Autorisation (D/E/A)", "Privé, public, mixte", "Local, national, européen"],
    answer: 1,
    explain: "3 régimes ICPE selon dangerosité : Déclaration (D), Enregistrement (E), Autorisation (A) + régime Seveso (haut/bas) pour les installations à risque majeur." },

  { kind: 'qcm', sub: 'fiscal',
    question: "Sanction du délit d'écocide (loi Climat & Résilience 2021) ?",
    choices: ["1 an + 75 000 €", "3 ans + 100 000 €", "10 ans + 4,5 M€", "20 ans + 10 M€"],
    answer: 2,
    explain: "Délit d'écocide (art. L. 231-3 C. env., loi du 22 août 2021) : 10 ans + 4,5 M€ pour pollution intentionnelle grave et durable." },

  { kind: 'qcm', sub: 'fiscal',
    question: "Combien de principes la Charte de l'environnement (2005) consacre-t-elle ?",
    choices: ["3", "5", "7", "10"],
    answer: 1,
    explain: "5 principes : prévention, précaution, pollueur-payeur, information/participation, non-régression (loi 2016)." },

  { kind: 'vf', sub: 'fiscal',
    statement: "L'art. 1246 C. civ. (loi 2016) reconnaît le préjudice écologique réparable.",
    answer: true,
    explain: "Loi du 8 août 2016 : 'Toute personne responsable d'un préjudice écologique est tenue de le réparer.' Réparation prioritairement en nature." },

  { kind: 'assoc', sub: 'fiscal',
    prompt: "Associez chaque impôt à sa base",
    pairs: [
      ["IS", "Bénéfice fiscal des sociétés"],
      ["TVA", "Consommation (différence achats / ventes)"],
      ["CFE", "Valeur locative des biens"],
      ["CVAE", "Valeur ajoutée"],
    ] },

  { kind: 'flashcard', sub: 'fiscal',
    front: "Les 8 garanties du contribuable vérifié",
    back: "1) Charte du contribuable remise ; 2) Avis de vérification ; 3) Débat contradictoire ; 4) Assistance d'un conseil ; 5) Durée limitée (3 mois PME) ; 6) Recours hiérarchique et commission ; 7) 30 jours pour répondre à la proposition de rectification ; 8) Non-renouvellement de la vérification." },
];
