const path = require('path');
const { fetchPlaceInfo } = require('../utils/api');
const { writeJson, readJson, exists } = require('../utils/fileUtils');

async function ensureManifest(gameFolderPath, gameId, cookie) {
    const manifestPath = path.join(gameFolderPath, 'manifest.json');

    if (!exists(manifestPath)) {
        const placeInfo = await fetchPlaceInfo(gameId, cookie);
        if (placeInfo) {
            writeJson(manifestPath, placeInfo);
            return placeInfo;
        } else {
            throw new Error(`Failed to fetch place info for ${gameId}`);
        }
    }

    return readJson(manifestPath); // Return existing manifest
}

module.exports = { ensureManifest };
