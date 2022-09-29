let handler =  m => m.reply(` ❰ مـــكاين لا جروب لا قلاوي .❱
https://chat.whatsapp.com/Kb6msWfU8fP25KcG3M4Xtw
`.trim()) // Add yourself if you want
handler.help = ['donate']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler
