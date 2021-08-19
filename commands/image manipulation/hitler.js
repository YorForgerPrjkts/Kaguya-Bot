const Discord = require("discord.js");
const canvacord = require("canvacord");

module.exports = {
  name: "hitler",
  category: "🖼 | Image Manipulation",
  uage: "hitler <mention user>",
  run: async (bot, message, args) => {
    let avatar = message.mentions.users.first()
      ? message.mentions.users
          .first()
          .displayAvatarURL({ size: 512, format: "png" })
      : message.author.displayAvatarURL({ size: 512, format: "png" });

    let image = await canvacord.hitler(avatar);
    let attachment = new Discord.MessageAttachment(image, "hitler.png");
    message.channel.send(attachment);
  }
};
