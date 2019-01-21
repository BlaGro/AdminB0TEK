const Discord = require("discord.js");

module.exports.run = async(bot, message, args) => {
  let embed = new Discord.RichEmbed()
  .setDescription(`${message.author.username} oto lista komend`)
  .setColor("#26ff0")
  .addField("ab!powiedz <tekst>", "Powiedz coś botem")
  .addField("ab!report <gracz> <powód>", "Zgłoś złamanie regulaminu, wymaga kanału #zgloszenia")
  .addField("Cześć", "Bot ci odpowiada" )
  .addField("ab!witam", "Witasz sie z botem")
  .addField("ab!serwer", "Info o serwerze")
  .addField("Ty no nie wiem", "Bot dokańcza za ciebie")
  .addField("xd", "Bot cie uczy jak pisać słowo xd")
  .addField("...", "Sam zobaczysz o co chodzi")
  .addField("jaki kozak", "Sam zobaczysz")
  .addField("lol", "Świetnie sie bawisz?")
  .addField("ab!creditsy", "Czyli ogólnie podziękowania itd")
  .addField("ab!propozycja <tekst>", "Zaproponuj coś do wykorzystania na serwerze, wymaga kanału #propozycje")
  .addField("ab!zapros", "Zapros mnie na twój serwer")
  .addField("lenny", "Coś fajnego ( ͡° ͜ʖ ͡°)")
  .addField("ab!ping", "Sprawdź swój ping")
  .addField("ab!clear <od 1 do 100>", "Usuń podaną ilość wiadomości")
  .addField("ab!poll <tekst>", "Stwórz ankiete")
  .addField("ab!awatar", "Pokazuje twój awatar")
  .addField("ab!ikona-serwera", "Pokazuje ikonke/avatar serwera")
  .addField("ab!8ball <pytanie>", "**No chyba wiesz jak to działa ;-;**")
  .addField("aha", "**Bawi cie to?**")
  .addField("ab!moneta", "Rzucasz moneta, jak myślisz wyjdzie orzeł czy reszka?")
  .addField("ab!liczba", "Losuje randomową liczbe od 1 do 10")
  message.author.send(embed);
  return message.channel.send(`${message.author.username} wysłano liste komend na prywatną wiadomość`)
}

module.exports.help = {
  name:"pomoc"
}
