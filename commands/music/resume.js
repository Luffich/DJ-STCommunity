module.exports = {
    name: 'resume',
    aliases: [],
    category: 'Music',
    utilisation: '{prefix}resume',

    execute(client, message) {
        if (!message.member.voice.channel) return message.channel.send(`${client.emotes.error} - Вы не находитесь в голосовом канале!`);

        if (message.guild.me.voice.channel && message.member.voice.channel.id !== message.guild.me.voice.channel.id) return message.channel.send(`${client.emotes.error} - Вы находитесь в другом голосовом канале!`);

        if (!client.player.getQueue(message)) return message.channel.send(`${client.emotes.error} - В данный момент нет музыки!`);

        if (!client.player.getQueue(message).paused) return message.channel.send(`${client.emotes.error} - Музыка уже играет!`);

        const success = client.player.resume(message);

        if (success) message.channel.send(`${client.emotes.success} - Песня ${client.player.getQueue(message).playing.title} возобновлена!`);
        message.react('✅');
    },
};