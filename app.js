var port = process.env.PORT || 1337;
var app = require('./lib/server')(port);
var chalk = require('chalk');

console.log('Server running on ' + chalk.green('http://localhost:' + port));
