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
  }
];

export default dinosaurs;
