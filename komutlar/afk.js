const db = require("quick.db");
const Discord = require("discord.js");//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
const ayarlar = require('../ayarlar.json')//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
const talkedRecently = new Set();
let prefix = ayarlar.prefix//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
 
exports.run = function(client, message, args) {//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5

  if (talkedRecently.has(message.author.id)) {//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
           return message.channel.send("`3` Saniye de Bir Kullanabilirsiniz - " + message.author.tag);//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
    } else {

         //Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
        talkedRecently.add(message.author.id);//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
        setTimeout(() => {
        

          talkedRecently.delete(message.author.id);//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
        }, 3000);
    } 

  var USER = message.author;//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  var REASON = args.slice(0).join("  ");
  const embed = new Discord.MessageEmbed()//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  .setColor('RED')
  .setAuthor(message.author.username, message.author.avatarURL)
  .setDescription(`Afk Olmak İçin Bir Sebep Belirtin.\n\n Örnek Kullanım : ${prefix}afk <sebep>`)//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  if(!REASON) return message.channel.send(embed)//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  db.set(`afk_${USER.id}`, REASON);//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  db.set(`afk_süre_${USER.id}`, Date.now());//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  const afk = new Discord.MessageEmbed()//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  .setColor('GREEN')
  .setAuthor(message.author.username, message.author.avatarURL)//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  .setDescription(`Başarıyla ${REASON} Sebebiyle \`Afk\` Moduna Başarıyla Girildi.`)//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  message.channel.send(afk)//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
 //Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
};//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
 //Rache Code , Telif Hakla//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5rı Vardır, https://discord.gg/mMMpTt5
exports.conf = {//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  enabled: true,//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  guildOnly: true,//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  aliases: [],//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  permLevel: 0//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
};
 //Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
exports.help = {//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  name: 'afk',//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  description: 'afk komutu',//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  usage: 'afk'//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
};