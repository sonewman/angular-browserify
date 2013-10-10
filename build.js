#!/usr/bin/env node
/* jshint laxcomma:true */

// TODO add windows check
var spawnify = require('./lib/spawnify');

spawnify('cd ./node_modules/angularjs && grunt package')
  .pipe(process.stdout);