//Name of the file: tmpdir.js
var os = require("os");
var value = os.tmpdir();
console.log("os.tmpdir() => " + value);
