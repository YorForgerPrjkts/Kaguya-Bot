const Discord = require("discord.js");
const canvacord = require("canvacord");

module.exports = {
  name: "jail",
  category: "🖼 | Image Manipulation",
  usage: "jail <mention user>",
  description: "Get jail image manipulation",
  run: async (bot, message, args) => {
    let avatar = message.mentions.users.first()
      ? message.mentions.users
          .first()
          .displayAvatarURL({ size: 512, format: "png" })
      : message.author.displayAvatarURL({ size: 512, format: "png" });

    let image = await canvacord.jail(avatar);
    let attachment = new Discord.MessageAttachment(image, "jail.png");
    message.channel.send(attachment);
  }
};
