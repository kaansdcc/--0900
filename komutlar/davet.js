const  Discord = require("discord.js"); 
const talkedRecently = new Set();

exports.run = (client, message, args) => {
if (talkedRecently.has(message.author.id)) {
           return message.channel.send("`3` Saniye de Bir Kullanabilirsiniz - " + message.author.tag);
    } else {

         
        talkedRecently.add(message.author.id);
        setTimeout(() => {
        message.delete();

          talkedRecently.delete(message.author.id);
        }, 3000);
    } 

  const davet = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .setTitle(":kite: Beni Sunucuna Ekle")
  .setDescription("[__**Davet Et**__](https://discord.com/oauth2/authorize?client_id=763434923016192030&scope=bot&permissions=8) \n [__**Destek Sunucusu**__](https://discord.gg/mMMpTt5)")
  message.channel.send(davet)
}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: '',
  usage: ''
};