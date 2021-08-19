const Discord = require('discord.js');
const superagent = require('superagent');


module.exports = {
   
        name: "otakudesu",
        aliases: ["otakudesu"],
        category: "anime",
        description: "anime search",
    run: async (bot, message, args) => {
        try {
            superagent
              .get(`https://otakudesu-rest-api.fakhrijuanda12.repl.co/api/search/${query}`)
              .end((err, response) => {
                const embed = new Discord.MessageEmbed()
                .setTitle("IYAH")
                  .setDescription(message.author.toString())
                  .setImage(response.body.url)
                  .setColor("BLACK")
              .setTimestamp()
                  .setFooter('© Achan/Fakhri');
                message.channel.send(embed);
              })
              .catch(err =>
                message.channel.send({
                  embed: {
                    color: "BLACK",
                    description: "Something went wrong... :cry:"
                  }
                })
              );
            }catch(err){
              console.log(err)
            }
    }
}