const Discord = require("discord.js")
const canvacord = require("canvacord")

module.exports = {
  name: "wanted",
  category: "🖼 | Image Manipulation",
  usage: "wanted <mention user>",
  description: "Get wanted image manipulation",
  run: async (bot, message, args) => {
    let avatar = message.mentions.users.first() ? message.mentions.users.first().displayAvatarURL({size: 512, format: "png"}) : message.author.displayAvatarURL({size: 512, format: "png"})
    
    let image = await canvacord.wanted(avatar);
    let attachment = new Discord.MessageAttachment(image, "wanted.png")  
    message.channel.send(attachment);
    }
}