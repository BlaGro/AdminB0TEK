const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {

  if (!message.member.roles.find(r => r.name === "Administracja")) return message.channel.send("Nie posiadasz roli: Administracja");
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Nie masz permisji do użycia komendy ``głosowanie``");

  if (!args[0]) return message.channel.send("Prawidłowe użycie to: <głosowanie [pytanie]");

  const embed = new Discord.RichEmbed()
    .setColor(0xffffff)
    .setTitle("Głosowanie rozpoczęte!")
    .setDescription(`**${args.join(" ")}**`)
    .setFooter(`Głosowanie utworzone przez: ${message.author.username}`, `${message.author.avatarURL}`);

  let msg = await message.channel.send(embed);

  await msg.react("✅");
  await msg.react("❎");

  message.delete({timeout: 1000});
};
module.exports.help = {
  name: "poll"
};
