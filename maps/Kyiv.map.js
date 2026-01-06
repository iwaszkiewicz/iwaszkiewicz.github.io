//#region subway stops
const redLineStations = [
  //#region Академмістечко
  {
    "id": 1727933858,
    "lat": 50.466068,
    "lon": 30.3548758,
    "name": "Академмістечко"
  },
  {
    "id": 1727933865,
    "lat": 50.4655422,
    "lon": 30.3558092,
    "name": "Академмістечко"
  },
  {
    "id": 1727933898,
    "lat": 50.4642786,
    "lon": 30.355304,
    "name": "Академмістечко"
  },
  {
    "id": 3766794999,
    "lat": 50.4640015,
    "lon": 30.3559025,
    "name": "Академмістечко"
  },
  {
    "id": 3881490422,
    "lat": 50.4653429,
    "lon": 30.3548777,
    "name": "Академмістечко"
  },
  {
    "id": 3924962610,
    "lat": 50.4643458,
    "lon": 30.3548064,
    "name": "Академмістечко"
  },
  {
    "id": 3924962611,
    "lat": 50.4638803,
    "lon": 30.3548543,
    "name": "Академмістечко"
  },
  {
    "id": 4134386725,
    "lat": 50.4658902,
    "lon": 30.3558146,
    "name": "Академмістечко"
  },
  //#endregion Академмістечко
  //#region Житомирська
  {
    "id": 3130950720,
    "lat": 50.456445,
    "lon": 30.3663593,
    "name": "Житомирська"
  },
  {
    "id": 3130950721,
    "lat": 50.4564573,
    "lon": 30.3668599,
    "name": "Житомирська"
  },
  {
    "id": 3168330170,
    "lat": 50.4560735,
    "lon": 30.3649266,
    "name": "Житомирська"
  },
  {
    "id": 3168330171,
    "lat": 50.4560197,
    "lon": 30.3641521,
    "name": "Житомирська"
  },
  {
    "id": 3168330177,
    "lat": 50.4557122,
    "lon": 30.364568,
    "name": "Житомирська"
  },
  {
    "id": 3168330179,
    "lat": 50.4556606,
    "lon": 30.3637106,
    "name": "Житомирська"
  },
  {
    "id": 3168330221,
    "lat": 50.4566543,
    "lon": 30.3645724,
    "name": "Житомирська"
  },
  //#endregion Житомирська
  //#region Нивки
  {
    "id": 1291907347,
    "lat": 50.4592404,
    "lon": 30.4065534,
    "name": "Нивки"
  },
  {
    "id": 1752257609,
    "lat": 50.459435,
    "lon": 30.4062167,
    "name": "Нивки"
  },
  {
    "id": 1752257612,
    "lat": 50.4581479,
    "lon": 30.4030679,
    "name": "Нивки"
  },
  {
    "id": 1752257614,
    "lat": 50.459367,
    "lon": 30.4053148,
    "name": "Нивки"
  },
  {
    "id": 1752257621,
    "lat": 50.4587687,
    "lon": 30.402902,
    "name": "Нивки"
  },
  {
    "id": 1752257623,
    "lat": 50.4581684,
    "lon": 30.4034073,
    "name": "Нивки"
  },
  //#endregion Нивки
  //#region Берестейська
  {
    "id": 1328523810,
    "lat": 50.4590009,
    "lon": 30.4207476,
    "name": "Берестейська"
  },
  {
    "id": 1798189702,
    "lat": 50.4589845,
    "lon": 30.4195866,
    "name": "Берестейська"
  },
  {
    "id": 1798189704,
    "lat": 50.4586199,
    "lon": 30.419744,
    "name": "Берестейська"
  },
  {
    "id": 2028869476,
    "lat": 50.4588152,
    "lon": 30.4209516,
    "name": "Берестейська"
  },
  //#endregion Берестейська
  {
    "id": 3080215266,
    "lat": 50.4548901,
    "lon": 30.4454775,
    "name": "Шулявська"
  },
  {
    "id": 7625853987,
    "lat": 50.45089,
    "lon": 30.466306,
    "name": "Політехнічний інститут"
  },
  {
    "id": 1302493986,
    "lat": 50.4416598,
    "lon": 30.4883935,
    "name": "Вокзальна"
  },
  {
    "id": 255368753,
    "lat": 50.4443335,
    "lon": 30.5059279,
    "name": "Університет"
  },
  //#region Театральна
  {
    "id": 1297629651,
    "lat": 50.4454532,
    "lon": 30.5175883,
    "name": "Театральна"
  },
  {
    "id": 1297629664,
    "lat": 50.4453147,
    "lon": 30.5184772,
    "name": "Театральна"
  },
  {
    "id": 1297629744,
    "lat": 50.4451159,
    "lon": 30.5184035,
    "name": "Театральна"
  },
  {
    "id": 2705686410,
    "lat": 50.4451822,
    "lon": 30.517993,
    "name": "Театральна"
  },
  {
    "id": 4087901981,
    "lat": 50.4452606,
    "lon": 30.5175032,
    "name": "Театральна"
  },
  //#endregion Театральна
  //#region Хрещатик
  {
    "id": 1485646305,
    "lat": 50.4471462,
    "lon": 30.5270543,
    "name": "Хрещатик"
  },
  {
    "id": 3916013414,
    "lat": 50.4478194,
    "lon": 30.5287284,
    "name": "Хрещатик"
  },
  {
    "id": 4621837155,
    "lat": 50.4471203,
    "lon": 30.5228096,
    "name": "Хрещатик"
  },
  //#endregion Хрещатик
];

