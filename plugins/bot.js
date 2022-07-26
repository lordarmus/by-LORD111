let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `Iya Saya Disini Masih Aktif
  `.trim(), m)
}
handler.help = ['bot']
handler.tags = ['info']
handler.command = /^(bot)$/i


handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler

