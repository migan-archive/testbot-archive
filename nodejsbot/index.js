const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json'); // 토큰을 config.json 파일에서 가져온다
const Dokdo = require('dokdo');
const DokdoHandler = new Dokdo(client, { aliases: ['dokdo', 'dok'], prefix: '!', owners: '415135882006495242' }); // 여기있는 prefix는 dokdo 커맨드 전용 접두사입니다.
const prefix = "="; // 여기에 봇 접두사를 넣으면 됩니다.


client.on('ready', () => {
    console.log("--------------------------------------");
	console.log(`${client.user.tag}으로 로그인 하셨습니다.`);
    console.log("Licence = MIT");
    console.log("봇 원작자 = 미간#8269");
    console.log("--------------------------------------");
    client.user.setActivity('=도움말로 명령어 확인', {type: 'PLAYING'});
});


client.on('message',msg=>{
    if(msg.author.bot) return;
    if(msg.author.id === client.user.id) return;
    if (msg.content === `${prefix}바보`) {
        msg.reply('바보 아니거든?(씨익...)');
    };

    if (msg.content === `${prefix}밴`) {
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("당신은 권한이 부족해요!");
        let User = message.mentions.members.first();
        if(!User) return message.reply("사용자를 찾을수 없어요!");
        if(User.hasPermission("BAN_MEMBERS")) return message.reply("본 사용자는 추방할수 없어요!");
        User.ban();
    };

    if (msg.content === `${prefix}개발자`) {
        const Embed = new Discord.MessageEmbed()
            .setTitle("개발자는")
            .setDescription("바로 미간#8269 (이)야!")
            .setThumbnail("https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
            .setColor("00FF21")
            .setTimestamp(Date.now())
            .setFooter("Bot Made by. 미간#8269", "https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024");
        msg.channel.send(Embed);
    };

    if (msg.content === `${prefix}디스코드`) {
        const Embed = new Discord.MessageEmbed()
            .setColor("00FF21")
            .setTitle("공식디스코드 링크")
            .setDescription("바로 여기야[공식디스코드 바로가기](https://discord.gg/S8pN4eD)")
            .setTimestamp(Date.now())
            .setFooter("Bot Made by. 미간#8269", "https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024");
        msg.channel.send(Embed);
    };

    if (msg.content === `${prefix}놀자`) {
        const list = ["바빠", "뭐하고 놀건데?"];
        const random = Math.floor(Math.random() * 3);
        const enjoy = list[random];
        msg.channel.send(enjoy);
    };

    if (msg.content === `${prefix}안녕`) {
        const list = ["안녕", "hi", "안녕하세요", "hello", "좋은아침이에요!"];
        const random = Math.floor(Math.random() * 3);
        const hi = list[random];
        msg.reply(hi);
    };

    if (msg.content === `${prefix}도움말`) {
        const Embed = new Discord.MessageEmbed()
            .setThumbnail("https://cdn.discordapp.com/avatars/415135882006495242/40b3f2e3fbb710522517b0e14dfb751b.webp?size=1024")
            .setTitle("필요한게 있으면 여기 와주세요.")
            .setDescription("[공식디스코드 바로가기](https://discord.gg/S8pN4eD)\n 봇 접두사=**`--`**")
            .setColor("#00FF21")
            .addField("도움 명령어", "**`봇초대`**, **`도움말`**, **`사이트`**, **`디스코드`**")
            .addField("일반 명령어", "**`안녕`**, **`놀자`**, **`바보`**, **`ㅋㅋ`**,  **`랜덤숫자`**")
            .addField("정보 명령어", "**`정보`**, **`개발자`**, **`핑`**, **`서버수`**, **`라이선스`**, **`소스코드`**")
            .addField("관리 명령어", "**`킥`**, **`밴`**")
            .setTimestamp(Date.now())
            .setFooter("Bot Made by. 미간#8269", "https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024");
        msg.channel.send(Embed);
    };

    if (msg.content === `${prefix}정보`) {
        const Embed = new Discord.MessageEmbed()
            .setTitle("Kubot 의 정보")
            .setColor("00FF21")
            .setDescription("파이썬환경이랑 거의 동일하게 하겠습니다!")
            .addField("당신의 디스코드방을 편리하게 만듭니다.", "[공식 디스코드 바로가기](https://discord.gg/S8pN4eD)\n[공식 사이트 바로가기](https://kubot.netlify.app/)")
            .addField("이 빌드에서의 주의사항", "이 빌드(Build 42597.Dev)는 현재 개발중이며, 또한 불안정 할 수 있습니다.")
            .setTimestamp(Date.now())
            .setFooter("Bot Made by. 미간#8269", "https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024");
        msg.channel.send(Embed);
    };

    if (msg.content === `${prefix}봇초대`) {
        const Embed = new Discord.MessageEmbed()
            .setTitle("봇초대 링크")
            .setDescription("[초대하러 가기](https://discord.com/oauth2/authorize?client_id=704999866094452816&permissions=8&scope=bot)")
            .setColor("00FF21")
            .setTimestamp(Date.now())
            .setFooter("Bot Made by. 미간#8269", "https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024");
        msg.channel.send(Embed);
    };

    if (msg.content === `${prefix}킥`) {
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("당신은 권한이 부족해요!");
        if(message.mentions.members.first()){
            try{
                message.mentions.members.first().kick().them(()=>{
                    return message.reply(`성공적으로 ${message.mentions.members.first()}유저를 추방했어요!`);
                }).catch((error)=>{
                    return message.reply(`에러 발생. 에러정보\n${error}`);
                })
            }catch(error){}
        }else{
            return message.reply("유저를 멘션해주세요!");
        }
    };

    if (msg.content === `${prefix}라이선스`) {
        const Embed = new Discord.MessageEmbed()
            .setTitle("Kubot의 라이선스")
            .setColor("00FF21")
            .setDescription("해당봇은 MIT라이선스를 사용하고있습니다.")
            .setTimestamp(Date.now())
            .setFooter("Bot Made by. 미간#8269", "https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024");
        msg.channel.send(Embed);
    };

    if (msg.content === `${prefix}ㅋㅋ`) {
        msg.channel.send("ㅋㅋㅋㅋ");
    };

    if (msg.content === `${prefix}핑`) {
        const ping = Date.now() - message.createdTimestamp;
        const Embed = new Discord.MessageEmbed()
            .setTitle(":ping_pong:퐁!")
            .setDescription(`\`${ping}\`ms`)
            .setColor("00FF21")
            .setTimestamp(Date.now())
            .setFooter("Bot Made by. 미간#8269", "https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024")
        msg.channel.send(Embed);
    };

    if (msg.content === `${prefix}랜덤숫자`) {
        const random = Math.floor(Math.random() * 10000000000001);
        msg.channel.send(random);
    };

    if (msg.content === `${prefix}소스코드`) {
        const Embed = new Discord.MessageEmbed()
            .setTitle("소스코드")
            .setColor("00FF21")
            .setDescription("봇의 코드입니다. [깃허브로 가기](https://github.com/siwoo131/kubot-code)")
            .setTimestamp(Date.now())
            .setFooter("Bot Made by. 미간#8269", "https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024");
        msg.channel.send(Embed);
    };

    if (msg.content === `${prefix}서버수`) {
    const Embed = new Discord.MessageEmbed()
        .setTitle("Kubot의 서버수")
        .setDescription(`현재 Kubot의 서버수는 ${client.guilds.cache.size}서버 입니다.\n현재 한디리에서 Kubot서버가 1서버로 표기되고있습니다.`)
        .setColor("00FF21")
        .setTimestamp(Date.now())
        .setFooter("Bot Made by. 미간#8269", "https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024");
    msg.channel.send(Embed)
    };

    if (msg.content === `${prefix}사이트`) {
        const Embed = new Discord.MessageEmbed()
            .setTitle("공식사이트 링크")
            .setDescription("초라하긴 하지만 그래도 있어[공식사이트 바로가기](https://kubot.netlify.app/)")
            .setColor("00FF21")
            .setTimestamp(Date.now())
            .setFooter("Bot Made by. 미간#8269", "https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024");
        msg.channel.send(Embed);
    };
    
    if (msg.content === `${prefix}문의`) {
        const Embed = new Discord.MessageEmbed()
            .setColor("00FF21")
            .setTitle("문의")
            .setDescription("문제가 발생 하셨나요? 아니면 이봇의 관한 궁금한 점이 있나요? 그럼 여기로 오세요.\n[공식디스코드 바로가기](https://discord.gg/S8pN4eD)")
            .setTimestamp(Date.now())
            .setFooter("Bot Made by. 미간#8269", "https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024");
        msg.channel.send(Embed);
    };
    try{

    }catch(error){
        console.log(error);
    };
});

client.on('message', async message => {
  if (message.content);
  DokdoHandler.run(message);
})


// 봇 실행
client.login(config.token); // process.env.TOKEN (Heroku 로 돌릴시)