//#ENJOY BRO🐼🗽🥷
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "tuffgamer65@gmail.com";
global.location = "Kenya, Nairobi";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Kenya";
global.github = process.env.GITHUB || "https://github.com/Hubdarkweb/KERM_MD-V2";
global.gurl = process.env.GURL || "https://Hub7s";
global.website = process.env.GURL || "https://Hub7s";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/Gw7jtD0.jpeg";
global.devs = "https://wa.me/254112386921 , https://wa.me/254112386921";
global.sudo = process.env.SUDO || "254112386921";
global.owner = process.env.OWNER_NUMBER || "254112386921921";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/Gw7jtD0.jpeg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://kerm-session-2c65.onrender.com";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZU0rdTBrK0pUbUlnWHVtM0xLenBQRlNBNW5KV1RyYmdmZEE2K1ZmQUtXVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNUU3Z1ZoNStRd0NpSHdkemJORkZPdGpGL1phOUVsODVieHVyVzU0TWxHcz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVQStRbDd4Rm82Ulc1TkdNZFJXakM5TmtmbGozbjI0bExBMUxqSWV2RldZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGZUdIY0FmcC9tN3FzWFdkWmhod3hrdm5vZ2NUWFlQMXZNNzFlT2xjdTNvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdOZmt5YVA3UnE4eFJvRk9KSzNROUs3UTZhQjhaZHJKbG1YMUNIdldpSG89In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImRNZ3IzaXVxb1lKZlpYQjdRaGh0Q25IaTBJUE9rTUhreWxUdlRQVFAxblk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU09sK2pGVDhUelpqY0dKZEJpeEU1ZjhPK2ZYNHRTdUFhSWxrb0dmQU1IMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidTJIMkxUR0liOUowWXliVU1jaU1HMjNWOHdPQ2gzczJRS1lvWHpWQzAyUT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InJtZDV0U3ZLSk9SNko5U29Eb2RrQ3hrZUM5K1kxMkRMSW5IbDRHd3NOMDkvRm9HYnp3MXYzNnhpNTNCK2VsWGEzOWVTaDFNdGhESmkzSFFkZ0ZodERRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjIsImFkdlNlY3JldEtleSI6ImV0ejhlNmpzYytVWG9zK09uT0xoOHhQbTBxUnNlT3hMa0Nub3Nra01kUTQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjU0MTEyMzg2OTIxQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkRCRkIyMzhFNTI5NTdGRDA5RDJDQzdBRjEyQkY3Q0M5In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjU1MDAxODZ9LHsia2V5Ijp7InJlbW90ZUppZCI6IjI1NDExMjM4NjkyMUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIwQ0Y5MEQ4MDVDOUE2NzY4MzBBQkM5MUZDNzNENzIzNiJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzI1NTAwMTg3fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJFRU9iV2JEZVFBMlgwRlVuT3I0dkVBIiwicGhvbmVJZCI6IjkwOWNjMGUzLWJiNTctNGU0My1iZDQxLWQ2MzBiMDcyMzBmZiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPamxtaWNpUHNNWW9QQWordUlsd3ZpZjdLTkU9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicHNYdE14eE1Cc3N3YmV3dGwybmpVZ29MSUlrPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkNOSFYyVjNRIiwibWUiOnsiaWQiOiIyNTQxMTIzODY5MjE6MzRAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiVE9wUExVRyJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTjZVblA0SEVJbVc1TFlHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoicXlMZnF1ZDR5bGdlRjhqSjNWTTFGRUpOMjI3enM5dGVUbWd3UG1ML3AwUT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiK0o5cXR2UGhWVkd2cmJMaEJHTHdVK1BkYjVTeDMwVVZHdlVhM3lmbXJRcGNUUDZTRmpVUFk5M1NHcHZHVkQxblNGcVY1aWZxdVN3NGhkS2ZNdjlaQkE9PSIsImRldmljZVNpZ25hdHVyZSI6IlVRc0UyQnpaR3BmTFpOUm9sQmVabW5tTHJxbUhNSTZiZU5EUzYybVAzVDU2clZwN01GM0pWWGRiYkZmQTJGeXpBS054VHpvZHhOaERhdWQ0N0d4TkJRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0MTEyMzg2OTIxOjM0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmFzaTM2cm5lTXBZSGhmSXlkMVROUlJDVGR0dTg3UGJYazVvTUQ1aS82ZEUifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjU1MDAxODMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRDNMIn0="
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`BRAND PRODUCT OF ☞⌜🗽🥷🐼 TOpPLUG 🗽 TECH⌝☜`",
  author: process.env.PACK_AUTHER || "🗽🥷🐼 TOpPLUG 🗽 TECH",
  packname: process.env.PACK_NAME || "Kerm-MD-V2",
  botname: process.env.BOT_NAME || "ᵏᵍ┘𝙺𝙴𝚁𝙼_𝙼𝙳_𝚅𝟸𖤐",
  ownername: process.env.OWNER_NAME || "☞⌜🗽🥷🐼 TOpPLUG 🗽 TECH⌝☜",
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
  LANG: (process.env.THEME || "KERM").toUpperCase(),
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
