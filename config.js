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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUlxOHRVd29OQ3JzK05mdmZyVnZXN0RvL3BDejEwWWd4Znp3anhIa3BYWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUktHS0ZscmZVMjA3ZTdFVlIzOW8rdkhYbzNXT0dCR3piRDJzcjRlbXR5TT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXSGdYdGNIMGhsS3BpN1dhRDFzTUFjUzZHeExLZThOTFdmOGtlSitIaUVRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDTXJYTk1EcWg5eXN6YUxIOFRxTDhIUGlrK1haYlNweU9wYXZZR1lvdWhFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVQN3B5Mm1kU3dndmg4QjhmN1AvYkk0M1ptODJDVUhVTGNOcWZxemdtVmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBkOGt0eW11ZGczcUxKOWFHUDFoQlo5Sm9sdnNnblpOWG9Sc1BmQ1I3M289In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY09hSXczc1oxck51Yjg5ZWw2K3l1ZDhtL1RqYWRFcW0vZjFQaVJ4TStVbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNTQ2ZFA4ckIzQ25yanhyZ0JOL0xiRWJkd3VLYVdtRHNVUDdvMkRuUlpqbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iit4SlNsamdJK3V3REdEYmY5dkU2RXlNL1lKUVZmVkgwbWlRQW5nUDVsRzJWT2hUOHZPUVVkS2tIejBXNE8xN3piZnNaYk9XOTh5dEVXc2c0b0Q1U0J3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA4LCJhZHZTZWNyZXRLZXkiOiJ0R0NkQ0FkYTZ4V051WDNtOFRoWGxVUEl4WFMvb3p6ZEdJNnA4L3cwWlowPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJITFdBVW5zM1M0R09DXy1GZE9vU2dnIiwicGhvbmVJZCI6IjVjY2NmYjljLTQ2OGQtNGViZC1iZDNkLTUwOTZhOGI4YWQxYSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjblJoWGczOWhoVGk4dUV3amFZeUh3TXhkN2c9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUURYa3RhdlNlSkFoWnpIaUJrQ2NMMDNBZG5NPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkIzQlhHNjhDIiwibWUiOnsiaWQiOiIyNDM5MDQ0Njg4NDc6MzNAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2Ru/Cdka/wnZG28J2RtPCdkajwnZG6ICAgIPCdkJLwnZCH8J2QhPCdkIvwnZCB8J2QmCBHcmltbSAg8J2Sl/CdkoLwnZKN8J2ShvCdko/wnZKV8J2SivCdko/wnZKQIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOU3FpN0lFRU8yQmlic0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI4MVQ1NkR6dW13b1IvSmpjVlZyZ3AwZWdJb0swRFcxWVVqVFZ6ZUhmS0hNPSIsImFjY291bnRTaWduYXR1cmUiOiJqd3BsdG1naWdKK1FpQ291Rm1DTkpTSE1haW9TWnR5ZEpJRnN5OW0rZlRwMlIvYXlyRGYvdDk5UERud3ZMWklDcUMxcVJvWHhSdzA2cjBKSUh3ODJBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZEx6SWNsYWMvZlkvU1hwRUp6am83UEt2azVWbUFndlhrdVhBVm5qdE9yZWxxc1pYU2RKblRyamgxWnV1OUhtYzdvNjFwdjhLaHdyeW5Rd2l1T0xQQ2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNDM5MDQ0Njg4NDc6MzNAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZk5VK2VnODdwc0tFZnlZM0ZWYTRLZEhvQ0tDdEExdFdGSTAxYzNoM3loeiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNDQ5MjQxMSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFOelUifQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF 𝐉𝚰𝚴𝚮𝐘𝐔𝐊`",
  author: process.env.PACK_AUTHER || "𝑇𝐻𝑂𝑀𝐴𝑆 𝑆𝐻𝐸𝐿𝐵𝑌 𝐺𝑅𝐼𝑀𝑀",
  packname: process.env.PACK_NAME || "THOMAS SHELBY GRIMM",
  botname: process.env.BOT_NAME || "𝐉𝚰𝚴𝚮𝐘𝐔𝐊-𝚳𝐃",
  ownername: process.env.OWNER_NAME || " TOMMY DE GRIMM",
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
