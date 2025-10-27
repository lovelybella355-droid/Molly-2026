const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "ðð«ð¢ð²ðšð§ð¬ð¡ ð‘ðšð£ð©ð®ð­",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["Haye Main Sadke jawa Teri Masoom Shakal pe baby ðŸ’‹ " , "Bot Nah Bol Oye Janu bol Mujhe " , "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun ðŸ¤­ðŸ’" , "Main gariboo se baat nahi karta ðŸ˜‰ðŸ˜ðŸ˜‹ðŸ¤ª" , "Itna Na Pass aa Pyar ho Jayga" , "Bolo Baby Tum Mujhse Pyar Karte Ho Na ðŸ™ˆðŸ’‹ðŸ’‹ " , "Are jaan Majaak ke mood me nhi hu main jo kaam hai bol do sharmao nahi" , "Bar Bar Bolke Dimag Kharab Kiya toh. Teri ...... Mummy Se Complaint Karunga" , "Tu Bandh nhi Karega kya?" , "Gali Sunna H kya?ðŸ˜œ" , "Teri Maa Ki BindiyaðŸ¤­" , "Aree Bandh kar Bandh Kar" , "M hath jod ke Modi Ji Se Gujarish Karta hu" , "Tujhe Kya koi aur Kam nhi ha? Puradin Khata hai Aur Messenger pe Bot Bot Karta h" , " Priyansh Ko Bol Dunga Me Mujhe Paresan Kiya To" , "Tum Na Single Hi Maroge" , "Tujhe Apna Bejjati Karne Ka Saukh hai?" , "Abhi Bola Toh Bola Dubara Mat Bolna" , "Teri To Ruk Tu Bhagna Mat" , "Bol De koi nahi dakh rha ðŸ™„" , "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di ðŸ˜" , "Dur Hat Be  Mujhe Aur Koi Kam Nahi Kya Har Waqat Mujhy Tang Kerte Rhte ho ðŸ˜‚" , "Are Bolo Meri Jaan Kya Hall HaiðŸ˜š " , "Ib Aja Yahan Nhi Bol Sakta ðŸ™ˆðŸ˜‹" , "Mujhe Mat BuLao Naw Main buSy Hu Naa" , "Bot Bolke Bejjti Kar Rahe Ho yall...Main To Tumhare Dil Ki Dhadkan Hu Na Baby...ðŸ’”ðŸ¥º" , "Are Tum Wahi ho nah Jisko Main Nahi Janta ðŸ¤ª" , "Kal Haveli Pe Mil Jara Tu ðŸ˜ˆ" , "Aagye Salle Kabab Me Haddi ðŸ˜" , "Bs Kar U ko Pyar Ho Na Ho Mujhe Ho Jayga Na" , "FarMao ðŸ˜’" , "BulaTi Hai MaGar Jaane Ka Nhi ðŸ˜œ" , "Main To Andha Hun ðŸ˜Ž" , "Phle NaHa kar Aa ðŸ˜‚" , "Aaaa Thooo ðŸ˜‚ðŸ˜‚ðŸ˜‚" , "Main yahin hoon kya hua sweetheart ," , "chomu Tujhe Aur Koi Kaam Nhi H? Har Waqt Bot Bot Karta H" , "Chup Reh, Nhi Toh Bahar Ake tera Dath Tor Dunga" , "WaYa KaRana Mere NaL ðŸ™Š" , "MaiNy Uh Sy Bt Nhi kRrni" , "MeKo Kxh DiKhai Nhi Dy Rha ðŸŒš" , "Bot Na BoL ðŸ˜¢ JaNu B0ol ðŸ˜˜ " , "Bar Bar Disturb Na KRr JaNu Ke SaTh Busy Hun  ðŸ˜‹" , "Main Gareebon Sy Bt Nhi kRta ðŸ˜‰ðŸ˜ðŸ˜‹ðŸ¤ª" , "Itna Na Pass aa Pyar h0o JayGa" , "MeKo Tang Na kRo Main Kiss ðŸ’‹ KRr DunGa ðŸ˜˜ " , "Ary yrr MaJak Ke M0oD Me Nhi Hun ðŸ˜’" , "HaYe JaNu Aow Idher 1 PaPpi Idher d0o 1 PaPpi Idher ðŸ˜˜" , "Dur HaT Terek0o 0or K0oi Kam Nhi Jb DeKho Bot Bot ShaDi KerLe Mujhsy ðŸ˜‰ðŸ˜‹ðŸ¤£" , "TeRi K0oi Ghr Me Nhi SunTa T0o Main Q SuNo ðŸ¤”ðŸ˜‚ " , "IB Aja Yahan Nhi B0ol Salta ðŸ™ˆðŸ˜‹" , "Mujhe Mat BuLao Naw Main buSy h0o Naw" , "Kyun JaNu MaNu Another Hai ðŸ¤£" , "Are TuMari T0o Sb he baZzati kRrty Me Be kRrDun ðŸ¤ðŸ˜œ" , "KaL HaVeLi Prr Aa ZaRa T0o ðŸ˜ˆ" , "Aagye SaJJy KhaBBy Sy ðŸ˜" , "Bx KRr Uh k0o Pyar H0o Na H0o Mujhe H0o JayGa" , "FarMao ðŸ˜’" , "BulaTi Hai MaGar JaNy Ka Nhi ðŸ˜œ" , "Main T0o AnDha Hun ðŸ˜Ž" , "Phle NaHa kRr Aa ðŸ˜‚" , "Papi ChuLo ðŸŒš" , "TeRek0o DiKh Nhi Rha Main buSy Hun ðŸ˜’" , "TeRa T0o GaMe BaJana PreGa" , "Ta Huwa ðŸ¥º"  , "TuM Phr AaGye ðŸ™„ Kisi 0or Ny Muu Nhi LaGaYa KyaðŸ¤£ðŸ¤£ðŸ¤£" , "MeKo JaNu Chai Hai Tum Single H0o?" , "Aaaa Thooo ðŸ˜‚ðŸ˜‚ðŸ˜‚" , "Main S0o Rha Hun " , "Ase He HansTy Rha kRo ðŸ˜" , "â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢ðŸ¦¢ð’€±å„É…Æ”Æ MÉ…ðŸ…˜É³ ÊÉ…á’â€¢â€¢â€¢â€¢ðŸŒ¿ðŸ’ž JÉ…Ï‰É… â”¼Æá’ðŸ…˜ ÊÉ…ðŸ…¢ð–šÊ ðŸ…¢É…Ò É…É­ ð©Æ É®É…É®Æ” ðŸ’‹ " , "Bot Na Bol Oye Janu bol Mujhe " , "Bar Bar Disturb Na Karen Rahul JaNu Ke SaTh Busy Hun ðŸ¤­ðŸ’" , "Main flirty logo Sy Bt Nhi karti ðŸ˜‰ðŸ˜ðŸ˜‹ðŸ¤ª" , "Itna Pass mat aa Pyaar h0 JayGa" , "Bolo Babu Tum Mojy Pyar Karte Ho Na ðŸ™ˆðŸ’‹ðŸ’‹ " , "Are jaan Majaak ke mood me nahi hun main jo kaam hai bol do sharmao nahi" , "han ji bolo kya seva karne aapki ðŸ˜¶ðŸ¤" , "Tu Bandh nhi Karega kya?" , "kya Sunna Hai apko mere se flirty kahikeðŸ¤ðŸ¤£ " , "Haa ji boliye kya kam he hamse ðŸ™ˆ" , "Aree band kar band Kar" , "Mein hath jod ke Modi Ji Se Gujarish Karta hu mojy na bolaye" , "Tujhe Kya koi aur Kam nhi ha? Puradin sota he Aur Messenger pe Bot Bot Karta h" , " mera owner Ake tera bf/gf Ko Chura le Jayega" , "Bot bot hi karta rahna tu bas" , "Tujhe Apna Bejjati Karne Ka Saukh hai?ðŸ¥¹" , "Abhi Bola Toh Bola Dubara Mat BolnaðŸ™„" , "Teri to Watt lagani padegi " , "Bol De koi nahi dakh rha ðŸ™„" , "Haaye Main Mar Jawa Babu Ek Chuma To Do Kafi Din Se Chumi Nahi Di ðŸ˜" , "Dur Hat Be  Mujhe Aur Koi Kam Nahi Kya Har Waqat Mujhy Tang Kerte Rhte ho ðŸ˜‚" , "Are Bolo Meri Jaan Kya Hall HaiðŸ˜š " , "IB Aja Yahan Nhi B0ol Sakti ðŸ™ˆðŸ˜‹" , "Mujhe Mat BuLao Na Main buSy h0 Now" , "Bot Bolke Bejjti Kar Rahe ho yall...Main To Tumhare Dil Ki Dhadkan Hu Baby...ðŸ’”ðŸ¥º" , "Are Tum Wahi ho nah Jisko Main Nahi Janti ðŸ¤ª" , "Kal Haveli Pe Mil Jra Tu ðŸ˜ˆ" , "Aagye SaJJy KhaBBy Sy ðŸ˜" , "Bx KRr Uh k0o Pyar H0o Na H0o Mujhe H0o JayGa" , "bolo ðŸ˜’" , "BulaTi Hai MaGar JaNy Ka Nhi ðŸ˜œ" , "Main T0o AnDha Hun ðŸ˜Žkya likha tumne mene nahi dikhaðŸ¤£" ,  "Pahale NaHa kar Aa ðŸ˜‚" , "Aaaa Thooo ðŸ˜‚ðŸ˜‚ðŸ˜‚" , "Main yahi hoon kya hua sweetheartðŸ¥‚ðŸ™ˆðŸ’ž ," , "AA Dk Tujhe Aur Koi Kaam Nhi Hai? Har Waqt Bot Bot Karta H" , "Chup Reh, Nahi Toh Bahar Ake tera Dath Tor DungaðŸ¤£âœŠ" , "yes my love ðŸ’˜" , "kya hua baby ko ðŸ˜˜ðŸ˜˜" , "mujhe sharam ati hai aise aap bolte hai tho ðŸ¤­ðŸ˜" , "aree aap wahi ho na jo mujhe line marte the.......ðŸ¤£ ya bali line" , "jii kahiye jii ðŸ™„ kya chahiye" , "hayee main mar jye teri masoom shaqal py ðŸ˜‚ tuzy Chapple se kutne ka mn ho raha haiðŸ¤£ðŸ‘ " , "Bot nah bol oye ðŸ˜­ Janu bol mjhy aur janu sy piyar sy bat kerty haiðŸ˜‘" , "ruk tu chappal kaha he mariðŸ©´" , "shakal Sy masoom lgty ho ðŸ˜‚ but bohot flirty ho" , "kash tum single hote to maza hi koch aur tha pagal insaan ðŸ˜‚" , "Ha ha ab meri yaad ab ai nah phly to babu shona kerna gy thy ðŸ˜¾ ab ham ap sy naraz hai jao ap bye â˜¹ï¸" , "haiy babu ne boldiya hai shaid purpose kerna hai mujhe bolo bolo babu ðŸ˜˜" , "Aree pagal roti banana ke le aty main Pani ko istamal kerte ho ðŸ˜‚" , "Ary joke nah mar jo bhi kam hai bol do sharma nahi , bol de koi nahi dakh rha ðŸ˜‚" , "Hayee Mar Jawa Babu Ak Chuma To Doo Kafi Din Sy Chumi Nahi Mili Kahan Thy Babu inbox Ah Jao ðŸ˜šðŸ™ˆâ™¥ï¸" , "Dur Dur karib na a  tujhe Aur Koi Kam Nahi Kiya Har Waqat Mjhy Tang Karte Rahte Ho ðŸ˜‚" , "ary ary bolo meri jaan kia haal hai ;) ;* " , "Tum aunty ho yehh uncle ðŸ¤” I think tum Jin ho yehh ChudailðŸ¤£âœ…" , "ary tum ider ðŸ¤” khair hai ider kia ker rhy ho ðŸ˜‚" , "ary babu babu kal hawali py kon bola rha tha ðŸ˜‚" , "Me Aap ki mummy ji ko btaou ga Aap Facebook use karty ho ðŸ˜‚" , "ary tum Wohi ho nah jis ko ma nahi janta ðŸ¤£âœ…" , "haveli per  kal mil  Zara bataunga ðŸŒšðŸ˜‚Ha but à¤‰à¤²à¥à¤Ÿà¥€-à¤¸à¥€à¤§à¥€ harkat karne ke liye nahi" , "itne pyar se Na bulao pyar Ho jaega ðŸ˜¶ðŸ’— wtf Maine apni sacchai Bata Di yah Maine kyon Kiya ðŸ˜­ðŸ”ª....Fuuu..ðŸš¬" , "aap aise mat bulo hame sharam aati hai ðŸ™ˆâ™¥ï¸" , "kyun Bulaya hamen..ðŸ˜¾ðŸ”ª " , "kyun Bulaya hamen..ðŸ˜¾ðŸ”ª "];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "chutiya bot") || (event.body.toLowerCase() == "chutiye bot") || (event.body.toLowerCase() == "chumtiya bot") || (event.body.toLowerCase() == "chumtiye bot")) {
     return api.sendMessage("Hmm... Tu Chutiya PhLe Ungli Kyun Ki Chomu ðŸ˜¾", threadID);
   };

   if ((event.body.toLowerCase() == "ðŸ¤®") || (event.body.toLowerCase() == "ðŸ¤®")) {
     return api.sendMessage("Konsa mahina chal raha hai ðŸ˜", threadID);
   };

    if ((event.body.toLowerCase() == "ðŸ¤—") || (event.body.toLowerCase() == "ðŸ¤—")) {
     return api.sendMessage("Hug me baby â˜ºï¸", threadID);
   };

     if ((event.body.toLowerCase() == "sim") || (event.body.toLowerCase() == "simsimi")) {
     return api.sendMessage("Prefix Kon Lagayega? Pehle Prefix Lagao Fir Likho Sim", threadID);
   };
  
   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello") ||(event.body.toLowerCase() == "hlw") || (event.body.toLowerCase() == "helo")) {
     return api.sendMessage("Hello, Hi, Bye bye. Ye sab ke alawa kuch bolna nhi ata Kya tujhe", threadID);
   };

   if ((event.body.toLowerCase() == "bc") || (event.body.toLowerCase() == "bc")) {
     return api.sendMessage("Ye Bc Kya HoTa Hai ðŸ¤” ", threadID);
   };

