#!/usr/bin/env node
/* jshint laxcomma:true */

// TODO add windows check
require('bashy')('cd ./node_modules/angularjs && npm install && grunt package')
  .pipe(process.stdout);