const Discord = require("discord.js");
const talkedRecently = new Set();
const db = require("quick.db");
let rache = "https://discord.gg/mMMpTt5"


exports.run = async (client, message, args) => {
  if (talkedRecently.has(message.author.id)) {
           return message.channel.send("`3` Saniye de Bir Kullanabilirsiniz - " + message.author.tag);
    } else {

         
        talkedRecently.add(message.author.id);
        setTimeout(() => {
     

          talkedRecently.delete(message.author.id);
        }, 3000);
    } 

const yardım = new Discord.MessageEmbed()
.setColor("BLUE")
.setAuthor("Rache, Daha Yeni Başlıyoruz")
.setTitle("Yardım Menüsü")
 .setTimestamp()
.setDescription("\n :mega: • **Duyuru** \n \n :tada: [r!modlog Eklendi](https://discord.gg/mMMpTt5) \n :tada: [r!gç-ayarla/sıfırla Eklendi](https://discord.gg/mMMpTt5)\n :tada: [r!sunucu-tema-sistem Eklendi](https://discord.gg/mMMpTt5)  \n \n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n \n \n • **Yardım Komutları** \n \n \n :point_right:  :ferris_wheel:  **[r!eğlence](https://discord.gg/mMMpTt5)** = __Eğlence komutlarını görüntülersiniz.__ \n :point_right: :shield:   **[r!moderasyon](https://discord.gg/mMMpTt5)** = __Moderasyon komutlarını görüntülersiniz.__ \n :point_right:  :bust_in_silhouette: **[r!kullanıcı](https://discord.gg/mMMpTt5)** = __Kullanıcı komutlarını görüntülersiniz.__ \n :point_right:   :record_button: **[r!logo](https://discord.gg/mMMpTt5)** = __Logo komutlarını görüntülersiniz.__\n :point_right:   :desktop:  **[r!geliştirici](https://discord.gg/mMMpTt5)** = __Botunuzu Geliştirme Yolları__")
.setImage("https://cdn.discordapp.com/attachments/765879032457199617/794200489297313822/standard_37.gif")
message.channel.send(yardım)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["help","y"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'yardım',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!yardım'
}