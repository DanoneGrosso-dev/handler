const Discord = require('discord.js'); //Define Discord
const config = require("./config.json"); //Define Config.json

const client = new Discord.Client(); //Define Client do Discord
client.prefix = config.prefix;

client.on("ready", () => {
  console.log("Bot on")
      
const activity = [
      {name: "Sou desenvolvido em Discord.JS", type: 2, url: "https://www.google.com"},
      {name: "Bem vindo!", type: 0, url: "https://www.google.com"},
      {name: "dp!help", type: 3, url: "https://www.google.com"},
      {name: "Use dm!ajuda para tocar musicas!", type: 1, url: "https://www.twitch.tv/..."}
  ];

// Crie Suas Mensagens para o Status de acordo com o tipo de mensagem que você quer, aí estão exemplos de uma de cada, você pode fzr quantos quiser!
  
  function cs() {
      const random = activity[Math.floor(Math.random() * activity.length)];
      client.user.setPresence({game: random});
          console.log(random)
  }
  
  setInterval(cs, 15000)

});

client.on("message", async message => {
  let msg = message.content.toLowerCase();
  if (message.author.bot) return undefined;

  if (message.content.indexOf(client.prefix) !== 0 ) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    let commands = require(`./commands/${command}.js`);//Crie uma pasta com o nome commands
    commands.run(client, message, args);
  } catch (e) {
    console.log(e);
  } finally {}

});

client.login(config.token);
