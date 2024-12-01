const axios = require('axios');

// Roblox API URL
const robloxApiUrl = "https://games.roblox.com/v1/games/multiget-place-details?placeIds=";

// Fetch place info from Roblox API
async function fetchPlaceInfo(placeId, cookie) {
    try {
        const response = await axios.get(`${robloxApiUrl}${placeId}`, {
            headers: { Cookie: cookie },
        });
        return response.data[0] || null; // Return first result
    } catch (error) {
        console.error(`Failed to fetch info for placeId ${placeId}:`, error.message);
        return null;
    }
}

module.exports = { fetchPlaceInfo };
