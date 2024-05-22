async function UnWarn(options) {
    const { memberId, guildId, number = 1 } = options;

    if (!memberId || !guildId) {
        throw new Error('Missing memberId or guildId');
    }

    db.setName(guildId);

    if (!db.data) {
        db.data = [];
    }

    const existingEntryIndex = db.data.findIndex(x => x.memberId === memberId && x.guildId === guildId);

    if (existingEntryIndex !== -1) {
        db.data[existingEntryIndex].number -= number;

        if (db.data[existingEntryIndex].number <= 0) {
            db.data.splice(existingEntryIndex, 1);
        }

        await db.save();
        return true;
    } else {
        console.error('No existing entry found for memberId:', memberId, 'and guildId:', guildId);
        return false;
    }
}

module.exports = UnWarn;
