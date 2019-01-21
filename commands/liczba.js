const Discord = require("discord.js");

module.exports.run = async(bot, message, args) =>{
  var odpowiedzi = ["1","2","3","4","5","6","7","8","9","10"]
  var opcje = odpowiedzi[Math.floor(Math.random()*odpowiedzi.length)];
  let embed = new Discord.RichEmbed()
  .addField("wylosowana liczba", `${opcje}`)
}

module.exports.help = {
  name: "liczba"
}
