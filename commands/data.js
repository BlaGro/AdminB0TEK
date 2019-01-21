const Discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{
  var data = new Date("21-01-2018")
  let embed = new Discord.RichEmbed()
  .addField("Dzisiejsza data", `${data}`)
}

module.exports.help = {
  name: "data"
}
