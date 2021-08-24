module.exports = async (client) => {
    console.log(`Вы вошли как ${client.user.username}. Готов на ${client.guilds.cache.size} серверов, всего ${client.users.cache.size} пользователей`);

    client.user.setActivity(client.config.discord.activity);
};