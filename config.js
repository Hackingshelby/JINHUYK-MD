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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUZYaEszeXNkYTFvNlVjM3JtRm42S1ZhMXA5TzVRbENnVHVCTzNwejZsTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoielBFY0J6OFltcnkzWS81YkMrNDM0dmt1K0FHZm5DT0VId0ZxemlPOWZCdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0RU1rRnhwREZkamtTU3FDUjVySXhZWmh6YzBBMDQ0amVkUXQwNXhJY25JPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJURnhsWlYySUU5Q2JPYThuR0x4QWQ5dmNYQ1BhS0hMUnIyZExGcE42MDBnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImlLVmZNV0hkMHNHZm9TRnhsdENDR2hDU01sQ0M5Y09NMDNqOUxrR3NMM3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxrcEFVSnE5OG5yYXVPVGsweW5BM256Z2grRExWMGZOKzZ5SGJZVlVYVm89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia000STZiaTc2SURpeEMyL0dTSkcyaFNqZDdOcjRSTm85Q3dBekFMTThGOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiYXJ6MTVZMzhRSXRJVFlsMTZabzdtVENtT1RTYURnTmVNenViT2hEMXBGdz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndKa0FhZGNsdHlCcm9jL1IwUmZIVEw5WHdrdVNNZ2dDUTNybGZSK3FVTENZYit1T0VvcjdjZG8wd3o2bVdYc0t5UVlCR2ZmdUM3eTByT21scE9qcmdRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzIsImFkdlNlY3JldEtleSI6IkQ5eFcvNTBncHgxYmxhbnJhdnBTbEk1TUtxbHc3YzREK21uYk1VVy85N009IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Imd6M0I3eTl3VFFLQzczQUxCTHNxZ1EiLCJwaG9uZUlkIjoiMjMwMmY1NzEtNGZkMy00OWFiLThmZmYtNzhhZWZiY2VlYWNlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkYrRk1KQVVIdUFyUGZLeWlrNDJVUjRwQTBqVT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJzWW1RT3FBYnFEUlg1dTMwRStvN3I5My92ZWs9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWUtSVk0zODYiLCJtZSI6eyJpZCI6IjI0MzkwNDQ2ODg0NzozNEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZG78J2Rr/CdkbbwnZG08J2RqPCdkbogICAg8J2QkvCdkIfwnZCE8J2Qi/CdkIHwnZCYIPCWpbPwnZCG8J2QkfCdkIjwnZCM8J2QjOK4peKfhvCWpbMifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ05XcWk3SUVFT0t1bDdzR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjgxVDU2RHp1bXdvUi9KamNWVnJncDBlZ0lvSzBEVzFZVWpUVnplSGZLSE09IiwiYWNjb3VudFNpZ25hdHVyZSI6IlVSK1dGZHlSYlNXc1VvOUY2RnpNRWo3aHJYMjVYdWtxaU1xT0laRVlXYUtrYXNZd0RxYU1TSTFtZW9FTTBWZ1hrQkc3QnFwdFVJczlrMTVNcDE0WERBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJRU2ltcFVFMUpqVFdpQmJHaFFzVmxLVXpBSmtYZ2tRU010WjRtY09KcG5INmxmaTdEN1plOGZYSVNnNis2ZEhDVk5DeGNVbWNveG5XWDBBRFBCSGRqQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI0MzkwNDQ2ODg0NzozNEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJmTlUrZWc4N3BzS0VmeVkzRlZhNEtkSG9DS0N0QTF0V0ZJMDFjM2gzeWh6In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM0NzI3NTM3fQ=="
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
