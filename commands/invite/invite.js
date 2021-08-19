const discord = require("discord.js");

module.exports = {
name: "invite",
  description: "Get the information about the bot",
  category: "invite",
  usage: "invite",
  run: async (bot, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle("**__Invite Me!__ <a:blobshoot:764923422827610152>**")
        .setColor(`#RANDOM`)
        .addField("**Invite Link on Matrix Bots**", '[Click Here!](https://www.matrixbots.xyz/bots/680297296348315649)', true)
        .addField("**Invite Link on Top.gg**", '[Click Here!](https://top.gg/bot/680297296348315649)', true)
        .addField("**My Support Server**", '[Click Here!](blm jadi anying)', true)
        .setDescription('**A Multipurpose Bot which is very easy to use!**')
        .setFooter("Made With ❤️")
    
    
    message.channel.send(embed)
    
    
    
  }

}