const Discord =  require('discord.js');
module.exports = {
    name: "avatar",
    usage: "avatar <user>",
    description: "get a users avatar",
    category: "info",
    run: (client, message, args) => {
        let avatar = message.mentions.users.size ? message.mentions.users.first().avatarURL({ format: 'png', dynamic: true, size: 2048 }) : message.author.avatarURL({ format: 'png', dynamic: true, size: 2048 });
        if (message.mentions.users.size > 0) {
            const embed = new Discord.MessageEmbed()
                .setColor(0xFFFF00)
                .setTitle(`Avatar for ${message.mentions.users.first().username}:`)
                .setImage(`${avatar}`)
            message.channel.send({ embed });
        } else {
            const embed = new Discord.MessageEmbed()
                .setColor(0xFFFF00)
                .setTitle(`Avatar for ${message.author.username}:`)
                .setImage(`${avatar + "?size=2048"}`)
                .setFooter(client.user.username, client.user.displayAvatarURL());
            message.channel.send({ embed });
        }
    }

    
}