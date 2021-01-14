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

const kullanıcı = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Rache Bot")
.setTitle(":busts_in_silhouette:  Rache Bot Kullanıcı Komutları ")
 .setTimestamp()
.setDescription("\n \n \n \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n \n \n • **Kullanıcı Komutları**\n \n:yellow_circle:  **r!avatar** = Avatarınıza bakarsınız.  \n :yellow_circle:  **r!yetkilerim** = Yetkilerini görürsün.  \n :yellow_circle:  **r!profil** = Profilini görürsün.  \n :yellow_circle:  **r!sunucuresmi** = Sunucu resmini gösterir.  \n :yellow_circle:  **r!ping** = Botun Pingine Bakarsın.  \n :yellow_circle:  **r!id** = Birisinin id'sine Bakarsın.  \n :yellow_circle:  **r!davet** = Beni Sunucuna Ekle.  \n :yellow_circle:  **r!botbilgi** = Bot istatistiklerini görürsünüz.  \n :yellow_circle:  **r!bug-bildir** = Yazdığınız bug'u yapımcılarıma bildirir.  \n :yellow_circle:  **r!atatürk** = Dene ve gör... (1881-1938)  ")
.setImage("https://cdn.discordapp.com/attachments/765879032457199617/794200489297313822/standard_37.gif")
message.channel.send(kullanıcı)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: [],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'kullanıcı',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!kullanıcı'
}