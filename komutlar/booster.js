const Discord = require("discord.js");
const talkedRecently = new Set();

exports.run = async (client, message, args) => {
 if (talkedRecently.has(message.author.id)) {
  if (!message.member.roles.cache.has("765846508150980641"))  return message.channel.send(`:x: Bu komutu kullanabilmek için "\`RacheBoost\`" yetkisine sahip olmalısın.`);
           return message.channel.send("`3` Saniye de Bir Kullanabilirsiniz - " + message.author.tag);
    } else {

         
        talkedRecently.add(message.author.id);
        setTimeout(() => {
      

          talkedRecently.delete(message.author.id);
        }, 3000);
    } 


  
let istek = args.slice(0).join(' ')
if(!istek) return message.channel.send('**Malesef Booster Rolün Yok** :x:')

const embed = new Discord.MessageEmbed()
.setTitle("BoosterReklam")
.setColor('BLUE')
.setDescription(` \n **Sahip:** <@${message.author.id}> \n **Mesaj:** ${istek}`)
client.channels.cache.get('799293676165660733').send(embed)
  
message.channel.send("Başarılı").then(message => message.delete({ timeout: 5000 }));
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0  
};

exports.help = {
  name: 'sunucu-reklam',
  description: 'İstek kodları belirtmeye yarar',
  usage: 'istek-kod <istek>'
}