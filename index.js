const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.lenght <= 0){
    console.log("Nie można znaleźć komend.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} załadowane!`);
    bot.commands.set(props.help.name, props);    
  });
});

bot.on("ready", async () => {
  console.log(`${bot.user.username} jest online!`);

  bot.user.setActivity("by FuReK | ab!pomoc", {type: "WATCHING"})
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);
    
  if(cmd === "lenny"){
    return message.channel.send("( ͡° ͜ʖ ͡°)")
  }

  if(cmd === `${prefix}nazwaKomendy`){}

  if(message.content === "Cześć"){
    message.react("✔")
    return message.channel.send("Witaj", message.author.username)
  }

  if(message.content === "Potrzebuje pomocy"){

    return message.channel.send("Potrzebujemy pomocy @WŁAŚCICIEL")
    message.guild.channels.find(`name`, "sprawa-do-właściciela")
  }

  if(cmd === `${prefix}typowy-frost`){
    return message.channel.send("https://cdn.discordapp.com/attachments/473083116731498501/475008357908873228/unknown.png")
  }

  if(message.content === "!"){
    return message.channel.send("Nie drzyj mordy ludzie śpią!")
  }

  if(cmd === `${prefix}rozmowa`){

    let embed = new Discord.RichEmbed()
    .setDescription("Typowa rozmowa polaka z anglikiem")
    .setColor("#4286f4")
    .addField("Anglik: What's your name?")
    .addField("Polak: Zamknij ryj")
    .addField("Anglik: What?")
    .addField("Polak: Zamknij dupe")
    .addField("Anglik: Oh. It's you DanielMagical?")
    message.channel.send(embed);
  }

  if(cmd === `${prefix}zapros`){

    let embed = new Discord.RichEmbed()
    .setDescription("Dodaj mnie!")
    .setColor("#f74a4d")
    .addField("Link", `${message.author.username} dodaj mnie tym linkiem > https://discordapp.com/api/oauth2/authorize?client_id=472057997380812801&permissions=0&scope=bot`)
    message.channel.send(embed);
  }

  if(cmd === `${prefix}propozycja`){

    let reason = args.join(" ");

    let sEmbed = new Discord.RichEmbed()
    .setDescription("Propozycja")
    .setColor("#10ff00")
    .addField("Użytkownik proponujący", message.author.username)
    .addField("Treść", reason || "Brak");

    let sRoom = message.guild.channels.find(`name`, "propozycje");
    if(!sRoom) return message.channel.send("Nie znaleziono kanału #propozycje");

    sRoom.send(sEmbed);
    return;
  }

  if(cmd === `${prefix}creditsy`){

    let embed = new Discord.RichEmbed()
    .setDescription("Credits")
    .setColor("#f44242")
    .addField("Twórca ๖̶̶̶ۣۣۜۜ͜ζ͜͡F̵̧̀̀͜r̨̨O̢̨̡͘s̵҉̶͠T")
    .addField("Podziękowania dla Spyte za chociarz małą pomoc i dla użytkowników z serwera Plexi Development za pomoc w kodowaniu komend")
    .addField("Może sie coś tutaj jeszcze znajdzie ;)")
    message.channel.send(embed);
  }

  if(message.content === "lol"){
    return message.channel.send("No beka w ciul ci powiem")
  }

  if(message.content === "Ty no nie wiem"){
    return message.channel.send("jak tam twoja zrogowaciała niedźwiedzica polarna ~ DeXo Official");
  }

  if(message.content === "jaki kozak"){
    return message.channel.send("Aleś ty bystry.");
  }

  if(cmd === "xd"){
    return message.channel.send("Nie no ja nie wytrzymam zaraz czy ty kurde nie umiesz napisać XD?");
  }

  if(cmd === "..."){
    return message.channel.send("No tak kolejny idiota który używa wielokropka, może jeszcze dodaj milion pięćset sto dziewięćset wykrzykników!");
  }

  if(cmd === `${prefix}pomoc`){

    let embed = new Discord.RichEmbed()
    .setDescription("Komendy")
    .setColor("#26ff0")
    .addField("ab!powiedz <tekst> - Powiedz coś botem")
    .addField("ab!report <gracz> <powód> - Zgłoś złamanie regulaminu, wymaga kanału #zgloszenia")
    .addField("Cześć - Bot ci odpowiada")
    .addField("ab!bot - Info o bocie")
    .addField("ab!witam - Witasz sie z botem")
    .addField("ab!serwer - Info o serwerze")
    .addField("Ty no nie wiem - Bot dokańcza za ciebie")
    .addField("xd - Bot cie uczy jak pisać słowo xd")
    .addField("... - Sam zobaczysz o co chodzi")
    .addField("jaki kozak - Sam zobaczysz")
    .addField("lol - Świetnie sie bawisz?")
    .addField("ab!creditsy - Czyli ogólnie podziękowania itd")
    .addField("ab!propozycja <tekst> - Zaproponuj coś do wykorzystania na serwerze, wymaga kanału #propozycje")
    .addField("ab!zapros - Zapros mnie na twój serwer")
    .addField("lenny - Coś fajnego ( ͡° ͜ʖ ͡°)")
    .addField("ab!kolorek - W testach")
    .addField("Reszta wkrótce :)")
    message.author.send(embed);
    return message.channel.send("Wysłano liste komend na prywatną wiadomość")
  }

  if(cmd === `${prefix}powiedz`){

    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{});
    message.channel.send(sayMessage);
    return;
  }

  if(cmd === `${prefix}uzytkownik`){

    let embed = new Discord.RichEmbed()
    .setDescription("Info o użytkowniku")
    .setColor("#5b749b")
    .addField("Nazwa użytkownika", message.author.username)
    .addField("Czy jest botem", message.author.bot)
    .addField("Tag", message.author.tag || "Nie")
    .addField("ID", message.author.id)
    .addField("ID ostatniej wiadomości", message.author.lastMessageID)
    .addField("Awatar", message.author.avatar)
    .addField("Discriminator", message.author.discriminator)
    .addField("Timestamp", message.author.createdTimestamp)
    .addField("Kanał DM", message.author.dmChannel || "Brak")
    .addField("Notatka", message.author.note || "Brak")
    message.channel.send(embed);
  }

  if(cmd === `${prefix}serwer`){

    let embed = new Discord.RichEmbed()
    .setDescription("Info o serwerze")
    .setColor("#5e0372")
    .addField("Właściciel", message.guild.owner)
    .addField("Ilość użytkowników", message.guild.memberCount)
    .addField("Serwer", message.guild.name)
    .addField("Region", message.guild.region)
    .addField("Lewel weryfikacji", message.guild.verificationLevel)
    .addField("Pozycja", message.guild.position || "Nie została określona")
    .addField("Kanał AFK", message.guild.afkChannel || "Brak")
    .addField("Rola domyślna", message.guild.defaultRole)
    .addField("Ikonka", message.guild.icon || "Brak")
    .addField("Domyślny kanał", message.guild.deafaultChannel || "Brak")
    message.channel.send(embed);
  }

  if(cmd === "Cześć"){
    return message.channel.send("Witaj");
  }

  if(cmd === `${prefix}report`){

    let rUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!rUser) return message.channel.send("Nie znaleziono użytkownika");
    let reason = args.join(" ").slice(22);

    let reportEmbed = new Discord.RichEmbed()
    .setDescription("Zgloszenia")
    .setColor("#f44242")
    .addField("Zgłoszony użytkownik", `${rUser} z ID: ${rUser.id}`)
    .addField("Zgłoszony przez", `${message.author} z ID: ${message.author.id}`)
    .addField("Kanał", message.channel)
    .addField("Czas", message.createdAt)
    .addField("Powód", reason);

    let reportschannel = message.guild.channels.find(`name`, "zgloszenia");
    if(!reportschannel) return message.channel.send("Nie znaleziono kanału #zgloszenia");


    message.delete().catch(O_o=>{});
    reportschannel.send(reportEmbed);

    return;
  }

  if(cmd === `${prefix}witam`){
    return message.channel.send("No cześć!");
  }

  if(cmd === `${prefix}bot`){

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Info o bocie")
    .setColor("#0061ff")
    .setThumbnail(bicon)
    .addField("Nazwa bota", bot.user.username)
    .addField("Stworzony", bot.user.createdAt)
    .addField("Id bota", bot.user.id)
    .addField("Tag bota", bot.user.tag)
    .addField("Ostatnia wiadomość", bot.user.lastMessage || "Brak ostatniej wiadomości")
    .addField("Timestamp", bot.user.createdTimestamp || "Brak");

    return message.channel.send(botembed);
  }

});

bot.login(process.env.BOT_TOKEN)