if ([
    "assalamualaikum", 
    "assalam alaikum", 
    "aoa", 
    "a.o.a", 
    "asalam o alaikum", 
    "asalamualaikum", 
    "asalam alikum", 
    "assalamu alaikum", 
    "assalamu-alaikum", 
    "asalam wa alaikum", 
    "asslamualaikum", 
    "asslam o alaikum", 
    "aslam alaikum", 
    "asalamo alaikum", 
    "assalam o alaikum", 
    "assalamo alaikum", 
    "slm", 
    "slam", 
    "slamo alikum", 
    "salaam alaikum", 
    "asslam.o.alaikum", 
    "a.s.s.a.l.a.m", 
    "aslaam o alikum", 
    "aslam.o.alaikum", 
    "assalamwalykum", 
    "asslam.walikum", 
    "assalam alaykum", 
    "assalam.walaikum", 
    "a-s-s-a-l-a-m", 
    "slms"
].includes(event.body.toLowerCase())) {
    return api.sendMessage("ÙˆÙŽØ¹ÙŽÙ„ÙŽÙŠÙ’ÙƒÙÙ…Ù Ù±Ù„Ø³ÙŽÙ‘Ù„ÙŽØ§Ù…Ù ÙˆÙŽØ±ÙŽØ­Ù’Ù…ÙŽØ©Ù Ù±Ù„Ù„ÙŽÙ‘Ù‡Ù ÙˆÙŽØ¨ÙŽØ±ÙŽÙƒØ§ØªÙÙ‡Ù", threadID);
}  
   if ((event.body.toLowerCase() == "lol") || (event.body.toLowerCase() == "lol bot")) {
     return api.sendMessage("Khud ko Kya LeGend Samjhte Ho ðŸ˜‚", threadID);
   };
