import { command, Module } from "@pikostudio/command.ts";
import { Message, MessageEmbed } from "discord.js";

class Core extends Module {
    constructor() {
        super(__filename);
    };

    @command()
    async "랜덤숫자"(msg: Message) {
        const random = Math.floor(Math.random() * 10000000000001);
        msg.channel.send(random);
    };

    @command()
    async "놀자"(msg: Message) {
        const list = ["바빠", "뭐하고 놀건데?"];
        const random = Math.floor(Math.random() * 2);
        const enjoy = list[random];
        msg.channel.send(enjoy);
    };

    @command()
    async "소스코드"(msg: Message) {
        const Embed = new MessageEmbed()
            .setTitle("소스코드")
            .setColor("00FF21")
            .setDescription("봇의 코드입니다. [깃허브로 가기](https://github.com/siwoo131/kubot-code)")
            .setTimestamp(Date.now())
            .setFooter(msg.author.username, msg.author.displayAvatarURL());
        msg.channel.send(Embed);
    };

    @command()
    async "라이선스"(msg: Message) {
        const Embed = new MessageEmbed()
            .setTitle("Kubot의 라이선스")
            .setColor("00FF21")
            .setDescription("해당봇은 MIT라이선스를 사용하고있습니다.")
            .setTimestamp(Date.now())
            .setFooter(msg.author.username, msg.author.displayAvatarURL());
        msg.channel.send(Embed);
    };

    @command()
    async "ㅋㅋ"(msg: Message) {
        msg.channel.send("ㅋㅋㅋㅋ");
    };

};

export function install() {
    return new Core();
}; // 타입스크립트는 더 어렵네.......