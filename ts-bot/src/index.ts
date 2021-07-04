import { CommandClient } from "@pikostudio/command.ts";
import fs from "fs";
import path from "path";
const config = require('../config.json')

const client = new CommandClient({}, {
    owners: 'auto',
    prefix: config.prefix
})


fs.readdirSync(path.join(__dirname, 'commands')).forEach(x => {
    client.registry.loadModule(path.join(__dirname, 'commands', x));
});

client.on('ready', () => {
  console.log("--------------------------------------");
  console.log(`${client.user!.tag}으로 로그인 하셨습니다.`);
  console.log("Licence = MIT");
  console.log("봇 원작자 = 미간#8269");
  console.log("--------------------------------------");
  client.user!.setActivity('Typescript 테스트중', {
    type: 'PLAYING'
  });
});

client.login(config.token);
