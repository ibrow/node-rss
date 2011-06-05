#  EasyRSS - Simple RSS feed parsing in Node.js 
      
  This module adds methods for simple RSS feed parsing in node.js using libxmljs.

## Requirements

EasyRSS makes use of libxmljs to parse RSS/Atom feeds. libxmljs requires `scons` to be installed prior to installing through [npm](http://npmjs.org).

### Installing `scons` through Homebrew

On Mac OS X, the easiest way to install `scons` is using [Homebrew](http://mxcl.github.com/homebrew/), a great package manager for OS X. With `brew` installed, simply open Terminal and type:

    brew install scons


### Installing `scons` through APT

On Debian based Linux distributions like Ubuntu, simply install using `apt-get` like this:

    sudo apt-get install scons

## Installation

    npm install easyrss

## Example

```
var rss = require('easyrss')
  , inspect = require('util').inspect

rss.parseURL('http://conceited.net/blog/feed', function(posts){
  console.log(inspect(posts));
});
```

## Contributors

The following are the major contributors of `node-easyrss` (in no specific order).

  * Nicholas Penree ([drudge](http://github.com/drudge))
  * Rob Searles ([ibrow](http://github.com/ibrow))

## License 

(The MIT License)

Copyright (c) 2011 Nicholas Penree &lt;drudge@conceited.net&gt;

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


