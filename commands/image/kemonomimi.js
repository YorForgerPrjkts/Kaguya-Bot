const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = {
  name: "kemonomimi",
  aliases: ["km"],
  category: "🖼️Image",
  description: "kemonomimi",
  usage: "[command]",
  run: async (client, message, args) => {
  //command

        async function work() {
        let owo = (await neko.sfw.kemonomimi());

        const animalears = new Discord.MessageEmbed()
        .setTitle("Kemonomimi image")
        .setImage(owo.url)
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setThumbnail(client.user.displayAvatarURL())
        .setColor(`#FF00A0`)
        .setURL(owo.url);
        message.channel.send(animalears);

}

      work();
}
                };