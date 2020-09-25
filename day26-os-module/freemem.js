//Name of the file: freemem.js
var os = require("os");
var value = os.freemem();
console.log("os.freemem() => " + value);
