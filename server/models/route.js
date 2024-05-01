'use strict';

module.exports = (sequelize, DataTypes) => {
  const Route = sequelize.define('Route', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    isMorning: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  });
  return Route;
};
