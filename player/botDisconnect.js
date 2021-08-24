module.exports = (client, message, queue) => {
    message.channel.send(`${client.emotes.error} - Музыка остановилась, так как меня отключили от канала!`);
};