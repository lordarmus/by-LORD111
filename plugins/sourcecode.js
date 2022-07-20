let handler = async (m, { conn }) => {
	
	// Link Script jgn di ganti ya pliss
    // Kalo mau masukin github kamu tinggal add aja link githubnya tapi jangan di hapus sumber script!
    // Jangan Ngeyell..
    // Kalo ngeyel gk bakal gw up sc lgi.
    
    let txt = `
Bot ini menggunakan script github
Mau scriptnya Cek di Github :https://github.com/Ikhsan5547/ikhsan94
Script Recode By Family-MD
`
     conn.reply(m.chat, txt, m)
}
handler.help = ['sourcecode']
handler.tags = ['internet']
handler.command = /^(sc(ript(bot)?)?|sourcecode)$/i

module.exports = handler