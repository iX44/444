const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ailatrumsv')
        .setDescription('Bố mày đấy'),

    async execute(interaction) {
        try {
            // Thay ID dưới đây bằng ID thực của @ixa.xyz
            const truongServerId = '955142609414787123';

            await interaction.reply({
                content: `con dog <@${truongServerId}>!`,
                ephemeral: true
            });
        } catch (error) {
            console.error('❌ Lỗi khi chạy lệnh /ailatrumsv:', error);
            await interaction.reply({
                content: '❌ Có lỗi xảy ra khi xử lý lệnh này!',
                ephemeral: true
            });
        }
    }
};
