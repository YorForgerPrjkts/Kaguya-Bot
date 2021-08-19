const Discord = require("discord.js");
const canvacord = require("canvacord");

module.exports = {
  name: "beautiful",
  category: "🖼 | Image Manipulation",
  usage: "beautiful <mention user>",
  aliases: ["beauty"],
  description: "Send beautiful image manipulation",
  run: async (bot, message, args) => {
    let avatar = message.mentions.users.first()
      ? message.mentions.users
          .first()
          .displayAvatarURL({ size: 512, format: "png" })
      : message.author.displayAvatarURL({ size: 512, format: "png" });

    let image = await canvacord.beautiful(avatar);
    let attachment = new Discord.MessageAttachment(image, "beautiful.png");
    message.channel.send(attachment);
  }
};
