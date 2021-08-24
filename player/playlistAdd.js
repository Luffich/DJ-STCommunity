module.exports = (client, message, queue, playlist) => {
    message.channel.send(`${client.emotes.music} - ${playlist.title} добавлен в очередь (**${playlist.tracks.length}** песни) !`);
};