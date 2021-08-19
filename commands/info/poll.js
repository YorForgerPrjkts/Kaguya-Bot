const Discord = require("discord.js");
module.exports = {
  name: "poll",
  description: "Create a simple yes or no poll",
  category: "info",
  run: async (bot, message, args) => {
    if (!message.member.permissions.has("ADMINISTRATOR"))
      return message.channel.send(
        `You do not have admin, ${message.author.username}`
      );
    const channel =
      message.mentions.channels.first() ||
      message.guild.channels.cache.get(args[0]);
    if (!channel) {
      return message.channel.send(
        `You did not mention / give the id of your channel!`
      );
    }
    let question = message.content
      .split(`${bot.prefix}poll ${channel} `)
      .join("");
    if (!question)
      return message.channel.send(`You did not specify your question!`);
    const Embed = new Discord.MessageEmbed()
      .setTitle(`New poll!`)
      .setDescription(`${question}`)
      .setFooter(`${message.author.username} created this poll.`)
      .setColor(`RANDOM`);
    let msg = await bot.channels.cache.get(channel.id).send(Embed);
    await msg.react("👍");
    await msg.react("👎");
  },
};