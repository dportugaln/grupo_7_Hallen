const fs = require("fs");
const path = require("path");

const logPath = path.join(__dirname, "./logs/userLogs.txt");

function adminLog(req, res, next) {
  const admins = ["Ada", "Greta", "Vim", "Tim"];
  //   fs.appendFileSync("El usuario ingreso en: " + req.url + " " + "\n");
  next();
}

module.exports = adminLog;
