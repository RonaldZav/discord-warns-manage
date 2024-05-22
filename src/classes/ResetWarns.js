async function ResetWarns(guildId) {
    if (!guildId) {
        throw new Error('Missing guildId');
    }

    db.setName(guildId);
    db.data = [];

    await db.save();
    return true;
}

module.exports = ResetWarns;
