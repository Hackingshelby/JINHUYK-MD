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
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/qlzvba.jpeg";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZ042cGV4a3k1cHo4ei8rYlhHdE9ycFNkSEQ1MXlxWjBNdlBkK3E5NHRtaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU296cVhhTE5mYjdibEwyOXZKUC8vNGFQeVczUTIybWNpTGxiRWx5RVpFOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDR0M4Mzg0TFNYWTducFcyd0pKcUhaczBhaWtyUmZMQzJJZUhLd3lUM1dVPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJIL2RRQ1QyTDluaXpyeHFxYm9ESlR3azhUWHV2N2lHMnhqMUdWRGJFNFRnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNQSzl3VzVHYjdrbmxLZ09CdFZvcnZGVmxSUi93bHlwamIxcHZ3RWJZbXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZBK0lmL0V6NFljelJYQ0QwY3lwcHZPUVBqbjVnT21ZQ0hCV3poaUwxRjQ9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibVBycFBXWkRlZmEwUUhuZFlyV21hV2pwci9lRSsvVnJjM1h2WVdEbC9GVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRlhTNkZrdjNja0xLNlVGWnFPUHdRVjRCZlcxYU1CRnM2dGdSa1BDd1dnTT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBYcnMxZHo2V2pzQ2dKRGN4NXdpNzRYRGF3RC8yTEt0U2hDaFR5N2VybnM3Nk9ybEtZeUUvN2lFUVV5b0FWN0ZIZHQrNW1TVmRUQlpnckRDaDlURmp3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzksImFkdlNlY3JldEtleSI6ImlJVkVBT2w3Ukt6THNLaUI5Sm0wMGFJWEdKbUg1TTdEd2xwYmVaWGhYR009IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6Ik1rR2VfWTctVDN1bkZuUl8tWmhLTEEiLCJwaG9uZUlkIjoiYWNjMTI2ZWQtNGVjNS00ODVkLWE0NjItNjE4MmQzYTMxYTRiIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InUvc0hTeC9jVUFpNDdva2FZNG0rdkVCUHVsdz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmNFZYU2lidEwrSUs0TkFRNG1xRkQ4czFyQlE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWDhERDcxWEMiLCJtZSI6eyJpZCI6IjIyMTc2NjAzNDE5ODozQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IuC8vPCdkIPwnZCA8J2QjPCdkITigKHgvJTwnZCI8J2QkfCdkIzwnZCA4LyU4oCh4Ly9In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNU2hpdElDRU43Mm5Mc0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ1YzFCdU5OaStza2FxcWZiMWMrYTB3UC8xVVVycUg2dTJKOTU0UmdkQ1RBPSIsImFjY291bnRTaWduYXR1cmUiOiJORk1adVpvRGhPakpiUngzNm1lSHcxSmw1STdjWjloV1VvYmdpa0tJM2p4RnhDTU1lZlBnNlZxaWN2WmZsQW4xSnpaL3lUSnpaemxncGVVRzBPSmNoZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiV1FSZHJSZHowSlpqRVFZbEFadGl4RTVEU0F0QnoyTFhYaXQ5TG9UaGpOZWVVZ2pWN2EyaFdFaFREbC9GRG5vSitEVjNMT0ZXTUx6ZXVQcW5VSHB5anc9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMjE3NjYwMzQxOTg6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJibk5RYmpUWXZySkdxcW4yOVhQbXRNRC85VkZLNmgrcnRpZmVlRVlIUWt3In19XSwicGxhdGZvcm0iOiJzbWJpIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzM0ODE4NjY3LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUtHViJ9"
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
