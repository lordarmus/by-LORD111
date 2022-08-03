let handler = async m => m.reply(`
「 Donasi • Pulsa 」
• Axis [0831-3775-0223]
• XL [0819-3868-1806]
• Saweria [https://saweria.com/supportikhsanbot]

「 Donasi • Akun RDP 」

• *Chat Owner :wa.me/6283137750223*

*KETIK DOANG NGGAK DONASI*


`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler