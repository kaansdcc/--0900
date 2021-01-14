const Discord = require('discord.js');


exports.run = function(client, message, args) {
  
  if (!message.member.roles.cache.has("792010324781563915"))  return message.channel.send(`:x: Bu komutu kullanabilmek için "\`BotList Yetkili\`" yetkisine sahip olmalısın.`);
	let botisim = args[0]
  let sahip = args[1]
  let sebep = args[2]
  let sebep1 = args[3]
  let sebep2 = args[4]
  let sebep3 = args[5]
  let sebep4 = args[6]
  let sebep5 = args[7]
  let sebep6 = args[8]
  let sebep7 = args[9]
  let sebep8 = args[10]
  let sebep9 = args[11]
	let log = "774208316791455775" // Bot Eklendi / Onaylandı / Rededildi Kanalı
	
	if (!botisim) return message.channel.send(`:x: Botun idsini yazmalısın.`).then(x => x.delete({timeout: 3000}))
  if (!sebep) return message.channel.send(`:x: Botu neden onaylamadığını yazmalısın.`).then(x => x.delete({timeout: 3000}))
    if (!sahip) return message.channel.send(`:x: Bot Sahibi id yazman lazım.`).then(x => x.delete({timeout: 3000}))
  message.delete()
		client.channels.cache.get(log).send(`:x: <@${sahip}> adlı kişini <@${botisim}> adlı botu reddedildi. Sebep : ${sebep}  Reddeden yetkili : ${message.author}`);
		message.channel.send(`:white_check_mark: Botu reddettiniz.`).then(x => x.delete({timeout: 3000}))
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bot-reddet', 'reddet'],
  permLevel: 3
};

exports.help = {
  name: 'botreddet', 
  description: "Sunucuya eklenen botu reddeder.",
  usage: 'botreddet <bot ismi> - <sebep>'
};