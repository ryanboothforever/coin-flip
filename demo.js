const http = require("http");
const fs = require("fs");
const url = require("url");
const querystring = require("querystring");
const { lastIndexOf } = require("methods");
const server = http.createServer((req, res) => {
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  const defaultHeaders = { 'Access-Control-Allow-Origin': '*' };
  if (page == "/") {
    fs.readFile("demofile.html", function (err, data) {
      res.writeHead(200, { ...defaultHeaders, "Content-Type": "text/html" });
      res.write(data);
      res.end();
    });
  } else if (page == "/public/css/style.css") {
    fs.readFile("public/css/style.css", function (err, data) {
      res.writeHead(200, { ...defaultHeaders, "Content-Type": "text/css" });
      res.write(data);
      res.end();
    });
  } else if (page == "/frontend.js") {
    fs.readFile("public/js/frontend.js", function (err, data) {
      console.log(data);
      res.writeHead(200, { ...defaultHeaders, "Content-Type": "text/javascript" });
      res.write(data);
      res.end();
    });
  } else if (page === '/coinflip') {
    /** TODO:
     * actually 'flip' coin and send back result
     */
    res.end(JSON.stringify({ result: 'heads' }));
  } else {
    res.writeHead(404);
    res.write(JSON.stringify({ msg: 'NOT FOUND' }));
    res.end();
  }
});

server.listen(5004, () => console.log('Listening on port 5004'));

