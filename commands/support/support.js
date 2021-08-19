const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "support",
  category: "support/donation",
  description: "description",
  run: async (client, message, args) => {
  let embed = new MessageEmbed()
 .setThumbnail(client.user.displayAvatarURL({format: 'png', dynamic: true})+"?size=2048")
 .setTitle("Support")
 .setDescription("Support Achan")
 .addField('Trakteer', '**[Click Here](https://trakteer.id/fakhrijuanda12)**', true)
 .addField('Pateron', '**[Click Here](https://www.patreon.com/Fakhri12)**', true)
 .addField('MatrixBots', '**[Click Here](https://www.matrixbots.xyz/bots/680297296348315649)**')
 .addField('Top.GG', '**[Click Here](https://top.gg/bot/680297296348315649/invite/)**')
 .setColor("RANDOM")
 .setFooter("© Achan/Fakhri")
 .setTimestamp()
message.channel.send(embed)
}
};