const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  let bot = bot.user.avatarURL;
  let embed = new Discord.RichEmbed()
  .setDescription("Ustawienia")
  .setColor("#042966")
  .setThumbnail(bot)
  .addField("Komendy ustawień V", "Pewnie są jakieś (^.^)")
  .addField("ab!timer <tekst>", "Ustaw timer z tekstem jaki ma pisać bot (pisze co 5 minut :)")
}
module.exports.help = {
  name:"ustawienia"
}
