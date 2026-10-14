/* ============================================================
   GLOBAL POLO DASHBOARD — Data layer
   Every entry carries its primary source. Items that could not
   be independently verified are labelled "unconfirmed" in copy.
   ============================================================ */

window.POLO_DATA = {

  meta: {
    updated: "6 October 2026",
    edition: "No. 1",
    stats: [
      { n: "40",  l: "Goals — highest-rated team on earth" },
      { n: "29",  l: "Finals in the 2026 ledger" },
      { n: "18–14", l: "Hurlingham final, 4 Oct" },
      { n: "10",  l: "Teams at Tortugas — a record" },
      { n: "7",   l: "Regions tracked" }
    ]
  },

  regions: [
    { id: "arg",    label: "Argentina & S. America" },
    { id: "usa",    label: "USA & N. America" },
    { id: "europe", label: "UK & Europe" },
    { id: "gulf",   label: "Middle East" },
    { id: "asia",   label: "Asia" },
    { id: "africa", label: "Africa" },
    { id: "oceania",label: "Oceania" }
  ],

  /* ---------------- TRIPLE CROWN TRACKER ---------------- */
  crown: {
    legs: [
      {
        name: "133rd Hurlingham Open",
        dates: "22 Sept – 4 Oct 2026 · Hurlingham Club",
        state: "done",
        statusLabel: "Complete",
        champion: "La Natividad La Dolfina",
        scoreline: [
          { team: "La Natividad La Dolfina", goals: "18", win: true },
          { team: "La Hache Polo Team",      goals: "14" }
        ],
        note:
          "Final pushed from Saturday to Sunday 4 Oct on a heavy-rain forecast. Progression 1-1, 3-2, 6-3, 9-3, 11-7, 15-9, 17-12, 18-14. Camilo Castagnola and Poroto Cambiaso scored 6 apiece; Hilario Ulloa top-scored the match with 7 in defeat. Barto Castagnola Jr. took MVP of both tournament and final. Adolfo Cambiaso's 17th Hurlingham title — a record he already owned.",
        source: { name: "Pololine — full final recap", url: "https://www.pololine.com/news/133rd-hurlingham-open-la-natividad-la-dolfina-did-it-again/" }
      },
      {
        name: "86th Tortugas Open",
        dates: "6 Oct – 7 Nov 2026 · Tortugas Country Club",
        state: "active",
        statusLabel: "Live — opened today",
        champion: null,
        scoreline: [
          { team: "Ellerstina Indios Chapaleufú", goals: "18", win: true },
          { team: "La Zeta Kazak",                goals: "10" }
        ],
        note:
          "Ten teams for the first time in the tournament's history, after the AAP gave both Qualification Tournament winners a Tortugas berth as well as a Palermo one. Opening day went to Ellerstina, Facundo Pieres decisive. La Ensenada also beat Don Ercole 17-13 (single-sourced, treat as provisional). Final: Saturday 7 November.",
        source: { name: "Pololine — Tortugas preview", url: "https://www.pololine.com/news/the-triple-crown-continues-with-the-86th-tortugas-open/" }
      },
      {
        name: "133rd Argentine Open — Palermo",
        dates: "10 Nov – 12 Dec 2026 · Campo Argentino de Polo",
        state: "next",
        statusLabel: "Upcoming",
        champion: null,
        scoreline: null,
        note:
          "The Cathedral. Dates are provisional: AAP president Benjamín Araya has said Pope Leo XIV's visit to Argentina (8–11 Nov), including a mass expected to draw over a million people at the Monumento de los Españoles in Palermo, will force the opening dates to shift. The 12 December final still stands. Tennium, which runs the Argentina Open tennis event, joins as the AAP's commercial partner.",
        source: { name: "Olé — Triple Crown presentation", url: "https://www.ole.com.ar/poli/triple-corona-presentacion-polo-papa_0_bVHiXV3a8D.html" }
      }
    ]
  },

  /* ---------------- THE WIRE ---------------- */
  stories: [
    /* ---- ARGENTINA ---- */
    {
      region: "arg", regionLabel: "Argentina", kind: "Calendar shake-up", kindClass: "hot",
      date: "2026 season", accent: "var(--clay)",
      title: "Argentina reversed the Triple Crown for 2026 — Hurlingham went first",
      body:
        "The order every polo follower knows — Tortugas, Hurlingham, Palermo — was flipped this year. Hurlingham opened the season on 22 September, Tortugas follows, Palermo closes. The AAP also handed both Qualification Tournament winners a Tortugas berth on top of their Palermo one, pushing the Triple Crown from 44 matches to 52.",
      sources: [
        { name: "Pololine — AAP 2026 calendar", url: "https://www.pololine.com/news/the-aap-revealed-the-complete-calendar-of-the-upcoming-2026-spring-season-in-argentina/" },
        { name: "Pololine — Hurlingham opens the Crown", url: "https://www.pololine.com/articles/the-133rd-hurlingham-open-opens-the-2026-triple-crown/" }
      ]
    },
    {
      region: "arg", regionLabel: "Argentina", kind: "Result", kindClass: "result",
      date: "4 Oct 2026",
      title: "La Natividad La Dolfina go back-to-back at Hurlingham",
      body:
        "The 40-goal side — two Cambiasos, two Castagnolas, all on 10 — were 9-3 up by the fourth and never let the margin close. Barto Castagnola Jr. swept MVP of the tournament and MVP of the final, and his horses took two of the three pony awards.",
      score: [
        { team: "La Natividad La Dolfina", goals: "18", win: true },
        { team: "La Hache Polo Team",      goals: "14" }
      ],
      sources: [{ name: "Pololine", url: "https://www.pololine.com/news/133rd-hurlingham-open-la-natividad-la-dolfina-did-it-again/" }]
    },
    {
      region: "arg", regionLabel: "Argentina", kind: "Live", kindClass: "live",
      date: "6 Oct 2026",
      title: "Tortugas opens with Ellerstina rolling over the debutants",
      body:
        "Facundo Pieres was the difference in Ellerstina Indios Chapaleufú's 18-10 win over La Zeta Kazak, scoring the clinching goal and assisting Gonzalo Pieres for the last. Half-time read 9-4. Sapo Caset and Lorenzo Chavanne were the pick of a spirited Kazak debut.",
      score: [
        { team: "Ellerstina Indios Chapaleufú", goals: "18", win: true },
        { team: "La Zeta Kazak",                goals: "10" }
      ],
      sources: [{ name: "Prensa Polo", url: "https://prensapolo.com/fr/2026/10/06/ellerstina-indios-chapaleufu-tortugas/" }]
    },
    {
      region: "arg", regionLabel: "Argentina", kind: "Scheduling", kindClass: "hot",
      date: "Nov 2026",
      title: "A papal visit is about to move the Argentine Open",
      body:
        "Pope Leo XIV visits Argentina 8–11 November. The open-air mass lands at the Monumento de los Españoles, effectively next door to the Campo Argentino de Polo, in the same window Palermo was due to open. The AAP has confirmed it must adjust the opening dates; the revised schedule had not been published at the time of writing.",
      sources: [{ name: "Olé", url: "https://www.ole.com.ar/poli/triple-corona-presentacion-polo-papa_0_bVHiXV3a8D.html" }]
    },
    {
      region: "arg", regionLabel: "Argentina", kind: "Handicaps", kindClass: "",
      date: "2026 list",
      title: "Nero down to 9, Mía Cambiaso up to 10, and a reshuffle after UAE folded",
      body:
        "Juan Martín Nero dropped 10→9 and Jerónimo del Carril 9→8; Antonio Heguy rose 8→9, with Lorenzo Chavanne, Lucas Criado Jr., Paco de Narváez, Beltrán Laulhé and Felipe Vercellino all to 8. Mía Cambiaso went to 10 in the women's game. The UAE Polo Team's disappearance scattered its players: Nero and Monteverde to Las Monjitas, Tomás Panelo to La Hache, Polito Pieres to La Irenita.",
      sources: [{ name: "Living Sports", url: "https://www.livingsports.com/news/team-shake-ups-and-handicap-changes-redefine-the-2026-argentine-polo-landscape" }]
    },
    {
      region: "arg", regionLabel: "Argentina", kind: "Breeding", kindClass: "",
      date: "11 Nov 2026",
      title: "La Dolfina's annual breeding auction returns mid-season",
      body:
        "La Dolfina has run a Polo Argentino breeding programme for 25 years — a Criollo and Thoroughbred cross — and Cambiaso's string now exceeds 1,500 horses, headed by the mare Cuartetera. The annual Remate Anual de Cría is advertised for 11 November at La Dolfina Polo Club. Los Machitos, meanwhile, runs a permanent year-round online sales platform for the same breed. Auction date is advertised rather than independently confirmed.",
      sources: [
        { name: "La Dolfina — Cría", url: "https://ladolfina.com/en/pages/cria" },
        { name: "Los Machitos", url: "https://losmachitos.com/en/home" }
      ]
    },
    {
      region: "arg", regionLabel: "Argentina", kind: "Women", kindClass: "",
      date: "26 Nov – 11 Dec 2026",
      title: "X Argentine Women's Open: La Dolfina field a 38-goal side",
      body:
        "Mía Cambiaso (10) leads the highest-rated lineup of the tournament alongside Catalina Lavinia (9), Millie Hine (9) and Hope Arellano (10). Cambiaso is one of only four women rated at 10 goals, following a fifth Argentine Women's Open title in 2025.",
      sources: [{ name: "Pololine", url: "https://www.pololine.com/news/teams-dates-for-the-x-argentine-womens-open-have-been-unveiled/" }]
    },
    {
      region: "arg", regionLabel: "Uruguay", kind: "Result", kindClass: "result",
      date: "Jan 2026",
      title: "Río Negro Los Tapiales take the 73rd Uruguayan Open",
      body:
        "Uruguay runs on a summer calendar entirely separate from Argentina's spring Triple Crown. The 73rd Abierto Uruguayo ran 2–10 January, with Río Negro Los Tapiales beating Cría Opatí 11-9, and the country staged its first-ever women's Abierto Uruguayo alongside it. Reported via regional outlets rather than confirmed at federation level.",
      sources: [{ name: "Montevideo Portal", url: "https://www.montevideo.com.uy/Tiempo-libre/Polo-en-Punta-del-Este-2026-torneos-historicos-y-test-match-internacional-uc947692" }]
    },

    /* ---- USA ---- */
    {
      region: "usa", regionLabel: "United States", kind: "Result", kindClass: "result",
      date: "26 Apr 2026",
      title: "Pilot take a third U.S. Open, and the Gauntlet splits two ways",
      body:
        "Pilot — Curtis Pilot, Mackenzie Weisz, Lorenzo Chavanne, Camilo Castagnola — beat BTA 15-10 at the National Polo Center, after taking the USPA Gold Cup 10-6 a month earlier. The Dutta Corp had opened the series with a first C.V. Whitney Cup, 14-9. No side has swept all three legs since Pilot did it in the inaugural 2019 Gauntlet.",
      score: [
        { team: "Pilot", goals: "15", win: true },
        { team: "BTA",   goals: "10" }
      ],
      sources: [
        { name: "Prensa Polo — US Open", url: "https://prensapolo.com/en/2026/04/27/us-open-polo-championship-gauntlet-2026/" },
        { name: "Pololine — Whitney Cup", url: "https://www.pololine.com/news/cv-whitney-cup-the-dutta-corp-claimed-the-first-leg-of-the-gauntlet-of-polo/" }
      ]
    },
    {
      region: "usa", regionLabel: "United States", kind: "Result", kindClass: "result",
      date: "13 Sept 2026",
      title: "IGEA win the East Coast Open on a golden goal at Greenwich",
      body:
        "Raúl 'Gringo' Colombres settled it 10-9 against FlyHouse to close the 20-goal championship. Cristián 'Magoo' Laprida took MVP. The tournament also marked U.S. Polo Assn.'s first sponsorship of Greenwich Polo Club, which has hosted the event since 2005.",
      score: [
        { team: "IGEA",     goals: "10", win: true },
        { team: "FlyHouse", goals: "9" }
      ],
      sources: [{ name: "U.S. Polo Assn.", url: "https://www.uspa.com/press-releases/u-s-polo-assn-celebrates-new-partnership-with-the-historic-greenwich-polo-club-at-the-2026-east-coast-open-presented-by-audi" }]
    },
    {
      region: "usa", regionLabel: "United States", kind: "Handicaps", kindClass: "hot",
      date: "28 Apr 2026",
      title: "Chavanne jumps 7 to 9 in a single cycle — Cambiaso and Ulloa come off 10",
      body:
        "The 18-year-old's double of USPA Gold Cup and U.S. Open with Pilot produced the handicap story of the American year. In the same bulletin, Adolfo Cambiaso and Hilario Ulloa both went 10→9 and Francisco Elizalde 9→8, while Lucio Fernández Ocampo rose 5→7 and Mackenzie Weisz 6→7.",
      sources: [
        { name: "Pololine", url: "https://www.pololine.com/news/the-uspa-revealed-the-new-handicaps/" },
        { name: "Prensa Polo", url: "https://prensapolo.com/en/2026/04/29/las-modificaciones-de-handicap-de-usa-luego-del-cierre-de-temporada/" }
      ]
    },
    {
      region: "usa", regionLabel: "United States", kind: "Women", kindClass: "",
      date: "15 Feb 2026",
      title: "Victory Eastern Hay take the U.S. Open Women's — Hine's third straight",
      body:
        "Hazel Jackson scored four and took MVP as Victory Eastern Hay beat La Dolfina 7-5 at the National Polo Center. Millie Hine added three for a third consecutive title. Mía and Myla Cambiaso scored two each in defeat. Jackson, Hine and Hope Arellano are the game's three 10-goal women in the USPA list.",
      score: [
        { team: "Victory Eastern Hay", goals: "7", win: true },
        { team: "La Dolfina",          goals: "5" }
      ],
      sources: [{ name: "U.S. Polo Assn.", url: "https://www.uspa.com/press-releases/supported-by-u-s-polo-assn-the-2026-u-s-open-womens-polo-championship-r" }]
    },
    {
      region: "usa", regionLabel: "United States", kind: "Result", kindClass: "result",
      date: "30 Aug 2026",
      title: "Klentner Ranch run away with the Pacific Coast Open",
      body:
        "A fourth title for the family operation, 16-9 over defending champions La Karina at Santa Barbara, with 67 goals scored across six matches. Ignacio 'Nachi' Viana took MVP.",
      score: [
        { team: "Klentner Ranch", goals: "16", win: true },
        { team: "La Karina",      goals: "9" }
      ],
      sources: [{ name: "Santa Barbara Independent", url: "https://www.independent.com/2026/08/31/klentner-ranch-rides-away-with-the-pacific-coast-open-title/" }]
    },
    {
      region: "usa", regionLabel: "United States", kind: "Looking ahead", kindClass: "",
      date: "27 Dec 2026 – 2 May 2027",
      title: "Wellington's next season lands a world championship",
      body:
        "The National Polo Center season opens 27 December. The 2027 Gauntlet runs C.V. Whitney (27 Jan–21 Feb), Gold Cup (24 Feb–21 Mar) and U.S. Open (24 Mar–18 Apr). Closing it out, and a first for the United States: the II FIP Women's World Polo Championship, 24 April – 2 May 2027.",
      sources: [{ name: "Town-Crier", url: "https://gotowncrier.com/2026/08/national-polo-center-announces-2027-schedule-in-wellington/" }]
    },
    {
      region: "usa", regionLabel: "United States", kind: "Broadcast", kindClass: "",
      date: "2026",
      title: "Chris Fowler fronts ESPN's polo coverage for the first time",
      body:
        "ESPN and ESPN2 carried both the USPA Gold Cup and U.S. Open finals live, with Fowler hosting alongside Kenny Rice and Hall of Famer Adam Snow — an expansion of the landmark 2022 agreement between USPA Global and the network.",
      sources: [{ name: "U.S. Polo Assn.", url: "https://uspa.com/press-releases/uspa-global-and-espn-expand-relationship-with-chris-fowler-for-2026-high" }]
    },
    {
      region: "usa", regionLabel: "United States", kind: "Governance", kindClass: "",
      date: "Mid-2026",
      title: "A leadership change at the USPA that nobody quite announced",
      body:
        "A March 2026 release quotes Stewart Armstrong as USPA Chairman; by September, official releases name Tim Kelly in the same role, having earlier been described as President. A transition clearly occurred during 2026, but no dated announcement could be found. Treat as unconfirmed. Separately, new Outdoor Polo Rules and Tournament Conditions took effect 1 January 2026, with equine welfare cited as a driver.",
      sources: [{ name: "Polo Biz — Tim Kelly profile", url: "https://www.polobiz.com/post/a-new-era-for-us-polo-led-by-tim-kelly" }]
    },
    {
      region: "usa", regionLabel: "United States", kind: "Arena", kindClass: "",
      date: "13–18 Oct 2026",
      title: "The Women's Arena Open says goodbye to OC Polo Club",
      body:
        "A $15,000 purse and the last edition at the California venue before the tournament moves to Brookshire Arena, Texas in 2027. Marissa Wells, a 10-goal arena player and three-time champion, is in the field.",
      sources: [{ name: "Polohub", url: "https://polohub.net/uspa-womens-arena-open-2026-a-landmark-moment-for-womens-arena-polo/" }]
    },
    {
      region: "usa", regionLabel: "United States", kind: "Anniversary", kindClass: "",
      date: "2026 season",
      title: "Newport turns 150, and Brazil comes back",
      body:
        "America's oldest polo club, founded 1876, marked a Diamond Jubilee season. Brazil returned to Newport on 27 June after an 11-year absence, and the rained-out Turkish Airlines finals were replayed on 3 October with a 50-pony parade. Reported locally rather than confirmed at club level.",
      sources: [{ name: "What's Up Newp", url: "https://whatsupnewp.com/2026/09/newport-polos-rained-out-finale-gets-a-saturday-encore-with-a-50-pony-parade/" }]
    },

    /* ---- EUROPE ---- */
    {
      region: "europe", regionLabel: "England", kind: "Result", kindClass: "result",
      date: "14 Jun 2026",
      title: "Balanz Capital win the Cartier Queen's Cup unbeaten, on debut",
      body:
        "17-7 over Aureus at Guards, after surviving a 12-11 overtime semi-final against Dubai on a Lorenzo Chavanne penalty. Jeta Castagnola scored seven in the final and took MVP; his mare Machitos Mamushka was Best Playing Pony. Cartier's 14th consecutive year as title sponsor.",
      score: [
        { team: "Balanz Capital", goals: "17", win: true },
        { team: "Aureus",         goals: "7" }
      ],
      sources: [{ name: "Guards Polo Club", url: "https://www.guardspoloclub.com/tournaments/cartier-queens-cup-season-2026" }]
    },
    {
      region: "europe", regionLabel: "England", kind: "Result", kindClass: "result",
      date: "19 Jul 2026",
      title: "Gaston take a first British Open — and a Heguy family final",
      body:
        "9-8 over Dubai for the Cowdray Gold Cup, with cousins on opposite sides: Cruz Heguy for Gaston, Antonio Heguy for Dubai, sons of Eduardo 'Ruso' and Alberto 'Pepe'. Cruz took MVP.",
      score: [
        { team: "Gaston", goals: "9", win: true },
        { team: "Dubai",  goals: "8" }
      ],
      sources: [{ name: "Cowdray Park Polo Club", url: "https://cowdraypolo.co.uk/" }]
    },
    {
      region: "europe", regionLabel: "England", kind: "International", kindClass: "",
      date: "25 Jul 2026",
      title: "England beat Uruguay for the Coronation Cup",
      body:
        "14-8 on International Day at Guards, with Louis Hine, Oliver Cudmore, Ned Hine and Tomás Beresford. Young England and Young Argentina also met for the Whitbread Trophy with the series level at 1-1.",
      score: [
        { team: "England", goals: "14", win: true },
        { team: "Uruguay", goals: "8" }
      ],
      sources: [{ name: "Hurlingham Polo Association", url: "https://hurlinghampolo.com/past-winners-of-the-coronation-cup/" }]
    },
    {
      region: "europe", regionLabel: "Spain", kind: "Result", kindClass: "result",
      date: "29 Aug 2026",
      title: "Dubai claim a fifth Sotogrande Gold Cup",
      body:
        "16-9 over Sainte Mesme in the high-handicap Copa de Oro at Santa María Polo Club. Bartolomé Castagnola scored six for a third personal title, 16-year-old Pedro Chavanne added four, and Gonzalo Ferrari took MVP. P1 Cars El Bambú won the medium and Vamos Korea the low.",
      score: [
        { team: "Dubai",        goals: "16", win: true },
        { team: "Sainte Mesme", goals: "9" }
      ],
      sources: [{ name: "Andalucia.com — Sotogrande log", url: "https://www.andalucia.com/sotogrande/polo/tournaments/2026" }]
    },
    {
      region: "europe", regionLabel: "France", kind: "Result", kindClass: "result",
      date: "30 Aug 2026",
      title: "Talandracas take the Deauville Coupe d'Or",
      body:
        "9-7 over Barrière Polo Team to close the Barrière Deauville Polo Cup. Lucas Criado swept MVP and Best Playing Pony on the mare Lac Chapera.",
      score: [
        { team: "Talandracas",        goals: "9", win: true },
        { team: "Barrière Polo Team", goals: "7" }
      ],
      sources: [{ name: "Prensa Polo", url: "https://prensapolo.com/en/2026/08/31/la-coupe-dor-deauville/" }]
    },
    {
      region: "europe", regionLabel: "France", kind: "Result", kindClass: "result",
      date: "Sept 2026",
      title: "Chantilly crowns a 16-year-old MVP",
      body:
        "Kazak beat Akasha 10-9 for the Open de France Barnes, and Leon Donoso became the youngest MVP in the tournament's history at 16. In the women's Open de France, Why Not beat Augustinus Bader, with Hazel Jackson named best professional and her own mare El Overo Z7 Michinga taking the pony award.",
      score: [
        { team: "Kazak",  goals: "10", win: true },
        { team: "Akasha", goals: "9" }
      ],
      sources: [{ name: "Cheval Mag", url: "https://www.chevalmag.com/sports/open-de-france-de-polo-2026-kazak-et-why-not-simposent-a-chantilly/" }]
    },
    {
      region: "europe", regionLabel: "Italy", kind: "New event", kindClass: "hot",
      date: "30 May 2026",
      title: "FIP launches a European Arena Championship in the Villa Borghese",
      body:
        "A first edition staged at Piazza di Siena alongside CSIO Rome, with France beating England 4-3 on a Clement Delfosse golden goal and Switzerland taking third over Italy 7-3. FISE president Marco Di Paola reported over 5,000 spectators across four nights and said the event is intended to become a fixture of the European calendar.",
      score: [
        { team: "France",  goals: "4", win: true },
        { team: "England", goals: "3" }
      ],
      sources: [
        { name: "FISE (official)", url: "https://www.fise.it/sport/polo/news-polo/archivio-news-polo/22126-fip-arena-polo-european-championship,-la-prima-edizione-va-alla-francia-argento-inghilterra,-italia-quarta-%20di-paola-%E2%80%9Cevento-innovativo,-successo-straordinario.html" },
        { name: "Prensa Polo", url: "https://prensapolo.com/en/2026/06/01/fip-european-arena-polo-championship-2026-roma/" }
      ]
    },
    {
      region: "europe", regionLabel: "Switzerland", kind: "Snow polo", kindClass: "",
      date: "25 Jan 2026",
      title: "Standing Rock win on the frozen lake at St. Moritz",
      body:
        "6-4.5 over Flexjet in the 41st Snow Polo World Cup, Raúl Laplacette taking MVP with a late run. At Kitzbühel a week earlier, Allianz beat Team Pommery 8-6.5; at Courmayeur, Team Fieracavalli won on debut 7-5. The 42nd St. Moritz edition is confirmed for 22–24 January 2027.",
      score: [
        { team: "Standing Rock", goals: "6",   win: true },
        { team: "Flexjet",       goals: "4.5" }
      ],
      sources: [
        { name: "Pololine", url: "https://www.pololine.com/news/standing-rock-the-winners-of-the-41st-snow-polo-world-cup-st-moritz/" },
        { name: "Snow Polo St. Moritz (official)", url: "https://www.snowpolo-stmoritz.com/1/tournament-2025/42nd-snow-polo-world-cup-st-moritz-2027/" }
      ]
    },
    {
      region: "europe", regionLabel: "FIP", kind: "Governance", kindClass: "hot",
      date: "Postponed to 2027",
      title: "The FIP World Championship has lost its host",
      body:
        "The XIII World Polo Championship was awarded to the UAE for December 2026 — the first in Asia — across Ghantoot, Al Habtoor, Desert Palm and Dubai Polo Club. In May the UAE confirmed it could not host. The HPA now states the event is expected in early 2027 at a venue pending confirmation, with Uruguay reported as the likely replacement. The USA qualified from Zone A, beating Mexico 6-4 in Wellington.",
      sources: [{ name: "Hurlingham Polo Association", url: "https://hurlinghampolo.com/usa-advances-to-xiii-fip-world-polo-championship/" }]
    },
    {
      region: "europe", regionLabel: "England", kind: "Safety", kindClass: "",
      date: "2026 rules",
      title: "The HPA now requires eye protection as well as a certified helmet",
      body:
        "Sports glasses, goggles or a face guard are mandatory for all players, alongside a tightened list of accepted helmet standards — PAS015:2011 with CE mark, VG1, UTAC/CRITT, NOCSAE and EN1384 — with the older PAS015:1998 and SNELL E2001 no longer accepted. Rule wording taken from the HPA's published document via secondary reading; exact clause unconfirmed.",
      sources: [{ name: "HPA helmet rules (PDF)", url: "https://www.hpa-polo.co.uk/download/2026-Helmet-Rules-for-HPA-website-v18.pdf" }]
    },
    {
      region: "europe", regionLabel: "England", kind: "Controversy", kindClass: "hot",
      date: "Ongoing",
      title: "A royal-adjacent polo club is sitting on 500,000 cubic metres of waste soil",
      body:
        "The Royal County of Berkshire Polo Club, home of the Prince of Wales Trophy, has since 2013 taken an estimated 500,000 cubic metres of waste soil containing brick and plastic onto its Winkfield grounds. Bracknell Forest Council issued an enforcement notice with a January 2027 deadline, then withdrew it in 2026 after the club proposed practice pitches and wetland habitat — with no commitment to remove the material. Originally reported by The Times.",
      sources: [{ name: "GB News (syndicated)", url: "https://www.europesays.com/uk/871052/" }]
    },
    {
      region: "europe", regionLabel: "Switzerland", kind: "Milestone", kindClass: "",
      date: "Aug 2026",
      title: "Pierandrea Müller becomes the highest-rated player the Alps have produced",
      body:
        "Raised to +5 in Argentina — a mark no player from the German-speaking polo world has previously held — and from 3 to 4 in England in the same summer. An economics student at the Universidad Católica Argentina, he reached the Abierto de Tortugas final, played the 28-goal Abierto de Pilar Chico, and won the New Zealand Open in February.",
      sources: [{ name: "POLO+10", url: "https://poloplus10.com/pierandrea-mueller-polo-star-alps-handicap-5/" }]
    },

    /* ---- MIDDLE EAST ---- */
    {
      region: "gulf", regionLabel: "UAE", kind: "Season opens", kindClass: "hot",
      date: "10 Oct 2026", accent: "var(--clay)",
      title: "Dubai's season opens on Saturday — and the Gulf calendar is published through April",
      body:
        "Al Habtoor Polo Resort & Club opens the 2026-27 season on 10 October, followed by the Ladies Charity Cup on 24 October and a Halloween Cup at the end of the month. The UAE National Day Cup runs 24–28 November, the 20-goal Silver Cup 23 January – 6 February, and the Gold Cup 3–20 March 2027.",
      sources: [{ name: "Dubai Polo Gold Cup (official calendar)", url: "https://www.dubaipologoldcup.com/" }]
    },
    {
      region: "gulf", regionLabel: "UAE", kind: "Result", kindClass: "result",
      date: "14 Feb 2026",
      title: "Dubai Wolves end UAE Polo's six-year grip on the Gold Cup",
      body:
        "An 11-8 win at Al Habtoor unseated the six-time defending champions. Felix Esain took MVP and his mare Only Caravina the pony award. Habtoor Polo beat Ghantoot in the Bentley Cup the same day, and went on to add the Polo Masters and the Dubai Cup later in the season.",
      score: [
        { team: "Dubai Wolves by Thera", goals: "11", win: true },
        { team: "UAE Polo",              goals: "8" }
      ],
      sources: [
        { name: "Gulf Today", url: "https://www.gulftoday.ae/sport/2026/02/16/dubai-wolves-by-thera-overcome-uae-polo-to-clinch-dubai-gold-cup" },
        { name: "POLO+10", url: "https://poloplus10.com/dubai-wolves-by-thera-claim-a-phenomenal-victory-in-the-dubai-gold-cup-2026-final/" }
      ]
    },
    {
      region: "gulf", regionLabel: "Saudi Arabia", kind: "Result", kindClass: "result",
      date: "17 Jan 2026",
      title: "AlUla Desert Polo puts Vision 2030 money behind the sport",
      body:
        "Team Defender beat Team AlUla 9-8 in the fifth edition, played at the AlFursan Equestrian Village with Pablo Mac Donough, Pelón Stirling, Nacho Figueras and Lia Salvo in the field alongside HRH Prince Salman bin Sultan. The Royal Commission for AlUla holds hosting rights through a partnership with SURJ Sports Investment, a Public Investment Fund subsidiary.",
      score: [
        { team: "Team Defender", goals: "9", win: true },
        { team: "Team AlUla",    goals: "8" }
      ],
      sources: [
        { name: "POLO+10", url: "https://poloplus10.com/alula-desert-polo-2026/" },
        { name: "Hurlingham Polo", url: "https://hurlinghampolo.com/alula-desert-polo-2026/" }
      ]
    },
    {
      region: "gulf", regionLabel: "Qatar", kind: "Growth", kindClass: "",
      date: "2026 edition",
      title: "Qatar builds a waterfront tournament — and its first women's team",
      body:
        "Polo AlMarsa, staged at Old Doha Port, is Qatar's first waterfront polo event; Team Lusail won the inaugural Championship Cup with players from Qatar, Argentina and Chile, and the event took four golds at the Qatar Event Show Awards. The 2026 edition is reported to introduce Qatar's first female polo team. Dates unconfirmed at the time of writing.",
      sources: [{ name: "Polo AlMarsa", url: "https://poloalmarsa.com/" }]
    },

    /* ---- ASIA ---- */
    {
      region: "asia", regionLabel: "India", kind: "Live", kindClass: "live",
      date: "Oct – Nov 2026",
      title: "India's season is running right now, from Rambagh to the Jaipur Polo Ground",
      body:
        "The Rajasthan Polo Club's autumn block at the Rambagh grounds runs to 25 October, with the Sawai Man Guard Cup, Gen Amar Singh Kanota Cup and B.M. Birla Cup reported in sequence. The Delhi fall season — including the Northern India Polo Championship — runs 12 October to 22 November. Specific cup dates are reported rather than federation-confirmed.",
      sources: [
        { name: "Indian Polo Association", url: "https://www.ipa.co.in/" },
        { name: "Jaipur season listing", url: "https://ilovejaipur.city/events/jaipur-polo-season-2026/" }
      ]
    },
    {
      region: "asia", regionLabel: "India", kind: "Result", kindClass: "result",
      date: "23 Mar 2026",
      title: "Jaipur take an 11th Indian Open",
      body:
        "Jaipur Optiemus Achievers beat Jindal Panther 12-9, Alejo Aramburu scoring eight. HH Maharaja Sawai Padmanabh Singh, Pratap Singh Kanota and Daniel Otamendi completed the scoring. India's game remains underpinned by the Army — the 61st Cavalry at Delhi Cantt shares an address with the Indian Polo Association itself, and the Calcutta Polo Club, the world's oldest, still runs the Ezra Cup.",
      score: [
        { team: "Jaipur Optiemus Achievers", goals: "12", win: true },
        { team: "Jindal Panther",            goals: "9" }
      ],
      sources: [{ name: "The News Mill", url: "https://thenewsmill.com/2026/03/jaipur-optiemus-achievers-win-indian-open-polo-championship-12-9-against-jindal-panther/" }]
    },
    {
      region: "asia", regionLabel: "Pakistan", kind: "Result", kindClass: "result",
      date: "9 Mar 2026",
      title: "FG Polo take the Quaid-e-Azam Gold Cup in Lahore",
      body:
        "A 10-8 win over Master Paints/Diamond Paints in the 63rd National Open. Raja Mikayial Sami scored five and was named best Pakistani player; Facundo Retamar Carnero top-scored the tournament. Earlier in the season the Punjab Polo Cup reached its 97th edition — billed as Pakistan's oldest continuously held sporting event at 141 years.",
      score: [
        { team: "FG Polo",                      goals: "10", win: true },
        { team: "Master Paints / Diamond Paints", goals: "8" }
      ],
      sources: [{ name: "The Nation", url: "https://www.nation.com.pk/09-Mar-2026/fg-polo-clinch-63rd-allied-bank-national-open-polo-trophy" }]
    },
    {
      region: "asia", regionLabel: "Thailand & Malaysia", kind: "Result", kindClass: "result",
      date: "2026 season",
      title: "Thai Polo marks 20 years; Malaysia plays under royal patronage",
      body:
        "The B.Grimm Thai Polo Open reached its 20th anniversary on 24 January at Pattaya, with Thai Polo winning the HRH Princess Maha Chakri Sirindhorn Cup against teams from Hong Kong, China and Germany. In Malaysia, Samudera and Sri Bendahara took the two Cahaya Cup divisions in June, with trophies presented by the Sultan of Pahang. Worth correcting a persistent listing error: the King's Cup Elephant Polo has not been staged since 2018.",
      sources: [
        { name: "Royal Malaysian Polo Association", url: "https://rmpa.org.my/cahaya-cup-2026/" },
        { name: "Thai Polo Open coverage", url: "https://www.newssummedup.com/summary/Thai-Polo-marks-20th-anniversary-with-Princesss-Cup-B-Grimm-Thai-Polo-Open-victory-rhhd2a" }
      ]
    },
    {
      region: "asia", regionLabel: "China", kind: "Business", kindClass: "",
      date: "2026",
      title: "Ralph Lauren plants a flag in Beijing as Tianjin's great white elephant sits empty",
      body:
        "Sunny Times Polo Club in Yanqing, Beijing, hosted an inaugural Ralph Lauren Polo Cup — a luxury brand entering Chinese polo for the first time — alongside the Beijing Metropolitan Polo Cup. Coverage has been society-page rather than sporting, with no published scores. Meanwhile the Tianjin Goldin Metropolitan Polo Club, once China's marquee venue, has been effectively defunct since its owner's 2022 bankruptcy.",
      sources: [{ name: "Sunny Times / Visit Beijing", url: "https://r.visitbeijing.com.cn/attraction/36" }]
    },

    /* ---- AFRICA ---- */
    {
      region: "africa", regionLabel: "Ghana", kind: "Live", kindClass: "live",
      date: "6–11 Oct 2026",
      title: "Accra is playing the Trustees' Cup this week — and Pink October follows",
      body:
        "West Africa's busiest published calendar has the Trustees' Cup running right now, a Run For A Cure pink polo day on 10 October, and the international Pink Polo Trophy from 27 October to 1 November, raising funds for breast-cancer screening and education in Ghana. The Accra vs. Lagos Cup follows in November.",
      sources: [{ name: "Accra Polo Club", url: "https://accrapoloclub.com/tournaments/" }]
    },
    {
      region: "africa", regionLabel: "South Africa", kind: "Result", kindClass: "result",
      date: "16 May 2026",
      title: "Team USA win the Nedbank International at Inanda",
      body:
        "A 13-8 win in Sandton on the seventh American tour of South Africa since 1974. Steve Krueger, who had captained the USA through the FIP Zone A qualifier in Florida two weeks earlier, took MVP again.",
      score: [
        { team: "USA",          goals: "13", win: true },
        { team: "South Africa", goals: "8" }
      ],
      sources: [{ name: "Sandton Times", url: "https://sandtontimes.co.za/2026-nedbank-international-polo/" }]
    },
    {
      region: "africa", regionLabel: "Morocco", kind: "International", kindClass: "",
      date: "10 May 2026",
      title: "Morocco beat the USA to win their own trophy — with Saudi Arabia in the field",
      body:
        "The 6th Mohammed VI International Polo Trophy, under royal patronage across Rabat and Asilah, finished Morocco 9-5 USA, with Portugal third. Six nations competed — Morocco, USA, Hungary, Saudi Arabia, Portugal and France — making it a rare fixture where a Gulf national side plays on African soil.",
      score: [
        { team: "Morocco", goals: "9", win: true },
        { team: "USA",     goals: "5" }
      ],
      sources: [{ name: "Morocco World News", url: "https://www.moroccoworldnews.com/2026/05/296710/the-win-crowned-an-impressive-campaign-for-morocco-which-opened-the-tournament-with-a-win-over-hungary-before-defeating-portugal-in-the-following-round/" }]
    },
    {
      region: "africa", regionLabel: "Nigeria & Kenya", kind: "Result", kindClass: "result",
      date: "2026 season",
      title: "Lagos stages Africa's biggest meeting; Nairobi enters a sixth sponsored season",
      body:
        "The NPA Lagos International ran 27 January to 15 February at Ikoyi — around 30 teams, 120 players and 480 horses, with Lagos STL taking the Majekodunmi Cup. In Kaduna, the Access Bank–UNICEF Charity Shield drew 20-plus teams for children's education programmes. Kenya's season opened in June; Nairobi Hospital beat Tusker Malt 5-2 for the Trustees Cup, with Kenya Breweries renewing sponsorship for a sixth year.",
      sources: [
        { name: "Nigeria Polo Association", url: "https://npa-polo.ng/" },
        { name: "Kenya Online News", url: "https://www.kenyaonlinenews.com/nairobi-polo-scene-gears-up-for" }
      ]
    },

    /* ---- OCEANIA ---- */
    {
      region: "oceania", regionLabel: "New Zealand", kind: "Result", kindClass: "result",
      date: "15 Feb 2026",
      title: "Standing Rock take the New Zealand Open at Clevedon",
      body:
        "16-13 over The Brinks at Auckland Polo Club, Jimbo Fewster scoring 12 of his team's goals for MVP. The same team name won the Snow Polo World Cup at St. Moritz three weeks earlier with a different roster — a common arrangement in high-goal polo, where a patron's brand travels between circuits.",
      score: [
        { team: "Standing Rock", goals: "16", win: true },
        { team: "The Brinks",    goals: "13" }
      ],
      sources: [
        { name: "Polo Times", url: "http://www.polotimes.co.uk/index.php?pg=35&story=3623" },
        { name: "Franklin Times", url: "https://franklintimes.co.nz/polo-champions-revealed/" }
      ]
    },
    {
      region: "oceania", regionLabel: "Australia", kind: "Gap", kindClass: "",
      date: "20 Sept 2026",
      title: "The Australian Open was played — but no result has been published",
      body:
        "Finals day was scheduled at Elysian Fields, Boyland, Queensland, run by the South East Queensland Polo Club. No winner or score could be found in any accessible source. Ellerston, the Packer family estate in the Hunter Valley that anchors Australian high-goal polo, held its Kerry Packer Challenge Cup finals on 29 March; that result is likewise unpublished. Ellerston TV and PoloCam TV carry the matches.",
      sources: [
        { name: "Australian Polo Federation", url: "https://www.australianpolo.com.au/" },
        { name: "Ellerston TV", url: "https://tv.ellerston.com/" }
      ]
    },
    {
      region: "oceania", regionLabel: "Global", kind: "New event", kindClass: "hot",
      date: "13 Sept 2026",
      title: "FIP stages its first official Beach Polo World Cup — in Azerbaijan",
      body:
        "Elite Polo Club beat St. Moritz 6-4 at Sea Breeze on the Caspian, with Red Star of the UK third over Moscow Polo Club. Raúl Laplacette, who had already taken MVP on the ice at St. Moritz in January, was named best player on the sand.",
      score: [
        { team: "Elite Polo Club (Azerbaijan)", goals: "6", win: true },
        { team: "St. Moritz (Switzerland)",     goals: "4" }
      ],
      sources: [{ name: "Sea Breeze", url: "https://seabreeze.az/ru/news/v-sea-breeze-zaversilsa-pervyj-beach-polo-world-cup-v-azerbajdzane" }]
    }
  ],

  /* ---------------- RESULTS LEDGER ---------------- */
  results: [
    { date: "4 Oct 2026",  event: "133rd Hurlingham Open",            region: "Argentina",    winner: "La Natividad La Dolfina", score: "18–14",  runnerUp: "La Hache Polo Team",
      sources: [{ name: "Pololine", url: "https://www.pololine.com/news/133rd-hurlingham-open-la-natividad-la-dolfina-did-it-again/" }] },
    { date: "13 Sept 2026", event: "East Coast Open",                 region: "USA · Greenwich", winner: "IGEA", score: "10–9",  runnerUp: "FlyHouse",
      sources: [{ name: "U.S. Polo Assn.", url: "https://www.uspa.com/press-releases/u-s-polo-assn-celebrates-new-partnership-with-the-historic-greenwich-polo-club-at-the-2026-east-coast-open-presented-by-audi" }] },
    { date: "13 Sept 2026", event: "FIP Beach Polo World Cup (1st)", region: "Azerbaijan · Sea Breeze", winner: "Elite Polo Club", score: "6–4", runnerUp: "St. Moritz",
      sources: [{ name: "Sea Breeze", url: "https://seabreeze.az/ru/news/v-sea-breeze-zaversilsa-pervyj-beach-polo-world-cup-v-azerbajdzane" }] },
    { date: "30 Aug 2026", event: "Coupe d'Or / Deauville Gold Cup",  region: "France",       winner: "Talandracas",             score: "9–7",   runnerUp: "Barrière Polo Team",
      sources: [{ name: "Prensa Polo", url: "https://prensapolo.com/en/2026/08/31/la-coupe-dor-deauville/" }] },
    { date: "30 Aug 2026", event: "Pacific Coast Open",               region: "USA · Santa Barbara", winner: "Klentner Ranch",   score: "16–9",  runnerUp: "La Karina",
      sources: [{ name: "SB Independent", url: "https://www.independent.com/2026/08/31/klentner-ranch-rides-away-with-the-pacific-coast-open-title/" }] },
    { date: "29 Aug 2026", event: "Copa de Oro Sotogrande (High)",    region: "Spain",        winner: "Dubai",                   score: "16–9",  runnerUp: "Sainte Mesme",
      sources: [{ name: "Andalucia.com", url: "https://www.andalucia.com/sotogrande/polo/tournaments/2026" }] },
    { date: "23 Aug 2026", event: "Hublot Polo Gold Cup Gstaad",      region: "Switzerland",  winner: "Albinati Aeronautics",    score: "8–7",   runnerUp: "Kielder Agro Group",
      sources: [{ name: "Pololine", url: "https://www.pololine.com/news/albinati-aeronautics-claimed-the-hublot-polo-gold-cup-gstaad/" }] },
    { date: "25 Jul 2026", event: "Coronation Cup",                   region: "England",      winner: "England",                 score: "14–8",  runnerUp: "Uruguay",
      sources: [{ name: "HPA", url: "https://hurlinghampolo.com/past-winners-of-the-coronation-cup/" }] },
    { date: "19 Jul 2026", event: "British Open / Cowdray Gold Cup",  region: "England",      winner: "Gaston",                  score: "9–8",   runnerUp: "Dubai",
      sources: [{ name: "Cowdray Park", url: "https://cowdraypolo.co.uk/" }] },
    { date: "20 Jun 2026", event: "Warwickshire Cup",                 region: "England",      winner: "Thai Polo",               score: "11–10", runnerUp: "Lovelocks Polo Stud",
      sources: [{ name: "Polo Times", url: "https://www.polotimes.co.uk/index.php?pg=35&story=3671" }] },
    { date: "14 Jun 2026", event: "Cartier Queen's Cup",              region: "England",      winner: "Balanz Capital",          score: "17–7",  runnerUp: "Aureus",
      sources: [{ name: "Guards Polo Club", url: "https://www.guardspoloclub.com/tournaments/cartier-queens-cup-season-2026" }] },
    { date: "30 May 2026", event: "FIP European Arena Championship",  region: "Italy · Rome", winner: "France",                  score: "4–3",   runnerUp: "England",
      sources: [{ name: "FISE", url: "https://www.fise.it/sport/polo/news-polo/archivio-news-polo/22126-fip-arena-polo-european-championship,-la-prima-edizione-va-alla-francia-argento-inghilterra,-italia-quarta-%20di-paola-%E2%80%9Cevento-innovativo,-successo-straordinario.html" }] },
    { date: "16 May 2026", event: "Nedbank International",            region: "South Africa · Inanda", winner: "USA",            score: "13–8",  runnerUp: "South Africa",
      sources: [{ name: "Sandton Times", url: "https://sandtontimes.co.za/2026-nedbank-international-polo/" }] },
    { date: "16 May 2026", event: "Prince of Wales Trophy",           region: "England",      winner: "Cibao La Pampa / Murus Sanctus", score: "9–8 OT", runnerUp: "Jindal Steel / La Dolfina",
      sources: [{ name: "Prensa Polo", url: "https://prensapolo.com/en/2026/05/18/prince-of-wales-campeones-murus-sanctus/" }] },
    { date: "10 May 2026", event: "Mohammed VI International Trophy", region: "Morocco",      winner: "Morocco",                 score: "9–5",   runnerUp: "USA",
      sources: [{ name: "Morocco World News", url: "https://www.moroccoworldnews.com/2026/05/296710/the-win-crowned-an-impressive-campaign-for-morocco-which-opened-the-tournament-with-a-win-over-hungary-before-defeating-portugal-in-the-following-round/" }] },
    { date: "3 May 2026",  event: "FIP World C'ship Zone A Playoff",  region: "USA · Wellington", winner: "USA",                 score: "6–4",   runnerUp: "Mexico",
      sources: [{ name: "HPA", url: "https://hurlinghampolo.com/usa-advances-to-xiii-fip-world-polo-championship/" }] },
    { date: "26 Apr 2026", event: "U.S. Open Polo Championship",      region: "USA · Wellington", winner: "Pilot",               score: "15–10", runnerUp: "BTA",
      sources: [{ name: "Prensa Polo", url: "https://prensapolo.com/en/2026/04/27/us-open-polo-championship-gauntlet-2026/" }] },
    { date: "29 Mar 2026", event: "USPA Gold Cup",                    region: "USA · Wellington", winner: "Pilot",               score: "10–6",  runnerUp: "La Dolfina Scone",
      sources: [{ name: "Living Sports", url: "https://www.livingsports.com/news/pilot-turned-the-tide-and-claimed-the-2026-uspa-gold-cup" }] },
    { date: "23 Mar 2026", event: "Indian Open Polo Championship",    region: "India · Delhi", winner: "Jaipur Optiemus Achievers", score: "12–9", runnerUp: "Jindal Panther",
      sources: [{ name: "The News Mill", url: "https://thenewsmill.com/2026/03/jaipur-optiemus-achievers-win-indian-open-polo-championship-12-9-against-jindal-panther/" }] },
    { date: "9 Mar 2026",  event: "63rd Quaid-e-Azam Gold Cup",       region: "Pakistan · Lahore", winner: "FG Polo",            score: "10–8",  runnerUp: "Master Paints / Diamond Paints",
      sources: [{ name: "The Nation", url: "https://www.nation.com.pk/09-Mar-2026/fg-polo-clinch-63rd-allied-bank-national-open-polo-trophy" }] },
    { date: "1 Mar 2026",  event: "C.V. Whitney Cup",                 region: "USA · Wellington", winner: "The Dutta Corp",      score: "14–9",  runnerUp: "La Dolfina Scone",
      sources: [{ name: "Pololine", url: "https://www.pololine.com/news/cv-whitney-cup-the-dutta-corp-claimed-the-first-leg-of-the-gauntlet-of-polo/" }] },
    { date: "15 Feb 2026", event: "New Zealand Open",                 region: "New Zealand · Clevedon", winner: "Standing Rock", score: "16–13", runnerUp: "The Brinks",
      sources: [{ name: "Polo Times", url: "http://www.polotimes.co.uk/index.php?pg=35&story=3623" }] },
    { date: "14 Feb 2026", event: "Dubai Open Gold Cup",              region: "UAE · Al Habtoor", winner: "Dubai Wolves by Thera", score: "11–8", runnerUp: "UAE Polo",
      sources: [{ name: "Gulf Today", url: "https://www.gulftoday.ae/sport/2026/02/16/dubai-wolves-by-thera-overcome-uae-polo-to-clinch-dubai-gold-cup" }] },
    { date: "15 Feb 2026", event: "U.S. Open Women's Championship",   region: "USA · Wellington", winner: "Victory Eastern Hay", score: "7–5",   runnerUp: "La Dolfina",
      sources: [{ name: "U.S. Polo Assn.", url: "https://www.uspa.com/press-releases/supported-by-u-s-polo-assn-the-2026-u-s-open-womens-polo-championship-r" }] },
    { date: "25 Jan 2026", event: "41st Snow Polo World Cup",         region: "Switzerland · St. Moritz", winner: "Standing Rock", score: "6–4.5", runnerUp: "Flexjet",
      sources: [{ name: "Pololine", url: "https://www.pololine.com/news/standing-rock-the-winners-of-the-41st-snow-polo-world-cup-st-moritz/" }] },
    { date: "24 Jan 2026", event: "B.Grimm Thai Polo Open (20th)",    region: "Thailand · Pattaya", winner: "Thai Polo",         score: "—",     runnerUp: "—",
      sources: [{ name: "Thai Polo Open coverage", url: "https://www.newssummedup.com/summary/Thai-Polo-marks-20th-anniversary-with-Princesss-Cup-B-Grimm-Thai-Polo-Open-victory-rhhd2a" }] },
    { date: "18 Jan 2026", event: "Bendura Bank Snow Polo World Cup", region: "Austria · Kitzbühel", winner: "Allianz",          score: "8–6.5", runnerUp: "Team Pommery",
      sources: [{ name: "Prensa Polo", url: "https://prensapolo.com/en/2026/01/19/kitzbuhel-con-el-bendura-bank-snow-polo-world-cup/" }] },
    { date: "17 Jan 2026", event: "AlUla Desert Polo (5th)",          region: "Saudi Arabia · AlUla", winner: "Team Defender",   score: "9–8",   runnerUp: "Team AlUla",
      sources: [{ name: "POLO+10", url: "https://poloplus10.com/alula-desert-polo-2026/" }] },
    { date: "10 Jan 2026", event: "Italia Polo Challenge",            region: "Italy · Courmayeur", winner: "Team Fieracavalli", score: "7–5",   runnerUp: "Grand Hotel Royal & Golf",
      sources: [{ name: "Fieracavalli", url: "https://www.fieracavalli.it/en/sports-and-competitions/polo-challenge-2026-courmayeur/" }] }
  ],

  /* ---------------- FORWARD CALENDAR ---------------- */
  calendar: [
    { when: "Now – 11 Oct",      title: "Trustees' Cup, Accra",               detail: "Running this week in Ghana, followed by a Run For A Cure pink polo day on 10 October.",          where: "Accra Polo Club, Ghana" },
    { when: "Now – 7 Nov",       title: "86th Tortugas Open",                 detail: "Second leg of the Triple Crown, ten teams for the first time. Final Saturday 7 November.", where: "Tortugas CC, Argentina" },
    { when: "9 & 11 Oct",        title: "East Coast Open Women's Championship", detail: "Semi-finals 9 October, final 11 October. Round-robin already under way.",                 where: "New Bridge, Aiken SC" },
    { when: "10 Oct",            title: "Dubai season opening",               detail: "Al Habtoor Polo Resort opens 2026-27, with the Ladies Charity Cup following on 24 October.",     where: "Al Habtoor, UAE" },
    { when: "13–18 Oct",         title: "USPA Women's Arena Open",            detail: "$15,000 purse and the final edition at this venue before it moves to Texas in 2027.",       where: "OC Polo Club, California" },
    { when: "17 Oct",            title: "SPC Outreach Polo Tournament",       detail: "Singapore Polo Club's community tournament and carnival.",                                      where: "Singapore" },
    { when: "Oct – Nov",         title: "Indian season in full swing",        detail: "Jaipur's autumn block runs to 25 October; the Delhi season runs 12 October – 22 November.",  where: "Jaipur & Delhi, India" },
    { when: "27 Oct – 1 Nov",    title: "Pink Polo Trophy",                   detail: "Accra's international signature event, funding breast-cancer screening and education.",         where: "Accra, Ghana" },
    { when: "10 Nov – 12 Dec",   title: "133rd Argentine Open",               detail: "Palermo. Opening dates provisional pending the papal visit; final 12 December.",            where: "Campo Argentino de Polo" },
    { when: "11 Nov",            title: "La Dolfina annual breeding auction", detail: "Remate Anual de Cría. Advertised date, not independently confirmed.",                       where: "La Dolfina Polo Club" },
    { when: "24–28 Nov",         title: "UAE National Day Cup",               detail: "8–10 goal. Part of the Gulf's published season calendar.",                                      where: "Al Habtoor, UAE" },
    { when: "26 Nov – 11 Dec",   title: "X Argentine Women's Open",           detail: "La Dolfina field a 38-goal side led by Mía Cambiaso and Hope Arellano.",                    where: "Argentina" },
    { when: "27 Dec",            title: "Wellington season opens",            detail: "National Polo Center's 2026-27 season runs through to 2 May 2027.",                        where: "Wellington, Florida" },
    { when: "22–24 Jan 2027",    title: "42nd Snow Polo World Cup",           detail: "Confirmed dates on the frozen lake.",                                                      where: "St. Moritz, Switzerland" },
    { when: "23 Jan – 6 Feb 2027", title: "Dubai Silver Cup",                 detail: "20 goal. The Gold Cup follows 3–20 March 2027.",                                              where: "Al Habtoor, UAE" },
    { when: "27 Jan – 18 Apr 2027", title: "The 2027 Gauntlet of Polo",       detail: "C.V. Whitney Cup, USPA Gold Cup and U.S. Open in sequence.",                               where: "Wellington, Florida" },
    { when: "Early 2027",        title: "XIII FIP World Polo Championship",   detail: "Postponed from the UAE. Host pending confirmation; Uruguay reported as likely.",            where: "Venue TBC" },
    { when: "24 Apr – 2 May 2027", title: "II FIP Women's World Championship", detail: "First time the United States has hosted it.",                                             where: "National Polo Center, FL" }
  ],

  /* ---------------- WHERE TO WATCH ---------------- */
  watch: [
    { region: "Argentina", name: "AAP Live",            detail: "The Argentine Association of Polo's own streaming platform, branded around the Palermo Open — 'the best polo in the world'. The primary route to the Argentine Open.", url: "https://live.aapolo.com/en/", linkLabel: "live.aapolo.com" },
    { region: "Global",    name: "PoloCam TV",          detail: "Footage and streaming services covering tournaments across Europe and beyond, including the Queen's Cup, Coronation Cup and Diamond Ladies Open. Schedule pages were not publicly retrievable at the time of writing.", url: "https://polocam.tv/", linkLabel: "polocam.tv" },
    { region: "Global",    name: "PoloLine TV",         detail: "Carried the Gstaad Hublot Gold Cup and St. Moritz Snow Polo World Cup finals live in 2026, alongside Pololine's written coverage.", url: "https://www.pololine.tv/", linkLabel: "pololine.tv" },
    { region: "USA",       name: "ESPN / ESPN2",        detail: "Live finals of the USPA Gold Cup and U.S. Open, hosted by Chris Fowler with Kenny Rice and Adam Snow. Built on the 2022 USPA Global agreement.", url: "https://www.espn.com/", linkLabel: "espn.com" },
    { region: "USA",       name: "USPA Polo Network",   detail: "The USPA's own streaming service, carrying national tournaments including the women's championships and arena finals.", url: "https://watch.uspolo.org/", linkLabel: "watch.uspolo.org" },
    { region: "USA",       name: "Global Polo",         detail: "USPA Global's entertainment arm. Home of 'Breakaway', the behind-the-scenes series carried on ESPN platforms and YouTube.", url: "https://globalpolo.com/", linkLabel: "globalpolo.com" },
    { region: "UK",        name: "HPA TV",              detail: "The Hurlingham Polo Association's platform, self-described as the home of British polo.", url: "https://tv.hpa-polo.co.uk/", linkLabel: "tv.hpa-polo.co.uk" },
    { region: "Australia",  name: "Ellerston TV",       detail: "Streams high-goal polo from the Packer family's Hunter Valley estate, the centre of the Australian game.", url: "https://tv.ellerston.com/", linkLabel: "tv.ellerston.com" },
    { region: "Global",    name: "Prensa Polo YouTube", detail: "Official media partner streaming for events including the Kitzbühel Snow Polo World Cup, plus trilingual written coverage.", url: "https://www.youtube.com/@PrensaPolo", linkLabel: "youtube.com/@PrensaPolo" }
  ],

  /* ---------------- SOURCE DESK ---------------- */
  sources: [
    { initials: "PL", name: "Pololine",             kind: "Trade press · Global",
      what: "The sport's paper of record in English and Spanish. Match reports, handicap bulletins, tournament archives and a TV arm.",
      links: [ { label: "Site", url: "https://www.pololine.com/" }, { label: "News", url: "https://www.pololine.com/news/" }, { label: "Tournaments", url: "https://www.pololine.com/tournaments/" }, { label: "TV", url: "https://www.pololine.tv/" } ] },
    { initials: "US", name: "USPA",                 kind: "Federation · United States",
      what: "The United States Polo Association. Rules, handicaps, the national tournament calendar and the Gauntlet of Polo.",
      links: [ { label: "uspolo.org", url: "https://www.uspolo.org/" }, { label: "Press", url: "https://www.uspa.com/press-releases" }, { label: "Watch", url: "https://watch.uspolo.org/" } ] },
    { initials: "PC", name: "PoloCam TV",           kind: "Broadcaster · Global",
      what: "Match footage and streaming services, with coverage spanning the European and international calendar.",
      links: [ { label: "Site", url: "https://polocam.tv/" } ] },
    { initials: "LD", name: "La Dolfina",           kind: "Club & stud · Argentina",
      what: "Cambiaso's club, team and breeding operation. Twenty-five years of Polo Argentino breeding, a 1,500-horse string, and an annual November auction.",
      links: [ { label: "Site", url: "https://ladolfina.com/" }, { label: "Breeding", url: "https://ladolfina.com/en/pages/cria" }, { label: "News", url: "https://ladolfina.com/blogs/news" } ] },
    { initials: "LM", name: "Los Machitos",         kind: "Stud & sales · Argentina",
      what: "Polo Argentino breeder running a permanent year-round online horse sales platform. Machitos-bred ponies took pony awards at the Queen's Cup and East Coast Silver Cup in 2026.",
      links: [ { label: "Site", url: "https://losmachitos.com/en/home" } ] },
    { initials: "AA", name: "AAP",                  kind: "Federation · Argentina",
      what: "Asociación Argentina de Polo. The Triple Crown calendar, official handicaps, match bulletins and the AAP Live stream.",
      links: [ { label: "Site", url: "https://www.aapolo.com/" }, { label: "Noticias", url: "https://www.aapolo.com/noticias" }, { label: "Live", url: "https://live.aapolo.com/en/" } ] },
    { initials: "PP", name: "Prensa Polo",          kind: "Trade press · Global",
      what: "Trilingual Argentine-based coverage in English, Spanish and French, with strong European and snow-polo reporting plus a YouTube streaming channel.",
      links: [ { label: "Site", url: "https://prensapolo.com/en/" }, { label: "YouTube", url: "https://www.youtube.com/@PrensaPolo" } ] },
    { initials: "HP", name: "HPA",                  kind: "Federation · United Kingdom",
      what: "The Hurlingham Polo Association. English handicaps, safety rules, the Coronation Cup record and HPA TV.",
      links: [ { label: "hpa-polo", url: "https://www.hpa-polo.co.uk/" }, { label: "News arm", url: "https://hurlinghampolo.com/" }, { label: "TV", url: "https://tv.hpa-polo.co.uk/" } ] },
    { initials: "PT", name: "Polo Times",           kind: "Magazine · United Kingdom",
      what: "British polo's monthly magazine of record, covering the UK high-goal season, Sotogrande and the international circuit.",
      links: [ { label: "Site", url: "https://www.polotimes.co.uk/" } ] },
    { initials: "P+", name: "POLO+10",              kind: "Magazine · Europe",
      what: "German-published pan-European polo magazine. Strong on the DACH circuit, snow polo and player profiles.",
      links: [ { label: "Site", url: "https://poloplus10.com/" } ] },
    { initials: "FI", name: "FIP",                  kind: "Governing body · Global",
      what: "The Federation of International Polo. World Championship cycles, the new European Arena Championship, and the Polo Development Fund.",
      links: [ { label: "Site", url: "https://www.fippolo.com/" } ] },
    { initials: "GP", name: "Guards Polo Club",     kind: "Club · England",
      what: "Windsor Great Park. Host of the Cartier Queen's Cup and International Day's Coronation Cup.",
      links: [ { label: "Site", url: "https://www.guardspoloclub.com/" } ] },
    { initials: "CP", name: "Cowdray Park",         kind: "Club · England",
      what: "Midhurst, West Sussex. Home of the British Open Polo Championship for the Gold Cup.",
      links: [ { label: "Site", url: "https://cowdraypolo.co.uk/" } ] },
    { initials: "SM", name: "Santa María Polo Club", kind: "Club · Spain",
      what: "Sotogrande. The summer International Tournament and its Bronze, Silver and Gold Cups.",
      links: [ { label: "Site", url: "https://www.santamariapoloclub.com/" }, { label: "2026 results log", url: "https://www.andalucia.com/sotogrande/polo/tournaments/2026" } ] },
    { initials: "SP", name: "Snow Polo St. Moritz", kind: "Event · Switzerland",
      what: "The World Cup on the frozen lake, running since 1985. The 42nd edition is confirmed for January 2027.",
      links: [ { label: "Site", url: "https://www.snowpolo-stmoritz.com/" } ] },
    { initials: "GW", name: "Greenwich Polo Club",  kind: "Club · United States",
      what: "Connecticut. Host of the East Coast Open since 2005 and the East Coast Silver Cup.",
      links: [ { label: "Site", url: "https://greenwichpoloclub.com/" } ] },
    { initials: "NP", name: "National Polo Center", kind: "Club · United States",
      what: "Wellington, Florida. USPA-owned since 2022, home of the Gauntlet of Polo and the 2027 FIP Women's World Championship.",
      links: [ { label: "Site", url: "https://nationalpolocenter.com/" } ] },
    { initials: "SB", name: "Santa Barbara P&RC",   kind: "Club · United States",
      what: "California. The Pacific Coast Open and the National Youth Tournament Series Championship.",
      links: [ { label: "Site", url: "https://www.sbpolo.com/" } ] },
    { initials: "IP", name: "Indian Polo Association", kind: "Federation · India",
      what: "India's governing body. The Delhi and Jaipur seasons run October to March, through the Northern Hemisphere winter.",
      links: [ { label: "Site", url: "https://indianpolo.org/" } ] },
    { initials: "AU", name: "Australian Polo Federation", kind: "Federation · Australia",
      what: "The governing body for Australian polo — 'played in the bush, on the beach and in the city'. Note the frequently-cited poloaustralia.com.au is a stale domain that now redirects elsewhere.",
      links: [ { label: "Site", url: "https://www.australianpolo.com.au/" } ] },
    { initials: "DG", name: "Dubai Polo Gold Cup",   kind: "Event series · UAE",
      what: "Al Habtoor Polo Resort & Club's season — Silver Cup, Gold Cup, Challenge Cup and Polo Masters. The published calendar is the Gulf's most reliable fixture source.",
      links: [ { label: "Site", url: "https://www.dubaipologoldcup.com/" } ] },
    { initials: "UP", name: "UAE Polo Federation",   kind: "Federation · UAE",
      what: "The Emirates' governing body, chaired by Mohammed Al Habtoor. Handicap lists and the national tournament calendar.",
      links: [ { label: "Site", url: "https://uaepolofederation.com/" }, { label: "Tournaments", url: "https://uaepolofederation.com/tournaments/" } ] },
    { initials: "LP", name: "Lahore Polo Club",      kind: "Club · Pakistan",
      what: "Home of the Quaid-e-Azam Gold Cup and the Punjab Polo Cup — the latter billed as Pakistan's oldest continuously held sporting event at 141 years.",
      links: [ { label: "Site", url: "https://lahorepoloclub.com/" } ] },
    { initials: "NP", name: "Nigeria Polo Association", kind: "Federation · Nigeria",
      what: "Runs the Lagos International tournament at Ikoyi — roughly 30 teams, 120 players and 480 horses across three weeks.",
      links: [ { label: "Site", url: "https://npa-polo.ng/" } ] },
    { initials: "AP", name: "Accra Polo Club",       kind: "Club · Ghana",
      what: "West Africa's most active published calendar, including the Pink Polo Trophy raising funds for breast-cancer screening.",
      links: [ { label: "Site", url: "https://accrapoloclub.com/" }, { label: "Tournaments", url: "https://accrapoloclub.com/tournaments/" } ] },
    { initials: "KP", name: "Kenya Polo",            kind: "Federation · Kenya",
      what: "Nairobi Polo Club, founded 1907, is East Africa's oldest — two full pitches and stabling for 90 horses, playing under HPA rules.",
      links: [ { label: "Site", url: "https://www.polokenya.com/" } ] },
    { initials: "SA", name: "SAPA",                  kind: "Federation · South Africa",
      what: "The South African Polo Association. Inanda Club in Sandton hosts the Nedbank International against touring nations.",
      links: [ { label: "Site", url: "https://sapolo.co.za/" }, { label: "Inanda Club", url: "https://inandaclub.co.za/facilities/polo/" } ] },
    { initials: "RM", name: "Royal Malaysian Polo Assn.", kind: "Federation · Malaysia",
      what: "The Cahaya Cup and a full domestic calendar under royal patronage, including a dedicated RMPA Ladies Tournament.",
      links: [ { label: "Site", url: "https://rmpa.org.my/" } ] }
  ]
};
