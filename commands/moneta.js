const Discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{
  var replies = ["Orzeł, Reszka"]
  var options = replies[Math.floor(Math.random()*replies.length)];
  let embed = new Discord.RichEmbed()
  .addField("Wynik", `${options}`)
  message.channel.send(embed);
}

module.exports.help = {
  name: "moneta"
}
