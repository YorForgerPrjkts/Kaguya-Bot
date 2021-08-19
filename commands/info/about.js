const discord = require("discord.js");

module.exports = {
name: "about",
  description: "Get the information about the bot",
  category: "info",
  usage: "about",
  run: async (bot, message, args) => {
    
    let embed = new discord.MessageEmbed()
      .addField("Nama", "KaguyaBot")
      .addField("Tanggal Lahir", "15 Desember")
      .addField("Pemilik", "A-Chan#6390")
      .addField("Bahasa", "Discord.JS dengan NodeJS dengan bahasa indonesia dan Inggris")
      .addField("Motto", "Kalau dia bisa kenapa harus saya?")
      .setFooter("Versi 1.0.0| Dev By A-Chan (Fakhri)")
      .setAuthor(message.guild.name, message.guild.iconURL())
    
    
    message.channel.send(embed)
    
    
    
  }

}