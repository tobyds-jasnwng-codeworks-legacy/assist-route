'use strict';
const express = require('express');
const app = express();
const router = require('./router.js');
const cors = require('cors');
const db = require('./models/index.js')

app.use(cors());
app.use(express.json());
app.use(router);

const port = 3000;


// Synchronize the model with the database before connecting on port 
(async () => {
  await db.sequelize.sync();
  console.log('Database & tables created!');
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
  });
})();

