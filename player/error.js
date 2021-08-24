module.exports = (client, error, message, ...args) => {
    switch (error) {
        case 'NotPlaying':
            message.channel.send(`${client.emotes.error} - На этом сервере нет музыки!`);
            break;
        case 'NotConnected':
            message.channel.send(`${client.emotes.error} - Вы не подключены ни к одному из голосовых каналов!`);
            break;
        case 'UnableToJoin':
            message.channel.send(`${client.emotes.error} - Я не могу присоединиться к вашему голосовому каналу, проверьте мои разрешения!`);
            break;
        case 'VideoUnavailable':
            message.channel.send(`${client.emotes.error} - ${args[0].title} недоступно в вашей стране! Пропуская...`);
            break;
        case 'MusicStarting':
            message.channel.send(`Музыка запускается... подождите и повторите попытку!`);
            break;
        default:
            message.channel.send(`${client.emotes.error} - Что-то пошло не так ... Ошибка: ${error}`);
    };
};
