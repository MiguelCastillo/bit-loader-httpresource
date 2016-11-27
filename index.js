var request = require("request");

function httpResource(options) {
  function resolveName(meta) {
    if (/https?:\/\//.test(meta.name)) {
      return {
        httpresource: "@httpresource",
        path: meta.name
      };
    }
  }

  function fetchResource(meta) {
    if (meta.httpresource === "@httpresource") {
      return new Promise(function(resolve, reject) {
        request(meta.path, function (error, response, body) {
          if (!error && response.statusCode === 200) {
            resolve({ source: body });
          }
          else {
            reject(error || body);
          }
        });
      });
    }
  }

  var defaults = {
    resolve: resolveName,
    fetch: fetchResource
  };

  return function(builder) {
    return builder
      .configure(defaults)
      .configure(options);
  };
}

module.exports = httpResource;
