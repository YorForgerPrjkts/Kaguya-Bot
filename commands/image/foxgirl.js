const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = {
  name: "foxgirl",
  aliases: [""],
  category: "🖼️Image",
  description: "fox girls image",
  usage: "[command]",
  run: async (client, message, args) => {
  //command

        async function work() {
        let owo = (await neko.sfw.foxGirl());

        const foxGirl = new Discord.MessageEmbed()
        .setTitle("Fox Girls")
        .setImage(owo.url)
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setThumbnail(client.user.displayAvatarURL())
        .setColor(`#FF00A0`)
        .setURL(owo.url);
        message.channel.send(foxGirl);

}

      work();
}
                };