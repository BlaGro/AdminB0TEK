const Discord = require("discord.js");

module.exports.run =  async(bot, message, args) => {
  let avatar = message.author.displayAvatarURL;
  let osoba = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  let embed = new Discord.RichEmbed()
  .setDescription("Twój avatar")
  .setImage(avatar.osoba)
  message.channel.send(embed);
}

module.exports.help = {
  name:"awatar"
}
