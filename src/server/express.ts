const express = require("express");
const {resolve} = require("path");

const app = express();
const portNumber = 3000;
const sourceDir = "dist";

const indexPage = resolve(__dirname, "./dist/index.html");
app.use(express.static(sourceDir));

app.get("*", (req, res, next) => {
  console.log(req.originalUrl);
  res.sendFile(indexPage);
});

app.listen(portNumber, () => {
  console.log(`Express web server started: http://localhost:${portNumber}`);
  console.log(`Serving content from /${sourceDir}/`);
});
