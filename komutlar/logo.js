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
.setAuthor("Rache Bot ")
.setTitle(":military_medal:•  Rache Bot Logo Komutları ")
 .setTimestamp()
.setDescription("\n\n\n\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n\n\n:green_circle: **r!dinamik** = Dinamik logo oluşturur.  \n :green_circle: **r!altın** = Altın logo oluşturur.  \n :green_circle: **r!banner** = Banner logo oluşturur.  \n :green_circle: **r!basit** = Basit logo oluşturur.  \n :green_circle: **r!elmas** = Elmas logo oluşturur.  \n :green_circle: **r!sarı** = Sarı logo oluşturur.  \n :green_circle: **r!neonmavi** = Neon mavi logo oluşturur.  \n :green_circle: **r!kalın** = Kalın logo oluşturur.  \n :green_circle: **r!anime** = Anime yazı tipinde logo oluşturur.  \n :green_circle: **r!habbo** = Habbo yazı tipinde logo oluşturur.  \n :green_circle: **r!arrow** = Ok işaretli logo oluşturur.  \n :green_circle: **r!green** = Yeşil logo oluşturur.  \n :green_circle: **r!alev** = Alevli logo oluşturur.  \n :green_circle: **r!red** = Kırmızı logo oluşturur. ")
.setImage("https://cdn.discordapp.com/attachments/765879032457199617/794200489297313822/standard_37.gif")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["logo"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'logo',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!logo'
}