const Discord = require("discord.js");
const errors = require("../utils/errors.js");

module.exports.run = async (bot, message, args) => {

    if(!message.member.hasPermission("KICK_MEMBERS")) return errors.noPerms(message, "KICK_MEMBERS");
    if(args[0] == "help"){
      message.reply("Usage: !kick <gracz> <powód>");
      return;
    }
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return errors.cantfindUser(message.channel);
    let kReason = args.join(" ").slice(22);
    if(kUser.hasPermission("MANAGE_MESSAGES")) return errors.equalPerms(message, kUser, "MANAGE_MESSAGES");

    let kickEmbed = new Discord.RichEmbed()
    .setDescription("~Kick~")
    .setColor("#e56b00")
    .addField("Wyrzucony Użytkownik", `${kUser} z ID ${kUser.id}`)
    .addField("Wyrzucony przez", `<@${message.author.id}> z ID ${message.author.id}`)
    .addField("Wyrzucony w", message.channel)
    .addField("Czas", message.createdAt.format(DD.MM.YYYY))
    .addField("Powód", kReason);

    let kickChannel = message.guild.channels.find(`name`, "kicki");
    if(!kickChannel) return message.channel.send("Nie znaleziono kanału #kicki");

    message.guild.member(kUser).kick(kReason);
    kickChannel.send(kickEmbed);
}

module.exports.help = {
  name:"kick"
}
