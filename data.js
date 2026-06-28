/* DkFit — Greater Copenhagen gym data
 * ---------------------------------------------------------------
 * PureGym (27) & SATS (28) & LOOP (22): addresses from each chain's
 * own site. PureGym coords/hours/photos from structured data; SATS &
 * LOOP coords geocoded from official addresses. Prices/offers are
 * chain-level & time-sensitive — bump DATA_UPDATED on refresh.
 * Naming: "Brand — Location". island = "Zealand" (greater CPH region).
 * --------------------------------------------------------------- */

const DATA_UPDATED = "2026-06-28";
const ISLAND = "Zealand";

/* ---- SATS ---- */
const SATS_CLASSES = ["Cycling","BodyPump","Yoga","HIIT","Pilates","Zumba","Core","Dance"];
const SATS_OFFER = "Campaign (new members): 0 kr until 1 Aug 2026 + free sign-up; then normal price. 20% off with valid student/youth/senior doc.";
const SATS_OFFER_EXP = "2026-08-01";
const SATS_SUBS = [{label:"Basic · home centre", value:"549 kr/mo"},{label:"Flexible · all DK centres", value:"599 kr/mo"},{label:"Premium · all Nordic centres", value:"699 kr/mo"},{label:"Students / under-25 / seniors", value:"−20%"}];
const sats=(id,label,town,lat,lng,addr,phone)=>({
  id:"sats-"+id, name:"SATS — "+label, type:"Gym & fitness centre", town, island:ISLAND, coords:[lat,lng],
  address:addr, phone:phone||"", email:"", website:"https://www.sats.dk", facebook:"", photo:"", rating:null,
  priceMonthly:"From 549 kr/mo", subscriptions:SATS_SUBS, passes:[], courses:[],
  hours:{ Mon:"06:00–22:00",Tue:"06:00–22:00",Wed:"06:00–22:00",Thu:"06:00–22:00",Fri:"06:00–22:00",Sat:"08:00–22:00",Sun:"08:00–22:00", note:"Typical SATS hours — confirm per centre on sats.dk." },
  classes:SATS_CLASSES, amenities:["Cardio","Strength","Classes","Sauna"], offer:SATS_OFFER, offerExpires:SATS_OFFER_EXP, notes:"Same price under/over 30 (the age selector is for VAT only). 20% off with valid student/youth/senior doc. Sign-up fee (oprettelse) normally applies — waived in the current campaign.", verified:false });

/* ---- PureGym ---- */
const PUREGYM_CLASSES = ["Yoga","Zumba","Pilates","Step","Dance","BodyCombat","Circuit","Boxing","Cardio"];
/* Normal monthly prices, split by age. 50%-off + free-signup campaign to 31 Aug 2026
   (e.g. under-30 Core 149,50 / 30+ Core 189,50 kr/mo). */
