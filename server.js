'use strict';
const express = require('express'); //Framework Express

const app = express();

app.use('/',express.static('public'));

app.listen(3000, () => {
  console.log('Server running on port 3000!');
});
