export type PedigreeNode = {
  name: string;
  image?: string;
  sire?: { name: string; sire?: { name: string }; dam?: { name: string } };
  dam?: { name: string; sire?: { name: string }; dam?: { name: string } };
};

export type DogDetail = {
  slug: string;
  name: string;
  image: string;
  sex: "male" | "female";
  titles?: string[];
  description?: string;
  pedigree?: {
    sire: {
      name: string;
      image?: string;
      sire: { name: string; sire: { name: string }; dam: { name: string } };
      dam: { name: string; sire: { name: string }; dam: { name: string } };
    };
    dam: {
      name: string;
      image?: string;
      sire: { name: string; sire: { name: string }; dam: { name: string } };
      dam: { name: string; sire: { name: string }; dam: { name: string } };
    };
  };
};

export const inMemoriam: DogDetail[] = [
  {
    slug: "primadonna-di-perlanera",
    name: "Primadonna Di Perlanera",
    image: "/mydogs/Primadona1 (1).jpg",
    sex: "female",
    titles: ["INTERNATIONAL CHAMPION"],
    pedigree: {
      sire: {
        name: "Sant Kreal Zeus",
        image: "/mydogs/zeus_balaton_350-e1497798549896.jpg",
        sire: {
          name: "Urbano Del Diamante Nero",
          sire: { name: "Victor Vito Del Rio Bianco" },
          dam: { name: "Indiana Del Diamante Nero" },
        },
        dam: {
          name: "Sant Kreal Ukrashenie",
          sire: { name: "Sant Kreal Rerikh" },
          dam: { name: "Sant Kreal Karmen" },
        },
      },
      dam: {
        name: "Ferrari Flying Di Perlanera",
        image: "/mydogs/FerrariFlying.jpg",
        sire: {
          name: "Zordan Zewi Del Citone",
          sire: { name: "Gino Gomez Del Citone" },
          dam: { name: "Giada Di Villa Conte" },
        },
        dam: {
          name: "Tahi-Reme Ruthy",
          sire: { name: "Livonijas Baron Hearth Of Hamlet" },
          dam: { name: "Tahi-Reme Giniti" },
        },
      },
    },
  },
  {
    slug: "dakota-di-casa-montenegro",
    name: "Dakota Di Casa Montenegro",
    image: "/champions/Dakota-nova-e1635633866902.jpg",
    sex: "female",
    titles: ["CH"],
    pedigree: {
      sire: {
        name: "Power Playboy Od Telepa",
        image: "/litters/Power-playboy-300x245.jpg",
        sire: {
          name: "Eko Royal Bell",
          sire: { name: "Nitro Del Rio Bianco" },
          dam: { name: "Zara Royal Bell" },
        },
        dam: {
          name: "Janis Joplin Od Telepa",
          sire: { name: "Babilon Del Mediano" },
          dam: { name: "Free Felicite Od Telepa" },
        },
      },
      dam: {
        name: "Bocasa Di Casa Montenegro",
        image: "/mydogs/DSC00168.jpg",
        sire: {
          name: "Fedor Del Nasi",
          sire: { name: "Baron Nike Renewal" },
          dam: { name: "Akuna Matata De Grande Vinko" },
        },
        dam: {
          name: "Junior Odi Opium Od Telepa",
          sire: { name: "Horus Del Mediano" },
          dam: { name: "Klaudia Kardinale Od Telepa" },
        },
      },
    },
  },
  {
    slug: "quirina-di-casa-montenegro",
    name: "Quirina Di Casa Montenegro",
    image: "/litters/Quirina-1-e1683042410523.jpg",
    sex: "female",
    titles: ["CH"],
    pedigree: {
      sire: {
        name: "Oz Di Casa Giardino",
        image: "/litters/oz-moj-2.jpg",
        sire: {
          name: "Varenne Di Casa Giardino",
          sire: { name: "Fedor Del Nasi" },
          dam: { name: "Giamur Di Casa Giardino" },
        },
        dam: {
          name: "Blacktessa Di Casa Giardino",
          sire: { name: "Redrascal Del Fiorsilva" },
          dam: { name: "Meera Di Casa Giardino" },
        },
      },
      dam: {
        name: "Primadonna Di Perlanera",
        image: "/mydogs/Primadona1 (1).jpg",
        sire: {
          name: "Sant Kreal Zeus",
          sire: { name: "Urbano Del Diamante Nero" },
          dam: { name: "Sant Kreal Ukrashenie" },
        },
        dam: {
          name: "Ferrari Flying Di Perlanera",
          sire: { name: "Zordan Zewi Del Citone" },
          dam: { name: "Tahi-Reme Ruthy" },
        },
      },
    },
  },
];