const PUREGYM_SUBS = [{label:"Core · home club", value:"379 kr/mo"},{label:"Plus · 122 centres", value:"429 kr/mo"},{label:"Unlimited · all 128 centres", value:"449 kr/mo"}];
const PUREGYM_SUBS_U30 = [{label:"Core · home club", value:"299 kr/mo"},{label:"Plus · 122 centres", value:"379 kr/mo"},{label:"Unlimited · all 128 centres", value:"399 kr/mo"}];
const PUREGYM_PASSES = [{label:"1 day", value:"99 kr"},{label:"1 week", value:"259 kr"},{label:"1 month", value:"479 kr"},{label:"3 months", value:"1.149 kr"},{label:"6 months", value:"2.099 kr"},{label:"12 months", value:"3.799 kr"},{label:"12 months · all centres", value:"4.490 kr"}];
const PUREGYM_COURSES = [{label:"Personal training (12-week forløb)", value:"see site"}];
const PUREGYM_OFFER = "50% off + free sign-up until 31 Aug 2026 (campaign from ~149,50 kr/mo). Listed prices are normal; under-30 is cheaper than 30+.";
const PUREGYM_OFFER_EXP = "2026-08-31";
const PG_24 = { Mon:"00:00–24:00",Tue:"00:00–24:00",Wed:"00:00–24:00",Thu:"00:00–24:00",Fri:"00:00–24:00",Sat:"00:00–24:00",Sun:"00:00–24:00", note:"Open ~24h; staffed hours vary." };
const PG_DAY = { Mon:"05:00–00:00",Tue:"05:00–00:00",Wed:"05:00–00:00",Thu:"05:00–00:00",Fri:"05:00–00:00",Sat:"05:00–00:00",Sun:"05:00–00:00", note:"Staffed hours vary." };
const pg=(id,label,town,lat,lng,addr,hrs,img)=>({
  id:"pg-"+id, name:"PureGym — "+label, type:"Gym & fitness centre", town, island:ISLAND, coords:[lat,lng],
  address:addr, phone:"", email:"", website:"https://www.puregym.dk/find-center/"+id, facebook:"", photo:"", rating:null,
  priceMonthly:"From 299 kr/mo (u30) · 379 (30+)", subscriptions:PUREGYM_SUBS, subsU30:PUREGYM_SUBS_U30, passes:PUREGYM_PASSES, courses:PUREGYM_COURSES,
  hours:hrs, classes:PUREGYM_CLASSES, amenities:["Cardio","Strength","Free weights","Classes"], offer:PUREGYM_OFFER, offerExpires:PUREGYM_OFFER_EXP, notes:"", verified:true });

/* ---- LOOP ---- */
const LOOP_SUBS = [{label:"Monthly (per 30 days)", value:"269 kr"},{label:"Student · under 25", value:"229 kr"},{label:"Admin fee", value:"+10 kr/mo"}];
const LOOP_OFFER = "Intro offer: 100 kr/mo until 12 Aug.";
const LOOP_OFFER_EXP = "2026-08-12";
const loop=(id,label,town,lat,lng,addr,phone,email)=>({
  id:"loop-"+id, name:"LOOP Fitness — "+label, type:"Circuit gym", town, island:ISLAND, coords:[lat,lng],
  address:addr, phone:phone||"", email:email||"", website:"https://loopfitness.dk/centre/loop-fitness-"+id+"/", facebook:"", photo:"", rating:null,
  priceMonthly:"269 kr/mo", subscriptions:LOOP_SUBS, passes:[], courses:[],
  hours:{ Mon:"05:00–22:00",Tue:"05:00–22:00",Wed:"05:00–22:00",Thu:"05:00–22:00",Fri:"05:00–22:00",Sat:"05:00–22:00",Sun:"05:00–22:00", note:"Staffed hours vary." }, classes:[], amenities:["Circuit training","Coffee/tea"],
  offer:LOOP_OFFER, offerExpires:LOOP_OFFER_EXP, notes:"24-minute, 16-station circuit concept.", verified:true });

/* ---- FitnessX (budget 24h-ish chain; membership incl. all classes, no binding) ---- */
const FX_CLASSES = ["Cycling/Spinning","Yoga","Zumba","HIIT","Bootcamp","Body toning","Dance"];
const FX_SUBS_U30 = [{label:"27 centres", value:"360 kr/mo"},{label:"All 31 centres", value:"400 kr/mo"},{label:"Træningsven · train 2", value:"280 / 300 kr/mo pr. person"},{label:"Admin fee", value:"+15 kr/mo"}];
const FX_SUBS = [{label:"Membership (30+)", value:"higher than under-30 — see fitnessx.dk"},{label:"Admin fee", value:"+15 kr/mo"}];
const FX_OFFER = "Youth discount: lower price until you turn 30. Spar 50% the first 2 months. Træningsven = bring a buddy (cheaper per person). 30+ prices are higher — see fitnessx.dk.";
const FX_OFFER_EXP = "";
const FX_PASSES = [{label:"Day pass (drop-in)", value:"75 kr"}];
const FX_HOURS = { Mon:"05:00–22:00",Tue:"05:00–22:00",Wed:"05:00–22:00",Thu:"05:00–22:00",Fri:"05:00–22:00",Sat:"07:00–22:00",Sun:"07:00–22:00", note:"Typical FitnessX access hours; staffed hours shorter — confirm per centre on fitnessx.dk." };
const fx=(id,label,town,lat,lng,addr,path)=>({
  id:"fx-"+id, name:"FitnessX — "+label, type:"Gym & fitness centre", town, island:ISLAND, coords:[lat,lng],
  address:addr, phone:"", email:"", website:"https://fitnessx.dk"+path, facebook:"", photo:"", rating:null,
  priceMonthly:"From 360 kr/mo (under 30)", subscriptions:FX_SUBS, subsU30:FX_SUBS_U30, passes:FX_PASSES, courses:[],
  hours:FX_HOURS, classes:FX_CLASSES, amenities:["Cardio","Strength","Classes","No binding"],
  offer:FX_OFFER, offerExpires:FX_OFFER_EXP, notes:"Budget chain — membership includes all classes, no binding (cancel month + 1).", verified:false });

