const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello from kzilla");
});

app.put("/", (req, res) => {
  res.send("kzilla is the best");
});

app.listen(3000, () => {
  console.log("Server Listening on port 3000");
});
