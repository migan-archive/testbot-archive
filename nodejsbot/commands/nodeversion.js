module.exports = {
    name: "노드버전",
    execute(message){
        const Discord = require('discord.js');
        const Embed = new Discord.MessageEmbed()
            .setTitle("node.js 버전")
            .setColor("00FF21")
            .setDescription("현재 Kubot은 node.js 16.4.0 버전을 사용중이네요!")
            .setFooter("Bot Made by. 미간#8269", "https://cdn.discordapp.com/avatars/415135882006495242/cb4c1c1fce24f512e07f673989814572.webp?size=1024");
        message.channel.send(Embed);
    }
}