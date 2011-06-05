/*!
 * node-easyrss
 * Copyright(c) 2011 Nicholas Penree <drudge@conceited.net>
 * MIT Licensed
 */

var rss = require(__dirname +'/../lib/easyrss')
  , inspect = require('util').inspect

rss.parseURL('http://conceited.net/blog/feed', {
  // there are custom properties we can define for each item in the rss feed 
  type: 'post',
  source: 'conceited.blog', 

  // callback with all the items parsed
  cb: function(posts) {
    var articles =  posts.sort(function (a, b) {
      // sort desc
      if (a.pubDate > b.pubDate) return -1;
      if (a.pubDate < b.pubDate) return 1;
      return 0;
    });

    console.log('Articles:');
    console.log(inspect(articles));
  }
});

