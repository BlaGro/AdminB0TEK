const Discord = require("discord.js");

module.exports.run =  async(bot, message, args) => {
  let avatar = message.author.displayAvatarURL;
  let embed = new Discord.RichEmbed()
  .setDescription("Twój avatar")
  .setImage(avatar)
  message.channel.send(embed);
}

module.exports.help = {
  name:"awatar"
}
