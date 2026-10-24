/* ============================================================
   GLOBAL POLO DASHBOARD — Data layer
   Every entry carries its primary source. Items that could not
   be independently verified are labelled "unconfirmed" in copy.
   ============================================================ */

window.POLO_DATA = {

  meta: {
    updated: "24 October 2026",
    edition: "No. 7",
    stats: [
      { n: "13",  l: "Tortugas matches played in 19 days" },
      { n: "36",  l: "Finals in the 2026 ledger" },
      { n: "40",  l: "Goals — highest-rated team on earth" },
      { n: "Feb 2027", l: "FIP World Cup — Uruguay, confirmed" },
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
        statusLabel: "Live — back at Tortugas CC",
        champion: null,
        scoreline: [
          { team: "La Hache",   goals: "30", win: true },
          { team: "La Aguada",  goals: "11" }
        ],
        note:
          "Ten teams for the first time, after the AAP gave both Qualification Tournament winners a Tortugas berth. After more than a week lost to rain, play resumed on 15 October at the AAP's own Alfredo Lalor headquarters in Pilar, before returning to Tortugas Country Club itself on 21 October. Results since the restart: Híper 21-10 La Aguada and La Irenita 14-12 Las Monjitas (15 Oct); Ellerstina Indios Chapaleufú 16-15 La Ensenada, a wild match Ellerstina trailed 7-12 at half-time, and La Natividad La Dolfina 15-14 La Zeta Kazak in their tournament debut (16 Oct); Las Monjitas 16-15 Híper and La Hache 19-12 La Irenita closed Zone B's second round (18 Oct); La Natividad La Dolfina routed Don Ercole 27-7 and La Zeta Kazak beat La Ensenada 14-11 for its first win of the tournament (19 Oct). Back at Tortugas CC on 21 October, La Hache beat La Aguada 30-11 in a 41-goal shootout — one of the highest-scoring matches in the tournament's history, Benjamin Panelo scoring 12 — and La Irenita beat Híper 21-14 behind five goals from Vizcacha MacDonough, for its second win of the tournament. On 24 October, Ellerstina Indios Chapaleufú beat Don Ercole 16-11 — Facundo Pieres scoring 11, seven of them from penalty — to go 3-0 and unbeaten in Zone A, leaving it positioned for the tournament's first semi-final. Zone B's run-in follows on 25 October (Las Monjitas vs. La Aguada, La Hache vs. Híper), with Zone A's La Natividad La Dolfina vs. La Ensenada still to be played. Semi-finals are provisionally expected around 1 November, with the final still scheduled for 7 November, though the rain backlog still makes that date tight.",
        source: { name: "Pololine — La Hache and La Irenita victorious", url: "https://www.pololine.com/news/86th-tortugas-open-la-hache-and-la-irenita-claimed-impressive-wins/" }
      },
      {
        name: "133rd Argentine Open — Palermo",
        dates: "10 Nov – 12 Dec 2026 · Campo Argentino de Polo",
        state: "next",
        statusLabel: "Upcoming",
        champion: null,
        scoreline: null,
        note:
          "The Cathedral. The scheduling worry has eased: the Vatican's official itinerary for Pope Leo XIV's 8–11 November Argentina visit, published in September, places his Palermo mass at the Monumento de los Españoles at 11:30 on Monday 9 November — the day before Palermo's scheduled 10 November opening, not on top of it. The AAP has issued no revised calendar and none was needed; every official fixture still shows the original 10 November start and 12 December final. Tennium, which runs the Argentina Open tennis event, joins as the AAP's commercial partner.",
        source: { name: "Infobae — papal itinerary confirmed", url: "https://www.infobae.com/sociedad/2026/09/21/se-confirmo-la-agenda-del-papa-en-argentina-el-lunes-9-a-las-1130-sera-la-misa-multitudinaria-en-palermo/" }
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
      date: "15–24 Oct 2026", accent: "var(--clay)",
      title: "Ellerstina goes unbeaten through Zone A as Tortugas edges toward its semi-finals",
      body:
        "After more than a week lost to rain, the 86th Tortugas Open resumed on 15 October — relocated from Tortugas Country Club to the AAP's Alfredo Lalor headquarters in Pilar, where the pitches had held up. Results there: Híper 21-10 La Aguada (Torito Ruiz Jorba scored 10) and La Irenita 14-12 Las Monjitas on the 15th; Ellerstina Indios Chapaleufú's extraordinary 16-15 comeback over La Ensenada, having trailed 7-12 at the break, plus La Natividad La Dolfina's tight 15-14 debut win over La Zeta Kazak on the 16th; Las Monjitas' 16-15 edge over Híper and La Hache's 19-12 debut win over La Irenita on the 18th; and La Natividad La Dolfina's 27-7 rout of Don Ercole plus La Zeta Kazak's first win, 14-11 over La Ensenada, on the 19th. Play then returned to Tortugas Country Club itself on 21 October: La Hache beat La Aguada 30-11 — one of the highest-scoring matches in the tournament's history, 41 goals between them, with Benjamin Panelo scoring 12 before his brother Joaquín subbed in for a flu-hit Tomás in the last chukka — and La Irenita beat Híper 21-14 behind five goals from Vizcacha MacDonough, for its second win of the tournament. On 24 October, Ellerstina Indios Chapaleufú beat Don Ercole 16-11 — Facundo Pieres top-scoring with 11, seven from the penalty spot — to go unbeaten through three rounds of Zone A and put itself in position for the tournament's first semi-final. La Natividad La Dolfina's Zone A fixture against La Ensenada, also scheduled for the 24th, remained unplayed as of this update. Zone B's run-in follows on 25 October; semi-finals are provisionally expected around 1 November, with the final still scheduled for 7 November.",
      sources: [
        { name: "Pololine — La Hache and La Irenita victorious", url: "https://www.pololine.com/news/86th-tortugas-open-la-hache-and-la-irenita-claimed-impressive-wins/" },
        { name: "Pololine — La Natividad La Dolfina and La Zeta Kazak victorious", url: "https://www.pololine.com/es/noticias/86o-abierto-de-tortugas-la-natividad-la-dolfina-sigue-a-paso-firme-y-la-zeta-kazak-se-quedo-con-su-primera-victoria/" },
        { name: "Prensa Polo — 27-7", url: "https://prensapolo.com/en/2026/10/19/la-natividad-la-dolfina-don-ercole/" },
        { name: "Polohub — La Hache 19-12", url: "https://polohub.net/es/noticias/la-hache-debuta-en-el-abierto-de-tortugas-con-una-victoria-por-19-12" },
        { name: "Polohub — Las Monjitas 16-15", url: "https://polohub.net/es/noticias/las-monjitas-supera-a-hiper-polo-16-15-en-un-partido-que-se-definio" },
        { name: "Polohub — Ellerstina 16-11 Don Ercole", url: "https://polohub.net/es/noticias/ellerstina-indios-chapaleufu-vista-vence-a-don-ercole-larrainvial-y" }
      ]
    },
    {
      region: "arg", regionLabel: "Argentina", kind: "Result", kindClass: "result",
      date: "6 Oct 2026",
      title: "Tortugas opening day: Ellerstina and La Ensenada take Zone A honours",
      body:
        "Facundo Pieres top-scored with 10 in Ellerstina Indios Chapaleufú's 18-10 win over La Zeta Kazak — a match that put brothers Facundo and Gonzalo against their brother Nicolás, playing for Kazak. In the other Zone A opener, La Ensenada beat Don Ercole 17-13, Jerónimo del Carril and Diego Cavanagh the standouts. La Natividad La Dolfina had the bye. The opening-day results — now well superseded by six further matches across both zones — are recorded here for the archive.",
      score: [
        { team: "Ellerstina Indios Chapaleufú", goals: "18", win: true },
        { team: "La Zeta Kazak",                goals: "10" }
      ],
      sources: [
        { name: "Prensa Polo — fixtures", url: "https://prensapolo.com/abierto-tortugas/" },
        { name: "Olé", url: "https://www.ole.com.ar/polo/suspension-lluvia-ver-abierto-tortugas_0_0kOBYlWeZG.html" }
      ]
    },
    {
      region: "arg", regionLabel: "Argentina", kind: "Scheduling", kindClass: "",
      date: "Nov 2026",
      title: "The papal visit won't clash with Palermo's opening after all",
      body:
        "Pope Leo XIV's four-day Argentina visit (8–11 November) had raised the possibility of a date clash with Palermo. The Vatican's official itinerary, published in September, places his Monumento de los Españoles mass — effectively next door to the Campo Argentino de Polo — at 11:30 on Monday 9 November, the day before Palermo's scheduled 10 November opening. The AAP has not published, and does not appear to need, a revised calendar; every official fixture still shows the original 10 November start and 12 December final.",
      sources: [{ name: "Infobae — papal itinerary confirmed", url: "https://www.infobae.com/sociedad/2026/09/21/se-confirmo-la-agenda-del-papa-en-argentina-el-lunes-9-a-las-1130-sera-la-misa-multitudinaria-en-palermo/" }]
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
      region: "usa", regionLabel: "United States", kind: "Result", kindClass: "result",
      date: "11 Oct 2026",
      title: "Amasé edge the East Coast Open Women's at New Bridge",
      body:
        "An 11-10 win over Sirius in Aiken to close the 14–18 goal championship, with Hazel Jackson anchoring the Amasé lineup alongside Izzy Brocket, Olivia Uechtritz and Aspen Tinto. No MVP or Best Playing Pony award could be found in any published source. The exact final date is given variously as 11 or 12 October; the pre-announced schedule said the 11th.",
      score: [
        { team: "Amasé", goals: "11", win: true },
        { team: "Sirius", goals: "10" }
      ],
      sources: [{ name: "USPA tournament page", url: "https://www.uspolo.org/calendar/tournaments/east-coast-open-womens-polo-championship" }]
    },
    {
      region: "usa", regionLabel: "United States", kind: "Result", kindClass: "result",
      date: "4 Oct 2026",
      title: "Icon Global take the Association Cup in overtime",
      body:
        "A 9-8 win over Red Mare at New Bridge, unbeaten through the tournament. Tommy Collingwood, Charlie Caldwell, Olivia Uechtritz and Steve Tipler played for the winners; Team USPA's Hope Arellano was in the Red Mare lineup. Well corroborated, though the USPA's own page could not be read directly.",
      score: [
        { team: "Icon Global / Tipler Law", goals: "9", win: true },
        { team: "Red Mare",                 goals: "8" }
      ],
      sources: [{ name: "USPA tournament page", url: "https://www.uspolo.org/calendar/tournaments/association-cup" }]
    },
    {
      region: "usa", regionLabel: "United States", kind: "Result", kindClass: "result",
      date: "18 Oct 2026",
      title: "Ursulus edge Buchalter in a high-scoring send-off for OC Polo Club",
      body:
        "A $15,000 purse and the final edition at the California venue before the tournament moves to Brookshire Arena, Texas in 2027. Ursulus Polo, led by 10-goaler Marissa Wells, beat Buchalter 31-29 in Sunday's final — a very high-scoring arena finish even by the format's standards. Reported via the USPA's own scoreboard, which could not be independently read directly; no secondary outlet carrying box-score detail could be found.",
      score: [
        { team: "Ursulus Polo", goals: "31", win: true },
        { team: "Buchalter",    goals: "29" }
      ],
      sources: [
        { name: "Polohub", url: "https://polohub.net/uspa-womens-arena-open-2026-a-landmark-moment-for-womens-arena-polo/" },
        { name: "USPA scoreboard", url: "https://www.uspolo.org/tournaments/scoreboard" }
      ]
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
      region: "europe", regionLabel: "FIP", kind: "Confirmed", kindClass: "hot",
      date: "4–14 Feb 2027",
      title: "The FIP World Championship has a home at last: Uruguay",
      body:
        "After the UAE withdrew in May from hosting the XIII World Polo Championship, FIP has confirmed the event for Uruguay in 2027 — Punta del Este and José Ignacio, 4–14 February, in the 10–14 goal bracket. Switzerland became the latest qualifier, winning the Zone C playoff at Chantilly unbeaten ahead of France, with England third and out. They join Spain (defending champions), Uruguay (hosts) and the USA, who beat Mexico 6-4 in Wellington. Argentina's South American Zone B series against Peru, played as two four-chukka test matches at Lima Polo Club on 15 and 17 October, went right to the wire: Argentina won the first leg 7-6, then lost the second 6½-6 (Peru took a half-goal handicap credit), leaving Argentina Polo Team ahead by half a goal on aggregate. The AAP says it is now awaiting FIP's ruling on whether that margin is enough for direct qualification, or whether Argentina must instead play off against the winner of the parallel Chile-Brazil series.",
      sources: [
        { name: "FIP (official)", url: "https://www.fippolo.com/post/switzerland-qualifies-for-the-xiii-fip-world-polo-championship" },
        { name: "Asociación Uruguaya de Polo calendar", url: "https://polohub.net/es/noticias/la-asociacion-uruguaya-de-polo-publica-el-calendario-completo-de-su-te" },
        { name: "AAP — Lima result", url: "https://www.aapolo.com/index.php/noticias/detalle/9291" }
      ]
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
        "Polo AlMarsa, staged at Old Doha Port, is Qatar's first waterfront polo event; Team Lusail won the inaugural Championship Cup with players from Qatar, Argentina and Chile, and the event took four golds at the Qatar Event Show Awards. The 2026 edition is now confirmed for 10–12 December at Old Doha Port, and will introduce Qatar's first women's polo team — the roster has not yet been named.",
      sources: [
        { name: "Polo AlMarsa", url: "https://poloalmarsa.com/" },
        { name: "Qatar Tribune — women's team confirmed", url: "https://www.qatar-tribune.com/article/252004/nation/four-golds-among-seven-event-show-prizes-for-polo-almarsa" },
        { name: "ILoveQatar.net — 2026 dates", url: "https://www.iloveqatar.net/events/sports/polo-almarsa-qatar-2026" }
      ]
    },

    /* ---- ASIA ---- */
    {
      region: "asia", regionLabel: "India", kind: "Heritage", kindClass: "",
      date: "2026 season",
      title: "The Army still carries Indian polo",
      body:
        "The Indian Polo Association, founded 1892, shares its registered office with 'B' Squadron, 61 Cavalry at Delhi Cantt — a neat illustration of how far the Army underwrites the grounds, horses and player pipeline. The Calcutta Polo Club, the world's oldest, still runs the Ezra Cup.",
      sources: [{ name: "Indian Polo Association", url: "https://www.ipa.co.in/" }]
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
      region: "africa", regionLabel: "Ghana", kind: "Result", kindClass: "result",
      date: "10 Oct 2026",
      title: "Dad's Army take the Accra Trustees' Cup by half a goal",
      body:
        "A 6-5½ win over DSGHOB in the final, Dantani Sahnoon named MVP and presented with his trophy by Accra Polo Club trustees chairman Alhaji Yusif Ibrahim. Brothers Edward and Gerald Osei Boakye Jnr, with South African Rattray, led a late DSGHOB charge that fell just short. The Pink Polo Trophy, which funds breast-cancer screening and education in Ghana, follows from 27 October.",
      score: [
        { team: "Dad's Army / African Polistas", goals: "6",  win: true },
        { team: "DSGHOB",                        goals: "5½" }
      ],
      sources: [{ name: "MyJoyOnline", url: "https://www.myjoyonline.com/dads-army-african-polistas-crowned-champions-of-2026-accra-polo-club-trustees-cup/" }]
    },
    {
      region: "asia", regionLabel: "India", kind: "Result", kindClass: "result",
      date: "Oct – Nov 2026",
      title: "Jaipur sweeps the autumn block — Sawai Man Guard, Kanota and now the Birla Cup",
      body:
        "Team Jaipur took the Sawai Man Guard Cup 9-7 over Team Sternhagen, Padmanabh Singh and Martin Carlos Donovan leading the way — reported by the Indian press but not independently confirmable. Jaipur followed up by winning the Gen Amar Singh Kanota Cup 7-4 over Mayfair Polo Team at the Rajasthan Polo Club, Padmanabh Singh scoring four, with Angad Kalaan and South African Lance Watson adding the rest. A third title followed on 24 October: Team Jaipur beat Team Mayfair Polo 8-6 under floodlights at the Rajasthan Polo Club to take the B.M. Birla Cup, Padmanabh Singh again the top scorer with five; Devvrath Singh Jhalamand, on the losing side, was named the tournament's most valuable player. The Jaipur season closes 25 October, while Delhi's season — opened 12 October — runs to 22 November.",
      score: [
        { team: "Team Jaipur", goals: "8", win: true },
        { team: "Team Mayfair Polo", goals: "6" }
      ],
      sources: [
        { name: "Times of India", url: "https://timesofindia.indiatimes.com/city/jaipur/annual-sept-jaipur-polo-season-2026-padmanabh-singh-martin-carlos-donovan-help-team-jaipur-beat-team-sternhagen-9-7-in-sawai-man-guard-cup-final/articleshow/134859504.cms" },
        { name: "News18 — Kanota Cup", url: "https://www.news18.com/sports/hh-maharaja-padmanabh-singh-stars-as-jaipur-polo-clinch-kanota-cup-title-ws-l-9605741.html" },
        { name: "Times of India — B.M. Birla Cup", url: "https://timesofindia.indiatimes.com/city/jaipur/padmanabh-singh-excels-as-team-jaipur-lift-bm-birla-cup-beating-team-mayfair-polo-8-6-in-final/articleshow/135176535.cms" },
        { name: "Indian Polo Association", url: "https://www.ipa.co.in/" }
      ]
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
      region: "africa", regionLabel: "South Africa", kind: "Fixture", kindClass: "",
      date: "14 Nov 2026",
      title: "England to defend a defeat against South Africa at the Standard Bank Test Match",
      body:
        "South Africa won last year's Standard Bank Polo Test Match 8-6 at Val de Vie Estate in Paarl and will defend the title on home ground on 14 November, led by Jannie Steenkamp alongside Dirk van Reenen, Jack Spilsbury and James Gilson. England's side is captained by Matt Perry, with Marcus Cork, Ollie Cork and Harry Muddle.",
      sources: [{ name: "Val de Vie Estate", url: "https://www.valdevie.co.za/event/standard-bank-polo-test-match/" }]
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
    {
      region: "africa", regionLabel: "Nigeria", kind: "Qualifier", kindClass: "hot",
      date: "9–16 Nov 2026",
      title: "El-Amin take a 16th Georgian Cup as Nigeria prepares to host FIP Zone E Play-Offs",
      body:
        "The Nigerian Polo Association confirmed it will host the Zone E Playoffs of the XIII FIP World Polo Championship at Guards Polo Club, Abuja, from 9 to 16 November — six matches over the week (decisive rounds 11, 13 and 15 November) between Nigeria, India, Iran and Pakistan for a single berth at the February 2027 World Championship in Punta del Este, Uruguay. It follows the USA's Zone A qualification in Wellington in May. Separately, 2026's Kaduna International Polo Tournament — featuring the Georgian Cup, the oldest and most prestigious trophy in West African polo, first awarded in 1919 — ran a ten-day format for the first time in its 106-year history at Murtala Mohammed Square, with foreign professionals from Argentina, Europe and South Africa in the field alongside clubs from Lagos, Kano, Abuja and Port Harcourt. El-Amin Polo Club, celebrating its own 30th anniversary, beat Kaduna Makarfi 12-4 in the 104th Georgian Cup final to take a record 16th title, with patron Mohammed Babangida fielding Argentine professional Facundo alongside him. Nigerian outlets reported the final as being played 'over the weekend'; the exact date could not be pinned down beyond that.",
      sources: [
        { name: "Punch — FIP Zone E Playoffs", url: "https://punchng.com/nigeria-to-host-zone-e-playoffs-of-the-xiii-fip-world-polo-championship-in-abuja/" },
        { name: "Sports247 — Abuja preparations", url: "https://www.sports247.ng/nigeria-targets-sports-tourism-boost-as-abuja-prepares-for-world-polo-championship-qualifiers/" },
        { name: "Gatmash — Georgian Cup 2026", url: "https://gatmash.com/2026/10/14/georgian-cup-2026-firstbank-backs-nine-days-of-elite-polo-in-kaduna/" },
        { name: "Daily Trust — El-Amin wins 16th Georgian Cup", url: "https://dailytrust.com/el-amin-wins-historic-16th-first-bank-georgian-cup/" },
        { name: "Blueprint — El-Amin makes history", url: "https://blueprint.ng/el-amin-polo-makes-history-wins-16th-georgian-cup/" }
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
    { date: "24 Oct 2026", event: "86th Tortugas Open (Zone A)",    region: "Argentina",    winner: "Ellerstina Indios Chapaleufú", score: "16–11", runnerUp: "Don Ercole",
      sources: [{ name: "PoloHUB", url: "https://polohub.net/es/noticias/ellerstina-indios-chapaleufu-vista-vence-a-don-ercole-larrainvial-y" }] },
    { date: "24 Oct 2026", event: "B.M. Birla Cup",                 region: "India · Jaipur", winner: "Team Jaipur", score: "8–6", runnerUp: "Team Mayfair Polo",
      sources: [{ name: "Times of India", url: "https://timesofindia.indiatimes.com/city/jaipur/padmanabh-singh-excels-as-team-jaipur-lift-bm-birla-cup-beating-team-mayfair-polo-8-6-in-final/articleshow/135176535.cms" }] },
    { date: "Oct 2026 (exact date unconfirmed)", event: "104th Georgian Cup", region: "Nigeria · Kaduna", winner: "El-Amin Polo Club", score: "12–4", runnerUp: "Kaduna Makarfi",
      sources: [{ name: "Daily Trust", url: "https://dailytrust.com/el-amin-wins-historic-16th-first-bank-georgian-cup/" }] },
    { date: "18 Oct 2026", event: "USPA Women's Arena Open",        region: "USA · California", winner: "Ursulus Polo", score: "31–29", runnerUp: "Buchalter",
      sources: [{ name: "USPA scoreboard", url: "https://www.uspolo.org/tournaments/scoreboard" }] },
    { date: "11 Oct 2026", event: "East Coast Open Women's C'ship", region: "USA · Aiken", winner: "Amasé", score: "11–10", runnerUp: "Sirius",
      sources: [{ name: "USPA", url: "https://www.uspolo.org/calendar/tournaments/east-coast-open-womens-polo-championship" }] },
    { date: "10 Oct 2026", event: "Accra Trustees' Cup",            region: "Ghana",        winner: "Dad's Army / African Polistas", score: "6–5½", runnerUp: "DSGHOB",
      sources: [{ name: "MyJoyOnline", url: "https://www.myjoyonline.com/dads-army-african-polistas-crowned-champions-of-2026-accra-polo-club-trustees-cup/" }] },
    { date: "4 Oct 2026",  event: "Association Cup",                region: "USA · Aiken",  winner: "Icon Global / Tipler Law", score: "9–8 OT", runnerUp: "Red Mare",
      sources: [{ name: "USPA", url: "https://www.uspolo.org/calendar/tournaments/association-cup" }] },
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
    { when: "25 Oct",            title: "Tortugas — Zone B run-in",       detail: "Las Monjitas vs. La Aguada and La Hache vs. Híper; La Natividad La Dolfina's Zone A fixture against La Ensenada remains to be played.", where: "Tortugas CC, Argentina" },
    { when: "24 Oct",            title: "Ladies Charity Cup",             detail: "Part of Al Habtoor's newly opened 2026-27 Gulf season.",                                            where: "Al Habtoor, UAE" },
    { when: "27 Oct – 1 Nov",    title: "Pink Polo Trophy",               detail: "Accra's international signature event, funding breast-cancer screening and education.",              where: "Accra, Ghana" },
    { when: "1 Nov (provisional)", title: "86th Tortugas Open semi-finals", detail: "Ellerstina Indios Chapaleufú goes in unbeaten from Zone A; Zone B's leader still to be settled.", where: "Tortugas CC, Argentina" },
    { when: "9–16 Nov",          title: "FIP Zone E World Cup Play-Offs", detail: "Nigeria, India, Iran and Pakistan contest a single berth at the 2027 Uruguay World Championship.",     where: "Guards Polo Club, Abuja, Nigeria" },
    { when: "7 Nov",             title: "86th Tortugas Open final",       detail: "Still officially scheduled, though a week-plus of rain earlier in the tournament makes the date tight. Zone play is back at Tortugas CC itself.", where: "Tortugas CC, Argentina" },
    { when: "10 Nov – 12 Dec",   title: "133rd Argentine Open",           detail: "Palermo. Opening dates confirmed unchanged — the Pope's 9 November Palermo mass falls the day before the 10 November opening; final 12 December.", where: "Campo Argentino de Polo" },
    { when: "11 Nov",            title: "La Dolfina annual breeding auction", detail: "Remate Anual de Cría. Advertised date, not independently confirmed.",                            where: "La Dolfina Polo Club" },
    { when: "14 Nov",            title: "Standard Bank Polo Test Match",  detail: "South Africa defends last year's 8-6 win over England.",                                               where: "Val de Vie Estate, Paarl, South Africa" },
    { when: "24–28 Nov",         title: "UAE National Day Cup",           detail: "8–10 goal. Part of the Gulf's published season calendar.",                                           where: "Al Habtoor, UAE" },
    { when: "26 Nov – 11 Dec",   title: "X Argentine Women's Open",       detail: "La Dolfina field a 38-goal side led by Mía Cambiaso and Hope Arellano.",                             where: "Argentina" },
    { when: "10–12 Dec",         title: "Polo AlMarsa Qatar",             detail: "Confirmed dates for the waterfront tournament's second edition, debuting Qatar's first women's polo team.", where: "Old Doha Port, Qatar" },
    { when: "27 Dec",            title: "Wellington season opens",        detail: "National Polo Center's 2026-27 season runs through to 2 May 2027.",                                 where: "Wellington, Florida" },
    { when: "22–24 Jan 2027",    title: "42nd Snow Polo World Cup",       detail: "Confirmed dates on the frozen lake.",                                                               where: "St. Moritz, Switzerland" },
    { when: "23 Jan – 6 Feb 2027", title: "Dubai Silver Cup",             detail: "20 goal. The Gold Cup follows 3–20 March 2027.",                                                    where: "Al Habtoor, UAE" },
    { when: "4–14 Feb 2027",     title: "XIII FIP World Championship",    detail: "Confirmed for Uruguay — Punta del Este and José Ignacio, 10–14 goal.",                              where: "Punta del Este, Uruguay" },
    { when: "27 Jan – 18 Apr 2027", title: "The 2027 Gauntlet of Polo",   detail: "C.V. Whitney Cup, USPA Gold Cup and U.S. Open in sequence.",                                        where: "Wellington, Florida" },
    { when: "24 Apr – 2 May 2027", title: "II FIP Women's World Championship", detail: "First time the United States has hosted it.",                                                  where: "National Polo Center, FL" }
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
  ],

  /* ---------------- DRILLS ---------------- */
  drills: {
    primer: [
      { label: "Session length",
        text: "No governing body publishes a standard. Coaching practice points to roughly 30–45 minutes of active work — about three drills of 10–15 minutes. Quality of form beats volume." },
      { label: "The pony comes first",
        text: "The HPA caps a pony at 7½ minutes of play without a 10-minute break, 15 minutes total, and no more than three chukkas in a day. No equivalent numeric rule was found in the USPA's accessible documents." },
      { label: "Practice is not a lesser activity",
        text: "\"Despite the prevailing attitude that practice games don't count, they do indeed count… the stress to the horse is just as severe as if he were in a high-goal competition.\" — Dr Paul Wollenman DVM, in the USPA's own welfare guidelines." },
      { label: "Check your jurisdiction",
        text: "USPA and HPA equipment rules genuinely differ — helmets, eye protection, knee pads and spurs all diverge. Neither is a global standard. Play to the rules of the body you are registered with." }
    ],

    categories: [
      { id: "sb",      label: "Stick & ball (solo)" },
      { id: "mounted", label: "Mounted & group" },
      { id: "ground",  label: "Off the horse" }
    ],

    shots: [
      { shot: "Offside forehand", side: "Right (offside)",
        ball: "Ahead of or beside the horse, struck forward in the direction of travel",
        key: "The foundational shot. Power comes from hip and shoulder rotation — the swing is a pendulum, not an arm muscle movement." },
      { shot: "Nearside forehand", side: "Left (nearside)",
        ball: "Beside the horse's left side, struck forward; the mallet reaches across the body and stays in the right hand",
        key: "Keep the arm extended. Hitting with a bent elbow loses most of the power and control." },
      { shot: "Offside backhand", side: "Right (offside)",
        ball: "Beside or behind the horse, struck backward",
        key: "Can be angled open to the right or tailed to the left. A straight-back version is usually ineffective if an opponent is directly behind you." },
      { shot: "Nearside backhand", side: "Left (nearside)",
        ball: "Beside the horse's left side, struck backward",
        key: "Lock the right knee into the saddle before rotating. This is the hardest of the four and will destabilise you without that fixed pivot." }
    ],

    items: [
      /* ---- SOLO STICK & BALL ---- */
      {
        cat: "sb", catLabel: "Stick & ball", level: "beginner", levelLabel: "Beginner",
        name: "Three-Shot Line",
        develops: "Shot-to-shot transitions, distance control and accuracy.",
        steps: [
          "Start at one end of the practice area.",
          "Hit a half-swing offside forehand.",
          "Hit a full-swing offside forehand.",
          "Hit an offside backhand.",
          "Turn the pony and repeat coming back, aiming at a chosen target each time — another ball, a divot, or the goal.",
          "Build the distance gradually as the strike stays clean."
        ],
        fault: "Hitting without a fixed target or distance goal, so the session becomes repetition rather than progression.",
        sources: [{ name: "Riverlands Polo Academy", url: "https://www.riverlandspolo.com/post/polo-drills" }]
      },
      {
        cat: "sb", catLabel: "Stick & ball", level: "intermediate", levelLabel: "Intermediate",
        name: "Circle Drill",
        develops: "Ball control while turning — the skill that wins the ball and turns it toward goal in a chukka.",
        steps: [
          "Ride a circle, clockwise.",
          "Tap the ball lightly on the inside of the circle, using offside half-swings only.",
          "Make contact earlier than you would for a full swing, and keep the horse further off the ball than usual.",
          "Roll forward in the saddle — chest toward the pommel, chin toward the ball.",
          "Turn the pony's head slightly inward as you go."
        ],
        fault: "Using full-swing timing and distance instead of the earlier, lighter contact this drill is built around.",
        sources: [{ name: "Riverlands Polo Academy", url: "https://www.riverlandspolo.com/post/polo-drills" }]
      },
      {
        cat: "sb", catLabel: "Stick & ball", level: "beginner", levelLabel: "Beginner",
        name: "Zig-Zag Drill",
        develops: "Balanced shot-making on both sides of the horse — and it forces you to practise the nearside, which most players neglect.",
        steps: [
          "Start at one end of the field.",
          "Hit an offside forehand diagonally across to the nearside.",
          "Hit a nearside forehand diagonally back across to the offside.",
          "Continue zig-zagging down the field.",
          "Use an imaginary line from the horse's head to the goal as your guide — every hit should cross it."
        ],
        fault: "Drifting off the centreline, so the diagonals stop being true crossings and the nearside work gets easier than it should be.",
        sources: [{ name: "Riverlands Polo Academy", url: "https://www.riverlandspolo.com/post/polo-drills" }]
      },
      {
        cat: "sb", catLabel: "Stick & ball", level: "advanced", levelLabel: "Advanced",
        name: "Neck Shot (under the neck)",
        develops: "Redirecting the ball across the front of the horse without turning the pony.",
        steps: [
          "For a 90° shot, position the ball opposite your right foot. Move it further across, toward the horse's left foot, for more angle.",
          "Bring the mallet forward — do not take it back as you would for a forehand.",
          "Drop the mallet head onto the ball. The angle comes from the arc of the swing, not from rolling the wrists.",
          "If you are running with the ball, briefly check the horse to shorten its stride so the mallet clears the front legs."
        ],
        fault: "Taking the mallet back as for an ordinary forehand and then trying to swing it around the front of the horse. The ball will always go where the arc of the swing goes.",
        sources: [
          { name: "GavSays Polo Academy", url: "https://www.gavsayspoloacademy.com/blog/how-to-play-a-neckshot" },
          { name: "Julio Arellano (9 goals), PoloSkilz", url: "https://www.youtube.com/watch?v=ojh-q9jQpzI" }
        ]
      },
      {
        cat: "sb", catLabel: "Stick & ball", level: "advanced", levelLabel: "Advanced",
        name: "Tail Shot (under the tail)",
        develops: "An escape option when you are being ridden off from behind.",
        steps: [
          "Let the ball sit clearly behind the horse — never directly underneath it.",
          "Strike backward, using the shot as the way out of the ride-off."
        ],
        fault: "Positioning the ball directly beneath the horse rather than clearly behind it.",
        sources: [{ name: "Polo Rules Test", url: "https://www.polorulestest.com/tactics/neckshot/" }]
      },

      /* ---- MOUNTED / GROUP ---- */
      {
        cat: "mounted", catLabel: "Mounted", level: "all", levelLabel: "All levels",
        name: "Who Has It? — line of the ball and right of way",
        develops: "Instant recognition of who holds the right of way. This is the single most important safety judgement in polo and the source of most fouls.",
        accent: "var(--clay)",
        steps: [
          "The coach rolls a ball down a line.",
          "Two or more riders approach from different angles — one following, one meeting at an angle, one parallel.",
          "Before any contact, freeze. Each rider must say who currently has the right of way, based on their position and angle to the line of the ball.",
          "Change the line mid-drill and repeat.",
          "Progress to full speed, with a whistle for any unsafe entry."
        ],
        fault: "Assuming whoever hit the ball last owns the right of way. Both the HPA and USPA rulebooks explicitly reject this.",
        sources: [
          { name: "HPA Rules (Blue Book), Rules 27–28", url: "https://hpa-polo.co.uk/download/2021-HPA-Rules-ONLY-Book.pdf" },
          { name: "USPA 2026 Rulebook, Rules 23–24", url: "https://issuu.com/uspoloassociation/docs/2026_uspa_rulebook" }
        ]
      },
      {
        cat: "mounted", catLabel: "Mounted", level: "intermediate", levelLabel: "Intermediate",
        name: "Progressive Ride-Off Ladder",
        develops: "Safe shoulder-to-shoulder contact at matched speed.",
        steps: [
          "Pair similar-sized riders on calm ponies.",
          "At a walk, practise gentle shoulder-to-shoulder contact with elbows tucked in.",
          "Progress to trot, then canter — but only once contact stays level and the speeds genuinely match.",
          "Add a ball, so the attacker must keep possession while being legally displaced."
        ],
        fault: "Riding in ahead of or behind the opponent's saddle rather than squarely shoulder-to-shoulder. The USPA names this as dangerous riding.",
        sources: [
          { name: "HPA Rule 31", url: "https://hpa-polo.co.uk/download/2021-HPA-Rules-ONLY-Book.pdf" },
          { name: "USPA Rule 26", url: "https://issuu.com/uspoloassociation/docs/2026_uspa_rulebook" }
        ]
      },
      {
        cat: "mounted", catLabel: "Mounted", level: "intermediate", levelLabel: "Intermediate",
        name: "Hook-and-Hit Partner Drill",
        develops: "Legal hook timing and positioning.",
        steps: [
          "Two riders at a walk or jog, one with the ball.",
          "The attacker takes practice swings at a slow-rolling ball.",
          "The defender rides the correct side — the same side as the ball, or directly behind — and times a hook at the start of the swing, keeping the mallet below shoulder height.",
          "Call a foul on any hook that crosses under, over or across the pony's body, or that targets a nearside backhand wind-up."
        ],
        fault: "Reaching across or under the opponent's pony to hook. Illegal under both codes and a genuine way to bring a horse down.",
        sources: [
          { name: "HPA Rule 30", url: "https://hpa-polo.co.uk/download/2021-HPA-Rules-ONLY-Book.pdf" },
          { name: "USPA Rule 28", url: "https://issuu.com/uspoloassociation/docs/2026_uspa_rulebook" }
        ]
      },
      {
        cat: "mounted", catLabel: "Mounted", level: "all", levelLabel: "All levels",
        name: "Line-Out Reaction Drill",
        develops: "Legal positioning at the throw-in and reaction speed off the bowl.",
        steps: [
          "Two teams or pairs line up on their own side, at least five yards from the thrower.",
          "The thrower bowls the ball underhand and hard, along the ground between the ranks.",
          "No player may move or engage until the ball has left the thrower's hand.",
          "First fair contact establishes the new line of the ball."
        ],
        fault: "Jumping the throw — moving or making contact before the ball leaves the thrower's hand. Illegal under both codes.",
        sources: [
          { name: "HPA Rule 6c", url: "https://hpa-polo.co.uk/download/2021-HPA-Rules-ONLY-Book.pdf" },
          { name: "USPA Rule 20", url: "https://issuu.com/uspoloassociation/docs/2026_uspa_rulebook" }
        ]
      },
      {
        cat: "mounted", catLabel: "Mounted", level: "intermediate", levelLabel: "Intermediate",
        name: "Penalty Distance Ladder",
        develops: "Pressure-proof goal-scoring from the codified penalty distances.",
        steps: [
          "Set markers at increasing distances — 20, 25, 30, 35, 40 yards, building to the full 60-yard penalty.",
          "Hit from the shortest distance until you are consistently clean.",
          "Every time you miss, go all the way back to the shortest distance. Not back one increment — all the way.",
          "Advance only once a distance is reliably clean."
        ],
        fault: "Goal-orientation — staring at the posts instead of focusing on the swing. Look up, see the goal, then think swing thoughts, not goal thoughts.",
        sources: [{ name: "GavSays Polo Academy", url: "https://www.gavsayspoloacademy.com/blog/how-to-practice-penalties" }]
      },

      /* ---- OFF THE HORSE ---- */
      {
        cat: "ground", catLabel: "Off the horse", level: "beginner", levelLabel: "Beginner",
        name: "Wooden Horse Practice",
        develops: "Grip, swing mechanics and all four basic shots, without tiring a live pony or having to control one at the same time.",
        steps: [
          "Fit a saddle to the stationary wooden horse, housed in its hitting cage.",
          "Place balls beside it for repeated striking.",
          "Work each of the four basic shots for form, not power.",
          "Move to slow stick and ball on a live pony only once the form is consistent."
        ],
        fault: "Treating it as a power and repetition exercise rather than a form exercise — and skipping the nearside shots, which are naturally under-practised in a one-handed game.",
        sources: [
          { name: "Black Bears Polo Club", url: "http://blackbearspolo.com/facilities/wooden-horse/" },
          { name: "Wooden Polo Pony", url: "https://www.woodenpolopony.com/specs/" }
        ]
      },
      {
        cat: "ground", catLabel: "Off the horse", level: "all", levelLabel: "All levels",
        name: "Mallet Grip Drill",
        develops: "Precision control without tension — the grip that lets the mallet swing as a free pendulum.",
        steps: [
          "Rest the mallet handle diagonally across the palm, at the base of the fingers.",
          "Keep the thumb and index finger relaxed and guiding, not squeezing.",
          "Let the middle finger act as the structural pivot.",
          "With eyes closed, consciously relax and tense each finger in turn to feel the difference between firm and flexible."
        ],
        fault: "Over-gripping with the hand and forearm. A muscled grip stops the mallet swinging freely and kills both power and touch.",
        sources: [{ name: "Prof. Eduardo Amaya, Pololine", url: "https://www.pololine.com/articles/the-grip-on-the-mallet-and-the-function-of-each-finger/" }]
      }
    ],

    note:
      "<b>On these drills.</b> Every drill above is drawn from a named coach, club or governing-body rulebook, linked on each card. " +
      "The mounted drills are built on rule text quoted directly from the HPA Blue Book and the USPA Rulebook; the specific choreography is a " +
      "reasonable coaching structure around those rules rather than a canonical published lesson plan. " +
      "Two things commonly found online are deliberately <b>not</b> included: a solo figure-of-eight ball-control drill, which no primary source " +
      "could confirm, and the term \"polo pit\" — the apparatus is a <b>wooden horse</b>, housed in a hitting cage. " +
      "<b>Equipment rules differ by jurisdiction.</b> The HPA requires eye protection for all players (since March 2026) and mandates knee pads; " +
      "the USPA requires eye protection only for under-18s and does not mandate knee pads in its rule text. Helmet standards differ too — " +
      "NOCSAE ND050 for the USPA, a wider list of equestrian standards for the HPA. Check the rules of the body you are registered with."
  },

  /* ---------------- FORUM ---------------- */
  forum: {
    giscus: {
      repo:       "marhall15/polo-dashboard",
      repoId:     "R_kgDOVIlvnQ",
      category:   "General",
      categoryId: "DIC_kwDOVIlvnc4DIXfd",
      term:       "The Global Polo Dashboard — Forum"
    },
    rules: [
      { title: "Keep it about the game",
        text: "Results, tactics, horses, tack, drills, travel and the season. Off-topic threads get moved." },
      { title: "Horses first",
        text: "Welfare questions are always on topic. Advice that puts a pony at risk will be removed." },
      { title: "Say who you are",
        text: "Club, handicap and region help people give you a useful answer — especially on drills and kit." },
      { title: "Disagree well",
        text: "Polo is opinionated and that is half the fun. Argue the point, not the person." }
    ],
    topics: [
      { label: "💬 General",        url: "https://github.com/marhall15/polo-dashboard/discussions/categories/general" },
      { label: "❓ Q&A",            url: "https://github.com/marhall15/polo-dashboard/discussions/categories/q-a" },
      { label: "💡 Ideas",          url: "https://github.com/marhall15/polo-dashboard/discussions/categories/ideas" },
      { label: "🏆 Show and tell",  url: "https://github.com/marhall15/polo-dashboard/discussions/categories/show-and-tell" },
      { label: "📣 Announcements",  url: "https://github.com/marhall15/polo-dashboard/discussions/categories/announcements" },
      { label: "🗳️ Polls",          url: "https://github.com/marhall15/polo-dashboard/discussions/categories/polls" }
    ]
  }
};
