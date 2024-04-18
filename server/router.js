'use strict';

// Creating a server with Express
const express = require('express');
const router = express.Router();
const studentsController = require('./controllers/students');

// get all students: GET /students
router.get('/students', studentsController.getAllStudents);

// add new student: POST /students
router.post('/students', studentsController.addStudent);

// delete student: DELETE /students/id
router.delete('/students/:id', studentsController.deleteStudent);

module.exports = router;