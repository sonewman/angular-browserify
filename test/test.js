var angularBrowserify = require('../');
var angularReq = function(moduleName) {
  return function(){ angularBrowserify.module(moduleName); };
};
test('Angular browserify packaging', function (t) {
  
  t.ok(angularBrowserify, "Angular must be defined");
  t.ok(angular, "Angular global variable must be defined");
  t.equal(angular, angularBrowserify, "Angular export must be equal global variable");
  t.ok(window.angular, "window.angular global variable must be defined");
  t.end();
});
