const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const axios = require("axios");
const usedCommand = new Set();

module.exports = {
  name: "trash",
  category: "🖼 | Image Manipulation",
  usage: "trash <mention user>",
  description: "Put yourself to trash bin",
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
      const url = `https://api.no-api-key.com/api/v1/trash?image=${user.user.displayAvatarURL(
        { format: "png" }
      )}`;

      let response, data;
      try {
        response = await axios.get(url);
        data = response.data;
      } catch (e) {
        return message.channel.send(`An error occured!`);
      }

      const embed = new MessageEmbed().setImage(data.url).setColor("RANDOM");

      await message.channel.send(embed);
      usedCommand.add(message.author.id);
      setTimeout(() => {
        usedCommand.delete(message.author.id);
      }, 10000); //You can set the ammount of the cooldown here! Its Formated to Miliseconds.
    }
  }
};
