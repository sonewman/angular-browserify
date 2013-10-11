#!/usr/bin/env node
/* jshint laxcomma:true */
var spawnify = require('../lib/spawnify')
  , browserifyTest = spawnify('./node_modules/.bin/browserify ./test/test.js -o ./test/test-bundle.js');

browserifyTest.pipe(process.stdout);
browserifyTest.on('end', function () {
  spawnify('./node_modules/.bin/phantomjs ./test/test.js')
    .pipe(process.stdout);
});