const Discord = require("discord.js")

module.exports = {
  name: "botinfo", // Coloque o nome do comando
  description: "Fornece informações sobre o bot.", // Coloque a descrição do comando
  type: Discord.ApplicationCommandType.ChatInput,

  run: async (client, interaction) => {

    let dono = "1052998903231938590"; // Coloque seu ID
    let membros = client.users.cache.size;
    let servidores = client.guilds.cache.size;
    let canais = client.channels.cache.size;
    let bot = client.user.tag;
    let avatar_bot = client.user.displayAvatarURL({ dynamic: true });
    let linguagem = "JavaScript";
    let livraria = "Discord.Js";
    let ping = client.ws.ping;

    let embed = new Discord.EmbedBuilder()
    .setColor("#9400d3")
    .setAuthor({ name: bot, iconURL: avatar_bot })
    .setFooter({ text: bot, iconURL: avatar_bot })
    .setTimestamp(new Date())
    .setThumbnail(avatar_bot)
    .setDescription(`Olá ${interaction.user}, veja minhas informações abaixo:\n\n> <:bot:1077366319013437571> Nome: \`${bot}\`.\n> <:bot:1077366319013437571> Feito por: [HyzenStudios](https://hyzenstudios.com.br).
\n> <:settings:1077343909073662094> Membros: \`${membros}\`.\n> <:settings:1077343909073662094> Servidores: \`${servidores}\`.\n> <:settings:1077343909073662094> Canais: \`${canais}\`.\n> <:settings:1077343909073662094> Ping: \`${ping}\`.
\n> <:node:1077105274718007296> Linguagem de programação: \`${linguagem}\`.\n> <a:apurple_mund:1077104011880181851> Livraria: \`${livraria}\`.`);

    interaction.reply({ embeds: [embed] })


  }
}