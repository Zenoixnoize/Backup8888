// đ You Can change this your choice
// đ You Can change this your choice 
const fs = require('fs')
const chalk = require('chalk')

//Api Website\\
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

//Api Key\\
global.APIKeys = {
	'https://zenzapis.xyz': 'sanzychan01', //credit goes to sanzy yt, if api key expire, buy it and put it here?\\
}
// đ You Can change this your choice
global.emoji01 = ['đŧ'] // đ Enter your Emoji 
global.emoji02 = ['đĻ'] //đ Enter your Emoji
global.notice = ` *Hi đĨ° I m*
*īŧŽīŧ¯īŧŠīŧē Î*
*I am 16 years old developer...*
*From Sri Lanka đąđ°*
*I am a Learning.*
*Not more..*
*Also I am Student*
*Follow My Facebook - https://www.facebook.com/zenoixnoize*`  // đ Enter Your details and Social Media Links and Anything
global.owner =  ['+94711502119'] //đ  Enter Your number
global.premium =  ['+94711502119'] //đ  Enter Your number
global.ownernomer = '+94711502119' //đ  Enter Your number
global.ownername = 'ZENOI' //đ Enter Your name
global.botname = 'īŧ§īŧĄīŧ˛īŧĻīŧŠīŧĨīŧŦīŧ¤ īŧĸīŧ¯īŧ´' //đ Enter Your Bot name
global.footer = 'ÂŠ đ¯đđđžđđžđŊ đĄđ đĻđēđđŋđđžđđŊ đĄđđ' //đ Enter Your Name
global.ig = 'https://github.com/Zenoixnoize/GARFIELD-WHATSAPP-BOT-v8' // đ You Can change this your choice
global.region = 'India, South India, Kerala' // đ You Can change this your choice
global.sc = 'https://github.com/Zenoixnoize/GARFIELD-WHATSAPP-BOT-v8'
global.fbt = 'Follw Us âšī¸' // đ Enter (Subscribe/Follow/Like now)
global.myweb = 'https://www.facebook.com/garfieldbots/'// đ Enter your Social media link to follow now button
global.welcome = '*Welcome To The Group đĻ*' // đ You Can change this your choice
global.bye = '*Bye bye Mother fucker đŧ*' // đ You Can change this your choice
global.packname = 'GARFIELD-BOTv8'  // đ You Can change this your choice 
global.author = 'NOIZE DEVELOPMENT' // đ You Can change this your choice 
global.sessionName = 'session' // đ You Can change this your choice
global.prefa = ['','!','.','đ°ī¸','â','đ'] // đ You Can change this your choice
//Go to https://imgbb.com/, upload a photo of your choice and put its link here
global.thumb =  'https://i.ibb.co/Jz0mMnC/Pics-Art-22-06-03-01-01-46-876.png' 
global.spoty = 'https://i.postimg.cc/HW2YbN1b/Pics-Art-22-08-09-16-12-14-489.png'
//Go to https://imgbb.com/, upload a photo of your choice and put its link here
global.sp = 'â­'
global.mess = {
    success: 'Done đĻ', // đ You Can change this your choice
    admin: 'This Feature Is Only For Admin!', // đ You Can change this your choice
    botAdmin: 'Bot Must Be Admin First!', // đ You Can change this your choice
    owner: 'This Feature Is Only For Owner!', // đ You Can change this your choice
    group: 'Feature Used Only For Groups!', // đ You Can change this your choice
    private: 'Features Used Only For Private Chat!', // đ You Can change this your choice
    bot: 'This Feature Is Only For Bot', // đ You Can change this your choice
    wait: '```Please Wait...```', // đ You Can change this your choice
    error: 'Error! Maybe Api Key Is Expiredđ¤!', // đ You Can change this your choice
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
} // đ You Can change this your choice
/// Do Not Change đ 
global.limitAwal = "99999999999999999"
global.lolkey = "835641f3d2d1b6971e1fd132"
global.xteam = "apivproject"
global.xcodeapi = "5S3epf7hC2"
global.dapaapi = "piceg"
global.sankey = "sanuwa"
global.xteamkey = "nandowangy"
global.carkey = "cakrayp24Q6"
global.violkey = "beta"
global.HunterApi = "FuckBitch"
global.neokey = "V8qnSaTq"
global.riy = "RiyGanz"

    global.limitawal = {
    premium: "Infinity",
    free: 12,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 15,
   goldawal: 10,
   emeraldawal: 5,
   umpanawal: 5,
   potionawal: 1
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
