module.exports = {
    name: "정보",
    execute(message){
        const Discord = require('discord.js');
        let Embed = new Discord.MessageEmbed()
            .setTitle("Kubot 의 정보")
            .setColor("00FF21")
            .addField("당신의 디스코드방을 편리하게 만듭니다.", "[공식 디스코드 바로가기](https://discord.gg/S8pN4eD)\n[공식 사이트 바로가기](https://kubot.netlify.app/)")
            .setFooter("Bot Made by. 미간#8269", "https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024");
        message.channel.send(Embed)
    }
}