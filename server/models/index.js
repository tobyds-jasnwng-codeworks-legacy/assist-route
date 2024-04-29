'use strict';
// Connecting PostgreSQL + Sequelize ORM database
const path = require('path');
const Sequelize = require('sequelize');
require('dotenv').config({
  path: path.join(__dirname, '../.env'),
});

const db = {};
const config = {
  host: process.env.PGHOST,
  dialect: 'postgres',
  logging: process.env.NODE_ENV === 'production' ? false : true,
};

const sequelize = new Sequelize(
  process.env.PGDATABASE,
  process.env.PGUSER,
  process.env.PGPASSWORD,
  config
);

// checking connection with DB
async function connect () {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
connect();

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
