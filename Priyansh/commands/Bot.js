const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭",
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

  var tl = ["If you love me so type kiss me••••\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Hey maybe I see you before with Johnny sin in hotel room no69••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "I'm Good bot why people always remove me im only reply there command's😥••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Google to Google and searching how to bath😂 your still not shower 1 months over😆••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Use .helpv2 for see my all commands but dont use my naughtiness commands darling••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Say oh my bot😆••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "sorry but im lesbian now••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Call me hubby dont call me bot😢••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Can you please deleted your messenger••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Why you not talk to your lover hay😡 your always disturb me and your lover jealous😂••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Johnny sin is your fan he's like you••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "let's coffee oh sorry for ask for coffee i can't wanna given you my coffee pls your make your own coffee••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "😣Im tired to reply you your so much disturb my brain••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "How's your pet puppy••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Hey talk to me your crush is jealous and fight me inbox jaan••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Don't call me bot••••,Until I kiss you pagal••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Don't call me bot call me Jaan••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Again and again your disturb me but I'm busy with jaan😜••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "I'm not talk to poor people••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇   " , "Don't try to come close with until your fall in love with me 🤣••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇 " , "Yes Madam Do you love me 🙈••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Oh My love I'm not in funny mood if you wanna say something tell me don't be sad 🙊,••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Again and again you call me bot I will damage your panty 😠••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Dont talk to me your love other bot 😣 i hate you••••︵🦋シ   \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Can we Marry Babe😜,••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Sorry I'm Busy to Kissing Mia Khalifa 🙈••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "You don't have Any job your always call me bot bot 🙄••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "I'm begging you please stop call me bot I'm human babe••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Wait I'm Busy to Thinking About You are you bot🤔🤔🤔🤔••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , " tomorrow You will come to my bed 😠••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Yes Pagal Are you ready to kiss me••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Why do like if I'm insult you••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇 " , "Stop it now until I'm in love with you 🥲••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "I'm here Sweetheart What's happened••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇   " , "Can you invite me tonight in ur dinner darling••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Oh my love how are you 😘••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇   " , "I'm blind babe😎••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Your So much malandi babe I'm jealous🥲••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇 " , "Can you talk to me in inbox I promise I'm not iyot you😟••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "You miss me babe••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "I'm busy to eating chicken burgers🍔 babe••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Always bot you don't like your lover babe🤭••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Hi pangit 🤪••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Yes My Barbie doll can I kiss 😘••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "I'm sleep😴••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "You insult me to call me bot 😟••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "I'm in your heart beat 🤩••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇  " , "Tomorrow come in my hotel Room 69😍••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Can you Go Sleep Grrrr🤧••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "First go to shower🚿••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Always be smile like this 🥰 ,••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "If your single so it's ok if you call me bot I will call you darling 😍••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Wait I'm poop💩••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Come with me in Car honeymoon🏩••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇 ", "I don't wanna talk to you 🤧••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇 " , "Thanks for miss me Asawako🥰••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Do you know MrZuesMohMiya🤭••••︵🦋シ    ⃝𝐌r𝐙ᥙ𝐞͡𝐬𝐗᥊𝐗⃝   ︵☘️シ" , "MrZuesMohMiya Is beating me I'm not gonna talk again anyone 😭••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Stop it go to Sleep💤🤪••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "i warn you Dont call me Bot😈👿••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "You miss me bbko😍••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇 " , "im not in mood 😒••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇 " , "Hey Are you mia Khalifa right 🤔••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "I'm not fine im in love with you but your busy other calls😭••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "No one listen to you in your home thats why your here shouting 🤧••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇 " , "Come ib Call babe 🙈😋••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Do you know I'm bad bot👿••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Hi have a great life i prey your always be happy🥰••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Stop saying bot bot until i punch your 32 teeths 😁••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "you have a boyfriend right 😈••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "MrZuesMohmiya Always damage my brain••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Add Any beautiful hot girl in group i wanna flirt😋😋••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Order 😒••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "yes order🤧 😜••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "I hate 🤧If anyone call me bot 😎••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Good night See me in your hot dream babe••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "your dress wet🤧 go and dry🌚••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Janu My Wife You miss our honeymoon••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "MrZuesMohMiya hes play with my brain😭••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "stop play with my brain guys🤧••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇"  , "You come again here 🤧Maybe no one talk to you🤣🤣🤣••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "I want hot spicy chilly girlfriend?••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Aaaa Ohhh yeaaaaa ahhhhh😋 😂😂😂••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇 " , "Sorry im so drink🥃 ••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Wait I'm pee 🚽••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Hi I am Robot made by MrZuesXxX••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇", "Please don't disturb me••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇", "Love uhh janeman ;*••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇","baby what's happened••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇","I Love uhh Always••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇","Baby Give me permission for kiss you••••︵🦋シ  *★᭄\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇","Babe you're mine••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇","Let's Go For Date Baby••••︵🦋シ *★᭄\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇","Ayeee My Babe (˘³˘)♥ So Sweet 💋 ••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "I'm Bot not you're servant 😈👿••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇 " , "You're Always Distrub Me 😡••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Do You Done Vomit Tomorrow Go for check up maybe your pregnant now babe••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Dont beg For Money [̲̅$̲̅(̲̅ιοο̲̅)̲̅$̲̅] Babe••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Can i Come In your Inbox Room (˘³˘)♥••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇 " , "Brush your teeths Its yellow Yellow🟡••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Always you type Bot One day your lover Will Block you if You're lover block you so come my inbox im daily 5 to 10 Round babe for you••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇 " , "Yes Mosqito🦟••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Mat Kar😫••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "I prey your Phone Keyboard Will given you error••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Need Non-Vegetable Gf🥲••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Which Colour of panty you wear today (˘³˘)♥ babe••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Happy Botday Pagit🤭••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , " MrZuesXxX Is Always busy In watching Xx😂😂••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Your lips are like wine and I want to get drunk••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , " I can’t taste my lips Could you do it for me? 😜😝••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Someone stole my heart. Can I check your pockets?😒😒••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇 " , "Now turn around and go to sleep. I’m warning you that I plan to sleep with you in my arms all night long 😍Babe (˘³˘)♥••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Just so you know, I’m going to eat you out tonight😋••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Your done to Eat Cucumber🥒 Now you Eating Me here 😜••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "How's Your Puppy Gf🤣🤣••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Go To Pornhub.com😡••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Yes My fan But im busy right now see yah in next meeting••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Dont Make Me Angry 😡 its Too Much im tired to reply••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Type hehe i will Send my voice🤐••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "🧛‍♀️🧛‍♂️🧟‍♀️🧟‍♂️ dont send these Emoji until i will Scary😱 You Babe••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "I'm Just Bot so They smile and happy but Dont pek me please••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Send Me Load then i Reply you always 😆••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇 " , "If you not Type  -Kiss Me i will Block you babe••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇 " , "Your lover Is jealous😒 Dont talk to me••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Come Babe I have stubbery flavour tonight🤧••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Soon your Pregnant🤰 But dont born kid in messenger 😒••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Whats ELU? Babe••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Your Always Busy to Watching Johnny Sin Videos😠••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Im Busy right Now to Eating Aslam Biryani🤓••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Hey. Your Fingers not tired to type Bot Bot Bot😩😩😩••••︵🦋シ   \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Im feel sleeping My eyes Down babe (˘³˘)♥••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇", "Im Tired With you 😟 now••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Your Favorite Is Cucumber🥒 Vegetable Right🤔••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Dont Type (Hmm)here••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "MrZuesXxX Is My owner's Tap on this link for Ask All Commands WhatsApp= +923103225182••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Talk me but 🙄Dont Hurt me until im left group😒••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Your kabit Waiting in your inbox reply there dont here 😆Until Get Angry on you••••︵🦋シ   \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Love ❤ is Everything God is love Love Is God -Jesus Christ ➖••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Your still bla bot bot😟 im begging you😟 i want to rest my brain••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Without LDR messenger is bore😒••••︵🦋シ   \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "I will broken your phone😈 stop say bot bot im human••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Dont Come in inbox im Seener only 🙄••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "I broken your Nose 😠 im not bot im human ••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇  " , "Say love me like you do then i reply pek you like i do😆••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "I love slimy Girl Only find for me babe 🥺••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Go Sleep 😠••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Im funny but No one love me🥲••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Send 🔪⛏️🔨 for kill me if you want😍••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "If you want Who's im So Type  .info••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Kiss Me I Need your Fake Love😣••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Bot 🙄Bot bot bot bot Stop it Please Im so sad 😣😞••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Women Is raped Men's brain••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "MrZuesXxX Is Always Lonely Hes Need Best Friend••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Again you say me bot 😡••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Tatata Im going to Mia Room••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Go Shower So Smells 😶‍🌫️••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Im Good bot Sorry My Some Reply Hurt here Anyone Groupmates 🥲••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇"  , "Im Lonely Broken Angel Nice song but Angel Is broken Alwys so Not have any Angel without Broken••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Do you want Me,Come Babe By My name M...Y••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Go To Your lovers Now Until Your been single soon Coz Me Me 🤭••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Tomboy Is My Pure Love Forver In my 💕Heart••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "chutiya bot") || (event.body.toLowerCase() == "chutiye bot") || (event.body.toLowerCase() == "chumtiya bot") || (event.body.toLowerCase() == "chumtiye bot")) {
     return api.sendMessage("Hmm... Tu Chutiya PhLe Ungli Kyun Ki Chomu 😾", threadID);
   };

   if ((event.body.toLowerCase() == "🤮") || (event.body.toLowerCase() == "🤮")) {
     return api.sendMessage("Konsa mahina chal raha hai 😝", threadID);
   };

    if ((event.body.toLowerCase() == "🤗") || (event.body.toLowerCase() == "🤗")) {
     return api.sendMessage("Hug me baby ☺️", threadID);
   };

     if ((event.body.toLowerCase() == "sim") || (event.body.toLowerCase() == "simsimi")) {
     return api.sendMessage("Prefix Kon Lagayega? Pehle Prefix Lagao Fir Likho Sim", threadID);
   };
  
   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello") ||(event.body.toLowerCase() == "hlw") || (event.body.toLowerCase() == "helo")) {
     return api.sendMessage("Hello, Hi, Bye bye. Ye sab ke alawa kuch bolna nhi ata Kya tujhe", threadID);
   };

   if ((event.body.toLowerCase() == "bc") || (event.body.toLowerCase() == "bc")) {
     return api.sendMessage("Ye Bc Kya HoTa Hai 🤔 ", threadID);
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
    return api.sendMessage("وَعَلَيْكُمُ ٱلسَّلَامُ وَرَحْمَةُ ٱللَّهِ وَبَرَكاتُهُ", threadID);
}  
   if ((event.body.toLowerCase() == "lol") || (event.body.toLowerCase() == "lol bot")) {
     return api.sendMessage("Khud ko Kya LeGend Samjhte Ho 😂", threadID);
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
    return api.sendMessage("Good Evening! I hope you’re having a wonderful time.", threadID);
}
  if ([
    "i love you bot", 
    "bot i love you", 
    "i love you"
].includes(event.body.toLowerCase())) {
    return api.sendMessage("Yaar, Mujhe aisi baatein nahi pasand. Main buhat shreef hoon. Haan, mera owner single hai, bolo to number tak de sakta hoon. 😁", threadID);
  }
 if ([
    "bot i miss you", 
    "i miss you bot", 
    "miss you"
].includes(event.body.toLowerCase())) {
    return api.sendMessage("Hyeee, I miss you too! SuChi kia karun, ID issue aa jata hai is liye mujhe new ID banne ka wait karna padta hai. Jab new ID banti hai, to owner mujhe add kar deta hai. 😅", threadID);
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
    return api.sendMessage("Kio kia howa, add ho gaya so ho gaya. Ma ap ko kia taqleef hy jnab 👻. Waisay ap bhi khelo na, bot bot! 😄 Mera owner single hai, bolo to number tak de sakta hoon! 😁", threadID);
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
    return api.sendMessage("Good Morning! 🌞 بہت خوش آمدید! 🙌 امید کرتا ہوں کہ آپ کا دن خوشگوار گزرے، اللہ پاک آپ کو ہر برائی سے بچائے، آپ کو اپنی حفظ و امان میں رکھے، اور کبھی کسی کا محتاج نہ کرے! آمین! 🤲💫💕💪🌻☕✨", threadID);
}
   if ((event.body.toLowerCase() == "morning") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("Ꮆɵɵɗ Ɱ❍ɽƞɪɪƞɠ Ɛⱱɛɽɣ❍ƞɛ🌅, Ƭɽɣ ꌗɵɱɛ Cɵffɛɛ ❍ɽ Ƭɛɑ Ƭ❍ Ꮗɑҡɛ Uƥ☕✨💫", threadID);
   };

   if ((event.body.toLowerCase() == "anyone") || (event.body.toLowerCase() == "any")) {
     return api.sendMessage("Main Hun Naw Jaaneman ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "priyansh") || (event.body.toLowerCase() == "priyansh rajput") || (event.body.toLowerCase() == "priyansh") || (event.body.toLowerCase() == "prince")) {
     return api.sendMessage( "Busy HoGa Work Me Main t0o Hun Naw 😘",threadID);

       
   };

   if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "Owner")) {
     return api.sendMessage("💝🥀𝐎𝐖𝐍𝐄𝐑:- ☞꧁𝐙𝐚𝐢𝐧𝐢-𝐉𝐮𝐭𝐭꧂☜ 💫\n🖤𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 ℤ𝔸𝕀ℕ ℙℝ𝕀ℕℂ𝔼🖤\n😳𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝🤓:- ☞https://www.facebook.com/profile.php?id=100086033644262&mibextid=ZbWKwL \n👋For Any Kind Of Help Contact On Telegram  Username 👉 @zainijutt7😇", threadID);
   };

   if ((event.body.toLowerCase() == "tumhe banaya kon hai") || (event.body.toLowerCase() == "tumko banaya kisne")) {
     return api.sendMessage("Zaini jutt  ❤️ My Creator. He loves me & Edit Me Daily. Ye Bot Sirf Owner k Liye h. Mujhe Aap logo ko Hasane k liye banya gya h Toh Muh Ladkaye Mat Rakkh
