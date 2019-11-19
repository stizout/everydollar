const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

















app.listen(4500, () => console.log('Server Started for EveryDollar'));