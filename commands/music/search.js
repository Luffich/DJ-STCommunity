module.exports = {
    name: 'search',
    aliases: ['sr'],
    category: 'Music',
    utilisation: '{prefix}search [name/URL]',

    execute(client, message, args) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Вы не находитесь в голосовом канале!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Вы находитесь в другом голосовом канале!`);

        if (!args[0]) return message.channel.send(`${client.emotes.error} - Укажите, пожалуйста, название песни!`);

        client.player.play(message, args.join(" "));
    },
};