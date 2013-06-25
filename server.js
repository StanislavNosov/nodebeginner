var http = require("http"),
  url = require("url");

function start(route, handle) {
  function onRequest(request, response) {
    var postData = "";
    var pathname = url.parse(request.url).pathname;

    if (pathname != '/favicon.ico') { // ignore favicon
      console.log("Request for " + pathname + " received.");

      route(handle, pathname, response, request);
    }
  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;