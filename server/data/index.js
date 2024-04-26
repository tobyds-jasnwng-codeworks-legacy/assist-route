const seedData = require('./data');
const Student = require('../models/students');

seedData.forEach(student => {
  Student.create(student);
})

