'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

var os = require("os");
var hostname = os.hostname();

// App
const app = express();
app.get('/', (req, res) => {
<<<<<<< HEAD
  res.send(`Hello world *DEV* v2.8 from server: ${hostname}`);
=======
  res.send(`Hello world !DEV! v3.0 from server: ${hostname}`);
>>>>>>> 99015999031e8756ac3e76776712a155849c5825
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
