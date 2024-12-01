require('dotenv').config();
const path = require('path');
const { buildLua } = require('./builders/luaBuilder');
const { updateVersion } = require('./utils/versionUtils');

const clientDir = path.join(__dirname, '/client');
const robloxCookie = process.env.ROBLOX_COOKIE;

// Automatically update the version
const buildVersion = updateVersion(); // Increment the patch version
const buildTimestamp = new Date().toISOString();

(async () => {
    try {
        await buildLua(clientDir, robloxCookie, buildVersion, buildTimestamp);
    } catch (err) {
        console.error(`[ERROR] ${err.message}`);
    }
})();
