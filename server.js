'use strict';
const express = require('express');
const path = require("path");

const app = express();

app.get('/', (req, res) => {
   res.sendFile(__dirname+'/index.html');
}).listen(process.env.PORT, process.env.IP);

app.use('/static', express.static(path.join(__dirname,'node_modules')));
app.use('/static', express.static(path.join(__dirname,'assets')));
console.log('Express server started on port %s', process.env.PORT,process.env.IP);
