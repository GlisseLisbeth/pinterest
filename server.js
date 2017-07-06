'use strict';
const express = require('express');
const path = require("path");

const app = express();
const port = process.env.PORT || process.env.IP || 3000;
app.get('/', (req, res) => {
   res.sendFile(__dirname+'/public/index.html');
}).listen(port);

app.use('/static', express.static(path.join(__dirname,'/node_modules')));
app.use('/assets', express.static(path.join(__dirname + '/public','/assets')));
console.log('Express server started on port %s', port);
