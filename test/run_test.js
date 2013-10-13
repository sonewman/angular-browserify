#!/usr/bin/env node
/* jshint laxcomma:true */
var bashy = require('bashy')
  , browserifyTest = bashy('./node_modules/.bin/browserify ./test/test.js -o ./test/test-bundle.js');

browserifyTest.pipe(process.stdout);
browserifyTest.on('end', function () {
  bashy('./node_modules/.bin/phantomjs ./test/test.js')
    .pipe(process.stdout);
});