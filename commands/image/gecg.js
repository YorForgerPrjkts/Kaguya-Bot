const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = {
  name: "gecg",
  aliases: [""],
  category: "🖼️Image",
  description: "GECG Image",
  usage: "[command]",
  run: async (client, message, args) => {
  //command

        async function work() {
        let owo = (await neko.sfw.gecg());

        const wtf = new Discord.MessageEmbed()
        .setTitle("GECG image")
        .setImage(owo.url)
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setThumbnail(client.user.displayAvatarURL())
        .setColor(`#FF00A0`)
        .setURL(owo.url);
        message.channel.send(wtf);

}

      work();
}
                };