let { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
        conn.reply(m.chat, `*Succes !*`, m)
        global.db.data.users[m.sender].money = 999999999
        global.db.data.users[m.sender].limit = 25
        global.db.data.users[m.sender].level = 500
        
}
handler.help = ['cheatmoney']
handler.tags = ['cheat']
handler.command = /^(cheatuang|cheatmoney)$/i
handler.owner = false
handler.mods = true
handler.premium = false

handler.fail = null
handler.money = 0

module.exports = handler