const GYMS = [
  /* ---------------- SATS (28) ---------------- */
  sats("adelgade","Adelgade","Indre By",55.682669,12.582337,"Adelgade 5-7, 1304 København K",""),
  sats("amager-strand","Amager Strand","Amager",55.661075,12.631956,"Amager Strandvej 108, 2300 København S",""),
  sats("birkerod","Birkerød","Birkerød",55.839243,12.434655,"Bistrupvej 1, 3460 Birkerød",""),
  sats("blox","Blox","Indre By",55.671734,12.579237,"Christians Brygge 25, 1219 København K",""),
  sats("fields","Field's","Ørestad",55.630999,12.575893,"Arne Jacobsens Allé 12, 2300 København S","+45 32 62 20 80"),
  sats("fisketorvet","Fisketorvet","Vesterbro",55.6518,12.5615,"Kalvebod Brygge 59, 1560 København V",""),
  sats("frb-abc","Frederiksberg Allé","Frederiksberg",55.674781,12.534073,"Frederiksberg Allé 98, 1820 Frederiksberg C",""),
  sats("frb-falkoner","Falkoner","Frederiksberg",55.680355,12.530809,"Falkoner Plads 1, 2000 Frederiksberg",""),
  sats("frederikssund","Frederikssund","Frederikssund",55.835822,12.064015,"Nygade 1 (Sillebroen), 3600 Frederikssund",""),
  sats("gentofte","Gentofte","Gentofte",55.747369,12.541228,"Gentoftegade 35, 2820 Gentofte",""),
  sats("helsingor","Helsingør","Helsingør",56.025467,12.588856,"Rønnebær Allé 110, 3000 Helsingør",""),
  sats("herlev","Herlev","Herlev",55.72473,12.439192,"Herlev Torv 28, 2730 Herlev",""),
  sats("horsholm","Hørsholm","Hørsholm",55.878468,12.497581,"Kammerrådensvej 2, 2970 Hørsholm",""),
  sats("koge-hvide-by","Køge – Den Hvide By","Køge",55.477562,12.186323,"Galoche Allé 11, 4600 Køge",""),
  sats("koge-straedet","Køge – Strædet","Køge",55.457083,12.185201,"Rådhusstræde 7G, 4600 Køge",""),
  sats("lyngby","Lyngby","Kgs. Lyngby",55.773619,12.506135,"Kanalvej 1, 2800 Kongens Lyngby",""),
  sats("nygardsvej","Nygårdsvej","Østerbro",55.712341,12.576532,"Nygårdsvej 5, 2100 København Ø","+45 39 12 90 00"),
  sats("naerum","Nærum","Nærum",55.816379,12.528805,"Rundforbivej 186-188, 2850 Nærum",""),
  sats("norrebro","Nørrebro","Nordvest",55.700888,12.536898,"Frederikssundsvej 5, 2400 København NV",""),
  sats("parken","Parken","Østerbro",55.701752,12.57248,"Øster Allé 42, 2100 København Ø","+45 35 55 00 78"),
  sats("roskilde","Roskilde","Roskilde",55.642401,12.100951,"Ro's Torv 1, 4000 Roskilde",""),
  sats("sluseholmen","Sluseholmen","Sydhavn",55.645505,12.547494,"Sluseholmen 15D, 2450 København SV",""),
  sats("sydhavn","Sydhavn","Sydhavn",55.653061,12.54248,"Scandiagade 15, 2450 København SV",""),
  sats("soborg","Søborg","Søborg",55.741109,12.484902,"Tobaksvejen 4, 2860 Søborg",""),
  sats("taastrup","Taastrup","Taastrup",55.643889,12.274546,"Cityringen 24, 2630 Taastrup",""),
  sats("valby","Valby","Valby",55.664755,12.511476,"Torvegade 17, 2500 Valby",""),
  sats("vallensbaek","Vallensbæk","Vallensbæk",55.621,12.376,"Stationstorvet 76, 2665 Vallensbæk Strand",""),
  sats("vesterport","Vesterport","Indre By",55.675491,12.563123,"Ved Vesterport 1, 1612 København V",""),

  /* ---------------- PureGym (27, verified from puregym.dk) ---------------- */
  pg("kbh-k-koebmagergade-koebenhavn","Købmagergade","Indre By",55.680988,12.576819,"Købmagergade 48, 1150 København K",PG_DAY,"/images/centers/703/0-funktionel-2-605-kobmagergade-puregym-4.webp"),
  pg("kbh-n-esromgade","Esromgade","Nørrebro",55.697544,12.540403,"Esromgade 15, 2200 København N",PG_DAY,"/images/centers/696/1-cardio-1-601-esromgade-puregym.webp"),
  pg("kbh-n-farumgade","Farumgade","Nørrebro",55.697816,12.541631,"Farumgade 6, 2200 København N",PG_DAY,""),
  pg("kbh-n-jagtvej-koebenhavn-noerrebro","Jagtvej","Nørrebro",55.696498,12.550941,"Jagtvej 113-115, 2200 København N",PG_DAY,"/images/centers/774/dsc04399-hdr.webp"),
  pg("kbh-nv-emdrup-station","Emdrup","Nordvest",55.721866,12.540899,"Emdrupvej 115A, 2400 København NV",PG_DAY,"/images/centers/682/dsc08183-hdr.webp"),
  pg("kbh-nv-lygten","Lygten","Nordvest",55.705155,12.537424,"Rentemestervej 2, 2400 København NV",PG_DAY,"/images/centers/702/pg-124-lygten-enigheden-3x2-01-1090x727.webp"),
  pg("kbh-nv-tomsgaardsvej","Tomsgårdsvej","Nordvest",55.707603,12.522372,"Tomsgårdsvej 15, 2400 København NV",PG_DAY,"/images/centers/789/223-tomsgardsvej-10.webp"),
  pg("oerestad","Ørestad","Ørestad",55.61962,12.57477,"Asger Jorns Allé 2, 2300 København S",PG_24,"/images/centers/872/dsc08600-hdr.webp"),
  pg("kbh-s-bryggen","Islands Brygge","Islands Brygge",55.662785,12.577246,"Kigkurren 1, 2300 København S",PG_24,"/images/centers/772/dsc04140-hdr-1090x727.webp"),
  pg("kbh-s-englandsvej","Englandsvej","Amager",55.656805,12.604074,"Englandsvej 28-30, 2300 København S",PG_24,"/images/centers/759/1-frivaegt-2-191-englandsvej-puregym.webp"),
  pg("kbh-s-lergravsvej","Lergravsvej","Amager",55.66431,12.62582,"Lergravsvej 57, 2300 København S",PG_24,"/images/centers/876/pg-amager-lergravsvej-3-2-01-1090x727.webp"),
  pg("kbh-s-lyongade-amager","Lyongade","Amager",55.661369,12.609945,"Lyongade 23-25, 2300 København S",PG_DAY,"/images/centers/677/dsc04614-hdr.webp"),
  pg("kbh-s-rued-langgaards-vej","DR Byen","Amager",55.660201,12.59278,"Rued Langgaards Vej 2C, 2300 København S",PG_DAY,"/images/centers/701/dsc03864-hdr-1090x727.webp"),
  pg("kbh-sv-ellebjergvej","Ellebjergvej","Sydhavn",55.650769,12.510651,"Ellebjergvej 138, 2450 København SV",PG_24,"/images/centers/750/dsc02709-hdr-1090x727.webp"),
  pg("kbh-sv-sjaeloer","Sjælør","Sydhavn",55.650496,12.524135,"Ellebjergvej 40, 2450 København SV",PG_24,"/images/centers/672/a-funktionelt-4-620-sjaelor-puregym.webp"),
  pg("kbh-v-gasvaerksvej","Gasværksvej","Vesterbro",55.670808,12.557024,"Gasværksvej 16, 1656 København V",PG_DAY,"/images/centers/679/dsc03114-hdr-1090x727.webp"),
  pg("kbh-v-vesterbrogade","Vesterbro","Vesterbro",55.670151,12.547208,"Matthæusgade 48, 1666 København V",PG_DAY,"/images/centers/705/dsc03964-hdr.webp"),
  pg("kbh-oe-aarhusgade","Århusgade","Østerbro",55.706711,12.587305,"Århusgade 102, 2100 København Ø",PG_DAY,"/images/centers/704/pg-123-arhusgade-3x2-01-1090x727.webp"),
  pg("kbh-oe-oslo-plads","Oslo Plads","Østerbro",55.692074,12.588159,"Oslo Plads 2, 2100 København Ø",PG_DAY,"/images/centers/856/0-cardio-1-261-oslo-plads-puregym.webp"),
  pg("kbh-oe-strandvejen","Strandvejen","Østerbro",55.721816,12.577634,"Strandvejen 32F, 2100 København Ø",PG_DAY,"/images/centers/746/pg-172-strandvejen-3x2-01-1090x727.webp"),
  pg("kbh-oe-aebeloegade","Æbeløgade","Østerbro",55.711125,12.564331,"Æbeløgade 4, 2100 København Ø",PG_24,"/images/centers/665/0-funktionel-1-612-aebelogade-puregym.webp"),
  pg("c-f-richsvej-frederiksberg","C.F. Richs Vej","Frederiksberg",55.686799,12.503506,"C.F. Richs Vej 107, 2000 Frederiksberg",PG_24,"/images/centers/684/dsc04905-hdr.webp"),
  pg("frb-forum","Forum","Frederiksberg",55.683105,12.55238,"Worsaaesvej 17, 1972 Frederiksberg C",PG_DAY,"/images/centers/754/pg-164-frb-forum-01-1090x727.webp"),
  pg("mariendalsvej-frederiksberg","Mariendalsvej","Frederiksberg",55.69076,12.53229,"Mariendalsvej 57c, 2000 Frederiksberg",PG_DAY,"/images/centers/860/dsc04199-hdr.webp"),
  pg("valby-mosedalvej","Mosedalvej","Valby",55.667828,12.513648,"Mosedalvej 11, 2500 Valby",PG_DAY,"/images/centers/693/1-cardio-114-mosedalsvej-puregym.webp"),
  pg("vanloese-skalbakken","Skalbakken","Vanløse",55.693364,12.484656,"Skalbakken 10, 2720 Vanløse",PG_DAY,"/images/centers/791/217-vanlose-10.webp"),
  pg("vanloesetorv","Vanløse Torv","Vanløse",55.688016,12.493327,"Apollovej 33, 2720 Vanløse",PG_DAY,"/images/centers/819/dsc05095-hdr.webp"),

  /* ---------------- LOOP Fitness (22) ---------------- */
  loop("kastrup","Kastrup","Kastrup",55.619276,12.628049,"Amager Landevej 233, 2770 Kastrup","+45 3127 3729","kastrup@loopfitness.dk"),
  loop("roskilde","Roskilde","Roskilde",55.643227,12.109775,"Byleddet 1, 4000 Roskilde","+45 4174 6228","roskilde@loopfitness.dk"),
  loop("vanloese","Vanløse","Vanløse",55.686681,12.491154,"Jernbane Allé 42A, 2720 Vanløse","+45 4174 6332","vanloese@loopfitness.dk"),
  loop("ballerup","Ballerup","Ballerup",55.729663,12.35736,"Banetoften 30, 2750 Ballerup","+45 4174 6339","ballerup@loopfitness.dk"),
  loop("birkeroed","Birkerød","Birkerød",55.840892,12.431284,"Hovedgaden 38, 3460 Birkerød","+45 4174 6275","birkeroed@loopfitness.dk"),
  loop("broenshoej","Brønshøj","Brønshøj",55.709668,12.480529,"Frederikssundsvej 266, 2700 Brønshøj","+45 4174 6287","broenshoej@loopfitness.dk"),
  loop("dragoer","Dragør","Dragør",55.602327,12.659521,"A.P. Møllers Allé 13, 2791 Dragør","+45 4174 6207","dragoer@loopfitness.dk"),
  loop("glostrup","Glostrup","Glostrup",55.663865,12.377878,"Hermods Allé 6, 2600 Glostrup","+45 4174 6313","glostrup@loopfitness.dk"),
  loop("greve","Greve","Greve",55.589573,12.294749,"Håndværkerbyen 36, 2670 Greve","+45 4174 6243","greve@loopfitness.dk"),
  loop("herlev","Herlev","Herlev",55.725083,12.421959,"Herlev Hovedgade 201B, 2730 Herlev","","herlev@loopfitness.dk"),
  loop("koege","Køge","Køge",55.44808,12.166807,"Marksvinget 19, 4600 Køge","","koege@loopfitness.dk"),
  loop("naerum","Nærum","Nærum",55.81439,12.530083,"Nærumvænge Torv 18, 2850 Nærum","","naerum@loopfitness.dk"),
  loop("oesterbro","Østerbro","Østerbro",55.708227,12.558535,"Teglværksgade 37, 2100 København Ø","+45 4174 6327","oesterbro@loopfitness.dk"),
  loop("soeborg","Søborg","Søborg",55.740528,12.476863,"Tobaksvejen 20, 2860 Søborg","+45 4174 6326","soeborg@loopfitness.dk"),
  loop("sydhavns-plads","Sydhavns Plads","Sydhavn",55.653824,12.54113,"Sydhavns Plads 12, 2450 København SV","+45 3143 8010","sydhavnsplads@loopfitness.dk"),
  loop("valby","Valby","Valby",55.665921,12.517374,"Toftegårds Allé 9A, 2500 Valby","+45 4174 6328","valby@loopfitness.dk"),
  loop("hvidovre","Hvidovre","Hvidovre",55.635881,12.467132,"Arnold Nielsens Boulevard 144, 2650 Hvidovre","+45 4174 6331","hvidovre@loopfitness.dk"),
  loop("amager-strandlodsvej","Strandlodsvej","Amager",55.667,12.609,"Strandlodsvej 9, 2300 København S","+45 4174 6135","strandlodsvej@loopfitness.dk"),
  loop("frederiksberg","Frederiksberg","Frederiksberg",55.683803,12.524073,"Nordre Fasanvej 43, 2000 Frederiksberg","+45 4174 6319","frederiksberg@loopfitness.dk"),
  loop("roedovre","Rødovre","Rødovre",55.677828,12.459137,"Højnæsvej 73, 2610 Rødovre","+45 4174 6216","roedovre@loopfitness.dk"),
  loop("hilleroed","Hillerød","Hillerød",55.932016,12.269295,"Vølundsvej 9, 3400 Hillerød","+45 4174 6226","hilleroed@loopfitness.dk"),
  loop("helsingoer","Helsingør","Helsingør",56.037968,12.579193,"Blichersvej 57, 3000 Helsingør","","helsingoer@loopfitness.dk"),

  /* ---------------- FitnessX (10, greater Copenhagen) ---------------- */
  fx("ballerup","Hedeparken","Ballerup",55.718931,12.357145,"Hedeparken, 2750 Ballerup","/fitness/fitness-ballerup/fitness-ballerup-hedeparken/"),
  fx("frederiksberg-fasanvej","Fasanvej","Frederiksberg",55.681998,12.52262,"Nordre Fasanvej 27, 2000 Frederiksberg","/fitness/fitness-frederiksberg/fitness-frederiksberg-nordre-fasanvej-27/"),
  fx("amager-strand","Amager Strand","København S",55.660103,12.633066,"Amager Strandvej 112A, 2300 København S","/fitness/fitness-koebenhavn/fitness-kobenhavn-s-amager-strandvej-112a/"),
  fx("femoeren","Femøren","København S",55.645914,12.636139,"Engvej 163, 2300 København S","/fitness/fitness-koebenhavn/fitness-kobenhavn-s-femoren-engvej-163/"),
  fx("carlsberg-byen","Carlsberg Byen","København V",55.666662,12.533254,"Torvald Bindesbølls Plads 1, 1799 København V","/fitness/fitness-koebenhavn/fitness-kobenhavn-v-carlsberg-byen-torvald-bindesboells-pl-1/"),
  fx("lyngby","Jernbanepladsen","Kgs. Lyngby",55.767952,12.504715,"Jernbanepladsen, 2800 Kongens Lyngby","/fitness/fitness-lyngby/lyngby-jernbanepladsen/"),
  fx("roskilde","Holbækvej","Roskilde",55.635798,12.052578,"Holbækvej, 4000 Roskilde","/fitness/fitness-roskilde/fitness-roskilde-holbaekvej/"),
  fx("valby-vigerslevvej","Vigerslevvej","Valby",55.66707,12.486413,"Vigerslevvej, 2500 Valby","/fitness/fitness-valby/fitness-valby-centerparken-24/"),
  fx("valby-groenttorvet","Grønttorvet","Valby",55.65787,12.513752,"Gammel Køge Landevej (Grønttorvet), 2500 Valby","/fitness/fitness-valby/fitness-valby-groenttorvet-gammel-koege-landevej/"),
  fx("hans-knudsens-plads","Hans Knudsens Plads","København Ø",55.713947,12.560049,"Hans Knudsens Plads, 2100 København Ø","/fitness/fitness-koebenhavn/fitness-koebenhavn-oe-hans-knudsens-plads/"),

  /* ---------------- Boutique / specialty ---------------- */
  { id:"butchers-lab", name:"Butcher's Lab", type:"CrossFit box", town:"Vesterbro", island:ISLAND, coords:[55.669082,12.560097],
    address:"Slagtehusgade, Kødbyen, 1715 København V", phone:"", email:"", website:"https://butcherslab.dk", facebook:"", photo:"", rating:null,
    priceMonthly:"See butcherslab.dk", subscriptions:[], passes:[{label:"Drop-in", value:"see site"}], courses:[{label:"Beginner course (begynderforløb)", value:"see site"}],
    hours:{ note:"Class-based CrossFit schedule — see butcherslab.dk." }, classOnly:true, classes:[], amenities:["CrossFit","Coached","Community"],
    offer:"", notes:"CrossFit box in a converted Meatpacking District butchery. Fixed beginner courses are the closest DK equivalent to Burn Klassik.", verified:false },

  { id:"beatriders", name:"Beatriders", type:"Class studio", town:"Islands Brygge", island:ISLAND, coords:[55.666232,12.581002],
    address:"Njalsgade 21, 2300 København S", phone:"", email:"", website:"https://beatriders.dk", facebook:"", photo:"", rating:null,
    priceMonthly:"From 170 kr/class", subscriptions:[], passes:[{label:"Single class", value:"189 kr"},{label:"5 classes", value:"899 kr (180/cl)"},{label:"10 classes", value:"1.699 kr (170/cl)"}], courses:[],
    hours:{ note:"Open for booked classes only — see the schedule on beatriders.dk." }, classOnly:true,
    classes:["Ride (cycling)","Lift (strength)","Form (Lagree)","Stretch","Sauna"], amenities:["Cycling","Strength","Lagree","Sauna","Classes"],
    offer:"First-timer: 3 classes for 299 kr (100 kr/class).", notes:"Boutique class studio — credit packs, no membership. Concepts: Ride, Lift, Form, Stretch + sauna.", verified:true }
];
