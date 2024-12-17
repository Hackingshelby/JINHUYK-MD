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
global.owner = process.env.OWNER_NUMBER || "243904468847";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/apxck1.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://unknown-md-sessions-generator-1.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0IxR3RBRUtFU0dUSHp0RmYvRUNFZlVVT0pHTHdXTytzdVluUWtmb0ExZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibzVaVG01U1l3T2V5YnJ5L1NPZytiRFNtbzA2cWRkaW5BTFVxdC8xeWFIYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPQ2NRZ3p2dDA0WTdON1pYVGNRd29vSVRBSVJWVFA3S2Z0ZFpUd0hXMlhBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3N1FxUWJyZng4bC9FbjZ2azBWV0ZtcDNLV29zd1NRMWRSRFMvZ2dVUXlRPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitHQm1MeEo3Sm9TQU0rbDlOaE9sUmt1cnc1YVhRZGRRdG1wNWtHUzAyRU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNZaWh5SklLWVllZ1dxb0hKUmRqTEw4cWRHejZUc241WkUwRThwOXo1R0E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUVsNzNDTzNoSjd3ZGpDN2xodlNPVWRJZk9VWENRSG1raTRZdEQ5Q0NrND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicm1YNHhFRExRVlZIN3FiT2UycXIxMkI0Mi9qYVVuRW14Q29EakdQS0ZEZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InZrRHdYcnE2eEJmV3RUOWlNVGQyREExb2VUU3Q0RGxUN3lJZkw3alQrc3pFcGczTzl3SFRxNGtMdjJlUHl0NkxDeEFFUEkwTjhZS01BY1FNcUM1dUJBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTAsImFkdlNlY3JldEtleSI6IjVQWHEvcHdmVWxkVXR3OWlSTmNjNjM2eTBOY2dHTVJMKzZaOGZQbktsK1k9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IktONkFoSkZmUjB5eVBXcDlXVHFWeUEiLCJwaG9uZUlkIjoiMmFjZjFjMWMtMmEzYy00OTM2LTk1YWUtNjc5MmQxYzllNTgwIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Inl0WnFiVVhVM2RFT2dGRVhzZFpyL2xCT3o2UT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYOEJRKzVPZHkyZWJGTzdPMFlsK245SStqb2c9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTjc4MVJBQTEiLCJtZSI6eyJpZCI6IjI0MzkwNDQ2ODg0NzozMUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZG78J2Rr/CdkbbwnZG08J2RqPCdkbogICAg8J2QkvCdkIfwnZCE8J2Qi/CdkIHwnZCYIEdyaW1tICDwnZKX8J2SgvCdko3wnZKG8J2Sj/CdkpXwnZKK8J2Sj/CdkpAifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05PcWk3SUVFTDdxaDdzR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjgxVDU2RHp1bXdvUi9KamNWVnJncDBlZ0lvSzBEVzFZVWpUVnplSGZLSE09IiwiYWNjb3VudFNpZ25hdHVyZSI6Ink5WkZGekZ5L0JhLzhQUU9EOEhGYjlCUG1La0JiN3ZHdGJxZ3BwSWdOeVlRRVBHaDhpNWhVOXFHaGdxOEpXZHlXcU9aTWduR3k1SDdLOXpYWHdhcENRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJZVlNsVFRmTml1dlBOcnFnT0MwYTRCZjJlMTIvalpsTUtXWmxOOEt2LzY1ejNYK0J3dUxXc2gvSkVVV284cDZ0cjdnMUN2Z1lKMlVWcm9VRHgyUTNEdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI0MzkwNDQ2ODg0NzozMUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmTlUrZWc4N3BzS0VmeVkzRlZhNEtkSG9DS0N0QTF0V0ZJMDFjM2gzeWh6In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM0NDczMDM3fQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF 𝐉𝚰𝚴𝚮𝐘𝐔𝐊`",
  author: process.env.PACK_AUTHER || "𝑇𝐻𝑂𝑀𝐴𝑆 𝑆𝐻𝐸𝐿𝐵𝑌 𝐺𝑅𝐼𝑀𝑀",
  packname: process.env.PACK_NAME || "LUNE ❤️‍🩹🌹",
  botname: process.env.BOT_NAME || "𝐉𝚰𝚴𝚮𝐘𝐔𝐊-𝚳𝐃",
  ownername: process.env.OWNER_NAME || "LUNE❤️‍🩹🌹",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
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
