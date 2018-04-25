const express = require('express');
const { resolve } = require('path');

const app = express();
const portNumber = 3000;
const sourceDir = 'dist';

const indexPage = resolve(__dirname, './index.html');
app.use(express.static(sourceDir));
app.get('/api',(req,res) => {
  res.json({
    value:10,
  });
});
app.get('*', (req, res, next) => {
  console.log(req.originalUrl);
  res.sendFile(indexPage);
});

app.listen(portNumber, () => {
  console.log(`Express web server started: http://localhost:${portNumber}`);
  console.log(`Serving content from /${sourceDir}/`);
});