const greenLineStations = [
  //#region Дорогожичі
  {
    "id": 1760209700,
    "lat": 50.4732179,
    "lon": 30.4482691,
    "name": "Дорогожичі"
  },
  {
    "id": 1760209704,
    "lat": 50.473438,
    "lon": 30.4492361,
    "name": "Дорогожичі"
  },
  {
    "id": 1760209719,
    "lat": 50.4737702,
    "lon": 30.4485693,
    "name": "Дорогожичі"
  },
  {
    "id": 3011265315,
    "lat": 50.4740007,
    "lon": 30.4486811,
    "name": "Дорогожичі"
  },
  {
    "id": 13281501491,
    "lat": 50.4739844,
    "lon": 30.4490307,
    "name": "Дорогожичі"
  },
  {
    "id": 13281501492,
    "lat": 50.4731264,
    "lon": 30.4489135,
    "name": "Дорогожичі"
  },
  //#endregion Дорогожичі
  //#region Лукʼянівська
  {
    "id": 1232861118,
    "lat": 50.4625285,
    "lon": 30.4818969,
    "name": "Лукʼянівська"
  },
  {
    "id": 2770760740,
    "lat": 50.4623212,
    "lon": 30.4815894,
    "name": "Лукʼянівська"
  },
  //#endregion Лукʼянівська
  //#region Золоті ворота
  {
    "id": 1005420968,
    "lat": 50.4484597,
    "lon": 30.5135561,
    "name": "Золоті ворота"
  },
  {
    "id": 1662636989,
    "lat": 50.448067,
    "lon": 30.5139657,
    "name": "Золоті ворота"
  },
  {
    "id": 3541551451,
    "lat": 50.4484644,
    "lon": 30.5135285,
    "name": "Золоті ворота"
  },
  {
    "id": 3541551453,
    "lat": 50.4484696,
    "lon": 30.5134978,
    "name": "Золоті ворота"
  },
  //#endregion Золоті ворота
];

const blueLineStations = [
  //#region Героїв Дніпра
  {
    "id": 6264613282,
    "lat": 50.5228562,
    "lon": 30.4987695,
    "name": "Героїв Дніпра"
  },
  {
    "id": 6264613283,
    "lat": 50.5228537,
    "lon": 30.499037,
    "name": "Героїв Дніпра"
  },
  //#endregion Героїв Дніпра
  //#region Оболонь
  {
    "id": 661433274,
    "lat": 50.5010221,
    "lon": 30.4974699,
    "name": "Оболонь"
  },
  {
    "id": 661433277,
    "lat": 50.5007732,
    "lon": 30.4989644,
    "name": "Оболонь"
  },
  {
    "id": 661433994,
    "lat": 50.5006545,
    "lon": 30.4974598,
    "name": "Оболонь"
  },
  {
    "id": 747746425,
    "lat": 50.5020915,
    "lon": 30.4975208,
    "name": "Оболонь"
  },
  {
    "id": 747746426,
    "lat": 50.5024019,
    "lon": 30.4975274,
    "name": "Оболонь"
  },
  {
    "id": 747746427,
    "lat": 50.5024494,
    "lon": 30.4989934,
    "name": "Оболонь"
  },
  {
    "id": 747746429,
    "lat": 50.5020933,
    "lon": 30.4989988,
    "name": "Оболонь"
  },
  //#endregion Оболонь
  //#region Мінська
  {
    "id": 751970848,
    "lat": 50.5131582,
    "lon": 30.499286,
    "name": "Мінська"
  },
  {
    "id": 933296453,
    "lat": 50.511407,
    "lon": 30.497834,
    "name": "Мінська"
  },
  {
    "id": 933296464,
    "lat": 50.5113847,
    "lon": 30.4992864,
    "name": "Мінська"
  },
  {
    "id": 933296466,
    "lat": 50.5128694,
    "lon": 30.4978104,
    "name": "Мінська"
  },
  {
    "id": 933296468,
    "lat": 50.5116497,
    "lon": 30.499294,
    "name": "Мінська"
  },
  {
    "id": 933296470,
    "lat": 50.5116015,
    "lon": 30.4978386,
    "name": "Мінська"
  },
  {
    "id": 933296474,
    "lat": 50.512853,
    "lon": 30.4992854,
    "name": "Мінська"
  },
  {
    "id": 933296475,
    "lat": 50.5131611,
    "lon": 30.4978137,
    "name": "Мінська"
  },
  //#endregion Мінська
  //#region Почайна
  {
    "id": 749160803,
    "lat": 50.4854387,
    "lon": 30.498395,
    "name": "Почайна"
  },
  {
    "id": 749161581,
    "lat": 50.4870406,
    "lon": 30.4983182,
    "name": "Почайна"
  },
  {
    "id": 749161986,
    "lat": 50.4870353,
    "lon": 30.4975269,
    "name": "Почайна"
  },
  {
    "id": 749163925,
    "lat": 50.4867274,
    "lon": 30.4983139,
    "name": "Почайна"
  },
  {
    "id": 5423208537,
    "lat": 50.4867312,
    "lon": 30.4975225,
    "name": "Почайна"
  },
  //#endregion Почайна
];


