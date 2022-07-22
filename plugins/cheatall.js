let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
        conn.reply(m.chat, `*Succes !*`, m)
        global.db.data.users[m.sender].money = Infinity
        global.db.data.users[m.sender].limit = Infinity
        global.db.data.users[m.sender].level = Infinity
        
}
handler.help = ['cheatall']
handler.tags = ['cheat']
handler.command = /^(cheatall|cheatall)$/i
handler.owner = false
handler.mods = true
handler.premium = true

handler.fail = null
handler.money = 0

module.exports = handler