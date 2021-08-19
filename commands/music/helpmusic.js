const discord = require("discord.js");

module.exports = {
name: "helpmusic",
  description: "Get the information about the music",
  category: "music",
  usage: "helpmusic",
  run: async (bot, message, args) => {
    
    let embed = new discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(bot.user.avatarURL)
        .setTitle(`Help Commands`)
        .addField(`${prefix}play <music/url>`, 'Plays musics!')
        .addField(`${prefix}search <music>`, 'Search for top 10 results of musics on youtube')
        .addField(`${prefix}skip`, 'Skip the music to the next in the queue (3 votes needed if you have no permissions)')
        .addField(`${prefix}volume [volume]`, 'Shows the current volume of if entered arguments, changes volume')
        .addField(`${prefix}pause`, 'Pauses the music playback')
        .addField(`${prefix}resume`,'Resumes the music playback')
        .addField(`${prefix}stop`, 'Stops the music playback, and bot leaves the voice channel')
        .addField(`${prefix}reload <command>`, 'Reloads a specified command');

    message.channel.send(embed);
  }

}