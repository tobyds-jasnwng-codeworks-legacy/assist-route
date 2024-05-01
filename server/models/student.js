'use strict';

module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    additionalInfo: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    photo: {
      type: DataTypes.STRING,
    },
  });

  return Student;
};
