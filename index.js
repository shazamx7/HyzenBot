const Discord = require("discord.js")

const config = require("./config.json")

const client = new Discord.Client({ 
  intents: [ 
Discord.GatewayIntentBits.Guilds
       ]
    });

module.exports = client

client.on('interactionCreate', (interaction) => {

  if(interaction.type === Discord.InteractionType.ApplicationCommand){

      const cmd = client.slashCommands.get(interaction.commandName);

      if (!cmd) return interaction.reply(`Error`);

      interaction["member"] = interaction.guild.members.cache.get(interaction.user.id);

      cmd.run(client, interaction)

   }
})

client.on('ready', () => {
  console.log(`[HyzenStudios] Estou online em ${client.user.tag}!`)
})

  const { joinVoiceChannel } = require('@discordjs/voice');

  client.on("ready", () => {
    let canal = client.channels.cache.get("1077660725721452614") // coloque o ID do canal de voz
    if (!canal) return console.log("[HyzenStudios] ❌ Não foi possível entrar no canal de voz.")
    if (canal.type !== Discord.ChannelType.GuildVoice) return console.log(`[HyzenStudios] ❌ Não foi possível entrar no canal [ ${canal.name} ].`)
  
    try {
  
      joinVoiceChannel({
        channelId: canal.id, // ID do canal de voz
        guildId: canal.guild.id, // ID do servidor
        adapterCreator: canal.guild.voiceAdapterCreator,
      })
      console.log(`[HyzenStudios] ✅ Entrei no canal2 de voz [ ${canal.name} ] com sucesso!`)
  
    } catch(e) {
      console.log(`[HyzenStudios] ❌ Não foi possí1vel entrar no canal [ ${canal.name} ].`)
    }
  
  })


client.slashCommands = new Discord.Collection()

require('./handler')(client)

client.login(config.token)

