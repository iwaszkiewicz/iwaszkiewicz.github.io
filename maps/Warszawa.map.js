//#region subway stops
const blueLineStations = [
  {
    type: "node",
    id: 35121250,
    lat: 52.2449972,
    lon: 21.0011584,
    tags: {
      colour: "blue",
      name: "Ratusz-Arsenał",
    },
  },
  {
    type: "node",
    id: 291414851,
    lat: 52.2716615,
    lon: 20.9717196,
    tags: {
      colour: "blue",
      name: "Marymont",
    },
  },
  {
    type: "node",
    id: 307389114,
    lat: 52.2818172,
    lon: 20.9493596,
    tags: {
      colour: "blue",
      name: "Stare Bielany",
    },
  },
  {
    type: "node",
    id: 307389115,
    lat: 52.2863179,
    lon: 20.9395965,
    tags: {
      colour: "blue",
      name: "Wawrzyszew",
    },
  },
  {
    type: "node",
    id: 307389116,
    lat: 52.2907599,
    lon: 20.9298695,
    tags: {
      colour: "blue",
      name: "Młociny",
    },
  },
  {
    type: "node",
    id: 1958108834,
    lat: 52.2768253,
    lon: 20.9602351,
    tags: {
      colour: "blue",
      name: "Słodowiec",
    },
  },
  {
    type: "node",
    id: 3390283399,
    lat: 52.1320765,
    lon: 21.0650711,
    tags: {
      colour: "blue",
      name: "Kabaty",
    },
  },
  {
    type: "node",
    id: 3390289961,
    lat: 52.1560759,
    lon: 21.0347233,
    tags: {
      colour: "blue",
      name: "Stokłosy",
    },
  },
  {
    type: "node",
    id: 3390290324,
    lat: 52.1411007,
    lon: 21.0564351,
    tags: {
      colour: "blue",
      name: "Natolin",
    },
  },
  {
    type: "node",
    id: 3390290598,
    lat: 52.1493,
    lon: 21.0461062,
    tags: {
      colour: "blue",
      name: "Imielin",
    },
  },
  {
    type: "node",
    id: 3390304927,
    lat: 52.1620456,
    lon: 21.0276283,
    tags: {
      colour: "blue",
      name: "Ursynów",
    },
  },
  {
    type: "node",
    id: 3390306374,
    lat: 52.1727624,
    lon: 21.0262866,
    tags: {
      colour: "blue",
      name: "Służew",
    },
  },
  {
    type: "node",
    id: 3390327068,
    lat: 52.1989416,
    lon: 21.0121943,
    tags: {
      colour: "blue",
      name: "Racławicka",
    },
  },
  {
    type: "node",
    id: 3390333313,
    lat: 52.1899435,
    lon: 21.016599,
    tags: {
      colour: "blue",
      name: "Wierzbno",
    },
  },
  {
    type: "node",
    id: 3390336021,
    lat: 52.1818,
    lon: 21.0231369,
    tags: {
      colour: "blue",
      name: "Wilanowska",
    },
  },
  {
    type: "node",
    id: 3390342469,
    lat: 52.208529,
    lon: 21.0077851,
    tags: {
      colour: "blue",
      name: "Pole Mokotowskie",
    },
  },
  {
    type: "node",
    id: 3390361095,
    lat: 52.2184572,
    lon: 21.0153582,
    tags: {
      colour: "blue",
      name: "Politechnika",
    },
  },
  {
    type: "node",
    id: 3390365405,
    lat: 52.2311577,
    lon: 21.0100632,
    tags: {
      colour: "blue",
      name: "Centrum",
    },
  },
  {
    type: "node",
    id: 3416840991,
    lat: 52.2578685,
    lon: 20.9943315,
    tags: {
      colour: "blue",
      name: "Dworzec Gdański",
    },
  },
  {
    type: "node",
    id: 3615569910,
    lat: 52.2692519,
    lon: 20.9843885,
    tags: {
      colour: "blue",
      name: "Plac Wilsona",
    },
  },
];

