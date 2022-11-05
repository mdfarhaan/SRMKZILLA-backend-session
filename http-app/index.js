const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello World");
    res.end();
  } else if (req.url === "/read") {
    fs.readFile("marks.txt", "utf8", (err, data) => {
      if (err) {
        console.log("Error: ", err);
      } else {
        res.write(data);
        res.end();
      }
    });
  }
});

server.listen(5000, () => {
  console.log("Server listening on port 5000");
});
