const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {

    if(!message.member.roles.find(r => r.name === 'Moderator')) return message.channel.send('Ta komenda wymaga rangi: Moderator');

    if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Ta komenda wymaga permissi: Zarządzanie wiadomościami');

    if(!args[0]) return message.channel.send('Poprawne użycie: ab!poll <pytanie>');

    const embed = new Discord.MessageEmbed()
    .setColor('#9842f4')
    .setFooter('Kliknij reakcje aby zagłosować')
    .setDescription(args.join(' '))
    .setTitle('Stworzone przez ${message.author.username}');

    let msg = await message.channel.send(embed);
    await msg.react('✅')
    await msg.react('❌')
    message.delete({timeout: 1000});
}

module.exports.help = {
  name: "polls"
}
