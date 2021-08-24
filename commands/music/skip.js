module.exports = {
    name: 'skip',
    aliases: ['sk'],
    category: 'Music',
    utilisation: '{prefix}skip',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Вы не находитесь в голосовом канале!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Вы находитесь в другом голосовом канале!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - В данный момент нет музыки!`);

        const success = client.player.skip(message);

        if (success) message.channel.send(`${client.emotes.success} - Текущая песня была ** пропущена **!`);
        message.react('✅');
    },
};