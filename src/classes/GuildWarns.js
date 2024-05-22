async function GuildWarns(guildId) {
    if (!guildId) {
        throw new Error('Missing guildId');
    }

    db.setName(guildId);

    if (!db._data) {
        db._data = [];
    }

    return db._data;
}

module.exports = GuildWarns;
