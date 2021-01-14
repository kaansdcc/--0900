const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let yardım = new Discord.MessageEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL())
.setColor('RANDOM')
.addField('Rache',`
**r!bilgiler** : Bilgilerinizi gösterir.
**r!günlük-para**: Günlük Para Alırsınız.
**r!hesap-oluştur** : Hesap Oluşturur.
**r!kasalar** : Kasaları listeler.
**r!kasabilgi** : Kasalar hakkında bilgi alırsınız.
**r!kasaaç** : Kasa Açarsınız.
**r!kumar** : Kumar Oynarsınız
**r!transfer** : Hesabınızdan başka bir hesaba para transferi yaparsınız.`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["ekonomi"], 
  permLevel: 0
};
exports.help = {
  name: 'ekonomi'
};