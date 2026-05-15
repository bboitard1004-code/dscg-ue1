import type { Question } from '../types';

// ╔══════════════════════════════════════════════════════════════════╗
// ║ THÈME 3 — PÉRENNITÉ, TRANSMISSION, DROIT SOCIAL & FISC. GROUPE    ║
// ║ ~75 questions sur 3 sous-thèmes                                   ║
// ╚══════════════════════════════════════════════════════════════════╝

export const THEME_3: Question[] = [
  // ═══════════════════════════════════════════════════════════════════
  // 3.1 L'ENTREPRISE EN DIFFICULTÉ
  // ═══════════════════════════════════════════════════════════════════
  { kind: 'qcm', sub: 'difficulte',
    question: "Qu'est-ce que la cessation des paiements (CP) ?",
    choices: ["Une trésorerie négative", "L'impossibilité de faire face au passif exigible avec l'actif disponible", "Le dépôt de bilan", "Une faillite déclarée"],
    answer: 1,
    explain: "Art. L. 631-1 C. com. : « impossibilité de faire face au passif exigible avec son actif disponible ». Distinct des difficultés financières simples." },

  { kind: 'qcm', sub: 'difficulte',
    question: "Délai impératif pour déclarer la cessation des paiements ?",
    choices: ["15 jours", "30 jours", "45 jours", "60 jours"],
    answer: 2,
    explain: "Art. L. 631-4 : 45 jours à compter de la cessation des paiements. À défaut : sanction (interdiction de gérer, banqueroute possible)." },

  { kind: 'qcm', sub: 'difficulte',
    question: "Caractéristique du mandat ad hoc ?",
    choices: ["Procédure publique", "Confidentielle, amiable, pas en CP", "Suspension automatique des poursuites", "Durée légale de 6 mois"],
    answer: 1,
    explain: "Mandat ad hoc (L. 611-3) : confidentielle, amiable, à la demande du débiteur, pas de durée légale. Le mandataire négocie avec les créanciers. Pas d'effet de droit propre." },

  { kind: 'qcm', sub: 'difficulte',
    question: "Conditions de la conciliation (art. L. 611-4) ?",
    choices: ["Toujours en CP", "Pas en CP depuis plus de 45 jours, difficultés avérées ou prévisibles", "Réservée aux SA", "Décidée d'office par le tribunal"],
    answer: 1,
    explain: "Conciliation : difficulté avérée ou prévisible + pas en CP depuis plus de 45 jours + demande du débiteur uniquement." },

  { kind: 'qcm', sub: 'difficulte',
    question: "Durée maximum de la conciliation ?",
    choices: ["2 mois", "4 mois prorogeable 1 mois (total 5 mois)", "6 mois", "1 an"],
    answer: 1,
    explain: "4 mois maximum, prorogeable 1 mois = total 5 mois. Confidentialité stricte (sanction pénale pour violation)." },

  { kind: 'qcm', sub: 'difficulte',
    question: "Qu'est-ce que le privilège de new money en conciliation (L. 611-11) ?",
    choices: ["Un don de l'État", "Un super-privilège pour les apports d'argent frais à l'entreprise", "Une exonération fiscale", "Un prêt à taux zéro"],
    answer: 1,
    explain: "Loi 2005 : les apports en trésorerie ou en biens nouveaux pendant la conciliation homologuée bénéficient d'un privilège (paiement préférentiel en cas de procédure collective ultérieure)." },

  { kind: 'qcm', sub: 'difficulte',
    question: "Condition d'ouverture de la sauvegarde (L. 620-1) ?",
    choices: ["CP caractérisée", "Difficultés que l'entreprise ne peut surmonter, sans être en CP", "Décision du procureur", "Demande des créanciers"],
    answer: 1,
    explain: "Sauvegarde : difficultés non surmontables, MAIS PAS en CP (différence essentielle avec le redressement). Demande du débiteur uniquement." },

  { kind: 'qcm', sub: 'difficulte',
    question: "Durée de la période d'observation en sauvegarde ?",
    choices: ["3 mois", "6 mois renouvelable 1 fois (12 mois max, 18 exceptionnellement)", "1 an automatique", "2 ans"],
    answer: 1,
    explain: "6 mois renouvelables une fois, total 12 mois. Possibilité exceptionnelle d'aller jusqu'à 18 mois sur demande du ministère public." },

  { kind: 'qcm', sub: 'difficulte',
    question: "Que prévoit l'article L. 622-21 C. com. (jugement d'ouverture) ?",
    choices: ["Maintien des poursuites", "Suspension des poursuites individuelles + interdiction de payer les créances antérieures", "Liquidation immédiate", "Vente du fonds de commerce"],
    answer: 1,
    explain: "Suspension des poursuites individuelles + gel du passif antérieur (interdiction de payer toute créance née avant). Maintien des contrats en cours (L. 622-13)." },

  { kind: 'qcm', sub: 'difficulte',
    question: "Délai de déclaration des créances après publication du jugement d'ouverture ?",
    choices: ["1 mois", "2 mois (4 mois étrangers)", "6 mois", "Pas de délai"],
    answer: 1,
    explain: "Art. L. 622-24 : 2 mois à compter de la publication au BODACC (4 mois pour les créanciers étrangers). À défaut : inopposabilité de la créance (sauf relevé de forclusion)." },

  { kind: 'qcm', sub: 'difficulte',
    question: "Conditions d'ouverture du redressement judiciaire ?",
    choices: ["Difficultés financières", "Cessation des paiements caractérisée + redressement possible", "Décision d'office", "Demande des actionnaires"],
    answer: 1,
    explain: "RJ : CP caractérisée + entreprise dont le redressement est encore possible (sinon liquidation directe). Déclaration obligatoire sous 45 jours." },

  { kind: 'qcm', sub: 'difficulte',
    question: "Durée maximum du plan de continuation (redressement) ?",
    choices: ["3 ans", "5 ans", "10 ans (15 en agriculture)", "Pas de plafond"],
    answer: 2,
    explain: "Plan de continuation : durée maximum 10 ans (15 ans pour les exploitations agricoles). Aménagement du passif." },

  { kind: 'qcm', sub: 'difficulte',
    question: "Qu'est-ce que la période suspecte ?",
    choices: ["Une période d'observation", "Période entre la CP et le jugement d'ouverture (max 18 mois rétroactivement)", "Période de probation du dirigeant", "Mois précédant l'AG"],
    answer: 1,
    explain: "Période suspecte : entre la date de CP fixée par le tribunal et le jugement d'ouverture. Maximum 18 mois rétroactivement. Permet l'annulation d'actes anormaux." },

  { kind: 'qcm', sub: 'difficulte',
    question: "Nullités de droit en période suspecte (art. L. 632-1) ?",
    choices: ["Tous les actes", "Actes anormaux (à titre gratuit, paiements anticipés, dations en paiement, hypothèques pour dettes antérieures)", "Uniquement les ventes", "Seuls les actes pénaux"],
    answer: 1,
    explain: "L. 632-1 : nullités de droit pour les actes anormaux. Logique : protéger les créanciers contre les avantages indus consentis par un débiteur en difficulté." },

  { kind: 'qcm', sub: 'difficulte',
    question: "Quel est le super-privilège des salaires ?",
    choices: ["Paiement intégral des 12 derniers mois", "Paiement immédiat des salaires des 60 derniers jours avant l'ouverture", "Exonération des charges", "Paiement après les fiscales"],
    answer: 1,
    explain: "Super-privilège : salaires des 60 jours précédant l'ouverture, payés en priorité absolue. Garantie complémentaire de l'AGS." },

  { kind: 'qcm', sub: 'difficulte',
    question: "Ordre de paiement dans une procédure collective ?",
    choices: ["Chirographaires d'abord", "Super-privilège salaires → frais de justice → new money → créances postérieures utiles → privilèges → chirographaires", "Tous égaux", "Selon l'âge des créances"],
    answer: 1,
    explain: "Ordre type : 1) super-privilège salaires (60 j) ; 2) frais de justice ; 3) new money ; 4) créances postérieures utiles ; 5) privilèges spéciaux/généraux ; 6) chirographaires." },

  { kind: 'qcm', sub: 'difficulte',
    question: "Que peut-on faire en redressement qui n'est pas possible en sauvegarde ?",
    choices: ["Rien", "Plan de cession totale à un tiers", "Licencier librement", "Vendre la PI"],
    answer: 1,
    explain: "Particularité du redressement : plan de cession totale ou partielle de l'entreprise à un tiers (art. L. 642-1) — alternative au plan de continuation." },

  { kind: 'qcm', sub: 'difficulte',
    question: "Qu'est-ce que la sauvegarde accélérée (depuis 2021) ?",
    choices: ["Sauvegarde de 6 mois", "Procédure rapide (2 mois max + 2) supposant une conciliation préalable", "Une faillite express", "Un mode de liquidation"],
    answer: 1,
    explain: "Sauvegarde accélérée : préalable obligatoire d'une conciliation ; 2 mois prorogeable 1 fois (4 mois max). Objectif : imposer aux récalcitrants un plan déjà négocié." },

  { kind: 'qcm', sub: 'difficulte',
    question: "Conditions de l'action en comblement de passif (L. 651-2) ?",
    choices: ["Liquidation judiciaire + insuffisance d'actif + faute de gestion + contribution causale", "Cessation des paiements seule", "Faute professionnelle", "Difficultés simples"],
    answer: 0,
    explain: "4 conditions cumulatives. Depuis Sapin II 2016 : la simple négligence ne suffit plus (faute caractérisée requise). Délai d'action : 3 ans." },

  { kind: 'qcm', sub: 'difficulte',
    question: "Durée maximum de la faillite personnelle ?",
    choices: ["5 ans", "10 ans", "15 ans", "À vie"],
    answer: 2,
    explain: "Faillite personnelle (L. 653-1) : max 15 ans. Interdiction d'exercer une activité commerciale et de diriger, incapacité électorale, publicité RCS." },

  { kind: 'qcm', sub: 'difficulte',
    question: "Sanction de la banqueroute (L. 654-2) ?",
    choices: ["3 ans + 50 000 €", "5 ans + 75 000 €", "10 ans + 1 M€", "15 ans + 4,5 M€"],
    answer: 1,
    explain: "Banqueroute : 5 ans + 75 000 € (jusqu'à 7 ans/100 000 € selon circonstances). Fautes : comptabilité fictive, dissimulation d'actif, achats ruineux, etc." },

  { kind: 'vf', sub: 'difficulte',
    statement: "Depuis la loi Sapin II 2016, la simple négligence du dirigeant suffit à engager sa responsabilité pour insuffisance d'actif.",
    answer: false,
    explain: "Faux. Depuis 2016, la simple négligence ne suffit plus. Il faut une faute de gestion caractérisée. La loi visait à protéger les dirigeants prudents." },

  { kind: 'qcm', sub: 'difficulte',
    question: "Que désigne le COMI dans le Règlement UE 2015/848 ?",
    choices: ["Compagnie d'observation des marchés intracommunautaires", "Centre des intérêts principaux du débiteur", "Conseil d'orientation de la mise en œuvre", "Comité d'observation"],
    answer: 1,
    explain: "COMI = Centre Of Main Interests. Détermine la compétence pour ouvrir la procédure principale d'insolvabilité (présomption : siège statutaire)." },

  { kind: 'flashcard', sub: 'difficulte',
    front: "Le « droit gradué » des entreprises en difficulté",
    back: "Prévention (alerte CAC/CSE, président TC) → Amiables confidentielles (mandat ad hoc, conciliation) → Collectives (sauvegarde sans CP, redressement avec CP, liquidation si redressement impossible)." },

  { kind: 'assoc', sub: 'difficulte',
    prompt: "Associez chaque procédure à sa condition d'ouverture",
    pairs: [
      ["Mandat ad hoc", "Pas en CP, confidentielle"],
      ["Conciliation", "CP < 45 jours, difficultés"],
      ["Sauvegarde", "Pas en CP, difficultés non surmontables"],
      ["Redressement judiciaire", "CP caractérisée, redressement possible"],
    ] },

  // ═══════════════════════════════════════════════════════════════════
  // 3.2 TRANSMISSION DE L'ENTREPRISE
  // ═══════════════════════════════════════════════════════════════════
  { kind: 'qcm', sub: 'transmission',
    question: "Cession de fonds de commerce — quelles mentions obligatoires (art. L. 141-1) ?",
    choices: ["Aucune mention", "Origine, durée, prix, CA et bénéfices 3 derniers exercices, état des inscriptions, bail commercial", "Uniquement le prix", "Date et signatures seulement"],
    answer: 1,
    explain: "Art. L. 141-1 (avant loi Soilihi 2019) : mentions sur l'origine, exploitations, CA/bénéfices 3 ans, état des privilèges/nantissements, bail. La loi Soilihi a supprimé l'obligation de mentions mais maintient l'obligation d'information." },

  { kind: 'qcm', sub: 'transmission',
    question: "Quel est le délai d'opposition des créanciers à la cession du fonds de commerce ?",
    choices: ["10 jours", "20 jours", "10 jours à compter de la publication BODACC", "1 mois"],
    answer: 2,
    explain: "Délai de 10 jours à compter de la publication au BODACC. Le prix est séquestré (souvent 5 mois) pour purger les oppositions." },

  { kind: 'qcm', sub: 'transmission',
    question: "Droits d'enregistrement de la cession d'un fonds de commerce ?",
    choices: ["0% partout", "0% jusqu'à 23 K€ / 3% / 5%", "5% uniforme", "10%"],
    answer: 1,
    explain: "Barème : 0% jusqu'à 23 000 € ; 3% entre 23 000 et 200 000 € ; 5% au-delà. À la charge de l'acheteur." },

  { kind: 'qcm', sub: 'transmission',
    question: "Droits d'enregistrement de la cession d'actions (SA, SAS) ?",
    choices: ["0,1% (plafonné 5 000 €)", "3%", "5%", "10%"],
    answer: 0,
    explain: "Cession d'actions : 0,1% sans plafond. Cession de parts sociales (SARL) : 3% après abattement de 23 000 € au prorata." },

  { kind: 'qcm', sub: 'transmission',
    question: "Que prévoit la loi Hamon 2014 sur les cessions ?",
    choices: ["Une taxe sur les cessions", "Information préalable des salariés (< 250 salariés) au moins 2 mois avant la cession", "L'interdiction des cessions", "Une autorisation préfectorale"],
    answer: 1,
    explain: "Loi Hamon 2014 : info préalable des salariés 2 mois avant la cession (entreprises < 250 salariés). Sanction depuis 2015 : amende civile ≤ 2% du prix (au lieu de la nullité)." },

  { kind: 'qcm', sub: 'transmission',
    question: "Imposition de la plus-value de cession de titres (personne physique) ?",
    choices: ["IR au barème", "Flat tax 30% (12,8% IR + 17,2% PS)", "0%", "33%"],
    answer: 1,
    explain: "PFU (flat tax) 30% par défaut depuis 2018 (12,8% IR + 17,2% prélèvements sociaux). Option pour le barème IR possible." },

  { kind: 'qcm', sub: 'transmission',
    question: "Qu'est-ce qu'une garantie d'actif et de passif (GAP) ?",
    choices: ["Une assurance", "Une convention par laquelle le cédant garantit au cessionnaire la consistance de l'actif et du passif", "Une caution bancaire", "Un nantissement"],
    answer: 1,
    explain: "GAP : protection du cessionnaire de titres (la société continue, mais des passifs cachés peuvent apparaître). Plafond, seuil, durée 18-36 mois. Souvent doublée d'une « garantie de la garantie »." },

  { kind: 'qcm', sub: 'transmission',
    question: "Qu'est-ce que l'earn-out ?",
    choices: ["Une clause de non-concurrence", "Un complément de prix conditionné aux performances futures", "Un crédit-vendeur", "Une option de rachat"],
    answer: 1,
    explain: "Earn-out : partie du prix dépendant des résultats futurs (1-3 ans). Aligne les intérêts cédant/cessionnaire et facilite la valorisation." },

  { kind: 'qcm', sub: 'transmission',
    question: "Qu'est-ce qu'un LBO (Leveraged Buy-Out) ?",
    choices: ["Une fusion", "Une scission", "Une holding endettée qui rachète une société cible, remboursée par les dividendes remontés", "Une IPO"],
    answer: 2,
    explain: "LBO : holding constituée pour racheter une cible, finance avec emprunt. Effets de levier : financier (dette), fiscal (intégration), juridique (contrôle avec apport limité), social (alignement managers)." },

  { kind: 'qcm', sub: 'transmission',
    question: "Quel article interdit à la cible d'accorder un prêt pour son propre rachat ?",
    choices: ["L. 223-18", "L. 225-216 C. com.", "L. 227-2", "L. 232-1"],
    answer: 1,
    explain: "Art. L. 225-216 (inspiration britannique) : la cible ne peut accorder un prêt ni une garantie pour son propre rachat. Sanction : nullité + responsabilité du dirigeant. Limite les LBO trop agressifs." },

  { kind: 'qcm', sub: 'transmission',
    question: "Qu'est-ce qu'un MBO ?",
    choices: ["Management Buy-Out — rachat par les dirigeants en place", "Management Buy-In", "Master Buy-Out", "Major Banking Operation"],
    answer: 0,
    explain: "MBO = rachat par les dirigeants en place. MBI = rachat par des managers extérieurs. BIMBO = combinaison des deux. OBO = Owner Buy-Out (le dirigeant se vend à lui-même via holding)." },

  { kind: 'qcm', sub: 'transmission',
    question: "Caractéristique d'une SCOP ?",
    choices: ["Société coopérative à but lucratif limitée", "Société dont les salariés sont majoritaires (≥ 51% capital, ≥ 65% droits de vote), 1 homme = 1 voix", "Société sans gouvernance", "Société à objet exclusivement social"],
    answer: 1,
    explain: "SCOP : Société Coopérative et Participative. Salariés majoritaires. Forme : SARL, SA, SAS. Régime fiscal favorable. Gouvernance démocratique : 1 homme = 1 voix." },

  { kind: 'qcm', sub: 'transmission',
    question: "Abattement de donation entre parent et enfant ?",
    choices: ["50 000 €", "100 000 € tous les 15 ans", "150 000 €", "300 000 €"],
    answer: 1,
    explain: "Abattement de 100 000 € par parent et par enfant, renouvelable tous les 15 ans (art. 779 CGI)." },

  { kind: 'qcm', sub: 'transmission',
    question: "Don familial en argent (art. 790 G CGI) — abattement supplémentaire ?",
    choices: ["10 000 €", "31 865 € tous les 15 ans", "50 000 €", "100 000 €"],
    answer: 1,
    explain: "Don familial en argent : abattement supplémentaire 31 865 €. Conditions : donateur < 80 ans, donataire descendant majeur (ou neveu/nièce à défaut)." },

  { kind: 'qcm', sub: 'transmission',
    question: "Taux maximum des DMTG en ligne directe ?",
    choices: ["20%", "30%", "45% au-delà de 1 805 677 €", "60%"],
    answer: 2,
    explain: "Barème progressif jusqu'à 45% pour la fraction dépassant 1 805 677 € en ligne directe (enfants, parents)." },

  { kind: 'qcm', sub: 'transmission',
    question: "Quel est le taux de l'abattement Dutreil (art. 787 B CGI) ?",
    choices: ["50%", "75% sur la valeur des titres transmis", "90%", "100%"],
    answer: 1,
    explain: "Pacte Dutreil : abattement de 75% sur la valeur des titres transmis (DMTG calculés sur 25% seulement). Outil fiscal central de la transmission familiale." },

  { kind: 'qcm', sub: 'transmission',
    question: "Durée totale minimale des engagements Dutreil ?",
    choices: ["2 ans", "4 ans", "6 ans (2 collectif + 4 individuel)", "10 ans"],
    answer: 2,
    explain: "Engagement collectif ≥ 2 ans avant transmission + engagement individuel 4 ans après. Total : 6 ans minimum (4 ans si engagement réputé acquis)." },

  { kind: 'qcm', sub: 'transmission',
    question: "Pourcentage minimum à détenir collectivement (Dutreil, société non cotée) ?",
    choices: ["10% droits de vote", "17% financiers + 34% droits de vote", "34% / 50%", "50% / 50%"],
    answer: 1,
    explain: "Société non cotée : engagement portant sur ≥ 17% des droits financiers + 34% des droits de vote. Société cotée : 10% / 20%." },

  { kind: 'qcm', sub: 'transmission',
    question: "Cumul Dutreil + donation en pleine propriété avant 70 ans (art. 790 CGI) ?",
    choices: ["Aucun avantage cumulé", "Réduction supplémentaire de 50% des droits sur les 25% restants", "Exonération totale", "Réduction de 75%"],
    answer: 1,
    explain: "Cumul redoutable : 75% (Dutreil) + 50% (réduction de droits) → coût fiscal final divisé par ~8 par rapport à une transmission normale." },

  { kind: 'qcm', sub: 'transmission',
    question: "Quelle fonction doit-être exercée pendant la durée du pacte Dutreil ?",
    choices: ["Aucune", "Fonction de direction par un signataire (engagement + 3 ans après)", "CAC", "Comptable salarié"],
    answer: 1,
    explain: "Un signataire (ou un héritier) doit exercer son activité principale ou des fonctions de direction pendant l'engagement collectif + 3 ans après transmission." },

  { kind: 'vf', sub: 'transmission',
    statement: "Une holding « animatrice » peut bénéficier du pacte Dutreil.",
    answer: true,
    explain: "Vrai. Si la holding est animatrice (rôle actif dans la stratégie et l'animation des filiales), elle est éligible au régime Dutreil. Les holdings purement passives sont exclues." },

  { kind: 'flashcard', sub: 'transmission',
    front: "Les 5 conditions cumulatives du pacte Dutreil",
    back: "1) Activité éligible (industrielle/commerciale/artisanale/agricole/libérale, ou holding animatrice) ; 2) Engagement collectif ≥ 2 ans ; 3) Engagement individuel 4 ans après ; 4) ≥ 17% / 34% (non coté) ; 5) Fonction de direction pendant + 3 ans." },

  // ═══════════════════════════════════════════════════════════════════
  // 3.3 DROIT SOCIAL ET FISCALITÉ DE GROUPE
  // ═══════════════════════════════════════════════════════════════════
  { kind: 'qcm', sub: 'social-groupe',
    question: "Quel est le seuil de constitution d'un comité de groupe ?",
    choices: ["50 sal. au total", "300 sal. dans une entreprise du groupe", "Groupe avec entreprise dominante en France + ≥ 50 sal. en France", "1 000 salariés"],
    answer: 2,
    explain: "Comité de groupe (art. L. 2331-1 C. trav.) : groupe avec entreprise dominante dont le siège est en France + ≥ 50 sal. en France." },

  { kind: 'qcm', sub: 'social-groupe',
    question: "Composition du comité de groupe ?",
    choices: ["Uniquement le dirigeant", "Chef d'entreprise dominante + représentants des salariés (max 30) désignés parmi les élus CSE", "Tous les salariés", "Le CSE seul"],
    answer: 1,
    explain: "Chef d'entreprise dominante (président) + 30 représentants des salariés max, désignés parmi les élus des CSE des entreprises du groupe. Réunion ≥ 1 fois/an. Crédit 20 h/an." },

  { kind: 'qcm', sub: 'social-groupe',
    question: "Seuil du Comité d'Entreprise Européen (CEE) ?",
    choices: ["100 sal. dans l'UE", "≥ 1 000 sal. dans l'UE + ≥ 150 sal. dans au moins 2 États membres", "5 000 sal.", "Pas de seuil"],
    answer: 1,
    explain: "CEE (Dir. 94/45/CE refondue 2009/38/CE) : groupes ≥ 1 000 sal. dans l'UE et ≥ 150 sal. dans au moins 2 États membres. Information/consultation sur questions transnationales." },

  { kind: 'qcm', sub: 'social-groupe',
    question: "Définition jurisprudentielle du co-emploi (Cass. soc. 2 juillet 2014, Molex) ?",
    choices: ["Deux emplois simultanés", "Confusion d'intérêts, d'activités et de direction se manifestant par une immixtion dans la gestion", "Salarié partagé entre 2 entités", "Sociétés en participation"],
    answer: 1,
    explain: "Triple confusion (arrêt Molex). Resserrée par l'arrêt AGC France de 2020. Permet d'engager la responsabilité de la mère envers les salariés de sa filiale." },

  { kind: 'qcm', sub: 'social-groupe',
    question: "Que prévoit l'article L. 1224-1 C. trav. ?",
    choices: ["La rupture conventionnelle collective", "Le transfert automatique des contrats de travail en cas de modification de la situation juridique de l'employeur", "Le PSE", "Le licenciement disciplinaire"],
    answer: 1,
    explain: "Art. L. 1224-1 : transfert automatique des contrats de travail en cours en cas de modification dans la situation juridique de l'employeur (succession, vente, fusion…). Ancienneté, rémunération conservées." },

  { kind: 'qcm', sub: 'social-groupe',
    question: "Combien de trimestres consécutifs pour caractériser des difficultés économiques (entreprise de 11-49 salariés) ?",
    choices: ["1", "2 trimestres consécutifs", "3", "4"],
    answer: 1,
    explain: "Durée par taille (ord. 2017) : 1 trim. (<11 sal.), 2 trim. (11-49), 3 trim. (50-299), 4 trim. (≥300). Indicateurs : baisse commandes, CA, pertes, EBE, trésorerie." },

  { kind: 'qcm', sub: 'social-groupe',
    question: "À partir de combien de licenciements éco. sur 30 jours dans une entreprise ≥ 50 salariés un PSE est-il obligatoire ?",
    choices: ["2", "5", "10", "50"],
    answer: 2,
    explain: "Art. L. 1233-61 : Plan de Sauvegarde de l'Emploi obligatoire pour 10 licenciements éco. ou plus sur 30 jours dans une entreprise ≥ 50 salariés." },

  { kind: 'qcm', sub: 'social-groupe',
    question: "Périmètre d'appréciation des difficultés économiques (ord. 2017) ?",
    choices: ["Le groupe mondial", "Le secteur d'activité de l'entreprise (et non le groupe entier)", "L'entreprise seule", "Le pays uniquement"],
    answer: 1,
    explain: "Depuis l'ord. 2017 : appréciation au niveau du secteur d'activité (de l'entreprise) en France, plus au niveau du groupe mondial. Reclassement reste à apprécier au niveau groupe." },

  { kind: 'qcm', sub: 'social-groupe',
    question: "Pourcentage de détention minimum pour l'intégration fiscale ?",
    choices: ["50%", "75%", "95% directement ou indirectement", "100%"],
    answer: 2,
    explain: "Art. 223 A CGI : société mère doit détenir ≥ 95% du capital des filiales intégrées, directement ou indirectement. Durée continue pendant tout l'exercice." },

  { kind: 'qcm', sub: 'social-groupe',
    question: "Effet principal de l'intégration fiscale ?",
    choices: ["Suppression de la TVA intra-groupe", "La société mère se constitue seule redevable de l'IS pour le groupe", "Exonération automatique d'IS", "Réduction du capital obligatoire"],
    answer: 1,
    explain: "Effet : la mère est seule redevable de l'IS. Compensation des bénéfices et déficits, neutralisations intra-groupe (cessions, abandons de créances, dividendes)." },

  { kind: 'qcm', sub: 'social-groupe',
    question: "Durée d'option pour l'intégration fiscale ?",
    choices: ["1 an", "3 ans", "5 ans renouvelable tacitement", "10 ans"],
    answer: 2,
    explain: "Option notifiée pour 5 exercices, renouvelable tacitement par périodes identiques. Notification au SIE avant l'ouverture du 1er exercice d'option." },

  { kind: 'qcm', sub: 'social-groupe',
    question: "Quote-part de frais et charges sur dividendes en intégration fiscale ?",
    choices: ["5%", "1% (au lieu de 5% hors intégration)", "10%", "0%"],
    answer: 1,
    explain: "En intégration fiscale : quote-part de 1% (au lieu de 5% pour le régime mère-fille hors intégration). Optimisation fiscale notable." },

  { kind: 'vf', sub: 'social-groupe',
    statement: "Toutes les sociétés du groupe doivent ouvrir et clore leurs exercices aux mêmes dates pour bénéficier de l'intégration fiscale.",
    answer: true,
    explain: "Vrai. C'est l'une des conditions cumulatives (exercices concordants de 12 mois)." },

  { kind: 'qcm', sub: 'social-groupe',
    question: "Que vise le projet BEPS de l'OCDE ?",
    choices: ["Un crédit d'impôt R&D", "Lutter contre l'érosion de la base imposable et le transfert de bénéfices (Base Erosion and Profit Shifting)", "Une nouvelle TVA", "Un impôt sur la fortune"],
    answer: 1,
    explain: "BEPS = 15 actions OCDE 2015. Transposé dans l'UE par les directives ATAD 1 et 2 (lutte contre l'évasion fiscale)." },

  { kind: 'qcm', sub: 'social-groupe',
    question: "Que vise le Pilier 2 (Directive UE 2022/2523) ?",
    choices: ["Une taxation à 10% des startups", "Un impôt minimum mondial effectif de 15% sur les groupes multinationaux > 750 M€", "Un crédit d'impôt R&D européen", "Une TVA unique européenne"],
    answer: 1,
    explain: "Pilier 2 / GloBE : impôt minimum effectif de 15% pour les groupes multinationaux dont le CA consolidé dépasse 750 M€. Transposé en France à compter du 31/12/2023." },

  { kind: 'qcm', sub: 'social-groupe',
    question: "Apport des ordonnances Macron 2017 en matière d'accords de groupe ?",
    choices: ["Suppression des accords", "Possibilité de se substituer aux accords d'entreprise + primauté inversée vis-à-vis des accords de branche", "Obligation d'accords nationaux", "Disparition des syndicats"],
    answer: 1,
    explain: "Ord. Macron 2017 : primauté inversée (accord d'entreprise/groupe prime sur l'accord de branche, sauf 13 matières d'ordre public). Accord de groupe peut se substituer aux accords d'entreprise." },

  { kind: 'flashcard', sub: 'social-groupe',
    front: "Conditions d'option pour l'intégration fiscale (art. 223 A CGI)",
    back: "1) Mère et filiales soumises à l'IS au taux normal en France ; 2) Détention ≥ 95% du capital des filiales (directe ou indirecte) ; 3) Exercices concordants 12 mois ; 4) Option notifiée pour 5 ans, renouvelable tacitement." },

  { kind: 'assoc', sub: 'social-groupe',
    prompt: "Associez chaque concept à sa source",
    pairs: [
      ["BEPS", "OCDE — 15 actions 2015"],
      ["ATAD", "Directives UE 2016/2017"],
      ["Pilier 2", "Directive UE 2022/2523 (15% min)"],
      ["L. 1224-1", "Code du travail — transfert auto"],
    ] },

  { kind: 'qcm', sub: 'social-groupe',
    question: "RCC (Rupture Conventionnelle Collective) introduite par :",
    choices: ["Loi Hamon", "Ordonnances Macron 2017", "Loi PACTE", "Loi El Khomri"],
    answer: 1,
    explain: "Ord. Macron du 22 septembre 2017 : RCC = accord collectif négocié, départs volontaires sans motif économique. Doit être validé par la DREETS." },

  { kind: 'qcm', sub: 'social-groupe',
    question: "Délai d'application de la convention collective du cédant après un transfert L. 1224-1 ?",
    choices: ["Immédiat", "1 an + 3 mois (15 mois)", "5 ans", "Indéfinie"],
    answer: 1,
    explain: "Convention collective du cédant continue 15 mois (1 an + 3 mois de préavis). Ensuite : convention du nouvel employeur, avec maintien des avantages individuels acquis." },
];
