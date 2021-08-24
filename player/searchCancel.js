module.exports = (client, message, query, tracks) => {
    message.channel.send(`${client.emotes.error} - Вы не предоставили действительный ответ ... Пожалуйста, отправьте команду еще раз!`);
};