const Discord = require("discord.js");
const canvacord = require("canvacord");

module.exports = {
  name: "spank",
  category: "🖼 | Image Manipulation",
  usage: "spank <mention user>",
  description: "Get spannk image manipulation",
  run: async (bot, message, args) => {
    let user = message.mentions.members.first();
    if (!user) return message.channel.send("Please mention someone");
    let avatar1 = message.author.displayAvatarURL({ size: 512, format: "png" });
    let avatar2 = message.mentions.users
      .first()
      .displayAvatarURL({ size: 512, format: "png" });

    let image = await canvacord.spank(avatar1, avatar2);
    let attachment = new Discord.MessageAttachment(image, "spank.png");
    message.channel.send(attachment);
  }
};
