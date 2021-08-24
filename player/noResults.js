module.exports = (client, message, query) => {
    message.channel.send(`${client.emotes.error} - На YouTube ничего не найдено по запросу ${query} !`);
};