module.exports = logs;
var chalk = require('chalk');

function logs (x, y) {
  var date = new Date().toUTCString();
  var strang =  '[' + date + '] "' + chalk.cyan(x.method) + ' '+ chalk.cyan(x.url) + '" "' + x.headers["user-agent"] + '"';
  console.log(strang);
  console.log(typeof y);
  return strang;

};
