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

const mod = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Rache Bot ")
.setTitle(":yo_yo: •  Moderasyon Komutları")
 .setTimestamp()
.setDescription("\n \n \n \n \n \n ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n\n\n:orange_circle:  **r!sil** = Yazdığınız miktarda mesajı siler.   \n :orange_circle:  **r!otorol** = OtoRol Sistemi \n :orange_circle:  **r!sayaç** = Sayaç Sistemi. \n :orange_circle:  **r!ban** = Etiketlediğiniz kişiyi banlarsınız. \n :orange_circle: **r!kick** = Etiketlediğiniz kişiyi atarsınız.   \n :orange_circle:  **r!duyuru** = Bota duyuru yaptırırsınız.     \n :orange_circle:  **r!reklam** = Reklam engel sistemi açarsınız.   \n :orange_circle:  **r!slowmode** = Yavaş modu ayarlarsınız.      \n :orange_circle:  **r!unban** = Birisinin banını açarsınız.  \n :orange_circle:  **r!sa-as** = Bot biri sa dedimi cevap verir.   \n :orange_circle:  **r!sunucubilgi** = Sunucu bilgilerini görürsün.   \n :orange_circle:  **r!üyedurum** = Üyelerin durumlarını görürsün.   \n :orange_circle:  **r!sunucutanıt** = Destek Sunucusunda Sunucunuz Tanıtılır.   \n :orange_circle:  **r!abone** = Abone-Rol-Verme-Sistemi.\n :orange_circle: **r!asil** = Abone Rolü Silme \n :orange_circle: **r!nuke** = Kanalı Silip Tekrar Yükler \n :orange_circle: **r!sunucu-tema-sistem** = Sunucu İçin Şablon Sistemi \n :orange_circle: **r!kurallar** = Sizin Webhookunuzla Kuralları Atar \n :orange_circle: **r!ppgif** = Sunucuda PP Değiştiren Olurs Bir Kanala Atar\n :orange_circle: **r!modlog** = Moderasyon Logları\n :orange_circle: **r!gç-ayarla** = Resimli-Hg-Bb Kanal Ayarlar \n :orange_circle: **r!gç-sıfırla** = Resimli HgBB Sıfırlar")
.setImage("https://cdn.discordapp.com/attachments/765879032457199617/794200489297313822/standard_37.gif")
message.channel.send(mod)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ['mod'],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'moderasyon',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!moderasyon'
}