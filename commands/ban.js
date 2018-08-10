const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    message.delete();
    if(!message.member.hasPermission("BAN_MEMBERS")) return errors.noPerms(message, "BAN_MEMBERS");
    if(args[0] == "help"){
      message.reply("Usage: !ban <gracz> <powód>");
      return;
    }
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!bUser) return errors.cantfindUser(message.channel);
    if(bUser.id === bot.user.id) return errors.botuser(message); 
    let bReason = args.join(" ").slice(22);
    if(!bReason) return errors.noReason(message.channel);
    if(bUser.hasPermission("MANAGE_MESSAGES")) return errors.equalPerms(message, bUser, "MANAGE_MESSAGES");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("~Ban~")
    .setColor("#bc0000")
    .addField("Zbanowany użytkownik", `${bUser} z ID ${bUser.id}`)
    .addField("Zbanowany przez", `<@${message.author.id}> z ID ${message.author.id}`)
    .addField("Zbanowany w", message.channel)
    .addField("Czas", message.createdAt.format(DD.MM.YYYY))
    .addField("Powód", bReason);

    let incidentchannel = message.guild.channels.find(`name`, "bany");
    if(!incidentchannel) return message.channel.send("Nie znaleziono kanału #bany.");

    message.guild.member(bUser).ban(bReason);
    incidentchannel.send(banEmbed);
}

module.exports.help = {
  name:"ban"
}