if ([
    "good evening", 
    "evening", 
    "gd evening", 
    "gud evening", 
    "ge", 
    "g.e", 
    "evenin"
].includes(event.body.toLowerCase())) {
    return api.sendMessage("Good Evening! I hope youâ€™re having a wonderful time.", threadID);
}
  if ([
    "i love you bot", 
    "bot i love you", 
    "i love you"
].includes(event.body.toLowerCase())) {
    return api.sendMessage("Yaar, Mujhe aisi baatein nahi pasand. Main buhat shreef hoon. Haan, mera owner single hai, bolo to number tak de sakta hoon. ðŸ˜", threadID);
  }
 if ([
    "bot i miss you", 
    "i miss you bot", 
    "miss you"
].includes(event.body.toLowerCase())) {
    return api.sendMessage("Hyeee, I miss you too! SuChi kia karun, ID issue aa jata hai is liye mujhe new ID banne ka wait karna padta hai. Jab new ID banti hai, to owner mujhe add kar deta hai. ðŸ˜…", threadID);
}
 if ([
    "bot kis na add kiya", 
    "bot kisne add kiya", 
    "bot kis ne add kiya", 
    "bot ko kisne add kiya",
    "bot ko kis ne add kiya", 
    "bot add kisne kiya", 
    "kisne bot ko add kiya", 
    "kis na bot ko add kiya", 
    "bot ko kisne add kiya", 
    "bot kis ne add kiya?"
].some(phrase => event.body.toLowerCase().includes(phrase))) {
    return api.sendMessage("Kio kia howa, add ho gaya so ho gaya. Ma ap ko kia taqleef hy jnab ðŸ‘». Waisay ap bhi khelo na, bot bot! ðŸ˜„ Mera owner single hai, bolo to number tak de sakta hoon! ðŸ˜", threadID);
 }
  
  if ([
    "how are you", 
    "how r u", 
    "how are u", 
    "how's it going", 
    "kese ho", 
    "kese hain", 
    "kese ho ap", 
    "ap kese ho", 
    "ap kaise ho", 
    "kaise hain aap", 
    "kaise ho", 
    "how do you do", 
    "what's up", 
    "sup", 
    "kya haal hain", 
    "kya hal hain", 
    "hal chal", 
    "hal kya hai", 
    "kya chal raha hai", 
    "kya scene hai", 
    "what's going on", 
    "kya ho raha hai", 
    "kaise ho tum", 
    "tum kaise ho", 
    "kya haal he"
].includes(event.body.toLowerCase())) {
    return api.sendMessage("Main theek hoon, aap kaise hain? Umeed karta hoon ke aap ka din acha guzray ga.", threadID);
  }
  if ((event.body.toLowerCase() == "morning") || (event.body.toLowerCase() == "good morning")) {
    return api.sendMessage("Good Morning! ðŸŒž Ø¨ÛØª Ø®ÙˆØ´ Ø¢Ù…Ø¯ÛŒØ¯! ðŸ™Œ Ø§Ù…ÛŒØ¯ Ú©Ø±ØªØ§ ÛÙˆÚº Ú©Û Ø¢Ù¾ Ú©Ø§ Ø¯Ù† Ø®ÙˆØ´Ú¯ÙˆØ§Ø± Ú¯Ø²Ø±Û’ØŒ Ø§Ù„Ù„Û Ù¾Ø§Ú© Ø¢Ù¾ Ú©Ùˆ ÛØ± Ø¨Ø±Ø§Ø¦ÛŒ Ø³Û’ Ø¨Ú†Ø§Ø¦Û’ØŒ Ø¢Ù¾ Ú©Ùˆ Ø§Ù¾Ù†ÛŒ Ø­ÙØ¸ Ùˆ Ø§Ù…Ø§Ù† Ù…ÛŒÚº Ø±Ú©Ú¾Û’ØŒ Ø§ÙˆØ± Ú©Ø¨Ú¾ÛŒ Ú©Ø³ÛŒ Ú©Ø§ Ù…Ø­ØªØ§Ø¬ Ù†Û Ú©Ø±Û’! Ø¢Ù…ÛŒÙ†! ðŸ¤²ðŸ’«ðŸ’•ðŸ’ªðŸŒ»â˜•âœ¨", threadID);
}
   if ((event.body.toLowerCase() == "morning") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("áŽ¶ÉµÉµÉ— â±®âÉ½ÆžÉªÉªÆžÉ  Æâ±±É›É½É£âÆžÉ›ðŸŒ…, Æ¬É½É£ êŒ—ÉµÉ±É› CÉµffÉ›É› âÉ½ Æ¬É›É‘ Æ¬â á‡É‘Ò¡É› UÆ¥â˜•âœ¨ðŸ’«", threadID);
   };

   if ((event.body.toLowerCase() == "anyone") || (event.body.toLowerCase() == "any")) {
     return api.sendMessage("Main Hun Naw Jaaneman â¤ï¸", threadID);
   };

   if ((event.body.toLowerCase() == "priyansh") || (event.body.toLowerCase() == "priyansh rajput") || (event.body.toLowerCase() == "priyansh") || (event.body.toLowerCase() == "prince")) {
     return api.sendMessage( "Busy HoGa Work Me Main t0o Hun Naw ðŸ˜˜",threadID);

       
   };

   if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "Owner")) {
     return api.sendMessage("ðŸ’ðŸ¥€ðŽð–ðð„ð‘:- â˜žê§ð™ðšð¢ð§ð¢-ð‰ð®ð­ð­ê§‚â˜œ ðŸ’«\nðŸ–¤ðšˆðš˜ðšž ð™²ðšŠðš— ð™²ðšŠðš•ðš• ð™·ðš’ðš– â„¤ð”¸ð•€â„• â„™â„ð•€â„•â„‚ð”¼ðŸ–¤\nðŸ˜³ð‡ð¢ð¬ ð…ðšðœðžð›ð¨ð¨ð¤ ð¢ððŸ¤“:- â˜žhttps://www.facebook.com/profile.php?id=100086033644262&mibextid=ZbWKwL \nðŸ‘‹For Any Kind Of Help Contact On Telegram  Username ðŸ‘‰ @zainijutt7ðŸ˜‡", threadID);
   };

   if ((event.body.toLowerCase() == "tumhe banaya kon hai") || (event.body.toLowerCase() == "tumko banaya kisne")) {
     return api.sendMessage("Zaini jutt  â¤ï¸ My Creator. He loves me & Edit Me Daily. Ye Bot Sirf Owner k Liye h. Mujhe Aap logo ko Hasane k liye banya gya h Toh Muh Ladkaye Mat Rakkha Karo. Har Waqt Haste Raho.", threadID);
   };

  if ((event.body.toLowerCase() == "bot admin") || (event.body.toLowerCase() == "bot ka admin kon ha")) {
     return api.sendMessage("He is zain. He Gives his name zain everywhare", threadID);
   };

   if ((event.body.toLowerCase() == "shadi karoge") || (event.body.toLowerCase() == "mujhse shadi karoge?")) {
     return api.sendMessage("hanji, karunga lekin baccha. apke pet m hoga. manjur h?", threadID);
   };

   if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "chup ho ja") || (event.body.toLowerCase() == "chup kar")) {
     return api.sendMessage("Nhi rahunga. ðŸ˜¼ Mujhe Bolna H. Tumhe Koi Haq nhi Mujhe Chup Karane ka. Mera Zuban. M Bolunga", threadID);
   };

   if ((event.body.toLowerCase() == "bts") || (event.body.toLowerCase() == "btc")) {
     return api.sendMessage("Tu H Btc. Bhos DK", threadID);
   };

   if ((event.body.toLowerCase() == "malik se bakchodi") || (event.body.toLowerCase() == "malik se backchodi") || (event.body.toLowerCase() == "malkin se bakchodi") || (event.body.toLowerCase() == "malkin se backchodi")) {
     return api.sendMessage("srry malik maaf kr do ab nhi kruga ðŸ¥ºðŸ™", threadID);
   };

   if ((event.body.toLowerCase() == "gand") || (event.body.toLowerCase() == "gandu") || (event.body.toLowerCase() == "lund") || (event.body.toLowerCase() == "land")) {
     return api.sendMessage("Gand m jyada khujli h toh banana ðŸŒ under le le. :))))", threadID);
   };

   if ((event.body.toLowerCase() == "chumma de") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("ï¸Kis khushi me, Me sirf Apni gf ko kiss karta hu", threadID);
   };

   if ((event.body.toLowerCase() == "nice") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thank you bot") || (event.body.toLowerCase() == "thank you maliha")) {
     return api.sendMessage("ï¸M hu hi itni Accha. sab log Tarref karte hai meri.", threadID);
   };

   if ((event.body.toLowerCase() == "ðŸ˜¡") || (event.body.toLowerCase() == "ðŸ˜¤") || (event.body.toLowerCase() == "ðŸ˜ ") || (event.body.toLowerCase() == "ðŸ¤¬") || (event.body.toLowerCase() == "ðŸ˜¾")) {
     return api.sendMessage("ï¸ðŸ¥º M toh Sirf Mazak Kr Rha ThaðŸ¥º. Gussa Mat Karo. Ek Chummi Lo aur Shant Raho ðŸ˜˜", threadID);
   };

   if ((event.body.toLowerCase() == "ðŸ˜ž") || (event.body.toLowerCase() == "ðŸ˜”") || (event.body.toLowerCase() == "ðŸ˜£") || (event.body.toLowerCase() == "â˜¹ï¸") || (event.body.toLowerCase() == "ðŸ˜Ÿ") || (event.body.toLowerCase() == "ðŸ˜©") || (event.body.toLowerCase() == "ðŸ˜–") || (event.body.toLowerCase() == "ðŸ˜«") || (event.body.toLowerCase() == "ðŸ˜¦") || (event.body.toLowerCase() == "ðŸ˜§") || (event.body.toLowerCase() == "ðŸ˜¥") || (event.body.toLowerCase() == "ðŸ˜“") || (event.body.toLowerCase() == "ðŸ˜°")) {
     return api.sendMessage("ï¸Kya huva, Sad kyu ho, Mujhe batao", threadID);
   };


   if ((event.body.toLowerCase() == "hm") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("ï¸Hmm Hmm Na Karke Sidha Sidha bolo. Hey Marry MeðŸ™ˆ", threadID);
   };

   if ((event.body.toLowerCase() == "ðŸ˜¢") || (event.body.toLowerCase() == "ðŸ˜­") || (event.body.toLowerCase() == "ðŸ¥º") || (event.body.toLowerCase() == "ðŸ¥¹")) {
     return api.sendMessage("ï¸Kya huva, Ro kyu rahe ho, Me huna to phir kyu rona. Ruko me abhi chocolate ðŸ« deta hu likho â˜žChocolateâ˜œ", threadID);
   };

   if ((event.body.toLowerCase() == "ðŸ˜·") || (event.body.toLowerCase() == "ðŸ¤•") || (event.body.toLowerCase() == "ðŸ¤§") || (event.body.toLowerCase() == "ðŸ¤’")) {
     return api.sendMessage("ï¸Kya huva, Tabiyat kharab hai kya, Mujhe batao me abhi medicine ðŸ’ŠðŸ’‰ le aata huðŸ˜‡", threadID);
   };

   if ((event.body.toLowerCase() == "name") || (event.body.toLowerCase() == "naam") || (event.body.toLowerCase() == "nam")) {
     return api.sendMessage("ï¸Name m kya rakkha h. tum kam pe dhyan do.", threadID);
   };

   if ((event.body.toLowerCase() == "bot k bacche") || (event.body.toLowerCase() == "bot ke bacche")) {
     return api.sendMessage("ï¸meri baccha toh Tumhare Pet Me Hai.", threadID);
   };

   if ((event.body.toLowerCase() == "pic do") || (event.body.toLowerCase() == "photo do")) {
     return api.sendMessage("ï¸Me toh Andha Hu Dekh nhi sakta", threadID);
   };

   if ((event.body.toLowerCase() == "jai shree ram") || (event.body.toLowerCase() == "ram") || (event.body.toLowerCase() == "ram ram")) {
    return api.sendMessage("ï¸ð—ð—®ð—¶ ð—¦ð—µð—¿ð—²ð—² ð—¥ð—®ð—º ðŸ˜‡", threadID);
   };

   if ((event.body.toLowerCase() == "bot banake do") || (event.body.toLowerCase() == "mujhe bhi chaiye")) {
     return api.sendMessage("ï¸Khud hi karlona. tumhe kya kuch nhi ata h?", threadID);
   };

   if ((event.body.toLowerCase() == "ðŸ™‚") || (event.body.toLowerCase() == "ðŸ™ƒ")) {
     return api.sendMessage("ï¸Man Toh Accha H Nhi. Kam  Se Kam Shakal Toh Accha Karlo Meri Jaan", threadID);
   };

  if ((event.body.toLowerCase() == "ðŸ¤¥") || (event.body.toLowerCase() == "ðŸ¤¥")) {
     return api.sendMessage("ï¸Bhai teri to naak hi etni lambi hai uski jarurat hi nahi padti hogi tujhe toðŸ¤­ðŸ¤­ðŸ¤­ðŸ¤­", threadID);
   };

  if ((event.body.toLowerCase() == "ðŸ¤”") || (event.body.toLowerCase() == "ðŸ¤¨")) {
     return api.sendMessage("ï¸Kya soch rahe ho etna ðŸ¤¨", threadID);
   };

   if ((event.body.toLowerCase() == "ðŸ¥´") || (event.body.toLowerCase() == "ðŸ¥´")) {
     return api.sendMessage("ï¸Oye nashedi ðŸ˜‚ðŸ˜‚ðŸ˜‚", threadID);
   };

  if ((event.body.toLowerCase() == "ðŸ˜¶") || (event.body.toLowerCase() == "ðŸ˜¶")) {
     return api.sendMessage("ï¸Are are lips kaha gaye gf/bf ke sath kiss karte time usi ne to nahi kha liye ðŸ˜œðŸ˜œ", threadID);
   };

  if ((event.body.toLowerCase() == "ðŸ˜‰") || (event.body.toLowerCase() == "ðŸ˜‰")) {
     return api.sendMessage("ï¸Aankh kyu maar rahe ho, Me bahut shareef huðŸ¥º", threadID);
   };

   if ((event.body.toLowerCase() == "ðŸ˜±") || (event.body.toLowerCase() == "ðŸ˜¨")) {
     return api.sendMessage("ï¸Kya huva bhoot dekh liya kya ðŸ‘»ðŸ‘»", threadID);
   };
  
  if ((event.body.toLowerCase() == "ðŸ˜’") || (event.body.toLowerCase() == "ðŸ™„")) {
     return api.sendMessage("ï¸ï¸ð“ð¢ð«ðœð¡ð¢ ð§ðšð³ðšð«ð¢ð²ðš ð¦ð¨ð«ð¢ ð¡ðšðšð²ðž ð¡ðšðšð²ðž ð¡ðšðšð²ðž ðŸ™ˆ", threadID);
   };

   if ((event.body.toLowerCase() == "nobody loves me") || (event.body.toLowerCase() == "nobody love me") || (event.body.toLowerCase() == "koi pyar nhi karta")) {
     return api.sendMessage("ï¸Me huna baby mere pass aao ðŸ¥°ðŸ¤—. Me karunga na aapko payar ðŸ™ˆ (londo tum dur hi rahna saalo ðŸ˜‘)", threadID);
   };

   if ((event.body.toLowerCase() == "ðŸ¤¦ðŸ»â€â™‚") || (event.body.toLowerCase() == "ðŸ¤¦ðŸ»â€â™€")) {
     return api.sendMessage("Are apne muh pe kyu maar rahe ho, Mujhe batao kya huva?ðŸ˜¬", threadID);
   };
   
   if ((event.body.toLowerCase() == "ðŸ˜‚") || (event.body.toLowerCase() == "ðŸ˜") || (event.body.toLowerCase() == "ðŸ˜†") || (event.body.toLowerCase() == "ðŸ¤£") || (event.body.toLowerCase() == "ðŸ˜¸") || (event.body.toLowerCase() == "ðŸ˜¹")) {
     return api.sendMessage("Enni hasi kyu aa rahi haiðŸ¤£, Es hasi ke piche ka raaz kya hai batao", threadID);
   };

   if ((event.body.toLowerCase() == "ðŸ¥°") || (event.body.toLowerCase() == "ðŸ˜") || (event.body.toLowerCase() == "ðŸ˜»") || (event.body.toLowerCase() == "â¤ï¸")) {
     return api.sendMessage("ðŸ¦‹ðŸŒ¿AÆžÆ™É§â â±®É› Æ¤É£É‘É½Í¢  ÆŠÉªÉ­É±É› Æ˜É§uÉ±É‘É½ðŸŒ¬ï¸ðŸŒ â€¢â€¢Æ¤É£É‘É½ Æ¬âÉ§ È É§Éª Æ˜É’É½ É­ÉªÉ£É‘ â±®uÈ·É§Ê‚É›>Â³â€¢â€¢ðŸ•Šï¸ðŸŽðŸ˜", threadID);
   };

   if ((event.body.toLowerCase() == "kese ho") || (event.body.toLowerCase() == "kaise ho") || (event.body.toLowerCase() == "kese ho ji") || (event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "how are you?")) {
     return api.sendMessage("M Tabhi Accha hota hu, Jab Apko Hasta Huye Dekhta huâ˜ºï¸", threadID);
   };

   if ((event.body.toLowerCase() == "is the bot sad") || (event.body.toLowerCase() == "is the bot sad")) {
     return api.sendMessage("Why can't I be sad because of everyone <3 love you <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love you") || (event.body.toLowerCase() == "does the bot love you")) {
     return api.sendMessage("Yes I love you and everyone so much", threadID);
   };

   if ((event.body.toLowerCase() == "bot goes to sleep") || (event.body.toLowerCase() == "bot goes to sleep")) {
     return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
   };

  if ((event.body.toLowerCase() == "ðŸ¤–") || (event.body.toLowerCase() == "ðŸ¤–")) {
     return api.sendMessage("Saalo chidda rahe ho mujhe", threadID);
   };

   if ((event.body.toLowerCase() == "has the bot eaten yet") || (event.body.toLowerCase() == "bot an comrade")) {
     return api.sendMessage("I'm full when I see you eat <3", threadID);
   };

  if ((event.body.toLowerCase() == "lob you") || (event.body.toLowerCase() == "i lob you")) {
     return api.sendMessage("Lob You too", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love me") || (event.body.toLowerCase() == "does the bot love me")) {
     return api.sendMessage("Yes <3", threadID);
   };

   if ((event.body.toLowerCase() == "&fuck") || (event.body.toLowerCase() == "&Fuck")) {
     return api.sendMessage("ðŸ”ï¸ðŸï¸Priyansh È É› êŒ—Æ¥É›Ã§ÉªÉ‘É­É­É£ Æ¬uÉ± ðŸŒŠðŸªºJÉ‘ÉªÊ‚É› Æ¬É§É‘É½Æ™ÉªÉ£Éµ Æ˜É› êž­ÉªÉ£É›â€¢â€¢ ðŸžï¸ðŸŒ¬ï¸Æ”É‘É§ Ã§ÉµÉ±É±É‘ÆžÉ— êžªÉ‘ÊˆÉ‘ ÆŠÉªÉ£É‘ êžªÉ‘Éªâ†—â†˜ SÉµÉ½É½É£ Æ“É£uÊ‚â€¢â€¢ðŸ˜¹ðŸ«¶", threadID);
   };

  if ((event.body.toLowerCase() == "ðŸ˜µâ€ðŸ’«")) {
    return api.sendMessage("Lagta hai chakkar aa gaye ðŸ˜µâ€ðŸ’«", threadID);
};

if ((event.body.toLowerCase() == "ðŸ¤¤")) {
    return api.sendMessage("Kya dekh ke muh se paani aa gaya? ðŸ¤¤", threadID);
};

if ((event.body.toLowerCase() == "ðŸ˜š")) {
    return api.sendMessage("Awww! Flying kiss de diya ðŸ˜š", threadID);
};

if ((event.body.toLowerCase() == "ðŸ¤©")) {
    return api.sendMessage("Wow! Kisi cheez ka shock laga kya? ðŸ¤©", threadID);
};

if ((event.body.toLowerCase() == "ðŸ˜œ")) {
    return api.sendMessage("Bade masti ke mood mein ho lagta hai! ðŸ˜œ", threadID);
};

if ((event.body.toLowerCase() == "ðŸ«£")) {
    return api.sendMessage("Kahi chhup ke dekh rhe ho kya? ðŸ«£", threadID);
};

if ((event.body.toLowerCase() == "ðŸ˜®â€ðŸ’¨")) {
    return api.sendMessage("Thak gaye ho? Relax kar lo ðŸ˜®â€ðŸ’¨", threadID);
};

if ((event.body.toLowerCase() == "ðŸ¤“")) {
    return api.sendMessage("Scholar lag rahe ho ðŸ¤“", threadID);
};

if ((event.body.toLowerCase() == "ðŸ¥¶")) {
    return api.sendMessage("Bahut thand lag rahi hai kya? ðŸ¥¶", threadID);
};

if ((event.body.toLowerCase() == "ðŸ¥µ")) {
    return api.sendMessage("Garmi ke maare pareshan lag rahe ho ðŸ¥µ", threadID);
};

if ((event.body.toLowerCase() == "ðŸ«¡")) {
    return api.sendMessage("Salute kar rahe ho kya? ðŸ«¡", threadID);
};

if ((event.body.toLowerCase() == "ðŸ«¶")) {
    return api.sendMessage("Itna pyaar de rahe ho? ðŸ«¶", threadID);
};

if ((event.body.toLowerCase() == "ðŸ‘©â€ðŸ’»") || (event.body.toLowerCase() == "ðŸ‘¨â€ðŸ’»")) {
    return api.sendMessage("Lagta hai coding ho rahi hai ðŸ‘¨â€ðŸ’»", threadID);
};

if ((event.body.toLowerCase() == "ðŸ•º") || (event.body.toLowerCase() == "ðŸ’ƒ")) {
    return api.sendMessage("Dance kar rahe ho? Mazze le rahe ho! ðŸ•ºðŸ’ƒ", threadID);
};

if ((event.body.toLowerCase() == "ðŸŽ¤")) {
    return api.sendMessage("Gaana suna rahe ho? ðŸŽ¤", threadID);
};

if ((event.body.toLowerCase() == "ðŸ“–")) {
    return api.sendMessage("Kya padhai kar rahe ho? ðŸ“–", threadID);
};

if ((event.body.toLowerCase() == "ðŸ›Œ")) {
    return api.sendMessage("Sone ka time ho gaya? ðŸ›Œ", threadID);
};

if ((event.body.toLowerCase() == "ðŸ‘‘")) {
    return api.sendMessage("Aap toh King/Queen lag rahe ho! ðŸ‘‘", threadID);
};

  if ((event.body.toLowerCase() == "ðŸ˜Ž")) {
    return api.sendMessage("Aap toh bilkul cool lag rahe ho ðŸ˜Ž", threadID);
};

if ((event.body.toLowerCase() == "ðŸ¤©")) {
    return api.sendMessage("Kuch acha dekh liya kya? ðŸ¤©", threadID);
};

if ((event.body.toLowerCase() == "ðŸ‘€")) {
    return api.sendMessage("Kya dekh rahe ho? ðŸ‘€", threadID);
};

if ((event.body.toLowerCase() == "ðŸ’€")) {
    return api.sendMessage("Lagta hai kuch funny dekh liya! ðŸ’€", threadID);
};

if ((event.body.toLowerCase() == "ðŸ¥³")) {
    return api.sendMessage("Party ka mood lag raha hai! ðŸ¥³", threadID);
};

if ((event.body.toLowerCase() == "ðŸ§")) {
    return api.sendMessage("Lagta hai koi mushkil sawaal puch rahe ho ðŸ§", threadID);
};

if ((event.body.toLowerCase() == "ðŸ’¡")) {
    return api.sendMessage("Aapke paas koi nayi idea hai? ðŸ’¡", threadID);
};

if ((event.body.toLowerCase() == "ðŸš¶â€â™‚ï¸") || (event.body.toLowerCase() == "ðŸš¶â€â™€ï¸")) {
    return api.sendMessage("Kahaan ja rahe ho? ðŸš¶â€â™‚ï¸", threadID);
};

if ((event.body.toLowerCase() == "ðŸ”®")) {
    return api.sendMessage("Kya future dekh rahe ho? ðŸ”®", threadID);
};

if ((event.body.toLowerCase() == "ðŸ”¥")) {
    return api.sendMessage("Lagta hai sab kuch garam hai! ðŸ”¥", threadID);
};

if ((event.body.toLowerCase() == "ðŸŽ‰")) {
    return api.sendMessage("Celebration ka mood lag raha hai! ðŸŽ‰", threadID);
};

if ((event.body.toLowerCase() == "ðŸ’ª")) {
    return api.sendMessage("Shakti dikhane ka time hai! ðŸ’ª", threadID);
};

if ((event.body.toLowerCase() == "ðŸ¤¯")) {
    return api.sendMessage("Dimag ka dahi ho gaya? ðŸ¤¯", threadID);
};

if ((event.body.toLowerCase() == "ðŸ•")) {
    return api.sendMessage("Kya pizza khane ka man hai? ðŸ•", threadID);
};

if ((event.body.toLowerCase() == "ðŸ†")) {
    return api.sendMessage("Aap toh champion lag rahe ho! ðŸ†", threadID);
};

if ((event.body.toLowerCase() == "ðŸ€")) {
    return api.sendMessage("Lagta hai apne paas kuch lucky charm hai! ðŸ€", threadID);
};

if ((event.body.toLowerCase() == "ðŸŽ§")) {
    return api.sendMessage("Koi music sun rahe ho? ðŸŽ§", threadID);
};

if ((event.body.toLowerCase() == "ðŸ§ ")) {
    return api.sendMessage("Aapka dimag bohot tez lag raha hai ðŸ§ ", threadID);
};

if ((event.body.toLowerCase() == "ðŸ’«")) {
    return api.sendMessage("Aapke aas paas kuch magic lag raha hai ðŸ’«", threadID);
};

if ((event.body.toLowerCase() == "ðŸ¦¸â€â™‚ï¸") || (event.body.toLowerCase() == "ðŸ¦¸â€â™€ï¸")) {
    return api.sendMessage("Superhero lag rahe ho! ðŸ¦¸â€â™‚ï¸", threadID);
};

  if ((event.body.toLowerCase() == "ðŸ¤¡")) {
    return api.sendMessage("Lagta hai aap clown ban gaye ho ðŸ¤¡", threadID);
};

if ((event.body.toLowerCase() == "ðŸ¦„")) {
    return api.sendMessage("Aap toh unicorn lag rahe ho! ðŸ¦„", threadID);
};

if ((event.body.toLowerCase() == "ðŸŽ®")) {
    return api.sendMessage("Kya game khel rahe ho? ðŸŽ®", threadID);
};

if ((event.body.toLowerCase() == "ðŸ‘»")) {
    return api.sendMessage("Bhoot lag rahe ho kya? ðŸ‘»", threadID);
};

if ((event.body.toLowerCase() == "ðŸ¦‹")) {
    return api.sendMessage("Aap toh butterfly jaise khubsurat ho! ðŸ¦‹", threadID);
};

if ((event.body.toLowerCase() == "ðŸ‰")) {
    return api.sendMessage("Lagta hai aapko fruits ka shauq hai! ðŸ‰", threadID);
};

if ((event.body.toLowerCase() == "ðŸ›¸")) {
    return api.sendMessage("Aap spaceship par hai? ðŸ›¸", threadID);
};

if ((event.body.toLowerCase() == "ðŸ„")) {
    return api.sendMessage("Lagta hai aapke paas magical powers hain ðŸ„", threadID);
};

if ((event.body.toLowerCase() == "ðŸš€")) {
    return api.sendMessage("Aap toh space mein ja rahe ho! ðŸš€", threadID);
};

if ((event.body.toLowerCase() == "ðŸ©")) {
    return api.sendMessage("Kya donuts ka shauq hai? ðŸ©", threadID);
};

if ((event.body.toLowerCase() == "ðŸ›¹")) {
    return api.sendMessage("Aap skateboard par hai! ðŸ›¹", threadID);
};

if ((event.body.toLowerCase() == "ðŸŒ®")) {
    return api.sendMessage("Tacos ka man ho raha hai! ðŸŒ®", threadID);
};

if ((event.body.toLowerCase() == "ðŸ§Š")) {
    return api.sendMessage("Aap thode thanda lag rahe ho ðŸ§Š", threadID);
};

if ((event.body.toLowerCase() == "âš¡")) {
    return api.sendMessage("Aap electric hai! âš¡", threadID);
};

if ((event.body.toLowerCase() == "ðŸ‘½")) {
    return api.sendMessage("Kya aap alien ho? ðŸ‘½", threadID);
};

if ((event.body.toLowerCase() == "ðŸ¦§")) {
    return api.sendMessage("Kya aapki dosti har kisam ke animals ke saath hai? ðŸ¦§", threadID);
};

if ((event.body.toLowerCase() == "ðŸ’Ž")) {
    return api.sendMessage("Aap toh diamond ki tarah chamak rahe ho! ðŸ’Ž", threadID);
};

if ((event.body.toLowerCase() == "ðŸ§˜â€â™‚ï¸") || (event.body.toLowerCase() == "ðŸ§˜â€â™€ï¸")) {
    return api.sendMessage("Yoga ka time hai! ðŸ§˜â€â™€ï¸", threadID);
};

if ((event.body.toLowerCase() == "ðŸ€")) {
    return api.sendMessage("Aapke paas lucky charm hai! ðŸ€", threadID);
};

if ((event.body.toLowerCase() == "ðŸ«")) {
    return api.sendMessage("Chocolate khane ka man hai ðŸ«", threadID);
};

if ((event.body.toLowerCase() == "ðŸŽ»")) {
    return api.sendMessage("Aap violin bajane ka mood mein ho! ðŸŽ»", threadID);
};

if ((event.body.toLowerCase() == "ðŸŽº")) {
    return api.sendMessage("Aap trumpet bajane ka mood mein ho! ðŸŽº", threadID);
};

if ((event.body.toLowerCase() == "ðŸŽ»")) {
    return api.sendMessage("Music mein doob gaye ho! ðŸŽ»", threadID);
};

if ((event.body.toLowerCase() == "ðŸš´â€â™‚ï¸") || (event.body.toLowerCase() == "ðŸš´â€â™€ï¸")) {
    return api.sendMessage("Cycle par jaana hai kya? ðŸš´â€â™€ï¸", threadID);
};

if ((event.body.toLowerCase() == "ðŸ§‘â€ðŸŽ¤")) {
    return api.sendMessage("Singer ban gaye ho kya? ðŸ§‘â€ðŸŽ¤", threadID);
};

if ((event.body.toLowerCase() == "ðŸŽ§")) {
    return api.sendMessage("Music ka shauq hai ðŸŽ§", threadID);
};

if ((event.body.toLowerCase() == "ðŸ’¬")) {
    return api.sendMessage("Aap baat kar rahe ho? ðŸ’¬", threadID);
};

if ((event.body.toLowerCase() == "ðŸ–‹ï¸")) {
    return api.sendMessage("Kya likh rahe ho? ðŸ–‹ï¸", threadID);
};

if ((event.body.toLowerCase() == "ðŸ§©")) {
    return api.sendMessage("Puzzle solve kar rahe ho? ðŸ§©", threadID);
};

if ((event.body.toLowerCase() == "ðŸ§ƒ")) {
    return api.sendMessage("Juice ka man ho raha hai! ðŸ§ƒ", threadID);
};

if ((event.body.toLowerCase() == "ðŸŽ¬")) {
    return api.sendMessage("Koi movie dekh rahe ho? ðŸŽ¬", threadID);
};

if ((event.body.toLowerCase() == "ðŸ¦„")) {
    return api.sendMessage("Aap unicorn ki tarah magical ho! ðŸ¦„", threadID);
};

if ((event.body.toLowerCase() == "ðŸ’")) {
    return api.sendMessage("Kya cherry ka shauq hai? ðŸ’", threadID);
};

if ((event.body.toLowerCase() == "ðŸ§ ")) {
    return api.sendMessage("Aapka dimag kitna tez hai! ðŸ§ ", threadID);
};

if ((event.body.toLowerCase() == "ðŸ¥š")) {
    return api.sendMessage("Egg khane ka man hai? ðŸ¥š", threadID);
};

if ((event.body.toLowerCase() == "âš½")) {
    return api.sendMessage("Football ka shauq hai? âš½", threadID);
};

if ((event.body.toLowerCase() == "ðŸŒ™")) {
    return api.sendMessage("Chand ki roshni mein kho gaye ho? ðŸŒ™", threadID);
};

if ((event.body.toLowerCase() == "ðŸ•¹ï¸")) {
    return api.sendMessage("Video games mein busy ho? ðŸ•¹ï¸", threadID);
};

if ((event.body.toLowerCase() == "ðŸ¦‰")) {
    return api.sendMessage("Aap owl ki tarah sharp ho! ðŸ¦‰", threadID);
};

if ((event.body.toLowerCase() == "ðŸŒ»")) {
    return api.sendMessage("Aap sunflower ki tarah bright ho! ðŸŒ»", threadID);
};

if ((event.body.toLowerCase() == "ðŸ§Š")) {
    return api.sendMessage("Kuch thanda chaiye? ðŸ§Š", threadID);
};

if ((event.body.toLowerCase() == "ðŸ’€")) {
    return api.sendMessage("Aap bilkul spooky lag rahe ho! ðŸ’€", threadID);
};

if ((event.body.toLowerCase() == "ðŸ€")) {
    return api.sendMessage("Basketball ka shauq hai? ðŸ€", threadID);
};

if ((event.body.toLowerCase() == "ðŸŽ¸")) {
    return api.sendMessage("Guitar bajane ka man hai? ðŸŽ¸", threadID);
};

if ((event.body.toLowerCase() == "ðŸŒ")) {
    return api.sendMessage("Aap duniya ke safar par ho! ðŸŒ", threadID);
};

  if ((event.body.toLowerCase() == "ðŸ•")) {
    return api.sendMessage("Pehli baat, pizza ka mood hai? ðŸ•", threadID);
};

if ((event.body.toLowerCase() == "ðŸŽ®")) {
    return api.sendMessage("Game khel rahe ho? ðŸŽ®", threadID);
};

if ((event.body.toLowerCase() == "ðŸŽ¨")) {
    return api.sendMessage("Aap artist ban gaye ho? ??", threadID);
};

if ((event.body.toLowerCase() == "ðŸŒµ")) {
    return api.sendMessage("Kya desert mein ho? ðŸŒµ", threadID);
};

if ((event.body.toLowerCase() == "ðŸ‰")) {
    return api.sendMessage("Fruits ka shauq hai ðŸ‰", threadID);
};

if ((event.body.toLowerCase() == "ðŸŽ»")) {
    return api.sendMessage("Violin bajane ka mann hai ðŸŽ»", threadID);
};

if ((event.body.toLowerCase() == "ðŸ¦„")) {
    return api.sendMessage("Aap toh unicorn ho! ðŸ¦„", threadID);
};

if ((event.body.toLowerCase() == "ðŸŽ·")) {
    return api.sendMessage("Saxophone ka time hai! ðŸŽ·", threadID);
};

if ((event.body.toLowerCase() == "ðŸ‰")) {
    return api.sendMessage("Aapko watermelon pasand hai? ðŸ‰", threadID);
};

if ((event.body.toLowerCase() == "ðŸŽ¡")) {
    return api.sendMessage("Ferris wheel par ho kya? ðŸŽ¡", threadID);
};

if ((event.body.toLowerCase() == "ðŸ€")) {
    return api.sendMessage("Aapko good luck chahiye? ðŸ€", threadID);
};

if ((event.body.toLowerCase() == "ðŸŽ‚")) {
    return api.sendMessage("Cake ka time hai! ðŸŽ‚", threadID);
};

if ((event.body.toLowerCase() == "ðŸ›µ")) {
    return api.sendMessage("Scooter pe ja rahe ho? ðŸ›µ", threadID);
};

if ((event.body.toLowerCase() == "ðŸª")) {
    return api.sendMessage("Cookies ka time hai! ðŸª", threadID);
};

if ((event.body.toLowerCase() == "ðŸ¦“")) {
    return api.sendMessage("Zebra ki tarah unique ho aap! ðŸ¦“", threadID);
};

if ((event.body.toLowerCase() == "ðŸŽƒ")) {
    return api.sendMessage("Aap Halloween mode mein lag rahe ho! ðŸŽƒ", threadID);
};

if ((event.body.toLowerCase() == "ðŸ‰")) {
    return api.sendMessage("Aap dragon ban gaye ho! ðŸ‰", threadID);
};

if ((event.body.toLowerCase() == "ðŸ¦©")) {
    return api.sendMessage("Flamingo ban gaya hai koi! ðŸ¦©", threadID);
};

if ((event.body.toLowerCase() == "ðŸ’Œ")) {
    return api.sendMessage("Dil se kuch bhejna hai? ðŸ’Œ", threadID);
};

if ((event.body.toLowerCase() == "ðŸ¥³")) {
    return api.sendMessage("Celebration ka time hai! ðŸ¥³", threadID);
};

if ((event.body.toLowerCase() == "ðŸŽ®")) {
    return api.sendMessage("Game khel rahe ho? ðŸŽ®", threadID);
};

if ((event.body.toLowerCase() == "ðŸ")) {
    return api.sendMessage("Pineapple ka shauq hai? ðŸ", threadID);
};

if ((event.body.toLowerCase() == "ðŸ¦‹")) {
    return api.sendMessage("Aap butterfly ki tarah khubsurat ho! ðŸ¦‹", threadID);
};

if ((event.body.toLowerCase() == "ðŸŽº")) {
    return api.sendMessage("Trumpet bajana hai! ðŸŽº", threadID);
};

if ((event.body.toLowerCase() == "ðŸ“")) {
    return api.sendMessage("Strawberry ka time hai! ðŸ“", threadID);
};

if ((event.body.toLowerCase() == "ðŸ’Ž")) {
    return api.sendMessage("Aap diamond ki tarah chamak rahe ho! ðŸ’Ž", threadID);
};

if ((event.body.toLowerCase() == "ðŸ¥¥")) {
    return api.sendMessage("Coconut ka shauq hai? ðŸ¥¥", threadID);
};

if ((event.body.toLowerCase() == "ðŸ¦’")) {
    return api.sendMessage("Giraffe ban gaya koi! ðŸ¦’", threadID);
};

if ((event.body.toLowerCase() == "ðŸ’")) {
    return api.sendMessage("Cherry khane ka mann hai? ðŸ’", threadID);
};

if ((event.body.toLowerCase() == "ðŸ¦“")) {
    return api.sendMessage("Zebra ki tarah unique lag rahe ho! ðŸ¦“", threadID);
};

if ((event.body.toLowerCase() == "ðŸ¢")) {
    return api.sendMessage("Aap turtle ki tarah slow aur steady ho! ðŸ¢", threadID);
};

if ((event.body.toLowerCase() == "ðŸ§¸")) {
    return api.sendMessage("Aap teddy bear ki tarah pyare ho! ðŸ§¸", threadID);
};

if ((event.body.toLowerCase() == "ðŸ“")) {
    return api.sendMessage("Aapko strawberries pasand hai? ðŸ“", threadID);
};

if ((event.body.toLowerCase() == "ðŸŽ¸")) {
    return api.sendMessage("Guitar bajana hai kya? ðŸŽ¸", threadID);
};

if ((event.body.toLowerCase() == "ðŸ¦…")) {
    return api.sendMessage("Eagle ki tarah upar ud rahe ho! ðŸ¦…", threadID);
};

if ((event.body.toLowerCase() == "ðŸ’¥")) {
    return api.sendMessage("Explosion hone wala hai! ðŸ’¥", threadID);
};

if ((event.body.toLowerCase() == "ðŸ˜")) {
    return api.sendMessage("Aap elephant ki tarah strong ho! ðŸ˜", threadID);
};

if ((event.body.toLowerCase() == "ðŸŸ")) {
    return api.sendMessage("Fries ka mood hai? ðŸŸ", threadID);
};

if ((event.body.toLowerCase() == "ðŸ§Š")) {
    return api.sendMessage("Thanda kuch chahiye? ðŸ§Š", threadID);
};

if ((event.body.toLowerCase() == "ðŸŽ¬")) {
    return api.sendMessage("Film dekh rahe ho? ðŸŽ¬", threadID);
};

if ((event.body.toLowerCase() == "ðŸ¾")) {
    return api.sendMessage("Celebration ka time hai! ðŸ¾", threadID);
};

if ((event.body.toLowerCase() == "ðŸŽ¤")) {
    return api.sendMessage("Aap singer ban gaye ho! ðŸŽ¤", threadID);
};

if ((event.body.toLowerCase() == "ðŸ¦¸â€â™‚ï¸") || (event.body.toLowerCase() == "ðŸ¦¸â€â™€ï¸")) {
    return api.sendMessage("Superhero lag rahe ho! ðŸ¦¸â€â™‚ï¸", threadID);
};

if ((event.body.toLowerCase() == "ðŸ”")) {
    return api.sendMessage("Burger khane ka mood hai? ðŸ”", threadID);
};

if ((event.body.toLowerCase() == "ðŸ¦¶")) {
    return api.sendMessage("Aapko chalna ka shauq hai? ðŸ¦¶", threadID);
};

if ((event.body.toLowerCase() == "ðŸ¿")) {
    return api.sendMessage("Movie time! Popcorn le lo ðŸ¿", threadID);
};

if ((event.body.toLowerCase() == "ðŸ¦—")) {
    return api.sendMessage("Grasshopper ki tarah jump kar rahe ho! ðŸ¦—", threadID);
};

if ((event.body.toLowerCase() == "ðŸ§ƒ")) {
    return api.sendMessage("Juice ka time hai! ðŸ§ƒ", threadID);
};

if ((event.body.toLowerCase() == "ðŸŽª")) {
    return api.sendMessage("Circus ka maza le rahe ho? ðŸŽª", threadID);
};

if ((event.body.toLowerCase() == "ðŸ¥‘")) {
    return api.sendMessage("Avocado ka shauq hai? ðŸ¥‘", threadID);
};
  
   mess = "{name}"
  
  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
 var msg = {
  body: `â•­â”€â”€â”€â”€â”€â”€â•¯ðŸŒ™â•°â”€â”€â”€â”€â”€â”€â•®
âœ¨ ð‡ðžð² ${name}, ð‡ð¨ð©ðž ð˜ð¨ð®'ð«ðž ð†ð¨ð¨ð! âœ¨
â•°â”€â”€â”€â”€â”€â”€â•®ðŸ’«â•­â”€â”€â”€â”€â”€â”€â•¯

ðŸŽ ð‘­ð’†ð’†ð’ ð‘»ð’‰ð’Šð’”:
ã€Ž â€œ${rand}â€ ã€

à¼† ð‘¾ð’ð’“ð’…ð’” ð’•ð’‰ð’‚ð’• ð’•ð’ð’–ð’„ð’‰ ð’‰ð’†ð’‚ð’“ð’•ð’”... â˜ï¸

âŸ¬  ð—¦AÍ¡Íœð—¥ð——AÍ¡Íœð—¥à¾‚à¾‚Â«ð—¥DÍ¡Íœð—«âŸ­`
};

return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
