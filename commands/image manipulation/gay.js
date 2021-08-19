const Discord = require("discord.js");
const canvacord = require("canvacord");

module.exports = {
  name: "gay",
  category: "🖼 | Image Manipulation",
  usage: "gay <mention user>",
  description: "Get gay image manipulation",
  run: async (bot, message, args) => {
    let avatar = message.mentions.users.first()
      ? message.mentions.users
          .first()
          .displayAvatarURL({ size: 512, format: "png" })
      : message.author.displayAvatarURL({ size: 512, format: "png" });

    let image = await canvacord.gay(avatar);
    let attachment = new Discord.MessageAttachment(image, "rainbow.png");
    message.channel.send(attachment);
  }
};
