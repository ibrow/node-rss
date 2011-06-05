/*!
 * node-easyrss
 * Copyright(c) 2011 Nicholas Penree <drudge@conceited.net>
 * MIT Licensed
 */

var rss = require(__dirname +'/../lib/easyrss')
  , inspect = require('util').inspect

rss.parseURL('http://conceited.net/blog/feed', function(posts){
  console.log(inspect(posts));
});
