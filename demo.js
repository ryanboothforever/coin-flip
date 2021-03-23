const http = require("http");
const fs = require("fs");
const url = require("url");
const querystring = require("querystring");
const { lastIndexOf } = require("methods");
const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  if (page == "/") {
    fs.readFile("demofile.html", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }); 
  } else if (page == "/public/css/style.css"){
     fs.readFile("public/css/style.css", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/css" });
      res.write(data);
      res.end();
     });
  } else if (page == "/demo.js") {
    fs.readFile("demo.js", function (err, data) {
      res.writeHead(200, { "Content-Type": "text/javascript" });
      res.write(data);
      res.end();
    });
  }
});

server.listen(5004);

