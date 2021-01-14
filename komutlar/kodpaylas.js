const Discord = require('discord.js');

exports.run = (client, msg, args) => {
  
  if (!msg.member.roles.cache.has("765224486424936478")) return msg.channel.send("Bu komutu sadece **<@765224486424936478>** kullanabilir!")
  
  if(msg.channel.id !== "792790778065846282") return msg.channel.send("Bu komutu sadece <#792790778065846282> kanalında **kullanabilirsin!**")
  
  let kodIsım = args[0]
  if(!kodIsım) return msg.channel.send("Bir kod ismi **belirt!**")
  
  let kodLink = args[1]
  if(!kodLink) return msg.channel.send("Bir kod linki **belirt!**")
  
  
  msg.guild.channels.create(kodIsım, {
    type: "text",
    parent: "793413799163461632"
  }).then(channel => {
    
    let embed = new Discord.MessageEmbed()
    .setAuthor("Rache - Kod Paylaşıldı")
    .addField("Paylaşan Yetkili", `Yetkili İsim \`${msg.author.tag}\` \nYetkili ID \`${msg.author.id}\``)
    .addField("Paylaşılan Kod", `Kod İsmi \`${kodIsım}\` \nKod Kategorisi \`JavaScript\` `)
    .setColor("RED")
    
    msg.channel.send(`\`${kodIsım}\` adlı kod **paylaşıldı!**`)
    
 client.channels.cache.get("763768764722315344").send(embed)
    
    
    const kod = new Discord.MessageEmbed()
    .setAuthor(`"${kodIsım}" Adlı Kod Paylaşıldı!`)
    .addField("Kod Hakkında",`Yetkili İsim \`${msg.author.tag}\` \nYetkili ID \`${msg.author.id}\` \nKod Linki [Koda Git](${kodLink})`)
    .setTimestamp()
    .setColor("RED")
    channel.send(kod)
  
  })
  
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['kodpaylaş'],
    permLevel: 0
  };
  
exports.help = {
 name: 'kod',
 description: 'kod paylaşmaya yarar',
 usage: '!kod <kod isim> <kod linki>'
};