const Discord = require("discord.js");
const db = require("quick.db");
const talkedRecently = new Set();


exports.run = async (client, message, args) => {
  if (talkedRecently.has(message.author.id)) {
           return message.channel.send("`3` Saniye de Bir Kullanabilirsiniz - " + message.author.tag);
    } else {

         
        talkedRecently.add(message.author.id);
        setTimeout(() => {
        

          talkedRecently.delete(message.author.id);
        }, 3000);
    } 

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Rache Bot")
.setTitle(":drop_of_blood:•  Rache Bot Eğlence Komutları  ")
 .setTimestamp()
.setDescription("  \n \n \n \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n\n\n :blue_circle:  **r!mcskin** = Yazdığınız ismin minecraft görünüşünü atar.  \n :blue_circle:  **r!fbi** = Bot FBi Gif Atar.  \n :blue_circle:  **r!token** = Tokenimi Öğrenmek İstemezmisin?  \n :blue_circle:  **r!düello** = Düello Atarsın.  \n :blue_circle:  **r!wasted** = Polis tarafından yakalanırsın.\n :blue_circle:  **r!yaz** = Embedli Yazı Yazdırma ")
.setImage("https://cdn.discordapp.com/attachments/765879032457199617/794200489297313822/standard_37.gif")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'eğlence',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!eğlence'
}