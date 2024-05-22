const { Database } = require('@ronaldzav/local-storage');

const Warn = require('./classes/Warn');
const GuildWarns = require('./classes/GuildWarns');
const UnWarn = require('./classes/UnWarn');
const ResetWarns = require('./classes/ResetWarns');

global.GuildWarns = GuildWarns;

function findEntry(data, memberId, guildId) {
    for (const entry of data) {
        if (entry.memberId === memberId && entry.guildId === guildId) {
            return entry;
        }
    }
    return null;
}

global.findEntry = findEntry;

let db = new Database()
.setFolder('./storage/warns/')

global.db = db;

module.exports = { Warn, GuildWarns, UnWarn, ResetWarns };
