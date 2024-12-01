const fs = require("fs");
const path = require("path");
const { getSubdirectories, readJson, exists } = require("../utils/fileUtils");
const { ensureManifest } = require("./manifestBuilder");

async function buildLua(clientDir, cookie, buildVersion, buildTimestamp) {
	const gamesDir = path.join(clientDir, "games");
	const loaderPath = path.join(clientDir, "loader.luau");
	const buildPath = path.join(clientDir, "build.lua");

	let buildContent = `-- Auto-generated build.lua\n`;
	buildContent += `-- Build Version: ${buildVersion}\n`;
	buildContent += `-- Last Updated: ${buildTimestamp}\n\n`;

	let gameTableContent = "local games = {}\n\n";

	// Add loader.luau content
	if (exists(loaderPath)) {
		const loaderCode = fs.readFileSync(loaderPath, "utf8");
		buildContent += `-- Loader Code\n\n${loaderCode.trim()}\n\n`;
	}

	// Process each game folder
	const gameFolders = getSubdirectories(gamesDir);
	for (const gameId of gameFolders) {
		const gameFolderPath = path.join(gamesDir, gameId);
		const indexFilePath = path.join(gameFolderPath, "index.lua");

		const manifest = await ensureManifest(gameFolderPath, gameId, cookie);
		const gameName = manifest.name || `Game ID: ${gameId}`;

		if (exists(indexFilePath)) {
			const gameCode = fs.readFileSync(indexFilePath, "utf8");

			gameTableContent += `
games[${gameId}] = function()
    -- ${gameName}
    ${gameCode.trim()}
end
`;
		}
	}

	// Add dynamic loader logic
	buildContent += `
-- Dynamic Loader
${gameTableContent}

local handler = games[game.PlaceId]
if handler then
    handler()
else
    print("No code found for this PlaceId.")
end
`;

	fs.writeFileSync(buildPath, buildContent);
	console.log("build.lua has been successfully created.");
}

module.exports = { buildLua };
