const client = require('nekos.life');
const Discord = require('discord.js')
const neko = new client();

module.exports = {
  name: "2dero",
  aliases: ["ero"],
  category: "🔞NSFW",
  usage: "[command]",
  run: async (client, message, args) => {
  //command

  //Checks channel for nsfw
  var errMessage = "Channel Ini Tidak Mengaktifkan `NSFW`";
  if (!message.channel.nsfw) {
      message.react('🔞');

      return message.reply(errMessage)
      .then(msg => {
      msg.delete({ timeout: 3000 })
      })
      
  }

        async function work() {
        let owo = (await neko.nsfw.ero());

        const ero = new Discord.MessageEmbed()
        .setTitle("Erotic image")
        .setImage(owo.url)
        .setColor(`#FF0000`)
        .setThumbnail(client.user.displayAvatarURL())
        .setFooter(client.user.username, client.user.displayAvatarURL())
        .setURL(owo.url);
        message.channel.send(ero);
          message.delete();

}

      work();
}
                };