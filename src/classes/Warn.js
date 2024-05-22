async function Warn(options) {
    if (!options.memberId || !options.guildId) {
        throw new Error('Missing memberId or guildId');
    }

    db.setName(options.guildId);

    let guildId = options.guildId;
    let memberId = options.memberId;
    let n = options.number || 1;

    if (!Array.isArray(db.data)) { // Verifica si db.data es un array
        db.data = []; // Si no lo es, inicialízalo como un array vacío
    }

    let existingEntry = db.data.find(x => x.memberId === memberId && x.guildId === guildId);

    if (existingEntry) {
        existingEntry.number += n;
    } else {
        let dataToSave = {
            memberId,
            guildId,
            number: n
        };
        db.data.push(dataToSave);
    }

    await db.save();
    return true;
}

module.exports = Warn;
