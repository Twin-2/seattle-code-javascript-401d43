'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3333;

app.use(express.static('./public'));

app.get('/', (req, res) => {
  res.status(200).send('hello world - homepage');
})

app.listen(PORT, () => {
  console.log(`server up: ${PORT}`);
});