export const dogs: DogDetail[] = [
  {
    slug: "penelopa-di-casa-montenegro",
    name: "Penelopa Di Casa Montenegro",
    image: "/mydogs/Penelopa-5-naslovna-e1514564922507.jpg",
    sex: "female",
    titles: ["CH"],
    pedigree: {
      sire: {
        name: "Valdo From Lipar Land",
        image: "/litters/Valdo-fon-Lipar-Land.jpg",
        sire: {
          name: "Tahi-Reme Max",
          sire: { name: "Pride Of Russia Ferro" },
          dam: { name: "Tahi Reme Ginity" },
        },
        dam: {
          name: "Dream Del Nasi",
          sire: { name: "Sant Kreal Zeus" },
          dam: { name: "Pride Of Russia Dasha" },
        },
      },
      dam: {
        name: "Cherry Salute Di Ferro",
        image: "/litters/Cherry2.jpg",
        sire: {
          name: "Pako Daker",
          sire: { name: "Baron Nike Renewal" },
          dam: { name: "Ornella De Grande Vinko" },
        },
        dam: {
          name: "Lara Di Altobello",
          sire: { name: "Ferrofarah Gomez Di Campovalano" },
          dam: { name: "Wild Cherry Di Altobello" },
        },
      },
    },
  },
  {
    slug: "hellstorm-di-casa-montenegro",
    name: "Hellstorm Di Casa Montenegro",
    image: "/mydogs/Megi-2-768x578 (1).jpg",
    sex: "female",
    titles: ["CH"],
    pedigree: {
      sire: {
        name: "Angel Of Shaytan Sky No Limit",
        image: "/litters/sky-puppies.png",
        sire: {
          name: "Victor Del Nasi",
          sire: { name: "Eutay Del Nasi" },
          dam: { name: "Alexa Del Nasi" },
        },
        dam: {
          name: "Triona Angel Of Shaytan",
          sire: { name: "Colt Di Perlanera" },
          dam: { name: "Angel Of Shaytan Alina" },
        },
      },
      dam: {
        name: "Daenery Of Evel Freedom",
        sire: {
          name: "Hazar Di Altobello",
          sire: { name: "Da Vinci El Greco Nero" },
          dam: { name: "Tijana Daria Di Altobello" },
        },
        dam: {
          name: "Cindy Craford Od Telepa",
          sire: { name: "Indio Di Perlanera" },
          dam: { name: "Aphrodite Tina Aurora Od Telepa" },
        },
      },
    },
  },
  {
    slug: "zara-di-casa-montenegro",
    name: "Zara Di Casa Montenegro",
    image: "/mydogs/Zara-2-300x200.jpg",
    sex: "female",
    pedigree: {
      sire: {
        name: "Tahi Reme Pacino",
        image: "/litters/Pacino-cove-.jpg",
        sire: {
          name: "Oksamit De Grande Vinko",
          sire: { name: "Leo Vom Markischen Land" },
          dam: { name: "Gekata De Vinko Iz Doliny Dolmenov" },
        },
        dam: {
          name: "Tahi Reme Ameeriah",
          sire: { name: "Ale Alamos Del Citone" },
          dam: { name: "Tahi Reme Giniti" },
        },
      },
      dam: {
        name: "Penelopa Di Casa Montenegro",
        image: "/mydogs/Penelopa-5-naslovna-e1514564922507.jpg",
        sire: {
          name: "Valdo From Lipar Land",
          sire: { name: "Tahi Reme Max" },
          dam: { name: "Dream Del Nasi" },
        },
        dam: {
          name: "Cherry Salute Di Fero",
          sire: { name: "Pako Daker" },
          dam: { name: "Lara Di Altobello" },
        },
      },
    },
  },
  {
    slug: "alkyra-di-casa-montenegro",
    name: "Alkyra Di Casa Montenegro",
    image: "/mydogs/kira-e1622919559665-300x263.jpg",
    sex: "female",
    titles: ["CH"],
    pedigree: {
      sire: {
        name: "Tahi Reme Vito",
        image: "/litters/Tahi-reme-Vito-e1549123537776.jpg",
        sire: {
          name: "Asterix Del Nasi",
          sire: { name: "Tahi Reme Max" },
          dam: { name: "Juga Del Nasi" },
        },
        dam: {
          name: "Tahi Reme Jameerah",
          sire: { name: "Gangster-Dandias De La Villa Valiano" },
          dam: { name: "Tahi Reme Demi" },
        },
      },
      dam: {
        name: "Quirina Di Casa Montenegro",
        image: "/litters/Quirina-1-e1683042410523.jpg",
        sire: {
          name: "Oz Di Casa Giardino",
          sire: { name: "Varenne Di Casa Giardino" },
          dam: { name: "Blacktessa Di Casa Giardino" },
        },
        dam: {
          name: "Primadonna Di Perlanera",
          sire: { name: "Sant Kreal Zeus" },
          dam: { name: "Ferrari Flying Di Perlanera" },
        },
      },
    },
  },
  {
    slug: "rufus-di-casa-montenegro",
    name: "Rufus Di Casa Montenegro",
    image: "/mydogs/Rufus-palanka-naslovna-e1495981872346.jpg",
    sex: "male",
    titles: ["INTERNATIONAL CHAMPION"],
    pedigree: {
      sire: {
        name: "Tahi-Reme Gandalf",
        image: "/litters/Tahi-reme-Gandalf.jpg",
        sire: {
          name: "Tahi-Reme Max",
          sire: { name: "Pride Of Russia Ferro" },
          dam: { name: "Tahi-Reme Giniti" },
        },
        dam: {
          name: "Tahi-Reme Holly",
          sire: { name: "Andres Crockett Del Citone" },
          dam: { name: "Tahi-Reme Giovana" },
        },
      },
      dam: {
        name: "Fanta Di Altobello",
        image: "/litters/Fanta-altobello.jpg",
        sire: {
          name: "Maxim Di Altobello",
          sire: { name: "Icarus Di Altobello" },
          dam: { name: "Daria Deniz Di Altobello" },
        },
        dam: {
          name: "Freya Fleming Di Altobello",
          sire: { name: "Macho Di Altobello" },
          dam: { name: "Zulu Lady Di Altobello" },
        },
      },
    },
  },
  {
    slug: "dante-delle-querce-nere",
    name: "Dante Delle Querce Nere",
    image: "/mydogs/D9-288x300.jpg",
    sex: "male",
    titles: ["INTERNATIONAL CHAMPION"],
    pedigree: {
      sire: {
        name: "Ebay Del Tibur",
        image: "/mydogs/EBAY-DEL-TIBUR-small--300x253.jpg",
        sire: {
          name: "Ulisse Del Tibur",
          sire: { name: "Zylian Zais Del Citone" },
          dam: { name: "Ghana Grim Dei Sauli Grimaldi" },
        },
        dam: {
          name: "Ligurizia Del Prisconte",
          sire: { name: "Ale Alamo's Del Citone" },
          dam: { name: "Halinka Del Prisconte" },
        },
      },
      dam: {
        name: "Zeta Jones Delle Querce Nere",
        image: "/mydogs/Zeta-jones-small-300x228.jpg",
        sire: {
          name: "Giuda Ben Hur Di Baia Nera",
          sire: { name: "Iron Di Casa Fox" },
          dam: { name: "Elektra" },
        },
        dam: {
          name: "Fendi Crystal Di Baia Nera",
          sire: { name: "Don Diego V Harten Kern" },
          dam: { name: "Berenike" },
        },
      },
    },
  },
  {
    slug: "flynn-di-perlanera",
    name: "Flynn Di Perlanera",
    image: "/mydogs/Flynn-1-768x622 (1).jpeg",
    sex: "male",
    titles: ["INTERNATIONAL CHAMPION"],
    pedigree: {
      sire: {
        name: "Jeff Di Perlanera",
        image: "/mydogs/JEFF-DI-PERLANERA-1.jpg",
        sire: {
          name: "Yanik Del Colle Della Guardia",
          sire: { name: "Ferro Di Colle Della Guardia" },
          dam: { name: "Olimpia Di Colle Della Guardia" },
        },
        dam: {
          name: "Ginara Giota Di Perlanera",
          sire: { name: "Pride Of Russia Taymir" },
          dam: { name: "Fruthy Free Di Perlanera" },
        },
      },
      dam: {
        name: "Rumba Nera Di Perlanera",
        image: "/mydogs/RUMBA-NERA-DI-PERLANERA.jpg",
        sire: {
          name: "Colt Di Perlanera",
          sire: { name: "Gangster-Dandias De La Villa Valiano" },
          dam: { name: "Trunka Lunka Di Perlanera" },
        },
        dam: {
          name: "Hessa Di Perlanera",
          sire: { name: "Kriegerhof Extremepore Eliot" },
          dam: { name: "Zuma Zewita Di Perlanera" },
        },
      },
    },
  },
];
