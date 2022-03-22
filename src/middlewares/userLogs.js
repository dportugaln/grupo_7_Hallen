const fs = require("fs");
const path = require("path");

const logPath = path.join(__dirname, "./logs/userLogs.txt");

function userLog(req, res, next) {
  fs.appendFileSync("El usuario ingreso en: " + req.url + " " + "\n");
  next();
}

module.exports = userLog;
