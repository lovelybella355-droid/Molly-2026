module.exports.config = {
	name: "info",
	version: "1.0.1", 
	hasPermssion: 0,
	credits: "Joshua Sy", //don't change the credits please
	description: "Admin and Bot info.",
	commandCategory: "...",
	cooldowns: 1,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
var link =["https://i.postimg.cc/h46Rhp7M/20230701-000534.jpg", 
            
            "https://i.postimg.cc/h46Rhp7M/20230701-000534.jpg", 
            
            "https://i.postimg.cc/h46Rhp7M/20230701-000534.jpg",

            "https://i.postimg.cc/h46Rhp7M/20230701-000534.jpg",
       
              "https://i.postimg.cc/h46Rhp7M/20230701-000534.jpg",

                    "https://i.postimg.cc/h46Rhp7M/20230701-000534.jpg"];
  
var callback = () => api.sendMessage({body:`❖⃝𝐀𝐃𝐌𝐈𝐍 𝐀𝐍𝐃 𝐁𝐎𝐓 𝐈𝐍𝐅𝐎𝐑𝐌𝐀𝐓𝐈𝐎𝐍⃝❖

➢🅑𝐎𝐓 𝐍𝐀𝐌𝐄: ${global.config.BOTNAME}

➢🅑𝐎𝐓 𝐀𝐃𝐌𝐈𝐍 : ≛༄𒁍≛⃝𝝛𝐔𝐄𝐒 𝝠𝐉𝐈𝐓𝐇≛
➢🅕𝐀𝐂𝐄𝐁𝐎𝐎𝐊 : https://www.facebook.com/profile.php?id=61579613137832
➢🅦𝐇𝐀𝐓𝐒𝐀𝐏𝐏 :
+923103225182

➢🅑𝐎𝐓 𝐏𝐑𝐄𝐅𝐈𝐗 : ${global.config.PREFIX}

➢🅑𝐎𝐓 𝐎𝐖𝐍𝐄𝐑 :  ≛༄𒁍≛⃝𝝛𝐔𝐄𝐒 𝝠𝐉𝐈𝐓𝐇≛

➟ UPTIME

➢TODAY IS TIME : ${juswa} 

➢BOT IS RUNNING ${hours}:${minutes}:${seconds}.

➢𝐓𝐇𝐀𝐍𝐊𝐒 𝐅𝐎𝐑 𝐔𝐒𝐈𝐍𝐆${global.config.BOTNAME}𝐁𝐎𝐓\n\n➢🙅🖤𝐈𝐌 𝐙𝐔𝐄𝐒 𝐋𝐎𝐕𝐄𝐑 𝐎𝐅 𝐌𝐎𝐋𝐋𝐘 𝐎𝐍𝐋𝐘×͜×`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };
