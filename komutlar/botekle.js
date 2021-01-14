const Discord = require('discord.js');
const talkedRecently = new Set();


exports.run = function(client, message, args) {
  if (talkedRecently.has(message.author.id)) {
           return message.channel.send("`3` Saniye de Bir Kullanabilirsiniz - " + message.author.tag);
    } else {

         
        talkedRecently.add(message.author.id);
        setTimeout(() => {
        message.delete();

          talkedRecently.delete(message.author.id);
        }, 3000);
    } 

	let botid = args[0]
	let prefix = args[1]
  let onaylımı = args[2]
  let basvuru = "790473185287995393"// //Başvurunun gideceği kanal
	let kanal = "774208496391553044" // Baş vurunun yapılacağı kanalı
  let log = "774208316791455775" // Bot Eklendi / Onaylandı / Rededildi Kanalı
	
  if (message.channel.id !== kanal) return message.channel.send(`Bu komutu sadece <#${kanal}> kanalında kullanabilirsin.`).then(x => x.delete({timeout: 3000}))
	if (message.channel.id == kanal) {
  if (!botid) return message.channel.send(`:x: Botunun ID'sini yazmalısın.`).then(x => x.delete({timeout: 3000}))
  if (!prefix) return message.channel.send(`:x: Botunun prefixini yazmalısın.`).then(x => x.delete({timeout: 3000}))
  if (!onaylımı) return message.channel.send(`:x: Botunun Dbl onaylımı onu yazmalısın`).then(x => x.delete({timeout: 3000}))
  message.delete()
  const embed = new Discord.MessageEmbed()
  .setColor("BLUE")
  .setDescription(`[Ekle](https://discordapp.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=0)`, true)
  .setTitle("Bot Ekletme")
  .addField("Bot Sahibi", message.author.tag)
  .addField("Bot ID", botid)
  .addField("Bot Prefix", prefix)
  .addField("Bot Onaylımı?", onaylımı)
  client.channels.cache.get(basvuru).send(embed)
  client.channels.cache.get(log).send(`${message.author} adlı kullanıcının **${botid}** adlı botu sıraya ekledi. Botu onaylanmayı bekliyor.`)
  message.channel.send(`:white_check_mark: Bot ekleme isteğiniz alındı.`).then(x => x.delete({timeout: 3000}))
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot-ekle'],
  permLevel: 0
};

exports.help = {
  name: 'botekle', 
  description: "Sunucuya bot eklemenizi sağlar.",
  usage: 'botekle <botid> <prefix>'
};