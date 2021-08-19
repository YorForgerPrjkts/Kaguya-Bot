const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const Color = `RANDOM`;

module.exports = {
  name: "ban",
  category: "moderation",
  description: "Ban A Member!",
  usage: "Ban <Mention Member>",
  run: async (client, message, args) => {
    //Start

    if (!message.member.hasPermission("BAN_MEMBERS"))
      return message.channel.send(
        `<a:3360_Qoobee_CryRun:764925057448935445> You Don't Have Permission To Use This Command!`
      );

    let Member = message.mentions.users.first();

    if (!Member)
      return message.channel.send(
        `<a:3886_BAN:764925320238333983> Please Mention A Member That You Want To Ban!`
      );

    if (!message.guild.members.cache.get(Member.id))
      return message.channel.send(`<a:3886_BAN:764925320238333983> Please Mention A Valid Member!`);


    if (Member.id === message.author.id)
      return message.channel.send(`<a:3360_Qoobee_CryRun:764925057448935445> You Can't Ban Your Self!`);

    if (Member.id === client.user.id)
      return message.channel.send(`<a:3360_Qoobee_CryRun:764925057448935445> Please Don't Ban Me <a:3360_Qoobee_CryRun:764925057448935445>`);

    if (Member.id === message.guild.owner.user.id)
      return message.channel.send(`<a:3360_Qoobee_CryRun:764925057448935445> You Can't Ban Owner Of Server!`);

    let Reason = args.slice(1).join(" ");

    let User = message.guild.member(Member);
    
    let BotRole = message.guild.member(message.guild.me).roles.highest.position;
    
    let Role = User.roles.highest.position;
    
    let UserRole = message.member.roles.highest.position;
    
    if (UserRole <= Role) return message.channel.send(`<a:3886_BAN:764925320238333983> I Can't Ban That Member Because That Member Has Role Position Is Higher Than My Role Or Same Role As You!`);
    
    if (BotRole <= Role) return message.channel.send(`<a:3886_BAN:764925320238333983> I Can't Ban That Member Because That Member Has Role Position Is Higher Than My Role Or Same Role As Me!`);
    
    if (!User.bannable) return message.channel.send(`<a:3886_BAN:764925320238333983> I Can't Ban That Member!`)

    try {
      setTimeout(function() {
        User.ban({ reason: `${Reason || "No Reason Provided!"}` });
      }, 2000);
      let embed = new Discord.MessageEmbed()
        .setColor(Color)
        .setTitle(`<a:1914_byee:764924590131511338> Member Banned!`)
        .addField(`Moderator`, `${message.author.tag} (${message.author.id}`)
        .addField(`Banned Member`, `${Member.tag} (${Member.id})`)
        .addField(`Reason`, `${Reason || "No Reason Provided!"}`)
        .setFooter(`Requested by ${message.author.username}`)
        .setTimestamp();
      if (User && Member.bot === false)
        Member.send(
          `<a:1914_byee:764924590131511338> You Have Been Banned From **${message.guild.name}** For ${Reason ||
            "No Reason Provided!"}`
        );
      message.channel.send(embed);
    } catch (error) {
      return message.channel
        .send(
          `<a:3886_BAN:764925320238333983> I Can't Ban That Member Maybe Member Has Higher Role Than Me & My Role Is Lower Than Member!`
        )
        .then(() => console.log(error));
    }

    //End
  }
};