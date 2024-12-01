const fs = require('fs');
const path = require('path');

// Read JSON from a file
function readJson(filePath) {
    if (fs.existsSync(filePath)) {
        return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    }
    return null;
}

// Write JSON to a file
function writeJson(filePath, data) {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
}

// Check if a file or folder exists
function exists(filePath) {
    return fs.existsSync(filePath);
}

// Get all subdirectories of a directory
function getSubdirectories(dirPath) {
    return fs
        .readdirSync(dirPath)
        .filter((file) => fs.statSync(path.join(dirPath, file)).isDirectory());
}

module.exports = { readJson, writeJson, exists, getSubdirectories };
