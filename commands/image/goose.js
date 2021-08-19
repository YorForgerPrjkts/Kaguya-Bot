const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = {
  name: "goose",
  aliases: [""],
  category: "🖼️Image",
  description: "goose image",
  usage: "[command]",
  run: async (client, message, args) => {
  //command

        async function work() {
        let owo = (await neko.sfw.goose());

        const goose = new Discord.MessageEmbed()
        .setTitle("Goose Image")
        .setImage(owo.url)
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setThumbnail(client.user.displayAvatarURL())
        .setColor(`#FF00A0`)
        .setURL(owo.url);
        message.channel.send(goose);

}

      work();
}
                };