# bit-loader-httpresource

[![Greenkeeper badge](https://badges.greenkeeper.io/MiguelCastillo/bit-loader-httpresource.svg)](https://greenkeeper.io/)
bit-loader plugin for loading http resources. Meaning that any module dependencies that are http resources will be downloaded and treated like any other local dependency.

# usage

## install

```
$ npm install --save-dev bit-loader-httpresource
```

## bit-bundler

``` javascript
var Bitbundler = require("bit-bundler");
var jsPlugin = require("bit-loader-js");
var httpResourcePlugin = require("bit-loader-httpresource");

var bitbundler = new Bitbundler({
  loader: {
    plugins: [
      jsPlugin(),
      httpResourcePlugin()
    ]
  }
});

bitbundler.bundle({
  src: "in.js",
  dest: "out.js"
});
```
