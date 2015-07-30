var app = require('./lib/server')(1337);
var chalk = require('chalk');

console.log('Server running on ' + chalk.green('http://localhost:1337'));
