module.exports = {
    name: 'help',
    aliases: ['h'],
    category: 'Core',
    utilisation: '{prefix}help <command name>',

    execute(client, message, args) {
        if (!args[0]) {
            const infos = message.client.commands.filter(x => x.category == 'Infos').map((x) => '`' + x.name + '`').join(', ');
            const music = message.client.commands.filter(x => x.category == 'Music').map((x) => '`' + x.name + '`').join(', ');

            message.channel.send({
                embed: {
                    color: 'PURPLE',
                    author: { name: 'Панель помощи' },
                    footer: { text: 'Создатель данного бота kill me, luffich#6666 • www.luffich.ru' },
                    fields: [
                        { name: 'Bot', value: infos },
                        { name: 'Music', value: music },
                        { name: 'Filters', value: client.filters.map((x) => '`' + x + '`').join(', ') },
                    ],
                    timestamp: new Date(),
                    description: `Чтобы использовать фильтры, ${client.config.discord.prefix}filter (фильтр). Пример : ${client.config.discord.prefix}filter 8D.`,
                },
            });
        } else {
            const command = message.client.commands.get(args.join(" ").toLowerCase()) || message.client.commands.find(x => x.aliases && x.aliases.includes(args.join(" ").toLowerCase()));

            if (!command) return message.channel.send(`${client.emotes.error} - Я не нашел эту команду!`);

            message.channel.send({
                embed: {
                    color: 'PURPLE',
                    author: { name: 'О помощи' },
                    footer: { text: 'Создатель данного бота kill me, luffich#6666 • www.luffich.ru' },
                    fields: [
                        { name: 'Имя', value: command.name, inline: true },
                        { name: 'Категория', value: command.category, inline: true },
                        { name: 'Псевдоним (ы)', value: command.aliases.length < 1 ? 'None' : command.aliases.join(', '), inline: true },
                        { name: 'Утилизация', value: command.utilisation.replace('{prefix}', client.config.discord.prefix), inline: true },
                    ],
                    timestamp: new Date(),
                    description: 'Найдите информацию о предоставленной команде.\nОбязательные аргументы `[]`, необязательные аргументы `<>`.',
                }
            });
        };
    },
};