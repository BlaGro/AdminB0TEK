const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  let role = message.mentions.roles.first() || message.guild.roles.get(args[0]);
  const time = setInterval(function() {
    if(guild.member.hasPermission("MANAGE_ROLES"))
    role.setColor("#83f442")
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
