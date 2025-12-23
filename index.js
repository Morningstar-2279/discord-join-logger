const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers
    ]
});

const LOG_CHANNEL_ID = "1452940544006291518";

client.once("ready", () => {
    console.log(`Bot is logged in as ${client.user.tag}`);
});

client.on("guildMemberAdd", async (member) => {
    const logChannel = client.channels.cache.get(LOG_CHANNEL_ID);
    if (!logChannel) return;

    logChannel.send(
        `**New Member Joined**\n` +
        `User: ${member.user.tag} \n` +
        `Server: ${member.guild.name}`
    );
});

client.on("guildMemberRemove", async (member) => {
  const logChannel = client.channels.cache.get(LOG_CHANNEL_ID);
  if (!logChannel) return;

  logChannel.send(
    `**Member Left**\n` +
    `User: ${member.user.tag}\n` +
    `Server: ${member.guild.name}`
  );
});

client.lohin(process.env.TOKEN);
