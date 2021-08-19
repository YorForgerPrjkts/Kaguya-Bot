const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = {
  name: "lizard",
  aliases: [""],
  category: "🖼️Image",
  description: "Lizard Images",
  usage: "[command]",
  run: async (client, message, args) => {
  //command

        async function work() {
        let owo = (await neko.sfw.lizard());

        const lizard = new Discord.MessageEmbed()
        .setTitle("Lizard Image")
        .setImage(owo.url)
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setThumbnail(client.user.displayAvatarURL())
        .setColor(`#FF00A0`)
        .setURL(owo.url);
        message.channel.send(lizard);

}

      work();
}
                };