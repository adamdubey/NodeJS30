//Name of the file: uptime.js
var os = require("os");
var value = os.uptime();
console.log("os.uptime() => " + value);
