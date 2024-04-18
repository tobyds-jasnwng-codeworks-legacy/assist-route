'use strict';
//Creating a server with Express
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Assist Route home page')
  });

//get all students: GET /students
//add new student: POST /students
//delete student: DELETE /students/id


module.exports = router;