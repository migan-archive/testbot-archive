const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json'); // 토큰을 config.json 파일에서 가져온다
// const Dokdo = require('dokdo');
const fs = require('fs');
// const DokdoHandler = new Dokdo(client, { aliases: ['dokdo', 'dok'], prefix: '!', owners: '415135882006495242' }); // 여기있는 prefix는 dokdo 커맨드 전용 접두사입니다.
const prefix = "="; // 여기에 봇 접두사를 넣으면 됩니다.

client.commands = new Discord.Collection()

client.commands.load = dir => {
  for (const file of fs.readdirSync(dir)) {
    const cmd = require(`./commands/${file}`);
    client.commands.set(cmd.name, cmd);
  }
  console.log("------------------------------------------------------------------------------------------------------------------------");
  console.log(client.commands.map(c => c.name).join(', ') + ' 명령어가 로드됨.');
  console.log("------------------------------------------------------------------------------------------------------------------------");
}

client.commands.load(__dirname + "/commands");

client.on('ready', () => {
  console.log("--------------------------------------");
  console.log(`${client.user.tag}으로 로그인 하셨습니다.`);
  console.log("Licence = MIT");
  console.log("봇 원작자 = 미간#8269");
  console.log("--------------------------------------");
  client.user.setActivity('=도움말로 명령어 확인', { type: 'PLAYING' });
});

client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  if (msg.content.slice(0, prefix.length) !== prefix) return;

  const args = msg.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  let cmd = client.commands.get(command);

  if (cmd) cmd.run(client, msg, args);
})


// client.on('message', async message => {
//   if (message.content);
//   DokdoHandler.run(message);
// })

client.login(config.token); // process.env.TOKEN (Heroku 로 돌릴시)