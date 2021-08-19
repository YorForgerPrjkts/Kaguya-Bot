const Discord = require("discord.js");
//const botconfig = require("../config.json");
const db = require("quick.db");

module.exports = {
  name: "afk",
  category: "info",
  usage: "afk [reason]",
  description: "Set user to afk mode",
  run: async (bot, message, args) => {
    const status = new db.table("AFKs");
    let afk = await status.fetch(message.author.id);
    const embed = new Discord.MessageEmbed().setColor("RANDOM");
    const afterAfk = message.member.displayName.replace(afk, "");
    let member =
      message.author || message.member || message.mentions.members.first();

    if (!afk) {
      //   message.member.setNickname(`[AFK] ${message.author.username}`);
      message.member.setNickname(`[AFK] ${message.member.displayName}`);
      embed.setAuthor(`${message.author.username} is now AFK`);
      embed.setThumbnail(
        message.author.displayAvatarURL({ format: "png", dynamic: true })
      );
      embed.addField(`Reason`, ` ${args.join(" ") ? args.join(" ") : "AFK"}`);
      embed.setFooter("AFK since ");
      embed.setTimestamp();
      status.set(message.author.id, args.join(" ") || `AFK`);
    } else {
      message.member.setNickname(afterAfk);
      embed.setDescription("You are no longer AFK.");
      status.delete(message.author.id);
    }

    message.channel.send(embed);
  }
};