const randomPuppy = require('random-puppy');
const request = require('node-fetch');
const fs = require("fs")

const Discord = require('discord.js');
const booru = require('booru');

module.exports = {
    name: "2ddanbooru",
    category: "🔞NSFW",
  aliases: ["2db"],
  description: "Searches danbooru image board",
  run: async (client, message, args, level) => {
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

  if (message.content.toUpperCase().includes('LOLI') || message.content.toUpperCase().includes('GORE')) return message.channel.send('Channel Ini Tidak Mengizinkan `NSFW`');

  var query = message.content.split(/\s+/g).slice(1).join(" ");
  booru.search('db', [query], {random: true })
      .then(booru.commonfy)
      .then(images => {
          for (let image of images) {
              const embed = new Discord.MessageEmbed()
              .setTitle("Danbooru Images `note : ini random ya:)`")
              .setImage(image.common.file_url)
              .setColor('#FF0000')
              .setThumbnail(client.user.displayAvatarURL())
              .setFooter(`Tags: danbooru ${query}`)
              .setURL(image.common.file_url);
          return message.channel.send({ embed });
            message.delete();
          }

      }).catch(err => {
          if (err.name === 'booruError') {
              return message.channel.send(`Terjadi kesalahan **${query}**!`);
          } else {
              return message.channel.send(`Terjadi Masalah **${query}**!`);
          }
})
  }
  };