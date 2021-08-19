const Discord = require("discord.js")
const canvacord = require("canvacord")

module.exports = {
  name: "rip",
  category: "🖼 | Image Manipulation",
  usage: "rip <mention user>",
  description: "rip image manipulation",
run: async (bot, message, args) => {  

    let avatar = message.mentions.users.first() ? message.mentions.users.first().displayAvatarURL({size: 512, format: "png"}) : message.author.displayAvatarURL({size: 512, format: "png"})
    
    let image = await canvacord.rip(avatar);
    let attachment = new Discord.MessageAttachment(image, "rip.png")  
    message.channel.send(attachment);
    }
}