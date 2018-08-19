const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  const time = setInterval(function() {
    let powod = args.join(" ")
    let embed = new Discord.RichEmbed()
    .setDescription("Timer")
    .setThumbnail("https://c.mql5.com/31/27/auto-close-timer-ultimate-logo-200x200-7466.png")
    .addField(`${powod}`)
    message.channel.send(embed);
  }, 50000);
}
module.exports.help = {
  name:"timer"
}
