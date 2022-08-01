const Discord = require('discord.js'); //umt ❤️ BotClub
const database = require('quick.db');

exports.run = async (client, message, args) => {
if(message.author.id !== 'sizin id') return;

function botclub(content) {
const infoEmbed = new Discord.MessageEmbed()
.setColor('BLUE')
.setDescription(content)
.setTimestamp()
.setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }));
return message.channel.send(infoEmbed)
};

const durum = await database.fetch(client.user.id);
if(durum == true) {

await database.delete(client.user.id);
return botclub(' Bakım artık sona erdi,herkes komutları kullanabilir.');

} else {

await database.set(client.user.id, true);
database.set(client.user.id+':)', { 
author: message.author,
time: Date.now() 
});

return botclub(' Bakım modu açıldı.\nArtık sahibim dışında kimse komutları kullanamayacak.');
};


}; 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bakım', 'b'],
  permLevel: 0
};
 
exports.help = {
  name: 'bakım-modu',
    description: 'bakım'
}; 