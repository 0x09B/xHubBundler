const fs = require('fs');
const path = require('path');

// Path to the version.json file
const versionFilePath = path.join(__dirname, '../version.json');

// Read the current version from version.json
function getCurrentVersion() {
    if (fs.existsSync(versionFilePath)) {
        const versionData = JSON.parse(fs.readFileSync(versionFilePath, 'utf8'));
        return versionData.version || '0.0.0';
    }
    return '0.0.0'; // Default version if file does not exist
}

// Increment the version based on semantic versioning
function incrementVersion(version, type = 'patch') {
    const [major, minor, patch] = version.split('.').map(Number);

    switch (type) {
        case 'major':
            return `${major + 1}.0.0`;
        case 'minor':
            return `${major}.${minor + 1}.0`;
        case 'patch':
        default:
            return `${major}.${minor}.${patch + 1}`;
    }
}

// Update the version in version.json
function updateVersion(type = 'patch') {
    const currentVersion = getCurrentVersion();
    const newVersion = incrementVersion(currentVersion, type);

    fs.writeFileSync(versionFilePath, JSON.stringify({ version: newVersion }, null, 2), 'utf8');
    console.log(`Version updated to ${newVersion}`);
    return newVersion;
}

module.exports = { getCurrentVersion, updateVersion };
