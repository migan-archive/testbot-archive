// const config = require('../config.json');
const Dokdo = require('dokdo');

module.exports = {
    name: "dokdo",
    async run(client, message, args) {
        if(message.author.id !== "415135882006495242") return message.reply("당신은 오너가 아니군요!");
        const DokdoHandler = new Dokdo(client, { aliases: ['dokdo', 'dok'], prefix: '=', owners: '415135882006495242' });
        DokdoHandler.run(message);
    }
}