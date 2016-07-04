var GameServer = require('./GameServer');

var showConsole = true;

console.log("[Game] Sliger - An open source Agar.io server implementation");

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

var gameServer = new GameServer();
gameServer.start();
gameServer.commands = Commands.list;
if (showConsole) {
    var readline = require('readline');
    var in_ = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    setTimeout(prompt, 100);
}

function prompt() {
    in_.question(">", function(str) {
        parseCommands(str);
        return prompt();
    });
}

function parseCommands(str) {

    gameServer.log.onCommand(str);
    if (str === '')
        return;

    var split = str.split(" ");

    var first = split[0].toLowerCase();

    var execute = gameServer.commands[first];
    if (typeof execute != 'undefined') {
        execute(gameServer, split);
    } else {
        console.log("[Console] Invalid Command!");
    }
}
