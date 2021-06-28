const Discord = require('discord.js');
const client = new Discord.Client();
const {prefix, token} = require('./config.json'); // 접두사와 토큰을 config.json 파일에서 가져온다
const fs = require('fs');
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const Dokdo = require('dokdo');
const DokdoHandler = new Dokdo(client, { aliases: ['dokdo', 'dok'], prefix: '!' }); // Using Bot Application ownerID as default for owner option.

for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name,command);
}
client.on('ready', () => {
    console.log("--------------------------------------");
	console.log(`${client.user.tag}으로 로그인 하셨습니다.`);
    console.log("Licence = MIT");
    console.log("봇 원작자 = 미간#8269");
    console.log("--------------------------------------");
});


client.on('message',msg=>{
    if(!msg.content.startsWith(prefix) || msg.author.bot) return;
    const args = msg.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift();
    if(!client.commands.has(commandName)) return;
    const command = client.commands.get(commandName);
    try{
        command.execute(msg,args);
    }catch(error){
        console.log(error);
    }
});

client.on('message', async message => {
  if (message.content); // handle commands first
  DokdoHandler.run(message);
})


client.login(token)
// const Discord = require('discord.js');
// const client = new Discord.Client();
// const {token} = require("./config.json");

// const Dokdo = require('dokdo');

// const DokdoHandler = new Dokdo(client, { aliases: ['dokdo', 'dok'], prefix: '!' }); // Using Bot Application ownerID as default for owner option.

// client.on('message', async message => {
//   if (message.content === 'ping') return message.channel.send('Pong'); // handle commands first
//   DokdoHandler.run(message);
// })

// client.login(token);