var GameServer = require('./GameServer');

// Init variables
var showConsole = true;

// Start msg
console.log("[Game] Sliger - An open source Agar.io server implementation");

// Handle arguments
process.argv.forEach(function(val) {
    if (val == "--noconsole") {
        showConsole = false;
    } else if (val == "--help") {
        console.log("Proper Usage: node index.js");
        console.log("    --noconsole         Disables the console");
        console.log("    --help              Help menu.");
        console.log("");
    }
});