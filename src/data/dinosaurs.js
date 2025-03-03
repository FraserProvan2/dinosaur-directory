const dinosaurs = [
  {
    name: "Chindesaurus",
    image: "chindesaurus.png",
    period: "Triassic",
    fullPeriod: "Late Triassic",
    yearsMya: { start: 227, end: 210 },
    pronunciation: "chin-dee-sore-us",
    meaning: "'Chinde lizard'",
    diet: "carnivorous",
    length: 4.0, // in meters
    foundIn: ["USA"]
  },
  {
    name: "Coelophysis",
    image: "coelophysis.png",
    period: "Triassic",
    fullPeriod: "Late Triassic",
    yearsMya: { start: 225, end: 190 },
    pronunciation: "seel-OH-fie-sis",
    meaning: "'hollow form'",
    diet: "carnivorous",
    length: 2.0, // in meters
    weight: 27, // in kilograms
    foundIn: ["South Africa", "USA", "Zimbabwe"]
  },
  {
    name: "Coloradisaurus",
    image: "coloradisaurus.png",
    period: "Triassic",
    fullPeriod: "Late Triassic",
    yearsMya: { start: 221, end: 210 },
    pronunciation: "ko-lo-rahd-i-sore-us",
    meaning: "'[Los] Colorados lizard'",
    diet: "omnivorous",
    length: 4.0, // in meters
    foundIn: ["Argentina"]
  },
  {
    name: "Eoraptor",
    image: "eoraptor.png",
    period: "Triassic",
    fullPeriod: "Late Triassic",
    yearsMya: { start: 231, end: 228 },
    pronunciation: "EE-oh-rap-tor",
    meaning: "'dawn thief'",
    diet: "omnivorous",
    length: 1.0, // in meters
    foundIn: ["Argentina"]
  },
  {
    name: "Guaibasaurus",
    image: "guaibasaurus.png",
    period: "Triassic",
    fullPeriod: "Late Triassic",
    yearsMya: { start: 225, end: 220 },
    pronunciation: "gwhy-bah-sore-us",
    meaning: "'Guaíba lizard'",
    diet: "omnivorous",
    length: 2.0, // in meters
    foundIn: ["Brazil"]
  },
  {
    name: "Herrerasaurus",
    image: "herrerasaurus.png",
    period: "Triassic",
    fullPeriod: "Late Triassic",
    yearsMya: { start: 231, end: 225 },
    pronunciation: "heh-RAY-rah-sore-us",
    meaning: "'Herrera's lizard'",
    diet: "carnivorous",
    length: 3.0, // in meters
    foundIn: ["Argentina"]
  },
  {
    name: "Liliensternus",
    image: "liliensternus.png",
    period: "Triassic",
    fullPeriod: "Late Triassic",
    yearsMya: { start: 210, end: 205 },
    pronunciation: "lil-ee-en-STER-nus",
    meaning: "'von Lilienstern's lizard'",
    diet: "carnivorous",
    length: 5.2, // in meters
    foundIn: ["Germany"]
  },
  {
    name: "Lycorhinus",
    image: "lycorhinus.png",
    period: "Triassic",
    fullPeriod: "Late Triassic",
    yearsMya: { start: 201, end: 199 },
    pronunciation: "lye-ko-RYE-nus",
    meaning: "'wolf snout'",
    diet: "herbivorous",
    length: 1.2, // in meters
    foundIn: ["South Africa"]
  },
  {
    name: "Melanorosaurus",
    image: "melanorosaurus.png",
    period: "Triassic",
    fullPeriod: "Late Triassic",
    yearsMya: { start: 227, end: 221 },
    pronunciation: "mel-an-oh-roe-sore-us",
    meaning: "'Black Mountain lizard'",
    diet: "herbivorous",
    length: 8.0, // in meters
    weight: 1300, // in kilograms
    foundIn: ["South Africa"]
  },
  {
    name: "Mussaurus",
    image: "mussaurus.png",
    period: "Triassic",
    fullPeriod: "Late Triassic",
    yearsMya: { start: 215, end: 203 },
    pronunciation: "moo-sore-us",
    meaning: "'mouse lizard'",
    diet: "herbivorous",
    length: 3.0, // in meters
    foundIn: ["Argentina"]
  },
  {
    name: "Plateosaurus",
    image: "plateosaurus.png",
    period: "Triassic",
    fullPeriod: "Late Triassic",
    yearsMya: { start: 214, end: 204 },
    pronunciation: "plat-ee-oh-sore-us",
    meaning: "'flat lizard'",
    diet: "herbivorous",
    length: 8.0, // in meters
    foundIn: ["Germany", "Switzerland", "France", "Greenland"]
  },
  {
    name: "Procompsognathus",
    image: "procompsognathus.png",
    period: "Triassic",
    fullPeriod: "Late Triassic",
    yearsMya: { start: 210, end: 205 },
    pronunciation: "pro-comp-sog-NAY-thus",
    meaning: "'before elegant jaw'",
    diet: "carnivorous",
    length: 1.2, // in meters
    foundIn: ["Germany"]
  },
  {
    name: "Riojasaurus",
    image: "riojasaurus.png",
    period: "Triassic",
    fullPeriod: "Late Triassic",
    yearsMya: { start: 227, end: 221 },
    pronunciation: "ree-oh-ha-sore-us",
    meaning: "'Rioja lizard'",
    diet: "herbivorous",
    length: 10.0, // in meters
    foundIn: ["Argentina"]
  },
  {
    name: "Staurikosaurus",
    image: "staurikosaurus.png",
    period: "Triassic",
    fullPeriod: "Late Triassic",
    yearsMya: { start: 227, end: 221 },
    pronunciation: "stor-ik-oh-sore-us",
    meaning: "'Southern Cross lizard'",
    diet: "carnivorous",
    length: 2.0, // in meters
    foundIn: ["Brazil"]
  },
  {
    name: "Thecodontosaurus",
    image: "thecodontosaurus.png",
    period: "Triassic",
    fullPeriod: "Late Triassic",
    yearsMya: { start: 227, end: 201 },
    pronunciation: "thee-koh-don-toe-sore-us",
    meaning: "'socket-tooth lizard'",
    diet: "herbivorous",
    length: 2.0, // in meters
    foundIn: ["United Kingdom"]
  },
  {
    name: "Aardonyx",
    image: "aardonyx.png",
    period: "Jurassic",
    fullPeriod: "Early Jurassic",
    yearsMya: { start: 201, end: 190 },
    pronunciation: "ARD-oh-nix",
    meaning: "'earth claw'",
    diet: "herbivorous",
    length: 7, // in meters
    foundIn: ["South Africa"]
  },
  {
    name: "Ammosaurus",
    image: "ammosaurus.png",
    period: "Jurassic",
    fullPeriod: "Early Jurassic",
    yearsMya: { start: 201, end: 189 },
    pronunciation: "AM-oh-sore-us",
    meaning: "'sand lizard'",
    diet: "herbivorous",
    length: 4, // in meters
    foundIn: ["USA"]
  },
  {
    name: "Anchisaurus",
    image: "anchisaurus.png",
    period: "Jurassic",
    fullPeriod: "Early Jurassic",
    yearsMya: { start: 200, end: 195 },
    pronunciation: "an-KIE-sore-us",
    meaning: "'near lizard'",
    diet: "herbivorous",
    length: 2, // in meters
    foundIn: ["USA"]
  },
  {
    name: "Barapasaurus",
    image: "barapasaurus.png",
    period: "Jurassic",
    fullPeriod: "Early Jurassic",
    yearsMya: { start: 197, end: 183 },
    pronunciation: "bah-RAH-pah-sore-us",
    meaning: "'big legged lizard'",
    diet: "herbivorous",
    length: 14, // in meters
    foundIn: ["India"]
  },
  {
    name: "Cryolophosaurus",
    image: "cryolophosaurus.png",
    period: "Jurassic",
    fullPeriod: "Early Jurassic",
    yearsMya: { start: 194, end: 188 },
    pronunciation: "cry-oh-LOAF-oh-sore-us",
    meaning: "'cold crest lizard'",
    diet: "carnivorous",
    length: 6.5, // in meters
    foundIn: ["Antarctica"]
  },
  {
    name: "Dilophosaurus",
    image: "dilophosaurus.png",
    period: "Jurassic",
    fullPeriod: "Early Jurassic",
    yearsMya: { start: 193, end: 190 },
    pronunciation: "die-LOAF-oh-sore-us",
    meaning: "'two-crested lizard'",
    diet: "carnivorous",
    length: 6, // in meters
    foundIn: ["USA"]
  },
  {
    name: "Heterodontosaurus",
    image: "heterodontosaurus.png",
    period: "Jurassic",
    fullPeriod: "Early Jurassic",
    yearsMya: { start: 200, end: 190 },
    pronunciation: "het-er-oh-DON-toe-sore-us",
    meaning: "'different-toothed lizard'",
    diet: "herbivorous",
    length: 1, // in meters
    foundIn: ["South Africa"]
  },
  {
    name: "Jingshanosaurus",
    image: "jingshanosaurus.png",
    period: "Jurassic",
    fullPeriod: "Early Jurassic",
    yearsMya: { start: 196, end: 190 },
    pronunciation: "jing-shan-oh-sore-us",
    meaning: "'Jingshan lizard'",
    diet: "herbivorous",
    length: 5, // in meters
    foundIn: ["China"]
  },
  {
    name: "Kotasaurus",
    image: "kotasaurus.png",
    period: "Jurassic",
    fullPeriod: "Early Jurassic",
    yearsMya: { start: 190, end: 174 },
    pronunciation: "koh-tah-sore-us",
    meaning: "'Kota lizard'",
    diet: "herbivorous",
    length: 9, // in meters
    foundIn: ["India"]
  },
  {
    name: "Lesothosaurus",
    image: "lesothosaurus.png",
    period: "Jurassic",
    fullPeriod: "Early Jurassic",
    yearsMya: { start: 201, end: 190 },
    pronunciation: "le-SO-tho-sore-us",
    meaning: "'Lesotho lizard'",
    diet: "herbivorous",
    length: 1, // in meters
    foundIn: ["Lesotho", "South Africa"]
  },
  {
    name: "Lophostropheus",
    image: "lophostropheus.png",
    period: "Jurassic",
    fullPeriod: "Early Jurassic",
    yearsMya: { start: 200, end: 175 },
    pronunciation: "lo-fo-STRO-fee-us",
    meaning: "'crested vertebrae'",
    diet: "carnivorous",
    length: 3, // in meters
    foundIn: ["France"]
  },
  {
    name: "Lufengosaurus",
    image: "lufengosaurus.png",
    period: "Jurassic",
    fullPeriod: "Early Jurassic",
    yearsMya: { start: 199, end: 196 },
    pronunciation: "loo-feng-oh-sore-us",
    meaning: "'Lufeng lizard'",
    diet: "herbivorous",
    length: 6, // in meters
    foundIn: ["China"]
  },
  {
    name: "Massospondylus",
    image: "massospondylus.png",
    period: "Jurassic",
    fullPeriod: "Early Jurassic",
    yearsMya: { start: 200, end: 183 },
    pronunciation: "mass-oh-SPON-dih-lus",
    meaning: "'longer vertebrae'",
    diet: "herbivorous",
    length: 4, // in meters
    foundIn: ["South Africa", "Zimbabwe"]
  },
  {
    name: "Pantydraco",
    image: "pantydraco.png",
    period: "Jurassic",
    fullPeriod: "Early Jurassic",
    yearsMya: { start: 201, end: 199 },
    pronunciation: "PAN-tee-DRAH-koh",
    meaning: "'Pant-y-ffynnon dragon'",
    diet: "herbivorous",
    length: 3, // in meters
    foundIn: ["Wales"]
  },
  {
    name: "Sarcosaurus",
    image: "sarcosaurus.png",
    period: "Jurassic",
    fullPeriod: "Early Jurassic",
    yearsMya: { start: 201, end: 190 },
    pronunciation: "SAR-ko-sore-us",
    meaning: "'flesh lizard'",
    diet: "carnivorous",
    length: 5, // in meters
    foundIn: ["United Kingdom"]
  },
  {
    name: "Scelidosaurus",
    image: "scelidosaurus.png",
    period: "Jurassic",
    fullPeriod: "Early Jurassic",
    yearsMya: { start: 196, end: 183 },
    pronunciation: "skel-ih-doe-sore-us",
    meaning: "'limb lizard'",
    diet: "herbivorous",
    length: 4, // in meters
    foundIn: ["England"]
  },
  {
    name: "Scutellosaurus",
    image: "scutellosaurus.png",
    period: "Jurassic",
    fullPeriod: "Early Jurassic",
    yearsMya: { start: 196, end: 193 },
    pronunciation: "skoo-TELL-oh-sore-us",
    meaning: "'little shielded lizard'",
    diet: "herbivorous",
    length: 1.2, // in meters
    foundIn: ["USA"]
  },
  {
    name: "Vulcanodon",
    image: "vulcanodon.png",
    period: "Jurassic",
    fullPeriod: "Early Jurassic",
    yearsMya: { start: 200, end: 190 },
    pronunciation: "vul-KAN-oh-don",
    meaning: "'volcano tooth'",
    diet: "herbivorous",
    length: 6.5, // in meters
    foundIn: ["Zimbabwe"]
  },
  {
    name: "Yimenosaurus",
    image: "yimenosaurus.png",
    period: "Jurassic",
    fullPeriod: "Early Jurassic",
    yearsMya: { start: 199, end: 183 },
    pronunciation: "yee-men-oh-sore-us",
    meaning: "'Yimen lizard'",
    diet: "herbivorous",
    length: 9, // in meters
    foundIn: ["China"]
  },
  {
    name: "Yunnanosaurus",
    image: "yunnanosaurus.png",
    period: "Jurassic",
    fullPeriod: "Early Jurassic",
    yearsMya: { start: 199, end: 183 },
    pronunciation: "yoo-nan-oh-sore-us",
    meaning: "'Yunnan lizard'",
    diet: "herbivorous",
    length: 7, // in meters
    foundIn: ["China"]
  },
  {
    name: "Amygdalodon",
    image: "amygdalodon.png",
    period: "Jurassic",
    fullPeriod: "Mid Jurassic",
    yearsMya: { start: 174, end: 164 },
    pronunciation: "ah-MIG-da-lo-don",
    meaning: "'almond tooth'",
    diet: "herbivorous",
    length: 12, // in meters
    foundIn: ["Argentina"]
  },
  {
    name: "Bellusaurus",
    image: "bellusaurus.png",
    period: "Jurassic",
    fullPeriod: "Mid Jurassic",
    yearsMya: { start: 174, end: 164 },
    pronunciation: "BEL-loo-sore-us",
    meaning: "'beautiful lizard'",
    diet: "herbivorous",
    length: 4.8, // in meters
    foundIn: ["China"]
  },
  {
    name: "Brachytrachelopan",
    image: "brachytrachelopan.png",
    period: "Jurassic",
    fullPeriod: "Mid Jurassic",
    yearsMya: { start: 164, end: 161 },
    pronunciation: "brak-ee-trak-eh-lo-pan",
    meaning: "'short-necked Pan'",
    diet: "herbivorous",
    length: 10, // in meters
    foundIn: ["Argentina"]
  },
  {
    name: "Cetiosauriscus",
    image: "cetiosauriscus.png",
    period: "Jurassic",
    fullPeriod: "Mid Jurassic",
    yearsMya: { start: 166, end: 164 },
    pronunciation: "see-tee-oh-sore-ISS-kus",
    meaning: "'whale lizard-like'",
    diet: "herbivorous",
    length: 15, // in meters
    foundIn: ["England"]
  },
  {
    name: "Cetiosaurus",
    image: "cetiosaurus.png",
    period: "Jurassic",
    fullPeriod: "Mid Jurassic",
    yearsMya: { start: 167, end: 164 },
    pronunciation: "see-tee-oh-sore-us",
    meaning: "'whale lizard'",
    diet: "herbivorous",
    length: 16, // in meters
    foundIn: ["England"]
  },
  {
    name: "Datousaurus",
    image: "datousaurus.png",
    period: "Jurassic",
    fullPeriod: "Mid Jurassic",
    yearsMya: { start: 168, end: 161 },
    pronunciation: "da-too-sore-us",
    meaning: "'Datou lizard'",
    diet: "herbivorous",
    length: 15, // in meters
    foundIn: ["China"]
  },
  {
    name: "Emausaurus",
    image: "emausaurus.png",
    period: "Jurassic",
    fullPeriod: "Mid Jurassic",
    yearsMya: { start: 174, end: 170 },
    pronunciation: "ee-mow-sore-us",
    meaning: "'Ernst Moritz Arndt University lizard'",
    diet: "herbivorous",
    length: 2.5, // in meters
    foundIn: ["Germany"]
  },
  {
    name: "Eustreptospondylus",
    image: "eustreptospondylus.png",
    period: "Jurassic",
    fullPeriod: "Mid Jurassic",
    yearsMya: { start: 165, end: 160 },
    pronunciation: "yoo-strep-toh-spon-die-lus",
    meaning: "'well-curved vertebra'",
    diet: "carnivorous",
    length: 5, // in meters
    foundIn: ["England"]
  },
  {
    name: "Gasosaurus",
    image: "gasosaurus.png",
    period: "Jurassic",
    fullPeriod: "Mid Jurassic",
    yearsMya: { start: 171, end: 169 },
    pronunciation: "gas-oh-sore-us",
    meaning: "'Gas lizard'",
    diet: "carnivorous",
    length: 4, // in meters
    foundIn: ["China"]
  },
  {
    name: "Huayangosaurus",
    image: "huayangosaurus.png",
    period: "Jurassic",
    fullPeriod: "Mid Jurassic",
    yearsMya: { start: 170, end: 160 },
    pronunciation: "hway-ang-oh-sore-us",
    meaning: "'Huayang lizard'",
    diet: "herbivorous",
    length: 4.5, // in meters
    foundIn: ["China"]
  },
  {
    name: "Lapparentosaurus",
    image: "lapparentosaurus.png",
    period: "Jurassic",
    fullPeriod: "Mid Jurassic",
    yearsMya: { start: 169, end: 164 },
    pronunciation: "la-par-en-toe-sore-us",
    meaning: "'Lapparent's lizard'",
    diet: "herbivorous",
    length: 15, // in meters
    foundIn: ["Madagascar"]
  },
  {
    name: "Megalosaurus",
    image: "megalosaurus.png",
    period: "Jurassic",
    fullPeriod: "Mid Jurassic",
    yearsMya: { start: 168, end: 165 },
    pronunciation: "meg-ah-lo-sore-us",
    meaning: "'great lizard'",
    diet: "carnivorous",
    length: 9, // in meters
    foundIn: ["England"]
  },
  {
    name: "Monolophosaurus",
    image: "monolophosaurus.png",
    period: "Jurassic",
    fullPeriod: "Mid Jurassic",
    yearsMya: { start: 170, end: 165 },
    pronunciation: "mon-oh-loaf-oh-sore-us",
    meaning: "'single-crested lizard'",
    diet: "carnivorous",
    length: 5.5, // in meters
    foundIn: ["China"]
  },
  {
    name: "Nqwebasaurus",
    image: "nqwebasaurus.png",
    period: "Jurassic",
    fullPeriod: "Mid Jurassic",
    yearsMya: { start: 174, end: 164 },
    pronunciation: "NKW-web-ah-sore-us",
    meaning: "'Nqweba lizard'",
    diet: "omnivorous",
    length: 1, // in meters
    foundIn: ["South Africa"]
  },
  {
    name: "Omeisaurus",
    image: "omeisaurus.png",
    period: "Jurassic",
    fullPeriod: "Mid Jurassic",
    yearsMya: { start: 174, end: 161 },
    pronunciation: "OH-mee-sore-us",
    meaning: "'Omei lizard'",
    diet: "herbivorous",
    length: 20, // in meters
    foundIn: ["China"]
  },
  {
    name: "Patagosaurus",
    image: "patagosaurus.png",
    period: "Jurassic",
    fullPeriod: "Mid Jurassic",
    yearsMya: { start: 165, end: 161 },
    pronunciation: "pat-uh-go-sore-us",
    meaning: "'Patagonia lizard'",
    diet: "herbivorous",
    length: 18, // in meters
    foundIn: ["Argentina"]
  },
  {
    name: "Podokesaurus",
    image: "podokesaurus.png",
    period: "Jurassic",
    fullPeriod: "Mid Jurassic",
    yearsMya: { start: 174, end: 164 },
    pronunciation: "po-doe-kee-sore-us",
    meaning: "'swift-footed lizard'",
    diet: "carnivorous",
    length: 1, // in meters
    foundIn: ["USA"]
  },
  {
    name: "Poekilopleuron",
    image: "poekilopleuron.png",
    period: "Jurassic",
    fullPeriod: "Mid Jurassic",
    yearsMya: { start: 174, end: 164 },
    pronunciation: "poy-kil-oh-PLOOR-on",
    meaning: "'varied ribs'",
    diet: "carnivorous",
    length: 9, // in meters
    foundIn: ["France"]
  },
  {
    name: "Proceratosaurus",
    image: "proceratosaurus.png",
    period: "Jurassic",
    fullPeriod: "Mid Jurassic",
    yearsMya: { start: 168, end: 166 },
    pronunciation: "pro-ser-ah-toe-sore-us",
    meaning: "'before Ceratosaurus'",
    diet: "carnivorous",
    length: 3, // in meters
    foundIn: ["England"]
  },
  {
    name: "Rhoetosaurus",
    image: "rhoetosaurus.png",
    period: "Jurassic",
    fullPeriod: "Mid Jurassic",
    yearsMya: { start: 177, end: 169 },
    pronunciation: "reet-oh-sore-us",
    meaning: "'Rhoetos lizard'",
    diet: "herbivorous",
    length: 15, // in meters
    foundIn: ["Australia"]
  },
  {
    name: "Segisaurus",
    image: "segisaurus.png",
    period: "Jurassic",
    fullPeriod: "Mid Jurassic",
    yearsMya: { start: 174, end: 164 },
    pronunciation: "seg-ee-sore-us",
    meaning: "'Segi Canyon lizard'",
    diet: "carnivorous",
    length: 1, // in meters
    foundIn: ["USA"]
  },
  {
    name: "Shunosaurus",
    image: "shunosaurus.png",
    period: "Jurassic",
    fullPeriod: "Mid Jurassic",
    yearsMya: { start: 174, end: 161 },
    pronunciation: "shoo-no-sore-us",
    meaning: "'Shu lizard'",
    diet: "herbivorous",
    length: 11, // in meters
    foundIn: ["China"]
  },
  {
    name: "Sinraptor",
    image: "sinraptor.png",
    period: "Jurassic",
    fullPeriod: "Mid Jurassic",
    yearsMya: { start: 160, end: 145 },
    pronunciation: "sin-rap-tor",
    meaning: "'Chinese thief'",
    diet: "carnivorous",
    length: 7.6, // in meters
    foundIn: ["China"]
  },
  {
    name: "Yandusaurus",
    image: "yandusaurus.png",
    period: "Jurassic",
    fullPeriod: "Mid Jurassic",
    yearsMya: { start: 169, end: 163 },
    pronunciation: "yan-doo-sore-us",
    meaning: "'Yandu lizard'",
    diet: "herbivorous",
    length: 3, // in meters
    foundIn: ["China"]
  },
  {
    name: "Yinlong",
    image: "yinlong.png",
    period: "Jurassic",
    fullPeriod: "Mid Jurassic",
    yearsMya: { start: 159, end: 154 },
    pronunciation: "yin-long",
    meaning: "'hidden dragon'",
    diet: "herbivorous",
    length: 1.2, // in meters
    foundIn: ["China"]
  },
  {
    name: "Yuanmousaurus",
    image: "yuanmousaurus.png",
    period: "Jurassic",
    fullPeriod: "Mid Jurassic",
    yearsMya: { start: 174, end: 161 },
    pronunciation: "yoo-an-mow-sore-us",
    meaning: "'Yuanmou lizard'",
    diet: "herbivorous",
    length: 17, // in meters
    foundIn: ["China"]
  },
  {
    name: "Agilisaurus",
    image: "agilisaurus.png",
    period: "Jurassic",
    fullPeriod: "Late Jurassic",
    yearsMya: { start: 164, end: 145 },
    pronunciation: "ah-GIL-ee-sore-us",
    meaning: "'agile lizard'",
    diet: "herbivorous",
    length: 1.2, // in meters
    foundIn: ["China"]
  },
  {
    name: "Allosaurus",
    image: "allosaurus.png",
    period: "Jurassic",
    fullPeriod: "Late Jurassic",
    yearsMya: { start: 155, end: 145 },
    pronunciation: "AL-oh-sore-us",
    meaning: "'different lizard'",
    diet: "carnivorous",
    length: 12, // in meters
    foundIn: ["USA", "Portugal"]
  },
  {
    name: "Anchiornis",
    image: "anchiornis.png",
    period: "Jurassic",
    fullPeriod: "Late Jurassic",
    yearsMya: { start: 160, end: 155 },
    pronunciation: "an-kee-OR-nis",
    meaning: "'near bird'",
    diet: "carnivorous",
    length: 0.35, // in meters
    foundIn: ["China"]
  },
  {
    name: "Apatosaurus",
    image: "apatosaurus.png",
    period: "Jurassic",
    fullPeriod: "Late Jurassic",
    yearsMya: { start: 152, end: 145 },
    pronunciation: "ah-PAT-oh-sore-us",
    meaning: "'deceptive lizard'",
    diet: "herbivorous",
    length: 21, // in meters
    foundIn: ["USA"]
  },
  {
    name: "Archaeopteryx",
    image: "archaeopteryx.png",
    period: "Jurassic",
    fullPeriod: "Late Jurassic",
    yearsMya: { start: 150, end: 145 },
    pronunciation: "ar-kee-OP-ter-iks",
    meaning: "'ancient wing'",
    diet: "carnivorous",
    length: 0.5, // in meters
    foundIn: ["Germany"]
  },
  {
    name: "Barosaurus",
    image: "barosaurus.png",
    period: "Jurassic",
    fullPeriod: "Late Jurassic",
    yearsMya: { start: 155, end: 150 },
    pronunciation: "BAR-oh-sore-us",
    meaning: "'heavy lizard'",
    diet: "herbivorous",
    length: 26, // in meters
    foundIn: ["USA", "Tanzania"]
  },
  {
    name: "Brachiosaurus",
    image: "brachiosaurus.png",
    period: "Jurassic",
    fullPeriod: "Late Jurassic",
    yearsMya: { start: 154, end: 153 },
    pronunciation: "BRAK-ee-oh-sore-us",
    meaning: "'arm lizard'",
    diet: "herbivorous",
    length: 25, // in meters
    foundIn: ["USA", "Algeria", "Portugal"]
  },
  {
    name: "Camarasaurus",
    image: "camarasaurus.png",
    period: "Jurassic",
    fullPeriod: "Late Jurassic",
    yearsMya: { start: 155, end: 145 },
    pronunciation: "kam-ah-rah-SORE-us",
    meaning: "'chambered lizard'",
    diet: "herbivorous",
    length: 18, // in meters
    foundIn: ["USA"]
  },
  {
    name: "Camptosaurus",
    image: "camptosaurus.png",
    period: "Jurassic",
    fullPeriod: "Late Jurassic",
    yearsMya: { start: 156, end: 145 },
    pronunciation: "KAMP-toh-sore-us",
    meaning: "'bent lizard'",
    diet: "herbivorous",
    length: 7, // in meters
    foundIn: ["USA", "England"]
  },
  {
    name: "Ceratosaurus",
    image: "ceratosaurus.png",
    period: "Jurassic",
    fullPeriod: "Late Jurassic",
    yearsMya: { start: 153, end: 148 },
    pronunciation: "seh-RAT-oh-SORE-us",
    meaning: "'horned lizard'",
    diet: "carnivorous",
    length: 6, // in meters
    foundIn: ["USA", "Portugal", "Tanzania"]
  },
  {
    name: "Chaoyangsaurus",
    image: "chaoyangsaurus.png",
    period: "Jurassic",
    fullPeriod: "Late Jurassic",
    yearsMya: { start: 150, end: 145 },
    pronunciation: "chow-YANG-sore-us",
    meaning: "'Chaoyang lizard'",
    diet: "herbivorous",
    length: 1, // in meters
    foundIn: ["China"]
  },
  {
    name: "Chinshakiangosaurus",
    image: "chinshakiangosaurus.png",
    period: "Jurassic",
    fullPeriod: "Late Jurassic",
    yearsMya: { start: 160, end: 155 },
    pronunciation: "chin-shah-kee-ang-oh-SORE-us",
    meaning: "'Chinshakiang lizard'",
    diet: "herbivorous",
    length: 9, // in meters
    foundIn: ["China"]
  },
  {
    name: "Chungkingosaurus",
    image: "chungkingosaurus.png",
    period: "Jurassic",
    fullPeriod: "Late Jurassic",
    yearsMya: { start: 160, end: 155 },
    pronunciation: "chung-king-oh-SORE-us",
    meaning: "'Chongqing lizard'",
    diet: "herbivorous",
    length: 4, // in meters
    foundIn: ["China"]
  },
  {
    name: "Coelurus",
    image: "coelurus.png",
    period: "Jurassic",
    fullPeriod: "Late Jurassic",
    yearsMya: { start: 153, end: 150 },
    pronunciation: "see-LOOR-us",
    meaning: "'hollow tail'",
    diet: "carnivorous",
    length: 2, // in meters
    foundIn: ["USA"]
  },
  {
    name: "Compsognathus",
    image: "compsognathus.png",
    period: "Jurassic",
    fullPeriod: "Late Jurassic",
    yearsMya: { start: 150, end: 145 },
    pronunciation: "komp-sog-NAY-thus",
    meaning: "'elegant jaw'",
    diet: "carnivorous",
    length: 1, // in meters
    foundIn: ["Germany", "France"]
  },
  {
    name: "Dacentrurus",
    image: "dacentrurus.png",
    period: "Jurassic",
    fullPeriod: "Late Jurassic",
    yearsMya: { start: 154, end: 150 },
    pronunciation: "da-sen-TROO-rus",
    meaning: "'tail full of points'",
    diet: "herbivorous",
    length: 8, // in meters
    foundIn: ["England", "France", "Spain"]
  },
  {
    name: "Dicraeosaurus",
    image: "dicraeosaurus.png",
    period: "Jurassic",
    fullPeriod: "Late Jurassic",
    yearsMya: { start: 155, end: 150 },
    pronunciation: "di-KRAY-oh-sore-us",
    meaning: "'bifurcated lizard'",
    diet: "herbivorous",
    length: 12, // in meters
    foundIn: ["Tanzania"]
  },
  {
    name: "Diplodocus",
    image: "diplodocus.png",
    period: "Jurassic",
    fullPeriod: "Late Jurassic",
    yearsMya: { start: 154, end: 150 },
    pronunciation: "dip-LOW-doh-kus",
    meaning: "'double beam'",
    diet: "herbivorous",
    length: 27, // in meters
    foundIn: ["USA"]
  },
  {
    name: "Dryosaurus",
    image: "dryosaurus.png",
    period: "Jurassic",
    fullPeriod: "Late Jurassic",
    yearsMya: { start: 155, end: 145 },
    pronunciation: "dry-oh-SORE-us",
    meaning: "'tree lizard'",
    diet: "herbivorous",
    length: 3, // in meters
    foundIn: ["USA", "Tanzania"]
  },
  {
    name: "Dubreuillosaurus",
    image: "dubreuillosaurus.png",
    period: "Jurassic",
    fullPeriod: "Late Jurassic",
    yearsMya: { start: 164, end: 161 },
    pronunciation: "doo-BRAY-lee-oh-SORE-us",
    meaning: "'Dubreuil's lizard'",
    diet: "carnivorous",
    length: 5, // in meters
    foundIn: ["France"]
  },
  {
    name: "Elaphrosaurus",
    image: "elaphrosaurus.png",
    period: "Jurassic",
    fullPeriod: "Late Jurassic",
    yearsMya: { start: 154, end: 150 },
    pronunciation: "el-af-roh-SORE-us",
    meaning: "'lightweight lizard'",
    diet: "carnivorous",
    length: 6.2, // in meters
    foundIn: ["Tanzania"]
  },
  {
    name: "Euhelopus",
    image: "euhelopus.png",
    period: "Jurassic",
    fullPeriod: "Late Jurassic",
    yearsMya: { start: 160, end: 155 },
    pronunciation: "yoo-HEH-loh-pus",
    meaning: "'good marsh foot'",
    diet: "herbivorous",
    length: 15, // in meters
    foundIn: ["China"]
  },
  {
    name: "Europasaurus",
    image: "europasaurus.png",
    period: "Jurassic",
    fullPeriod: "Late Jurassic",
    yearsMya: { start: 154, end: 151 },
    pronunciation: "yoo-ROH-puh-sore-us",
    meaning: "'European lizard'",
    diet: "herbivorous",
    length: 6, // in meters
    foundIn: ["Germany"]
  },
  {
    name: "Gargoyleosaurus",
    image: "gargoyleosaurus.png",
    period: "Jurassic",
    fullPeriod: "Late Jurassic",
    yearsMya: { start: 155, end: 150 },
    pronunciation: "gar-GOY-lee-oh-SORE-us",
    meaning: "'gargoyle lizard'",
    diet: "herbivorous",
    length: 3, // in meters
    foundIn: ["USA"]
  },
  {
    name: "Giraffatitan",
    image: "giraffatitan.png",
    period: "Jurassic",
    fullPeriod: "Late Jurassic",
    yearsMya: { start: 150, end: 145 },
    pronunciation: "ji-RAF-uh-TY-tan",
    meaning: "'giant giraffe'",
    diet: "herbivorous",
    length: 22, // in meters
    foundIn: ["Tanzania"]
  },
  {
    name: "Guanlong",
    image: "guanlong.png",
    period: "Jurassic",
    fullPeriod: "Late Jurassic",
    yearsMya: { start: 160, end: 155 },
    pronunciation: "gwan-LONG",
    meaning: "'crowned dragon'",
    diet: "carnivorous",
    length: 3, // in meters
    foundIn: ["China"]
  },
  {
    name: "Haplocanthosaurus",
    image: "haplocanthosaurus.png",
    period: "Jurassic",
    fullPeriod: "Late Jurassic",
    yearsMya: { start: 155, end: 152 },
    pronunciation: "hap-lo-KAN-tho-SORE-us",
    meaning: "'simple spined lizard'",
    diet: "herbivorous",
    length: 14, // in meters
    foundIn: ["USA"]
  },
  {
    name: "Hesperosaurus",
    image: "hesperosaurus.png",
    period: "Jurassic",
    fullPeriod: "Late Jurassic",
    yearsMya: { start: 156, end: 144 },
    pronunciation: "HES-per-oh-SORE-us",
    meaning: "'western lizard'",
    diet: "herbivorous",
    length: 6.5, // in meters
    foundIn: ["USA"]
  },
  {
    name: "Janenschia",
    image: "janenschia.png",
    period: "Jurassic",
    fullPeriod: "Late Jurassic",
    yearsMya: { start: 155, end: 150 },
    pronunciation: "yah-NEN-shia",
    meaning: "'Janensch's lizard'",
    diet: "herbivorous",
    length: 15, // in meters
    foundIn: ["Tanzania"]
  },
  {
    name: "Juravenator",
    image: "juravenator.png",
    period: "Jurassic",
    fullPeriod: "Late Jurassic",
    yearsMya: { start: 151, end: 146 },
    pronunciation: "yoo-rah-ven-AY-tor",
    meaning: "'Jurassic hunter'",
    diet: "carnivorous",
    length: 0.75, // in meters
    foundIn: ["Germany"]
  },
  {
    name: "Kentrosaurus",
    image: "kentrosaurus.png",
    period: "Jurassic",
    fullPeriod: "Late Jurassic",
    yearsMya: { start: 155, end: 150 },
    pronunciation: "KEN-troh-SORE-us",
    meaning: "'pointed lizard'",
    diet: "herbivorous",
    length: 4.5, // in meters
    foundIn: ["Tanzania"]
  },
  {
    name: "Mamenchisaurus",
    image: "mamenchisaurus.png",
    period: "Jurassic",
    fullPeriod: "Late Jurassic",
    yearsMya: { start: 160, end: 145 },
    pronunciation: "ma-MEN-chi-SORE-us",
    meaning: "'Mamenxi lizard'",
    diet: "herbivorous",
    length: 22, // in meters
    foundIn: ["China"]
  },
  {
    name: "Marshosaurus",
    image: "marshosaurus.png",
    period: "Jurassic",
    fullPeriod: "Late Jurassic",
    yearsMya: { start: 155, end: 150 },
    pronunciation: "MARSH-oh-SORE-us",
    meaning: "'Marsh's lizard'",
    diet: "carnivorous",
    length: 4.5, // in meters
    foundIn: ["USA"]
  },
  {
    name: "Metriacanthosaurus",
    image: "metriacanthosaurus.png",
    period: "Jurassic",
    fullPeriod: "Late Jurassic",
    yearsMya: { start: 160, end: 155 },
    pronunciation: "meh-tree-ah-KAN-tho-SORE-us",
    meaning: "'moderate-spined lizard'",
    diet: "carnivorous",
    length: 8, // in meters
    foundIn: ["England"]
  },
  {
    name: "Ornitholestes",
    image: "ornitholestes.png",
    period: "Jurassic",
    fullPeriod: "Late Jurassic",
    yearsMya: { start: 156, end: 145 },
    pronunciation: "or-NITH-oh-LES-teez",
    meaning: "'bird robber'",
    diet: "carnivorous",
    length: 2, // in meters
    foundIn: ["USA"]
  },
  {
    name: "Othnielia",
    image: "othnielia.png",
    period: "Jurassic",
    fullPeriod: "Late Jurassic",
    yearsMya: { start: 156, end: 145 },
    pronunciation: "oth-NEE-lee-ah",
    meaning: "'Othniel's lizard'",
    diet: "herbivorous",
    length: 1.5, // in meters
    foundIn: ["USA"]
  },
  {
    name: "Piatnitzkysaurus",
    image: "piatnitzkysaurus.png",
    period: "Jurassic",
    fullPeriod: "Late Jurassic",
    yearsMya: { start: 165, end: 161 },
    pronunciation: "pee-aht-NEET-skee-SORE-us",
    meaning: "'Piatnitzky's lizard'",
    diet: "carnivorous",
    length: 5, // in meters
    foundIn: ["Argentina"]
  },
  {
    name: "Saurophaganax",
    image: "saurophaganax.png",
    period: "Jurassic",
    fullPeriod: "Late Jurassic",
    yearsMya: { start: 151, end: 145 },
    pronunciation: "sore-oh-FAG-an-aks",
    meaning: "'lizard-eating master'",
    diet: "carnivorous",
    length: 10.5, // in meters
    foundIn: ["USA"]
  },
  {
    name: "Stegosaurus",
    image: "stegosaurus.png",
    period: "Jurassic",
    fullPeriod: "Late Jurassic",
    yearsMya: { start: 155, end: 150 },
    pronunciation: "STEG-oh-SORE-us",
    meaning: "'roofed lizard'",
    diet: "herbivorous",
    length: 9, // in meters
    foundIn: ["USA"]
  },
  {
    name: "Torvosaurus",
    image: "torvosaurus.png",
    period: "Jurassic",
    fullPeriod: "Late Jurassic",
    yearsMya: { start: 153, end: 148 },
    pronunciation: "TOR-voh-SORE-us",
    meaning: "'savage lizard'",
    diet: "carnivorous",
    length: 10, // in meters
    foundIn: ["USA", "Portugal"]
  },
  {
    name: "Tuojiangosaurus",
    image: "tuojiangosaurus.png",
    period: "Jurassic",
    fullPeriod: "Late Jurassic",
    yearsMya: { start: 157, end: 152 },
    pronunciation: "TWOH-jyang-oh-SORE-us",
    meaning: "'Tuo River lizard'",
    diet: "herbivorous",
    length: 7, // in meters
    foundIn: ["China"]
  },
  {
    name: "Yangchuanosaurus",
    image: "yangchuanosaurus.png",
    period: "Jurassic",
    fullPeriod: "Late Jurassic",
    yearsMya: { start: 163, end: 157 },
    pronunciation: "yang-chwan-oh-SORE-us",
    meaning: "'Yangchuan lizard'",
    diet: "carnivorous",
    length: 10, // in meters
    foundIn: ["China"]
  },
  {
    name: "Yingshanosaurus",
    image: "yingshanosaurus.png",
    period: "Jurassic",
    fullPeriod: "Late Jurassic",
    yearsMya: { start: 160, end: 155 },
    pronunciation: "ying-shan-oh-SORE-us",
    meaning: "'Yingshan lizard'",
    diet: "herbivorous",
    length: 5, // in meters
    foundIn: ["China"]
  },
  {
    name: "Acrocanthosaurus",
    image: "acrocanthosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 125, end: 100 },
    pronunciation: "ak-ro-KAN-tho-SORE-us",
    meaning: "'high-spined lizard'",
    diet: "carnivorous",
    length: 11.5, // in meters
    foundIn: ["USA"]
  },
  {
    name: "Afrovenator",
    image: "afrovenator.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 136, end: 125 },
    pronunciation: "af-ro-ven-AY-tor",
    meaning: "'African hunter'",
    diet: "carnivorous",
    length: 8, // in meters
    foundIn: ["Niger"]
  },
  {
    name: "Amargasaurus",
    image: "amargasaurus.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 130, end: 125 },
    pronunciation: "ah-MAR-gah-SORE-us",
    meaning: "'La Amarga lizard'",
    diet: "herbivorous",
    length: 10, // in meters
    foundIn: ["Argentina"]
  },
  {
    name: "Aragosaurus",
    image: "aragosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 135, end: 130 },
    pronunciation: "ah-RAH-go-SORE-us",
    meaning: "'Aragon lizard'",
    diet: "herbivorous",
    length: 18, // in meters
    foundIn: ["Spain"]
  },
  {
    name: "Archaeoceratops",
    image: "archaeoceratops.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 125, end: 112 },
    pronunciation: "ar-kee-oh-SER-ah-tops",
    meaning: "'ancient horned face'",
    diet: "herbivorous",
    length: 1, // in meters
    foundIn: ["China"]
  },
  {
    name: "Atlascopcosaurus",
    image: "atlascopcosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 125, end: 112 },
    pronunciation: "at-las-KOP-ko-SORE-us",
    meaning: "'Atlas Copco lizard'",
    diet: "herbivorous",
    length: 2, // in meters
    foundIn: ["Australia"]
  },
  {
    name: "Austrosaurus",
    image: "austrosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 112, end: 105 },
    pronunciation: "AWS-troh-SORE-us",
    meaning: "'southern lizard'",
    diet: "herbivorous",
    length: 15, // in meters
    foundIn: ["Australia"]
  },
  {
    name: "Baryonyx",
    image: "baryonyx.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 130, end: 125 },
    pronunciation: "BAR-ee-ON-iks",
    meaning: "'heavy claw'",
    diet: "carnivorous",
    length: 9.5, // in meters
    foundIn: ["England"]
  },
  {
    name: "Becklespinax",
    image: "becklespinax.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 140, end: 130 },
    pronunciation: "BEK-ul-SPY-naks",
    meaning: "'Beckles' spine'",
    diet: "carnivorous",
    length: 6, // in meters
    foundIn: ["England"]
  },
  {
    name: "Beipiaosaurus",
    image: "beipiaosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 125, end: 120 },
    pronunciation: "BAY-pyow-SORE-us",
    meaning: "'Beipiao lizard'",
    diet: "herbivorous",
    length: 2.2, // in meters
    foundIn: ["China"]
  },
  {
    name: "Caudipteryx",
    image: "caudipteryx.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 125, end: 120 },
    pronunciation: "KAW-dip-TER-iks",
    meaning: "'tail feather'",
    diet: "omnivorous",
    length: 1, // in meters
    foundIn: ["China"]
  },
  {
    name: "Cedarpelta",
    image: "cedarpelta.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 116, end: 109 },
    pronunciation: "SEE-dar-PEL-tah",
    meaning: "'Cedar (Mountain) shield'",
    diet: "herbivorous",
    length: 7, // in meters
    foundIn: ["USA"]
  },
  {
    name: "Chubutisaurus",
    image: "chubutisaurus.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 112, end: 100 },
    pronunciation: "choo-BOO-tee-SORE-us",
    meaning: "'Chubut lizard'",
    diet: "herbivorous",
    length: 18, // in meters
    foundIn: ["Argentina"]
  },
  {
    name: "Concavenator",
    image: "concavenator.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 130, end: 125 },
    pronunciation: "kon-KAV-eh-NAY-tor",
    meaning: "'Cuenca hunter'",
    diet: "carnivorous",
    length: 6, // in meters
    foundIn: ["Spain"]
  },
  {
    name: "Confuciusornis",
    image: "confuciusornis.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 125, end: 120 },
    pronunciation: "kon-FYOO-shus-OR-nis",
    meaning: "'Confucius bird'",
    diet: "omnivorous",
    length: 0.5, // in meters
    foundIn: ["China"]
  },
  {
    name: "Deinonychus",
    image: "deinonychus.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 115, end: 108 },
    pronunciation: "die-NON-ih-kus",
    meaning: "'terrible claw'",
    diet: "carnivorous",
    length: 3, // in meters
    foundIn: ["USA"]
  },
  {
    name: "Eotyrannus",
    image: "eotyrannus.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 130, end: 125 },
    pronunciation: "ee-oh-ty-RAN-us",
    meaning: "'dawn tyrant'",
    diet: "carnivorous",
    length: 4, // in meters
    foundIn: ["England"]
  },
  {
    name: "Equijubus",
    image: "equijubus.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 125, end: 112 },
    pronunciation: "eck-wih-JOO-bus",
    meaning: "'horse mane'",
    diet: "herbivorous",
    length: 7, // in meters
    foundIn: ["China"]
  },
  {
    name: "Erketu",
    image: "erketu.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 130, end: 125 },
    pronunciation: "er-KEH-too",
    meaning: "named after Erketü, a Mongolian deity",
    diet: "herbivorous",
    length: 13, // in meters
    foundIn: ["Mongolia"]
  },
  {
    name: "Fukuiraptor",
    image: "fukuiraptor.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 125, end: 113 },
    pronunciation: "foo-KOO-ee-RAP-tor",
    meaning: "'Fukui thief'",
    diet: "carnivorous",
    length: 4.2, // in meters
    foundIn: ["Japan"]
  },
  {
    name: "Fukuisaurus",
    image: "fukuisaurus.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 127, end: 115 },
    pronunciation: "foo-KOO-ee-SORE-us",
    meaning: "'Fukui lizard'",
    diet: "herbivorous",
    length: 4.5, // in meters
    foundIn: ["Japan"]
  },
  {
    name: "Gastonia",
    image: "gastonia.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 125, end: 100 },
    pronunciation: "gas-TOH-nee-ah",
    meaning: "named after Robert Gaston",
    diet: "herbivorous",
    length: 6, // in meters
    foundIn: ["USA"]
  },
  {
    name: "Giganotosaurus",
    image: "giganotosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 98, end: 97 },
    pronunciation: "jig-a-NO-toe-SORE-us",
    meaning: "'giant southern lizard'",
    diet: "carnivorous",
    length: 13, // in meters
    foundIn: ["Argentina"]
  },
  {
    name: "Gobisaurus",
    image: "gobisaurus.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 100, end: 89 },
    pronunciation: "GOH-bee-SORE-us",
    meaning: "'Gobi Desert lizard'",
    diet: "herbivorous",
    length: 6, // in meters
    foundIn: ["China", "Mongolia"]
  },
  {
    name: "Harpymimus",
    image: "harpymimus.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 110, end: 100 },
    pronunciation: "HAR-pee-MY-mus",
    meaning: "'Harpy mimic'",
    diet: "omnivorous",
    length: 2, // in meters
    foundIn: ["Mongolia"]
  },
  {
    name: "Hylaeosaurus",
    image: "hylaeosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 140, end: 130 },
    pronunciation: "hi-LAY-oh-SORE-us",
    meaning: "'woodland lizard'",
    diet: "herbivorous",
    length: 5, // in meters
    foundIn: ["England"]
  },
  {
    name: "Hypsilophodon",
    image: "hypsilophodon.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 125, end: 100 },
    pronunciation: "hip-sih-LOH-foh-don",
    meaning: "'high-crested tooth'",
    diet: "herbivorous",
    length: 2.3, // in meters
    foundIn: ["England", "Spain"]
  },
  {
    name: "Iguanodon",
    image: "iguanodon.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 140, end: 120 },
    pronunciation: "ig-WAH-noh-don",
    meaning: "'iguana tooth'",
    diet: "herbivorous",
    length: 10, // in meters
    foundIn: ["Belgium", "England", "Germany", "Spain", "USA"]
  },
  {
    name: "Irritator",
    image: "irritator.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 110, end: 100 },
    pronunciation: "ih-RIH-tay-tor",
    meaning: "named for the irritation of paleontologists due to fossil tampering",
    diet: "carnivorous",
    length: 8, // in meters
    foundIn: ["Brazil"]
  },
  {
    name: "Jinzhousaurus",
    image: "jinzhousaurus.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 125, end: 120 },
    pronunciation: "jin-ZHOH-SORE-us",
    meaning: "'Jinzhou lizard'",
    diet: "herbivorous",
    length: 5, // in meters
    foundIn: ["China"]
  },
  {
    name: "Jobaria",
    image: "jobaria.png",
    period: "Jurassic",
    fullPeriod: "Middle Jurassic",
    yearsMya: { start: 164, end: 161 },
    pronunciation: "joh-BAR-ee-uh",
    meaning: "named after the local mythical creature 'Jobar'",
    diet: "herbivorous",
    length: 18, // in meters
    foundIn: ["Niger"]
  },
  {
    name: "Leaellynasaura",
    image: "leaellynasaura.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 110, end: 100 },
    pronunciation: "lee-ELL-in-ah-SORE-uh",
    meaning: "named after Leaellyn Rich, daughter of paleontologists Tom and Patricia Rich",
    diet: "herbivorous",
    length: 2, // in meters
    foundIn: ["Australia"]
  },
  {
    name: "Liaoceratops",
    image: "liaoceratops.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 125, end: 120 },
    pronunciation: "lee-ow-SAIR-ah-tops",
    meaning: "'Liao horned face'",
    diet: "herbivorous",
    length: 1, // in meters
    foundIn: ["China"]
  },
  {
    name: "Ligabuesaurus",
    image: "ligabuesaurus.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 112, end: 100 },
    pronunciation: "lee-gah-boo-AY-sore-us",
    meaning: "named after Italian explorer Giancarlo Ligabue",
    diet: "herbivorous",
    length: 15, // in meters
    foundIn: ["Argentina"]
  },
  {
    name: "Lurdusaurus",
    image: "lurdusaurus.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 121, end: 112 },
    pronunciation: "lur-doo-SORE-us",
    meaning: "'heavy lizard'",
    diet: "herbivorous",
    length: 9, // in meters
    foundIn: ["Niger"]
  },
  {
    name: "Malawisaurus",
    image: "malawisaurus.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 121, end: 112 },
    pronunciation: "mah-LAH-wee-SORE-us",
    meaning: "'Malawi lizard'",
    diet: "herbivorous",
    length: 16, // in meters
    foundIn: ["Malawi"]
  },
  {
    name: "Microraptor",
    image: "microraptor.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 120, end: 110 },
    pronunciation: "MY-kroh-RAP-tor",
    meaning: "'small thief'",
    diet: "carnivorous",
    length: 0.77, // in meters
    foundIn: ["China"]
  },
  {
    name: "Minmi",
    image: "minmi.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 119, end: 113 },
    pronunciation: "MIN-my",
    meaning: "named after Minmi Crossing, Australia",
    diet: "herbivorous",
    length: 3, // in meters
    foundIn: ["Australia"]
  },
  {
    name: "Muttaburrasaurus",
    image: "muttaburrasaurus.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 112, end: 100 },
    pronunciation: "MUT-ah-bur-ah-SORE-us",
    meaning: "'Muttaburra lizard'",
    diet: "herbivorous",
    length: 8, // in meters
    foundIn: ["Australia"]
  },
  {
    name: "Neovenator",
    image: "neovenator.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 130, end: 125 },
    pronunciation: "nee-oh-ven-AY-tor",
    meaning: "'new hunter'",
    diet: "carnivorous",
    length: 7.6, // in meters
    foundIn: ["England"]
  },
  {
    name: "Nigersaurus",
    image: "nigersaurus.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 115, end: 105 },
    pronunciation: "nee-ZHER-sore-us",
    meaning: "'Niger lizard'",
    diet: "herbivorous",
    length: 9, // in meters
    foundIn: ["Niger"]
  },
  {
    name: "Nodosaurus",
    image: "nodosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 112, end: 98 },
    pronunciation: "noh-doh-sore-us",
    meaning: "'knobbed lizard'",
    diet: "herbivorous",
    length: 5.5, // in meters
    foundIn: ["USA"]
  },
  {
    name: "Ouranosaurus",
    image: "ouranosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 125, end: 112 },
    pronunciation: "oo-RAH-no-sore-us",
    meaning: "'brave lizard'",
    diet: "herbivorous",
    length: 7, // in meters
    foundIn: ["Niger"]
  },
  {
    name: "Patagotitan",
    image: "patagotitan.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 100, end: 95 },
    pronunciation: "pat-uh-go-tie-tan",
    meaning: "'Patagonian titan'",
    diet: "herbivorous",
    length: 37, // in meters
    foundIn: ["Argentina"]
  },
  {
    name: "Pelecanimimus",
    image: "pelecanimimus.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 130, end: 125 },
    pronunciation: "pel-eh-kan-ih-mim-us",
    meaning: "'pelican mimic'",
    diet: "omnivorous",
    length: 2.5, // in meters
    foundIn: ["Spain"]
  },
  {
    name: "Pelorosaurus",
    image: "pelorosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 140, end: 130 },
    pronunciation: "peh-loh-roh-sore-us",
    meaning: "'monstrous lizard'",
    diet: "herbivorous",
    length: 16, // in meters
    foundIn: ["England"]
  },
  {
    name: "Polacanthus",
    image: "polacanthus.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 140, end: 130 },
    pronunciation: "poh-luh-kan-thus",
    meaning: "'many spines'",
    diet: "herbivorous",
    length: 5, // in meters
    foundIn: ["England"]
  },
  {
    name: "Probactrosaurus",
    image: "probactrosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 112, end: 100 },
    pronunciation: "proh-bak-troh-sore-us",
    meaning: "'before Bactrosaurus'",
    diet: "herbivorous",
    length: 5.5, // in meters
    foundIn: ["China"]
  },
  {
    name: "Protarchaeopteryx",
    image: "protarchaeopteryx.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 125, end: 120 },
    pronunciation: "proh-tar-kee-op-ter-iks",
    meaning: "'before Archaeopteryx'",
    diet: "omnivorous",
    length: 1, // in meters
    foundIn: ["China"]
  },
  {
    name: "Psittacosaurus",
    image: "psittacosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 125, end: 100 },
    pronunciation: "sit-ak-oh-sore-us",
    meaning: "'parrot lizard'",
    diet: "herbivorous",
    length: 2, // in meters
    foundIn: ["China", "Mongolia", "Russia"]
  },
  {
    name: "Rebbachisaurus",
    image: "rebbachisaurus.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 112, end: 100 },
    pronunciation: "reb-ak-ee-sore-us",
    meaning: "'Rebbach lizard'",
    diet: "herbivorous",
    length: 14, // in meters
    foundIn: ["Morocco", "Niger"]
  },
  {
    name: "Sauropelta",
    image: "sauropelta.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 115, end: 110 },
    pronunciation: "sore-oh-PEL-tah",
    meaning: "'lizard shield'",
    diet: "herbivorous",
    length: 5.2, // in meters
    foundIn: ["USA"]
  },
  {
    name: "Shamosaurus",
    image: "shamosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 125, end: 100 },
    pronunciation: "SHAH-moh-SORE-us",
    meaning: "'Gobi Desert lizard'",
    diet: "herbivorous",
    length: 6, // in meters
    foundIn: ["Mongolia"]
  },
  {
    name: "Shanag",
    image: "shanag.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 130, end: 125 },
    pronunciation: "SHAH-nag",
    meaning: "named after the 'shanag' dancers of Tibetan culture",
    diet: "carnivorous",
    length: 1.5, // in meters
    foundIn: ["Mongolia"]
  },
  {
    name: "Silvisaurus",
    image: "silvisaurus.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 113, end: 100 },
    pronunciation: "SILL-vee-SORE-us",
    meaning: "'forest lizard'",
    diet: "herbivorous",
    length: 4, // in meters
    foundIn: ["USA"]
  },
  {
    name: "Sinocalliopteryx",
    image: "sinocalliopteryx.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 125, end: 120 },
    pronunciation: "SY-noh-KAL-ee-OP-ter-iks",
    meaning: "'Chinese beautiful feather'",
    diet: "carnivorous",
    length: 2.37, // in meters
    foundIn: ["China"]
  },
  {
    name: "Sinornithosaurus",
    image: "sinornithosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 125, end: 120 },
    pronunciation: "SY-nor-NITH-oh-SORE-us",
    meaning: "'Chinese bird lizard'",
    diet: "carnivorous",
    length: 1.2, // in meters
    foundIn: ["China"]
  },
  {
    name: "Sinosauropteryx",
    image: "sinosauropteryx.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 125, end: 122 },
    pronunciation: "SY-noh-sore-OP-ter-iks",
    meaning: "'Chinese reptilian wing'",
    diet: "carnivorous",
    length: 1.07, // in meters
    foundIn: ["China"]
  },
  {
    name: "Sinovenator",
    image: "sinovenator.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 125, end: 122 },
    pronunciation: "SY-noh-ven-AY-tor",
    meaning: "'Chinese hunter'",
    diet: "carnivorous",
    length: 0.9, // in meters
    foundIn: ["China"]
  },
  {
    name: "Stenopelix",
    image: "stenopelix.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 140, end: 136 },
    pronunciation: "STEE-no-PEL-iks",
    meaning: "'narrow pelvis'",
    diet: "herbivorous",
    length: 1, // in meters
    foundIn: ["Germany"]
  },
  {
    name: "Suchomimus",
    image: "suchomimus.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 125, end: 112 },
    pronunciation: "SOO-koh-MY-mus",
    meaning: "'crocodile mimic'",
    diet: "carnivorous",
    length: 11, // in meters
    foundIn: ["Niger"]
  },
  {
    name: "Supersaurus",
    image: "supersaurus.png",
    period: "Jurassic",
    fullPeriod: "Late Jurassic",
    yearsMya: { start: 153, end: 148 },
    pronunciation: "SOO-per-SORE-us",
    meaning: "'super lizard'",
    diet: "herbivorous",
    length: 33, // in meters
    foundIn: ["USA"]
  },
  {
    name: "Tenontosaurus",
    image: "tenontosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 115, end: 108 },
    pronunciation: "ten-ON-toh-SORE-us",
    meaning: "'sinew lizard'",
    diet: "herbivorous",
    length: 6.5, // in meters
    foundIn: ["USA"]
  },
  {
    name: "Tyrannotitan",
    image: "tyrannotitan.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 121, end: 112 },
    pronunciation: "tie-RAN-oh-TIE-tan",
    meaning: "'tyrant titan'",
    diet: "carnivorous",
    length: 12, // in meters
    foundIn: ["Argentina"]
  },
  {
    name: "Utahraptor",
    image: "utahraptor.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 126, end: 121 },
    pronunciation: "YOO-tah-RAP-tor",
    meaning: "'Utah thief'",
    diet: "carnivorous",
    length: 5.5, // in meters
    foundIn: ["USA"]
  },
  {
    name: "Valdosaurus",
    image: "valdosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 140, end: 132 },
    pronunciation: "VAL-doe-SORE-us",
    meaning: "'Weald lizard'",
    diet: "herbivorous",
    length: 4, // in meters
    foundIn: ["England"]
  },
  {
    name: "Yutyrannus",
    image: "yutyrannus.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 125, end: 121 },
    pronunciation: "yoo-tie-RAN-us",
    meaning: "'feathered tyrant'",
    diet: "carnivorous",
    length: 9, // in meters
    foundIn: ["China"]
  },
  {
    name: "Zephyrosaurus",
    image: "zephyrosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Early Cretaceous",
    yearsMya: { start: 115, end: 110 },
    pronunciation: "ZEF-ih-roh-SORE-us",
    meaning: "'west wind lizard'",
    diet: "herbivorous",
    length: 1.8, // in meters
    foundIn: ["USA"]
  },
  {
    name: "Abelisaurus",
    image: "abelisaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 80, end: 70 },
    pronunciation: "ah-BELL-ih-SORE-us",
    meaning: "'Abel's lizard'",
    diet: "carnivorous",
    length: 7.4, // in meters
    foundIn: ["Argentina"]
  },
  {
    name: "Achelousaurus",
    image: "achelousaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 83.5, end: 70.6 },
    pronunciation: "ah-KELL-oo-oh-SORE-us",
    meaning: "'Achelous's lizard'",
    diet: "herbivorous",
    length: 6, // in meters
    foundIn: ["USA"]
  },
  {
    name: "Achillobator",
    image: "achillobator.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 98, end: 83 },
    pronunciation: "ah-KILL-oh-BAY-tor",
    meaning: "'Achilles hero'",
    diet: "carnivorous",
    length: 5, // in meters
    foundIn: ["Mongolia"]
  },
  {
    name: "Aegyptosaurus",
    image: "aegyptosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 95, end: 89 },
    pronunciation: "ee-JIP-toe-SORE-us",
    meaning: "'Egyptian lizard'",
    diet: "herbivorous",
    length: 15, // in meters
    foundIn: ["Egypt", "Niger"]
  },
  {
    name: "Alamosaurus",
    image: "alamosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 70, end: 66 },
    pronunciation: "AL-ah-moe-SORE-us",
    meaning: "'Ojo Alamo lizard'",
    diet: "herbivorous",
    length: 21, // in meters
    foundIn: ["USA"]
  },
  {
    name: "Albertaceratops",
    image: "albertaceratops.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 83.5, end: 70.6 },
    pronunciation: "al-BER-tah-SAIR-ah-tops",
    meaning: "'Alberta horned face'",
    diet: "herbivorous",
    length: 6, // in meters
    foundIn: ["Canada", "USA"]
  },
  {
    name: "Albertosaurus",
    image: "albertosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 70, end: 66 },
    pronunciation: "al-BER-toe-SORE-us",
    meaning: "'Alberta lizard'",
    diet: "carnivorous",
    length: 9, // in meters
    foundIn: ["Canada", "USA"]
  },
  {
    name: "Alectrosaurus",
    image: "alectrosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 83, end: 70 },
    pronunciation: "ah-LEK-troh-SORE-us",
    meaning: "'unmarried lizard'",
    diet: "carnivorous",
    length: 5, // in meters
    foundIn: ["China", "Mongolia"]
  },
  {
    name: "Alioramus",
    image: "alioramus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 70, end: 66 },
    pronunciation: "AL-ee-oh-RAY-mus",
    meaning: "'other branch'",
    diet: "carnivorous",
    length: 6, // in meters
    foundIn: ["Mongolia"]
  },
  {
    name: "Alvarezsaurus",
    image: "alvarezsaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 86.3, end: 83.6 },
    pronunciation: "al-VAR-ehz-SORE-us",
    meaning: "'Álvarez's lizard'",
    diet: "carnivorous",
    length: 2, // in meters
    foundIn: ["Argentina"]
  },
  {
    name: "Ampelosaurus",
    image: "ampelosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 70, end: 66 },
    pronunciation: "AM-pel-oh-SORE-us",
    meaning: "'vineyard lizard'",
    diet: "herbivorous",
    length: 15, // in meters
    foundIn: ["France"]
  },
  {
    name: "Anchiceratops",
    image: "anchiceratops.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 72, end: 71 },
    pronunciation: "AN-key-SAIR-ah-tops",
    meaning: "'near horned face'",
    diet: "herbivorous",
    length: 6, // in meters
    foundIn: ["Canada"]
  },
  {
    name: "Ankylosaurus",
    image: "ankylosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 68, end: 66 },
    pronunciation: "an-KY-loh-SORE-us",
    meaning: "'fused lizard'",
    diet: "herbivorous",
    length: 8, // in meters
    foundIn: ["USA", "Canada"]
  },
  {
    name: "Anserimimus",
    image: "anserimimus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 70, end: 66 },
    pronunciation: "AN-ser-ih-MY-mus",
    meaning: "'goose mimic'",
    diet: "omnivorous",
    length: 3, // in meters
    foundIn: ["Mongolia"]
  },
  {
    name: "Antarctosaurus",
    image: "antarctosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 83.6, end: 66 },
    pronunciation: "an-TARK-toh-SORE-us",
    meaning: "'southern lizard'",
    diet: "herbivorous",
    length: 17, // in meters
    foundIn: ["Argentina", "Brazil", "Uruguay"]
  },
  {
    name: "Aralosaurus",
    image: "aralosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 85, end: 70 },
    pronunciation: "ah-RAH-loh-SORE-us",
    meaning: "'Aral lizard'",
    diet: "herbivorous",
    length: 6, // in meters
    foundIn: ["Kazakhstan"]
  },
  {
    name: "Archaeornithomimus",
    image: "archaeornithomimus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 93, end: 89 },
    pronunciation: "AR-kee-or-NITH-oh-MY-mus",
    meaning: "'ancient bird mimic'",
    diet: "omnivorous",
    length: 3.3, // in meters
    foundIn: ["China", "Mongolia"]
  },
  {
    name: "Argentinosaurus",
    image: "argentinosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 96, end: 92 },
    pronunciation: "ar-JEN-tee-noh-SORE-us",
    meaning: "'Argentina lizard'",
    diet: "herbivorous",
    length: 30, // in meters
    foundIn: ["Argentina"]
  },
  {
    name: "Arrhinoceratops",
    image: "arrhinoceratops.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 72, end: 68 },
    pronunciation: "a-RYE-no-SEH-rah-tops",
    meaning: "'no nose-horned face'",
    diet: "herbivorous",
    length: 6, // in meters
    foundIn: ["Canada"]
  },
  {
    name: "Atrociraptor",
    image: "atrociraptor.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 68, end: 66 },
    pronunciation: "ah-TROH-see-RAP-tor",
    meaning: "'savage thief'",
    diet: "carnivorous",
    length: 2, // in meters
    foundIn: ["Canada"]
  },
  {
    name: "Aucasaurus",
    image: "aucasaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 85, end: 70 },
    pronunciation: "AW-kah-SORE-us",
    meaning: "'Auca lizard'",
    diet: "carnivorous",
    length: 5.5, // in meters
    foundIn: ["Argentina"]
  },
  {
    name: "Avaceratops",
    image: "avaceratops.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 75, end: 71 },
    pronunciation: "AY-vah-SEH-rah-tops",
    meaning: "'Ava's horned face'",
    diet: "herbivorous",
    length: 2.5, // in meters
    foundIn: ["USA"]
  },
  {
    name: "Avimimus",
    image: "avimimus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 85, end: 70 },
    pronunciation: "AY-vee-MY-mus",
    meaning: "'bird mimic'",
    diet: "omnivorous",
    length: 1.5, // in meters
    foundIn: ["Mongolia"]
  },
  {
    name: "Bactrosaurus",
    image: "bactrosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 97.5, end: 85.8 },
    pronunciation: "BAK-troh-SORE-us",
    meaning: "'club lizard'",
    diet: "herbivorous",
    length: 6, // in meters
    foundIn: ["China", "Mongolia"]
  },
  {
    name: "Bagaceratops",
    image: "bagaceratops.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 85, end: 70 },
    pronunciation: "BAH-gah-SEH-rah-tops",
    meaning: "'small horned face'",
    diet: "herbivorous",
    length: 1, // in meters
    foundIn: ["Mongolia"]
  },
  {
    name: "Bambiraptor",
    image: "bambiraptor.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 75, end: 72 },
    pronunciation: "BAM-bee-RAP-tor",
    meaning: "'Bambi thief'",
    diet: "carnivorous",
    length: 1, // in meters
    foundIn: ["USA"]
  },
  {
    name: "Borogovia",
    image: "borogovia.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 85, end: 70 },
    pronunciation: "BOR-oh-GOH-vee-ah",
    meaning: "named after the 'borogoves' from Lewis Carroll's poem 'Jabberwocky'",
    diet: "carnivorous",
    length: 2, // in meters
    foundIn: ["Mongolia"]
  },
  {
    name: "Brachylophosaurus",
    image: "brachylophosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 81, end: 76 },
    pronunciation: "BRAK-ee-LOH-foh-SORE-us",
    meaning: "'short-crested lizard'",
    diet: "herbivorous",
    length: 9, // in meters
    foundIn: ["Canada", "USA"]
  },
  {
    name: "Buitreraptor",
    image: "buitreraptor.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 94, end: 89 },
    pronunciation: "BWEE-tree-RAP-tor",
    meaning: "'Buitr&eacute; thief'",
    diet: "carnivorous",
    length: 1.5, // in meters
    foundIn: ["Argentina"]
  },
  {
    name: "Carcharodontosaurus",
    image: "carcharodontosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 100, end: 93 },
    pronunciation: "kar-KAR-oh-DON-toh-SORE-us",
    meaning: "'shark-toothed lizard'",
    diet: "carnivorous",
    length: 13.5, // in meters
    foundIn: ["Morocco", "Egypt"]
  },
  {
    name: "Carnotaurus",
    image: "carnotaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 72, end: 69.9 },
    pronunciation: "KAR-noh-TAW-rus",
    meaning: "'meat-eating bull'",
    diet: "carnivorous",
    length: 8, // in meters
    foundIn: ["Argentina"]
  },
  {
    name: "Centrosaurus",
    image: "centrosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 76.5, end: 75.5 },
    pronunciation: "SEN-troh-SORE-us",
    meaning: "'pointed lizard'",
    diet: "herbivorous",
    length: 5.5, // in meters
    foundIn: ["Canada"]
  },
  {
    name: "Chasmosaurus",
    image: "chasmosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 76.5, end: 75.5 },
    pronunciation: "KAZ-mo-SORE-us",
    meaning: "'opening lizard'",
    diet: "herbivorous",
    length: 4.8, // in meters
    foundIn: ["Canada", "USA"]
  },
  {
    name: "Chirostenotes",
    image: "chirostenotes.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 76.5, end: 75 },
    pronunciation: "KY-roh-STEN-oh-teez",
    meaning: "'narrow-handed'",
    diet: "omnivorous",
    length: 2, // in meters
    foundIn: ["Canada"]
  },
  {
    name: "Citipati",
    image: "citipati.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 75, end: 71 },
    pronunciation: "chee-TEE-pah-tee",
    meaning: "'funeral pyre lord'",
    diet: "omnivorous",
    length: 3, // in meters
    foundIn: ["Mongolia"]
  },
  {
    name: "Conchoraptor",
    image: "conchoraptor.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 70, end: 66 },
    pronunciation: "KON-koh-RAP-tor",
    meaning: "'conch thief'",
    diet: "omnivorous",
    length: 1.5, // in meters
    foundIn: ["Mongolia"]
  },
  {
    name: "Corythosaurus",
    image: "corythosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 77, end: 75.7 },
    pronunciation: "ko-RITH-oh-SORE-us",
    meaning: "'helmet lizard'",
    diet: "herbivorous",
    length: 9, // in meters
    foundIn: ["Canada", "USA"]
  },
  {
    name: "Daspletosaurus",
    image: "daspletosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 77, end: 74 },
    pronunciation: "das-PLEE-toh-SORE-us",
    meaning: "'frightful lizard'",
    diet: "carnivorous",
    length: 9, // in meters
    foundIn: ["Canada", "USA"]
  },
  {
    name: "Deinocheirus",
    image: "deinocheirus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 70, end: 66 },
    pronunciation: "DYE-no-KYE-rus",
    meaning: "'terrible hand'",
    diet: "omnivorous",
    length: 11, // in meters
    foundIn: ["Mongolia"]
  },
  {
    name: "Deltadromeus",
    image: "deltadromeus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 95, end: 93 },
    pronunciation: "DEL-ta-DROH-mee-us",
    meaning: "'delta runner'",
    diet: "carnivorous",
    length: 8, // in meters
    foundIn: ["Morocco", "Egypt"]
  },
  {
    name: "Dracorex",
    image: "dracorex.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 66, end: 65 },
    pronunciation: "DRAY-ko-REX",
    meaning: "'dragon king'",
    diet: "herbivorous",
    length: 3, // in meters
    foundIn: ["USA"]
  },
  {
    name: "Dreadnoughtus",
    image: "dreadnoughtus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 77, end: 75 },
    pronunciation: "dred-NAW-tus",
    meaning: "'fears nothing'",
    diet: "herbivorous",
    length: 26, // in meters
    foundIn: ["Argentina"]
  },
  {
    name: "Dromaeosaurus",
    image: "dromaeosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 76.5, end: 74.8 },
    pronunciation: "dro-MAY-oh-SORE-us",
    meaning: "'running lizard'",
    diet: "carnivorous",
    length: 2, // in meters
    foundIn: ["Canada", "USA"]
  },
  {
    name: "Dromiceiomimus",
    image: "dromiceiomimus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 76.5, end: 74.8 },
    pronunciation: "dro-MEE-see-oh-MY-mus",
    meaning: "'emu mimic'",
    diet: "omnivorous",
    length: 3.5, // in meters
    foundIn: ["Canada"]
  },
  {
    name: "Dryptosaurus",
    image: "dryptosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 67, end: 66 },
    pronunciation: "DRIP-toh-SORE-us",
    meaning: "'tearing lizard'",
    diet: "carnivorous",
    length: 7.5, // in meters
    foundIn: ["USA"]
  },
  {
    name: "Edmontonia",
    image: "edmontonia.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 76.5, end: 69 },
    pronunciation: "ed-mon-TOH-nee-ah",
    meaning: "'from Edmonton'",
    diet: "herbivorous",
    length: 6.6, // in meters
    foundIn: ["Canada", "USA"]
  },
  {
    name: "Edmontosaurus",
    image: "edmontosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 73, end: 66 },
    pronunciation: "ed-MON-toh-SORE-us",
    meaning: "'Edmonton lizard'",
    diet: "herbivorous",
    length: 12, // in meters
    foundIn: ["Canada", "USA"]
  },
  {
    name: "Einiosaurus",
    image: "einiosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 74, end: 70 },
    pronunciation: "EYE-nee-oh-SORE-us",
    meaning: "'buffalo lizard'",
    diet: "herbivorous",
    length: 4.5, // in meters
    foundIn: ["USA"]
  },
  {
    name: "Eolambia",
    image: "eolambia.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 96, end: 89 },
    pronunciation: "EE-oh-LAM-bee-ah",
    meaning: "'dawn lambeosaurine'",
    diet: "herbivorous",
    length: 6, // in meters
    foundIn: ["USA"]
  },
  {
    name: "Erlikosaurus",
    image: "erlikosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 90, end: 85 },
    pronunciation: "ER-lee-koh-SORE-us",
    meaning: "'Erlik's lizard'",
    diet: "herbivorous",
    length: 6, // in meters
    foundIn: ["Mongolia"]
  },
  {
    name: "Euoplocephalus",
    image: "euoplocephalus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 76.5, end: 67 },
    pronunciation: "yoo-oh-ploh-SEF-ah-lus",
    meaning: "'well-armored head'",
    diet: "herbivorous",
    length: 6, // in meters
    foundIn: ["Canada"]
  },
  {
    name: "Gallimimus",
    image: "gallimimus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 70, end: 66 },
    pronunciation: "GAL-ih-MY-mus",
    meaning: "'chicken mimic'",
    diet: "omnivorous",
    length: 6, // in meters
    foundIn: ["Mongolia"]
  },
  {
    name: "Garudimimus",
    image: "garudimimus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 90, end: 85 },
    pronunciation: "gah-ROO-dee-MY-mus",
    meaning: "'Garuda mimic'",
    diet: "omnivorous",
    length: 4, // in meters
    foundIn: ["Mongolia"]
  },
  {
    name: "Gasparinisaura",
    image: "gasparinisaura.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 83.6, end: 70.6 },
    pronunciation: "gas-par-EE-nee-SORE-ah",
    meaning: "'Gasparini's lizard'",
    diet: "herbivorous",
    length: 1.5, // in meters
    foundIn: ["Argentina"]
  },
  {
    name: "Gigantoraptor",
    image: "gigantoraptor.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 85, end: 70 },
    pronunciation: "jy-GAN-toh-RAP-tor",
    meaning: "'giant thief'",
    diet: "omnivorous",
    length: 8, // in meters
    foundIn: ["China"]
  },
  {
    name: "Gilmoreosaurus",
    image: "gilmoreosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 85, end: 70 },
    pronunciation: "GIL-more-ee-oh-SORE-us",
    meaning: "'Gilmore's lizard'",
    diet: "herbivorous",
    length: 6, // in meters
    foundIn: ["China", "Mongolia"]
  },
  {
    name: "Gorgosaurus",
    image: "gorgosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 76.5, end: 75 },
    pronunciation: "GOR-go-SORE-us",
    meaning: "'dreadful lizard'",
    diet: "carnivorous",
    length: 8, // in meters
    foundIn: ["Canada", "USA"]
  },
  {
    name: "Goyocephale",
    image: "goyocephale.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 85, end: 70 },
    pronunciation: "GOH-yoh-SEF-ah-lee",
    meaning: "'decorated head'",
    diet: "herbivorous",
    length: 2, // in meters
    foundIn: ["Mongolia"]
  },
  {
    name: "Graciliceratops",
    image: "graciliceratops.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 85, end: 70 },
    pronunciation: "gra-SIL-ee-SEH-rah-tops",
    meaning: "'graceful horned face'",
    diet: "herbivorous",
    length: 1.5, // in meters
    foundIn: ["Mongolia"]
  },
  {
    name: "Gryposaurus",
    image: "gryposaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 83.5, end: 75.5 },
    pronunciation: "GRIP-oh-SORE-us",
    meaning: "'hooked-nose lizard'",
    diet: "herbivorous",
    length: 9, // in meters
    foundIn: ["Canada", "USA"]
  },
  {
    name: "Hadrosaurus",
    image: "hadrosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 80, end: 75 },
    pronunciation: "HAD-roh-SORE-us",
    meaning: "'bulky lizard'",
    diet: "herbivorous",
    length: 9, // in meters
    foundIn: ["USA"]
  },
  {
    name: "Heyuannia",
    image: "heyuannia.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 85, end: 70 },
    pronunciation: "hay-YOO-ahn-ee-ah",
    meaning: "'from Heyuan'",
    diet: "omnivorous",
    length: 1.5, // in meters
    foundIn: ["China"]
  },
  {
    name: "Homalocephale",
    image: "homalocephale.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 85, end: 70 },
    pronunciation: "ho-MAL-oh-SEF-ah-lee",
    meaning: "'even head'",
    diet: "herbivorous",
    length: 3, // in meters
    foundIn: ["Mongolia"]
  },
  {
    name: "Hypacrosaurus",
    image: "hypacrosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 76, end: 67 },
    pronunciation: "hy-PAK-roh-SORE-us",
    meaning: "'near the highest lizard'",
    diet: "herbivorous",
    length: 9, // in meters
    foundIn: ["Canada", "USA"]
  },
  {
    name: "Indosuchus",
    image: "indosuchus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 70, end: 66 },
    pronunciation: "IN-doh-SOO-kus",
    meaning: "'Indian crocodile'",
    diet: "carnivorous",
    length: 7, // in meters
    foundIn: ["India"]
  },
  {
    name: "Isisaurus",
    image: "isisaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 70, end: 66 },
    pronunciation: "EYE-see-SORE-us",
    meaning: "'Indian Statistical Institute lizard'",
    diet: "herbivorous",
    length: 18, // in meters
    foundIn: ["India"]
  },
  {
    name: "Jaxartosaurus",
    image: "jaxartosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 85, end: 70 },
    pronunciation: "jak-SAR-toh-SORE-us",
    meaning: "'Jaxartes lizard'",
    diet: "herbivorous",
    length: 5, // in meters
    foundIn: ["Kazakhstan", "China"]
  },
  {
    name: "Khaan",
    image: "khaan.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 85, end: 70 },
    pronunciation: "khan",
    meaning: "'lord'",
    diet: "omnivorous",
    length: 1.8, // in meters
    foundIn: ["Mongolia"]
  },
  {
    name: "Kritosaurus",
    image: "kritosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 74, end: 70 },
    pronunciation: "KRIT-oh-SORE-us",
    meaning: "'noble lizard'",
    diet: "herbivorous",
    length: 9, // in meters
    foundIn: ["USA"]
  },
  {
    name: "Lambeosaurus",
    image: "lambeosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 76.5, end: 75.5 },
    pronunciation: "LAM-bee-oh-SORE-us",
    meaning: "'Lambe's lizard'",
    diet: "herbivorous",
    length: 9.4, // in meters
    foundIn: ["Canada", "USA"]
  },
  {
    name: "Leptoceratops",
    image: "leptoceratops.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 68, end: 66 },
    pronunciation: "LEP-toh-SEH-rah-tops",
    meaning: "'slender horned face'",
    diet: "herbivorous",
    length: 2, // in meters
    foundIn: ["Canada", "USA"]
  },
  {
    name: "Lophorhothon",
    image: "lophorhothon.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 85, end: 70 },
    pronunciation: "LOH-foh-ROH-thon",
    meaning: "'crested nose'",
    diet: "herbivorous",
    length: 4.5, // in meters
    foundIn: ["USA"]
  },
  {
    name: "Magyarosaurus",
    image: "magyarosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 70, end: 66 },
    pronunciation: "MAG-yar-oh-SORE-us",
    meaning: "'Magyar lizard'",
    diet: "herbivorous",
    length: 6, // in meters
    foundIn: ["Romania"]
  },
  {
    name: "Maiasaura",
    image: "maiasaura.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 76.7, end: 75.6 },
    pronunciation: "MY-ah-SORE-ah",
    meaning: "'good mother lizard'",
    diet: "herbivorous",
    length: 9, // in meters
    foundIn: ["USA"]
  },
  {
    name: "Majungasaurus",
    image: "majungasaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 70, end: 66 },
    pronunciation: "ma-JUNG-ah-SORE-us",
    meaning: "'Majunga lizard'",
    diet: "carnivorous",
    length: 7, // in meters
    foundIn: ["Madagascar"]
  },
  {
    name: "Mapusaurus",
    image: "mapusaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 100, end: 94 },
    pronunciation: "MAH-poo-SORE-us",
    meaning: "'earth lizard'",
    diet: "carnivorous",
    length: 12.6, // in meters
    foundIn: ["Argentina"]
  },
  {
    name: "Masiakasaurus",
    image: "masiakasaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 70, end: 66 },
    pronunciation: "mah-SHEE-ah-kah-SORE-us",
    meaning: "'vicious lizard'",
    diet: "carnivorous",
    length: 2, // in meters
    foundIn: ["Madagascar"]
  },
  {
    name: "Maxakalisaurus",
    image: "maxakalisaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 80, end: 70 },
    pronunciation: "mah-SHAH-kah-lee-SORE-us",
    meaning: "'Maxakali lizard'",
    diet: "herbivorous",
    length: 13, // in meters
    foundIn: ["Brazil"]
  },
  {
    name: "Microceratus",
    image: "microceratus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 90, end: 70 },
    pronunciation: "MY-kroh-SEH-rah-tus",
    meaning: "'small horned'",
    diet: "herbivorous",
    length: 0.6, // in meters
    foundIn: ["Mongolia"]
  },
  {
    name: "Micropachycephalosaurus",
    image: "micropachycephalosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 85, end: 70 },
    pronunciation: "MY-kroh-PAK-ee-SEF-ah-loh-SORE-us",
    meaning: "'small thick-headed lizard'",
    diet: "herbivorous",
    length: 1, // in meters
    foundIn: ["China"]
  },
  {
    name: "Mononykus",
    image: "mononykus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 85, end: 70 },
    pronunciation: "MOH-noh-NYE-kus",
    meaning: "'one claw'",
    diet: "insectivorous",
    length: 1, // in meters
    foundIn: ["Mongolia"]
  },
  {
    name: "Nanshiungosaurus",
    image: "nanshiungosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 85, end: 70 },
    pronunciation: "nan-she-UNG-oh-SORE-us",
    meaning: "'Nanshiung lizard'",
    diet: "herbivorous",
    length: 4, // in meters
    foundIn: ["China"]
  },
  {
    name: "Nedoceratops",
    image: "nedoceratops.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 68, end: 66 },
    pronunciation: "NEE-doh-SEH-rah-tops",
    meaning: "'insufficient horned face'",
    diet: "herbivorous",
    length: 6, // in meters
    foundIn: ["USA"]
  },
  {
    name: "Nemegtosaurus",
    image: "nemegtosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 85, end: 70 },
    pronunciation: "neh-MEG-toh-SORE-us",
    meaning: "'Nemegt lizard'",
    diet: "herbivorous",
    length: 12, // in meters
    foundIn: ["Mongolia"]
  },
  {
    name: "Neuquensaurus",
    image: "neuquensaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 85, end: 70 },
    pronunciation: "new-KEN-SORE-us",
    meaning: "'Neuquén lizard'",
    diet: "herbivorous",
    length: 7, // in meters
    foundIn: ["Argentina"]
  },
  {
    name: "Nipponosaurus",
    image: "nipponosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 85, end: 70 },
    pronunciation: "nee-POH-noh-SORE-us",
    meaning: "'Japan lizard'",
    diet: "herbivorous",
    length: 8, // in meters
    foundIn: ["Japan"]
  },
  {
    name: "Noasaurus",
    image: "noasaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 85, end: 70 },
    pronunciation: "NOH-ah-SORE-us",
    meaning: "'Northwestern Argentina lizard'",
    diet: "carnivorous",
    length: 1.5, // in meters
    foundIn: ["Argentina"]
  },
  {
    name: "Nomingia",
    image: "nomingia.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 85, end: 70 },
    pronunciation: "noh-MIN-jee-ah",
    meaning: "'from Nomingiin Gobi'",
    diet: "omnivorous",
    length: 2, // in meters
    foundIn: ["Mongolia"]
  },
  {
    name: "Nothronychus",
    image: "nothronychus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 93, end: 89 },
    pronunciation: "noh-THROH-nih-kus",
    meaning: "'slothful claw'",
    diet: "herbivorous",
    length: 4.5, // in meters
    foundIn: ["USA"]
  },
  {
    name: "Opisthocoelicaudia",
    image: "opisthocoelicaudia.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 85, end: 70 },
    pronunciation: "oh-PIS-thoh-SEEL-ee-KAW-dee-ah",
    meaning: "'backward hollow tail'",
    diet: "herbivorous",
    length: 11, // in meters
    foundIn: ["Mongolia"]
  },
  {
    name: "Ornithomimus",
    image: "ornithomimus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 76.5, end: 66 },
    pronunciation: "or-NITH-oh-MY-mus",
    meaning: "'bird mimic'",
    diet: "omnivorous",
    length: 3.5, // in meters
    foundIn: ["Canada", "USA"]
  },
  {
    name: "Orodromeus",
    image: "orodromeus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 76.5, end: 75.5 },
    pronunciation: "or-oh-DROH-mee-us",
    meaning: "'mountain runner'",
    diet: "herbivorous",
    length: 2.5, // in meters
    foundIn: ["USA"]
  },
  {
    name: "Oryctodromeus",
    image: "oryctodromeus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 95, end: 94 },
    pronunciation: "or-IK-toh-DROH-mee-us",
    meaning: "'digging runner'",
    diet: "herbivorous",
    length: 2.1, // in meters
    foundIn: ["USA"]
  },
  {
    name: "Oviraptor",
    image: "oviraptor.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 85, end: 70 },
    pronunciation: "OH-vee-RAP-tor",
    meaning: "'egg thief'",
    diet: "omnivorous",
    length: 1.5, // in meters
    foundIn: ["Mongolia"]
  },
  {
    name: "Pachycephalosaurus",
    image: "pachycephalosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 76, end: 65 },
    pronunciation: "PAK-ee-SEF-ah-loh-SORE-us",
    meaning: "'thick-headed lizard'",
    diet: "herbivorous",
    length: 4.5, // in meters
    foundIn: ["USA"]
  },
  {
    name: "Pachyrhinosaurus",
    image: "pachyrhinosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 73, end: 69 },
    pronunciation: "PAK-ee-RY-noh-SORE-us",
    meaning: "'thick-nosed lizard'",
    diet: "herbivorous",
    length: 6, // in meters
    foundIn: ["Canada", "USA"]
  },
  {
    name: "Panoplosaurus",
    image: "panoplosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 76.5, end: 75.5 },
    pronunciation: "pan-OP-loh-SORE-us",
    meaning: "'fully armored lizard'",
    diet: "herbivorous",
    length: 7, // in meters
    foundIn: ["Canada"]
  },
  {
    name: "Paralititan",
    image: "paralititan.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 99, end: 93 },
    pronunciation: "PAR-ah-LIE-tih-tan",
    meaning: "'tidal giant'",
    diet: "herbivorous",
    length: 26, // in meters
    foundIn: ["Egypt"]
  },
  {
    name: "Parasaurolophus",
    image: "parasaurolophus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 76.5, end: 73 },
    pronunciation: "PAR-ah-SORE-OL-oh-fus",
    meaning: "'near crested lizard'",
    diet: "herbivorous",
    length: 10, // in meters
    foundIn: ["Canada", "USA"]
  },
  {
    name: "Parksosaurus",
    image: "parksosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 76.5, end: 75.5 },
    pronunciation: "PARK-soh-SORE-us",
    meaning: "'Parks' lizard'",
    diet: "herbivorous",
    length: 2.5, // in meters
    foundIn: ["Canada"]
  },
  {
    name: "Pentaceratops",
    image: "pentaceratops.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 76, end: 73 },
    pronunciation: "PEN-tah-SEH-rah-tops",
    meaning: "'five-horned face'",
    diet: "herbivorous",
    length: 6, // in meters
    foundIn: ["USA"]
  },
  {
    name: "Pinacosaurus",
    image: "pinacosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 80, end: 75 },
    pronunciation: "PIN-ah-ko-SORE-us",
    meaning: "'plank lizard'",
    diet: "herbivorous",
    length: 5, // in meters
    foundIn: ["China", "Mongolia"]
  },
  {
    name: "Prenocephale",
    image: "prenocephale.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 85, end: 70 },
    pronunciation: "PREN-oh-SEF-ah-lee",
    meaning: "'sloping head'",
    diet: "herbivorous",
    length: 2.5, // in meters
    foundIn: ["Mongolia"]
  },
  {
    name: "Prosaurolophus",
    image: "prosaurolophus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 76.5, end: 75 },
    pronunciation: "pro-SORE-oh-LOH-fus",
    meaning: "'before Saurolophus'",
    diet: "herbivorous",
    length: 8.5, // in meters
    foundIn: ["Canada", "USA"]
  },
  {
    name: "Protoceratops",
    image: "protoceratops.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 85, end: 70 },
    pronunciation: "PROH-toh-SEH-rah-tops",
    meaning: "'first horned face'",
    diet: "herbivorous",
    length: 1.8, // in meters
    foundIn: ["China", "Mongolia"]
  },
  {
    name: "Protohadros",
    image: "protohadros.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 95, end: 91 },
    pronunciation: "PROH-toh-HAD-ros",
    meaning: "'first Hadrosaur'",
    diet: "herbivorous",
    length: 7, // in meters
    foundIn: ["USA"]
  },
  {
    name: "Puertasaurus",
    image: "puertasaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 70, end: 66 },
    pronunciation: "PWER-tah-SORE-us",
    meaning: "'Puerta's lizard'",
    diet: "herbivorous",
    length: 30, // in meters
    foundIn: ["Argentina"]
  },
  {
    name: "Pyroraptor",
    image: "pyroraptor.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 70, end: 66 },
    pronunciation: "PY-roh-RAP-tor",
    meaning: "'fire thief'",
    diet: "carnivorous",
    length: 1.5, // in meters
    foundIn: ["France"]
  },
  {
    name: "Quaesitosaurus",
    image: "quaesitosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 85, end: 70 },
    pronunciation: "KWAY-see-toh-SORE-us",
    meaning: "'extraordinary lizard'",
    diet: "herbivorous",
    length: 15, // in meters
    foundIn: ["Mongolia"]
  },
  {
    name: "Rajasaurus",
    image: "rajasaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 70, end: 66 },
    pronunciation: "RAH-jah-SORE-us",
    meaning: "'king lizard'",
    diet: "carnivorous",
    length: 9, // in meters
    foundIn: ["India"]
  },
  {
    name: "Rhabdodon",
    image: "rhabdodon.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 70, end: 66 },
    pronunciation: "RAB-doh-don",
    meaning: "'fluted tooth'",
    diet: "herbivorous",
    length: 4, // in meters
    foundIn: ["France", "Spain"]
  },
  {
    name: "Rinchenia",
    image: "rinchenia.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 85, end: 70 },
    pronunciation: "RIN-chen-ee-ah",
    meaning: "'Rinchen's lizard'",
    diet: "omnivorous",
    length: 1.5, // in meters
    foundIn: ["Mongolia"]
  },
  {
    name: "Rugops",
    image: "rugops.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 95, end: 93 },
    pronunciation: "ROO-gops",
    meaning: "'wrinkle face'",
    diet: "carnivorous",
    length: 6, // in meters
    foundIn: ["Niger"]
  },
  {
    name: "Saichania",
    image: "saichania.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 85, end: 70 },
    pronunciation: "SIE-CHAN-ee-ah",
    meaning: "'beautiful one'",
    diet: "herbivorous",
    length: 7, // in meters
    foundIn: ["Mongolia"]
  },
  {
    name: "Saltasaurus",
    image: "saltasaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 70, end: 66 },
    pronunciation: "SAL-tah-SORE-us",
    meaning: "'Salta lizard'",
    diet: "herbivorous",
    length: 12, // in meters
    foundIn: ["Argentina"]
  },
  {
    name: "Saurolophus",
    image: "saurolophus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 70, end: 66 },
    pronunciation: "saw-ROL-oh-fus",
    meaning: "'lizard crest'",
    diet: "herbivorous",
    length: 9.5, // in meters
    foundIn: ["Mongolia", "USA"]
  },
  {
    name: "Saurornithoides",
    image: "saurornithoides.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 85, end: 70 },
    pronunciation: "sore-OR-nih-THOY-deez",
    meaning: "'lizard bird form'",
    diet: "carnivorous",
    length: 2, // in meters
    foundIn: ["Mongolia"]
  },
  {
    name: "Secernosaurus",
    image: "secernosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 85, end: 70 },
    pronunciation: "seh-SER-noh-SORE-us",
    meaning: "'separated lizard'",
    diet: "herbivorous",
    length: 7, // in meters
    foundIn: ["Argentina"]
  },
  {
    name: "Segnosaurus",
    image: "segnosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 85, end: 70 },
    pronunciation: "SEG-noh-SORE-us",
    meaning: "'slow lizard'",
    diet: "herbivorous",
    length: 6.5, // in meters
    foundIn: ["Mongolia"]
  },
  {
    name: "Shantungosaurus",
    image: "shantungosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 85, end: 70 },
    pronunciation: "shan-TUNG-oh-SORE-us",
    meaning: "'Shandong lizard'",
    diet: "herbivorous",
    length: 16.6, // in meters
    foundIn: ["China"]
  },
  {
    name: "Shuvuuia",
    image: "shuvuuia.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 85, end: 70 },
    pronunciation: "shoo-VOO-ee-ah",
    meaning: "'bird'",
    diet: "carnivorous",
    length: 0.6, // in meters
    foundIn: ["Mongolia"]
  },
  {
    name: "Sonidosaurus",
    image: "sonidosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 85, end: 70 },
    pronunciation: "so-NEE-doh-SORE-us",
    meaning: "'Sonid lizard'",
    diet: "herbivorous",
    length: 9, // in meters
    foundIn: ["China"]
  },
  {
    name: "Spinosaurus",
    image: "spinosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 112, end: 93 },
    pronunciation: "SPY-noh-SORE-us",
    meaning: "'spine lizard'",
    diet: "carnivorous",
    length: 15, // in meters
    foundIn: ["Egypt", "Morocco"]
  },
  {
    name: "Stegoceras",
    image: "stegoceras.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 76.5, end: 75.5 },
    pronunciation: "STEG-oh-SER-as",
    meaning: "'roofed horn'",
    diet: "herbivorous",
    length: 2.5, // in meters
    foundIn: ["Canada", "USA"]
  },
  {
    name: "Stenonychosaurus",
    image: "stenonychosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 76.5, end: 75.5 },
    pronunciation: "STEN-oh-NY-koh-SORE-us",
    meaning: "'narrow claw lizard'",
    diet: "carnivorous",
    length: 2.5, // in meters
    foundIn: ["Canada"]
  },
  {
    name: "Struthiomimus",
    image: "struthiomimus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 76.5, end: 66 },
    pronunciation: "STROO-thee-oh-MY-mus",
    meaning: "'ostrich mimic'",
    diet: "omnivorous",
    length: 4.3, // in meters
    foundIn: ["Canada", "USA"]
  },
  {
    name: "Struthiosaurus",
    image: "struthiosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 85, end: 70 },
    pronunciation: "STROO-thee-oh-SORE-us",
    meaning: "'ostrich lizard'",
    diet: "herbivorous",
    length: 2.2, // in meters
    foundIn: ["Austria", "France", "Romania"]
  },
  {
    name: "Stygimoloch",
    image: "stygimoloch.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 68, end: 66 },
    pronunciation: "STIJ-ee-MOH-lok",
    meaning: "'demon from the river Styx'",
    diet: "herbivorous",
    length: 3, // in meters
    foundIn: ["USA"]
  },
  {
    name: "Styracosaurus",
    image: "styracosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 76.5, end: 75 },
    pronunciation: "sty-RAK-oh-SORE-us",
    meaning: "'spiked lizard'",
    diet: "herbivorous",
    length: 5.5, // in meters
    foundIn: ["Canada"]
  },
  {
    name: "Talarurus",
    image: "talarurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 85, end: 70 },
    pronunciation: "TAL-ah-ROO-rus",
    meaning: "'basket tail'",
    diet: "herbivorous",
    length: 6, // in meters
    foundIn: ["Mongolia"]
  },
  {
    name: "Tanius",
    image: "tanius.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 85, end: 70 },
    pronunciation: "TAN-ee-us",
    meaning: "'Tan's lizard'",
    diet: "herbivorous",
    length: 7, // in meters
    foundIn: ["China"]
  },
  {
    name: "Tarbosaurus",
    image: "tarbosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 70, end: 66 },
    pronunciation: "TAR-boh-SORE-us",
    meaning: "'alarming lizard'",
    diet: "carnivorous",
    length: 10, // in meters
    foundIn: ["Mongolia"]
  },
  {
    name: "Tarchia",
    image: "tarchia.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 85, end: 70 },
    pronunciation: "TAR-kee-ah",
    meaning: "'brainy one'",
    diet: "herbivorous",
    length: 8, // in meters
    foundIn: ["Mongolia"]
  },
  {
    name: "Telmatosaurus",
    image: "telmatosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 85, end: 70 },
    pronunciation: "tel-MAH-toh-SORE-us",
    meaning: "'marsh lizard'",
    diet: "herbivorous",
    length: 5, // in meters
    foundIn: ["Romania"]
  },
  {
    name: "Therizinosaurus",
    image: "therizinosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 70, end: 66 },
    pronunciation: "THER-ih-ZEEN-oh-SORE-us",
    meaning: "'scythe lizard'",
    diet: "herbivorous",
    length: 10, // in meters
    foundIn: ["Mongolia"]
  },
  {
    name: "Thescelosaurus",
    image: "thescelosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 76.5, end: 66 },
    pronunciation: "THESS-seh-loh-SORE-us",
    meaning: "'marvelous lizard'",
    diet: "herbivorous",
    length: 3.5, // in meters
    foundIn: ["USA"]
  },
  {
    name: "Torosaurus",
    image: "torosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 70, end: 66 },
    pronunciation: "TOR-oh-SORE-us",
    meaning: "'perforated lizard'",
    diet: "herbivorous",
    length: 8, // in meters
    foundIn: ["USA"]
  },
  {
    name: "Triceratops",
    image: "triceratops.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 68, end: 66 },
    pronunciation: "try-SER-uh-tops",
    meaning: "'three-horned face'",
    diet: "herbivorous",
    length: 9, // in meters
    foundIn: ["USA", "Canada"]
  },
  {
    name: "Troodon",
    image: "troodon.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 76.5, end: 66 },
    pronunciation: "TROH-oh-don",
    meaning: "'wounding tooth'",
    diet: "omnivorous",
    length: 2.4, // in meters
    foundIn: ["USA", "Canada"]
  },
  {
    name: "Tsagantegia",
    image: "tsagantegia.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 85, end: 70 },
    pronunciation: "SAH-gan-TEH-gee-ah",
    meaning: "'from Tsagan-Teg'",
    diet: "herbivorous",
    length: 7, // in meters
    foundIn: ["Mongolia"]
  },
  {
    name: "Tsintaosaurus",
    image: "tsintaosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 85, end: 70 },
    pronunciation: "CHIN-tow-SORE-us",
    meaning: "'Qingdao lizard'",
    diet: "herbivorous",
    length: 10, // in meters
    foundIn: ["China"]
  },
  {
    name: "Tylocephale",
    image: "tylocephale.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 85, end: 70 },
    pronunciation: "TY-loh-SEF-ah-lee",
    meaning: "'swollen head'",
    diet: "herbivorous",
    length: 1.5, // in meters
    foundIn: ["Mongolia"]
  },
  {
    name: "Tyrannosaurus",
    image: "tyrannosaurus.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 68, end: 66 },
    pronunciation: "tie-RAN-oh-SORE-us",
    meaning: "'tyrant lizard'",
    diet: "carnivorous",
    length: 12, // in meters
    foundIn: ["USA", "Canada"]
  },
  {
    name: "Udanoceratops",
    image: "udanoceratops.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 85, end: 70 },
    pronunciation: "oo-DAN-oh-SER-ah-tops",
    meaning: "'Udan's horned face'",
    diet: "herbivorous",
    length: 4, // in meters
    foundIn: ["Mongolia"]
  },
  {
    name: "Unenlagia",
    image: "unenlagia.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 90, end: 85 },
    pronunciation: "oo-NEN-LAH-gee-ah",
    meaning: "'half-bird'",
    diet: "carnivorous",
    length: 2, // in meters
    foundIn: ["Argentina"]
  },
  {
    name: "Urbacodon",
    image: "urbacodon.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 85, end: 70 },
    pronunciation: "UR-bah-koh-don",
    meaning: "'URBAC tooth'",
    diet: "carnivorous",
    length: 1.5, // in meters
    foundIn: ["Uzbekistan"]
  },
  {
    name: "Velociraptor",
    image: "velociraptor.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 85, end: 70 },
    pronunciation: "veh-LOSS-ee-RAP-tor",
    meaning: "'swift thief'",
    diet: "carnivorous",
    length: 2, // in meters
    foundIn: ["Mongolia", "China"]
  },
  {
    name: "Zalmoxes",
    image: "zalmoxes.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 85, end: 70 },
    pronunciation: "zal-MOCK-seez",
    meaning: "'Zalmoxis'",
    diet: "herbivorous",
    length: 2.5, // in meters
    foundIn: ["Romania", "Austria"]
  },
  {
    name: "Zuniceratops",
    image: "zuniceratops.png",
    period: "Cretaceous",
    fullPeriod: "Late Cretaceous",
    yearsMya: { start: 90, end: 85 },
    pronunciation: "zoo-NEE-ser-ah-tops",
    meaning: "'Zuni horned face'",
    diet: "herbivorous",
    length: 3.5, // in meters
    foundIn: ["USA"]
  }
];

export default dinosaurs;
