#!/usr/bin/env sh

echo installing node modules
npm install
echo finished
echo building AngularJS
cd ./node_modules/angularjs && grunt package