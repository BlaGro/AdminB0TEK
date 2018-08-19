const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  let role = message.mentions.roles.first() || message.guild.roles.get(args[0]);
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("No can do pal!");
  const time = setInterval(function() {
    .then(updated => console.log(`Zmieniono kolor rangi na ${role.color}`))
    .catch(console.error);
    role.setColor("#f28b41")
    .then(updated => console.log(`Zmieniono kolor rangi na ${role.color}`))
    .catch(console.error);
    role.setColor("#f442dc")
    .then(updated => console.log(`Zmieniono kolor rangi na ${role.color}`))
    .catch(console.error);
    return;
  }, 5000)
}
module.exports.help = {
  name:"kolorki"
}
