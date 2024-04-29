'use strict';
const express = require('express');
const cors = require('cors');
const router = require('./router.js');
const db = require('./models/index.js');
require('dotenv').config();

const app = express();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'http://localhost';

app.use(cors());
app.use(express.json());
app.use(router);

// Synchronize the model with the database before connecting on port
(async () => {
  await db.sequelize.sync();
  console.log('Database & tables created!');
  app.listen(PORT, () => {
    console.log(`Server running at ${HOST}:${PORT}`);
  });
})();
