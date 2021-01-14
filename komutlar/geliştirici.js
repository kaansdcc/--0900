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
.setTitle(":busts_in_silhouette:  Rache Geliştirici ")
 .setTimestamp()
.setDescription("\n \n \n \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n \n \n • **Geliştirici Komutları**\n \n:desktop:   **[Botlist Sunucumuz](https://discord.gg/mMMpTt5)** = Botlist Sunucumuzda Botunuza İstatistik Kasabilirsiniz  \n :desktop:   **[Kod Sunucumuz](https://discord.gg/mMMpTt5)** = Botunuz İçin Kod, Sistemler \n \n• [`Botlist`](https://discord.gg/mMMpTt5) • [`Kod`](https://discord.gg/mMMpTt5)")
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
  name: 'geliştirici',
  category: 'geliştirici',
  description: 'Yardım Menüsü.',
   usage:'!kullanıcı'
}