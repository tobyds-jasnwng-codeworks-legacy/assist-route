'use strict';
// Connecting PostgreSQL + Sequelize ORM database
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
require('dotenv').config({
  path: path.join(__dirname, '../.env'),
});

const db = {};
const config = {
  host: process.env.PGHOST,
  dialect: 'postgres',
  logging: false,
};

const sequelize = new Sequelize(
  process.env.NODE_ENV === 'test'
    ? process.env.PGDATABASE_TEST
    : process.env.PGDATABASE,
  process.env.PGUSER,
  process.env.PGPASSWORD,
  config
);

const files = fs.readdirSync(__dirname);

for (const file of files) {
  if (file !== 'index.js') {
    const model = require(path.join(__dirname, file))(
      sequelize,
      Sequelize.DataTypes
    );
    db[model.name] = model;
  }
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
