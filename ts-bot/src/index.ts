import { Client, Intents, Collection } from "discord.js";
import { readdirSync } from "fs";
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
// const config = require("../config.json");
const { token, prefix } = require('../config');


const client_commands = new Collection()

const client_commands_load = (dir: any) => {
  for (const file of readdirSync(dir)) {
    const cmd = require(`./commands/${file}`);
    client_commands.set(cmd.name, cmd);
  }
}

client_commands_load(__dirname + "/commands");


client.on('ready', () => {
  console.log(`Login: ${client.user!.username}`);
  console.log(`===============================`);
});


client.on('message', msg => {
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  if (msg.content.slice(0, prefix.length) !== prefix) return;

  const args = msg.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift()?.toLowerCase()

  let cmd = client_commands.get(command);

  // if (cmd) cmd.run(client, msg, args); // 이거 해결법좀
});


client.login(token);