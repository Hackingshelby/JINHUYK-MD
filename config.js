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
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/b590a6.jpg";
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
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUhvN25BdGl2ekU2K1VpQUdNN283QS9YREY5Vlg4dzhDc3NmVUtIclFHbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoianlLaGpFQ3p2N29jZVFrS3BodmlSZnZRRVhpamFHajBvQmtJSWF2R2tIVT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJTR2JnMWFCNzQ5em5xYWlHbmgrWGczb0dlVnlEdlEvd1BDSUtnZ1UzWmxRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGcnZiVmVxT0xYV1Ziam1PWkJQK0VzS2hFTjhYc2NMWFJWYlJrZmVSa3d3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhQRWRxRmZiYiszNkdaUXlJVlhCYjNmY2hDTnE5M3dlMlRpSFZQK1dlbUE9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJtVWg0VjRPczZSQlgydzdIZ2hxSG9zdk1ZVzVwMlU4STZvOUxmaXhrMFU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNk1KVVFmaDhpdStUMnY5aHc3MWsxWEtKNkJ6QTJVd3Y2VGRTaldnbUNWbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOFBVbmlzcEVDek9Rd1YvZHdRVTdKamp4ZWFhcEppeGJmeTQxQ3g0aDVrMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNySVE4VE81eTEveGRwSXhjZHQwdiswMklReWVwODRWV2RlT0ZaVkIyUnhiQk05eVJ6aGlhY3hwU29aY0c4VCsxSEZML1dLY0hxMVY5Qk1WYnM4K0NRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTg5LCJhZHZTZWNyZXRLZXkiOiJrZG5BdGNiU3d2dVhqOXJPYzZ3YXRrM1hIYlh4VjdRd3FzL1BBL1JuQzJrPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJHeGtiMUJKbFRJYVhlUFNtVEdZdG5RIiwicGhvbmVJZCI6IjE3NWUyODkzLWFiM2YtNGIwNy1hNThjLTkzM2VlZDQ2YzAwNSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHOFdTRjQzcGdVYlZHOGJoQkNMSk9Ud0hjR1E9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWFlBVEZTRDlZaUdwbTdFVWt1TEkyM1JTRWFZPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlBLSjczODc2IiwibWUiOnsiaWQiOiIyNDM5MDQ0Njg4NDc6MzBAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoi8J2Ru/Cdka/wnZG28J2RtPCdkajwnZG6ICAgIPCdkJLwnZCH8J2QhPCdkIvwnZCB8J2QmCBHcmltbSAg8J2Sl/CdkoLwnZKN8J2ShvCdko/wnZKV8J2SivCdko/wnZKQIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOS3FpN0lFRUtpRC9yb0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiI4MVQ1NkR6dW13b1IvSmpjVlZyZ3AwZWdJb0swRFcxWVVqVFZ6ZUhmS0hNPSIsImFjY291bnRTaWduYXR1cmUiOiJRM1RIODIvMFpVdUtQN0tLVFNwWHJLYlkrV3BxUnJjTy9Ed1pqNEFBanZFTWZ6bEQxUHVOZ21lUUs2T1BEcVBUVm96bkEzS3J3VU9Mb0c0cTlLdFRCZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiTWxKRmlZMUtYSW1YenNuR0FFMlhBQmdjelVIWnB3Vlh6S1dQdmYvOVRtQVZnVVNNZ08xNFZOaXQ3RmY3cFM5Wkx3NFd6L2lFN3JRcjV3NHluUVNDQkE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNDM5MDQ0Njg4NDc6MzBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZk5VK2VnODdwc0tFZnlZM0ZWYTRLZEhvQ0tDdEExdFdGSTAxYzNoM3loeiJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNDMxMjM3NCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFQSlQifQ=="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF 𝐉𝚰𝚴𝚮𝐘𝐔𝐊`",
  author: process.env.PACK_AUTHER || "𝑇𝐻𝑂𝑀𝐴𝑆 𝑆𝐻𝐸𝐿𝐵𝑌 𝐺𝑅𝐼𝑀𝑀",
  packname: process.env.PACK_NAME || "𝑇𝐻𝑂𝑀𝐴𝑆 𝑆𝐻𝐸𝐿𝐵𝑌 𝐺𝑅𝐼𝑀𝑀",
  botname: process.env.BOT_NAME || "𝐉𝚰𝚴𝚮𝐘𝐔𝐊-𝚳𝐃",
  ownername: process.env.OWNER_NAME || "𝑇𝐻𝑂𝑀𝐴𝑆 𝑆𝐻𝐸𝐿𝐵𝑌 𝐺𝑅𝐼𝑀𝑀",
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
