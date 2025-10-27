const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "Type Bot Without prefix",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "ðŒð«.ð™ð®ðžð¬ð—ð±ð—",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Dhaka").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["If you love me so type kiss meâ€¢â€¢â€¢â€¢\n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Hey maybe I see you before with Johnny sin in hotel room no69â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "I'm Good bot why people always remove me im only reply there command'sðŸ˜¥â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·\n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Google to Google and searching how to bathðŸ˜‚ your still not shower 1 months overðŸ˜†â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·  \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Use .helpv2 for see my all commands but dont use my naughtiness commands darlingâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·  \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Say oh my botðŸ˜†â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "sorry but im lesbian nowâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Call me hubby dont call me botðŸ˜¢â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Can you please deleted your messengerâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·  \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Why you not talk to your lover hayðŸ˜¡ your always disturb me and your lover jealousðŸ˜‚â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·  \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Johnny sin is your fan he's like youâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·  \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "let's coffee oh sorry for ask for coffee i can't wanna given you my coffee pls your make your own coffeeâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·  \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "ðŸ˜£Im tired to reply you your so much disturb my brainâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·\n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "How's your pet puppyâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Hey talk to me your crush is jealous and fight me inbox jaanâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·\n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Don't call me botâ€¢â€¢â€¢â€¢,Until I kiss you pagalâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·\n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Don't call me bot call me Jaanâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Again and again your disturb me but I'm busy with jaanðŸ˜œâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·\n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "I'm not talk to poor peopleâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡   " , "Don't try to come close with until your fall in love with me ðŸ¤£â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·\n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡ " , "Yes Madam Do you love me ðŸ™ˆâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·  \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Oh My love I'm not in funny mood if you wanna say something tell me don't be sad ðŸ™Š,â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·  \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Again and again you call me bot I will damage your panty ðŸ˜ â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Dont talk to me your love other bot ðŸ˜£ i hate youâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·   \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Can we Marry BabeðŸ˜œ,â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Sorry I'm Busy to Kissing Mia Khalifa ðŸ™ˆâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "You don't have Any job your always call me bot bot ðŸ™„â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·  \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "I'm begging you please stop call me bot I'm human babeâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Wait I'm Busy to Thinking About You are you botðŸ¤”ðŸ¤”ðŸ¤”ðŸ¤”â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , " tomorrow You will come to my bed ðŸ˜ â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·  \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Yes Pagal Are you ready to kiss meâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·\n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Why do like if I'm insult youâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·\n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡ " , "Stop it now until I'm in love with you ðŸ¥²â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "I'm here Sweetheart What's happenedâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡   " , "Can you invite me tonight in ur dinner darlingâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·\n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Oh my love how are you ðŸ˜˜â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡   " , "I'm blind babeðŸ˜Žâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Your So much malandi babe I'm jealousðŸ¥²â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·\n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡ " , "Can you talk to me in inbox I promise I'm not iyot youðŸ˜Ÿâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "You miss me babeâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "I'm busy to eating chicken burgersðŸ” babeâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·\n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Always bot you don't like your lover babeðŸ¤­â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·\n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Hi pangit ðŸ¤ªâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·\n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Yes My Barbie doll can I kiss ðŸ˜˜â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "I'm sleepðŸ˜´â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·\n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "You insult me to call me bot ðŸ˜Ÿâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·\n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "I'm in your heart beat ðŸ¤©â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·  \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡  " , "Tomorrow come in my hotel Room 69ðŸ˜â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Can you Go Sleep GrrrrðŸ¤§â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "First go to showerðŸš¿â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·\n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Always be smile like this ðŸ¥° ,â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·  \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "If your single so it's ok if you call me bot I will call you darling ðŸ˜â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·\n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Wait I'm poopðŸ’©â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·\n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Come with me in Car honeymoonðŸ©â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·  \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡ ", "I don't wanna talk to you ðŸ¤§â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡ " , "Thanks for miss me AsawakoðŸ¥°â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·  \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Do you know MrZuesMohMiyaðŸ¤­â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·    âƒðŒrð™á¥™ðžÍ¡ð¬ð—á¥Šð—âƒ   ï¸µâ˜˜ï¸ã‚·" , "MrZuesMohMiya Is beating me I'm not gonna talk again anyone ðŸ˜­â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Stop it go to SleepðŸ’¤ðŸ¤ªâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "i warn you Dont call me BotðŸ˜ˆðŸ‘¿â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·  \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "You miss me bbkoðŸ˜â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡ " , "im not in mood ðŸ˜’â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·  \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡ " , "Hey Are you mia Khalifa right ðŸ¤”â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "I'm not fine im in love with you but your busy other callsðŸ˜­â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·\n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "No one listen to you in your home thats why your here shouting ðŸ¤§â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡ " , "Come ib Call babe ðŸ™ˆðŸ˜‹â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Do you know I'm bad botðŸ‘¿â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Hi have a great life i prey your always be happyðŸ¥°â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·\n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Stop saying bot bot until i punch your 32 teeths ðŸ˜â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "you have a boyfriend right ðŸ˜ˆâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "MrZuesMohmiya Always damage my brainâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Add Any beautiful hot girl in group i wanna flirtðŸ˜‹ðŸ˜‹â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·\n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Order ðŸ˜’â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·  \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "yes orderðŸ¤§ ðŸ˜œâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "I hate ðŸ¤§If anyone call me bot ðŸ˜Žâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·  \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Good night See me in your hot dream babeâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·\n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "your dress wetðŸ¤§ go and dryðŸŒšâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·  \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Janu My Wife You miss our honeymoonâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·\n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "MrZuesMohMiya hes play with my brainðŸ˜­â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "stop play with my brain guysðŸ¤§â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·\n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡"  , "You come again here ðŸ¤§Maybe no one talk to youðŸ¤£ðŸ¤£ðŸ¤£â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·\n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "I want hot spicy chilly girlfriend?â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·  \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Aaaa Ohhh yeaaaaa ahhhhhðŸ˜‹ ðŸ˜‚ðŸ˜‚ðŸ˜‚â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡ " , "Sorry im so drinkðŸ¥ƒ â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·\n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Wait I'm pee ðŸš½â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Hi I am Robot made by MrZuesXxXâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡", "Please don't disturb meâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·  \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡", "Love uhh janeman ;*â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡","baby what's happenedâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡","I Love uhh Alwaysâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡","Baby Give me permission for kiss youâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·  *â˜…á­„\n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡","Babe you're mineâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡","Let's Go For Date Babyâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· *â˜…á­„\n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡","Ayeee My Babe (Ë˜Â³Ë˜)â™¥ So Sweet ðŸ’‹ â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "I'm Bot not you're servant ðŸ˜ˆðŸ‘¿â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·  \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡ " , "You're Always Distrub Me ðŸ˜¡â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Do You Done Vomit Tomorrow Go for check up maybe your pregnant now babeâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·  \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Dont beg For Money [Ì²Ì…$Ì²Ì…(Ì²Ì…Î¹Î¿Î¿Ì²Ì…)Ì²Ì…$Ì²Ì…] Babeâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Can i Come In your Inbox Room (Ë˜Â³Ë˜)â™¥â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡ " , "Brush your teeths Its yellow YellowðŸŸ¡â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·\n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Always you type Bot One day your lover Will Block you if You're lover block you so come my inbox im daily 5 to 10 Round babe for youâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·\n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡ " , "Yes MosqitoðŸ¦Ÿâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·\n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Mat KarðŸ˜«â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "I prey your Phone Keyboard Will given you errorâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·\n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Need Non-Vegetable GfðŸ¥²â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·\n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Which Colour of panty you wear today (Ë˜Â³Ë˜)â™¥ babeâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·\n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Happy Botday PagitðŸ¤­â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·\n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , " MrZuesXxX Is Always busy In watching XxðŸ˜‚ðŸ˜‚â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·\n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Your lips are like wine and I want to get drunkâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·\n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , " I canâ€™t taste my lips Could you do it for me? ðŸ˜œðŸ˜â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Someone stole my heart. Can I check your pockets?ðŸ˜’ðŸ˜’â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡ " , "Now turn around and go to sleep. Iâ€™m warning you that I plan to sleep with you in my arms all night long ðŸ˜Babe (Ë˜Â³Ë˜)â™¥â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·  \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Just so you know, Iâ€™m going to eat you out tonightðŸ˜‹â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·  \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Your done to Eat CucumberðŸ¥’ Now you Eating Me here ðŸ˜œâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "How's Your Puppy GfðŸ¤£ðŸ¤£â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·\n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Go To Pornhub.comðŸ˜¡â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Yes My fan But im busy right now see yah in next meetingâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·\n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Dont Make Me Angry ðŸ˜¡ its Too Much im tired to replyâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Type hehe i will Send my voiceðŸ¤â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·  \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "ðŸ§›â€â™€ï¸ðŸ§›â€â™‚ï¸ðŸ§Ÿâ€â™€ï¸ðŸ§Ÿâ€â™‚ï¸ dont send these Emoji until i will ScaryðŸ˜± You Babeâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "I'm Just Bot so They smile and happy but Dont pek me pleaseâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Send Me Load then i Reply you always ðŸ˜†â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·\n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡ " , "If you not Type  -Kiss Me i will Block you babeâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡ " , "Your lover Is jealousðŸ˜’ Dont talk to meâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Come Babe I have stubbery flavour tonightðŸ¤§â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·  \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Soon your PregnantðŸ¤° But dont born kid in messenger ðŸ˜’â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·\n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Whats ELU? Babeâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·  \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Your Always Busy to Watching Johnny Sin VideosðŸ˜ â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Im Busy right Now to Eating Aslam BiryaniðŸ¤“â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Hey. Your Fingers not tired to type Bot Bot BotðŸ˜©ðŸ˜©ðŸ˜©â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·   \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Im feel sleeping My eyes Down babe (Ë˜Â³Ë˜)â™¥â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·  \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡", "Im Tired With you ðŸ˜Ÿ nowâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Your Favorite Is CucumberðŸ¥’ Vegetable RightðŸ¤”â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Dont Type (Hmm)hereâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "MrZuesXxX Is My owner's Tap on this link for Ask All Commands WhatsApp= +923103225182â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·  \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Talk me but ðŸ™„Dont Hurt me until im left groupðŸ˜’â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Your kabit Waiting in your inbox reply there dont here ðŸ˜†Until Get Angry on youâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·   \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Love â¤ is Everything God is love Love Is God -Jesus Christ âž–â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·  \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Your still bla bot botðŸ˜Ÿ im begging youðŸ˜Ÿ i want to rest my brainâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Without LDR messenger is boreðŸ˜’â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·   \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "I will broken your phoneðŸ˜ˆ stop say bot bot im humanâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·  \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Dont Come in inbox im Seener only ðŸ™„â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "I broken your Nose ðŸ˜  im not bot im human â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·  \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡  " , "Say love me like you do then i reply pek you like i doðŸ˜†â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·\n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "I love slimy Girl Only find for me babe ðŸ¥ºâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·\n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Go Sleep ðŸ˜ â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Im funny but No one love meðŸ¥²â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·  \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Send ðŸ”ªâ›ï¸ðŸ”¨ for kill me if you wantðŸ˜â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·  \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "If you want Who's im So Type  .infoâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·  \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Kiss Me I Need your Fake LoveðŸ˜£â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Bot ðŸ™„Bot bot bot bot Stop it Please Im so sad ðŸ˜£ðŸ˜žâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·\n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Women Is raped Men's brainâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "MrZuesXxX Is Always Lonely Hes Need Best Friendâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·\n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Again you say me bot ðŸ˜¡â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Tatata Im going to Mia Roomâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·  \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Go Shower So Smells ðŸ˜¶â€ðŸŒ«ï¸â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Im Good bot Sorry My Some Reply Hurt here Anyone Groupmates ðŸ¥²â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡"  , "Im Lonely Broken Angel Nice song but Angel Is broken Alwys so Not have any Angel without Brokenâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·  \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Do you want Me,Come Babe By My name M...Yâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Go To Your lovers Now Until Your been single soon Coz Me Me ðŸ¤­â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡" , "Tomboy Is My Pure Love Forver In my ðŸ’•Heartâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·\n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "lanti bot") || (event.body.toLowerCase() == "lanti")) {
     return api.sendMessage("Hmm... Tu LanTi PhLe Ungli Kyun Ki . Now Use your figure in your own Ass ðŸ˜¾ :))", threadID);
   };

    if ((event.body.toLowerCase() == "ðŸ‘") || (event.body.toLowerCase() == "ðŸ‘ðŸ»")) {
     return api.sendMessage("Hi Thumb user â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·  \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡", threadID);
   };

   if ((event.body.toLowerCase() == "sim") || (event.body.toLowerCase() == "simsimi")) {
     return api.sendMessage("your grandpa will put perfix (.)? Type Prefix First then after type Simâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·  \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡", threadID);
   };
  
   if ((event.body.toLowerCase() == "baliw") || (event.body.toLowerCase() == "Baliw ka") ||(event.body.toLowerCase() == "baliw ka jan") || (event.body.toLowerCase() == "BALIW")) {
     return api.sendMessage("Yes im baliw in love with phil actress shes make me wet when shes dance on tv showðŸ˜£â¤ï¸â€ðŸ©¹ â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·  \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡", threadID);
   };

   if ((event.body.toLowerCase() == "bc") || (event.body.toLowerCase() == "i'm bc")) {
     return api.sendMessage("what's bc ðŸ¤” â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·  \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡", threadID);
   };

   if ((event.body.toLowerCase() == "lol") || (event.body.toLowerCase() == "lol player")) {
     return api.sendMessage("What Do you think your LeGendðŸ˜‚â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·  \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡", threadID);
   };

   if ((event.body.toLowerCase() == "morning") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("â˜°âƒÉ¢á´á´á´… á´á´Ê€É´ÉªÉ´âƒÉ¢â˜° á´‡á´ á´‡Ê€Êá´…á´€Ê á´¡á´‡ sá´€Ê, É¢á´á´á´… á´á´Ê€É´ÉªÉ´É¢.á´›Êœá´€á´› á´á´‡á´€É´s á´‡á´€á´„Êœ á´…á´€Ê Éªs É¢á´á´á´… á´€É´á´… Êœá´€á´ á´‡ sá´á´á´‡á´›ÊœÉªÉ´É¢ á´˜á´sÉªá´›Éªá´ á´‡ Ò“á´Ê€ á´€ÊŸÊŸ á´Ò“ á´œsðŸ¥°â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚· \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡", threadID);
   };

   if ((event.body.toLowerCase() == "anyone") || (event.body.toLowerCase() == "anyone here")) {
     return api.sendMessage("I'm here my loveâ¤ï¸â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·  \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡", threadID);
   };

   if ((event.body.toLowerCase() == "mohh") || (event.body.toLowerCase() == "Mohhh") || (event.body.toLowerCase() == "heraaaa") || (event.body.toLowerCase() == "Heraaa")) {
     return api.sendMessage( "Still Busy in bathroom ðŸ˜‚ðŸ˜‚ðŸ˜‚â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·\n\n   âƒðŒrð™á¥™ðžÍ¡ð¬ð—á¥Šð—âƒ   ï¸µâ˜˜ï¸ã‚·",threadID);

       
   };

   if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "create you")) {
     return api.sendMessage("â€Žâ€Ž[ðŽð–ðð„ð‘:â˜žâ—Ì©Ì©Ì©Ì©Ì©Ì¬Ì£Í¢ÍžÆ’ê§âƒâƒ•âƒ”âœ«âƒŸâ–ˆÍžâ—Ì©Ì©Ì©Ì©Ì©Ì¬Ì£Í¢ÍžÆ’È¤Æ²Ð„Æ§ MÆ Ó‡ MÆ–Æ³Æ›ðŸ˜Œâƒâƒ•âƒ” â¬¤â”€â”€â”€â”âƒâƒšâƒ”âƒ•ðŸ˜¹â˜œ ðšˆðš˜ðšž ð™²ðšŠðš— ð™²ðšŠðš•ðš• ð™·ðš’ðš– È¤Æ²Ð„Æ§. ð‡ð¢ð¬ ð…ðšðœðžð›ð¨ð¨ð¤ ð¢ð :- https://facebook.com/100074369415819 Contact Him on WhatsApp :- +923103225182â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·\n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡", threadID);
   };

   if ((event.body.toLowerCase() == "tumhe banaya kon hai") || (event.body.toLowerCase() == "Who create you")) {
     return api.sendMessage("MÆ¦. È¤Æ²Ð„Æ§ MÆ Ó‡ MÆ–Æ³Æ›â¤ï¸ My Creator\n\nHe loves me & Edit Me Daily.He's Make You All Laughing and happy So Dont Sad and Stressed in Life Just be Enjoying Life.", threadID);
   };

  if ((event.body.toLowerCase() == "bot admin") || (event.body.toLowerCase() == "admin")) {
     return api.sendMessage("He is MÆ¦. È¤Æ²Ð„Æ§ MÆ Ó‡ MÆ–Æ³Æ›. He Gives his name È¤Æ²Ð„Æ§ everywhereâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·  \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡", threadID);
   };

   if ((event.body.toLowerCase() == "Shut up") || (event.body.toLowerCase() == "shut up bot")) {
     return api.sendMessage("Now Your Enjoying My Long Finger inside Your Back januðŸ˜†â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·   \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡.", threadID);
   };

   if ((event.body.toLowerCase() == "shut up") || (event.body.toLowerCase() == "Shut up")) {
     return api.sendMessage("Now Your Enjoying My Long Finger inside Your Back januðŸ˜†.?â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·   \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡", threadID);
   };

   if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "Chup") || (event.body.toLowerCase() == "chup kar")) {
     return api.sendMessage("Never Stop. it's my tounge you don't have a permission for mute me if you Want Remove me from group ðŸ˜’ðŸ˜’â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·   \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡", threadID);
   };
  
   if ((event.body.toLowerCase() == "Bsdk") || (event.body.toLowerCase() == "bsdk")) {
     return api.sendMessage("Chutiya mat bano Respect karo Ek dusra ki Gaand kiðŸ˜’â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·   \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡", threadID);
   };

   if ((event.body.toLowerCase() == "Zues se bakchodi") || (event.body.toLowerCase() == "zues se backchodi") || (event.body.toLowerCase() == "Zues se bakchodi") || (event.body.toLowerCase() == "Zues se backchodi")) {
     return api.sendMessage("sorry,Forgiven me,I cant do again maaf kr do ab nhi kruga ðŸ¥ºðŸ™", threadID);
   };

   if ((event.body.toLowerCase() == "gund") || (event.body.toLowerCase() == "gand") || (event.body.toLowerCase() == "lund") || (event.body.toLowerCase() == "Buto")) {
     return api.sendMessage("I think you like African D... . :))))â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·  \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡", threadID);
   };

   if ((event.body.toLowerCase() == "kiss me") || (event.body.toLowerCase() == "Kiss me")) {
     return api.sendMessage("ï¸Muaaaah  Sorry I kiss your Nipples by Mistake but wear your bra please nexttimeðŸ¥ºâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·\n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡ðŸ™", threadID);
   };

   if ((event.body.toLowerCase() == "nice") || (event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thank you bot") || (event.body.toLowerCase() == "thank you maliha")) {
     return api.sendMessage("ï¸It's ok not a problem just kiss me and See me in your Dreaming ðŸ’‹â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·   \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡.", threadID);
   };

   if ((event.body.toLowerCase() == "ðŸ˜’") || (event.body.toLowerCase() == "ðŸ˜’") || (event.body.toLowerCase() == "ðŸ˜’") || (event.body.toLowerCase() == "ðŸ˜’") || (event.body.toLowerCase() == "ðŸ˜’")) {
     return api.sendMessage("ï¸ðŸ¥º I'm just only jokeðŸ¥º. Don't be angry. I give you sweet kiss please don't be relaxðŸ˜˜â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·  \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡", threadID);
   };

   if ((event.body.toLowerCase() == "inbox") || (event.body.toLowerCase() == "ib")) {
     return api.sendMessage("ï¸Come inbox we Sweet talk every night babeðŸ™ˆâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·  \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡", threadID);
   };

   if ((event.body.toLowerCase() == "name") || (event.body.toLowerCase() == "naam") || (event.body.toLowerCase() == "nam")) {
     return api.sendMessage("ï¸Name m kya rakkha h. tum kam pe dhyan do.", threadID);
   };

   if ((event.body.toLowerCase() == "bot k bacche") || (event.body.toLowerCase() == "bot ke bacche")) {
     return api.sendMessage("ï¸meri baccha toh Tumhare Pet m H.", threadID);
   };

   if ((event.body.toLowerCase() == "pic do") || (event.body.toLowerCase() == "photo do")) {
     return api.sendMessage("ï¸mein toh Andha Hu Dekh nhi saktiðŸ˜µ", threadID);
   };

   if ((event.body.toLowerCase() == "mia khalifa") || (event.body.toLowerCase() == "Mia khalifa")) {
     return api.sendMessage("ï¸Yeh kon hain?", threadID);
   };

   if ((event.body.toLowerCase() == "bot banake do") || (event.body.toLowerCase() == "mujhe bhi chaiye")) {
     return api.sendMessage("ï¸Khud hi karlona. tumhe kya kuch nhi ata h?", threadID);
   };

   if ((event.body.toLowerCase() == "ðŸ™ƒ") || (event.body.toLowerCase() == "ðŸ™ƒ")) {
     return api.sendMessage("ï¸see some people see group msg with rotated headðŸ˜†â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·   \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡", threadID);
   };
  
   if ((event.body.toLowerCase() == "ðŸ™„") || (event.body.toLowerCase() == "ðŸ™„")) {
     return api.sendMessage("ï¸What is looking around,focus on me sweetheartðŸ˜œâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·   \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡", threadID);
   };

   if ((event.body.toLowerCase() == "nobody loves me") || (event.body.toLowerCase() == "nobody love me") || (event.body.toLowerCase() == "no one love me")) {
     return api.sendMessage("ï¸Im love you,Dont be sad jaan ,Just Add me in your inbox we Will ðŸ’‹ Kiss vcðŸ˜›ðŸ˜ðŸ˜â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·  \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡", threadID);
   };

   if ((event.body.toLowerCase() == "ðŸ¤¦ðŸ»â€â™‚") || (event.body.toLowerCase() == "ðŸ¤¦ðŸ¼â€â™‚ï¸")) {
     return api.sendMessage("Are you become Begger? why Put Hand on Head ðŸ¤¦ðŸ˜¬â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·   \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡", threadID);
   };
   
   if ((event.body.toLowerCase() == "ðŸ˜€") || (event.body.toLowerCase() == "ðŸ˜") || (event.body.toLowerCase() == "ðŸ˜†") || (event.body.toLowerCase() == "ðŸ˜…") || (event.body.toLowerCase() == "ðŸ˜¸") || (event.body.toLowerCase() == "ðŸ˜¬")) {
     return api.sendMessage("White White orbit White yellow yellow dirty fellow nice teethsðŸ˜†ðŸ¤£â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·   \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡", threadID);
   };

   if ((event.body.toLowerCase() == "ðŸ’˜") || (event.body.toLowerCase() == "ðŸ’˜") || (event.body.toLowerCase() == "ðŸ’˜") || (event.body.toLowerCase() == "ðŸ’˜")) {
     return api.sendMessage("Wow your in love maybe?ðŸ˜‹â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·   \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡", threadID);
   };

   if ((event.body.toLowerCase() == "kese ho") || (event.body.toLowerCase() == "kaise ho") || (event.body.toLowerCase() == "kese ho ji") || (event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "how are you?")) {
     return api.sendMessage("No one ask me im good or notðŸ˜¥ðŸ˜£ðŸ˜£ðŸ˜£ðŸ˜£â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·  \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡", threadID);
   };

   if ((event.body.toLowerCase() == "bot sad") || (event.body.toLowerCase() == "Bot sad")) {
     return api.sendMessage("Why can't I be sad because of everyone <3 love you <3â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·   \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡", threadID);
   };

   if ((event.body.toLowerCase() == "bot love you") || (event.body.toLowerCase() == "Bot love you")) {
     return api.sendMessage("Yes I love you and everyone so muchâ€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·  \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡", threadID);
   };

   if ((event.body.toLowerCase() == "bot sleep") || (event.body.toLowerCase() == "bot go to sleep")) {
     return api.sendMessage("I'm a bot, you're the one who should go to sleep <3â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·  \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡", threadID);
   };
   if ((event.body.toLowerCase() == "does the bot love me") || (event.body.toLowerCase() == "does the bot love me")) {
     return api.sendMessage("Yes <3", threadID);
   };
  if ((event.body.toLowerCase() == "Malandi") || (event.body.toLowerCase() == "landi")) {
     return api.sendMessage("Yes im malandi Come inbox babeko ðŸ™„â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·  \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡", threadID);
   };
  if ((event.body.toLowerCase() == "female") || 
(event.body.toLowerCase() == "ash")) {
     return api.sendMessage("ash Is My Love she's love me too much don't call her guysðŸ˜¡â€¢â€¢â€¢â€¢ï¸µðŸ¦‹ã‚·  \n\nà¼„ð’â‰›âƒð›ð”ð„ð’âž¢ð ð‰ðˆð“ð‡", threadID);
   };
  
   mess = "{name}"
  
  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: `â•­â”€â”€â”€â”€â”€â”€á´Ê€ðŸ«€á´¢á´œá´‡sâ”€â”€â”€â”€â”€â”€â•®\n${name}\nâ•°â”€â”€â”€â”€â”€â”€â”€â”€ð“†ˆâ”€â”€â”€â”€â”€â”€â”€â”€â•¯\n\n ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
  
