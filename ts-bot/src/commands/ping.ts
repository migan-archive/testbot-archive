import { command, Module, rest } from "@pikostudio/command.ts";
import { Message } from "discord.js";

class Ping extends Module {
    constructor() {
        super(__filename);
    };

    @command()
    async "핑"(msg: Message) {
        await msg.channel.send("퐁!");
    };

    @command()
    async "say"(msg: Message, @rest content: string) {
        await msg.channel.send(content, {
            disableMentions: 'all'
        })
    };

    @command()
    async "dm"(msg: Message, @rest content: string) {
        await msg.author.send(content)
    };


};

export function install() {
    return new Ping();
};
