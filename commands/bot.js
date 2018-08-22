const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
  let embed = new Discord.RichEmbed()
  .setDescription("Info o bocie")
  .setColor("#0061ff")
  .setThumbnail(bicon)
  .addField("Nazwa bot", bot.user.username)
  .addField("Stworzony", bot.user.createdAt)
  .addField("ID bota", bot.user.id)
  .addField("TAG bota", bot.user.tag)
  message.channel.send(embed);
}

module.exports.help = {
  name:"bot"
}
