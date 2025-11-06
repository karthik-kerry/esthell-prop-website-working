const express = require("express");
const path = require("path");
const prerender = require("prerender-node");

const app = express();
app.use(prerender.set("prerenderToken", "0vMTfyVzj0Q3KwLb0aBU")); // Get from prerender.io

app.use(express.static(path.join(__dirname, "build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(8080);
