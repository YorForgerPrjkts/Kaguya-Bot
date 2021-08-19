const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "helptranslate",
  category: "translate",
  description: "description",
  run: async (client, message, args) => {
  let embed = new MessageEmbed()
 .setThumbnail(client.user.displayAvatarURL({format: 'png', dynamic: true})+"?size=2048")
 .setTitle("Support")
 .setDescription("Language Support")
 .addField('Language Support', '**[Click Here](https://github.com/fskhrijuanda/League-Support/blob/main/readme.md )**')
 .setColor("RANDOM")
 .setFooter("© Achan/Fakhri")
 .setTimestamp()
message.channel.send(embed)
}
};