//#endregion subway stops

//#region layers

//const luxMeds = L.layerGroup();
const schools = L.layerGroup();
//const biedronkas = L.layerGroup();
//const lidls = L.layerGroup();
//const malls = L.layerGroup();
const metroBlueLine = L.layerGroup();
const metroGreenLine = L.layerGroup();
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

const redMetroStationIcon = L.divIcon({
  html: "<div style='background-color:#f00; color:#fff; font-size:12px; text-align:center; width:15px; height:15px;'>M</div>",
  iconSize: [15, 15],
  iconAnchor: [10, 10],
});

const greenMetroStationIcon = L.divIcon({
  html: "<div style='background-color:#0f0; color:#fff; font-size:12px; text-align:center; width:15px; height:15px;'>M</div>",
  iconSize: [15, 15],
  iconAnchor: [10, 10],
});

const blueMetroStationIcon = L.divIcon({
  html: "<div style='background-color:#00f; color:#fff; font-size:12px; text-align:center; width:15px; height:15px;'>M</div>",
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
    radius: 500,
  }).addTo(schools);
};

const drawRedLineMetroStation = (lat, lng) => {
  L.marker([lat, lng], { icon: redMetroStationIcon }).addTo(metroRedLine);
};

const drawGreenLineMetroStation = (lat, lng) => {
  L.marker([lat, lng], { icon: greenMetroStationIcon }).addTo(metroGreenLine);
};

const drawBlueLineMetroStation = (lat, lng) => {
  L.marker([lat, lng], { icon: blueMetroStationIcon }).addTo(metroBlueLine);
};

//#endregion draw primitives

//#region layer content methods
const drawSchools = () => {
  // Капнист
  //drawSchool(50.457518, 30.437450, 30);
  // Борщагівська
  //drawSchool(50.448460, 30.469165, 23);
  // Havela 83d
  drawSchool(50.42768471257935, 30.42043054735181, 50);
  // Алекси Тихого
  drawSchool(50.450133, 30.429801, 44);
  // Мирослава
  drawSchool(50.443450265082895, 30.411644450835645, 40);
  // Yaroslava Ivashkevycha St, 10
  drawSchool(50.50499181598968, 30.45451828186324, 40);
  // Vasylenko 23a
  //drawSchool(50.441807, 30.425646, 43);
  // Baidy-Vishnevetskoho St, 21
  drawSchool(50.515054, 30.439462, 60);
  // Kurbasa 5
  //drawSchool(50.429826, 30.388919, 46);

  // Petropavlivska 38
  drawSchool(50.48369846842734, 30.459448014550244, 33);
  // Danyla Shcherbakivskoho St, 53
  drawSchool(50.4763522163916, 30.40524246289106, 43);
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
  for (const station of redLineStations) {
    drawRedLineMetroStation(station.lat, station.lon);
  }
  for (const station of greenLineStations) {
    drawGreenLineMetroStation(station.lat, station.lon);
  }
  for (const station of blueLineStations) {
    drawBlueLineMetroStation(station.lat, station.lon);
  }
};
//#endregion layer content methods

drawSchools();
//drawLidls();
//drawLuxmeds();
drawMetro();

const osmLayer = L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
});

const map = L.map("map", {
  center: [50.4504, 30.5245],
  zoom: 12,
  layers: [osmLayer, schools],
});

const baseLayers = {
  OpenStreetMap: osmLayer,
};

const overlays = {
  Houses: schools,
};

var layerControl = L.control
  .layers(baseLayers, overlays, {
    collapsed: false,
  })
  .addTo(map);

//layerControl.addOverlay(lidls, "Lidl");
//layerControl.addOverlay(luxMeds, "Lux Med");
//layerControl.addOverlay(malls, "Malls");
layerControl.addOverlay(metroRedLine, "Metro Red Line");
layerControl.addOverlay(metroGreenLine, "Metro Green Line");
layerControl.addOverlay(metroBlueLine, "Metro Blue Line");

