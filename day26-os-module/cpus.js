//Name of the file : cpus.js
var os = require("os");
var value = os.cpus();
console.log("os.cpus() ==> " + JSON.stringify(value));
