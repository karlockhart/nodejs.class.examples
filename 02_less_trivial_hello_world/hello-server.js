// Less trivial hello world.

// Require the http module, a basic http server. https://nodejs.org/api/http.html
var http = require('http');

// We will need to provide a port to serve content, on *nix systems < 1024 require permissions.
const PORT = 3000;

// Create a handler for the hello request.
var helloHandler = function(request, response) {
  // End the exchange by responding with our hello page.
  response.end(
    "<html><body><h3>Hello, World!!</h3></body></html>"
  );
}

// Create a http server and set our handler to deal with incoming connections.
var server = http.createServer(helloHandler);

// And now start listening for connections.
server.listen(PORT, function(){
  // Output a message with the web address of the test server.
  console.log("Hello World server running on: http://localhost:%s", PORT);
});

// The application will continue to run until all outstanding tasks have been handled.
