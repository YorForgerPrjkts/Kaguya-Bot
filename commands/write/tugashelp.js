const discord = require("discord.js");

module.exports = {
name: "helpwrite",
  description: "Get the information about the write",
  category: "write Bot",
  usage: "helpnulis",
  run: async (bot, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle("write commands")
    .setColor("FFA500")
    .setFooter(`KaguyaBot`)
    .addField("write", 
    '**write commands: coming soon**', true)

    
    message.channel.send(embed)
    
    
    
  }

}