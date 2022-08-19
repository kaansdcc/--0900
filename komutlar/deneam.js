const Discord = require('discord.js');
const db = require("quick.db")
const p = require("../işaret.json")
exports.run = async (client, message, args) => {
  
message.channel.send(new Discord.MessageEmbed()
  .setColor("BLUE")
  .setTitle(`${client.user.username} | Seviye Sistemi Komutları!`)          
  .setThumbnail(client.user.avatarURL())                                     
  .addField(`:ringed_planet:\`${p}seviye\`\n`, `Profilinizin seviye bilgisi size sunar.`)       
  .addField(`:ringed_planet:\`${p}seviye-ayarlar\`\n`, `Sunucu içerisinde seviye sistemi ayarlarını sunar.`)                     
  .addField(`:ringed_planet:\`${p}seviye-rol\`\n`, `Seviye Sisteminde Seviyeye Göre Rol Verme Sistemi!`)         
  .addField(`:ringed_planet:\`${p}seviye-top\`\n`, `Sunucudaki En Yüksek Seviyeye Sahip 5 Kişiyi Listeler!`)                                                                         
  .addField(`:ringed_planet:\`${p}seviye-log\`\n`, `Sunucuda seviye kazanan kişilerin seviye bilgileri kanalda log olarak tutulmayı ayarlarsınız.`)                     
  .addField(`:ringed_planet:\`${p}seviye-sıfırla\`\n`, `Seviye-Sisteminin Bütün Ayarlanmış Fonksiyonlarını Sıfırlarsınız!`)                     
  .addField(`:ringed_planet:\`${p}seviye-xp\`\n`, `Gönderilen mesaj başına kazanılan xp sayısını ayarlarsınız!\nDefault: \`3\``) 
  .addField(`:ringed_planet:\`${p}seviye-sınır\`\n`, `Kaç Puanda Seviye Atlanılacağını Belirlersiniz!\nDefault: \`250\``)                    
  .setFooter(`${client.user.username} Seviye Sistemi!`, client.user.avatarURL())   
  .setTimestamp())
  
};

exports.conf = {
  aliases: []
};

exports.help = {
  name: 'seviye-sistemi'
};
