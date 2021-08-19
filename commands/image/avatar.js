const client = require('nekos.life');

const Discord = require('discord.js')

const neko = new client();

module.exports = {

  name: "avatarimg",

  aliases: ["ai"],

  category: "🖼️Image",

  description: "avatar images free",

  usage: "[command]",

  run: async (client, message, args) => {

  //command

        async function work() {

        let owo = (await neko.sfw.avatar());

        const avatar = new Discord.MessageEmbed()

        .setTitle("Free Avatar Images")

        .setImage(owo.url)

        .setFooter(client.user.username, client.user.displayAvatarURL())

        .setThumbnail(client.user.displayAvatarURL())

        .setColor(`#FF00A0`)

        .setURL(owo.url);

        message.channel.send(avatar);

}

      work();

}

                };