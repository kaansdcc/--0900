const Discord = require('discord.js')
exports.run = function(client, message, args) {
let yardim = new Discord.MessageEmbed()
.setTitle(" Ekonomi | Komut Listesi")
.setColor("RANDOM")
.addField("__💰  Ekonomi__",`
`)


.setTitle("__💰  Ekonomi Komutları__")
.setColor("RANDOM")
.setDescription(`
**\`!günlük\` - __24 saat aralıkla 2300-2700 arası para kazanırsınız.__**
**\`!para\` - __Etiketlediğiniz kişinin veya kendi paranızı görürsünüz.__**
**\`!gönder\` - __Etiketlediğiniz kullanıcıya para gönderirsiniz.__**
**\`!soygun\` - __14 dakikada bir soygun yaparsınız.__**
**\`!çalış\` - __Rastgele bir işte çalışıp maaş alırsınız.__**
**\`!yatır\` - __Kendi cüzdanınızdan bankaya para yatırırsınız.__**
**\`!çek\` - __Bankadan kendi cüzdanınıza para çekersiniz.**
**\`!çal\` - __Etiketlediğiniz kişinin cüzdanından para çalarsınız.__**
**\`!bahis\` - __Bahis oynarsınız, para kaybeder veya 2 katını kazanırsınız.__**
**\`!slot-machine\` - __Slots oynarsınız, para kaybeder veya 2 katını kazanırsınız.__**
**\`!balık-tut\` - __Balık tutarsınız, rastgele para kazanırsınız veya kaybedersiniz.__** 
`)

  if(!args[0]) return message.channel.send(yardim)
  

  
 
};


exports.conf = {
    enabled: true, 
    aliases: ["yardim","help",'komutlar','commands'],
  };
  
  exports.help = {
    name: 'ekonomi'
  };
