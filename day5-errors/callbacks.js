const fs = require("fs");

function nSCallback(error, data) {
  if (error) {
    console.error("Error : ", error);
    return;
  }
  console.log(data);
}
fs.readFile("file_that_exists", nSCallback);
fs.readFile("file_does_not_exists", nSCallback);
