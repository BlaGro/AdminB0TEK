const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Nope.");
  if(!args[0]) return message.channel.send("Nie");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`Usunięto ${args[0]} wiadomości.`).then(msg => msg.delete(2000));
});

}

module.exports.help = {
  name: "clear"
}