const redLineStations = [
  {
    type: "node",
    id: 3390187815,
    lat: 52.2540622,
    lon: 21.0355034,
    tags: {
      colour: "red",
      name: "Dworzec Wileński",
    },
  },
  {
    type: "node",
    id: 3390197100,
    lat: 52.2469807,
    lon: 21.0428754,
    tags: {
      colour: "red",
      name: "Stadion Narodowy",
    },
  },
  {
    type: "node",
    id: 3390230685,
    lat: 52.2399148,
    lon: 21.0317878,
    tags: {
      colour: "red",
      name: "Centrum Nauki Kopernik",
    },
  },
  {
    type: "node",
    id: 3390237898,
    lat: 52.236833,
    lon: 21.016788,
    tags: {
      colour: "red",
      name: "Nowy Świat-Uniwersytet",
    },
  },
  {
    type: "node",
    id: 3390266492,
    lat: 52.2331283,
    lon: 20.9981863,
    tags: {
      colour: "red",
      name: "Rondo ONZ",
    },
  },
  {
    type: "node",
    id: 3390267294,
    lat: 52.230052,
    lon: 20.982848,
    tags: {
      colour: "red",
      level: "-2",
    },
  },
  {
    type: "node",
    id: 4930657482,
    lat: 52.2325009,
    lon: 20.9663573,
    tags: {
      colour: "red",
      name: "Płocka",
    },
  },
  {
    type: "node",
    id: 4930657487,
    lat: 52.2753464,
    lon: 21.0554496,
    tags: {
      colour: "red",
      name: "Trocka",
    },
  },
  {
    type: "node",
    id: 5907821373,
    lat: 52.2391816,
    lon: 20.9443705,
    tags: {
      colour: "red",
      name: "Księcia Janusza",
    },
  },
  {
    type: "node",
    id: 5907821374,
    lat: 52.2376748,
    lon: 20.9601813,
    tags: {
      colour: "red",
      name: "Młynów",
    },
  },
  {
    type: "node",
    id: 6053348692,
    lat: 52.2634539,
    lon: 21.0453302,
    tags: {
      colour: "red",
      name: "Szwedzka",
    },
  },
  {
    type: "node",
    id: 6564265270,
    lat: 52.2695853,
    lon: 21.0514129,
    tags: {
      colour: "red",
      name: "Targówek Mieszkaniowy",
    },
  },
  {
    type: "node",
    id: 7362922676,
    lat: 52.239197,
    lon: 20.9155062,
    tags: {
      colour: "red",
      name: "Bemowo",
    },
  },
  {
    type: "node",
    id: 7362922677,
    lat: 52.2403208,
    lon: 20.9298276,
    tags: {
      colour: "red",
      name: "Ulrychów",
    },
  },
  {
    type: "node",
    id: 10058224345,
    lat: 52.2935846,
    lon: 21.0289407,
    tags: {
      colour: "red",
      name: "Bródno",
    },
  },
  {
    type: "node",
    id: 10058224348,
    lat: 52.292074,
    lon: 21.0486696,
    tags: {
      colour: "red",
      name: "Kondratowicza",
    },
  },
  {
    type: "node",
    id: 10058224349,
    lat: 52.2837212,
    lon: 21.0621986,
    tags: {
      colour: "red",
      name: "Zacisze",
    },
  },
];

//#endregion subway stops

//#region layers

const luxMeds = L.layerGroup();
const schools = L.layerGroup();
const biedronkas = L.layerGroup();
const lidls = L.layerGroup();
const malls = L.layerGroup();
const metroBlueLine = L.layerGroup();
const metroRedLine = L.layerGroup();

//#endregion layers

//#region icons
const mallIcon = L.IconMaterial.icon({
  icon: "local_mall",
  iconColor: "#FFF",
  markerColor: "rgba(255, 87, 51, 0.5)",
  //outlineColor: 'yellow',
  //outlineWidth: 1,
  iconSize: [31, 42], // Width and height of the icon
});

const schoolIcon = L.IconMaterial.icon({
  icon: "school",
  iconColor: "#000",
  markerColor: "rgba(255, 255, 0, 0.5)",
  outlineColor: "#000",
  outlineWidth: 1,
  iconSize: [31, 42], // Width and height of the icon
});

const makeSchoolIcon = (rank) => {
  return L.NumberIcon.icon({
    text: `${rank}`,
    iconColor: "#000",
    markerColor: "rgba(255, 255, 0, 0.5)",
    outlineColor: "#000",
    outlineWidth: 1,
    iconSize: [31, 42], // Width and height of the icon
  });
};

const lidlIcon = L.IconMaterial.icon({
  icon: "shopping_cart",
  iconColor: "#FFF",
  markerColor: "rgba(0, 0, 255, 0.5)",
  outlineColor: "#000",
  outlineWidth: 1,
  iconSize: [31, 42], // Width and height of the icon
});

