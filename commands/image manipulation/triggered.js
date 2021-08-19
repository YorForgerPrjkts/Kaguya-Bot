const Discord = require("discord.js");
const canvacord = require("canvacord");

module.exports = {
  name: "triggered",
  category: "🖼 | Image Manipulation",
  usage: "triggered <mention user>",
  description: "Get triggered image maniulation",
  run: async (bot, message, args) => {
    let avatar = message.mentions.users.first()
      ? message.mentions.users
          .first()
          .displayAvatarURL({ size: 512, format: "png" })
      : message.author.displayAvatarURL({ size: 512, format: "png" });

    let image = await canvacord.trigger(avatar);
    let attachment = new Discord.MessageAttachment(image, "triggered.gif");
    message.channel.send(attachment);
  }
};
