const discord = require("discord.js");
const translate = require("@k3rn31p4nic/google-translate-api");
module.exports = {
  name: "translate",
  category: "translate",
  usage: "translate <to language, example spanish> <text, example what this is>\nExample : /translate spanish i love you",
  aliases: ["tr"],
  description: "Translate some text",
  run: async (bot, message, args) => {
    
    translate(args.slice(1).join(" "), { to: args[0] })
      .then(res => {
      
      let translateembed = new discord.MessageEmbed()
      .setColor("RANDOM")
      .addField("Translate result", "```" + res.text + "```")
      .setAuthor(`KaguyaBot`, bot.user.displayAvatarURL({ format: "png", dynamic: true }))
      .setFooter(message.author.tag,message.author.displayAvatarURL({ format: "png", dynamic: true }))
      .setTimestamp()
      
        message.channel.send(translateembed);
      })
      .catch(err => {
        console.error(err);
      });
  }
};
