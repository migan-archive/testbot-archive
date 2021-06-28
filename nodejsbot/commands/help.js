module.exports = {
    name: "도움말",
    execute(message){
        const Discord = require('discord.js');
        let Embed = new Discord.MessageEmbed()
            .setThumbnail("https://cdn.discordapp.com/avatars/415135882006495242/40b3f2e3fbb710522517b0e14dfb751b.webp?size=1024")
            .setTitle("필요한게 있으면 여기 와주세요.")
            .setDescription("[공식디스코드 바로가기](https://discord.gg/S8pN4eD)\n 봇 접두사=**`--`**")
            .setColor("#00FF21")
            .addField("도움 명령어", "**`봇초대`**, **`도움말`**, **`사이트`**, **`디스코드`**")
            .addField("놀이 명령어", "**`안녕`**, **`놀자`**, **`바보`**, **`ㅋㅋ`**")
            .addField("정보 명령어", "**`정보`**, **`내프로필`**, **`개발자`**, **`핑`**, **`업타임`**, **`서버수`**")
            .addField("관리자 전용 명령어", "**`청소`**, **`킥`**, **`밴`**")
            .addField("개발 명령어", "**`파이썬버전(파버, 파이썬)`**, **`사용된모듈(모듈, 모듈버전)`**, **`소스코드(코드)`**, **`라이선스(라이센스)`**")
            .setFooter("Bot Made by. 미간#8269", "https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024");
        message.channel.send(Embed);
    }
}