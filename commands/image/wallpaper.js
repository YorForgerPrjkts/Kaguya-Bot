const fetch = require("node-fetch");
const cheerio = require('cheerio');
const discord = require("discord.js");

module.exports = {
  name: "wallpaper",
  category: "🖼️Image",
  usage: "wallpaper",
  description: "Free Wallpaper 1000+",
 run: async (client, message, args) => {
    let random = Math.floor(Math.random() * 107)
    let text = await fetch(`https://hdqwalls.com/category/anime-wallpapers/page/${random}`, { method: "GET" })
    text = await text.text()
    let $ = cheerio.load(text)
    let images = []

    $('img[class="thumbnail img-responsive custom_width"]').each(function(i, elem) {
      images.push($(this).attr('src'));
    });



    let limit = images.length
    let pg = 0;
    let embed = new discord.MessageEmbed()
      .setColor("#FF69B4")
      .setImage(images[0].replace("/thumb", ""))

    const msg = await message.channel.send(embed);

    msg.react("⬅️");
    await msg.react("➡️");

    const collector = msg.createReactionCollector(
      // only collect left and right arrow reactions from the message author
      (reaction, user) =>
        ["⬅️", "➡️"].includes(reaction.emoji.name) &&
        user.id === message.author.id,
      // time out after a minute
      { time: 120000 }
    );

    collector.on("collect", reaction => {

      reaction.users.remove(message.author).then(async () => {
        if (reaction.emoji.name === "➡️") {


          if (!images[pg + 1]) {
            pg = pg
          } else {
            pg = pg + 1
          }
          embed = new discord.MessageEmbed()
            .setColor("#FF69B4")
            .setImage(images[pg].replace("/thumb", ""))
          msg.edit(embed)
          msg.react("⬅️");
          await msg.react("➡️");
        }

        else if (reaction.emoji.name === "⬅️") {


          if (!images[pg - 1]) {

            pg = pg
          } else {
            pg = pg - 1
          }

          embed = new discord.MessageEmbed()
            .setColor("#FF69B4")
            .setImage(images[pg].replace("/thumb", ""))
          msg.edit(embed)

          msg.react("⬅️");
          await msg.react("➡️");
        }
      })

    })

      collector.on('end', collected => {
      if (msg) {
        msg.reactions.removeAll()
      }
    });

  }
}
