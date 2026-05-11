import Link from "next/link";
import { buildMetadata } from "@/lib/metadata";
import { GuestbookEntries } from "./GuestbookEntries";

export const metadata = buildMetadata({
  title: "Old Guestbook",
  description: "Messages from our valued guests and friends of Di Casa Montenegro.",
});

const entries = [
  {
    id: 12,
    date: "2021-03-01",
    name: "Raj",
    email: "Rajpannu@gmail.com",
    location: "Singapore",
    message: "Greetings! Great work, breeding my friend.! You did great work!!@ Viva iL Dobermann!!!",
  },
  {
    id: 11,
    date: "2021-01-28",
    name: "Rafael Del Riego",
    email: "",
    location: "Spain",
    message:
      "I am a lucky owner of a puppy from DCM litter F. I have no words to express the professionalism, sincerity and human quality of Milan. What to say about his dogs, in my case he has not only reach expectations, he has far exceeded them. If you are looking for quality dogs, real Dobermans (balance family and protection dogs) Milan is your man.",
  },
  {
    id: 10,
    date: "2020-12-03",
    name: "Eric Berdeaux",
    email: "eric.berdeaux@laposte.net",
    location: "France",
    message:
      "Zeus is probably the most beautifull Doberman we ever had. Well balanced, great colors ans so cute with children. Zeus is a great help to protect our domain and family. Great work Milan ! Eric B.",
  },
  {
    id: 9,
    date: "2020-10-22",
    name: "Melisa Panariti",
    email: "panaritimelisa@gmail.com",
    location: "Albania",
    message:
      "I got the most beautiful, balanced Doberman from Di Casa Montenegro! I drove to the kennel to pick up my boy and Milan Rudovic was the best host, wonderful person and wonderful family. I am very happy with my dog and will forever cherish the memories created in Serbia. Thank you Milan for being so correct and kind, a true professional! Definitely recommend this kennel and I am happy to testify this to anyone.",
  },
  {
    id: 8,
    date: "2020-10-15",
    name: "Salman Kabbani",
    email: "Ssakabbani@hotmail.com",
    location: "Saudi Arabia",
    message:
      "I got my baby girl from Mr. Rudovic about 3 weeks ago. We first spoke several months ago around April as he was expecting 2 litters. He promised to keep me updated and he did. Ever since then we stayed in touch, and once he sent me the puppies' photos I immediately knew which one would be my little baby girl. To be honest I was a bit hesitant about getting a puppy without actually seeing it and from someone I've never met, all the way from Serbia. But Mr. Rudovic always replied and was assuring. I could tell from his emails that he was a legit and good person. It was a very long and hectic process, getting the puppy all the way from one continent to another, especially to here in Saudi, as an import permit is required by law and it could be a bit tricky to obtain. But Mr. Rudovic was very committed and even though he encountered some issues and a delay along the way, it was all worth it now that I got my little baby girl. She's beautiful, good temperament, shiny coat, and well built body structure from a young age. You can tell that Mr. Rudovic takes good care of his dogs. Thank you for my first Dobermann. This is something I will never forget and I am forever grateful. Athena (my girl) is loved and cherished by the whole family. So thank you again Mr. Rudovic. I hope one day I could thank you in person. Wish you the best of luck with everything! Yours truly, Salman Kabbani Riyadh, KSA",
  },
  {
    id: 7,
    date: "2020-10-03",
    name: "David Berry",
    email: "Zacaramanta@icloud.com",
    location: "Ireland",
    message:
      "First and foremost Milan is probably one of the most kindest, helpful me I've ever met; a true gentleman. I have known him for approximately 8 years. In this time and to this day I am still amazed at his dedication to his dogs, it's second to none. The care he gives all his dogs and when breeding is happening is indescribable. I recently received my 3rd dog from Milan, Enzo. I previously got two male Doberman, Amagio and Zodiac and the breeding alone in all the dogs is impeccable. Milan is a true dedicated and very caring breeder. From the moment you contact Milan regarding a pup to the time you finally receive it Milan ensures he keeps you updated every step of the way. From previous experience even week maybe months and through the years Milan will always stay in contact whether it be to see how the dogs are or just a friendly chat to wish well. His reassurance level is quite comforting and if there was an issue Milan would be there to help. During the whole process Milan keeps you informs but also educate me you with amazing knowledge on this breed of dog. The detail in the breeding, the top class combination of different genes is remarkable. As always, I am so thankful to have met Milan and I am always pleased with any dog that arrive as is many people I have come across that have bought from Milan. I have recommended Milan time and time again and it's lovely to know that here in Ireland there are many of his dogs with these unbelievable genes. Best wishes David Berry Wicklow, Ireland.",
  },
  {
    id: 6,
    date: "2020-09-28",
    name: "Martina",
    email: "Martina.brophy20@gmail.com",
    location: "Ireland",
    message:
      "Just got my new Doberman from Milan She is a beautiful dog with a brilliant pedigree and temperament just what I was looking for ! and would really recommend Milan for getting a puppy He is so very reliable and trustworthy",
  },
  {
    id: 5,
    date: "2020-09-23",
    name: "Anette Gabriel",
    email: "a.gabriel@mailbox.org",
    location: "Hungary",
    message:
      "Once a Doberman – always a Doberman. My first Doberman was 11 years old, an almost perfect dog that won my heart right away. My 2nd wonderful Doberman was only 3 years and 3 months (acute kidney failure). A terrible ending, far too early for such a young dog. A life without a dog is unimaginable for me … When I was looking for a new puppy, I found Milan's site. Great luck !!!! My search was over. There were 2 puppies from 2 litters. The decision between the two was not an easy one. My choice fell on a sweetheart. I took him to my heart from the first meeting. A beautiful puppy, calm, careful, with a beautiful, shiny coat. He lives with me for 16 days, every day is a great joy and enrichment. Thanks to Milan!",
  },
  {
    id: 4,
    date: "2020-09-09",
    name: "Stéphanie",
    email: "goninstef@yahoo.fr",
    location: "France",
    message:
      "Yoda qui est maintenant âgé de 31 mois et un superbe chien doux équilibré et très sociable ! Une vraie Merveille , chaque jour passé avec lui est un pur Bonheur! Léïa qui est entrée depuis peu dans la Famille à tout de suite trouvé sa place ; elle est Magnifique est très vive d'esprit ,Yoda a été conquit par sa nouvelle Amie ! Une nouvelle aventure commence ! Un Grand merci Milan pour ton professionnalisme et tes superbes chiens !",
  },
  {
    id: 3,
    date: "2020-08-22",
    name: "Melinda",
    email: "Bloom1432@gmail.com",
    location: "United States",
    message:
      "Looking for a female pup Natural wars and tail Do you have a New litter currently Or coming up ? I'm in the USA. And have knowledge of the breed .I lost my 11 year old last summer This would be my 4th Doberman Looking for a family dog",
  },
  {
    id: 1,
    date: "2020-05-12",
    name: "Di Casa Montenegro",
    email: "dicasamne@gmail.com",
    location: "Serbia",
    message:
      "Welcome! Please, don't hesitate to sign in my guestbook! I really appreciate your opinion",
  },
  {
    date: "2019-08-05",
    name: "Robert Dunne",
    email: "",
    location: "Ireland",
    message:
      "I have made my first encounter with Milan this summer and he was extremely helpful throughout the entire process of selling me my gorgeous 4 month old bitch Zola! Throughout everything Milan was professional and very quick to respond to any queries I had about getting my bitch and getting her here to Ireland. Milan and his company was very trustworthy with all transactions! I am over the moon with the personality and appearance of my Zola, she has a brilliant behaved puppy and I would absolutely recommend to anybody who is considering getting a Doberman! It is no question that I will cross paths with Milan again because I am very pleased with his services! Thank you again.",
  },
  {
    date: "2019-03-17",
    name: "frank fleites",
    email: "",
    location: "United States",
    message: "thunderbay dobermaans congratulations in the new litter!",
  },
  {
    date: "2018-10-17",
    name: "Stéphanie",
    email: "",
    location: "France",
    message:
      "Un Grand merci à un très bon éleveur ! X'or Di Casa Monténégro est un chien merveilleux , il est d'une grande beauté et il a un caractère doux affectueux , c'est un très bon chien au travail , courageux et téméraire . La vie avec X'Or est un pur bonheur ! Félicitations Milan pour ce très bon chien .",
  },
  {
    date: "2017-04-11",
    name: "Francesca Sologni",
    email: "",
    location: "Italy",
    message:
      "Hi all Russia, 10 months arrived yesterday in Italy She has a good character and she is beautiful It seems to live always here with us…. I would like to thank Milan and all his staff for professionalism and precision… magnificent!",
  },
  {
    date: "2016-10-08",
    name: "li",
    email: "",
    location: "China",
    message:
      "i'm very pleased with the puppy and the puppy's quality is very good. the kennel master is very patient, honest and worthy of trust.",
  },
  {
    date: "2016-09-27",
    name: "David",
    email: "",
    location: "United States",
    message:
      "I have a puppy from Q-litter great puppy also Milan is great breeder very on time & very knowledgeable & helpful , & he is on time with everything also he knows what to breed to have great litter , I'm pleased to know him",
  },
  {
    date: "2016-09-27",
    name: "Sophie Russotto",
    email: "",
    location: "Germany",
    message:
      "My little Quiz arrived on 12th September, she is very great and full of energy. Thank you Milan for everything,you're a very good breeder. I'll send you photos soon.",
  },
  {
    date: "2016-09-21",
    name: "Julie",
    email: "",
    location: "United States",
    message:
      "Just purchased a gorgeous male pup from Milan. He is healthy and robust! We are very happy with him, and the professionalism of Milan. Thank you Milan!!",
  },
  {
    date: "2016-09-18",
    name: "Stephanie K Pease",
    email: "",
    location: "United States",
    message:
      "I had been looking for a nice show potential female puppy when I was referred to Milan and his dobermans. I have to say I was a little worried about importing a puppy as we all hear the horror stories. Well, although I still worried I went with Milan as I absolutely LOVE his dogs. I have one of his Q litter females Quantenamara. She is everything AND MORE that I could have hoped for and looked for in a doberman. Milan is very reliable and when he tells you something it is so!!! I am very very happy with this little girl and I hope to make Milan proud with all of her accomplishments in the future! I am very excited to start my breeding program with this wonderful female. Thank you very much Milan for this awesome little girl. She and I will make you proud!!!",
  },
  {
    date: "2016-08-09",
    name: "Roberta Greco",
    email: "",
    location: "Italy",
    message:
      "Ciao Milan,fortunately there are still professional people like you who work with love,I wish all those who loves Dobermann to have One of your puppies.My little Pride is really the dog that everyone dreams to have.Thank you so much!!!",
  },
  {
    date: "2016-05-26",
    name: "Sharon Maxwell",
    email: "",
    location: "United States",
    message:
      "Hi Milan. I just received my precious little girl Pepsi today. I'm very happy with her. I was so stressed about her getting here and the long trip but you assured me more than once. Lol. That everything would be ok. And she came out of the crate a happy friendly beautiful puppy. She has settled in with no problems sleeping by my feet right now. I will send pics of her as she grows into the beautiful Doberman that you raise. Thank you for being patient and answering all my questions and making my first international purchase a success ! Thank so much!! Sharon Maxeell. (OHIO)",
  },
  {
    date: "2016-02-23",
    name: "Jennifer Denise",
    email: "",
    location: "",
    message:
      "Hello everyone, I am writing here hoping to give possible valuable information to whoever is planning to purchase a puppy from the Di Casa Montenegro Kennel. This was not my first doberman but definitely my first purchase of a \"purebreed\": as everyone can confirm this involves money, days and days spend researching blood lines and breeders, time, patience, worries, planning…. and everything is multiplied by 10 when purchasing a puppy from a different country. I chose Milan based on how much passion and time he seems to have put in this dream of his, a breeder that is also a judge can have first hand experience on what is good and what is less good in a doberman. After initial contacts, I discovered the man behind the breeder and he turned out to be a reliable, serious, trustworthy professional: I trusted him and he believed in me, and the result of this cooperation is a beautiful, loving, healthy, smart and balanced puppy that now for few months already has been putting a smile on my face every single day. Shows and competitions will eventually arrive later on. I can say with confidence that if you are looking for a reputable breeder/reliable person, look no further: reach Milan and your dream will become true.",
  },
  {
    date: "2016-02-19",
    name: "Mr. Tour",
    email: "",
    location: "Macau",
    message:
      "I'm looking for a German brown Doberman dog species healthy boys",
  },
  {
    date: "2016-01-07",
    name: "Christian",
    email: "",
    location: "Germany",
    message:
      "Hello Milan, I've just wanted to leave a comment on your Doberman homepage. Your site is great, and your dogs are very beautiful! The lovely photos of your Dobermans are awesome and give a good insight into your excellent work! I wish you for the future of your Doberman kennel a lot of fun, breeding success, lovely and healthy puppies! All the best Christian Dobermans make you happy! www.dobermannseite.de",
  },
  {
    date: "2015-12-16",
    name: "Vicki",
    email: "",
    location: "United States",
    message:
      "I'm so late in getting this done! My apologies Milan!! This is our second purchase of a Doberman from Milan. First, we bought a male, Jag, who is such a sweet wonderful boy. Our newest addition to our family is Naomi, whom we affectionately call Lily Belle. She is the very best dog! She is sweet, loving, and very soft mouthed. She doesn't even cry to come out of her crate unless she has to go outside or she is hungry. If you are looking for a dobe…. Milan is the best, quality breeder. His word is good as gold!! Thanks Milan!!!",
  },
  {
    date: "2015-10-13",
    name: "leanne and kevin",
    email: "",
    location: "Italy",
    message:
      "Hello we would like to let you know we bought jazz of ian toomey who commented further down. Jazz has setled in her new home with her new sister ( a samoyed i already owed ). She is a dream of a dog. Had abit of trouble at the start but she soon relaxed and now its her house. Thanks for breeding this lovely puppy shes beautiful.",
  },
  {
    date: "2015-10-03",
    name: "Christian Morel",
    email: "",
    location: "Germany",
    message:
      "On September 30/2015 our Mafia arrived at Odelshofen Germany safe and well. He is 7 month old and we can say he is the perfect Dobermann for us. Every dog owner will say that he's dog is the best in the world and so do we. Great temperament and a sense of calm. Milan, Congratulations to you. You did a wonderful job. In our mind you are at the top of the world best breeder. Thank you for your honesty and your helpful communication all the time. You are a man with great Humor!!!! (only we know what it means) To any lovers of Dobermann we can recomment Milan. Milan, you are a great breeder and a wonderful man. Thank you for everything!!!!!!!!!!!!!! Chris",
  },
  {
    date: "2015-04-15",
    name: "Colin Moore",
    email: "",
    location: "Canada",
    message:
      "On April 2/2015 Laetitia (Tia) arrived at Vancouver British Columbia Canada, her new home safe and well. After traveling through four countries and a continent Tia presented herself as a perfect puppy, I was truly impressed. Now she is 17weeks and full of puppy play showing great temperament and a sense of calm, the perfect Doberman. I will send pictures soon. I was very fortunate to have met Rob and Enzo who directed me to Milan of Di Casa Montenegro, thank you Rob. Congratulations to you Milan for achieving in my view \"world class top breeder status\" who sets a very high standard for the perfect Doberman. I am honored to have one of your Dobermans. Thank you for your honesty and open communication through the process, it was very helpful. I would be proud to and highly recommend Milan of Di Casa Montenegro for your Doberman. Thanks again Milan, with regards to you and your family and dogs. Colin.",
  },
  {
    date: "2015-03-31",
    name: "Tim and Ramona",
    email: "",
    location: "United States",
    message:
      "After we purchased Lucy it felt like we waited forever, but she arrived on 03-28-15. She had a very long trip but arrived in good shape. She's cute, loving, energetic, and eager to please. I'm sure she will grow to be a beauty. Milan, you were a joy to communicate with. You kept us informed about what was going on which is more important than I can put into words since we are so far away. You described Lucy accurately and were honest to deal with and we appreciate it. We will be recommending you to everyone here at home. To any potential buyer I would say no matter where you live Milan is someone you can trust to get a Doberman from.",
  },
  {
    date: "2015-01-30",
    name: "Camilla Berg/Gregorians",
    email: "",
    location: "Sweden",
    message:
      "Hi Milan! Your dogs/puppies are beautiful! Keep up this good work! King regards from me to you!",
  },
  {
    date: "2014-09-06",
    name: "Tea & Francesco",
    email: "",
    location: "Italy",
    message:
      "Who has not had a dog does not know what it means to be loved. I had the honor to receive two puppies from Milan, we touched Heaven , their love will be reciprocated with all our soul! We recommend to all lovers of the Dobermann to take a puppy of Milan !!!",
  },
  {
    date: "2014-09-05",
    name: "Austin and Valentina",
    email: "",
    location: "England",
    message:
      "We would like to thank Milan for our wonderful boy Joker, and for being so helpful when we have questions. His temperament is perfect, he is friendly and obedient and loves to gallop around non stop. He plays nicely with other dogs when we take him for walks and we cant imagine life without him. Many people ask where we got him fom so we had no hesitation in recommending Di Casa Montenegro ! Austin and Val X",
  },
  {
    date: "2014-08-29",
    name: "Vicki & Ray",
    email: "",
    location: "Belgium",
    message:
      "Hi Milan, Thank you so much for allowing me to purchase Jag and for sending him to me! He is a beautiful and sweet dog! For anyone looking to purchase a doberman from Milan, I would highly recommend him. A great breeder that keeps you informed, and the dog is accurately represented! Our puppy arrived in good shape even though his travel was long. We are just thrilled with our new addition to our family!",
  },
  {
    date: "2014-07-14",
    name: "Ian Toomey",
    email: "",
    location: "Italy",
    message:
      "I would like to thank Milan for sending me one of his beautiful puppies Jazz. She is full of energy and a happy doberman! Milan was a pleasure to deal with and a good honest man. I would recomand Milan to anyone looking for high quility Doberman. Thanks again my friend, Jazz is happy in her new home!!",
  },
  {
    date: "2014-07-08",
    name: "nina",
    email: "",
    location: "France",
    message:
      "Hello everyone, this is Junior finally arrived home. .. In France. We are very happy. this is a great dog. thank you to MILAN which has been great and is a trustworthy man. I will discuss your dog to everyone I know. The best: casa Montenegro! ! very soon, friendly 😉",
  },
  {
    date: "2014-07-04",
    name: "Rob Buchan",
    email: "",
    location: "Canada",
    message:
      "Hello Milan , Today we picked up our puppy Enzo from the airport in British Columbia, Canada. He is a beautiful male and is fitting in great with our family. I would recommend Milans puppies to anyone looking for a quality Doberman. kind regards, Rob Buchan",
  },
  {
    date: "2013-12-22",
    name: "Rawn Rabain",
    email: "",
    location: "",
    message: "hello i enjoy your site and you have some beautiful dobes. keep up the good work ,",
  },
  {
    date: "2013-12-21",
    name: "Beverley Bridges",
    email: "",
    location: "England",
    message:
      "Hi Milan, Thank you so much for letting me view your website , fantastic Dobermans! they are a credit to you .. All the very best Bev",
  },
  {
    date: "2013-12-04",
    name: "Edward Jay Kumar",
    email: "",
    location: "",
    message:
      "Hi! Milan Thank you very much to allowing me to see your website. You got really beautifull dobermann's. You are a great breeder. Thank you for all your support and cooperation. I hope to have a professional colaboration with you. Thanking you With regards Edward",
  },
  {
    date: "2013-10-18",
    name: "David & Brenda",
    email: "",
    location: "United States",
    message:
      "Hello, You probably do not get many emails about your older dogs that have long been gone from you. Sweet Sharon Stone has been and will be a joy to us. She is so protective and loving. I have sent an email earlier to you in hopes of finding a descendant of hers that will have most of her good traits. Looking forward to hearing from you. David & Brenda",
  },
  {
    date: "2013-09-28",
    name: "davd casey callum berry",
    email: "",
    location: "Italy",
    message:
      "hi milan i would like to say you were a gentleman to deal with ever since our 1st contact our lovly pup maxiumuis arived here on wednesday in pristene condition you can see your face in his coat he walks around house like he owns it cant wait for shows to start hes a credit to you as a top breeder thanks again milan David, Casey, Callum, roll on crufts",
  },
  {
    date: "2013-06-04",
    name: "moocouffele",
    email: "",
    location: "",
    message: "Good",
  },
  {
    date: "2013-04-29",
    name: "Kicki o Stene",
    email: "",
    location: "Sweden",
    message:
      "Hello Milan we will tell you we are very happy for Bosse and we thank you so much. Best Regards from Kicki o Stene",
  },
  {
    date: "2013-04-14",
    name: "Greg",
    email: "",
    location: "Ireland",
    message:
      "Hi Milan, puppy arrived safe and well. He's getting on great, he's a quick learner, love him, thanks.",
  },
  {
    date: "2013-04-11",
    name: "stephen",
    email: "",
    location: "Ireland",
    message:
      "hi Milan I would like 2 say thanks for the puppy ,he is very calm ,friendly and playful. You r very easy and straight forward 2 deal with and very helpful. thank",
  },
  {
    date: "2013-03-29",
    name: "mike",
    email: "",
    location: "Ireland",
    message:
      "Just to say thank you for the wonderful puppy we got from you. He is fantastic in size temperment and markings.. you were a pleasure to deal with everything was so straightforward and easy.. thanks again milan I will keep you updated",
  },
  {
    date: "2012-10-17",
    name: "#geootrwonick[UDUDYYJJDDIY]",
    email: "",
    location: "United States",
    message: "very good!",
  },
  {
    date: "2012-10-15",
    name: "Amanda Trudeau Rai",
    email: "",
    location: "Canada",
    message:
      "Hello Milan! Thank you for such a perfect girl. She is well tempered and beautifuly represents the doberman breed. You are a trusted friend! You know what your doing and it shows in her breeding. Thank you Amanda",
  },
  {
    date: "2012-09-17",
    name: "hart",
    email: "",
    location: "Canada",
    message: "puppy",
  },
  {
    date: "2012-06-02",
    name: "arriseLaniery",
    email: "",
    location: "United States",
    message: "Fanatastic post! Makes me change my embargo on commenting",
  },
  {
    date: "2012-05-17",
    name: "Mike",
    email: "",
    location: "Ireland",
    message:
      "Mafia come home yesterday. Fantastic dog, great temperament and size! Thank you very much!",
  },
  {
    date: "2012-05-17",
    name: "Mike",
    email: "",
    location: "Ireland",
    message:
      "Cannot wait to bring Mafia home now! Will keep you updated when get him. Coundown is on, thanks!",
  },
  {
    date: "2012-04-26",
    name: "Uteripsestari",
    email: "",
    location: "United States",
    message: "Good bye, genial alternative other",
  },
  {
    date: "2012-01-20",
    name: "undobInvomb",
    email: "",
    location: "United States",
    message:
      "Thank you for a very interesting website. What else could I get that type of info written in such an ideal way? I have a project that I'm just now working on, and I've been at the look out for such info.",
  },
  {
    date: "2011-10-04",
    name: "LannyArdelia",
    email: "",
    location: "United States",
    message:
      "Internet is among the few markets on the planet during which folks can start business with little cash and make a whole and successful.",
  },
  {
    date: "2011-07-22",
    name: "Dejan -Slankamen",
    email: "",
    location: "Serbia",
    message:
      "Ameriah je vrhunska! Srećan će biti onaj ko ju uzme za ljubimca! Pozdrav",
  },
  {
    date: "2011-07-08",
    name: "hermesbagg",
    email: "",
    location: "United States",
    message:
      "I simply discovered your internet site yesterday and that i happen to be reading this often. You really possess a ton of helpful information on the site and that i benefit from the specific type of the site additionally. Continue the good function!",
  },
  {
    date: "2011-04-10",
    name: "oem soft",
    email: "",
    location: "United States",
    message: "It goes beyond all limits.",
  },
  {
    date: "2011-02-26",
    name: "Paul Nicholson",
    email: "",
    location: "",
    message: "What a great site just loved it",
  },
  {
    date: "2011-02-23",
    name: "exommonetly",
    email: "",
    location: "United States",
    message:
      "Hello, Your really have very cool site! Can i subscribe to your RSS if your have?!?!?! Please mail me about it…",
  },
  {
    date: "2011-02-22",
    name: "milosbg",
    email: "",
    location: "Serbia",
    message:
      "Svaka cast sve pohvale za odgajivacnicu!!!! odlicni psi i odlican izbor muzijaka!!! pozdrav i odzacke opstine!",
  },
  {
    date: "2010-12-01",
    name: "Sarah",
    email: "",
    location: "United States",
    message: "I love the communication and am very excited! thank you so much and happy holidays!",
  },
  {
    date: "2010-10-25",
    name: "zarko",
    email: "",
    location: "Macedonia",
    message:
      "zdravo Milane evo da se upisem i ja u knjigu gostiju veliki pozdrav iz Kumanovo redovno cu da ti saljem slike od etu kako se razvija a zdravje na prolece pocinjemo sa izlaganje pozdrav jos jednom",
  },
  {
    date: "2010-04-05",
    name: "Xaver und Xena",
    email: "",
    location: "Germany",
    message:
      "Fünf Hasen, die saßen beisammen dicht, Es macht ein jeder ein traurig Gesicht. Sie jammern und weinen: Die Sonn' will nicht scheinen! Bei so vielem Regen Wie kann man da legen Den Kindern das Ei? O weih, o weih! Da sagte der König: So schweigt doch ein wenig! Lasst weinen und Sorgen Wir legen sie morgen! Noch einen schönen Ostermontag",
  },
  {
    date: "2010-03-26",
    name: "Rijk",
    email: "",
    location: "Netherlands",
    message:
      "Hi Milan, After a long search, I'd found your website, searching for a 'cropped' dobermann. I didn't ever buy a dog before whitout seeing it. So, that made it extra exiting te me. But it was a good choice, and a good advice of you to buy the (at that moment) 5 months old Don Darafal. Now he is for two weeks with us in the Netherlands and he is doing very well. At first, my German shepherd did'n accept him, but after a few day's they became friends. The 5th of december my 6,5 years old black dobermann died of a double heartproblem. Now I prefered a brown one, so I thought he would like less like my 'old one'. But in his behaviour, Don is acting for 95% the same as my old one. I thought that would difficult for me to see, but now, I can laugh about the things he's doing exactly the same. It was a good choice to buy Don from you and hope he will become much older than the one I owned before. Best regards from the Netherlands and good luck to you, Rijk",
  },
  {
    date: "2009-12-25",
    name: "Olga",
    email: "",
    location: "",
    message:
      "You have very beautiful dogs and nice site. I wish you all the best in future. Merry Christmas and happy New Year!",
  },
  {
    date: "2009-12-01",
    name: "nemanja",
    email: "",
    location: "Serbia",
    message: "e milane super su ti psi ali ovaj Don Darafal je najlepsi",
  },
  {
    date: "2009-09-18",
    name: "Georgia Alachouzou",
    email: "",
    location: "Greece",
    message:
      "Many greetings from your new Greek friend!!! Very nice site and very good dogs!!! Wish you all the best !!! Georgia Erebus Dobermann Kennel",
  },
  {
    date: "2009-05-14",
    name: "phisit kiatpakdeekul",
    email: "",
    location: "",
    message:
      "I love Citone very much, Big in all parts, he is my ideal Dobermann npw seeking for many many years for this type of Dobermann, if you have black male or female i want one each more in my breeding in the future and thank you Laszlo and Milan for sending such a superb Dobermann!! again Very very hapy with Citone. Best regartds Phisit",
  },
  {
    date: "2009-04-01",
    name: "edi",
    email: "",
    location: "Romania",
    message: "Greetings from Bucharest! Much continued success!",
  },
  {
    date: "2009-03-15",
    name: "henri pula",
    email: "",
    location: "Croatia",
    message:
      "pozzzz gos milane stranica vam je super…… cekam vase slike i da potvrdim odluku pozzz iz pule",
  },
  {
    date: "2009-03-13",
    name: "Samir",
    email: "",
    location: "India",
    message:
      "Hi Millan, I truly impressed with your dogs! I have been to various doberman shows in India but tell u the truth your dogs are unparalleled in breed quality! Keep it up dude! I dream to have one from urs kennel! Samir",
  },
  {
    date: "2009-02-15",
    name: "Branko",
    email: "",
    location: "Serbia",
    message: "Milane nece nesto da mi salje e-mail. lepa je ona zenka ruskinja!!!!!!!!!!!",
  },
  {
    date: "2009-02-11",
    name: "joca",
    email: "",
    location: "Serbia",
    message: "Stenci su extra, stavi jos neku sliku. Pozdrav",
  },
  {
    date: "2009-01-06",
    name: "joca",
    email: "",
    location: "Serbia",
    message:
      "Prelepa prezentacija i prelepi psi. Zelim jos vise kinoloskih uspeha u godinama koje slede",
  },
  {
    date: "2009-01-03",
    name: "Milan",
    email: "",
    location: "Germany",
    message:
      "Hello, I visits your very nice website. You have beautiful dogs in good condition. Keep up the good work. www.continental-bulls.de",
  },
  {
    date: "2008-09-29",
    name: "Amanda Rai",
    email: "",
    location: "Canada",
    message:
      "I love your doberman's this is what they truly should look like. Power and beauty, really great dogs.",
  },
  {
    date: "2008-09-28",
    name: "Janice Trudeau",
    email: "",
    location: "Canada",
    message:
      "Hi Milan A great website.. beautiful dobermans, I look forward to owning one of your dogs in the near future.. your dogs are a real credit to their breed!! Janice Trudeau",
  },
  {
    date: "2008-08-13",
    name: `Istvan & Jenny "Heiza´s Kennel"`,
    email: "",
    location: "Sweden",
    message:
      "Hello!! Beautiful websight with beautiful Rottweilers. We just wanna tell you that we have a daughter of Gery here in Sweden. Her name is Heiza´s Rizza From Gery. Our Female Heiza´s Happy is the mother to her. We also have a new litter and Gery is the father of this litter. 3 females and 3 males. Born 8/8-2008… BEAUTIFUL PUPPIES. Just tell us if you wanna have pictures of them. Gery is a Beautiful male and he looks just like his father Grof-Boy. Hope to here from you. Best Regards ISTVAN & JENNY Heiza´s Kennel in Sweden Rottweiler & French Bulldog",
  },
  {
    date: "2008-05-06",
    name: "Nenad",
    email: "",
    location: "Serbia",
    message:
      "Veliki pozdrav za gospodina Rudovica od Nenada Bubulj-a iz Backe Palanke. Moje prvo iskustvo voditi psa na izlozbu (Backa Palanka CAC 4.05.2008.), ucestvovati sa ljudima koji su profesionalno orjentirani, naravno i velika cast da mi vi budete na izlozbi kao odlican i poznat sudija, za mene je bilo san snova. Zao mi je sto nisam bio dovoljno informisan, sto nisam iskoristio moje pravo takmicenja za nejlepseg psa izlozbe, jer to vam je dovoljan znak mog, da tako kazem, ne iskustva, jer sam mlad i nikada nisam imao priliku da idem na izlozbe i da ucestvujem sa mojim kucnim ljubimcem. Nadam se da u buduce necu praviti takve propuste. Inace obozavam rotvajlere i vec 15 godina sam uz njih. Veliki pozdrav i nadam se da cemo se i u buduce vidjati.",
  },
  {
    date: "2008-02-21",
    name: "Jenny and Thomas",
    email: "",
    location: "Germany",
    message:
      "Greeting from Stuttgart Hello, you have a nice homepage and beautyful dogs. Best regards from Stuttgart, Jenny and Thomas www.nesenbach-rottweiler.de",
  },
  {
    date: "2008-02-20",
    name: "anna",
    email: "",
    location: "Greece",
    message:
      "Hi! A puppy dog male i want I live in Thessaloniki; Sorry for my english is not very good.. Have a good day!! Bye",
  },
  {
    date: "2008-01-06",
    name: "Salajan Vasile Dorin",
    email: "",
    location: "Romania",
    message:
      "Heloo, You have a very nice web site and beautiful dogs. I want change our links and I wish colaborate with you, in future. Congratulation for your work and many success in future. Good luck in the future. Best regards Salajan Vasile Dorin BODYGUARD FORCE KENNEL www.rottweiler-kennel.ro",
  },
  {
    date: "2008-01-04",
    name: "Pera Bogdan",
    email: "",
    location: "Germany",
    message:
      "Cao Zemljak, drago mi je da vidim da imas i ti jako lepi Psi , sajt ti je odlincna. Zelim ti puno uspeha u odgoj Dobermana veliki pozdrav Peki Novi Sad / Germany",
  },
  {
    date: "2008-01-01",
    name: "wanda & adelard",
    email: "",
    location: "Netherlands",
    message:
      "Hello, We wish you a good 2008. All the best for the future with your dogs and family. Best regards, from Holland www.thofayette.nl",
  },
  {
    date: "2007-12-29",
    name: "Hennie",
    email: "",
    location: "Netherlands",
    message:
      "Hello! I just stopped by at your homepage and your dogs is very beautiful. Wish you the best for the future with your dogs We wish you merry christmas and a happy new year. For 2008 all the best. Please take a minute and sign our guestbook. Best regard fron Hennie and Gino www.HajoGino.nl",
  },
  {
    date: "2007-11-01",
    name: "Travis Britton",
    email: "",
    location: "United States",
    message:
      "Hi Milan, Great web-site, and even better dobermanns. I purchased Sweet Sheron Stone od Telepa from you and she is absolutly wonderful. I plan to train her in Schutzhund here in the U.S. She has great drives, and already has a full bite on the sleve. Also as my mission statement here at Britton Farms Dobermans says, we are trying to improve the dobermann breed here in the U.S. one mating at a time, and by adding top quality dobermanns to our breeding program, like the dobermanns you raise, this will be a much easier task for us. Thank You again, and keep up the good work in your breeding program, Thank You, Travis Britton www.brittonfarmsdobermans.com",
  },
  {
    date: "2007-09-30",
    name: "Rodney A. Stephens",
    email: "",
    location: "United States",
    message: "Hello my friend you have very beautiful dogs!",
  },
  {
    date: "2007-09-21",
    name: "Silvia Grimm",
    email: "",
    location: "Germany",
    message:
      "Hello, congratulations on a brilliant Website and great Dogs, best wishes, Silvia, Bernd and Standardpoodles.",
  },
  {
    date: "2007-08-11",
    name: "Mitar Krivokapic",
    email: "",
    location: "Montenegro",
    message:
      "Milane ,bio sam na Cetinju u bebi klasi sam ucestvovao i ocjenjen je kao vrlo perspektivan pas .Sto mi je najbitnije dobio sam pohvale od sudija i od ljudi koji drze odgajivacnice. Bas sam zadovoljan. Naravno vas sam reklamirao u majci dao sam par ljudima vas broj. Pobijedio je momak iz Ct sa psom Jaguar di altobello 1 god ali cekam ga za par mjeseci .Njemu se bas svidjelo moje stene. Cak jedan covjek hoce sad da kupi zenku jel je vidio kako izgleda moj pa da je pari bas smijesno al tako. Puno pozdrava pa se cujemo!!! Poslacu vam Slike.",
  },
  {
    date: "2007-07-21",
    name: "Trajce",
    email: "",
    location: "Macedonia",
    message:
      "Zdravo!!! KAko ste Milane steneto e mnogu dobro pa ce se slusneme ponatamu i ako mozeda ni kazete vo vrska vo ishranata na steneto i sto moze pobrzo pisete na e-mailot!!!!!! Pozdrav od Prilep-Macedonia i da kazam deka kuceto e super ima mnogu dobar izgled cvrsto e i ne se plasi od nikoj i mnogu brzo se sprijateli so mene i so mojata familija i pisi. Pozdrav od Prilep-Macedonia",
  },
  {
    date: "2007-07-12",
    name: "Mitar Krivokapic",
    email: "",
    location: "Montenegro",
    message:
      "Zdravo milane sajt je super. Drago mi je radi Sweet Sharon Stone .Moj mali raste kao lud ,jako se brzo razvija i prezadovoljan sam. Nisam se pokajao sto sam uzeo iz tvog legla psa. Bio sam kod par ljudi koji drze odgaivacnice po Cg i odusevljeni su i jako ,,PREPANUTI\" jel cu im sve medalje pokupit na izlozbe . Veliki pozdrav pa se vidimo u avgustu. Iznenadices se.",
  },
  {
    date: "2007-06-24",
    name: "odonnat teddy",
    email: "",
    location: "",
    message:
      "Hello Mr RUDOVIC I like very much your site and grof boy especially it is magnificent good continuation",
  },
  {
    date: "2007-05-20",
    name: "Nenad",
    email: "",
    location: "Serbia",
    message:
      "Pozdrav Milane! Sajt je super, a i psi su odlicni. Sve najbolje u daljem radu, samo tako nastavi.",
  },
  {
    date: "2007-05-10",
    name: "MARKUS",
    email: "",
    location: "Germany",
    message:
      "Hello Milan Rudovic, your webside ist fantastic and your dogs are very nice. I wish you all the best in the future. Best regards Lewan Dobermann Kennel",
  },
  {
    date: "2007-05-05",
    name: "Kevin",
    email: "",
    location: "Malta",
    message:
      "Hello From Malta, Very good web side and nice dogs Good Luck From Niveksue Rottweiler Kennel",
  },
  {
    date: "2007-05-03",
    name: "Danijela & Muki",
    email: "",
    location: "Serbia",
    message:
      "Cao Milane, Cestitamo na sajtu i zelimo ti puno uspeha sa novim leglom. Hvala sto si nas uvrstio medju omiljene linkove Puno pozdrava, Danijela i Muki",
  },
  {
    date: "2007-05-02",
    name: "Dunav Stam",
    email: "",
    location: "Serbia",
    message:
      "Odlican sajt. Puno uspeha u daljem uzgoju pasa. Pozdrav Dunav Stam",
  },
  {
    date: "2007-04-30",
    name: "Pasquale Alampi – von der Herash",
    email: "",
    location: "Italy",
    message:
      "Hallo from Italy! Much Complimnets for your dogs, i like so much Grof Boy! Good luck for your next breedings! kennel von der herash Italian Rottweiler kennel",
  },
  {
    date: "2007-04-10",
    name: "Milan Rudovic",
    email: "",
    location: "Serbia",
    message: "Welcome!",
  },
];

export default function OldGuestbookPage() {
  return (
    <main className="pt-24">
      {/* Page header */}
      <section className="py-20 px-6 border-b border-border">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs tracking-[0.4em] uppercase text-gold mb-4 font-semibold">
            Di Casa Montenegro
          </p>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-text mb-6 leading-tight">
            Old Guestbook
          </h1>
          <p className="text-text/85 text-base leading-relaxed max-w-xl">
            Posted on October 7, 2015 by Di Casa Montenegro
          </p>
        </div>
      </section>

      {/* Intro note */}
      <section className="py-10 px-6 bg-surface border-b border-border">
        <div className="mx-auto max-w-4xl flex items-start gap-4">
          <div className="mt-0.5 w-px h-8 bg-gold shrink-0" />
          <p className="text-sm text-text/85 leading-relaxed">
            This is the old guestbook. To leave a new message or visit the current guestbook,{" "}
            <Link
              href="https://www.ultraguest.com/view/1631738056"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:underline underline-offset-2 transition-colors"
            >
              visit the new guestbook
            </Link>
            .
          </p>
        </div>
      </section>

      <GuestbookEntries entries={entries} />
    </main>
  );
}
