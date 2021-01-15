const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json")
exports.run = async (client, message, args) => {//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  
  if(message.author.id !== ayarlar.sahip) {
     const embed = new Discord.MessageEmbed()
    .setDescription(`**:x: Bu Komut Yapımcıma Özeldir !**`)
    .setColor('BLUE')
    }//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
if(args[0] === "aç"){
  if(!args[1]){
  message.channel.send('Bakım modu sebebini belirtin!')
  }//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  db.set('bakım', args.slice(1).join(' '))
  if (args.slice(1).join(' ')) {
  message.channel.send("Bakım açıldı")
    }
} else if(args[0]=== "kapat"){
  message.channel.send("Bakım Kapatıldı")
  db.delete('bakım')
}

}//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5


exports.conf = {
  enabled: true,
  guildOnly: false,//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  aliases: [],
  permLevel: 0
};

exports.help = {//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  name: 'bakım',//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  description: 'Bakım.',//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  usage: 'Bakım'//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
};