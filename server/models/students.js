'use strict';

module.exports = (sequelize, DataTypes) => {
  const Student = sequelize.define('Student', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    morningRoute: {
      type: DataTypes.STRING,
    },
    morningStop: {
      type: DataTypes.STRING,
    },
    eveningRoute: {
      type: DataTypes.STRING,
    },
    eveningStop: {
      type: DataTypes.STRING,
    },
    contactPerson1: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contactPerson1Phone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contactPerson2: {
      type: DataTypes.STRING,
    },
    contactPerson2Phone: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    additionalInfo: {
      type: DataTypes.STRING,
    },
    photo: {
      type: DataTypes.STRING,
    },
  });
  return Student;
};
