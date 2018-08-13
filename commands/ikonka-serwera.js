const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  let ikona = message.guild.iconURL;
  let embed = new Discord.RichEmbed()
  .setDescription("Ikonka serwera V")
  .setColor("#f44242")
  .setImage(ikona)
  message.channel.send(embed);
}

module.exports.help = {
  name:"ikona-serwera"
}
