module.exports = {
    name: "임베드",
    execute(message){
        const Discord = require('discord.js');
        const Embed = new Discord.MessageEmbed();
        message.reply(Embed.setTitle('제목').setDescription('설명'));
    }
};