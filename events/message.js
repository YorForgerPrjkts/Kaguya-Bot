const db = require("quick.db")
const { addexp } = require("../handlers/xp.js");
const { ownerID, default_prefix } = require("../config.json");
const { badwords } = require("../data.json") 
let cooldown = {}

module.exports.run = async (client, message) => {
  if (message.author.bot) return;
  if (!message.guild) return;

  addexp(message);

  if (!message.member.hasPermission("ADMINISTRATOR")) {



  

  }

  let prefix = db.get(`prefix_${message.guild.id}`);
  if (prefix === null) prefix = default_prefix;

  if (!message.content.startsWith(prefix)) return;

  if (!message.member)
    message.member = await message.guild.members.fetch(message);

  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  let cmdx = db.get(`cmd_${message.guild.id}`)

  if (cmdx) {
    let cmdy = cmdx.find(x => x.name === cmd)
    if (cmdy) message.channel.send(cmdy.responce)
  }

  // Get the command
  let command = client.commands.get(cmd);
  // If none is found, try to find it by alias
  if (!command) command = client.commands.get(client.aliases.get(cmd));


  if (!command) return;
  
   const activities_list = [
    "With ItzDevil", 
    "Ur Messages",
    `${client.guilds.cache.size} Servers`, 
    "Music",
    "your commands",
    "servers"
    ];
 const type_list = [
   "PLAYING",
   "WATCHING",
   "WATCHING",
   "LISTENING",
   "LISTENING",
   "PLAYING",
];
    setInterval(() => {
      const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); 
      client.user.setActivity(activities_list[index], {type: type_list[index]}); 
  }, 10000);

  //-------------------------------------------- P E R M I S S I O N -------------------------------------------



  if (command.botPermission) {
    let neededPerms = []

    command.botPermission.forEach(p => {
      if (!message.guild.me.hasPermission(p)) neededPerms.push("`" + p + "`")
    })

    if (neededPerms.length) return message.channel.send(`I need ${neededPerms.join(", ")} permission(s) to execute the command!`)
  } else if (command.authorPermission) {
    let neededPerms = []


    command.authorPermission.forEach(p => {
      if (!message.member.hasPermission(p)) neededPerms.push("`" + p + "`")
    })

    if (neededPerms.length) return message.channel.send(`You need ${neededPerms.join(", ")} permission(s) to execute the command!`)
  }

  // ---------------------------------------------O W N E R ----------------------------------------------------------

  if (command.ownerOnly) {
    if (message.author.id !== ownerID) return message.channel.send("This command can only be use by owner :C")
  }

  //------------------------------------------------------COOLDOWN SYSTEM---------------------------------------------

  let uCooldown = cooldown[message.author.id];

  if (!uCooldown) {
    cooldown[message.author.id] = {}
    uCooldown = cooldown[message.author.id]
  }

  let time = uCooldown[command.name] || 0

  if (time && (time > Date.now())) return message.channel.send(`You can again use this command in ${Math.ceil((time - Date.now()) / 1000)} second(s)`) //YOU CAN USE PARSE MS TO GET BETTER responce

  cooldown[message.author.id][command.name] = Date.now() + command.cooldown;

  //NOW LETS TEST

  //-----------------------------------------------------------------------------------------------------------------

  if (command) command.run(client, message, args);
 






}


//-------------------------------------------- F U N C T I O N ------------------------------------------