'use strict'
const { DataTypes } = require('sequelize')
const { sequelize } = require('./index')

// Defining the Student model for Assist Route DB
const Student = sequelize.define('Student', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  routeGo: {
    type: DataTypes.STRING
  },
  stopGo: {
    type: DataTypes.STRING
  },
  routeBack: {
    type: DataTypes.STRING
  },
  stopBack: {
    type: DataTypes.STRING
  },
  contactPerson1: {
    type: DataTypes.STRING,
    allowNull: false
  },
  contactPerson1Phone: {
    type: DataTypes.STRING,
    allowNull: false
  },
  contactPerson2: {
    type: DataTypes.STRING
  },
  contactPerson2Phone: {
    type: DataTypes.STRING
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  additionalInfo: {
    type: DataTypes.STRING
  },
  photo: {
    type: DataTypes.STRING
  }

});

// Synchronize the model with the database
(async () => {
  await sequelize.sync()
    .then(() => {
      console.log('Database & tables created!')
    })
})()

module.exports = Student
