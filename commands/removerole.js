const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if (!message.member.hasPermission("MANAGE_ROLES")) return errors.noPerms(message, "MANAGE_ROLES");
  if(args[0] == "help"){
    message.reply("Usage: !removerole <user> <role>");
    return;
  }
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("Nie można znaleźć tego użytkownika.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Określ role!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Nie można znaleźć tej roli.");

  if(!rMember.roles.has(gRole.id)) return message.reply("Nie posiadasz tej roli");
  await(rMember.removeRole(gRole.id));

  try{
    await rMember.send(`RIP, zostawmy znicz, odebrano ci role ${gRole.name}.`)
  }catch(e){
    message.channel.send(`Znicz dla <@${rMember.id}>, zabrano mu role ${gRole.name}. Próbuje napisać na DM ale wyłączono tą opcje.`)
  }
}

module.exports.help = {
  name: "removerole"
}