const luxMedIcon = L.IconMaterial.icon({
  icon: "local_hospital",
  iconColor: "#FFF",
  markerColor: "#00ac35",
  outlineColor: "#000",
  outlineWidth: 1,
  iconSize: [31, 42], // Width and height of the icon
});

const blueMetroStationIcon = L.divIcon({
  html: "<div style='background-color:#00f; color:#fff; font-size:12px; text-align:center; width:15px; height:15px;'>M</div>",
  iconSize: [15, 15],
  iconAnchor: [10, 10],
});

const redMetroStationIcon = L.divIcon({
  html: "<div style='background-color:#f00; color:#fff; font-size:12px; text-align:center; width:15px; height:15px;'>M</div>",
  iconSize: [15, 15],
  iconAnchor: [10, 10],
});

//#endregion icons

//#region draw primitives
const drawLuxMed = (lat, lng) => {
  L.marker([lat, lng], { icon: luxMedIcon }).addTo(luxMeds);
  L.circle([lat, lng], {
    color: "transparent",
    fillColor: "#00ac35",
    fillOpacity: 0.3,
    radius: 1500,
  }).addTo(luxMeds);
};

const drawMall = (lat, lng) => {
  L.marker([lat, lng], { icon: mallIcon }).addTo(malls);
};

const drawLidl = (lat, lng) => {
  L.marker([lat, lng], { icon: lidlIcon }).addTo(lidls);
  L.circle([lat, lng], {
    color: "transparent",
    fillColor: "#015aa2",
    fillOpacity: 0.3,
    radius: 900,
  }).addTo(lidls);
};

const drawSchool = (lat, lng, rank) => {
  const icon = makeSchoolIcon(rank ?? 80);

  L.marker([lat, lng], { icon }).addTo(schools);

  L.circle([lat, lng], {
    color: "transparent",
    fillColor: "#fff200",
    fillOpacity: 0.3,
    radius: 900,
  }).addTo(schools);
};

const drawBlueLineMetroStation = (lat, lng) => {
  L.marker([lat, lng], { icon: blueMetroStationIcon }).addTo(metroBlueLine);
};

const drawRedLineMetroStation = (lat, lng) => {
  L.marker([lat, lng], { icon: redMetroStationIcon }).addTo(metroRedLine);
};
//#endregion draw primitives

//#region layer content methods
const drawSchools = () => {
  //drawSchool(52.1515045, 21.0557007); // 112 Prymerza Rodzin
  //drawSchool(52.13606735524293, 21.056597649844708); // nr 47 im. Roberta Schumana
  //drawSchool(52.296487006872525, 20.938478662651967); // nr 3
  drawSchool(52.2320603, 21.0187713, 80); // nr 211 80
  drawSchool(52.2189068, 21.1441216, 73); // nr 86 73
  drawSchool(52.260658, 20.9020078, 73); // nr 150 73
  drawSchool(52.1285175, 21.0579496, 73); // nr 16 73
  drawSchool(52.2455748, 21.103154, 72); // nr 114 72
  drawSchool(52.275701, 20.9847747, 72); // nr 65 Orkana 72
  drawSchool(52.1397374, 21.0630036, 72); // nr 340 72
  drawSchool(52.1650478, 21.029927, 72); // 303 72
  drawSchool(52.2375729, 21.0580247, 71); // nr 373 71
  drawSchool(52.1358475, 21.0561682, 70); // nr 336 70
  drawSchool(52.3164832, 21.0341244, 70); // nr 231 70
  drawSchool(52.1881776, 21.175969, 70); // nr 204 70
  drawSchool(52.1640848, 21.2224073, 69); // nr 124 69
  drawSchool(52.2100325, 20.9039022, 69); // nr 359 69
  drawSchool(52.1734551, 21.0390419, 69); // nr 107 69
  drawSchool(52.24198, 20.9393155, 69); // nr 225 69
  drawSchool(52.2405546, 20.9188055, 69); // nr 82 69
  drawSchool(52.27624, 20.9405141, 69); // nr 369 69
  drawSchool(52.2948739, 21.0470315, 69); // nr 380 69
  drawSchool(52.223984, 21.0291102, 69); // nr 12 69
  drawSchool(52.1560132, 21.0687549, 69); // nr 358 69
  drawSchool(52.2589526, 20.926287, 68); // nr 341 68
  drawSchool(52.2687866, 20.9834041, 68); // nr 391 68
  drawSchool(52.1690631, 21.0854032, 68); // nr 261 68
  drawSchool(52.2834142, 20.9392493, 68); // nr 209 68
  drawSchool(52.2294358, 21.064027, 68); // nr 143 68
  drawSchool(52.1577089, 21.0393319, 68); // nr 319 68
  drawSchool(52.1966223, 20.8683274, 68); // nr 11 68
  drawSchool(52.2602319, 20.9164285, 68); // nr 357 68
  drawSchool(52.2326041, 21.0656215, 68); // nr 168 68
  drawSchool(52.2227945, 20.9061803, 68); // nr 306 68
  drawSchool(52.2186475, 21.2351821, 67); // nr 353 67
  drawSchool(52.2806676, 20.9740613, 67); // nr 53 67
  drawSchool(52.1764707, 21.0550954, 67); // nr 307 67
  drawSchool(52.3271919, 21.0381244, 67); // nr 368 67
  drawSchool(52.2281933, 20.977611, 67); // nr 387 67
  drawSchool(52.3107637, 20.9199578, 67); // nr 77 67
  drawSchool(52.1441165, 21.0399394, 67); // nr 323 67
  drawSchool(52.3217793, 20.9490402, 67); // nr 344 67
  drawSchool(52.1928373, 20.8956471, 67); // nr 4 67
  drawSchool(52.1636964, 21.0660425, 67); // nr 400 67
  //drawSchool(); // nr
};

