const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  let avatar = message.author.displayAvatarURL;
  let embed = new Discord.RichEmbed()
  .setDescription(`Info o użytkowniku ${message.author.username}`)
  .setColor("#f4e242")
  .addField("Nazwa użytkownika", message.author.username)
  .addField("Czy jest botem", message.author.bot)
  .addField("TAG", message.author.tag)
  .addField("ID", message.author.id)
  .addField("ID ostatnie wiadomości", message.author.lastMessageID)
  .addField("Discriminator", message.author.discriminator)
  .addField("Kanał DM", message.author.dmChannel || "Brak")
  .addField("Notatka", message.author.note || "Brak notatki")
  message.channel.send(embed);
}

module.exports.help = {
  name:"uzytkownik"
}
