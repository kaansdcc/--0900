const Discord = require('discord.js');

exports.run = (client, msg, args) => {//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  
  if (!msg.member.roles.cache.has('823530737906090014')) return msg.channel.send("Bu komutu sadece **<@823530737906090014>** kullanabilir!")
  

  let kodIsım = args[0]
  if(!kodIsım) return msg.channel.send("Bir kod ismi **belirt!**")//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  
  let kodLink = args[1]
  if(!kodLink) return msg.channel.send("Bir kod linki **belirt!**")
  //Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  
  msg.guild.channels.create(kodIsım, {//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
    type: "text",
    parent: "988838086169481229"//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  }).then(channel => {
    //Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
    let embed = new Discord.MessageEmbed()
    .setAuthor("Rache - Kod Paylaşıldı")//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
    .addField("Paylaşan Yetkili", `Yetkili İsim \`${msg.author.tag}\` \nYetkili ID \`${msg.author.id}\``)
    .addField("Paylaşılan Kod", `Kod İsmi \`${kodIsım}\` \nKod Kategorisi \`JavaScript\` `)
    .setColor("RED")//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
    
    msg.channel.send(`\`${kodIsım}\` adlı kod **paylaşıldı!**`)
    
 client.channels.cache.get("763768764722315344").send(embed)
    //Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
    
    const kod = new Discord.MessageEmbed()
    .setAuthor(`"${kodIsım}" Adlı Kod Paylaşıldı!`)//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
    .addField("Kod Hakkında",`Yetkili İsim \`${msg.author.tag}\` \nYetkili ID \`${msg.author.id}\` \nKod Linki [Koda Git](${kodLink})`)
    .setTimestamp()
    .setColor("RED")
    channel.send(kod)
  
  })
  
}
exports.conf = {
    enabled: true,//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
    guildOnly: false,
    aliases: ['kodpaylaş'],
    permLevel: 0
  };//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  
exports.help = {//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
 name: 'kod',
 description: 'kod paylaşmaya yarar',//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
 usage: '!kod <kod isim> <kod linki>'
};//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5