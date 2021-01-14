const Discord = require('discord.js')
const db = require('quick.db');


exports.run = async (client, message, args) => {
 if (!args[0]) return message.reply(`Rache Markete Hoşgeldin! \n\n\n:bike: **Bisiklet[150]**, \n:motorcycle: **Motosiklet[2500]**, \n:blue_car: **Araba[15000]**,\n:airplane: **Uçak[100000]** `)

  if (args[0] === 'bisiklet') {
    let para = await db.get(`bakiyecdare-${message.author.id}`) 
    let fiyatcık = 150 
    
    if (para < fiyatcık) return message.reply('Yeterli Paran Yok!')
    
    db.set(`ìştebişiler_${message.author.id}`, "aktifdir")
    db.add(`bakiyecdare-${message.author.id}`, -fiyatcık)
    
    return message.reply(`Ürünü Başarıyla Aldınız`)
  }


  if (args[0] === 'araba') {
    let para = await db.get(`bakiyecdare-${message.author.id}`) 
    let fiyatcık = 15000 
    
    if (para < fiyatcık) return message.reply('Yeterli Paran Yok!')
    
    db.set(`ìştebişiler_${message.author.id}`, "aktifdir")
    db.add(`bakiyecdare-${message.author.id}`, -fiyatcık)
    
    return message.reply(`Ürünü Başarıyla Aldınız`)
  }

  if (args[0] === 'motosiklet') {
    let para = await db.get(`bakiyecdare-${message.author.id}`) 
    let fiyatcık = 2500 
    
    if (para < fiyatcık) return message.reply('Yeterli Paran Yok!')
    
    db.set(`ìştebişiler_${message.author.id}`, "aktifdir")
    db.add(`bakiyecdare-${message.author.id}`, -fiyatcık)
    
    return message.reply(`Ürünü Başarıyla Aldınız`)
  }
  if (args[0] === 'uçak') {
    let para = await db.get(`bakiyecdare-${message.author.id}`) 
    let fiyatcık = 100000 
    
    if (para < fiyatcık) return message.reply('Yeterli Paran Yok!')
    
    db.set(`ìştebişiler_${message.author.id}`, "aktifdir")
    db.add(`bakiyecdare-${message.author.id}`, -fiyatcık)
    
    return message.reply(`Ürünü Başarıyla Aldınız`)
  }


  
}
exports.conf = {
  
    aliases: [],
    permLevel: 0
}

exports.help = {
    name: 'market'
}