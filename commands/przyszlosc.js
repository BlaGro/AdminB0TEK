const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  var zdarzenia = ["Spotka atrakcyjną kobiete","Bedziesz bogaty","Bedziesz mieć długi",'Ktoś przyjdzie do ciebie z ofertą pracy','Znajdziesz na ulicy 500zł','Znajdziesz na ulicy porzuconego zwierzaka domowego','Bedziesz miał sukcesy w pracy']
  var lista = zdarzenia[Math.floor(Math.random()*zdarzenia.length)];
  let embed = new Discord.RichEmbed()
  .addField("Co cie spotka w przyszłości", `${lista}`)
  message.channel.send(embed);
}

module.exports.help = {
  name: "przyszlosc"
}
