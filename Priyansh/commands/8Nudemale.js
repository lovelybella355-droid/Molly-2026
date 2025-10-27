module.exports.config = {
  name: "Nudemale",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "MrZuesXxX",
  description: "Random Hot boys photos",
  commandCategory: "Random-IMG",
  usages: "Zues",
  cooldowns: 2,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.postimg.cc/Yq8zT9P3/images-20.jpg",
"https://i.postimg.cc/t4Q9QqVs/images-18.jpg",
"https://i.postimg.cc/g0MJW9W1/images-17.jpg",
"https://i.postimg.cc/63kBWt1b/images-16.jpg",
"https://i.postimg.cc/3JbndNZw/images-15.jpg",
"https://i.postimg.cc/Hnr8KY8S/images-14.jpg",
"https://i.postimg.cc/9f14QRG8/images-13.jpg",
"https://i.postimg.cc/76WfSFtS/images-12.jpg",
"https://i.postimg.cc/Cdy5Qjg1/images-11.jpg",
"https://i.postimg.cc/DwTdWGXn/images-10.jpg",
"https://i.postimg.cc/9MrG3tvt/images-9.jpg",
"https://i.postimg.cc/wThDdBbP/images-8.jpg",
"https://i.postimg.cc/7hrbB3DL/images-7.jpg",
"https://i.postimg.cc/65SgFYgz/images-6.jpg",
"https://i.postimg.cc/xdPsjRxw/images-5.jpg",
"https://i.postimg.cc/VkQ4jT3y/images-4.jpg",
"https://i.postimg.cc/pT6Jy1D6/images-3.jpg",
"https://i.postimg.cc/qvxYg4gD/images-2.jpg",
"https://i.postimg.cc/9fxntbdG/images-1.jpg",
"https://i.postimg.cc/05KBDpbw/images.jpg",
"https://i.postimg.cc/rsZzCvhS/images-19.jpg"
     ];
     var callback = () => api.sendMessage({body:`➢𝐇𝐎𝐓 𝐁𝐎𝐘 𝐅𝐎𝐑 𝐇𝐎𝐓 🥵 𝐆𝐈𝐑𝐋☚`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };