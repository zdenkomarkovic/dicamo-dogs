export type Parent = {
  name: string;
  pedigree: string;
  titles: string[];
  health: string[];
  work: string[];
  image?: string;
};

export type PedigreeNode = {
  name: string;
  sire?: PedigreeNode;
  dam?: PedigreeNode;
};

export type Litter = {
  letter: string;
  status: "expected" | "available" | "reserved";
  expectedDate: string;
  intro: string;
  note?: string;
  parents?: [Parent, Parent];
  pedigree?: { sire: PedigreeNode; dam: PedigreeNode };
};

export const litters: Litter[] = [
  {
    letter: "S",
    status: "expected",
    expectedDate: "April 2026",
    intro:
      "WE PLANNED NEW LITTERS IN SPRING 2026.\nMore details soon…\nThey are high quality puppies for dog shows and work.\nMy puppies are available only for homes where they will be beloved pets and companions, which means to live within the owner's family!\nIf you are interested in puppies with cropped ears and tails, you must contact us before puppies will be born.",
    parents: [
      {
        name: "CICERON DI DIWINUM",
        pedigree: "Chico Betelges – Sandra di Diwinum",
        titles: ["CHAMPION OF MONTENEGRO"],
        health: [
          "HD – B (Germany)",
          "VwD – clear",
          "DCM1 – clear",
          "DCM2 – clear",
          "PHPV-PHTVL – free",
          "CARDIO-free (EKG, ECHO, dOPPLER – free)",
        ],
        work: ["BH", "IGP-1"],
        image: "/Ciceron-sedi.jpg",
      },
      {
        name: "ALKYRA DI CASA MONTENEGRO",
        pedigree: "Tahi reme Vito – Quirina di casa MNE",
        titles: ["CHAMPION OF SERBIA", "CHAMPION OF NORD MACEDONIA"],
        health: [
          "HD – A, ED – 0",
          "vWd – clear",
          "DCM1 – carrier",
          "PHPV – PHTVL – free",
          "CARDIO-free (EKG, ECHO, Doppler – free)",
        ],
        work: ["BH", "IGP-1"],
        image: "/Alkyra-sedi--e1622543469142.jpg",
      },
    ],
    pedigree: {
      sire: {
        name: "Ciceron di Diwinum",
        sire: {
          name: "Chico Betelges",
          sire: {
            name: "Eutay del Nasi",
            sire: { name: "Pride of Russia Taymir" },
            dam: { name: "Eureka del Nasi" },
          },
          dam: {
            name: "Jenifer Betelges",
            sire: { name: "Dante delle Querce Nere" },
            dam: { name: "Xenia for Betelges del Nasi" },
          },
        },
        dam: {
          name: "Sandra di Diwinum",
          sire: {
            name: "Osho Renewal",
            sire: { name: "Ares del Nobili Nati" },
            dam: { name: "Absolute Advantage Tejat Pa di Diwinum" },
          },
          dam: {
            name: "Arhangel von Schwarze Kraft",
            sire: { name: "Ema di Diwinum" },
          },
        },
      },
      dam: {
        name: "ALKYRA DI CASA MONTENEGRO",
        sire: {
          name: "Tahi Reme Vito",
          sire: {
            name: "Asterix del Nasi",
            sire: { name: "Tahi Reme Max" },
            dam: { name: "Juga del Nasi" },
          },
          dam: {
            name: "Tahi Reme Jammer",
            sire: { name: "Ahgangster-Dandias de la Villa Vano" },
            dam: { name: "Tahi Reme Demi" },
          },
        },
        dam: {
          name: "Quirina di Casa Montenegro",
          sire: {
            name: "Oz di Casa Giardino",
            sire: { name: "Varenne di Casa Giardino" },
            dam: { name: "Blacktessa di Casa Giardino" },
          },
          dam: {
            name: "Primadonna di Perlanera",
            sire: { name: "Kreal Zeus Sant Liaoster" },
            dam: { name: "Iorlan" },
          },
        },
      },
    },
  },
  {
    letter: "T",
    status: "expected",
    expectedDate: "",
    intro:
      "WE PLANNED NEW LITTERS!\nMORE DETAILS SOON…\nThey are high quality puppies for dog show and work.\nMy puppies available only for homes where they will be beloved pets and companions, which means to live within the owner's family!\nIf you are interested in puppies with cropped ears and tails, you must contact us before puppies will be born.",
    parents: [
      {
        name: "FLYNN DI PERLANERA",
        pedigree: "Jeff di Perlanera – Rumbara di Perlanera",
        titles: [
          "INTERNATIONAL CHAMPION",
          "CHAMPION OF SERBIA",
          "CHAMPION OF BOSNIA AND HERZEGOVINA",
        ],
        health: [
          "HD-A, ED-0",
          "Wvd – Clear",
          "DCM1 – Carrier",
          "DCM2 – Clear",
          "PHPV-PHTVL – free",
          "CARDIO – free (EKG, ECHO, Doppler – free)",
          "Narcolepsy – Clear",
        ],
        work: ["BH", "IGP-1"],
        image: "/Flynn-za-sajt-768x622.jpeg",
      },
      {
        name: "ICE QUEEN DI CASA MONTENEGRO",
        pedigree: "Dante delle Querce Nere – Alkyra di casa MNE",
        titles: [],
        health: [
          "HD-B, ED-0",
          "Wvd – Clear",
          "DCM1 – Clear",
          "PHPV-PHTVL – free",
          "CARDIO – free (EKG, ECHO, Doppler – free)",
        ],
        work: ["BH"],
        image: "/icy_sajt-350x263.jpg",
      },
    ],
    pedigree: {
      sire: {
        name: "FLYNN DI PERLANERA",
        sire: {
          name: "JEFF DI PERLANERA",
          sire: {
            name: "YANICK DEL COLLE DELLA GUARDIA",
            sire: { name: "FERRO DEL COLLE DELLA GUARDIA" },
            dam: { name: "OLIMPIA DEL COLLE DELLA GUARDIA" },
          },
          dam: {
            name: "GINARA GIOIA ERA",
            sire: { name: "PRIDE OF RUSSIA TAYMIR" },
            dam: { name: "FRUTHY FREE DI PERLANERA" },
          },
        },
        dam: {
          name: "RUMBA NERA DI PERLANERA",
          sire: {
            name: "COLT DI PERLANERA",
            sire: { name: "GANGSTER DANDIAS DE LA VILLA VALIANO" },
            dam: { name: "TRUNKA LUNKA DERLANERA" },
          },
          dam: {
            name: "HESSA DI PERLANERA",
            sire: { name: "KRIEGERHOF EXTEMPORE ELIOT" },
            dam: { name: "ZUMA ZEWITA DI PERLANERA" },
          },
        },
      },
      dam: {
        name: "ICE QUEEN DI CASA MONTENEGRO",
        sire: {
          name: "DANTE DELLE QUERCE NERE",
          sire: {
            name: "EBAY DEL TIBU",
            sire: { name: "LISSE DEL TIBU" },
            dam: { name: "LIGURIZIA DI PRISCONTE" },
          },
          dam: {
            name: "ZETA JONES DELLE QUERCE NERE",
            sire: { name: "GIUDA BEH HUR DI BAIA NERA" },
            dam: { name: "FENDI CRISTAL DI BAIA NERA" },
          },
        },
        dam: {
          name: "ALKYRA DI CASA MONTENEGRO",
          sire: {
            name: "TAHI REME VITO",
            sire: { name: "ASTERIX DEL NASI" },
            dam: { name: "TAHI REME JAMEERA" },
          },
          dam: {
            name: "QUIRINA DI CASA MONTENEGRO",
            sire: { name: "OZ DI CASA GIARDINO" },
            dam: { name: "PRIMADONNA DI PERLANERA" },
          },
        },
      },
    },
  },
];
