var fs = require("fs");
var file = process.argv[2];
var buffer = fs.readFileSync(file, "utf-8");

console.log(buffer.split("\n").length - 1);