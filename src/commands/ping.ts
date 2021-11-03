import Command from "../interfaces/Command";

export const ping: Command = {
    name: "ping",
    description: "Ping do servidor",
    run: async (interaction) => {
        await interaction.reply("PONG");
    },
};