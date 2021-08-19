const discord = require("discord.js");
module.exports = {
  name: "screenshot",
  category: "info",
  aliases: ["ss"],
  description: "Screenshot the webpage",
  run: async (bot, message, args) => {
    
    let auth = "" //Put yours Thum.io API
    let url = args[0]
    let image  = "https://image.thum.io/get/width/1920/crop/675/auth/" + auth + "/" + url
    if(!url) return message.channel.send(`Please specify the url`)
    message.channel.send(image)
   
    
    }
};