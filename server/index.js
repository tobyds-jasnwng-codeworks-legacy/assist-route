'use strict';
const express = require('express');
const app = express();
const router = require('./router.js');

app.use(express.json());
app.use(router);

const port = 3000;

app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`);
});