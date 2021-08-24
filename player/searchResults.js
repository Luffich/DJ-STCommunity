module.exports = (client, message, query, tracks) => {
    message.channel.send({
        embed: {
            color: 'PURPLE',
            author: { name: `Вот результаты вашего поиска для ${query}` },
            footer: { text: 'Создатель данного бота kill me, luffich#6666 • www.luffich.ru' },
            timestamp: new Date(),
            description: `${tracks.map((t, i) => `**${i + 1}** - ${t.title}`).join('\n')}`,
        },
    });
};