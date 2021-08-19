const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const usedCommand = new Set();

module.exports = {
  name: "smart",
  category: "🖼 | Image Manipulation",
  usage: "smart <mention user>",
  description: "Get smart image manipulation",
  run: async (bot, message, args) => {
    if (usedCommand.has(message.author.id)) {
      message
        .reply("You cannot use the command because of the cooldown.")
        .then(i => i.delete({ timeout: 5000 }));
    } else {
      let user =
        message.mentions.members.first() ||
        message.guild.members.cache.get(args[0]) ||
        message.member ||
        message.author;
      const url = `https://api.no-api-key.com/api/v2/smrt?image=${user.user.displayAvatarURL(
        { format: "png" }
      )}`;

      const embed = new MessageEmbed().setImage(url).setColor("RANDOM");

      await message.channel.send(embed);
      usedCommand.add(message.author.id);
      setTimeout(() => {
        usedCommand.delete(message.author.id);
      }, 10000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
    }
  }
};
