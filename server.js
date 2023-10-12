'use strict';

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send 'What is IAM
Identity access management lets administrators authorize who can take action on specific resources giving you full control and visibility to mange google cloud resources centrally  !!');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
