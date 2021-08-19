const Discord = require("discord.js");

module.exports = {
  name: "date",
  category: "info",
  description: "Get today's date",
  run: async (bot, message, args) => {
    let date = new Date();

    let day = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    let days = day[date.getDay()];

    let month = [
      "Januari",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    let months = month[date.getMonth()];
    const embed = new Discord.MessageEmbed()
      .setColor("RANDOM")
      .setTitle("Date 📅")
      .setDescription(
        `${days}, ${months} ${date.getDate()}, ${date.getFullYear()}`
      )
      .setTimestamp();
    message.channel.send(embed);
  }
};
