module.exports = (client, message, query, tracks, content, collector) => {
    if (content === 'cancel') {
        collector.stop();
        return message.channel.send(`${client.emotes.success} - Выбор был **отменен**!`);
    } else message.channel.send(`${client.emotes.error} - Вы должны отправить действительный номер от **1** до **${tracks.length}** !`);
};