let fetch = require('node-fetch')
let handler = async (m, { conn, command, usedPrefix }) => {
	
	conn.sendButtonImg(m.chat, await ( await fetch(`https://api.xteam.xyz/randomimage/${command}?APIKEY=Dawnfrostkey`)).buffer(), 'nih', watermark, 'NEXT', `${usedPrefix + command}`, m)

}

handler.help = ['exo <erorr>', 'bts <erorr>', 'cewe <erorr>', 'cowo <erorr>', 'blackpink <erorr>']
handler.tags = ['image']
handler.command = /^(exo|bts|cewe|cowo|blackpink)$/i

module.exports = handler