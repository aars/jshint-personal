var path   = require('path');
var expandTilde = require('expand-tilde');
var Module = require('module');
var originalRequire = Module.prototype.require;

var messagesDir  = '~/.config/jshint/messages';
var messagesFile = 'offensive.js';

function messagesPath() {
  return path.normalize(expandTilde(messagesDir)) + '/' + messagesFile;
}

Module.prototype.require = function () {
  var args = Array.prototype.slice.call(arguments);
  if (args[0].match(/messages\.js$/)) {
    args[0] = messagesPath();
  }
  return originalRequire.apply(this, args);
};
