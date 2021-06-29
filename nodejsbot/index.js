const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json'); // 토큰을 config.json 파일에서 가져온다
const fs = require('fs');
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const Dokdo = require('dokdo');
const DokdoHandler = new Dokdo(client, { aliases: ['dokdo', 'dok'], prefix: '!' }); // 여기있는 prefix는 dokdo 커맨드 전용 접두사입니다.
const prefix = "="; // 여기에 봇 접두사를 넣으면 됩니다.
client.commands = new Discord.Collection();

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
    client.user.setActivity('=도움말로 명령어 확인', {type: 'PLAYING'});
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
  if (message.content);
  DokdoHandler.run(message);
})


// 봇 실행
client.login(config.token); // process.env.TOKEN