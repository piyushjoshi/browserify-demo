(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var temp1 = require('./temp1');
var temp2 = require('./temp2');

console.log('from main: '+temp1.getLocal());
console.log('from main: '+temp1.getLocal());
console.log('from main: '+temp1.getLocal());
console.log('from main: '+temp1.getLocal());

},{"./temp1":2,"./temp2":3}],2:[function(require,module,exports){
var local = 0;

local++;

exports.getLocal = function(){
	return local;
};

},{}],3:[function(require,module,exports){
var temp1 = require('./temp1');
var temp3 = require('./temp3');

console.log('from temp2: '+temp1.getLocal());
console.log('from temp2: '+temp1.getLocal());
console.log('from temp2: '+temp1.getLocal());
console.log('from temp2: '+temp1.getLocal());


},{"./temp1":2,"./temp3":4}],4:[function(require,module,exports){
var temp1 = require('./temp1');


console.log('from temp3: '+temp1.getLocal());
console.log('from temp3: '+temp1.getLocal());
console.log('from temp3: '+temp1.getLocal());
console.log('from temp3: '+temp1.getLocal());


},{"./temp1":2}]},{},[1]);
