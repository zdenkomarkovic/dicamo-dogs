export type NewsItem = {
  date: string;
  title: string;
  text: string;
  icon?: string;
  link?: { href: string; label: string; prefix: string; suffix?: string };
  images?: { src: string; alt: string; portrait?: boolean }[];
};

export const news: NewsItem[] = [
  {
    date: "2022-04-02",
    title: "We Have a Winner!",
    text: "4. DOBERMAN CHAMPION CUP – BEČEJ (SRB)\n\nJudges:\nJossi Grados (ISR)\nDemetris Christodoulou (CYP)\nAndy Hudono (IDN)\n\nDANTE DELLE QUERCE NERE\n(Ebay del Tibur – Zeta Jones delle Querce Nere)\n\nWorking Class – V1, CAC, Class Winner!",
    icon: "/news/pehar.gif",
    images: [
      { src: "/news/4-cup-Becej.jpg", alt: "Dante delle Querce Nere" },
      { src: "/news/D1-768x677.jpg", alt: "Dante delle Querce Nere" },
    ],
  },
  {
    date: "2022-04-09",
    title: "He Won Again!",
    text: "IDS CACIB SRBOBRAN (SRB)\nJudge: Dragan Rajić (SRB)\n\nDANTE DELLE QUERCE NERE\n(Ebay del Tibur – Zeta Jones delle Querce Nere)\n\nChampion Class – CAC, CACIB, BOB!\n\nWith this title Dante became candidate for Grand CH Serbia!\n\nCongratulation Dante!",
    icon: "/news/pehar.gif",
    images: [
      { src: "/news/D7-768x800 (1).jpg", alt: "Dante delle Querce Nere", portrait: true },
    ],
  },
  {
    date: "2022-05-05",
    title: "Greetings from France!",
    text: "FUNNY LEIA DI CASA MONTENEGRO\n(Sant Kreal Tyrant – Zara di casa Montenegro)",
    icon: "/news/France-150x150.png",
    images: [
      { src: "/news/Leia-768x1024 (1).jpg", alt: "Funny Leia di Casa Montenegro", portrait: true },
    ],
  },
  {
    date: "2022-05-29",
    title: "Big Success in Bosnia!",
    text: "IDS CACIB ZVORNIK (BIH)\nJudge: Dragan Babić (SRB)\n\nDANTE DELLE QUERCE NERE\n(Ebay del Tibur – Zeta Jones delle Querce Nere)\n\nWorking Class – CAC, CACIB, BOB!\n\nWith this title Dante became\nINTERNATIONAL CHAMPION!\n\nCONGRATULATION DANTE!",
    icon: "/news/pehar.gif",
    images: [
      { src: "/news/5M.jpg", alt: "Dante delle Querce Nere", portrait: true },
    ],
  },
  {
    date: "2022-06-15",
    title: "Our New Star!",
    text: "We want to present you our new future star:\n\nHELLSTORM DI CASA MONTENEGRO (MAGGIE)\n(Sky No Limit Angel's of Shaytan – Daenery of Evel Freedom)\n\n10 months old",
    images: [
      { src: "/news/Megi-2-768x578.jpg", alt: "Hellstorm di Casa Montenegro" },
      { src: "/news/Megi-3-768x928 (1).jpg", alt: "Hellstorm di Casa Montenegro", portrait: true },
    ],
  },
  {
    date: "2022-07-01",
    title: "New Litter Is Born!",
    text: "WE HAVE PUPPIES!\n\nProudly parents:\n\nDANTE DELLE QUERCE NERE  &  ALKYRA DI CASA MONTENEGRO",
    icon: "/news/Stork-brings-puppies.gif",
  },
  {
    date: "2022-07-31",
    title: "For Sale!",
    text: "AVAILABLE YOUNG FEMALE!\n\nTITA (GINA)\n(Hector di Altobello – Bety of Simple Story)\n\n7 months old",
  },
  {
    date: "2022-08-12",
    title: "First Photos!",
    text: "FIRST PHOTOS OF OUR \"I\" LITTER!\nThey are 6 weeks old.",
    icon: "/news/Stork-brings-puppies.gif",
    images: [
      { src: "/news/IMG_3855-768x710.jpeg", alt: "I Litter di Casa Montenegro" },
    ],
  },
  {
    date: "2022-08-28",
    title: "New Victory!",
    text: "NATIONAL DOG SHOW CAC KOVIN (SRB)\nJudge: Saša Ješić (SRB)\n\nHEKTOR DI CASA MONTENEGRO\n(Angel's of Shaytan Sky No Limit – Daenery of Evel Freedom)\n\nJunior Class – PRM, JUNIOR CLASS WINNER\n\nwith this title Hektor became\n\nJUNIOR CHAMPION OF SERBIA!\n\nCONGRATULATION TO THE OWNERS!",
    icon: "/news/pehar.gif",
    images: [
      { src: "/news/Hector-di-casa-MNE-768x701.jpg", alt: "Hektor di Casa Montenegro" },
    ],
  },
  {
    date: "2022-09-07",
    title: "Greetings from USA",
    text: "ULRICH DI CASA MONTENEGRO\n(Sant Kreal Tyrant – Osaka di casa Montenegro)",
    icon: "/news/United-States-150x150.png",
    images: [
      { src: "/news/Utz-runung-e1683039912316.jpg", alt: "Ulrich di Casa Montenegro", portrait: true },
    ],
  },
  {
    date: "2022-09-27",
    title: "\"J\" litter is here!",
    text: "WE HAVE NEW BABIES!\n\n\"J\" litter has just been born.",
    icon: "/news/Stork-brings-puppies.gif",
  },
  {
    date: "2022-11-08",
    title: "First Photos!",
    text: "FIRST PHOTOS OF OUR \"J\" LITTER!\nThey are 6 weeks old.",
    icon: "/news/Stork-brings-puppies.gif",
  },
  {
    date: "2022-12-04",
    title: "Great news from Madagascar!",
    text: "MADA DOBERMAN SHOW 2022 (MDG)\nJudge: Jean Paul Kerihuel (FRA)\n\nBONITA DI CASA MONTENEGRO\n(Cowboy Lucky Luck di Altobello – Penelopa di casa Montenegro)\n\nOpen Class – FEMALE CLUB WINNER, BOB\n\nCONGRATULATIONS TO NIAINA!",
    icon: "/news/pehar.gif",
    images: [
      { src: "/news/316568945_1372395473531685_5428640026226618742_n.png", alt: "Bonita di Casa Montenegro", portrait: true },
    ],
  },
  {
    date: "2022-12-20",
    title: "Greetings from Canada!",
    text: "INVICTUS DI CASA MONTENEGRO\n(Dante delle Querce Nere – Alkyra di casa Montenegro)\n\nHe is five months old and he really enjoy in his new home.",
    icon: "/news/Canada-Flag-150x150.png",
    images: [
      { src: "/news/Invictus-768x589.jpg", alt: "Invictus di Casa Montenegro" },
    ],
  },
  {
    date: "2022-12-25",
    title: "Merry Christmas and Happy New Year!",
    text: "All the best to you and your dogs in 2023. year!\n\n\"Di casa Montenegro\" team",
    images: [
      { src: "/news/Čestitka-za-Novu-Godinu-i-Božić.jpg", alt: "Merry Christmas and Happy New Year" },
    ],
  },
  {
    date: "2023-01-06",
    title: "Greetings from France",
    text: "ISKANDER DI CASA MONTENEGRO\n(Dante delle Querce Nere – Alkyra di casa Montenegro)\n6 months old",
    icon: "/news/France-150x150.png",
    images: [
      { src: "/news/Iskander-1.jpg", alt: "Iskander di Casa Montenegro", portrait: true },
    ],
  },
  {
    date: "2023-01-20",
    title: "New health results!",
    text: "HELLSTORM DI CASA MONTENEGRO\n(Angel's of Shaytan Sky No Limit – Daenery of Evel Freedom)\n\nHD A, ED – 0\nDCM – CLEAR\nvWd – CLEAR",
    icon: "/news/vet-znak.jpg",
  },
  {
    date: "2023-02-12",
    title: "Greetings from Italy!",
    text: "JOSEFINE DI CASA MONTENEGRO\n(Tahi-Reme Chico – Freya di casa Montenegro)\n\nFive months old.\n\nGrazie Francesco for this beautiful photo!",
    icon: "/Italy-150x150.png",
    images: [
      { src: "/news/Josefine-2.jpg", alt: "Josefine di Casa Montenegro", portrait: true },
    ],
  },
  {
    date: "2023-02-27",
    title: "Greeting from Canada!",
    text: "JAHRESTAL DI CASA MONTENEGRO\n(Blackjack Bluffer von Jahrestal – Enigma di casa Montenegro)\n\nNine years old.",
    icon: "/news/Canada-Flag-150x150.png",
    images: [
      { src: "/news/Enzo-1.jpg", alt: "Jahrestal di Casa Montenegro", portrait: true },
    ],
  },
  {
    date: "2023-03-17",
    title: "Greetings from France!",
    text: "JAGGER SIRIUS DI CASA MONTENEGRO\n(Tahi-reme Chico – Freya di casa Montenegro)\n\nenjoy good time with his friend.",
    icon: "/news/France-150x150.png",
    images: [
      { src: "/news/Jager-1-768x423.jpeg", alt: "Jagger Sirius di Casa Montenegro" },
    ],
  },
  {
    date: "2023-04-01",
    title: "We start to compete again!",
    text: "After long Winter new season of dog shows started!\n\nWe participated in some and it looks like we're off to a good start…\n\nNATIONAL DOG SHOW KIKINDA (SRB)\n\nJudge: Marta Šipoš (SRB)\n\nHELLSTORM DI CASA MONTENEGRO\n(Angel's of Shaytan – Daenery of Evel Freedom)\n\nINTERMEDIA CLASS Brown females – CAC\n\nFLYNN DI PERLANERA\n(Jeff di Perlanera – Rumba Nera di Perlanera)\n\nINTERMEDIA CLASS Black males – CAC",
    images: [
      { src: "/news/Megi-KI.jpg", alt: "Hellstorm di Casa Montenegro" },
    ],
  },
  {
    date: "2023-04-02",
    title: "Maggie did it again!",
    text: "NATIONAL DOG SHOW ŠID (SRB)\nJudge: Nenad Matejević (SRB)\n\nHELLSTORM DI CASA MONTENEGRO\n(Angel's of Shaytan Sky No Limit – Daenery of Evel Freedom)\n\nINTERMEDIA CLASS Brown females – CAC",
    images: [
      { src: "/news/Megi-3-768x928.jpg", alt: "Hellstorm di Casa Montenegro", portrait: true },
    ],
  },
  {
    date: "2023-04-15",
    title: "We have a new Champion!",
    text: "NATIONAL DOG SHOW BAČKO PETROVO SELO (SRB)\nJudge: Tibor Gere (SRB)\n\nHELLSTORM DI CASA MONTENEGRO\n(Angel's of Shaytan Sky No Limit – Daenery of Evel Freedom)\n\nOPEN CLASS Brown females – CAC\n\nWith this title our Maggie (Hellstorm) became\nCHAMPION OF SERBIA!\n\nCONGRATULATION MAGGIE!",
    icon: "/news/pehar.gif",
  },
  {
    date: "2023-04-23",
    title: "Another big success!",
    text: "INTERNATIONAL DOG SHOW NATALINCI (SRB)\nJudge: Mića Mladenović (SRB)\n\nFLYNN DI PERLANERA\n(Jeff di Perlanera – Rumba Nera di Perlanera)\n\nINTERMEDIA CLASS Black males – CAC, CACIB, BOS!\n\nWith these titles our Flynn became\nCandidate for International Champion\nand\nCandidate for Champion of Serbia!",
    images: [
      { src: "/news/Flynn-Natalinci-cacib.jpg", alt: "Flynn di Perlanera", portrait: true },
    ],
  },
  {
    date: "2023-04-28",
    title: "SOLD!",
    text: "KHAN DAHAR DI CASA MONTENEGRO\n(Destiny's Phoenix Nadal – Alkyra di casa Montenegro)\n\n3 months old",
  },
  {
    date: "2023-06-07",
    title: "Top puppy is available!",
    text: "KASSIUS KLAY DI CASA MONTENEGRO\n(Destiny's Phoenix Nadal – Alkyra di casa Montenegro)\n\n4 months old",
  },
  {
    date: "2023-06-18",
    title: "New Champion!",
    text: "INTERNATIONAL DOG SHOW\nCACIB SUBOTICA (SRB)\n\nJudge: Sava Ignjatović (SRB)\n\nFLYNN DI PERLANERA\n(Jeff di Perlanera – Rumba Nera di Perlanera)\n\nWorking Class – CAC\n\nWith this title Flynn became Champion of Serbia!\n\nCONGRATULATION FLYNN!",
    icon: "/news/pehar.gif",
    images: [
      { src: "/news/Flynn-1-768x648.jpg", alt: "Flynn di Perlanera" },
    ],
  },
  {
    date: "2023-07-04",
    title: "First Photos of Our \"L\" Litter",
    text: "Only two puppies are available.\nPuppies are six weeks old now.",
  },
  {
    date: "2023-08-02",
    title: "Greetings from France",
    text: "KHALI DI CASA MONTENEGRO\n(Destiny's Phoenix Nadal – Alkyra di casa Montenegro)\n\n5 months old",
    icon: "/news/France-150x150.png",
    images: [
      { src: "/news/khali-ferrari-768x644.jpg", alt: "Khali di Casa Montenegro" },
    ],
  },
  {
    date: "2023-12-29",
    title: "We wish you a lot of health, hapiness and fun in the New Year!",
    text: "",
    images: [
      { src: "/news/Post-card_1-768x768.jpg", alt: "New Year wishes" },
    ],
  },
  {
    date: "2024-01-20",
    title: "First Birthday!",
    text: "KING KIBA DI CASA MONTENEGRO\n(Destiny Phoenix Nadal – Alkyra di casa Montenegro)\n\nis one year old now.\n\nHAPPY BIRTHDAY KIBA!",
    icon: "/news/France-150x150.png",
    images: [
      { src: "/news/King-Kiba.jpg", alt: "King Kiba di Casa Montenegro", portrait: true },
    ],
  },
  {
    date: "2024-02-17",
    title: "Photo of the Day",
    text: "CH VIVARO DI CASA MONTENEGRO\n(Rufus di casa MNE – Lia Loca di casa MNE)",
    images: [
      { src: "/news/Vivaro-di-casa-Montenegro-768x784.jpg", alt: "CH Vivaro di Casa Montenegro", portrait: true },
    ],
  },
  {
    date: "2024-02-24",
    title: "We have new litter!",
    text: "We are glade to inform you that new puppies are born.\nIt's our \"M\" litter.\n\nCheck details on \"puppies\" page.\n\nVIS MAJOR DEL NASI\n(Eutay del Nasi – Alexa del Nasi)\n\nproudly father of this litter.",
    icon: "/news/Stork-brings-puppies.gif",
    images: [
      { src: "/news/Vis-Major-del-Nasi-1-768x577.jpg", alt: "Vis Major del Nasi" },
    ],
  },
  {
    date: "2024-05-19",
    title: "We had great success in Bosnia",
    text: "INTERNATIONAL DOG SHOW\nCACIB ZVORNIK (BIH)\n\nJudge: Nenad Nedimović (SRB)\n\nFLYNN DI PERLANERA\n(Jeff di Perlanera – Rumba Nera di Perlanera)\n\nChampion Class – CAC, RCACIB\n\nSPECIALTY DOG SHOW FOR II GROUP\n\nChampion Class – CAC, CLUB WINNER\n\nJudge: Darko Živanović (SRB)\n\nWith these two titles Flynn became Candidate for Champion of Bosnia!\n\nCONGRATULATIONS FLYNN!",
    images: [
      { src: "/news/flynn-bosna.jpg", alt: "Flynn di Perlanera" },
    ],
  },
  {
    date: "2024-05-29",
    title: "Available male puppy!",
    text: "Puppy male with top Euro bloodlines available for new home!\nPuppy is 3,5 months old now and very soon he can be delivered to your home.",
  },
  {
    date: "2024-06-17",
    title: "Greetings from Canada!",
    text: "INVICTUS DI CASA MONTENEGRO\n(Dante delle Querce Nere – Alkyra di casa Montenegro)",
    icon: "/news/Canada-Flag-150x150.png",
    images: [
      { src: "/news/Victus-1.jpg", alt: "Invictus di Casa Montenegro" },
      { src: "/news/vict.jpg", alt: "Invictus di Casa Montenegro" },
    ],
  },
  {
    date: "2024-07-08",
    title: "SOLD!",
    text: "NEW PHOTOS OF OUR MAGNUM (MAX)!\n\nHe is four and half month old now and he is ready for new home.\nHe have very open character, full of love and always ready for playing with companions.\nAlso, he have great preference to be working or guard dog.\nWe select carefully this combination with top European bloodlines.\nPuppy comes with EU Pet passport, all health treatments and now he wait for new owner.\nMaybe that is you?\n\nMAGNUM DI CASA MONTENEGRO\n(Vis Major del Nasi – Alkyra di casa Montenegro)",
  },
  {
    date: "2024-08-15",
    title: "Greetings from Portugal!",
    text: "OBELIX DI CASA MONTENEGRO\n(Purgays Porsche di Altobello – Fairy di casa Montenegro)\n10 years old.",
    icon: "/news/Portugal-150x150.png",
    images: [
      { src: "/news/Obelix-10-768x513.jpg", alt: "Obelix di Casa Montenegro" },
    ],
  },
  {
    date: "2024-09-07",
    title: "We have a new INT. Champion!",
    text: "INTERNATIONAL DOG SHOW – CACIB ŠAMAC (BIH)\nJudge: Roberto Schill (ROM)\n\nFLYNN DI PERLANERA\n(Jeff di Perlanera – Rumba Nera di Perlanera)\n\nChampion Class – CAC, CACIB, BOB!\n\nWith this title Flynn became\nInternational Champion\nand\nChampion of Bosnia and Herzegovina!\n\nCONGRATULATION, FLYNN!",
    icon: "/news/pehar.gif",
    images: [
      { src: "/news/Flynn-Šamac.jpg", alt: "Flynn di Perlanera", portrait: true },
    ],
  },
  {
    date: "2024-12-25",
    title: "Merry Christmas and Happy New Year!",
    text: "",
    images: [
      { src: "/news/NG-2025.-1-768x768.jpg", alt: "Merry Christmas and Happy New Year" },
    ],
  },
  {
    date: "2025-02-17",
    title: "Greetings from Bulgaria!",
    text: "LADY HAIFA DI CASA MONTENEGRO\n(Narkos del Monte Aspro – Hellstorm di casa Montenegro)",
    icon: "/news/Bulgaria-Flag-150x150.png",
    images: [
      { src: "/news/Latifa.jpg", alt: "Lady Haifa di Casa Montenegro", portrait: true },
    ],
  },
  {
    date: "2025-03-27",
    title: "We Have Puppies!",
    text: "\"O\" LITTER IS BORN!\n\n(Di casa ORO Zig Zag – Ice Queen di casa Montenegro)",
    icon: "/news/Stork-brings-puppies.gif",
  },
  {
    date: "2025-04-18",
    title: "We have new \"P\" litter!",
    text: "Proudly parents of this litter:\n\nTahi reme Arthur\n(Fort Belators Ivanquisher – Tahi reme Juana)\n\nAlkyra di casa Montenegro\n(Tahi reme Vito – Quirina di casa MNE)",
    icon: "/news/Stork-brings-puppies.gif",
    images: [
      { src: "/news/Tahi-reme-Arthur-sajt-300x230 (1).jpg", alt: "Tahi reme Arthur" },
      { src: "/news/Kira-1-e1744980113319-300x225 (1).jpg", alt: "Alkyra di casa Montenegro" },
    ],
  },
  {
    date: "2025-05-11",
    title: "Top Female Available!",
    text: "OLIMPIA DI CASA MONTENEGRO\n(Di casa Oro Zig Zag – Ice Queen di casa MNE)",
    images: [
      { src: "/news/rf1-768x603.jpg", alt: "Olimpia di Casa Montenegro" },
    ],
  },
  {
    date: "2025-07-22",
    title: "She's looking for a new home!",
    text: "OLIMPIA DI CASA MONTENEGRO\n(Di casa Oro Zig Zag – Ice Queen di casa Montenegro)\n\nThis chocolate princess is four months old and available for new home.\n\nSOLD!",
  },
  {
    date: "2025-07-02",
    title: "He's Ready for New Home!",
    text: "SOLD!\n\nPETER PAN DI CASA MONTENEGRO\n(Tahi reme Arthur – Alkyra di casa Montenegro)",
  },
  {
    date: "2025-08-21",
    title: "Photo of the day",
    text: "GREETINGS FROM FRANCE!\n\nPETER PAN DI CASA MONTENEGRO\n(Tahi-reme Arthur – Alkyra di casa Montenegro)\n4,5 months old.\n\nMr. Roland, Thank you for this beautiful photo!",
    icon: "/news/France-150x150.png",
    images: [
      { src: "/news/Petar-Pan.jpg", alt: "Peter Pan di Casa Montenegro", portrait: true },
    ],
  },
  {
    date: "2025-09-20",
    title: "Our new hope!",
    text: "GALAXY WINNER – BATOČINA (SRB)\n\nJudges: Miroslav Bedeković (CRO) & Erika Szokol (HUN)\n\nOCTAVIA DI CASA MONTENEGRO – OZZY\n(Di casa Oro Zig Zag – Ice Queen di casa Montenegro)\n\nBABY CLASS – VP, 3. place\n\nThis was her first competition.",
    images: [
      { src: "/news/Ozi-Galaxy-3-768x986.jpg", alt: "Octavia di Casa Montenegro", portrait: true },
      { src: "/news/Ozi-Galaxy-1-768x644.jpg", alt: "Octavia di Casa Montenegro" },
    ],
  },
  {
    date: "2025-10-06",
    title: "Greetings from Germany",
    text: "OCEAN ORA DI CASA MONTENEGRO\n(Di casa Oro Zig Zag – Ice Queen di casa Montenegro)\n6 months old",
    icon: "/news/Germany-150x150.png",
    images: [
      { src: "/news/Ora.jpg", alt: "Ocean Ora di Casa Montenegro", portrait: true },
    ],
  },
  {
    date: "2025-10-19",
    title: "New Competition for Ozzy",
    text: "II ŠUMADIJA DOBERMAN CUP 2025.\nJudges: Vera Milošević & Vladimir Mrdak (SRB)\n\nOCTAVIA DI CASA MONTENEGRO (OZZY)\n(Di casa Oro Zig Zag – Ice Queen di casa Montenegro)\n\nPUPPY CLASS: VP – 3.place",
    images: [
      { src: "/news/Ozzy-sumadija1-768x738.jpg", alt: "Octavia di Casa Montenegro" },
      { src: "/news/Ozzy-sumadija2.jpg", alt: "Octavia di Casa Montenegro", portrait: true },
    ],
  },
  {
    date: "2025-11-15",
    title: "Greetings from Canada!",
    text: "NIKOLAY DI CASA MONTENEGRO\n(Di casa Oro Zig Zag – Ice Queen di casa Montenegro)",
    icon: "/news/Canada-Flag-150x150.png",
    images: [
      { src: "/news/Nikolay-Canada-768x768.jpg", alt: "Nikolay di Casa Montenegro" },
      { src: "/news/Nikolay2.jpg", alt: "Nikolay di Casa Montenegro", portrait: true },
    ],
  },
  {
    date: "2025-12-27",
    title: "We wish you a …",
    text: "We wish that New 2026. Year\n\nbring many of good health, love, joy, harmony, understanding,\n\nprogres in all fealds of life and with smile on face and mind,\n\nto all of you and us!\n\nCHEERS!",
    images: [
      { src: "/news/postcard-768x763.jpg", alt: "New Year wishes" },
    ],
  },
  {
    date: "2026-01-03",
    title: "Greetings from Germany",
    text: "OCEAN'S ORA DI CASA MONTENEGRO\n(Di casa Oro Zig Zag – Ice Queen di casa MNE)",
    icon: "/news/Germany-150x150.png",
    images: [
      { src: "/news/Oceans-Ora-2-1.jpg", alt: "Ocean's Ora di Casa Montenegro", portrait: true },
    ],
  },
  {
    date: "2026-02-14",
    title: "Greetings from USA",
    text: "ULRICH DI CASA MONTENEGRO (UTZ)\n(Sant Kreal Tyrant – Osaka di casa Montenegro)",
    icon: "/news/United-States-150x150.png",
    images: [
      { src: "/news/Ulrich-di-casa-MNE-768x1024.jpg", alt: "Ulrich di Casa Montenegro", portrait: true },
    ],
  },
  {
    date: "2026-02-21",
    title: "New Mating in Our Kennel",
    text: "Ciceron & Alkyra\n\nWe expect puppies around 21. April.",
    link: { href: "/puppies", label: "here", prefix: 'More details "' },
    icon: "/sapa.png",
    images: [
      { src: "/Ciceron-sedi.jpg", alt: "Ciceron", portrait: true },
      { src: "/Alkyra-sedi--e1622543469142.jpg", alt: "Alkyra", portrait: true },
    ],
  },
  {
    date: "2026-03-17",
    title: "Greetings from Italy",
    text: "XANTIA DI CASA MONTENEGRO\n\n(Ruffus di Casa Montenegro – Assy)",
    icon: "/Italy-150x150.png",
    images: [
      { src: "/Xantia-Yuma.jpg", alt: "Xanadu di Casa Montenegro", portrait: true },
    ],
  },
  {
    date: "2026-04-24",
    title: "New Mating!",
    text: "INT.CH FLYNN DI PERLANERA\n&\nCH ICE QUEEN DI CASA MONTENEGRO\n\nWe expect a great litter from this combination.\nPuppies will have top European bloodlines, noble and open character, good health.\nWe have a big expectations from this litter and I can't wait to see them.\nYou can be a part of this expectation.\nReserve your puppy now!",
    link: { href: "/puppies", label: "Click here!", prefix: "" },
    icon: "/sapa.png",
    images: [
      { src: "/Flynn-za-sajt-768x622.jpeg", alt: "INT.CH Flynn di Perlanera" },
      { src: "/icy_sajt-350x263.jpg", alt: "CH Ice Queen di Casa Montenegro" },
    ],
  },
];
