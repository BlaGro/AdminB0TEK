const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  let ikonka = message.guild.iconURL
  let embed = new Discord.RichEmbed()
  .setDescription("Info o serwerze")
  .setColor("#4286f4")
  .setThumbnail(ikonka)
  .addField("Właściciel", message.guild.owner)
  .addField("Ilość użytkowników", message.guild.memberCount)
  .addField("Jesteś na V", message.guild.name)
  .addField("Region", message.guild.region)
  .addField("Lewel weryfikacji", message.guild.verificationLevel)
  .addField("Kanał AFK", message.guild.afkChannel || "Brak")
  .addField("Rola domyślna", message.guild.deafaultRole || "Brak")
  .addField("Domyślny kanał", message.guild.deafaultChannel || "Brak")
  message.channel.send(embed);
}

module.exports.help = {
  name:"serwer"
}
