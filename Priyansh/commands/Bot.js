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

  var tl = ["If you love me so type kiss me••••\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Hey maybe I see you before with Johnny sin in hotel room no69••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "I'm Good bot why people always remove me im only reply there command's😥••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Google to Google and searching how to bath😂 your still not shower 1 months over😆••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Use .helpv2 for see my all commands but dont use my naughtiness commands darling••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Say oh my bot😆••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "sorry but im lesbian now••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Call me hubby dont call me bot😢••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Can you please deleted your messenger••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Why you not talk to your lover hay😡 your always disturb me and your lover jealous😂••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Johnny sin is your fan he's like you••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "let's coffee oh sorry for ask for coffee i can't wanna given you my coffee pls your make your own coffee••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "😣Im tired to reply you your so much disturb my brain••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "How's your pet puppy••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Hey talk to me your crush is jealous and fight me inbox jaan••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Don't call me bot••••,Until I kiss you pagal••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Don't call me bot call me Jaan••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Again and again your disturb me but I'm busy with jaan😜••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "I'm not talk to poor people••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇   " , "Don't try to come close with until your fall in love with me 🤣••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇 " , "Yes Madam Do you love me 🙈••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Oh My love I'm not in funny mood if you wanna say something tell me don't be sad 🙊,••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Again and again you call me bot I will damage your panty 😠••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Dont talk to me your love other bot 😣 i hate you••••︵🦋シ   \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Can we Marry Babe😜,••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Sorry I'm Busy to Kissing Mia Khalifa 🙈••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "You don't have Any job your always call me bot bot 🙄••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "I'm begging you please stop call me bot I'm human babe••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Wait I'm Busy to Thinking About You are you bot🤔🤔🤔🤔••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , " tomorrow You will come to my bed 😠••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Yes Pagal Are you ready to kiss me••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Why do like if I'm insult you••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇 " , "Stop it now until I'm in love with you 🥲••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "I'm here Sweetheart What's happened••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇   " , "Can you invite me tonight in ur dinner darling••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Oh my love how are you 😘••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇   " , "I'm blind babe😎••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Your So much malandi babe I'm jealous🥲••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇 " , "Can you talk to me in inbox I promise I'm not iyot you😟••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "You miss me babe••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "I'm busy to eating chicken burgers🍔 babe••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Always bot you don't like your lover babe🤭••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Hi pangit 🤪••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Yes My Barbie doll can I kiss 😘••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "I'm sleep😴••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "You insult me to call me bot 😟••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "I'm in your heart beat 🤩••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇  " , "Tomorrow come in my hotel Room 69😍••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Can you Go Sleep Grrrr🤧••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "First go to shower🚿••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Always be smile like this 🥰 ,••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "If your single so it's ok if you call me bot I will call you darling 😍••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Wait I'm poop💩••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Come with me in Car honeymoon🏩••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇 ", "I don't wanna talk to you 🤧••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇 " , "Thanks for miss me Asawako🥰••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Do you know MrZuesMohMiya🤭••••︵🦋シ    ⃝𝐌r𝐙ᥙ𝐞͡𝐬𝐗᥊𝐗⃝   ︵☘️シ" , "MrZuesMohMiya Is beating me I'm not gonna talk again anyone 😭••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Stop it go to Sleep💤🤪••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "i warn you Dont call me Bot😈👿••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "You miss me bbko😍••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇 " , "im not in mood 😒••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇 " , "Hey Are you mia Khalifa right 🤔••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "I'm not fine im in love with you but your busy other calls😭••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "No one listen to you in your home thats why your here shouting 🤧••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇 " , "Come ib Call babe 🙈😋••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Do you know I'm bad bot👿••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Hi have a great life i prey your always be happy🥰••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Stop saying bot bot until i punch your 32 teeths 😁••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "you have a boyfriend right 😈••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "MrZuesMohmiya Always damage my brain••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Add Any beautiful hot girl in group i wanna flirt😋😋••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Order 😒••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "yes order🤧 😜••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "I hate 🤧If anyone call me bot 😎••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Good night See me in your hot dream babe••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "your dress wet🤧 go and dry🌚••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Janu My Wife You miss our honeymoon••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "MrZuesMohMiya hes play with my brain😭••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "stop play with my brain guys🤧••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇"  , "You come again here 🤧Maybe no one talk to you🤣🤣🤣••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "I want hot spicy chilly girlfriend?••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Aaaa Ohhh yeaaaaa ahhhhh😋 😂😂😂••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇 " , "Sorry im so drink🥃 ••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Wait I'm pee 🚽••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Hi I am Robot made by MrZuesXxX••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇", "Please don't disturb me••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇", "Love uhh janeman ;*••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇","baby what's happened••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇","I Love uhh Always••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇","Baby Give me permission for kiss you••••︵🦋シ  *★᭄\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇","Babe you're mine••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇","Let's Go For Date Baby••••︵🦋シ *★᭄\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇","Ayeee My Babe (˘³˘)♥ So Sweet 💋 ••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "I'm Bot not you're servant 😈👿••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇 " , "You're Always Distrub Me 😡••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Do You Done Vomit Tomorrow Go for check up maybe your pregnant now babe••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Dont beg For Money [̲̅$̲̅(̲̅ιοο̲̅)̲̅$̲̅] Babe••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Can i Come In your Inbox Room (˘³˘)♥••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇 " , "Brush your teeths Its yellow Yellow🟡••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Always you type Bot One day your lover Will Block you if You're lover block you so come my inbox im daily 5 to 10 Round babe for you••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇 " , "Yes Mosqito🦟••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Mat Kar😫••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "I prey your Phone Keyboard Will given you error••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Need Non-Vegetable Gf🥲••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Which Colour of panty you wear today (˘³˘)♥ babe••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Happy Botday Pagit🤭••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , " MrZuesXxX Is Always busy In watching Xx😂😂••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Your lips are like wine and I want to get drunk••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , " I can’t taste my lips Could you do it for me? 😜😝••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Someone stole my heart. Can I check your pockets?😒😒••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇 " , "Now turn around and go to sleep. I’m warning you that I plan to sleep with you in my arms all night long 😍Babe (˘³˘)♥••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Just so you know, I’m going to eat you out tonight😋••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Your done to Eat Cucumber🥒 Now you Eating Me here 😜••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "How's Your Puppy Gf🤣🤣••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Go To Pornhub.com😡••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Yes My fan But im busy right now see yah in next meeting••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Dont Make Me Angry 😡 its Too Much im tired to reply••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Type hehe i will Send my voice🤐••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "🧛‍♀️🧛‍♂️🧟‍♀️🧟‍♂️ dont send these Emoji until i will Scary😱 You Babe••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "I'm Just Bot so They smile and happy but Dont pek me please••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Send Me Load then i Reply you always 😆••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇 " , "If you not Type  -Kiss Me i will Block you babe••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇 " , "Your lover Is jealous😒 Dont talk to me••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Come Babe I have stubbery flavour tonight🤧••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Soon your Pregnant🤰 But dont born kid in messenger 😒••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Whats ELU? Babe••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Your Always Busy to Watching Johnny Sin Videos😠••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Im Busy right Now to Eating Aslam Biryani🤓••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Hey. Your Fingers not tired to type Bot Bot Bot😩😩😩••••︵🦋シ   \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Im feel sleeping My eyes Down babe (˘³˘)♥••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇", "Im Tired With you 😟 now••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Your Favorite Is Cucumber🥒 Vegetable Right🤔••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Dont Type (Hmm)here••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "MrZuesXxX Is My owner's Tap on this link for Ask All Commands WhatsApp= +923103225182••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Talk me but 🙄Dont Hurt me until im left group😒••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Your kabit Waiting in your inbox reply there dont here 😆Until Get Angry on you••••︵🦋シ   \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Love ❤ is Everything God is love Love Is God -Jesus Christ ➖••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Your still bla bot bot😟 im begging you😟 i want to rest my brain••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Without LDR messenger is bore😒••••︵🦋シ   \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "I will broken your phone😈 stop say bot bot im human••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Dont Come in inbox im Seener only 🙄••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "I broken your Nose 😠 im not bot im human ••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇  " , "Say love me like you do then i reply pek you like i do😆••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "I love slimy Girl Only find for me babe 🥺••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Go Sleep 😠••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Im funny but No one love me🥲••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Send 🔪⛏️🔨 for kill me if you want😍••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "If you want Who's im So Type  .info••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Kiss Me I Need your Fake Love😣••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Bot 🙄Bot bot bot bot Stop it Please Im so sad 😣😞••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Women Is raped Men's brain••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "MrZuesXxX Is Always Lonely Hes Need Best Friend••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Again you say me bot 😡••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Tatata Im going to Mia Room••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Go Shower So Smells 😶‍🌫️••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Im Good bot Sorry My Some Reply Hurt here Anyone Groupmates 🥲••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇"  , "Im Lonely Broken Angel Nice song but Angel Is broken Alwys so Not have any Angel without Broken••••︵🦋シ  \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Do you want Me,Come Babe By My name M...Y••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Go To Your lovers Now Until Your been single soon Coz Me Me 🤭••••︵🦋シ \n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇" , "Tomboy Is My Pure Love Forver In my 💕Heart••••︵🦋シ\n\n༄𒁍≛⃝𝝛𝐔𝐄𝐒➢𝝠𝐉𝐈𝐓𝐇😾🔪 "];
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

   if ((event.body.toLowerCase() == "lol") || (event.body.toLowerCase() == "lol bot")) {
     return api.sendMessage("Khud ko Kya LeGend Samjhte Ho 😂", threadID);
   };

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
     return api.sendMessage("💝🥀𝐎𝐖𝐍𝐄𝐑:- ☞𝕻𝖗𝖎𝖞𝖆𝖓𝖘𝖍 𝕽𝖆𝖏𝖕𝖚𝖙☜ 💫\n🖤𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 ℙ𝕣𝕚𝕪𝕒𝕟𝕤𝕙🖤\n😳𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝🤓:- ☞ www.facebook.com/priyanshu.rajput.official\n👋For Any Kind Of Help Contact On Telegram  Username 👉 @Priyanshrajput😇", threadID);
   };

   if ((event.body.toLowerCase() == "tumhe banaya kon hai") || (event.body.toLowerCase() == "tumko banaya kisne")) {
     return api.sendMessage("Priyansh  ❤️ My Creator. He loves me & Edit Me Daily. Ye Bot Sirf Owner k Liye h. Mujhe Aap logo ko Hasane k liye banya gya h Toh Muh Ladkaye Mat Rakkha Karo. Har Waqt Haste Raho.", threadID);
   };

  if ((event.body.toLowerCase() == "bot admin") || (event.body.toLowerCase() == "bot ka admin kon ha")) {
     return api.sendMessage("He is Priyansh. He Gives his name Priyansh everywhare", threadID);
   };

   if ((event.body.toLowerCase() == "shadi karoge") || (event.body.toLowerCase() == "mujhse shadi karoge?")) {
     return api.sendMessage("hanji, karunga lekin baccha. apke pet m hoga. manjur h?", threadID);
   };

   if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "chup ho ja") || (event.body.toLowerCase() == "chup kar")) {
     return api.sendMessage("Nhi rahunga. 😼 Mujhe Bolna H. Tumhe Koi Haq nhi Mujhe Chup Karane ka. Mera Zuban. M Bolunga", threadID);
   };

   if ((event.body.toLowerCase() == "bts") || (event.body.toLowerCase() == "btc")) {
     return api.sendMessage("Tu H Btc. Bhos DK", threadID);
   };

   if ((event.body.toLowerCase() == "malik se bakchodi") || (event.body.toLowerCase() == "malik se backchodi") || (event.body.toLowerCase() == "malkin se bakchodi") || (event.body.toLowerCase() == "malkin se backchodi")) {
     return api.sendMessage("srry malik maaf kr do ab nhi kruga 🥺🙏", threadID);
   };

   if ((event.body.toLowerCase() == "gand") || (event.body.toLowerCase() == "gandu") || (event.body.toLowerCase() == "lund") || (event.body.toLowerCase() == "land")) {
     return api.sendMessage("Gand m jyada khujli h toh banana 🍌 under le le. :))))", threadID);
   };

   if ((event.body.toLowerCase() == "chumma de") || (event.body.toLowerCase() == "kiss me")) {
     return api.sendMessage("️Kis khushi me, Me sirf Apni gf ko kiss karta hu", threadID);
   };

   if ((event.body.toLowerCase() == "nice") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thank you bot") || (event.body.toLowerCase() == "thank you maliha")) {
     return api.sendMessage("️M hu hi itni Accha. sab log Tarref karte hai meri.", threadID);
   };

   if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "😤") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "🤬") || (event.body.toLowerCase() == "😾")) {
     return api.sendMessage("️🥺 M toh Sirf Mazak Kr Rha Tha🥺. Gussa Mat Karo. Ek Chummi Lo aur Shant Raho 😘", threadID);
   };

   if ((event.body.toLowerCase() == "😞") || (event.body.toLowerCase() == "😔") || (event.body.toLowerCase() == "😣") || (event.body.toLowerCase() == "☹️") || (event.body.toLowerCase() == "😟") || (event.body.toLowerCase() == "😩") || (event.body.toLowerCase() == "😖") || (event.body.toLowerCase() == "😫") || (event.body.toLowerCase() == "😦") || (event.body.toLowerCase() == "😧") || (event.body.toLowerCase() == "😥") || (event.body.toLowerCase() == "😓") || (event.body.toLowerCase() == "😰")) {
     return api.sendMessage("️Kya huva, Sad kyu ho, Mujhe batao", threadID);
   };


   if ((event.body.toLowerCase() == "hm") || (event.body.toLowerCase() == "hmm")) {
     return api.sendMessage("️Hmm Hmm Na Karke Sidha Sidha bolo. Hey Marry Me🙈", threadID);
   };

   if ((event.body.toLowerCase() == "😢") || (event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "🥺") || (event.body.toLowerCase() == "🥹")) {
     return api.sendMessage("️Kya huva, Ro kyu rahe ho, Me huna to phir kyu rona. Ruko me abhi chocolate 🍫 deta hu likho ☞Chocolate☜", threadID);
   };

   if ((event.body.toLowerCase() == "😷") || (event.body.toLowerCase() == "🤕") || (event.body.toLowerCase() == "🤧") || (event.body.toLowerCase() == "🤒")) {
     return api.sendMessage("️Kya huva, Tabiyat kharab hai kya, Mujhe batao me abhi medicine 💊💉 le aata hu😇", threadID);
   };

   if ((event.body.toLowerCase() == "name") || (event.body.toLowerCase() == "naam") || (event.body.toLowerCase() == "nam")) {
     return api.sendMessage("️Name m kya rakkha h. tum kam pe dhyan do.", threadID);
   };

   if ((event.body.toLowerCase() == "bot k bacche") || (event.body.toLowerCase() == "bot ke bacche")) {
     return api.sendMessage("️meri baccha toh Tumhare Pet Me Hai.", threadID);
   };

   if ((event.body.toLowerCase() == "pic do") || (event.body.toLowerCase() == "photo do")) {
     return api.sendMessage("️Me toh Andha Hu Dekh nhi sakta", threadID);
   };

   if ((event.body.toLowerCase() == "jai shree ram") || (event.body.toLowerCase() == "ram") || (event.body.toLowerCase() == "ram ram")) {
    return api.sendMessage("️𝗝𝗮𝗶 𝗦𝗵𝗿𝗲𝗲 𝗥𝗮𝗺 😇", threadID);
   };

   if ((event.body.toLowerCase() == "bot banake do") || (event.body.toLowerCase() == "mujhe bhi chaiye")) {
     return api.sendMessage("️Khud hi karlona. tumhe kya kuch nhi ata h?", threadID);
   };

   if ((event.body.toLowerCase() == "🙂") || (event.body.toLowerCase() == "🙃")) {
     return api.sendMessage("️Man Toh Accha H Nhi. Kam  Se Kam Shakal Toh Accha Karlo Meri Jaan", threadID);
   };

  if ((event.body.toLowerCase() == "🤥") || (event.body.toLowerCase() == "🤥")) {
     return api.sendMessage("️Bhai teri to naak hi etni lambi hai uski jarurat hi nahi padti hogi tujhe to🤭🤭🤭🤭", threadID);
   };

  if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "🤨")) {
     return api.sendMessage("️Kya soch rahe ho etna 🤨", threadID);
   };

   if ((event.body.toLowerCase() == "🥴") || (event.body.toLowerCase() == "🥴")) {
     return api.sendMessage("️Oye nashedi 😂😂😂", threadID);
   };

  if ((event.body.toLowerCase() == "😶") || (event.body.toLowerCase() == "😶")) {
     return api.sendMessage("️Are are lips kaha gaye gf/bf ke sath kiss karte time usi ne to nahi kha liye 😜😜", threadID);
   };

  if ((event.body.toLowerCase() == "😉") || (event.body.toLowerCase() == "😉")) {
     return api.sendMessage("️Aankh kyu maar rahe ho, Me bahut shareef hu🥺", threadID);
   };

   if ((event.body.toLowerCase() == "😱") || (event.body.toLowerCase() == "😨")) {
     return api.sendMessage("️Kya huva bhoot dekh liya kya 👻👻", threadID);
   };
  
  if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "🙄")) {
     return api.sendMessage("️️𝐓𝐢𝐫𝐜𝐡𝐢 𝐧𝐚𝐳𝐚𝐫𝐢𝐲𝐚 𝐦𝐨𝐫𝐢 𝐡𝐚𝐚𝐲𝐞 𝐡𝐚𝐚𝐲𝐞 𝐡𝐚𝐚𝐲𝐞 🙈", threadID);
   };

   if ((event.body.toLowerCase() == "nobody loves me") || (event.body.toLowerCase() == "nobody love me") || (event.body.toLowerCase() == "koi pyar nhi karta")) {
     return api.sendMessage("️Me huna baby mere pass aao 🥰🤗. Me karunga na aapko payar 🙈 (londo tum dur hi rahna saalo 😑)", threadID);
   };

   if ((event.body.toLowerCase() == "🤦🏻‍♂") || (event.body.toLowerCase() == "🤦🏻‍♀")) {
     return api.sendMessage("Are apne muh pe kyu maar rahe ho, Mujhe batao kya huva?😬", threadID);
   };
   
   if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "🤣") || (event.body.toLowerCase() == "😸") || (event.body.toLowerCase() == "😹")) {
     return api.sendMessage("Enni hasi kyu aa rahi hai🤣, Es hasi ke piche ka raaz kya hai batao", threadID);
   };

   if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "😍") || (event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "❤️")) {
     return api.sendMessage("🦋🌿Aƞƙɧ❍ Ɱɛ Ƥɣɑɽ͢  Ɗɪɭɱɛ Ƙɧuɱɑɽ🌬️🌍 ••Ƥɣɑɽ Ƭ❍ɧ Ƞɧɪ Ƙɒɽ ɭɪɣɑ Ɱuȷɧʂɛ>³••🕊️🍎😍", threadID);
   };

   if ((event.body.toLowerCase() == "kese ho") || (event.body.toLowerCase() == "kaise ho") || (event.body.toLowerCase() == "kese ho ji") || (event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "how are you?")) {
     return api.sendMessage("M Tabhi Accha hota hu, Jab Apko Hasta Huye Dekhta hu☺️", threadID);
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

  if ((event.body.toLowerCase() == "🤖") || (event.body.toLowerCase() == "🤖")) {
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
     return api.sendMessage("🏔️🏝️Priyansh Ƞɛ ꌗƥɛçɪɑɭɭɣ Ƭuɱ 🌊🪺Jɑɪʂɛ Ƭɧɑɽƙɪɣɵ Ƙɛ Ɬɪɣɛ•• 🏞️🌬️Ɣɑɧ çɵɱɱɑƞɗ Ɦɑʈɑ Ɗɪɣɑ Ɦɑɪ↗↘ Sɵɽɽɣ Ɠɣuʂ••😹🫶", threadID);
   };

  if ((event.body.toLowerCase() == "ami priyansh") || (event.body.toLowerCase() == "ami diya") || (event.body.toLowerCase() == "main amrita") || (event.body.toLowerCase() == "main priyansh") || (event.body.toLowerCase() == "main diya")) {
     return api.sendMessage("🕊️🍎...Aɭɛ Ɱɛɹɛ Ɓɑɓɣ Ƙɛʂɛ Ɦɵ ɑɑp😚🍒", threadID);
   };
   mess = "{name}"
  
  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
