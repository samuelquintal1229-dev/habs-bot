const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

const TOKEN = process.env.TOKEN;
const CHANNEL_ID = "1493347274959491142";

client.on('ready', async () => {
    console.log('Bot connecté');
});

client.login(TOKEN);