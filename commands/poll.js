const Discord = require('discord.js');

exports.run = async (client, message, args, tools) => {

  if(!message.member.roles.find(r => r.name === 'Polls')) return message.channel.send('Ta komenda wymaga rangi: Polls');
  
  if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Ta komenda wymaga permisii: Zarządzanie wiadomościami');
  
  if(!args[0]) return message.channel.send('Poprawne użycie: ab!poll <pytanie>');
  
  const embed = new Discord.MessageEmbed()
      .setColor('#9842f4')
      .setFooter('Kliknij reakcje aby zgłosować')
      .setDescription(args.join(' '))
      .setTitle(Stworzone przez ${message.author.username}');
      
  let msg = await message.channel.send(embed);
  
  await msg.react('✅');
  await msg.react('❌');
  
  message.delete({timeout: 1000});
  
}
