module.exports = {
    name: 'filter',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}filter [filter name]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Вы не находитесь в голосовом канале!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Вы находитесь в другом голосовом канале!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - В данный момент нет музыки!`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Укажите действующий фильтр, чтобы включить или отключить!`);

        const filterToUpdate = client.filters.find((x) => x.toLowerCase() === args[0].toLowerCase());

        if (!filterToUpdate) return message.channel.send(`${client.emotes.error} - Такого фильтра нет, попробуйте например (8D, вибрато, пульсатор ...)!`);

        const filtersUpdated = {};

        filtersUpdated[filterToUpdate] = client.player.getQueue(message).filters[filterToUpdate] ? false : true;

        client.player.setFilters(message, filtersUpdated);

        if (filtersUpdated[filterToUpdate]) message.channel.send(`${client.emotes.music} - Я ** добавляю ** фильтр к музыке, подождите ... Примечание: чем длиннее музыка, тем больше времени это займет.`);
        else message.channel.send(`${client.emotes.music} - Я ** отключаю ** фильтр для музыки, подождите ... Примечание: чем дольше воспроизводится музыка, тем больше времени это займет.`);
        message.react('✅');
    },
};