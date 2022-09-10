var http = require("http")

http.createServer(function (request, response) {

   // Send the HTTP header
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'})

   // Send the response body as "Los Angeles Rams are Super Bowl LVI Champs!"
   response.end('Los Angeles Rams are Super Bowl LVI Champs!\n')
}).listen(3000)

// Console will print the message
console.log('Server running')
