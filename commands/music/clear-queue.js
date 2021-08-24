module.exports = {
    name: 'clear-queue',
    aliases: ['cq'],
    category: 'Music',
    utilisation: '{prefix}clear-queue',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Вы не находитесь в голосовом канале!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Вы не в одном голосовом канале! `);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - В данный момент нет музыки!`);

        if (client.player.getQueue(message).tracks.length <= 1) return message.channel.send(`${client.emotes.error} - В очереди только одна песня.`);

        client.player.clearQueue(message);

        message.channel.send(`${client.emotes.success} - Очередь только что ** удалена **!`);
        message.react('✅');
    },
};