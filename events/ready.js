const db = require("quick.db")

module.exports.run = (client) => {
  console.log("CoolBotBlat is redi")
  client.user.setActivity(db.get(`status`)); 
}