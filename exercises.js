// k : rel = relier · fri = frise à compléter · cla = classer · ord = remettre dans l'ordre
// rel/fri/cla : rows = [élément, bonne réponse] ; ord : items = liste dans le BON ordre
const EX=[
 {
  "id": "r1",
  "k": "rel",
  "t": "Vocabulaire : terme ↔ définition",
  "rows": [
   [
    "Certification",
    "Atteste la conformité d’un produit, service ou processus, délivrée par un organisme indépendant"
   ],
   [
    "Accréditation",
    "Reconnaissance par un tiers de la compétence à réaliser des évaluations de conformité"
   ],
   [
    "Habilitation",
    "Décision administrative nécessaire pour procéder à l’évaluation externe"
   ],
   [
    "Label",
    "Marque fondée sur un référentiel défini par un syndicat professionnel ou une association"
   ],
   [
    "Appellation",
    "Indication d’une origine géographique garantie par l’État"
   ],
   [
    "Diagnostic",
    "Évaluation des points forts et des points d’amélioration de la démarche qualité"
   ]
  ]
 },
 {
  "id": "r2",
  "k": "rel",
  "t": "Acteurs : sigle ↔ description",
  "rows": [
   [
    "COFRAC",
    "Seul organisme d’accréditation en France"
   ],
   [
    "AFNOR",
    "Organisme de normalisation de niveau national"
   ],
   [
    "ISO",
    "Organisme de normalisation de niveau international"
   ],
   [
    "SGS",
    "Organisme de certification d’origine suisse"
   ],
   [
    "BSI",
    "Groupe britannique datant de 1901"
   ],
   [
    "Bureau Véritas",
    "Groupe international d’origine française"
   ]
  ]
 },
 {
  "id": "r3",
  "k": "rel",
  "t": "Numéros ISO ↔ domaine",
  "rows": [
   [
    "ISO 9001",
    "Management de la qualité"
   ],
   [
    "ISO 14001",
    "Environnement"
   ],
   [
    "ISO 26000",
    "Responsabilité sociale et sociétale"
   ],
   [
    "ISO 45001",
    "Santé et sécurité au travail"
   ],
   [
    "ISO 50001",
    "Gestion de l’énergie"
   ]
  ]
 },
 {
  "id": "r4",
  "k": "rel",
  "t": "Normes sectorielles ↔ secteur (à vérifier avec ton prof)",
  "rows": [
   [
    "IFS",
    "Grande distribution (alimentaire)"
   ],
   [
    "EN 9100",
    "Aéronautique"
   ],
   [
    "IATF 16949",
    "Automobile"
   ],
   [
    "ISO 13485",
    "Dispositifs médicaux"
   ],
   [
    "AQAP",
    "Militaire (OTAN)"
   ]
  ]
 },
 {
  "id": "r5",
  "k": "rel",
  "t": "Pionniers ↔ apport",
  "rows": [
   [
    "Colbert",
    "Donne ses lettres de noblesse au mot « qualité »"
   ],
   [
    "Taylor",
    "Organisation scientifique du travail (OST)"
   ],
   [
    "Shewhart",
    "Graphiques de contrôle statistiques"
   ],
   [
    "Deming",
    "Découvreur du PDCA"
   ],
   [
    "Juran",
    "Diagramme de Pareto, client-fournisseur interne"
   ],
   [
    "Ishikawa",
    "Diagramme en arête de poisson, cercles de qualité"
   ]
  ]
 },
 {
  "id": "r7",
  "k": "rel",
  "t": "Principes ↔ leur contraire",
  "rows": [
   [
    "Orientation client",
    "Exploitation du compte client"
   ],
   [
    "Leadership et contexte",
    "Désengagement de la direction"
   ],
   [
    "Implication du personnel",
    "Personnel extérieur à la démarche"
   ],
   [
    "Management des parties intéressées",
    "Méconnaissance des parties intéressées"
   ],
   [
    "Approche processus",
    "Approche individuelle et non structurée"
   ],
   [
    "Décision fondée sur les preuves",
    "Indécision, absence d’analyse"
   ],
   [
    "Amélioration continue",
    "Stagnation, dégradation"
   ]
  ]
 },
 {
  "id": "f1",
  "k": "fri",
  "t": "Frise 1 : de 1926 à 1957",
  "rows": [
   [
    "Création de l’AFNOR",
    "1926"
   ],
   [
    "Premier salon de la Qualité française à Paris",
    "1933"
   ],
   [
    "Décret-loi sur l’amélioration de la qualité des produits français",
    "1938"
   ],
   [
    "Loi sur la normalisation et la marque NF",
    "1941"
   ],
   [
    "Création de l’AFCIQ",
    "1957"
   ]
  ]
 },
 {
  "id": "f2",
  "k": "fri",
  "t": "Frise 2 : de 1961 à 1994",
  "rows": [
   [
    "Création de l’AFQ",
    "1961"
   ],
   [
    "Norme de gestion de l’assurance qualité",
    "1970"
   ],
   [
    "Naissance des normes ISO série 9000",
    "1987"
   ],
   [
    "AFCIQ + AFQ + AFCERQ = MFQ",
    "1991"
   ],
   [
    "Naissance du COFRAC",
    "1994"
   ]
  ]
 },
 {
  "id": "f3",
  "k": "fri",
  "t": "Frise 3 : de 2012 à 2024",
  "rows": [
   [
    "Création de la HLS",
    "2012"
   ],
   [
    "Le MFQ devient l’AFQP",
    "2017"
   ],
   [
    "Intégration des objectifs de développement durable",
    "2018"
   ],
   [
    "La HLS devient la HS (Harmonized Structure)",
    "2021"
   ],
   [
    "Amendement changement climatique ISO 9001",
    "2024"
   ]
  ]
 },
 {
  "id": "f4",
  "k": "fri",
  "t": "Frise 4 : les pionniers (vidéo)",
  "rows": [
   [
    "Contrôle indépendant des Égyptiens",
    "1500 av. J.-C."
   ],
   [
    "Colbert et le mot « qualité »",
    "1664"
   ],
   [
    "Taylor et l’OST",
    "1881"
   ],
   [
    "Shewhart et les graphiques de contrôle",
    "1931"
   ],
   [
    "Juran au Japon",
    "1956"
   ],
   [
    "Ishikawa et les cercles de qualité",
    "1960"
   ]
  ]
 },
 {
  "id": "f5",
  "k": "fri",
  "t": "Frise 5 : révisions de l’ISO 9001",
  "rows": [
   [
    "Naissance de la norme ISO 9001",
    "1987"
   ],
   [
    "Action préventive",
    "1994"
   ],
   [
    "PDCA",
    "2000"
   ],
   [
    "Axée clients",
    "2008"
   ],
   [
    "Structure, risques et opportunités, contexte, processus",
    "2015"
   ],
   [
    "Approche harmonisée, changement climatique, éthique",
    "2026"
   ]
  ]
 },
 {
  "id": "c1",
  "k": "cla",
  "t": "Classer : enjeux de la qualité",
  "opts": [
   "Externe",
   "Interne"
  ],
  "rows": [
   [
    "Satisfaire les clients",
    "Externe"
   ],
   [
    "Répondre à leurs besoins et attentes",
    "Externe"
   ],
   [
    "Améliorer la qualité des produits/services",
    "Externe"
   ],
   [
    "Maîtriser le fonctionnement de l’entreprise",
    "Interne"
   ],
   [
    "Diminuer les coûts de non-qualité",
    "Interne"
   ],
   [
    "Motiver le personnel",
    "Interne"
   ]
  ]
 },
 {
  "id": "c2",
  "k": "cla",
  "t": "Classer : niveau de normalisation",
  "opts": [
   "National",
   "Européen",
   "International"
  ],
  "rows": [
   [
    "AFNOR",
    "National"
   ],
   [
    "CEN / CENELEC",
    "Européen"
   ],
   [
    "ISO / CEI",
    "International"
   ]
  ]
 },
 {
  "id": "c3",
  "k": "cla",
  "t": "Classer : processus de la cartographie",
  "opts": [
   "Pilotage",
   "Réalisation",
   "Support"
  ],
  "rows": [
   [
    "Stratégie",
    "Pilotage"
   ],
   [
    "Management de la qualité",
    "Pilotage"
   ],
   [
    "Organisation et mise en œuvre des formations",
    "Réalisation"
   ],
   [
    "Conduite de recherche",
    "Réalisation"
   ],
   [
    "Gestion des ressources humaines",
    "Support"
   ],
   [
    "Gestion financière",
    "Support"
   ],
   [
    "Informatique",
    "Support"
   ],
   [
    "Juridique",
    "Support"
   ]
  ]
 },
 {
  "id": "o1",
  "k": "ord",
  "t": "Ordre : élaboration d’une norme ISO",
  "items": [
   "WD : Working Draft",
   "CD : Committee Draft",
   "DIS : Draft for International Standard (enquête publique)",
   "FDIS : Final Draft for International Standard",
   "IS : publication de la norme"
  ]
 },
 {
  "id": "o2",
  "k": "ord",
  "t": "Ordre : les pionniers de la qualité",
  "items": [
   "Égyptiens (1500 av. J.-C.)",
   "Colbert (1664)",
   "Taylor (1881)",
   "Shewhart (1931)",
   "Juran (1956)",
   "Ishikawa (1960)"
  ]
 },
 {
  "id": "o3",
  "k": "ord",
  "t": "Ordre : de l’accréditation au produit certifié",
  "items": [
   "COFRAC",
   "Organisme certificateur",
   "Entreprise",
   "Produit / service"
  ]
 },
 {
  "id": "o4",
  "k": "ord",
  "t": "Ordre : exercice Mamie Popote (confiture)",
  "items": [
   "Rédiger le SWOT – PESTEL",
   "Construire la cartographie",
   "Modéliser le logigramme de fabrication",
   "Réaliser l’analyse des processus"
  ]
 },
 {
  "id": "o5",
  "k": "ord",
  "t": "Ordre : le cycle PDCA",
  "items": [
   "Plan : planifier",
   "Do : réaliser",
   "Check : vérifier",
   "Act : agir, améliorer"
  ]
 }
];
