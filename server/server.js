'use strict';
const app = require('./app.js');
const db = require('./models/index.js');

require('dotenv').config();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'http://localhost';

// Synchronize the model with the database before connecting on port
(async () => {
  await db.sequelize.sync({ force: true });
  console.log('Database & tables created!');
  app.listen(PORT, () => {
    console.log(`Server running at ${HOST}:${PORT}`);
  });
})();
