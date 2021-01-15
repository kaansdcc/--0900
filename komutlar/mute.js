const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');
const prefix = ayarlar.prefix
const ms = require('parse-ms')
const db = require('quick.db')//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
const DBL = require('dblapi.js')
//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
function getRandomInt(min, max) {//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5

/*

BU KOMUDU HAZIRLADIĞI İÇİN HİVIN GARDAŞIMA ÇOK TEŞG EDİYORUM...
SONRADA EDİTLEDİĞİM İÇİN KENDİME TEŞG EDİYORUM...


*///Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5

exports.run = async (client, message, args) => {
    let timeout = 86400000 //bunu ellemeyin 24 saat 

    let daily = await db.fetch(`günlükkullanımgodareçdare-${message.author.id}`);
//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now() - daily));

        message.channel.send(`Günlük ödülünü tekrar alabilmek için **${time.hours} saat ${time.minutes} dakika ${time.seconds} saniye** beklemelisin!`)
    } else {//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
      if(client.ekoayarlar.dbloy == false) {
        db.set(`günlükkullanımgodareçdare-${message.author.id}`, Date.now())
        if(client.ekoayarlar.rastgelepara == true) {
          const randomizer = getRandomInt(client.ekoayarlar.minpara, client.ekoayarlar.maxpara)//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
          db.add(`bakiyecdare-${message.author.id}`, randomizer)
          let para1 = new Discord.MessageEmbed()//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
          .setColor(client.ekoayarlar.renk)
          .setDescription(`**Günlük Para**`)
          .addField(`Aldığınız Miktar;`, randomizer + ` ${client.ekoayarlar.parabirimi}`)//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
          message.channel.send(para1)
        } else {
          if(client.ekoayarlar.rastgelepara == false) {
            db.add(`bakiyecdare-${message.author.id}`, client.ekoayarlar.günlükpara)
            let para1 = new Discord.MessageEmbed()
            .setColor(client.ekoayarlar.renk)//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
            .setDescription(`**Günlük Para**`)
            .addField(`Aldığınız Miktar;`, client.ekoayarlar.günlükpara + ` ${client.ekoayarlar.parabirimi}`)
            message.channel.send(para1)
          }
        }
      } else {
        if(client.ekoayarlar.dbloy == true) {
          const dbl = new DBL(client.ekoayarlar.dblkey, client)
          dbl.hasVoted(message.author.id).then(voted => {
            if(voted) {
              db.set(`günlükkullanımgodareçdare-${message.author.id}`, Date.now())//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
              if(client.ekoayarlar.rastgelepara == true) {
                const randomizer = getRandomInt(client.ekoayarlar.minpara, client.ekoayarlar.maxpara)
                db.add(`bakiyecdare-${message.author.id}`, randomizer)//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
                let para1 = new Discord.MessageEmbed()
                .setColor(client.ekoayarlar.renk)
                .setDescription(`**Günlük Para**`)
                .addField(`Aldığınız Miktar;`, randomizer + ` ${client.ekoayarlar.parabirimi}`)
                message.channel.send(para1)
              } else {//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5
                if(client.ekoayarlar.rastgelepara == false) {
                  db.add(`bakiyecdare-${message.author.id}`, client.ekoayarlar.günlükpara)
                  let para1 = new Discord.MessageEmbed()
                  .setColor(client.ekoayarlar.renk)
                  .setDescription(`**Günlük Para**`)
                  .addField(`Aldığınız Miktar;`, client.ekoayarlar.günlükpara + ` ${client.ekoayarlar.parabirimi}`)
                  message.channel.send(para1)
                }
              }
            } else {
              return message.channel.send(`${client.ekoayarlar.dblmsj}`)
            }
          })
        }
      }
   }
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['günlük-para'],
    permLevel: 0,
    katagori: "Ekonomi"
}//Rache Code , Telif Hakları Vardır, https://discord.gg/mMMpTt5

exports.help = {
    name: 'günlükpara',
    description: 'Günlük para alırsınız.',
    usage: 'günlükpara'
}