const drawLidls = () => {
  drawLidl(52.1972837, 20.8819242); // Władysława Jagiełły 6
  drawLidl(52.2088044, 20.9209835); // Plastyczna 12
  drawLidl(52.3055881, 21.0793137); // Malborska 45
  drawLidl(52.234969, 20.9762619); //  Wolska 19/25
  drawLidl(52.1812117, 21.0037798); // Wołoska 16
  drawLidl(52.2199509, 20.8952973); // Kopalniana 24
  drawLidl(52.2684999, 21.0611905); // Radzymińska 116
  drawLidl(52.2335538, 21.1125775); // Marii Rodziewiczówny 1
  drawLidl(52.2497079, 21.0342353); // Józefa Sierakowskiego 4
  drawLidl(52.204064, 21.0482004); // Czerniakowska 87A
  drawLidl(52.2885832, 20.9320583); // Jana Kasprowicza 117
  drawLidl(52.1863616, 21.0464363); // Aleja Gen. Władysława Sikorskiego 18
  drawLidl(52.3173287, 21.0374211); // Juranda ze Spychowa 32
  drawLidl(52.2600102, 20.9793484); // Ludwika Rydygiera 6
  drawLidl(52.2367352, 21.0215664); // Tamka 40
  drawLidl(52.2933257, 21.0816881); // Radzymińska 314
  drawLidl(52.2422648, 21.0989604); // Grochowska 47
  drawLidl(52.1443228, 21.0368207); // Rotmistrza Witolda Pileckiego 103
  drawLidl(52.2579807, 21.0415085); // Wileńska 14
  drawLidl(52.3180126, 20.9611604); // Myśliborska 94
  drawLidl(52.1913931, 20.9577727); // Aleja Krakowska 253
  drawLidl(52.2400665, 20.9140514); // Powstańców Śląskich 72
  drawLidl(52.1832138, 20.8933317); // Generała Kazimierza Sosnkowskiego 2
  drawLidl(52.2832435, 21.0325859); // Bolesławicka 2
  drawLidl(52.2700367, 20.9321717); // Josepha Conrada 1
  drawLidl(52.2769067, 21.0474759); // Borzymowska 26
  drawLidl(52.3078125, 21.0627736); // Przy Trasie 5
  drawLidl(52.2511906, 20.9388116); // Księcia Bolesława 1A
  drawLidl(52.1337226, 21.0515247); // Stryjeńskich 15J
  drawLidl(52.2221799, 21.2234775); // Jana Pawła II 1
  drawLidl(52.2300162, 21.0842088); // Jana Nowaka-Jeziorańskiego 35
  drawLidl(52.2229379, 21.137549); // Trakt Lubelski 367
  drawLidl(52.3629619, 21.0291185); // Płochocińska 202
  drawLidl(52.1347819, 21.0753806); // Jana Rosoła 18
  drawLidl(52.1643696, 21.1076486); // Zygmunta Vogla 45
  drawLidl(52.1672093, 21.0679442); // Aleja Rzeczy pospolitej 29E
  drawLidl(52.1733168, 20.9385316); // Aleja Krakowska 79
  drawLidl(52.2346654, 21.0917842); // Ostrobramska 97B
  drawLidl(52.1689982, 21.0400056); // Fort Służew 2
  drawLidl(52.3039983, 20.9865877); // Modlińska 35
  drawLidl(52.1090589, 21.0176217); // Puławska 540
  drawLidl(52.2584675, 21.1575124); // Strażacka 110
  drawLidl(52.1660707, 21.2052147); // Halna 35
  drawLidl(52.2066882, 21.1728052); // Mieczysława Pożaryskiego 31
  drawLidl(52.2249324, 21.0957414); // Generała Tadeusza Bora-Komorowskiego 14A
  drawLidl(52.3467972, 20.9505324); // Modlińska 324
  drawLidl(52.3235954, 20.9396392); // Światowida 53D
  drawLidl(52.2525086, 21.0649522); // Żupnicza 15
  drawLidl(52.3363492, 20.938096); // Odkryta 62
  //drawLidl(52.3277986, 20.9920833); //
};

