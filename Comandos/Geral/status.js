const Discord = require("discord.js");
const DONO = "1052998903231938590"; // Coloque seu ID

module.exports = {
    name: "setstatus",
    description: "Configure meu status.",
    options: [
        {
            type: Discord.ApplicationCommandOptionType.String,
            name: "status",
            description: "Qual estilo você deseja aplicar (online, dnd, idle, invisible)?",
            required: true,
        },
        {
            type: Discord.ApplicationCommandOptionType.String,
            name: "descrição",
            description: "Qual será a descrição do status?",
            required: true,
        }
    ],

    run: async (client, interaction) => {

        if (interaction.user.id !== DONO) return interaction.reply({ content: `Apenas o meu dono pode utilizar este comando!`, ephemeral: true })

        try {

            let status = interaction.options.getString("status");
            let desc = interaction.options.getString("descrição");

            client.user.setStatus(`${status}`);

            client.user.setPresence({
                activities: [{
                    name: desc
                }],
            });

            let embed = new Discord.EmbedBuilder()
            .setColor("#9400d3")
            .setTitle("<:hyzen:1077104546674917387> HyzenStudios")
            .addFields(
                {
                    name: `<:bot:1077366319013437571> Mudei meu status para:`,
                    value: `\`${status}\`.`,
                    inline: false
                },
                {
                    name: `<a:apurple_mund:1077104011880181851> Mudei minha descrição para:`,
                    value: `\`${desc}\`.`,
                    inline: false
                }
            )

            await interaction.reply({ embeds: [embed] });

        } catch (error) {
            return console.log(`Ops ${interaction.user}, algo deu errado ao executar este comando.`)
        }
    }
}