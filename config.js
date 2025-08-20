const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "ARSLAN-MD~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieURiN3hqekV0TEtnOW9YcGJ1Q01LakFHNmplQ3dwVHBsMnNuUExCVnMybz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSWtuR01VeXlSZmVCQVY0VkZZUHFqYTdUeHFLallQaGgxbEo5b2pDcUZWbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJS2taOW1WQzNISmptN0NxcU1VN1h2dXFneG9XZUVJYjZRT2dvSnNxTWw4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNci9oNU5JN0dCTmdDQ1FnOCt5MEFwTFY4VWVNR0JXbFlEaGt1akk5YldVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkVMNldjb3BVZ29RSlNWdWZLSUFPek5OUm8xRU1hQUpIM3JPbHo3UFF4M2c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjNsZWwyNzV5TURabVpkbU02cWc0cXQwcjRUUUI2T3MvdVkzMTRYRXZpZ3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0EzVFJLVVpWNlVvMDVHL3NISm8rakdqVlhIOU5zYVkxL1I5R0c5NkczQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOG5WeXJWVDlEUTRoT1lKOVY1QlM1NjB3MnB2SFFoL0lqcCt0aytwc1BnZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFidHBRaGtDRHFSS0hzMTNzczNRZEZwQW9KNUZxVkRKQUkrM1czeS9tYXcrSE9nVENJREdXTFA4Rmxac2RnOWNYV000THlHTkQvUTRsREZHV3lCcWl3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA5LCJhZHZTZWNyZXRLZXkiOiJ1bEZvOTB4OWdjVEVOeHRYSE55UktCaEdNL0k1VStRbW9PMWtnVlNRQzV3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzExMTA3MDIyOUBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIxQzg5OEFBRDlCQjE2QTkyQTVDNEQ1QTdEQzdDMDc0OCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzU1NjczNzYxfSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMxMTEwNzAyMjlAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNzkzM0JGODUwMDgwMkVBQjBBOTc0NUZFQUM4MDJCMzUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc1NTY3Mzc2Mn0seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMTExMDcwMjI5QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjFDNjcxNjE5MDQ5ODlBNkMxODE5QTg0RUZCNUY4REFDIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTU2NzM3NjN9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJyZWdpc3RlcmVkIjp0cnVlLCJwYWlyaW5nQ29kZSI6Ilk4TEU4SlJTIiwibWUiOnsiaWQiOiI5MjMxMTEwNzAyMjk6MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJBbGxhaCBodSBBa2JlciIsImxpZCI6IjQ5Nzk2NDg4MzY0MTkzOjFAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNNcVA3Y2dDRUozcGxjVUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJqQXhhckhHUFBMV1NDS29vZGpISmk4RVNaczl2dmcxajBJSTdUTG84SFVBPSIsImFjY291bnRTaWduYXR1cmUiOiJwa0RrYzVMNDhBeXRQc01mU2xGQkhDaDAxUWxDeWV2NUROM2lnVWR4aVE3dXZ3VmMyT0dBZ01mZnRsL1gzbVVIREtLOGZ4emRJbXpkeWhWcnhnT3dEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZHFvVTFTRUpQako3dVNZbDIwb2k4VWdrZmJwN2RGZkpvR0RQMllxVTlmZ1d1S0hjZ0JVWStiMWhQZnArbmtDVkJVMkZwblBZQnVtdlVjczRvbWlWaFE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5MjMxMTEwNzAyMjk6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZd01XcXh4anp5MWtnaXFLSFl4eVl2QkVtYlBiNzROWTlDQ08weTZQQjFBIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJQ0E9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTU2NzM3NTksImxhc3RQcm9wSGFzaCI6IjNSOVozOSIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSStDIn0=",
// add your Session Id 
AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true",
// make true or false status auto seen
AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false",
// make true if you want auto reply on status 
AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true",
// make true if you want auto reply on status 
AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*SEEN YOUR STATUS BY Ahmedali Botz 🤍*",
// set the auto reply massage on status reply  
ANTI_DELETE: process.env.ANTI_DELETE || "true",
// set true false for anti delete     
ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", 
// change it to 'same' if you want to resend deleted message in same chat     
WELCOME: process.env.WELCOME || "true",
// true if want welcome and goodbye msg in groups    
ADMIN_EVENTS: process.env.ADMIN_EVENTS || "false",
// make true to know who dismiss or promoted a member in group
ANTI_LINK: process.env.ANTI_LINK || "true",
// make anti link true,false for groups 
MENTION_REPLY: process.env.MENTION_REPLY || "false",
// make true if want auto voice reply if someone menetion you 
MENU_IMAGE_URL: process.env.MENU_IMAGE_URL || "https://files.catbox.moe/qpnazl.jpg",
// add custom menu and mention reply image url
PREFIX: process.env.PREFIX || ".",
// add your prifix for bot   
BOT_NAME: process.env.BOT_NAME || "Ahmedali Botz",
// add bot namw here for menu
STICKER_NAME: process.env.STICKER_NAME || "Ahmedali Botz",
// type sticker pack name 
CUSTOM_REACT: process.env.CUSTOM_REACT || "false",
// make this true for custum emoji react    
CUSTOM_REACT_EMOJIS: process.env.CUSTOM_REACT_EMOJIS || "💝,💖,💗,❤️‍🩹,❤️,🧡,💛,💚,💙,💜,🤎,🖤,🤍",
// chose custom react emojis by yourself 
DELETE_LINKS: process.env.DELETE_LINKS || "false",
// automatic delete links witho remove member 
OWNER_NUMBER: process.env.OWNER_NUMBER || "923237045910",
// add your bot owner number
OWNER_NAME: process.env.OWNER_NAME || "*ArslanMD Official*",
// add bot owner name
DESCRIPTION: process.env.DESCRIPTION || "*© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ArslanMD Official ❣️*",
// add bot owner name    
ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/qpnazl.jpg",
// add img for alive msg
LIVE_MSG: process.env.LIVE_MSG || "> Zinda Hun Yar ⚡",
// add alive msg here 
READ_MESSAGE: process.env.READ_MESSAGE || "false",
// Turn true or false for automatic read msgs
AUTO_REACT: process.env.AUTO_REACT || "false",
// make this true or false for auto react on all msgs
ANTI_BAD: process.env.ANTI_BAD || "false",
// false or true for anti bad words  
MODE: process.env.MODE || "public",
// make bot public-private-inbox-group 
ANTI_LINK_KICK: process.env.ANTI_LINK_KICK || "false",
// make anti link true,false for groups 
AUTO_STICKER: process.env.AUTO_STICKER || "false",
// make true for automatic stickers 
AUTO_REPLY: process.env.AUTO_REPLY || "false",
// make true or false automatic text reply 
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "false",
// maks true for always online 
PUBLIC_MODE: process.env.PUBLIC_MODE || "true",
// make false if want private mod
AUTO_TYPING: process.env.AUTO_TYPING || "false",
// true for automatic show typing   
READ_CMD: process.env.READ_CMD || "false",
// true if want mark commands as read 
DEV: process.env.DEV || "923237045919",
//replace with your whatsapp number        
ANTI_VV: process.env.ANTI_VV || "true",
// true for anti once view 
AUTO_RECORDING: process.env.AUTO_RECORDING || "false"
// make it true for auto recoding 
};
