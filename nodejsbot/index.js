const Discord = require('discord.js');
const client = new Discord.Client();
const {prefix, token} = require('./config.json'); // 접두사와 토큰을 config.json 파일에서 가져온다
const fs = require('fs');


client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name,command);
}
client.on('ready', () => {
	console.log(`${client.user.tag}(으)로 봇에 로그인 하셨습니다.`);
});


client.on('message',msg=>{
    if(!msg.content.startsWith(prefix) || msg.author.bot) return;
    const args = msg.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift();
    const command = client.commands.get(commandName);
    try{
        command.execute(msg,args);
    }catch(error){
        console.log(error);
    }
});


client.login(token)