const drawLuxmeds = () => {
  drawLuxMed(52.253192, 20.9843985); // Al. Jana Pawła II 78
  drawLuxMed(52.2078101, 20.9441119); // Al. Jerozolimskie 162
  drawLuxMed(52.227689, 21.0043344); // Al. Jerozolimskie 65/79
  drawLuxMed(52.2429147, 21.0849178); // Al. Stanów Zjednoczonych 72
  drawLuxMed(52.1560525, 21.0332535); // al. KEN 93 Komisji Edukacji Narodowej
  drawLuxMed(52.1915454, 20.9824614); // ul. 1 Sierpnia 8
  drawLuxMed(52.1415274, 21.0596486); // ul. Belgradzka 18
  drawLuxMed(52.1973001, 21.0461666); // ul. Bobrowiecka 1
  drawLuxMed(52.1837424, 20.9901021); // ul. Domaniewska 52
  drawLuxMed(52.2015386, 20.9674522); // ul. Grójecka 186
  drawLuxMed(52.2413317, 20.9327115); // ul. Górczewska 124
  drawLuxMed(52.2073929, 20.8814305); // ul. Herbu Oksza 26
  drawLuxMed(52.1634317, 21.0828457); // ul. Klimczaka 1
  drawLuxMed(52.1819716, 20.9706694); // ul. Komitetu Obrony Robotników 39
  drawLuxMed(52.1831601, 20.9636463); // ul. Komitetu Obrony Robotników 49
  drawLuxMed(52.1470233, 21.0584873); // ul. Migdałowa 4
  drawLuxMed(52.3062771, 20.986911); // ul. Modlińska 58
  drawLuxMed(52.3189336, 20.9571075); // ul. Myśliborska 95
  drawLuxMed(52.1829193, 20.9956423); // ul. Postępu 21C
  drawLuxMed(52.2305309, 20.9875495); // ul. Prosta 51
  drawLuxMed(52.2316092, 20.9802975); // ul. Przyokopowa 33
  drawLuxMed(52.2104304, 21.0224301); // ul. Puławska 15
  drawLuxMed(52.2807832, 21.0122657); // ul. Szernera 3
  drawLuxMed(52.1800068, 20.9885734); // ul. Taśmowa 7
  drawLuxMed(52.2501604, 20.9214379); // ul. Wrocławska 7A
  drawLuxMed(52.2910634, 20.9389945); // ul. Wrzeciono 10c
  drawLuxMed(52.1971534, 20.9826422); // ul. Żwirki i Wigury 39
};

const drawMetro = () => {
  for (const station of blueLineStations) {
    drawBlueLineMetroStation(station.lat, station.lon);
  }

  for (const station of redLineStations) {
    drawRedLineMetroStation(station.lat, station.lon);
  }
};
//#endregion layer content methods

drawSchools();
drawLidls();
drawLuxmeds();
drawMetro();

const osmLayer = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
});

const map = L.map("map", {
  center: [52.228, 21.007],
  zoom: 12,
  layers: [osmLayer, schools],
});

const baseLayers = {
  OpenStreetMap: osmLayer,
};

const overlays = {
  Schools: schools,
};

var layerControl = L.control
  .layers(baseLayers, overlays, {
    collapsed: false,
  })
  .addTo(map);

layerControl.addOverlay(lidls, "Lidl");
layerControl.addOverlay(luxMeds, "Lux Med");
layerControl.addOverlay(malls, "Malls");
layerControl.addOverlay(metroBlueLine, "Metro Blue Line");
layerControl.addOverlay(metroRedLine, "Metro Red Line");
