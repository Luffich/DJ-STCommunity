module.exports = {
    name: 'nowplaying',
    aliases: ['np'],
    category: 'Music',
    utilisation: '{prefix}nowplaying',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Вы не находитесь в голосовом канале!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Вы находитесь в другом голосовом канале!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - В данный момент нет музыки!`);

        const track = client.player.nowPlaying(message);
        const filters = [];

        Object.keys(client.player.getQueue(message).filters).forEach((filterName) => client.player.getQueue(message).filters[filterName]) ? filters.push(filterName) : false;

        message.channel.send({
            embed: {
                color: 'PURPLE',
                author: { name: track.title },
                footer: { text: 'Создатель данного бота kill me, luffich#6666 • www.luffich.ru' },
                fields: [
                    { name: 'Канал', value: track.author, inline: true },
                    { name: 'Запрошенный', value: track.requestedBy.username, inline: true },
                    { name: 'Из плейлиста', value: track.fromPlaylist ? 'Yes' : 'No', inline: true },

                    { name: 'Просмотры', value: track.views, inline: true },
                    { name: 'Продолжительность', value: track.duration, inline: true },
                    { name: 'Фильтры активированы', value: filters.length + '/' + client.filters.length, inline: true },

                    { name: 'Громкость', value: client.player.getQueue(message).volume, inline: true },
                    { name: 'Режим Повтора', value: client.player.getQueue(message).repeatMode ? 'Yes' : 'No', inline: true },
                    { name: 'В настоящее время приостановлено', value: client.player.getQueue(message).paused ? 'Yes' : 'No', inline: true },

                    { name: 'Индикатор', value: client.player.createProgressBar(message, { timecodes: true }), inline: true }
                ],
                thumbnail: { url: track.thumbnail },
                timestamp: new Date(),
            },
        });
    },
};