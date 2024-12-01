function log(message) {
    console.log(`[LOG] ${message}`);
}

function warn(message) {
    console.warn(`[WARN] ${message}`);
}

function error(message) {
    console.error(`[ERROR] ${message}`);
}

module.exports = { log, warn, error };
