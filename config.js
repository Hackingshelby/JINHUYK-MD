//#ENJOY BRO😍
// Credit: JINHUYK|KangJinhuyk 
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kangjinhuyk@yahoo.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URL || "mongodb+srv://Rayan:<Emmanuel237>@cluster0.8twd0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/KangJinhuyk/JINHUYK-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vajrhmz96H4IsEjh4a41";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vajrhmz96H4IsEjh4a41";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/TAGPcMC.jpeg,https://files.catbox.moe/59iafh.jpg,https://files.catbox.moe/jynitk.jpg,https://files.catbox.moe/dohubs.jpg,https://files.catbox.moe/nm85c3.jpg";
global.devs = "https://wa.me/242067274660 , https://wa.me/243849962848";
global.sudo = process.env.SUDO || "243904468847";
global.owner = process.env.OWNER_NUMBER || "+221766034198";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/ta5OjtX.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://unknown-md-sessions-generator-1.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME1YTjhnOUhFQ3dnVHhjR3Y4MURMN2NnZWQ5eW9kQ1FzL1NqZ2ZZZEZtYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZTZ0S1h6Tm5uTHJmQ1dpeDJKTDdIZDIyeDV6QVhyTjlOdzNhemtPWjJXbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2RXVyNG5lQUtvMHV2dml6aWFrQUxQcFRBRjJ2alJQbzg3WVh1VXpSVDNRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUR25GRlZaNW00NUlMOFlzMXppZmI2NEIzNWl0MXhlTkRJQmpTS0NXSUIwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IklEUzlnTEdWcEJydnpuMUZvUUcxMVV4aEdMM3JDOTk2ZzQ0aU1HTHdlWEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFiSEppellva1R3L1paQnAxWFFTdGNVOFpKcllEYklRNmk2elljeWttaFk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWU1tUXZwMVE3THRjUC9uNFpROU5FK2xVeE5kZU5uaEFoTXp4MnlsbExsaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkJzWDVyNUN3a0dDVkRkeTJ3TURsNGI2MDg0TU04WlZrSStBeVBCQktVMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFjckxreUZyT0xDMEJuZ0plWkVPSmNMWDJGRlhRSWd1Yk9GQXhuU3pBeC9pVThpN21zakZlL3ptdnBCZkhOUCs5YjVFNHlTeUh4Uno1UDFMY0JQREJRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQxLCJhZHZTZWNyZXRLZXkiOiI0RS96SGkvOENtQkZZTy9oVDdackt6dGRrcmRiZ3d2dkg4dFFib1RranhzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI0bUJCNzVNYlN3R2VxcXFBcW9VN3NBIiwicGhvbmVJZCI6IjYyYTQyYTQyLTNlODEtNDFhMS05NzkxLTc2MzYwOTczYjNhYyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJbEp4Z2w0TFlDWk1yTGJqRVQ3Y010Y1dHY3M9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib2NKcmxhQ0g1NU53eEZYU1FrRjlzejVKd0J3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkNDSDU5VlRHIiwibWUiOnsiaWQiOiIyMjE3NjYwMzQxOTg6MkBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLgvLzwnZCD8J2QgPCdkIzwnZCE4oCh4LyU8J2QiPCdkJHwnZCM8J2QgOC8lOKAoeC8vSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTU9oaXRJQ0VQeWJrN3NHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidWMxQnVOTmkrc2thcXFmYjFjK2Ewd1AvMVVVcnFINnUySjk1NFJnZENUQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiL2QvcTRzTEdFWDAzaVRtOWhzUzV1VFFyaVpWYkNMVU9jeURXVTdmSG94dE4xc1BUMmFTSFl2bHIxVGtHYzZzQ294SUhkMW9IVGUyejBlQ1FnVVJzalE9PSIsImRldmljZVNpZ25hdHVyZSI6ImJyemV6dFgzMFQvaTNudis1YnNNVUFUZlZLeXJUQVp4Q0UvSW9MVlV4cWU1TktyQWtBLzBZMURrZjlzL2txdHFka2NTOUpFdGY2WVZadnNvZnoxQUJRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjIxNzY2MDM0MTk4OjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYm5OUWJqVFl2ckpHcXFuMjlYUG10TUQvOVZGSzZoK3J0aWZlZUVZSFFrdyJ9fV0sInBsYXRmb3JtIjoic21iaSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNDY1OTU5MiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFGcHIifQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF 𝐉𝚰𝚴𝚮𝐘𝐔𝐊`",
  author: process.env.PACK_AUTHER || "🌹𝐊𝐈𝐌𝐁𝚵𝐥ꝛ፝֟𝐥𝐘❀✿🌹",
  packname: process.env.PACK_NAME || "🌹𝐊𝐈𝐌𝐁𝚵𝐥ꝛ፝֟𝐥𝐘❀✿🌹",
  botname: process.env.BOT_NAME || "𝐉𝚰𝚴𝚮𝐘𝐔𝐊-𝚳𝐃",
  ownername: process.env.OWNER_NAME || "🌹𝐊𝐈𝐌𝐁𝚵𝐥ꝛ፝֟𝐥𝐘❀✿🌹",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "tCxobE1FqJgfbDZgsYQNHBFB",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "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",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "...d336",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "JINHUYK").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
