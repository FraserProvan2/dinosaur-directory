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
  }
];

export default dinosaurs;
