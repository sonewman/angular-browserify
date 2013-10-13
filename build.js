#!/usr/bin/env node
/* jshint laxcomma:true */

// TODO add windows check
var b = require('bashy');
var c = b('cd ./node_modules/angularjs && npm install && bower install && grunt package');
c.on('error', function (err) {
  console.log('err', err);
});
c.pipe(process.stdout);