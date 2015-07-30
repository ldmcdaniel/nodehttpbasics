var http = require('http');
var https = require('https');
var log = require('./log');
var request = require('request');
var $ = require('cheerio');

module.exports = function (port) {
  http.createServer(function (req, res) {
    if (req.method === 'GET' && req.url === '/hello') {
      res.end('Hellow World!');

    } else if(req.method === 'GET' && req.url === '/news'){
      request.get('http://github.com', function(err, xhr, body) {
        res.end(body);
      })

    } else if (req.method === 'GET' && req.url === '/starwarsmovies') {
      request.get ('http://swapi.co/api/films/', function (err, xhr, body) {
        var data = JSON.parse(body);
        data.results.forEach(function(r) {
          res.write(r.title + '\n');
        });
        res.end();
      });

    } else if (req.method === 'GET' && req.url === '/weather') {
       res.writeHeader(200, {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      });

      https.get('https://api.forecast.io/forecast/eb1ecbc41ee0a2cd56cbd3a1ec176f46/37.8267,-122.423')
        .on('response', function (xhr) {
          xhr.pipe(res);
      });

     } else {
      res.writeHead(403);
      res.end('Access Denied!');
    }
    log(req, res);
  }).listen(port);
}


