const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "trump",
  category: "🖼 | Image Manipulation",
  usage: "trump <text>",
  description: "trump tweet image manipulation",
  run: async (bot, message, args) => {
    try {
      const text = args.join(" ");
      if (!text) {
        return message.channel
          .send("Please provide some text")
          .then(i => i.delete({ timeout: 5000 }));
      }
      const url = `https://api.no-api-key.com/api/v2/trump?message=`;
      const encoded = url + encodeURIComponent(text);
      const embed = new MessageEmbed().setImage(encoded).setColor("RANDOM");
      await message.channel.send(embed);
    } catch (e) {
      console.log(e);
    }
  }
};
