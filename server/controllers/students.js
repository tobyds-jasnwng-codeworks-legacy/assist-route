'use strict';
const Student = require ('../models/students');

async function getAllStudents (req, res) {
  try {
    const students = await Student.findAll();
    res.status(200).json(students); // request succeeded
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Error while fetching students' }); // unexpected condition on the server
  }
};

async function addStudent (req, res) {
  try {
    const { firstName, lastName, routeGo, stopGo, routeBack, stopBack, contactPerson1, contactPerson1Phone, contactPerson2, contactPerson2Phone, address, additionalInfo, photo } = req.body; // extract data from the req. body using destructuring assignment
    const newStudent = await Student.create({ firstName, lastName, routeGo, stopGo, routeBack, stopBack, contactPerson1, contactPerson1Phone, contactPerson2, contactPerson2Phone, address, additionalInfo, photo });
    res.status(201).json(newStudent); // request fulfilled, new resource created.
  } catch (error) {
    console.log('Missing parameters', error);
    return res.status(400).json({ error: 'Request cannot be fulfilled, missing parameters' }); // client-side errors
  }
};

async function deleteStudent (req, res) {
  try {
    res.status(204).send('Deleted');
  } catch (error) {
    console.log(error);
    return res.status(400).json({ error: 'Delete request cannot be fulfilled' }); // client-side errors
  }
};

module.exports = {
  getAllStudents,
  addStudent,
  deleteStudent
}
