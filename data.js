// Format question : [énoncé, BONNE réponse, faux1, faux2, faux3, explication (facultatif)]. Les réponses sont mélangées à l'affichage.
const THEMES = [
 {
  "id": "s1",
  "nom": "Concept et dates clés",
  "src": "S1",
  "fiche": "<h3>Définition</h3><ul><li><b>Étymologie</b> : latin <i>qualitas</i> = « manière d’être ».</li><li><b>Qualité</b> : ensemble des caractéristiques intrinsèques à satisfaire des exigences.</li><li><b>Enjeux externes</b> : satisfaire les clients, répondre à leurs besoins et attentes, améliorer produits/services.</li><li><b>Enjeux internes</b> : maîtriser le fonctionnement de l’entreprise, diminuer les coûts de non-qualité, motiver le personnel.</li></ul><h3>Dates clés</h3><ul><li>1926 : création de l’AFNOR</li><li>1933 : premier salon de la Qualité française (Paris)</li><li>1938 : décret-loi du 14/06 sur l’amélioration de la qualité des produits français</li><li>1941 : loi du 24 mai, normalisation et marque NF</li><li>1957 : création de l’AFCIQ · 1961 : création de l’AFQ</li><li>1970 : norme de gestion de l’assurance qualité</li><li>1987 : naissance des normes ISO série 9000</li><li>1991 : AFCIQ + AFQ + AFCERQ = MFQ · 1994 : naissance du COFRAC</li><li>2012 : création de la HLS · 2017 : MFQ devient AFQP · 2018 : objectifs de développement durable</li><li>2021 : HLS devient HS (Harmonized Structure) · 2024 : amendement changement climatique ISO 9001</li></ul>",
  "q": [
   [
    "Que signifie l’étymologie latine « qualitas » ?",
    "Manière d’être",
    "Perfection",
    "Contrôle",
    "Conformité"
   ],
   [
    "Quelle est la définition de la qualité ?",
    "Ensemble des caractéristiques intrinsèques à satisfaire des exigences",
    "Absence totale de défauts",
    "Respect du prix le plus bas",
    "Ensemble des contrôles en fin de production"
   ],
   [
    "Lequel est un enjeu INTERNE de la qualité ?",
    "Diminuer les coûts de non-qualité",
    "Satisfaire les clients",
    "Répondre aux attentes des clients",
    "Améliorer la qualité perçue des produits"
   ],
   [
    "En quelle année l’AFNOR est-elle créée ?",
    "1926",
    "1941",
    "1957",
    "1987"
   ],
   [
    "Quand naissent les normes ISO série 9000 ?",
    "1987",
    "1970",
    "1994",
    "2000"
   ],
   [
    "Quand naît le COFRAC ?",
    "1994",
    "1926",
    "1957",
    "2012"
   ],
   [
    "Que signifie HS (2021) ?",
    "Harmonized Structure",
    "High Standard",
    "Health and Safety",
    "Honest Service"
   ],
   [
    "Que crée la loi du 24 mai 1941 ?",
    "La normalisation et la marque NF",
    "Le COFRAC",
    "L’AFQP",
    "Les normes ISO 9000"
   ],
   [
    "Que se passe-t-il en 1933 ?",
    "Premier salon de la Qualité française à Paris",
    "Création de l’AFNOR",
    "Naissance du COFRAC",
    "Naissance des normes ISO 9000"
   ],
   [
    "Que se passe-t-il en 1938 ?",
    "Décret-loi du 14/06 sur l’amélioration de la qualité des produits français",
    "Loi sur la marque NF",
    "Création de l’AFQ",
    "Création du MFQ"
   ],
   [
    "Quelle année voit la création de l’AFCIQ ?",
    "1957",
    "1926",
    "1961",
    "1991"
   ],
   [
    "Quelle année voit la création de l’AFQ ?",
    "1961",
    "1957",
    "1970",
    "1994"
   ],
   [
    "Qu’apparaît en 1970 ?",
    "Une norme de gestion de l’assurance qualité",
    "Les normes ISO 9000",
    "Le COFRAC",
    "La HLS"
   ],
   [
    "Que forment l’AFCIQ, l’AFQ et l’AFCERQ en 1991 ?",
    "Le MFQ",
    "L’AFQP",
    "L’AFNOR",
    "Le COFRAC"
   ],
   [
    "Que devient le MFQ en 2017 ?",
    "L’AFQP",
    "L’AFQ",
    "L’AFCIQ",
    "L’AFNOR"
   ],
   [
    "Que se passe-t-il en 2012 ?",
    "Création de la HLS",
    "Création du COFRAC",
    "Naissance des normes ISO 9000",
    "Amendement changement climatique"
   ],
   [
    "Que se passe-t-il en 2018 ?",
    "Intégration des objectifs de développement durable",
    "Transformation de la HLS en HS",
    "Création de la HLS",
    "Naissance de l’AFQP"
   ],
   [
    "Que se passe-t-il en 2024 ?",
    "Amendement changement climatique de l’ISO 9001",
    "Création de la HLS",
    "Naissance du COFRAC",
    "Fusion des associations qualité"
   ],
   [
    "Que signifie AFNOR ?",
    "Association Française de Normalisation",
    "Agence Française des Normes et de l’Organisation",
    "Autorité Fédérale de Normalisation",
    "Association Française des Normes de Référence"
   ]
  ],
  "ico": "📚",
  "col": "#5468ff"
 },
 {
  "id": "hist",
  "nom": "Pionniers de la qualité",
  "src": "Vidéo",
  "ico": "🏛️",
  "col": "#e8a317",
  "fiche": "<p>Résumé de la vidéo « Histoire de la qualité » :</p><ul><li><b>1500 av. J.-C.</b> : Égyptiens, contrôle <b>indépendant</b> de la conformité du travail des tailleurs de pierre. Naissance de l’indépendance du contrôle et d’un référentiel commun fournisseur/client.</li><li><b>1664</b> : <b>Colbert</b> (ministre de Louis XIV) donne ses premières lettres de noblesse au mot « qualité ».</li><li><b>1881</b> : <b>Taylor</b> (Bethlehem Steel) analyse les tâches par décomposition : l’<b>organisation scientifique du travail</b> (OST).</li><li><b>1931</b> : <b>Shewhart</b> (Western Electric, Chicago) crée les premiers graphiques de contrôle et méthodes statistiques.</li><li><b>Deming</b> : père du management moderne de la qualité, découvreur du <b>PDCA</b>. Il influence l’industrie japonaise dès les années 1950. « La responsabilité finale de l’amélioration du système appartient à la direction. »</li><li><b>1956</b> : <b>Juran</b> présente au Japon l’amélioration continue (PDCA), la relation client-fournisseur interne, le coût d’obtention de la qualité, le <b>diagramme de Pareto</b>.</li><li><b>1960</b> : <b>Ishikawa</b> lance les <b>cercles de qualité</b> au Japon (États-Unis 1970, Europe 1980). Il invente le <b>diagramme cause-effet</b> (arête de poisson).</li></ul>",
  "q": [
   [
    "À partir de quelle période les premiers concepts de la qualité sont-ils initiés ?",
    "1500 av. J.-C. (Égypte antique)",
    "XVIIe siècle",
    "XIXe siècle",
    "Années 1950",
    "Les Égyptiens contrôlaient indépendamment le travail des tailleurs de pierre."
   ],
   [
    "Qui a donné ses premières lettres de noblesse au mot « qualité » ?",
    "Colbert (1664)",
    "Taylor",
    "Deming",
    "Juran"
   ],
   [
    "Qui est le fondateur de l’Organisation Scientifique du Travail (OST) ?",
    "Frederick Winslow Taylor",
    "Walter Shewhart",
    "Joseph Juran",
    "Kaoru Ishikawa"
   ],
   [
    "Qui conçoit les premiers graphiques de contrôle statistique de la qualité (1931) ?",
    "Walter Shewhart",
    "Frederick Taylor",
    "Kaoru Ishikawa",
    "Jean-Baptiste Colbert"
   ],
   [
    "Qui est à l’origine (découvreur) du PDCA ?",
    "William Edward Deming",
    "Frederick Taylor",
    "Kaoru Ishikawa",
    "Jean-Baptiste Colbert"
   ],
   [
    "Quels concepts sont associés à Joseph Juran ?",
    "Le diagramme de Pareto, le client-fournisseur interne, le coût de la qualité",
    "Le diagramme en arête de poisson",
    "L’organisation scientifique du travail",
    "Les graphiques de contrôle"
   ],
   [
    "Qui a inventé le diagramme en arête de poisson et lancé les cercles de qualité ?",
    "Kaoru Ishikawa",
    "Joseph Juran",
    "William Deming",
    "Walter Shewhart"
   ],
   [
    "Les cercles de qualité arrivent en Europe en…",
    "1980",
    "1960",
    "1970",
    "1956",
    "Japon 1960, États-Unis 1970, Europe 1980."
   ],
   [
    "Quelle notion naît avec le contrôle des Égyptiens ?",
    "L’indépendance du contrôle par rapport à la réalisation",
    "Le PDCA",
    "La certification ISO",
    "Le client-fournisseur interne"
   ],
   [
    "Selon Deming, à qui revient la responsabilité finale de l’amélioration du système ?",
    "À la direction",
    "Aux opérateurs",
    "Aux clients",
    "Au service qualité"
   ],
   [
    "En quelle année Colbert donne-t-il ses lettres de noblesse au mot « qualité » ?",
    "1664",
    "1500 av. J.-C.",
    "1881",
    "1931"
   ],
   [
    "En quelle année Taylor entreprend-il la première analyse des tâches (OST) ?",
    "1881",
    "1664",
    "1931",
    "1956"
   ],
   [
    "En quelle année Shewhart déploie-t-il son approche statistique de l’assurance qualité ?",
    "1931",
    "1881",
    "1956",
    "1960"
   ],
   [
    "En quelle année Juran présente-t-il le management de la qualité au Japon ?",
    "1956",
    "1931",
    "1960",
    "1970"
   ],
   [
    "En quelle année Ishikawa lance-t-il les cercles de qualité au Japon ?",
    "1960",
    "1956",
    "1970",
    "1980"
   ],
   [
    "Que contrôlaient les inspecteurs égyptiens ?",
    "Le travail des tailleurs de pierre avant son incorporation à un ouvrage",
    "La qualité des tissus",
    "Les récoltes de blé",
    "Les poids et mesures du commerce"
   ]
  ]
 },
 {
  "id": "s1v",
  "nom": "Vocabulaire qualité",
  "src": "S1",
  "fiche": "<ul><li><b>Certification</b> : certificat délivré par un organisme <b>indépendant</b> attestant la conformité (produit, service, processus) aux normes et règlements. Étymologie latine : « assurance, confirmation ».</li><li><b>Accréditation</b> : reconnaissance par un organisme <b>tiers</b> de la compétence à réaliser des activités d’évaluation de la conformité. Volontaire ou imposée par une disposition réglementaire.</li><li><b>Habilitation</b> : décision <b>administrative</b> nécessaire pour procéder à l’évaluation externe. L’organisme qui la délivre tient une liste.</li><li><b>Label</b> : signe d’identification s’appuyant sur un référentiel défini par un syndicat professionnel ou une association. Atteste d’une qualité supérieure. Ex : Label Rouge (viandes, charcuterie, œufs), AB (agriculture biologique), Fairtrade (commerce équitable).</li><li><b>Appellation</b> : indication d’un lieu géographique d’origine, garantie par l’<b>État</b>. AOC, AOP (protégée), IGP (indication géographique protégée).</li><li><b>Diagnostic</b> : évaluation du périmètre d’analyse, des points forts et points d’amélioration de la démarche qualité.</li><li><b>Norme</b> : référentiel précisant les caractéristiques à exiger d’un produit ou service. AFNOR = niveau national, ISO = international.</li></ul><h3>Pour ne plus confondre</h3><ul><li><b>Certification</b> → atteste la conformité d’un <i>produit, service, processus</i> (organisme indépendant).</li><li><b>Accréditation</b> → reconnaît la <i>compétence</i> de l’organisme évaluateur (tiers, ex. COFRAC).</li><li><b>Habilitation</b> → <i>décision administrative</i> autorisant à évaluer ; une liste est tenue.</li><li><b>Label</b> → <i>marque privée</i> (syndicat ou association), qualité supérieure, argument commercial.</li><li><b>Appellation</b> → <i>origine géographique</i>, garantie par l’État.</li><li><b>Diagnostic</b> → <i>évaluation</i> des points forts et d’amélioration.</li></ul>",
  "q": [
   [
    "Quel terme désigne un certificat délivré par un organisme indépendant attestant la conformité aux normes ?",
    "Certification",
    "Accréditation",
    "Habilitation",
    "Diagnostic"
   ],
   [
    "Quel terme désigne la reconnaissance, par un tiers, de la compétence à évaluer la conformité ?",
    "Accréditation",
    "Certification",
    "Label",
    "Appellation"
   ],
   [
    "Quelle est la nature d’une habilitation ?",
    "Une décision administrative",
    "Une marque commerciale",
    "Un audit interne",
    "Une norme internationale"
   ],
   [
    "Qu’est-ce qu’un label ?",
    "Un signe d’identification fondé sur un référentiel défini par un syndicat ou une association",
    "Une indication géographique garantie par l’État",
    "Une décision administrative",
    "Un certificat ISO"
   ],
   [
    "Que garantit une appellation ?",
    "Un lieu géographique d’origine, garanti par l’État",
    "La conformité à la norme ISO 9001",
    "Un référentiel privé de qualité supérieure",
    "La compétence d’un auditeur"
   ],
   [
    "Que signifie IGP ?",
    "Indication Géographique Protégée",
    "Identification Générale des Produits",
    "Indice de Garantie Produit",
    "Inspection Générale de Production"
   ],
   [
    "Le Label Rouge concerne notamment…",
    "Viandes, charcuterie et œufs",
    "Le commerce équitable",
    "Les produits biologiques",
    "Les vins d’origine"
   ],
   [
    "Qui délivre une certification ?",
    "Un organisme indépendant (certificateur)",
    "L’État uniquement",
    "Un syndicat professionnel",
    "L’entreprise elle-même"
   ],
   [
    "Quelle est la différence entre certification et accréditation ?",
    "La certification atteste la conformité d’un produit/service ; l’accréditation reconnaît la compétence de l’organisme qui évalue",
    "Aucune, ce sont des synonymes",
    "La certification est obligatoire, l’accréditation toujours volontaire",
    "La certification est délivrée par l’État, l’accréditation par l’entreprise"
   ],
   [
    "Un organisme est reconnu compétent par un tiers pour évaluer la conformité : de quoi s’agit-il ?",
    "D’une accréditation",
    "D’une certification",
    "D’un label",
    "D’une appellation"
   ],
   [
    "Une entreprise reçoit un certificat attestant la conformité de son service à une norme : de quoi s’agit-il ?",
    "D’une certification",
    "D’une accréditation",
    "D’une habilitation",
    "D’un diagnostic"
   ],
   [
    "Une décision administrative autorise un organisme à évaluer les établissements : de quoi s’agit-il ?",
    "D’une habilitation",
    "D’une accréditation",
    "D’un label",
    "D’une appellation"
   ],
   [
    "Un syndicat professionnel définit un référentiel et crée une marque attestant une qualité supérieure : de quoi s’agit-il ?",
    "D’un label",
    "D’une appellation",
    "D’une habilitation",
    "D’un diagnostic"
   ],
   [
    "Un produit est lié à un lieu géographique d’origine et sa notoriété fait présumer ses caractéristiques : de quoi s’agit-il ?",
    "D’une appellation",
    "D’un label",
    "D’une certification",
    "D’une habilitation"
   ],
   [
    "On évalue les points forts et les points d’amélioration d’une démarche qualité : de quoi s’agit-il ?",
    "D’un diagnostic",
    "D’une accréditation",
    "D’une certification",
    "D’un label"
   ],
   [
    "L’accréditation peut être…",
    "Volontaire ou imposée par une disposition réglementaire",
    "Uniquement obligatoire",
    "Délivrée par l’entreprise à elle-même",
    "Réservée aux produits agricoles"
   ],
   [
    "Qui garantit une appellation (AOC, AOP, IGP) ?",
    "L’État",
    "Un syndicat professionnel",
    "Une association de consommateurs",
    "L’AFNOR"
   ],
   [
    "Qui définit le référentiel d’un label ?",
    "Un syndicat professionnel ou une association",
    "L’État",
    "L’ISO",
    "Le COFRAC"
   ],
   [
    "Pour un label, quel est son intérêt pour l’entreprise ?",
    "Il devient un argument commercial",
    "Il remplace la certification",
    "Il est imposé par la loi",
    "Il garantit une origine géographique"
   ],
   [
    "Que signifie AOC ?",
    "Appellation d’Origine Contrôlée",
    "Autorisation d’Origine Certifiée",
    "Association d’Organismes de Contrôle",
    "Appellation d’Origine Collective"
   ],
   [
    "Que signifie AOP ?",
    "Appellation d’Origine Protégée",
    "Autorisation d’Origine Publique",
    "Association d’Origine Professionnelle",
    "Appellation d’Origine Particulière"
   ],
   [
    "Que met en valeur le label Agriculture Biologique (AB) ?",
    "Les produits issus d’une démarche respectueuse de l’environnement",
    "Le commerce équitable",
    "Une origine géographique",
    "La qualité supérieure des viandes"
   ],
   [
    "Quel label concerne le commerce équitable ?",
    "Fairtrade",
    "Label Rouge",
    "AB",
    "IGP"
   ],
   [
    "Qui tient la liste des personnes habilitées ?",
    "L’organisme qui délivre l’habilitation",
    "Le COFRAC",
    "L’ISO",
    "L’entreprise cliente"
   ]
  ],
  "ico": "🏷️",
  "col": "#e0489a"
 },
 {
  "id": "s1a",
  "nom": "Acteurs et référentiels",
  "src": "S1",
  "fiche": "<ul><li><b>COFRAC</b> = Comité Français d’Accréditation, <b>seul</b> organisme d’accréditation en France. Il accrédite les organismes certificateurs, qui certifient les entreprises (management) ou leurs produits/services.</li><li><b>Organismes certificateurs</b> : SGS (origine suisse), AFNOR-AFAQ, BSI (britannique, 1901), Bureau Véritas (français), LRQA (britannique).</li><li><b>Rôle</b> : assurer la conformité de la mise en œuvre du référentiel, réaliser l’audit préalable, délivrer le certificat. Sélectionné et choisi par l’entreprise cliente.</li><li><b>Déontologie</b> : interdiction de certifier un organisme préalablement accompagné.</li><li><b>Référentiels ISO</b> : 9001 qualité · 14001 environnement · 26000 RSE · 45001 santé-sécurité au travail · 50001 énergie.</li><li><b>Produit</b> : certification NF, marquage CE. <b>Sectoriel</b> : IFS (grande distribution), médical, automobile, aéronautique, militaire.</li></ul><p><b>À retenir</b> : 9001 = qualité, 14001 = environnement, 26000 = RSE, 45001 = santé-sécurité, 50001 = énergie. Le cours ne cite pas d’ISO agroalimentaire, seulement IFS (grande distribution) et la certification NF / marquage CE côté produit.</p>",
  "q": [
   [
    "Que signifie COFRAC ?",
    "Comité Français d’Accréditation",
    "Conseil Français de Réglementation et d’Assurance Qualité",
    "Comité Fédéral de Référencement des Activités de Certification",
    "Centre Français de Régulation de l’Audit"
   ],
   [
    "Quel est le rôle du COFRAC ?",
    "Accréditer, c’est le seul organisme d’accréditation en France",
    "Certifier directement les entreprises",
    "Rédiger les normes ISO",
    "Délivrer les labels"
   ],
   [
    "Qui choisit l’organisme certificateur ?",
    "L’entreprise cliente",
    "L’État",
    "Le COFRAC",
    "L’ISO"
   ],
   [
    "Que dit la déontologie des organismes certificateurs ?",
    "Interdiction de certifier un organisme préalablement accompagné",
    "Obligation de former l’entreprise avant l’audit",
    "Interdiction d’auditer plus d’une fois par an",
    "Obligation d’être public"
   ],
   [
    "Quelle norme ISO concerne l’environnement ?",
    "ISO 14001",
    "ISO 9001",
    "ISO 45001",
    "ISO 50001"
   ],
   [
    "Quelle norme ISO concerne la santé et sécurité au travail ?",
    "ISO 45001",
    "ISO 26000",
    "ISO 14001",
    "ISO 50001"
   ],
   [
    "Quel organisme certificateur est d’origine française et spécialisé dans l’inspection et le contrôle ?",
    "Bureau Véritas",
    "BSI",
    "SGS",
    "LRQA"
   ],
   [
    "Quelle norme ISO porte sur le management de la qualité ?",
    "ISO 9001",
    "ISO 14001",
    "ISO 26000",
    "ISO 50001",
    "ISO 9001 = qualité · 14001 = environnement · 26000 = RSE · 45001 = santé-sécurité · 50001 = énergie."
   ],
   [
    "ISO 26000 traite de…",
    "La responsabilité sociale et sociétale",
    "La gestion de l’énergie",
    "La santé et sécurité au travail",
    "L’environnement"
   ],
   [
    "Quelle norme ISO concerne la gestion de l’énergie ?",
    "ISO 50001",
    "ISO 45001",
    "ISO 14001",
    "ISO 9001"
   ],
   [
    "IFS (International Food Standards) est un référentiel du secteur…",
    "De la grande distribution (alimentaire)",
    "Aéronautique",
    "Automobile",
    "Médical"
   ],
   [
    "Que représente le marquage CE dans le cours ?",
    "La norme de conformité européenne",
    "Une certification volontaire française",
    "Un label biologique",
    "Une norme de l’AFNOR"
   ],
   [
    "L’AFNOR est un organisme de normalisation de niveau…",
    "National",
    "International",
    "Européen",
    "Sectoriel"
   ],
   [
    "Comment est née l’AFNOR-AFAQ selon le cours ?",
    "À l’initiative d’industriels (électricité, forges, construction métallique)",
    "Par décision de l’ONU",
    "Par une loi européenne",
    "À l’initiative du COFRAC"
   ],
   [
    "Quelle est une mission d’un organisme certificateur ?",
    "Réaliser l’audit préalable et délivrer le certificat",
    "Accompagner l’entreprise dans sa mise en place",
    "Rédiger le référentiel",
    "Accréditer d’autres organismes"
   ],
   [
    "Quelle est l’origine du groupe SGS ?",
    "Suisse",
    "Britannique",
    "Française",
    "Américaine"
   ]
  ],
  "ico": "🏢",
  "col": "#0fa896"
 },
 {
  "id": "sect",
  "nom": "Normes sectorielles",
  "src": "S1 + à vérifier",
  "ico": "✈️",
  "col": "#d94f4f",
  "fiche": "<p>Le cours distingue les référentiels <b>sectoriels</b> : grande distribution, médical, automobile, aéronautique, militaire.</p><ul><li><b>Grande distribution (alimentaire)</b> : <b>IFS</b> (International Food Standards).</li><li><b>Aéronautique</b> : <b>EN 9100</b>.</li><li><b>Automobile</b> : <b>IATF 16949</b>.</li><li><b>Médical</b> : <b>ISO 13485</b> (dispositifs médicaux).</li><li><b>Militaire</b> : <b>AQAP</b> (OTAN).</li><li><b>Agroalimentaire</b> : <b>ISO 22000</b> (sécurité des denrées), HACCP (analyse des dangers, points critiques).</li></ul><p><b>Attention</b> : seul IFS est écrit dans le texte de ton PDF. Les numéros EN 9100, IATF 16949, ISO 13485, AQAP et ISO 22000 viennent de ma connaissance générale (les notes de ta carte mentale n’apparaissent pas). Vérifie-les avec ton prof.</p>",
  "q": [
   [
    "IFS signifie…",
    "International Food Standards",
    "International Factory System",
    "Institut Français des Standards",
    "Inspection of Food Safety"
   ],
   [
    "Dans quel secteur s’applique IFS Food ?",
    "La grande distribution (alimentaire)",
    "L’aéronautique",
    "L’automobile",
    "Le médical"
   ],
   [
    "Quelle norme sectorielle concerne l’aéronautique ?",
    "EN 9100",
    "IATF 16949",
    "ISO 13485",
    "IFS"
   ],
   [
    "Quelle norme sectorielle concerne l’automobile ?",
    "IATF 16949",
    "EN 9100",
    "ISO 13485",
    "ISO 22000"
   ],
   [
    "Quelle norme concerne les dispositifs médicaux ?",
    "ISO 13485",
    "EN 9100",
    "IATF 16949",
    "ISO 26000"
   ],
   [
    "Quelle famille de référentiels concerne le secteur militaire (OTAN) ?",
    "AQAP",
    "IATF",
    "IFS",
    "ISO 50001"
   ],
   [
    "Quelle norme concerne la sécurité des denrées alimentaires ?",
    "ISO 22000",
    "ISO 13485",
    "EN 9100",
    "ISO 45001"
   ],
   [
    "Quel secteur est visé par EN 9100 ?",
    "Aéronautique",
    "Automobile",
    "Médical",
    "Grande distribution"
   ],
   [
    "Quel secteur est visé par IATF 16949 ?",
    "Automobile",
    "Aéronautique",
    "Militaire",
    "Médical"
   ],
   [
    "Parmi ces référentiels, lequel est une norme ISO ?",
    "ISO 13485",
    "EN 9100",
    "IATF 16949",
    "IFS"
   ],
   [
    "Quel est le point commun des référentiels sectoriels ?",
    "Ils précisent les exigences propres à un secteur d’activité",
    "Ils sont obligatoires pour toutes les entreprises",
    "Ils sont édités par l’État",
    "Ils remplacent l’ISO 9001 sans la reprendre"
   ],
   [
    "Que signifie HACCP ?",
    "Hazard Analysis Critical Control Point",
    "High Authority for Certified Control Procedures",
    "Hygiene And Control of Certified Products",
    "Hazard Assessment and Certification Plan"
   ]
  ]
 },
 {
  "id": "s2",
  "nom": "Création d’une norme ISO",
  "src": "S2",
  "fiche": "<ul><li><b>ISO</b> : organisation non gouvernementale, sans but lucratif, siège à Genève (Suisse). Réseau d’organismes nationaux de normalisation de 167 pays, financée par les cotisations des membres. Environ 18 000 normes dans le portefeuille (vidéo).</li><li><b>Élaboration</b> : démarche <b>volontaire</b>, aucun pouvoir réglementaire ou législatif, axée sur le marché, par <b>consensus</b> entre parties intéressées, <b>examen tous les 5 ans</b>.</li><li><b>Étapes</b> : WD (Working Draft) → CD (Committee Draft) → DIS (Draft for International Standard, enquête publique) → FDIS (Final Draft) → IS (publication, vote 2/3 oui).</li><li><b>Niveaux</b> : international ISO/CEI · européen CEN/CENELEC · national AFNOR.</li><li><b>Identification</b> : NF EN ISO = reprise française (NF) d’une norme européenne (EN) elle-même internationale (ISO).</li><li><b>Conception</b> : la plupart des normes ISO s’appuient sur le <b>PDCA</b>.</li><li><b>Révision ISO 9001</b> : 1987 naissance · 1994 action préventive · 2000 PDCA · 2008 axée clients · 2015 risques et opportunités, contexte, processus · 2026 approche harmonisée (HS), changement climatique, expérience clients, technologies émergentes, éthique et intégrité. Transition de 3 ans, fin de validité des certificats v2015 en 2029.</li></ul><p><b>Vidéo « Intro norme ISO »</b> : l’ISO est le plus grand élaborateur de normes internationales d’application volontaire, plus de 18 000 normes, un réseau d’organismes de normalisation (163 pays dans la vidéo, 167 dans la carte mentale), depuis plus de 60 ans. Structure ISO 9001 : Plan = chapitres 4 à 7, Do = 8, Check = 9, Act = 10.</p>",
  "q": [
   [
    "Quel est le statut de l’ISO ?",
    "Organisation non gouvernementale sans but lucratif",
    "Agence de l’ONU",
    "Entreprise privée cotée",
    "Organisme d’État suisse"
   ],
   [
    "Où se situe le siège de l’ISO ?",
    "Genève, en Suisse",
    "Paris, en France",
    "Bruxelles, en Belgique",
    "Londres, au Royaume-Uni"
   ],
   [
    "Comment l’ISO est-elle financée ?",
    "Par les cotisations de ses membres",
    "Par l’ONU",
    "Par les subventions de l’UE",
    "Par la vente de certificats"
   ],
   [
    "Les normes ISO sont élaborées par…",
    "Consensus entre les parties intéressées, avec examen tous les 5 ans",
    "Décret de chaque État membre",
    "Vote à la majorité simple de la direction de l’ISO",
    "Les seuls experts de l’AFNOR"
   ],
   [
    "Quelle est la dernière étape avant la publication de la norme (IS) ?",
    "FDIS",
    "WD",
    "CD",
    "DIS"
   ],
   [
    "Dans NF EN ISO, que représente « EN » ?",
    "La reprise au niveau européen",
    "La reprise au niveau français",
    "Le niveau international",
    "Le niveau d’entreprise"
   ],
   [
    "Sur quel outil s’appuie la conception de la plupart des normes ISO ?",
    "Le PDCA",
    "Le diagramme d’Ishikawa",
    "La loi de Pareto",
    "Le SWOT"
   ],
   [
    "Combien de temps dure la période de transition de la révision 2026 de l’ISO 9001 ?",
    "3 ans",
    "1 an",
    "5 ans",
    "6 mois"
   ],
   [
    "Que signifie ISO ?",
    "International Organization for Standardization",
    "International Office of Standards",
    "Institut Supérieur d’Organisation",
    "Institut des Standards Officiels"
   ],
   [
    "Combien de normes comptent environ le portefeuille ISO (vidéo) ?",
    "Plus de 18 000",
    "Environ 500",
    "Environ 2 000",
    "Plus de 100 000"
   ],
   [
    "L’ISO est le plus grand élaborateur de normes…",
    "Internationales d’application volontaire",
    "Obligatoires",
    "Uniquement européennes",
    "Uniquement techniques"
   ],
   [
    "Dans la structure de l’ISO 9001 (v2015), quels chapitres correspondent au « Plan » du PDCA ?",
    "Chapitres 4 à 7",
    "Chapitre 8",
    "Chapitre 9",
    "Chapitre 10",
    "Plan = ch. 4 à 7 · Do = ch. 8 · Check = ch. 9 · Act = ch. 10."
   ],
   [
    "Quelle étape comprend l’enquête publique ?",
    "DIS (Draft for International Standard)",
    "WD",
    "CD",
    "IS"
   ],
   [
    "Quelle évolution majeure apporte la version 2015 de l’ISO 9001 ?",
    "La structure, les risques et opportunités, le contexte, les processus",
    "L’action préventive",
    "L’introduction du PDCA",
    "L’orientation client"
   ],
   [
    "Quelle nouveauté figure dans la révision 2026 de l’ISO 9001 ?",
    "Changement climatique, expérience clients, technologies émergentes, éthique et intégrité",
    "Suppression de l’approche processus",
    "Abandon du PDCA",
    "Certification obligatoire pour toutes les entreprises"
   ],
   [
    "Quelle version des certificats perd sa validité en 2029 ?",
    "ISO 9001 version 2015",
    "ISO 9001 version 2008",
    "ISO 9001 version 2000",
    "ISO 14001 version 2015"
   ]
  ],
  "ico": "🌍",
  "col": "#2f80ed"
 },
 {
  "id": "s4",
  "nom": "7 principes de management",
  "src": "S4",
  "fiche": "<p>Les 7 principes = la « philosophie / guideline » du management de la qualité, un ensemble de valeurs et de règles servant de base. Ils visent à renforcer la performance de l’entreprise.</p><ul><li><b>Orientation client</b> : le connaître, comprendre ses besoins présents et futurs, communiquer, surveiller sa satisfaction. Toute entreprise dépend de son client (fidéliser, SAV). Contraire : exploitation du compte client.</li><li><b>Leadership et contexte</b> : implication des dirigeants, description de l’environnement interne/externe (SWOT), objectifs intégrés aux processus. Contraire : désengagement de la direction.</li><li><b>Implication du personnel</b> : « la qualité, c’est l’affaire de tous ». Contraire : personnel extérieur à la démarche.</li><li><b>Management des parties intéressées</b> : communication interne et externe (forcée : plaintes ; spontanée : rapport annuel), sensibiliser, former. Contraire : méconnaissance des parties intéressées.</li><li><b>Approche processus</b>. Contraire : approche individuelle et non structurée.</li><li><b>Prise de décision fondée sur les preuves</b> : données sur clients, processus, services rendus, fournisseurs. Contraire : indécision, absence d’analyse.</li><li><b>Amélioration continue</b> (PDCA, audits, non-conformités, actions correctives). Contraire : stagnation, dégradation.</li></ul><p><b>Système de management</b> : système permettant d’établir une politique et des objectifs, et d’atteindre ces objectifs.</p>",
  "q": [
   [
    "Combien de principes de management qualité compte l’ISO 9001 ?",
    "7",
    "5",
    "8",
    "10"
   ],
   [
    "Lequel de ces éléments N’EST PAS un des 7 principes ?",
    "La maximisation du profit",
    "Le leadership",
    "L’amélioration continue",
    "L’approche processus"
   ],
   [
    "Quelle phrase illustre l’implication du personnel ?",
    "« La qualité, c’est l’affaire de tous »",
    "« Le client a toujours raison »",
    "« Seul le qualiticien est responsable »",
    "« Mesurer c’est contrôler »"
   ],
   [
    "Quel outil sert à décrire l’environnement interne et externe dans le principe leadership et contexte ?",
    "SWOT",
    "Ishikawa",
    "GANTT",
    "QQOQCCP"
   ],
   [
    "Qu’est-ce qu’un système de management ?",
    "Un système qui permet d’établir une politique et des objectifs et de les atteindre",
    "Un logiciel de gestion documentaire",
    "Un service chargé des contrôles",
    "Une norme de certification"
   ],
   [
    "Quel est le contraire du principe « prise de décision fondée sur les preuves » ?",
    "L’indécision, l’absence d’analyse avant décision",
    "La stagnation",
    "Le désengagement de la direction",
    "L’approche individuelle"
   ],
   [
    "Quel exemple relève de la communication externe forcée ?",
    "La réponse aux plaintes et demandes",
    "Un rapport annuel environnemental",
    "Une réunion de service",
    "Une boîte à idées"
   ],
   [
    "Le désengagement de la direction est l’opposé de quel principe ?",
    "Leadership et contexte",
    "Orientation client",
    "Implication du personnel",
    "Amélioration continue"
   ],
   [
    "Quel principe correspond à : le connaître, comprendre ses besoins, communiquer, surveiller sa satisfaction ?",
    "Orientation client",
    "Leadership",
    "Amélioration continue",
    "Approche processus"
   ],
   [
    "Quel principe a pour contraire « stagnation / dégradation » ?",
    "Amélioration continue",
    "Leadership",
    "Orientation client",
    "Approche processus"
   ],
   [
    "Quel principe a pour contraire « approche individuelle et non structurée » ?",
    "Approche processus",
    "Implication du personnel",
    "Leadership",
    "Prise de décision fondée sur les preuves"
   ],
   [
    "Quel outil relève de l’amélioration continue ?",
    "Le PDCA",
    "Le logigramme",
    "Le PESTEL",
    "Le SAV"
   ],
   [
    "Sur quoi s’appuie une décision fondée sur les preuves ?",
    "Des données : clients, processus, services rendus, fournisseurs",
    "L’intuition du dirigeant",
    "L’avis des auditeurs",
    "L’historique des certifications"
   ]
  ],
  "ico": "🧭",
  "col": "#8f5cf0"
 },
 {
  "id": "s5",
  "nom": "Approche processus",
  "src": "S5",
  "fiche": "<ul><li><b>Processus</b> (ISO) : ensemble d’activités corrélées ou en interaction qui utilise des éléments d’entrée pour produire un résultat escompté.</li><li>Les entrées d’un processus sont généralement les sorties d’autres processus. Ils sont planifiés dans des conditions maîtrisées pour apporter une <b>valeur ajoutée</b>. Si la conformité de la sortie ne peut être validée immédiatement ou économiquement : « procédé spécial ».</li><li><b>Valeur ajoutée de l’approche</b> : formaliser l’organisation (vision commune), étudier et comprendre (modèle fonctionnel), agir et améliorer avec méthode.</li><li><b>Cartographie</b> : représentation schématique des activités, flux et processus de l’entreprise, vision macro. Objectifs : vision globale, identifier tous les processus, modéliser leurs interactions.</li><li><b>3 familles</b> (analogie voiture) : <b>pilotage</b> = le pilote, la gouvernance · <b>réalisation</b> = le moteur, les missions · <b>support</b> = réservoir et batterie, le soutien indispensable.</li><li><b>Évaluer la performance</b> : cartographie en adéquation avec les actions de l’entreprise, cohérente et actualisée.</li><li>Outils pratiques : SWOT-PESTEL, cartographie, fiche d’identité du processus, logigramme.</li></ul>",
  "q": [
   [
    "Quelle est la définition ISO d’un processus ?",
    "Ensemble d’activités corrélées ou en interaction qui utilise des éléments d’entrée pour produire un résultat escompté",
    "Suite d’instructions écrites à suivre par un opérateur",
    "Document décrivant les responsabilités",
    "Contrôle final d’un produit"
   ],
   [
    "Qu’est-ce qu’une cartographie des processus ?",
    "Une représentation schématique des activités, flux et processus de l’entreprise",
    "Le détail d’un seul processus étape par étape",
    "Un tableau de suivi des indicateurs",
    "Un plan d’audit"
   ],
   [
    "Dans l’analogie de la voiture, que représentent les processus de réalisation ?",
    "Le moteur : les missions",
    "Le pilote : la gouvernance",
    "Le réservoir et la batterie",
    "Le tableau de bord"
   ],
   [
    "Quels processus correspondent à la gouvernance, « ceux qui sont aux commandes » ?",
    "Les processus de pilotage",
    "Les processus de réalisation",
    "Les processus support",
    "Les processus d’audit"
   ],
   [
    "Quel type de processus est le « soutien indispensable à l’ensemble » ?",
    "Support",
    "Pilotage",
    "Réalisation",
    "Amélioration"
   ],
   [
    "Les éléments d’entrée d’un processus sont généralement…",
    "Les éléments de sortie d’autres processus",
    "Des documents produits par la direction",
    "Uniquement des matières premières",
    "Les exigences de l’auditeur"
   ],
   [
    "Quand parle-t-on de « procédé spécial » ?",
    "Quand la conformité de la sortie ne peut être validée immédiatement ou économiquement",
    "Quand le processus est confidentiel",
    "Quand il est sous-traité",
    "Quand il est entièrement automatisé"
   ],
   [
    "Quelle est une valeur ajoutée de l’approche processus ?",
    "Se mettre d’accord sur une vision commune de l’organisation",
    "Supprimer le besoin d’audit",
    "Réduire le nombre de clients",
    "Remplacer le PDCA"
   ],
   [
    "Quel outil modélise le déroulement d’un processus étape par étape ?",
    "Le logigramme",
    "La cartographie",
    "Le SWOT",
    "Le PESTEL"
   ],
   [
    "Quelles sont les trois familles de processus d’une cartographie ?",
    "Pilotage, réalisation, support",
    "Entrée, sortie, contrôle",
    "Plan, Do, Check",
    "Vente, production, livraison"
   ],
   [
    "Dans une cartographie, qu’y a-t-il à l’entrée et à la sortie ?",
    "Attentes des parties prenantes en entrée, satisfaction en sortie",
    "Matières premières puis produits finis",
    "Budget puis bénéfices",
    "Normes puis certificats"
   ],
   [
    "Quel objectif N’EST PAS celui d’une cartographie ?",
    "Contrôler individuellement chaque salarié",
    "Offrir une vision globale des processus",
    "Identifier tous les processus de l’entreprise",
    "Modéliser les interactions entre processus"
   ]
  ],
  "ico": "⚙️",
  "col": "#f2791f"
 }
];
