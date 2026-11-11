const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [GatewayIntentBits.Guilds]
});

const TOKEN = "MTU3MDEwNDE3MTg4NDA2MDY5Mg.GNpMTr.c60LKd6oaQ3-Hd_yky8M1mTdTgHT18IARVu-cI";
const CHANNEL_ID = "1493347274959491142";

client.once('ready', async () => {

    console.log(`Connecté en tant que ${client.user.tag}`);

    const channel = await client.channels.fetch(CHANNEL_ID);

    await channel.send(
        `<@&${ROLE_ID}>\n🏒 Test du système d'alerte des Canadiens !`
    );

});

client.login(TOKEN);