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
global.userImages = process.env.USER_IMAGES || "https://i.ibb.co/P5Zzc15/mrfrankofc.jpg";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidVBUTEQ3Q2o2c3loZ1lPUGVXVFI5Q1FyM29BdWJxUjVYTDJwbUJyYVNVMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSnIxYStDNXcwT1p0UG50MFVydi9OU2pPeTlxZXZFaGFYbS9ya3pvOVdrdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPRmxOaUFBa2huRk50QjdydWxET2VxekNWcTlUZmd1RHZVWURkbFM4d1dvPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJKVXdoVTBYSVkyV29NRlJYZW9mTDRoRVJzU09xMUk4aFJNOXdmeklGSTBnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFBWUo0RU5Ga0FOeHMxWjJhbGhJY0hFOERGTGVUNFQrd0NGVEF5YVRYR1k9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InpwN0J5eEE2MGl2ZzBKalJNOFk0M3NLOEhMblZYT3RwZFMzUVR3c1dKeGM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0NKUU9zMW9OeG9jRGVnbFpWTGJJZ0Vuak8zSjM3T2RKeTgvbkFsNDJrND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiL21hVmVwMm5nTzUrcldVN3lKVjcyMklyT3F6UjNFcmhYY09jUEtrcDR5ND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNkTkhLM05VNDFYMnFQSkdjQ3Y0Q1BPMnlxRjFjdG1qWFFGYThGUjlNamZoTHVlQUt0eFN5UlI5VENzMEZZSGEwUGh4Z3VsVDFIRkRRUllJQVA4d2dRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAxLCJhZHZTZWNyZXRLZXkiOiJJYzJlcDZoZWVWdjdCblFTWW1LTzlLaTQ2REpibWlyK1pKZ2RuRFNqcmlnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJnVUkzOGFrSVN6dWs1YXowNXFuRUJBIiwicGhvbmVJZCI6ImQ1M2Y3NTA0LWZmN2YtNDA4NC05NjlkLTk0YWQzMTUzYjk4NCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJyQ3d5WGU5bG9GMnRqbkx4UHdWQUtkemk3T3c9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidVZ1RE9qeEFOWEpCQ2xxTFBxUWdZRTU3RVVFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ilg3MjdBM0E1IiwibWUiOnsiaWQiOiIyMjE3NjYwMzQxOTg6NEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLgvLzwnZCD8J2QgPCdkIzwnZCE4oCh4LyU8J2QiPCdkJHwnZCM8J2QgOC8lOKAoeC8vfCdkIvwnZCA8J2QjfCdkIPwnZCE8J2QkfCdkJIifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ1BxVDI2SUhFTjZWMzdzR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InVjMUJ1Tk5pK3NrYXFxZmIxYythMHdQLzFVVXJxSDZ1Mko5NTRSZ2RDVEE9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjVMUjdFc05DL2N6K2JTWDJ4S1d3NkxyNGdkdUl0VFRHT0N0L0pwYW1xL2l0OXZLam95eHpsWGFXdXpDZDJMTmVkU0R1ZjY5Tlc0TEtLLzlHQnFaNmpnPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJhR1FNbktiL1ZNWlpoU2cwUmVURmhsTTVxdGtmWmd6aFFMT1R3UnZvOURJT1gvZVZadzZuUU5teHU2bFBkU1hzaHhuWEJGSmt5amV6VU1QMlZUV2hqdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIyMTc2NjAzNDE5ODo0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJuTlFialRZdnJKR3FxbjI5WFBtdE1ELzlWRks2aCtydGlmZWVFWUhRa3cifX1dLCJwbGF0Zm9ybSI6InNtYmkiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzU5MDM5ODgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBUHMvIn0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF 𝐉𝚰𝚴𝚮𝐘𝐔𝐊`",
  author: process.env.PACK_AUTHER || "🌹‎༼𝐃𝐀𝐌𝐄‡༔𝐈𝐑𝐌𝐀༔‡༽🌹",
  packname: process.env.PACK_NAME || "🌹‎༼𝐃𝐀𝐌𝐄‡༔𝐈𝐑𝐌𝐀༔‡༽🌹",
  botname: process.env.BOT_NAME || "𝐉𝚰𝚴𝚮𝐘𝐔𝐊-𝚳𝐃",
  ownername: process.env.OWNER_NAME || "🌹‎༼𝐃𝐀𝐌𝐄‡༔𝐈𝐑𝐌𝐀༔‡༽🌹",
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
