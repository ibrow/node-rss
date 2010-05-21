/**********************************************************************
example.js
Example of the node-rss feed parser

**********************************************************************/
var sys = require('sys');
var rss = require('./node-rss');


/**********************************************************************
Example One:
Getting a remote RSS feed and parsing
rss.parseURL(feed_url, use_excerpt, callback);
**********************************************************************/
// URL of the feed you want to parse
var feed_url = 'http://feeds.feedburner.com/github';

var response = rss.parseURL(feed_url, function(articles) {
    sys.puts(articles.length);
    for(i=0; i<articles.length; i++) {
	sys.puts("Article: "+i+", "+
		 articles[i].title+"\n"+
		 articles[i].link+"\n"+
		 articles[i].description+"\n"+
		 articles[i].content
		);
    }
});

/**********************************************************************
Example Two:
Getting a local RSS feed and parsing
rss.parseFile(feed_file, use_excerpt, callback);
**********************************************************************/
var response = rss.parseFile('nodeblogs.com.feed.xml', function(articles) {
    sys.puts(articles.length);
    for(i=0; i<articles.length; i++) {
	sys.puts("Article: "+i+", "+
		 articles[i].title+"\n"+
		 articles[i].link+"\n"+
		 articles[i].description+"\n"+
		 articles[i].content
		);
    }
});